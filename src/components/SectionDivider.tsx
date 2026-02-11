import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, memo } from "react";

const SectionDivider = memo(({ className = "" }: { className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.5"],
  });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <div ref={ref} className={`flex justify-center py-4 ${className}`}>
      <motion.div
        className="h-[1px] w-full max-w-md bg-border"
        style={{ scaleX, opacity, originX: 0.5 }}
      />
    </div>
  );
});

SectionDivider.displayName = "SectionDivider";

export default SectionDivider;
