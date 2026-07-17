import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;
    let raf = 0;

    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!visible) setVisible(true);
      if (dot.current) {
        dot.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }
      const t = e.target as HTMLElement | null;
      const isInteractive = !!t?.closest("a,button,input,textarea,label,[data-cursor='hover']");
      setHover(isInteractive);
    };

    const tick = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      if (ring.current) {
        ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    document.documentElement.style.cursor = "none";
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
      document.documentElement.style.cursor = "";
      cancelAnimationFrame(raf);
    };
  }, [visible]);

  return (
    <>
      <div
        ref={dot}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 rounded-full"
        style={{
          background: "oklch(0.95 0.05 260)",
          boxShadow: "0 0 12px oklch(0.7 0.22 260), 0 0 24px oklch(0.55 0.25 260)",
          opacity: visible ? 1 : 0,
          transition: "opacity 200ms ease, width 200ms ease, height 200ms ease",
          mixBlendMode: "screen",
        }}
      />
      <div
        ref={ring}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[99] flex items-center justify-center rounded-full"
        style={{
          width: hover ? 56 : 36,
          height: hover ? 56 : 36,
          border: `1px solid oklch(0.7 0.22 260 / ${hover ? 0.9 : 0.45})`,
          boxShadow: hover
            ? "0 0 30px oklch(0.55 0.25 260 / 0.5), inset 0 0 12px oklch(0.55 0.25 260 / 0.35)"
            : "0 0 12px oklch(0.55 0.25 260 / 0.25)",
          opacity: visible ? 1 : 0,
          transition:
            "opacity 200ms ease, width 220ms cubic-bezier(0.16,1,0.3,1), height 220ms cubic-bezier(0.16,1,0.3,1), border-color 200ms, box-shadow 200ms",
          backdropFilter: "invert(6%)",
        }}
      >
        <span
          aria-hidden
          className="absolute h-1 w-1 rounded-full"
          style={{
            background: "oklch(0.85 0.15 25)",
            boxShadow: "0 0 8px oklch(0.55 0.22 25)",
            top: -2,
          }}
        />
      </div>
    </>
  );
}