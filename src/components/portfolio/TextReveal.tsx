import { motion } from "framer-motion";

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
      variants={{ show: { transition: { staggerChildren: 0.045, delayChildren: delay } } }}
      aria-label={text}
    >
      {letters.map((ch, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="inline-block"
          variants={{
            hidden: { y: "110%", opacity: 0, filter: "blur(8px)" },
            show: {
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
              transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
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