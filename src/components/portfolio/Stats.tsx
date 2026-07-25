import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 55, damping: 22, mass: 0.9 });
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
  { label: "Core Domains", value: 6, suffix: "" },
  { label: "Years Building", value: 3, suffix: "+" },
  { label: "Systems in Focus", value: 3, suffix: "" },
];

export function Stats() {
  return (
    <section
      aria-label="Key metrics"
      className="relative border-y border-[oklch(0.55_0.2_250/0.12)] bg-[oklch(0.09_0.04_260/0.6)] px-6 py-20 backdrop-blur-md"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-12 md:grid-cols-4 md:gap-10">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col items-start pl-1"
          >
            <div
              aria-hidden
              className="absolute -left-1 top-0 h-full w-px"
              style={{
                background:
                  "linear-gradient(180deg, transparent, oklch(0.62 0.14 250 / 0.55), transparent)",
              }}
            />
            <div className="display text-gradient text-5xl leading-none tracking-tight md:text-6xl lg:text-7xl">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-4 text-[10px] font-medium uppercase tracking-[0.4em] text-[oklch(0.7_0.03_260)]">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
