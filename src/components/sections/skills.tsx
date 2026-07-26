"use client";

import { motion } from "framer-motion";
import { SKILL_CATEGORIES } from "@/data/content";
import { easeOut } from "@/lib/motion";

export function Skills() {
  return (
    <section id="skills" className="px-5 py-24 md:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-[11px] uppercase tracking-[0.35em] text-[var(--accent)]">
          02 — Skills
        </p>
        <h2 className="font-display max-w-2xl text-3xl font-semibold md:text-5xl">
          Tools I use to deliver.
        </h2>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.7, ease: easeOut }}
              className="glass group rounded-3xl p-6"
            >
              <h3 className="font-display text-lg font-semibold">{cat.name}</h3>
              <ul className="mt-5 space-y-4">
                {cat.skills.map((s) => (
                  <li key={s.name}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span>{s.name}</span>
                      <span className="text-[11px] text-[var(--muted)]">
                        {s.level}%{s.years ? ` · ${s.years}` : ""}
                      </span>
                    </div>
                    <div className="h-1 overflow-hidden rounded-full bg-[var(--border)]">
                      <motion.div
                        className="h-full rounded-full bg-[var(--accent)]"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: easeOut, delay: 0.1 }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
