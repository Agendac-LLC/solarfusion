import { motion } from "framer-motion";
import { ReactNode, forwardRef } from "react";

interface StaggerChildrenProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}

const StaggerChildren = forwardRef<HTMLDivElement, StaggerChildrenProps>(
  ({ children, className = "", stagger = 0.08, delay = 0 }, ref) => (
    <motion.div
      ref={ref}
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
  )
);

StaggerChildren.displayName = "StaggerChildren";

export const StaggerItem = forwardRef<HTMLDivElement, {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "scale";
}>(({ children, className = "", direction = "up" }, ref) => {
  const variants = {
    up: { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } },
    down: { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } },
    scale: { hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1 } },
  };

  return (
    <motion.div
      ref={ref}
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
