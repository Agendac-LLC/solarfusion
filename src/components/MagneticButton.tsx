import { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  as?: "a" | "button";
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  /** Strength of the magnetic pull (default 0.3) */
  strength?: number;
}

/**
 * Premium magnetic button: subtly follows the cursor when hovered,
 * creating a "pulled toward you" feeling. Apple-level micro-interaction.
 */
const MagneticButton = ({
  children,
  className = "",
  as = "a",
  href,
  target,
  rel,
  onClick,
  strength = 0.3,
}: MagneticButtonProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (e.clientX - centerX) * strength;
    const y = (e.clientY - centerY) * strength;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const Tag = as === "button" ? motion.button : motion.a;

  return (
    <div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="inline-block">
      <Tag
        href={as === "a" ? href : undefined}
        target={target}
        rel={rel}
        onClick={onClick}
        className={className}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      >
        {children}
      </Tag>
    </div>
  );
};

export default MagneticButton;
