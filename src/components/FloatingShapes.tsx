import { memo } from "react";

/**
 * Ambient floating shapes — pure CSS keyframes for zero JS overhead.
 * Replaces Framer Motion infinite animations with GPU-composited CSS.
 */
const FloatingShapes = memo(({ variant = "light" }: { variant?: "light" | "dark" }) => {
  const color = variant === "dark" ? "255,255,255" : "0,0,0";

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div
        className="absolute rounded-full floating-shape-1"
        style={{
          width: 300,
          height: 300,
          left: "10%",
          top: "15%",
          background: `radial-gradient(circle, rgba(${color},0.03), transparent 70%)`,
        }}
      />
      <div
        className="absolute rounded-full floating-shape-2"
        style={{
          width: 200,
          height: 200,
          left: "75%",
          top: "60%",
          background: `radial-gradient(circle, rgba(${color},0.02), transparent 70%)`,
        }}
      />
      <div
        className="absolute rounded-full floating-shape-3"
        style={{
          width: 150,
          height: 150,
          left: "85%",
          top: "20%",
          background: `radial-gradient(circle, rgba(${color},0.025), transparent 70%)`,
        }}
      />
    </div>
  );
});

FloatingShapes.displayName = "FloatingShapes";

export default FloatingShapes;
