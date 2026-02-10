import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useId } from "react";

interface OrganicMaskProps {
  src: string;
  alt: string;
  className?: string;
}

// Organic blob shapes that morph between each other
const blobPaths = [
  "M45,0 C65,5 85,15 95,35 C105,55 100,80 85,92 C70,104 45,105 25,95 C5,85 -5,65 2,42 C9,19 25,-5 45,0Z",
  "M50,2 C72,0 92,18 98,40 C104,62 95,85 78,96 C61,107 38,102 20,90 C2,78 -4,55 5,35 C14,15 28,4 50,2Z",
  "M42,1 C60,0 82,12 93,32 C104,52 102,78 88,93 C74,108 50,108 30,97 C10,86 -2,66 1,45 C4,24 24,2 42,1Z",
];

/**
 * Image with an organic morphing blob mask that evolves on scroll.
 */
const OrganicMask = ({ src, alt, className = "" }: OrganicMaskProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();
  const clipId = `organic-${id.replace(/:/g, "")}`;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Interpolate between blob paths based on scroll
  const pathIndex = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 2]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <clipPath id={clipId} clipPathUnits="objectBoundingBox" transform="scale(0.01)">
            <motion.path
              d={blobPaths[0]}
              animate={{
                d: blobPaths,
              }}
              transition={{
                d: {
                  repeat: Infinity,
                  duration: 12,
                  ease: "easeInOut",
                  repeatType: "reverse",
                },
              }}
            />
          </clipPath>
        </defs>
      </svg>
      <div
        style={{
          clipPath: `url(#${clipId})`,
          WebkitClipPath: `url(#${clipId})`,
        }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
};

export default OrganicMask;
