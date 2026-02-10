import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, ReactNode, useCallback } from "react";

interface MagneticFloatProps {
  children: ReactNode;
  className?: string;
  /** Magnetic pull strength (px) */
  strength?: number;
  /** Base floating amplitude (px) */
  floatAmplitude?: number;
}

/**
 * Element that floats autonomously and gets attracted to the cursor.
 */
const MagneticFloat = ({
  children,
  className = "",
  strength = 25,
  floatAmplitude = 8,
}: MagneticFloatProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 80, damping: 15, mass: 0.8 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;
      const dist = Math.sqrt(distX ** 2 + distY ** 2);
      const maxDist = 300;

      if (dist < maxDist) {
        const factor = (1 - dist / maxDist) * (strength / maxDist) * dist * 0.15;
        mouseX.set((distX / dist) * factor);
        mouseY.set((distY / dist) * factor);
      }
    },
    [mouseX, mouseY, strength]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        y: [0, -floatAmplitude, 0, floatAmplitude * 0.6, 0],
      }}
      transition={{
        y: {
          repeat: Infinity,
          duration: 6 + Math.random() * 2,
          ease: "easeInOut",
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default MagneticFloat;
