import { motion, useScroll, useVelocity, useTransform, useSpring } from "framer-motion";
import { useRef, ReactNode } from "react";

interface KineticTextProps {
  children: ReactNode;
  className?: string;
  /** Tag to render */
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

/**
 * Typography that reacts to scroll velocity.
 * Letter-spacing expands when scrolling fast, contracts when still.
 */
const KineticText = ({ children, className = "", as = "h2" }: KineticTextProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);

  // Map velocity (px/s) to letter-spacing shift
  const rawSpacing = useTransform(velocity, [-2000, 0, 2000], [0.06, 0, 0.06]);
  const letterSpacing = useSpring(rawSpacing, { stiffness: 150, damping: 20 });

  // Map velocity to subtle font-weight variation via opacity of a bold overlay
  const rawWeight = useTransform(velocity, [-1500, 0, 1500], [0.3, 0, 0.3]);
  const weightOverlay = useSpring(rawWeight, { stiffness: 120, damping: 25 });

  const Tag = motion[as];

  return (
    <div ref={ref} className="relative">
      <Tag
        className={className}
        style={{
          letterSpacing: useTransform(letterSpacing, (v) => `${v}em`),
        }}
      >
        {children}
      </Tag>
      {/* Bold overlay for dynamic weight effect */}
      <Tag
        className={`${className} absolute inset-0 font-black`}
        style={{
          opacity: weightOverlay,
          letterSpacing: useTransform(letterSpacing, (v) => `${v}em`),
        }}
        aria-hidden="true"
      >
        {children}
      </Tag>
    </div>
  );
};

export default KineticText;
