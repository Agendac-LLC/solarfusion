import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode, memo } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface ParallaxBackgroundProps {
  image: string;
  alt: string;
  children: ReactNode;
  className?: string;
  overlayOpacity?: number;
  blur?: number;
  fadeEdges?: boolean;
}

const ParallaxBackground = memo(({
  image,
  alt,
  children,
  className = "",
  overlayOpacity = 0.55,
  blur = 0,
}: ParallaxBackgroundProps) => {
  const isMobile = useIsMobile();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], isMobile ? ["0%", "0%"] : ["-25%", "25%"]);

  return (
    <section ref={ref} className={`relative overflow-hidden parallax-container ${className}`}>
      <motion.img
        src={image}
        alt={alt}
        className={
          isMobile
            ? "absolute inset-0 w-full h-full object-cover pointer-events-none"
            : "absolute inset-0 w-full h-[150%] object-cover -top-[25%] pointer-events-none"
        }
        style={{
          y: isMobile ? undefined : y,
          filter: blur ? `blur(${blur}px)` : undefined,
        }}
        loading="lazy"
        decoding="async"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, hsl(0 0% 0% / ${overlayOpacity}) 0%, hsl(0 0% 0% / ${overlayOpacity * 0.6}) 40%, hsl(0 0% 0% / ${overlayOpacity * 0.8}) 70%, hsl(0 0% 0% / ${overlayOpacity}) 100%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </section>
  );
});

ParallaxBackground.displayName = "ParallaxBackground";

export default ParallaxBackground;
