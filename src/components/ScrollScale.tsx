import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, memo, ReactNode } from "react";

interface ScrollScaleProps {
  children: ReactNode;
  className?: string;
  /** Scale range [start, end] - default [0.9, 1] */
  scaleRange?: [number, number];
  /** Opacity range [start, end] - default [0.5, 1] */
  opacityRange?: [number, number];
}

/**
 * Element that scales up and fades in as user scrolls into it.
 * Creates a dramatic "zooming into view" reveal effect.
 */
const ScrollScale = memo(({
  children,
  className = "",
  scaleRange = [0.9, 1],
  opacityRange = [0.3, 1],
}: ScrollScaleProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], scaleRange);
  const opacity = useTransform(scrollYProgress, [0, 1], opacityRange);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className={className}
    >
      {children}
    </motion.div>
  );
});

ScrollScale.displayName = "ScrollScale";

export default ScrollScale;
