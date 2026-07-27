import { PROFILE } from "@/data/content";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[var(--border)] px-5 pb-12 pt-20 md:px-6">
      <div
        className="pointer-events-none mx-auto mb-12 max-w-6xl text-center"
        aria-hidden
      >
        <div
          className="font-display text-[14vw] leading-none tracking-tight md:text-[8vw]"
          style={{
            background: "linear-gradient(180deg, color-mix(in oklab, var(--fg) 18%, transparent), transparent 80%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            WebkitTextStroke: "1px color-mix(in oklab, var(--fg) 12%, transparent)",
          }}
        >
          Barath Velu
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-[var(--border)] text-[10px] font-semibold tracking-widest">
            BV
          </span>
          <span className="text-xs tracking-[0.15em] text-[var(--muted)]">
            © {new Date().getFullYear()} {PROFILE.fullName}
          </span>
        </div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--muted)]">
          Built to ship · Next.js · Chennai
        </p>
        <a
          href="#top"
          className="glass rounded-full px-4 py-2 text-[10px] uppercase tracking-[0.3em] transition hover:glow-border"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
