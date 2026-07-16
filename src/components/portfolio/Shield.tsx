import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export function Shield({ size = 480 }: { size?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-1, 1], [15, -15]), { stiffness: 80, damping: 12 });
  const ry = useSpring(useTransform(mx, [-1, 1], [-20, 20]), { stiffness: 80, damping: 12 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const r = ref.current?.getBoundingClientRect();
      if (!r) return;
      mx.set(((e.clientX - r.left) / r.width - 0.5) * 2);
      my.set(((e.clientY - r.top) / r.height - 0.5) * 2);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [mx, my]);

  return (
    <div
      ref={ref}
      className="relative flex items-center justify-center"
      style={{ perspective: 1200, width: size, height: size }}
    >
      {/* pulse rings */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="absolute rounded-full border border-[oklch(0.55_0.25_260/0.5)]"
            style={{
              width: size * 0.9,
              height: size * 0.9,
              animation: `pulse-ring 4s ease-out ${i * 1.3}s infinite`,
            }}
          />
        ))}
      </div>

      <motion.div
        className="animate-float-shield"
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        whileTap={{ rotateZ: 720, transition: { duration: 1.2, ease: "easeInOut" } }}
      >
        <ShieldSvg size={size} />
      </motion.div>
    </div>
  );
}

export function ShieldSvg({ size = 200, spinning = false }: { size?: number; spinning?: boolean }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-100 -100 200 200"
      className={spinning ? "animate-spin-slow" : ""}
      style={{ filter: "drop-shadow(0 30px 60px oklch(0.55 0.25 260 / 0.5))" }}
    >
      <defs>
        <radialGradient id="metal" cx="35%" cy="30%">
          <stop offset="0%" stopColor="oklch(0.95 0.02 260)" />
          <stop offset="60%" stopColor="oklch(0.55 0.15 260)" />
          <stop offset="100%" stopColor="oklch(0.18 0.05 260)" />
        </radialGradient>
        <radialGradient id="ringBlue" cx="50%" cy="50%">
          <stop offset="0%" stopColor="oklch(0.75 0.2 260)" />
          <stop offset="100%" stopColor="oklch(0.35 0.2 260)" />
        </radialGradient>
        <radialGradient id="core" cx="45%" cy="35%">
          <stop offset="0%" stopColor="oklch(0.85 0.02 260)" />
          <stop offset="100%" stopColor="oklch(0.35 0.05 260)" />
        </radialGradient>
        <radialGradient id="starGrad" cx="40%" cy="30%">
          <stop offset="0%" stopColor="oklch(0.98 0.01 260)" />
          <stop offset="100%" stopColor="oklch(0.7 0.02 260)" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* outer bezel */}
      <circle r="95" fill="url(#metal)" />
      <circle r="95" fill="none" stroke="oklch(0.75 0.05 260 / 0.4)" strokeWidth="0.6" />

      {/* concentric rings — Cap shield geometry */}
      <circle r="82" fill="oklch(0.5 0.22 25)" />
      <circle r="82" fill="none" stroke="oklch(0.2 0.05 260 / 0.6)" strokeWidth="0.5" />
      <circle r="68" fill="url(#metal)" />
      <circle r="55" fill="oklch(0.5 0.22 25)" />
      <circle r="55" fill="none" stroke="oklch(0.2 0.05 260 / 0.6)" strokeWidth="0.5" />
      <circle r="42" fill="url(#ringBlue)" filter="url(#glow)" />

      {/* five-point star */}
      <polygon
        points="0,-30 8.8,-9.3 30.5,-9.3 12.8,4 19.6,25 0,12 -19.6,25 -12.8,4 -30.5,-9.3 -8.8,-9.3"
        fill="url(#starGrad)"
        stroke="oklch(0.35 0.05 260 / 0.6)"
        strokeWidth="0.4"
      />

      {/* highlight reflection */}
      <ellipse cx="-30" cy="-45" rx="45" ry="18" fill="oklch(1 0 0 / 0.15)" />
      <ellipse cx="-45" cy="-55" rx="18" ry="6" fill="oklch(1 0 0 / 0.25)" />
    </svg>
  );
}