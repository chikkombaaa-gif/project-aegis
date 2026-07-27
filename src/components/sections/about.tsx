"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { HIGHLIGHTS, PROFILE } from "@/data/content";
import { easeOut } from "@/lib/motion";

const PRINCIPLES = [
  {
    title: "Ship systems, not demos",
    body: "Metrics, data flow, and inference designed together so models survive outside a notebook.",
  },
  {
    title: "Honest evaluation",
    body: "Leakage-aware splits, cross-validation, and clear metrics — report what the model actually does.",
  },
  {
    title: "NLP on real text",
    body: "Classification and analytics built for noisy inputs — from raw documents to decisions you can trust.",
  },
] as const;

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
              className="object-cover transition duration-700 hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 40vw"
              priority
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 50%, color-mix(in oklab, var(--bg) 85%, transparent) 100%)",
              }}
            />
            <div className="absolute inset-x-5 bottom-5 flex items-end justify-between">
              <div>
                <div className="text-[9px] uppercase tracking-[0.3em] text-[var(--muted)]">
                  {PROFILE.role}
                </div>
                <div className="font-display mt-1 text-lg text-[var(--fg)]">{PROFILE.name}</div>
              </div>
              <span className="flex items-center gap-1.5 text-[9px] uppercase tracking-[0.25em] text-emerald-400">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                Open
              </span>
            </div>
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
              <span className="text-[var(--fg)]">{PROFILE.college}</span>. I work where machine
              learning meets software engineering — Python that turns data into decisions and keeps
              working after the notebook closes.
            </p>
            <p className="mt-5 text-[var(--muted)]">
              Looking for an SDE or ML role with real ownership on a team that ships product and
              values rigorous evaluation.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {HIGHLIGHTS.map((h) => (
                <div key={h.label} className="glass rounded-2xl p-4">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">
                    {h.label}
                  </div>
                  <div className="mt-1 text-sm font-medium">{h.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-3">
              {PRINCIPLES.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.6, ease: easeOut }}
                  className="rounded-2xl border border-[var(--border)] bg-[color-mix(in_oklab,var(--card)_80%,transparent)] p-4"
                >
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[var(--accent)]">
                    <CheckCircle2 className="h-3.5 w-3.5" /> 0{i + 1}
                  </div>
                  <div className="mt-1 text-sm font-semibold">{p.title}</div>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--muted)]">{p.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
