import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 60, damping: 20, mass: 0.8 });
  const rounded = useTransform(spring, (v) =>
    to % 1 === 0 ? Math.round(v).toString() : v.toFixed(1),
  );
  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, mv, to]);
  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

const STATS = [
  { label: "CGPA", value: 8.0, suffix: " / 10" },
  { label: "Core Domains", value: 5, suffix: "" },
  { label: "Years Coding", value: 3, suffix: "+" },
  { label: "Focus Areas", value: 3, suffix: "" },
];

export function Stats() {
  return (
    <section
      aria-label="Key metrics"
      className="relative border-y border-[oklch(0.55_0.25_260/0.15)] bg-[oklch(0.10_0.04_260/0.5)] px-6 py-14 backdrop-blur-sm"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col items-start"
          >
            <div
              aria-hidden
              className="absolute -left-2 top-0 h-full w-px"
              style={{
                background:
                  "linear-gradient(180deg, transparent, oklch(0.55 0.25 260 / 0.5), transparent)",
              }}
            />
            <div className="display text-gradient text-5xl font-black leading-none md:text-6xl">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-3 text-[10px] uppercase tracking-[0.35em] text-[oklch(0.72_0.03_260)]">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}