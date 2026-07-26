import { motion, useReducedMotion } from "framer-motion";

const ITEMS = [
  "Python",
  "NLP",
  "Machine Learning",
  "MongoDB",
  "Scikit-learn",
  "Feature Engineering",
  "Cross-Validation",
  "Model Evaluation",
  "Data Pipelines",
  "Clean Code",
  "Git",
  "Pandas",
  "NumPy",
  "Production ML",
  "SQL",
  "System Design thinking",
];

export function Marquee() {
  const reduced = useReducedMotion();
  const row = [...ITEMS, ...ITEMS];

  return (
    <div className="relative overflow-hidden border-y border-[oklch(0.55_0.2_250/0.1)] bg-[oklch(0.09_0.04_260/0.55)] py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-[oklch(0.09_0.04_260)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-[oklch(0.09_0.04_260)] to-transparent" />
      <motion.div
        className="flex w-max gap-12 whitespace-nowrap"
        animate={reduced ? undefined : { x: ["0%", "-50%"] }}
        transition={{
          duration: 55,
          ease: "linear",
          repeat: Infinity,
        }}
        whileHover={reduced ? undefined : { animationPlayState: "paused" as never }}
        style={reduced ? undefined : { willChange: "transform" }}
      >
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="text-[11px] font-medium uppercase tracking-[0.38em] text-[oklch(0.68_0.04_260)] transition-colors hover:text-white"
          >
            {item}
            <span className="ml-12 text-[oklch(0.5_0.12_250)]">·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
