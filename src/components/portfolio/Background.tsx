import { motion } from "framer-motion";

export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="starfield absolute inset-0" />

      {/* Ambient orb — top left */}
      <motion.div
        className="absolute -left-[10%] -top-[15%] h-[55vh] w-[55vh] rounded-full opacity-30 blur-[100px]"
        style={{ background: "oklch(0.45 0.14 250)" }}
        animate={{
          x: [0, 40, 0],
          y: [0, 30, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Ambient orb — bottom right */}
      <motion.div
        className="absolute -bottom-[20%] -right-[10%] h-[50vh] w-[50vh] rounded-full opacity-25 blur-[120px]"
        style={{ background: "oklch(0.4 0.1 260)" }}
        animate={{
          x: [0, -30, 0],
          y: [0, -40, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Soft light ray */}
      <div
        className="absolute -top-1/3 left-1/2 h-[120vh] w-[70vw] -translate-x-1/2 rotate-12 opacity-30 blur-3xl"
        style={{
          background:
            "conic-gradient(from 200deg at 50% 50%, transparent 0deg, oklch(0.55 0.2 250 / 0.3) 28deg, transparent 55deg, oklch(0.5 0.12 260 / 0.15) 180deg, transparent 210deg)",
        }}
      />

      {/* Bottom fog */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[35vh] opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at 30% 100%, oklch(0.32 0.12 250 / 0.4), transparent 60%), radial-gradient(ellipse at 70% 100%, oklch(0.28 0.08 260 / 0.25), transparent 60%)",
        }}
      />
    </div>
  );
}
