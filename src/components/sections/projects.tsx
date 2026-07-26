"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import { PROJECTS, type Project } from "@/data/content";
import { easeOut } from "@/lib/motion";

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="px-5 py-24 md:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-[11px] uppercase tracking-[0.35em] text-[var(--accent)]">
          03 — Work
        </p>
        <h2 className="font-display max-w-2xl text-3xl font-semibold md:text-5xl">
          Evidence of how I work.
        </h2>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <motion.button
              key={p.id}
              type="button"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.7, ease: easeOut }}
              onClick={() => setActive(p)}
              className="glass group rounded-3xl p-6 text-left transition hover:glow-border md:p-8"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="font-display text-3xl text-[var(--muted)] opacity-40">
                  0{i + 1}
                </span>
                <span className="rounded-full border border-[var(--border)] px-2.5 py-0.5 text-[9px] uppercase tracking-[0.2em] text-[var(--muted)]">
                  {p.status}
                </span>
              </div>
              <h3 className="font-display mt-4 text-xl font-semibold md:text-2xl">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{p.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[var(--border)] px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-[var(--muted)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-4 border-t border-[var(--border)] pt-4">
                {p.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
                      {m.label}
                    </div>
                    <div className="text-sm font-medium">{m.value}</div>
                  </div>
                ))}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-end justify-center bg-black/60 p-4 backdrop-blur-sm md:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              role="dialog"
              aria-modal
              aria-labelledby="case-title"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.4, ease: easeOut }}
              className="glass max-h-[90dvh] w-full max-w-2xl overflow-y-auto rounded-3xl p-6 md:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--accent)]">
                    Case study · {active.year}
                  </p>
                  <h3 id="case-title" className="font-display mt-2 text-2xl font-semibold">
                    {active.title}
                  </h3>
                </div>
                <button
                  type="button"
                  aria-label="Close"
                  onClick={() => setActive(null)}
                  className="rounded-full border border-[var(--border)] p-2"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {(
                [
                  ["Problem", active.problem],
                  ["Approach", active.approach],
                  ["Architecture", active.architecture],
                  ["Results", active.results],
                  ["What I learned", active.learned],
                ] as const
              ).map(([label, body]) => (
                <div key={label} className="mt-6">
                  <h4 className="text-[11px] uppercase tracking-[0.25em] text-[var(--muted)]">
                    {label}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed">{body}</p>
                </div>
              ))}

              <div className="mt-8 flex flex-wrap gap-3">
                {active.github && (
                  <a
                    href={active.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2 text-sm"
                  >
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                )}
                {active.demo && (
                  <a
                    href={active.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--fg)] px-4 py-2 text-sm font-medium text-[var(--bg)]"
                  >
                    Live demo <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
