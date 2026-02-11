import { useRef, useCallback, ReactNode, memo } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  tiltMax?: number;
  scaleHover?: number;
  glare?: boolean;
}

const TiltCard = memo(({
  children,
  className = "",
  tiltMax = 8,
  scaleHover = 1.02,
  glare = true,
}: TiltCardProps) => {
  const isMobile = useIsMobile();
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const rafRef = useRef<number>(0);

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

  const glareX = useTransform(mouseX, [0, 1], [0, 100]);
  const glareY = useTransform(mouseY, [0, 1], [0, 100]);
  const glareOpacity = useMotionValue(0);
  const springGlareOpacity = useSpring(glareOpacity, { stiffness: 200, damping: 20 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current || isMobile) return;
    // Throttle with rAF
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = 0;
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    });
  }, [isMobile, mouseX, mouseY]);

  const handleMouseEnter = useCallback(() => {
    if (isMobile) return;
    scale.set(scaleHover);
    glareOpacity.set(0.15);
  }, [isMobile, scale, scaleHover, glareOpacity]);

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0.5);
    mouseY.set(0.5);
    scale.set(1);
    glareOpacity.set(0);
  }, [mouseX, mouseY, scale, glareOpacity]);

  // On mobile, render without tilt (no mouse events, no transforms)
  if (isMobile) {
    return <div className={`relative ${className}`}>{children}</div>;
  }

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
        willChange: "transform",
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
});

TiltCard.displayName = "TiltCard";

export default TiltCard;
