import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface HorizontalScrollProps {
  children: ReactNode;
  /** Number of "screens" worth of horizontal content */
  panels: number;
  className?: string;
}

/**
 * Converts vertical scroll into horizontal movement.
 * The section is pinned while the user scrolls through it.
 */
const HorizontalScroll = ({ children, panels, className = "" }: HorizontalScrollProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(panels - 1) * 100}%`]);

  return (
    <div ref={ref} style={{ height: `${panels * 100}vh` }} className={className}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          className="flex h-full"
          style={{ x, width: `${panels * 100}%` }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
