"use client";

import { motion } from "framer-motion";
import { TIMELINE } from "@/data/content";
import { easeOut } from "@/lib/motion";

export function Experience() {
  return (
    <section id="experience" className="px-5 py-24 md:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-[11px] uppercase tracking-[0.35em] text-[var(--accent)]">
          04 — Experience
        </p>
        <h2 className="font-display max-w-2xl text-3xl font-semibold md:text-5xl">
          Path so far.
        </h2>

        <div className="relative mt-14 space-y-8 border-l border-[var(--border)] pl-8">
          {TIMELINE.map((item, i) => (
            <motion.div
              key={`${item.title}-${i}`}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.7, ease: easeOut }}
              className="relative"
            >
              <span className="absolute -left-[2.4rem] top-1.5 h-3 w-3 rounded-full border-2 border-[var(--accent)] bg-[var(--bg)]" />
              <div className="glass rounded-3xl p-6">
                <div className="flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">
                  <span>{item.type}</span>
                  <span>·</span>
                  <span>{item.period}</span>
                </div>
                <h3 className="font-display mt-2 text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-[var(--muted)]">{item.org}</p>
                <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="text-[var(--accent)]">–</span>
                      {b}
                    </li>
                  ))}
                </ul>
                {item.tech && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[var(--border)] px-2.5 py-0.5 text-[10px] uppercase tracking-wider"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
