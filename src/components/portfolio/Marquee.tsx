import { motion } from "framer-motion";

const ITEMS = [
  "Python",
  "NLP",
  "Machine Learning",
  "MongoDB",
  "Scikit-learn",
  "Deep Learning",
  "Feature Engineering",
  "Model Evaluation",
  "Data Pipelines",
  "Clean Code",
  "Git",
  "Pandas",
  "NumPy",
  "Production ML",
];

export function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="relative overflow-hidden border-y border-[oklch(0.55_0.25_260/0.12)] bg-[oklch(0.10_0.04_260/0.55)] py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[oklch(0.10_0.04_260)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[oklch(0.10_0.04_260)] to-transparent" />
      <motion.div
        className="flex w-max gap-10 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
      >
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="text-[11px] uppercase tracking-[0.35em] text-[oklch(0.72_0.04_260)]"
          >
            {item}
            <span className="ml-10 text-[oklch(0.55_0.15_260)]">·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
