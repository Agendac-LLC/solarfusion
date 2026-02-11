import { useRef, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  /** Max tilt angle in degrees (default 8) */
  tiltMax?: number;
  /** Scale on hover (default 1.02) */
  scaleHover?: number;
  /** Glare effect (default true) */
  glare?: boolean;
}

/**
 * Mouse-following 3D tilt card with optional glare.
 * Creates a physical, tactile depth effect.
 */
const TiltCard = ({
  children,
  className = "",
  tiltMax = 8,
  scaleHover = 1.02,
  glare = true,
}: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [tiltMax, -tiltMax]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-tiltMax, tiltMax]), {
    stiffness: 200,
    damping: 20,
  });
  const scale = useMotionValue(1);
  const springScale = useSpring(scale, { stiffness: 200, damping: 20 });

  // Glare position
  const glareX = useTransform(mouseX, [0, 1], [0, 100]);
  const glareY = useTransform(mouseY, [0, 1], [0, 100]);
  const glareOpacity = useMotionValue(0);
  const springGlareOpacity = useSpring(glareOpacity, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => {
    scale.set(scaleHover);
    glareOpacity.set(0.15);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
    scale.set(1);
    glareOpacity.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative ${className}`}
      style={{
        rotateX,
        rotateY,
        scale: springScale,
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
      }}
    >
      {children}
      {glare && (
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          style={{
            opacity: springGlareOpacity,
            background: useTransform(
              [glareX, glareY],
              ([x, y]) =>
                `radial-gradient(circle at ${x}% ${y}%, hsl(0 0% 100% / 0.6), transparent 60%)`
            ),
          }}
        />
      )}
    </motion.div>
  );
};

export default TiltCard;
