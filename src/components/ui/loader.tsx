"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { easeOut } from "@/lib/motion";

export function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = window.setTimeout(() => setShow(false), reduced ? 150 : 1200);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[var(--bg)]"
          exit={{ opacity: 0, transition: { duration: 0.6, ease: easeOut } }}
          aria-hidden
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-5"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--border)] text-xs font-semibold tracking-[0.35em] text-[var(--fg)]">
              BV
            </div>
            <div className="h-px w-20 overflow-hidden bg-[var(--border)]">
              <motion.div
                className="h-full bg-[var(--accent)]"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1, ease: easeOut }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
