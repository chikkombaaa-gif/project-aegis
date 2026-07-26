import { PROFILE } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-5 py-12 md:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-[var(--border)] text-[10px] font-semibold tracking-widest">
            BV
          </span>
          <span className="text-xs tracking-[0.15em] text-[var(--muted)]">
            © {new Date().getFullYear()} {PROFILE.fullName}
          </span>
        </div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--muted)]">
          Built with passion & Next.js
        </p>
      </div>
    </footer>
  );
}
