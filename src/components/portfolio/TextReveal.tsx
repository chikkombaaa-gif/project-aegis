import { motion } from "framer-motion";

/** Premium ease — Apple-like deceleration */
const ease = [0.22, 1, 0.36, 1] as const;

export function TextReveal({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const letters = Array.from(text);
  return (
    <motion.span
      className={className}
      initial="hidden"
      animate="show"
      variants={{
        show: {
          transition: {
            staggerChildren: 0.032,
            delayChildren: delay,
          },
        },
      }}
      aria-label={text}
    >
      {letters.map((ch, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="inline-block will-change-transform"
          variants={{
            hidden: {
              y: "100%",
              opacity: 0,
              filter: "blur(6px)",
            },
            show: {
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
              transition: {
                duration: 0.85,
                ease,
              },
            },
          }}
          style={{ whiteSpace: ch === " " ? "pre" : undefined }}
        >
          {ch}
        </motion.span>
      ))}
    </motion.span>
  );
}
