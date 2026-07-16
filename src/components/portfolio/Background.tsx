export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 grid-bg opacity-70" />
      <div className="starfield absolute inset-0" />
      {/* light rays */}
      <div
        className="absolute -top-1/3 left-1/2 h-[120vh] w-[80vw] -translate-x-1/2 rotate-12 opacity-40 blur-3xl"
        style={{
          background:
            "conic-gradient(from 200deg at 50% 50%, transparent 0deg, oklch(0.55 0.25 260 / 0.35) 30deg, transparent 60deg, oklch(0.55 0.22 25 / 0.2) 180deg, transparent 210deg)",
        }}
      />
      {/* fog */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[40vh] opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 30% 100%, oklch(0.35 0.15 260 / 0.5), transparent 60%), radial-gradient(ellipse at 70% 100%, oklch(0.4 0.2 25 / 0.25), transparent 60%)",
        }}
      />
    </div>
  );
}

export function CustomCursor() {
  return null; // Kept minimal — native cursor with global hover states preferred for a11y
}