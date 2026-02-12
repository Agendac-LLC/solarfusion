import { memo } from "react";
import { motion } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  as?: "h2" | "h3" | "p";
  variant?: "dark" | "light";
}

/**
 * Simplified TextReveal — single whileInView animation instead of 
 * per-word useScroll+useTransform (which created N scroll listeners per title).
 * Visual result is nearly identical but uses 1 listener instead of N.
 */
const TextReveal = memo(({ text, className = "", as: Tag = "h2", variant = "dark" }: TextRevealProps) => {
  const words = text.split(" ");

  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: variant === "light" ? 0.5 : 0.3, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            duration: 0.5,
            delay: i * 0.06,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
});

TextReveal.displayName = "TextReveal";

export default TextReveal;
