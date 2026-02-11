import { motion } from "framer-motion";
import { memo } from "react";

/**
 * Ambient floating shapes that add depth and movement to sections.
 * Purely decorative - creates a sense of living, breathing design.
 */
const FloatingShapes = memo(({ variant = "light" }: { variant?: "light" | "dark" }) => {
  const baseColor = variant === "dark" ? "hsl(0 0% 100%)" : "hsl(0 0% 0%)";

  const shapes = [
    { size: 300, x: "10%", y: "15%", duration: 20, delay: 0, opacity: 0.03 },
    { size: 200, x: "75%", y: "60%", duration: 25, delay: 2, opacity: 0.02 },
    { size: 150, x: "85%", y: "20%", duration: 18, delay: 5, opacity: 0.025 },
    { size: 250, x: "30%", y: "80%", duration: 22, delay: 3, opacity: 0.02 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            background: `radial-gradient(circle, ${baseColor} / ${shape.opacity}, transparent 70%)`,
          }}
          animate={{
            y: [0, -30, 0, 20, 0],
            x: [0, 15, 0, -10, 0],
            scale: [1, 1.1, 1, 0.95, 1],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
});

FloatingShapes.displayName = "FloatingShapes";

export default FloatingShapes;
