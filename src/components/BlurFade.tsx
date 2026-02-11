import { motion } from "framer-motion";
import { ReactNode, memo } from "react";

interface BlurFadeProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  /** Direction of slide */
  direction?: "up" | "down" | "left" | "right" | "none";
  /** Initial blur amount in px */
  blur?: number;
}

/**
 * Premium entrance animation: content fades in while de-blurring.
 * Creates an "emerging from haze" cinematic effect.
 */
const BlurFade = memo(({
  children,
  className = "",
  delay = 0,
  duration = 0.7,
  direction = "up",
  blur = 10,
}: BlurFadeProps) => {
  const directionOffset = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: -30 },
    right: { x: 30 },
    none: {},
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        filter: `blur(${blur}px)`,
        ...directionOffset[direction],
      }}
      whileInView={{
        opacity: 1,
        filter: "blur(0px)",
        ...(direction === "up" || direction === "down" ? { y: 0 } : {}),
        ...(direction === "left" || direction === "right" ? { x: 0 } : {}),
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
});

BlurFade.displayName = "BlurFade";

export default BlurFade;
