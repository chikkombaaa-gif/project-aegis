"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, ArrowUpRight } from "lucide-react";
import { PROFILE } from "@/data/content";
import { Particles } from "@/components/ui/particles";
import { Magnetic } from "@/components/ui/magnetic";
import { easeOut } from "@/lib/motion";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-dvh items-center overflow-hidden px-5 pt-24 md:px-6">
      <div className="pointer-events-none absolute inset-0 -z-20 grid-bg" />
      <Particles />
      <div
        className="pointer-events-none absolute -left-1/4 top-0 -z-10 h-[60vh] w-[60vh] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--glow), transparent 70%)" }}
      />

      <div className="mx-auto w-full max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: easeOut }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] text-[var(--muted)]"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--accent)]" />
          {PROFILE.availability}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9, ease: easeOut }}
          className="font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl"
        >
          <span className="text-gradient">{PROFILE.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.8, ease: easeOut }}
          className="mt-5 max-w-xl font-display text-xl text-[var(--muted)] md:text-2xl"
        >
          {PROFILE.role}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8, ease: easeOut }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--muted)] md:text-lg"
        >
          {PROFILE.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7, ease: easeOut }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <Magnetic>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--fg)] px-6 py-3.5 text-sm font-semibold text-[var(--bg)] transition hover:opacity-90"
            >
              View Projects <ArrowUpRight className="h-4 w-4" />
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href={PROFILE.resumeUrl}
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </Magnetic>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 flex items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-[var(--muted)]"
        >
          <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
          Scroll
        </motion.div>
      </div>
    </section>
  );
}
