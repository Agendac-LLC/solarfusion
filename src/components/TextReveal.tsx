import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  /** Tag to render */
  as?: "h2" | "h3" | "p";
}

/**
 * Apple-style word-by-word reveal driven by scroll position.
 * Each word fades from muted to full opacity as the element traverses the viewport.
 */
const TextReveal = ({ text, className = "", as: Tag = "h2" }: TextRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.3"],
  });

  const words = text.split(" ");

  return (
    <div ref={ref}>
      <Tag className={className}>
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return <Word key={i} range={[start, end]} progress={scrollYProgress}>{word}</Word>;
        })}
      </Tag>
    </div>
  );
};

const Word = ({
  children,
  range,
  progress,
}: {
  children: string;
  range: [number, number];
  progress: any;
}) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const y = useTransform(progress, range, [8, 0]);

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
