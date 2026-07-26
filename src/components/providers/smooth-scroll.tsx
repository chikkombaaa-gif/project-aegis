"use client";

import { useEffect } from "react";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let destroyed = false;
    let lenis: { raf: (t: number) => void; scrollTo: (t: HTMLElement, o?: object) => void; destroy: () => void } | null =
      null;
    let raf = 0;

    void import("lenis").then((mod) => {
      if (destroyed) return;
      const Lenis = mod.default;
      lenis = new Lenis({
        duration: 1.15,
        smoothWheel: true,
      });

      const loop = (time: number) => {
        lenis?.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);

      const onClick = (e: MouseEvent) => {
        const a = (e.target as HTMLElement | null)?.closest("a");
        if (!a) return;
        const href = a.getAttribute("href");
        if (!href?.startsWith("#") || href.length < 2) return;
        const el = document.querySelector(href);
        if (!el || !lenis) return;
        e.preventDefault();
        lenis.scrollTo(el as HTMLElement, { offset: -88, duration: 1.35 });
      };
      document.addEventListener("click", onClick);

      return () => {
        document.removeEventListener("click", onClick);
      };
    });

    return () => {
      destroyed = true;
      cancelAnimationFrame(raf);
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
}
