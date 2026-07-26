"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { WRITING } from "@/data/content";
import { easeOut } from "@/lib/motion";

export function Writing() {
  return (
    <section id="writing" className="px-5 py-24 md:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-[11px] uppercase tracking-[0.35em] text-[var(--accent)]">
          05 — Writing
        </p>
        <h2 className="font-display max-w-2xl text-3xl font-semibold md:text-5xl">
          Notes & research.
        </h2>

        <div className="mt-14 grid gap-4">
          {WRITING.map((w, i) => (
            <motion.a
              key={w.title}
              href={w.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.6, ease: easeOut }}
              className="glass group flex items-center justify-between gap-4 rounded-2xl p-5 transition hover:glow-border"
            >
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">
                  {w.year}
                </div>
                <div className="font-display mt-1 text-lg font-semibold">{w.title}</div>
                <p className="mt-1 text-sm text-[var(--muted)]">{w.summary}</p>
              </div>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-[var(--muted)] transition group-hover:text-[var(--accent)]" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
