"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SECTIONS = [
  { id: "top", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;

export function SectionDots() {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    for (const s of SECTIONS) {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    }
    return () => obs.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="pointer-events-auto fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
    >
      <ul className="flex flex-col items-end gap-3.5">
        {SECTIONS.map((s) => {
          const on = active === s.id;
          return (
            <li key={s.id}>
              <a href={`#${s.id}`} aria-label={s.label} aria-current={on ? "true" : undefined} className="group flex items-center gap-3">
                <span
                  className={`text-[9px] uppercase tracking-[0.3em] transition ${
                    on ? "text-[var(--fg)] opacity-100" : "text-[var(--muted)] opacity-0 group-hover:opacity-100"
                  }`}
                >
                  {s.label}
                </span>
                <motion.span
                  animate={{ scale: on ? 1 : 0.65 }}
                  className={`block h-2 w-2 rounded-full transition ${
                    on ? "bg-[var(--accent)]" : "bg-[var(--muted)] group-hover:bg-[var(--accent)]"
                  }`}
                  style={{
                    boxShadow: on ? "0 0 12px var(--glow)" : undefined,
                  }}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
