import { motion, useReducedMotion } from "framer-motion";
import { easeExpo } from "@/lib/motion";

export function TextReveal({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  const letters = Array.from(text);

  if (reduced) {
    return <span className={className}>{text}</span>;
  }

  return (
    <motion.span
      className={className}
      initial="hidden"
      animate="show"
      variants={{
        show: {
          transition: {
            staggerChildren: 0.028,
            delayChildren: delay,
          },
        },
      }}
      aria-label={text}
    >
      {letters.map((ch, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom leading-none">
          <motion.span
            aria-hidden
            className="inline-block will-change-transform"
            variants={{
              hidden: {
                y: "110%",
                opacity: 0,
                rotateX: 40,
                filter: "blur(8px)",
              },
              show: {
                y: 0,
                opacity: 1,
                rotateX: 0,
                filter: "blur(0px)",
                transition: {
                  duration: 0.95,
                  ease: easeExpo,
                },
              },
            }}
            style={{
              whiteSpace: ch === " " ? "pre" : undefined,
              transformOrigin: "bottom",
              display: "inline-block",
            }}
          >
            {ch}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
