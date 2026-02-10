import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}

const directionMap = {
  up: { x: 0, y: 40 },
  left: { x: -40, y: 0 },
  right: { x: 40, y: 0 },
};

const AnimatedSection = ({ children, className = "", delay = 0, direction = "up" }: AnimatedSectionProps) => {
  const initial = directionMap[direction];
  return (
    <motion.div
      initial={{ opacity: 0, x: initial.x, y: initial.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: delay * 0.7, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/** Animated horizontal line that stretches from left when scrolled into view */
export const AnimatedLine = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => (
  <motion.div
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true, margin: "-20px" }}
    transition={{ duration: 0.6, delay: delay * 0.7, ease: "easeOut" }}
    className={`h-[1px] bg-border origin-left ${className}`}
  />
);

export default AnimatedSection;
