import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  as?: "h2" | "h3" | "p";
  /** Use "light" on dark/parallax backgrounds for better starting contrast */
  variant?: "dark" | "light";
}

const TextReveal = ({ text, className = "", as: Tag = "h2", variant = "dark" }: TextRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "start 0.4"],
  });

  const words = text.split(" ");

  return (
    <div ref={ref}>
      <Tag className={className}>
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word key={i} range={[start, end]} progress={scrollYProgress} variant={variant}>
              {word}
            </Word>
          );
        })}
      </Tag>
    </div>
  );
};

const Word = ({
  children,
  range,
  progress,
  variant,
}: {
  children: string;
  range: [number, number];
  progress: any;
  variant: "dark" | "light";
}) => {
  const startOpacity = variant === "light" ? 0.5 : 0.15;
  const opacity = useTransform(progress, range, [startOpacity, 1]);
  const y = useTransform(progress, range, [6, 0]);

  return (
    <motion.span
      style={{ opacity, y }}
      className="inline-block mr-[0.3em] transition-none"
    >
      {children}
    </motion.span>
  );
};

export default TextReveal;
