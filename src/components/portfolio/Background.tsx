import { motion } from "framer-motion";

export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base depth */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

      {/* Soft grid */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      {/* Starfield */}
      <div className="starfield absolute inset-0 opacity-80" />

      {/* —— Premium cloud layers —— */}

      {/* Large soft cloud — upper left */}
      <motion.div
        className="absolute -left-[18%] -top-[25%] h-[70vh] w-[70vh] rounded-full"
        style={{
          background:
            "radial-gradient(circle, oklch(0.48 0.12 250 / 0.35) 0%, oklch(0.35 0.08 260 / 0.12) 45%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          x: [0, 50, 10, 0],
          y: [0, 25, 40, 0],
          scale: [1, 1.06, 1.02, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Mid cloud — center right */}
      <motion.div
        className="absolute -right-[12%] top-[20%] h-[55vh] w-[55vh] rounded-full"
        style={{
          background:
            "radial-gradient(circle, oklch(0.42 0.1 255 / 0.28) 0%, oklch(0.3 0.06 260 / 0.1) 50%, transparent 72%)",
          filter: "blur(90px)",
        }}
        animate={{
          x: [0, -35, -15, 0],
          y: [0, 30, -10, 0],
          scale: [1, 1.1, 0.98, 1],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Lower cloud — bottom */}
      <motion.div
        className="absolute -bottom-[30%] left-[15%] h-[60vh] w-[80vw] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse, oklch(0.38 0.11 250 / 0.3) 0%, oklch(0.28 0.07 260 / 0.12) 40%, transparent 70%)",
          filter: "blur(100px)",
        }}
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -20, 10, 0],
          scale: [1, 1.05, 1.08, 1],
        }}
        transition={{
          duration: 36,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />

      {/* Accent glow cloud — small luminous */}
      <motion.div
        className="absolute left-[40%] top-[35%] h-[30vh] w-[30vh] rounded-full"
        style={{
          background:
            "radial-gradient(circle, oklch(0.62 0.14 250 / 0.18) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
        animate={{
          opacity: [0.4, 0.7, 0.45, 0.4],
          scale: [1, 1.15, 1.05, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Soft light ray */}
      <div
        className="absolute -top-1/3 left-1/2 h-[120vh] w-[65vw] -translate-x-1/2 rotate-[14deg] opacity-25 blur-3xl"
        style={{
          background:
            "conic-gradient(from 210deg at 50% 40%, transparent 0deg, oklch(0.58 0.16 250 / 0.28) 24deg, transparent 50deg, oklch(0.45 0.1 260 / 0.12) 170deg, transparent 200deg)",
        }}
      />

      {/* Ground fog */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[40vh]"
        style={{
          background:
            "linear-gradient(to top, oklch(0.1 0.02 260 / 0.85) 0%, oklch(0.12 0.03 260 / 0.35) 40%, transparent 100%)",
        }}
      />
    </div>
  );
}
