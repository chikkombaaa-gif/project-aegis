"use client";

const ITEMS = [
  "Python",
  "NLP",
  "Scikit-learn",
  "Supervised ML",
  "MongoDB",
  "Feature Engineering",
  "Cross-Validation",
  "Pandas",
  "NumPy",
  "Git",
  "SQL",
  "Deep Learning",
];

export function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="relative overflow-hidden border-y border-[var(--border)] py-4" aria-hidden>
      <div
        className="flex w-max gap-10 pr-10"
        style={{ animation: "marquee 32s linear infinite" }}
      >
        {row.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="text-[11px] uppercase tracking-[0.35em] text-[var(--muted)]"
          >
            {t}
            <span className="ml-10 text-[var(--accent)]">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
