import { motion } from "framer-motion";

const ITEMS = [
  "PYTHON",
  "NLP",
  "MACHINE LEARNING",
  "DEEP LEARNING",
  "MONGODB",
  "DATA PIPELINES",
  "MODEL EVALUATION",
  "AI ENGINEERING",
];

export function Marquee() {
  const row = [...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <section
      aria-hidden
      className="relative -my-6 overflow-hidden border-y border-[oklch(0.55_0.25_260/0.2)] bg-[oklch(0.09_0.04_260/0.7)] py-6"
    >
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-33.333%"] }}
        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
      >
        {row.map((t, i) => (
          <span
            key={i}
            className="display mx-8 flex items-center gap-8 text-3xl uppercase tracking-[0.3em] text-[oklch(0.9_0.02_260)] md:text-5xl"
          >
            {t}
            <span
              className="inline-block h-2 w-2 rotate-45"
              style={{
                background:
                  i % 2 === 0
                    ? "oklch(0.55 0.25 260)"
                    : "oklch(0.55 0.22 25)",
                boxShadow: "0 0 12px currentColor",
              }}
            />
          </span>
        ))}
      </motion.div>
    </section>
  );
}