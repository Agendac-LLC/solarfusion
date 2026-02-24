import { useRef, useCallback, ReactNode, memo } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";

// Check if href is an internal route (starts with / but not //) or a hash link
const isInternalOrHash = (href?: string) => href && (href.startsWith("#") || (href.startsWith("/") && !href.startsWith("//")));
const isRoute = (href?: string) => href && href.startsWith("/") && !href.startsWith("//");
const isHash = (href?: string) => href && href.startsWith("#");

/** Programmatic scroll to an element by hash id – works with HashRouter */
const scrollToHash = (hash: string) => {
  const id = hash.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  as?: "a" | "button";
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  strength?: number;
}

const MagneticButton = memo(({
  children,
  className = "",
  as = "a",
  href,
  target,
  rel,
  onClick,
  strength = 0.3,
}: MagneticButtonProps) => {
  const isMobile = useIsMobile();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });
  const rafRef = useRef<number>(0);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current || isMobile) return;
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = 0;
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      x.set((e.clientX - rect.left - rect.width / 2) * strength);
      y.set((e.clientY - rect.top - rect.height / 2) * strength);
    });
  }, [isMobile, strength, x, y]);

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  const internal = as === "a" && isInternalOrHash(href);
  const useLink = as === "a" && isRoute(href);
  const useAnchor = as === "a" && isHash(href);

  // On mobile, skip magnetic effect entirely
  if (isMobile) {
    if (useLink) {
      return (
        <Link to={href!} onClick={onClick} className={className}>
          {children}
        </Link>
      );
    }
    if (useAnchor) {
      return (
        <button
          type="button"
          onClick={() => { scrollToHash(href!); onClick?.(); }}
          className={className}
        >
          {children}
        </button>
      );
    }
    if (as === "button") {
      return (
        <button onClick={onClick} className={className}>
          {children}
        </button>
      );
    }
    return (
      <a href={href} target={target} rel={rel} onClick={onClick} className={className}>
        {children}
      </a>
    );
  }

  // Desktop with magnetic effect
  if (useLink) {
    return (
      <div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="inline-flex">
        <motion.div style={{ x: springX, y: springY }}>
          <Link to={href!} onClick={onClick} className={className}>
            {children}
          </Link>
        </motion.div>
      </div>
    );
  }

  if (useAnchor) {
    return (
      <div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="inline-flex">
        <motion.div style={{ x: springX, y: springY }}>
          <button
            type="button"
            onClick={() => { scrollToHash(href!); onClick?.(); }}
            className={className}
          >
            {children}
          </button>
        </motion.div>
      </div>
    );
  }

  const Tag = as === "button" ? motion.button : motion.a;

  return (
    <div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="inline-flex">
      <Tag
        href={as === "a" ? href : undefined}
        target={target}
        rel={rel}
        onClick={onClick}
        className={className}
        style={{ x: springX, y: springY }}
      >
        {children}
      </Tag>
    </div>
  );
});

MagneticButton.displayName = "MagneticButton";

export default MagneticButton;
