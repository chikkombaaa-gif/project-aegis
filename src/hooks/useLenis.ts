import { useEffect } from "react";
import Lenis from "lenis";

export function useLenis() {
  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) return;

    const lenis = new Lenis({
      duration: 1.35,
      easing: (t: number) => {
        // Expo-ish out — buttery, award-site feel
        return t === 1 ? 1 : 1 - Math.pow(2, -12 * t);
      },
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.15,
      infinite: false,
    });

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest("a");
      if (!a) return;
      const href = a.getAttribute("href");
      if (!href || !href.startsWith("#") || href.length < 2) return;
      const el = document.querySelector(href);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, {
        offset: -80,
        duration: 1.6,
        easing: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -11 * t)),
      });
    };
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);
}
