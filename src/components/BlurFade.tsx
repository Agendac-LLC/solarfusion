import { motion } from "framer-motion";
import { ReactNode, memo } from "react";

interface BlurFadeProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  /** blur prop kept for API compat but no longer animates filter (too expensive) */
  blur?: number;
}

/**
 * Premium entrance: opacity + transform slide. 
 * filter:blur() animation removed — it forces rasterization every frame.
 */
const BlurFade = memo(({
  children,
  className = "",
  delay = 0,
  duration = 0.7,
  direction = "up",
}: BlurFadeProps) => {
  const offsets = {
    up: { y: 24 },
    down: { y: -24 },
    left: { x: -24 },
    right: { x: 24 },
    none: {},
  };

  const resetAxis = direction === "up" || direction === "down" ? { y: 0 } : direction === "left" || direction === "right" ? { x: 0 } : {};

  return (
    <motion.div
      initial={{ opacity: 0, ...offsets[direction] }}
      whileInView={{ opacity: 1, ...resetAxis }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
});

BlurFade.displayName = "BlurFade";

export default BlurFade;
