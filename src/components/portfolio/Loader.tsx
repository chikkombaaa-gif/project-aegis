import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ShieldSvg } from "./Shield";

export function Loader() {
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(100, ((t - start) / 1800) * 100);
      setPct(p);
      if (p < 100) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 500);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: "var(--gradient-hero)" }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(20px)" }}
          transition={{ duration: 0.6 }}
        >
          <div className="starfield absolute inset-0" />
          <div className="relative flex flex-col items-center gap-8">
            <motion.div
              initial={{ scale: 0.4, opacity: 0, rotate: -180 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <ShieldSvg size={180} spinning />
              <span
                className="absolute inset-0 rounded-full"
                style={{ boxShadow: "0 0 80px 20px oklch(0.55 0.25 260 / 0.5)" }}
              />
            </motion.div>
            <div className="flex w-64 flex-col items-center gap-2">
              <div className="h-[2px] w-full overflow-hidden rounded-full bg-[oklch(0.3_0.05_260)]">
                <motion.div
                  className="h-full"
                  style={{
                    width: `${pct}%`,
                    background: "linear-gradient(90deg, oklch(0.7 0.22 260), oklch(0.55 0.22 25))",
                    boxShadow: "0 0 12px oklch(0.7 0.22 260)",
                  }}
                />
              </div>
              <div className="flex w-full justify-between text-[10px] uppercase tracking-[0.3em] text-[oklch(0.8_0.05_260)]">
                <span>Initializing</span>
                <span>{Math.round(pct)}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}