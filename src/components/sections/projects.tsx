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
        <p className="mt-4 max-w-xl text-sm text-[var(--muted)] md:text-base">
          Case studies — problem, approach, architecture, results. Click any card for the full write-up.
        </p>

        <div className="mt-14 flex flex-col gap-5">
          {PROJECTS.map((p, i) => (
            <motion.button
              key={p.id}
              type="button"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.75, ease: easeOut }}
              onClick={() => setActive(p)}
              className="glass group relative overflow-hidden rounded-3xl p-6 text-left transition hover:glow-border md:p-8"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(ellipse at 10% 0%, color-mix(in oklab, var(--accent) 12%, transparent), transparent 55%)",
                }}
              />
              <div className="relative grid gap-6 md:grid-cols-[auto_1fr_auto] md:items-start">
                <div className="font-display text-4xl text-[var(--muted)] opacity-30 md:text-5xl">
                  0{i + 1}
                </div>
                <div>
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-[var(--border)] px-2.5 py-0.5 text-[9px] uppercase tracking-[0.2em] text-[var(--muted)]">
                      {p.status}
                    </span>
                    <span className="text-[11px] tracking-[0.15em] text-[var(--muted)]">{p.year}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold md:text-2xl">{p.title}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--muted)]">
                    {p.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[var(--border)] px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-[var(--muted)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="hidden gap-6 border-l border-[var(--border)] pl-6 md:flex">
                  {p.metrics.slice(0, 2).map((m) => (
                    <div key={m.label}>
                      <div className="text-[9px] uppercase tracking-[0.2em] text-[var(--muted)]">
                        {m.label}
                      </div>
                      <div className="mt-1 text-sm font-medium">{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-end justify-center bg-black/65 p-4 backdrop-blur-md md:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              role="dialog"
              aria-modal={true}
              aria-labelledby="case-title"
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.4, ease: easeOut }}
              className="glass max-h-[90dvh] w-full max-w-2xl overflow-y-auto rounded-3xl p-6 md:p-9"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--accent)]">
                    Case study · {active.year}
                  </p>
                  <h3 id="case-title" className="font-display mt-2 text-2xl font-semibold md:text-3xl">
                    {active.title}
                  </h3>
                </div>
                <button
                  type="button"
                  aria-label="Close"
                  onClick={() => setActive(null)}
                  className="rounded-full border border-[var(--border)] p-2 transition hover:glow-border"
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
                <div key={label} className="mt-7">
                  <h4 className="text-[11px] uppercase tracking-[0.25em] text-[var(--muted)]">
                    {label}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed md:text-[15px]">{body}</p>
                </div>
              ))}

              <div className="mt-8 flex flex-wrap gap-3 border-t border-[var(--border)] pt-6">
                {active.github && (
                  <a
                    href={active.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2.5 text-sm transition hover:glow-border"
                  >
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                )}
                {active.demo && (
                  <a
                    href={active.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--fg)] px-4 py-2.5 text-sm font-medium text-[var(--bg)]"
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
