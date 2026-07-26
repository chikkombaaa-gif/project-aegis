import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { easeOut } from "@/lib/motion";

export function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = window.setTimeout(() => setShow(false), reduced ? 200 : 1400);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[oklch(0.08_0.01_260)]"
          exit={{
            opacity: 0,
            transition: { duration: 0.7, ease: easeOut, delay: 0.15 },
          }}
          aria-hidden
        >
          <motion.div
            className="flex flex-col items-center gap-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.96 }}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            <motion.div
              className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[oklch(0.75_0.05_260/0.3)] bg-[oklch(0.16_0.04_260)] text-sm font-semibold tracking-[0.35em] text-white"
              animate={{ boxShadow: ["0 0 0 0 oklch(0.6 0.15 250 / 0)", "0 0 40px 0 oklch(0.55 0.15 250 / 0.35)", "0 0 0 0 oklch(0.6 0.15 250 / 0)"] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              BV
            </motion.div>
            <div className="h-px w-24 overflow-hidden bg-[oklch(0.3_0.02_260)]">
              <motion.div
                className="h-full bg-[oklch(0.72_0.1_250)]"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.1, ease: easeOut }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
