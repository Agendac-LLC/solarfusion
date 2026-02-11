import { motion } from "framer-motion";
import { ReactNode, memo } from "react";

interface StaggerChildrenProps {
  children: ReactNode;
  className?: string;
  /** Delay between each child in seconds */
  stagger?: number;
  /** Initial delay before first child */
  delay?: number;
}

/**
 * Wraps children and staggers their entrance animation.
 * Each direct child animates in sequence with configurable delay.
 */
const StaggerChildren = memo(({ children, className = "", stagger = 0.08, delay = 0 }: StaggerChildrenProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-60px" }}
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: stagger,
          delayChildren: delay,
        },
      },
    }}
    className={className}
  >
    {children}
  </motion.div>
));

StaggerChildren.displayName = "StaggerChildren";

/** Wrap each child item inside StaggerChildren with this */
export const StaggerItem = memo(({
  children,
  className = "",
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "scale";
}) => {
  const variants = {
    up: { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } },
    down: { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } },
    scale: { hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1 } },
  };

  return (
    <motion.div
      variants={variants[direction]}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
});

StaggerItem.displayName = "StaggerItem";

export default StaggerChildren;
