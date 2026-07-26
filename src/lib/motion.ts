export const easeOut = [0.16, 1, 0.3, 1] as const;
export const easeExpo = [0.19, 1, 0.22, 1] as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
};
