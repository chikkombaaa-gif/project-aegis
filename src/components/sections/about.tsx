"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HIGHLIGHTS, PROFILE } from "@/data/content";
import { easeOut } from "@/lib/motion";

export function About() {
  return (
    <section id="about" className="px-5 py-24 md:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-[11px] uppercase tracking-[0.35em] text-[var(--accent)]">01 — About</p>
        <h2 className="font-display max-w-2xl text-3xl font-semibold md:text-5xl">
          Philosophy over demos.
        </h2>

        <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-[var(--border)]"
          >
            <Image
              src={PROFILE.photo}
              alt={PROFILE.fullName}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: easeOut }}
            className="flex flex-col justify-center"
          >
            <p className="text-lg leading-relaxed text-[var(--muted)] md:text-xl">
              Pre-final year <span className="text-[var(--fg)]">{PROFILE.degree}</span> at{" "}
              {PROFILE.college}. I work where machine learning meets software engineering — Python
              that turns data into decisions and keeps working after the notebook closes.
            </p>
            <p className="mt-5 text-[var(--muted)]">
              Driven by honest evaluation, leakage-aware design, and systems a team can actually run.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {HIGHLIGHTS.map((h) => (
                <div key={h.label} className="glass rounded-2xl p-4">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">
                    {h.label}
                  </div>
                  <div className="mt-1 text-sm font-medium">{h.value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
