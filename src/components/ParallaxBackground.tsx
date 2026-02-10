import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ParallaxBackgroundProps {
  image: string;
  alt: string;
  children: ReactNode;
  className?: string;
  overlayOpacity?: number;
  /** Extra blur on the image for text legibility */
  blur?: number;
}

const ParallaxBackground = ({
  image,
  alt,
  children,
  className = "",
  overlayOpacity = 0.55,
  blur = 0,
}: ParallaxBackgroundProps) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Parallax image layer */}
      <motion.img
        src={image}
        alt={alt}
        className="absolute inset-0 w-full h-[130%] object-cover -top-[15%] pointer-events-none"
        style={{
          y,
          filter: blur ? `blur(${blur}px)` : undefined,
        }}
        loading="lazy"
      />
      {/* Dark overlay for text contrast */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, hsl(0 0% 0% / ${overlayOpacity}) 0%, hsl(0 0% 0% / ${overlayOpacity * 0.6}) 40%, hsl(0 0% 0% / ${overlayOpacity * 0.8}) 70%, hsl(0 0% 0% / ${overlayOpacity}) 100%)`,
        }}
      />
      {/* Content layer */}
      <div className="relative z-10">{children}</div>
    </section>
  );
};

export default ParallaxBackground;
