/** Shared motion tokens — Awwwards-grade easing & variants */

export const easeOut = [0.16, 1, 0.3, 1] as const;
export const easeInOut = [0.65, 0, 0.35, 1] as const;
export const easeExpo = [0.19, 1, 0.22, 1] as const;

export const springSoft = { type: "spring" as const, stiffness: 120, damping: 22, mass: 0.8 };
export const springSnappy = { type: "spring" as const, stiffness: 280, damping: 24, mass: 0.4 };
export const springMagnetic = { stiffness: 220, damping: 18, mass: 0.3 };

export const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: easeOut },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.7, ease: easeOut },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: easeOut },
  },
};

export const stagger = (delay = 0.08) => ({
  show: {
    transition: { staggerChildren: delay, delayChildren: 0.05 },
  },
});
