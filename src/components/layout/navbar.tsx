"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV, PROFILE } from "@/data/content";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Magnetic } from "@/components/ui/magnetic";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-[var(--border)] bg-[color-mix(in_oklab,var(--bg)_75%,transparent)] backdrop-blur-xl"
          : ""
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-18 md:px-6">
        <a href="#top" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border)] text-[11px] font-semibold tracking-widest">
            BV
          </span>
          <span className="text-xs font-medium tracking-[0.2em] text-[var(--muted)]">
            {PROFILE.fullName}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="text-[11px] uppercase tracking-[0.22em] text-[var(--muted)] transition hover:text-[var(--fg)]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Magnetic>
            <a
              href={`mailto:${PROFILE.email}?subject=${encodeURIComponent("Opportunity for Barath V")}`}
              className="glass hidden rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.2em] sm:inline-flex"
            >
              Hire me
            </a>
          </Magnetic>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-[var(--border)] md:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {NAV.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    className="block rounded-xl px-3 py-3 text-sm tracking-wide text-[var(--muted)]"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
