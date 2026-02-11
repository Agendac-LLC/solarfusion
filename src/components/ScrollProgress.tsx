import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Thin progress bar fixed at the top of the viewport that fills as the user scrolls.
 * Adds a sense of progression and polish.
 */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-foreground z-50 origin-left"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
