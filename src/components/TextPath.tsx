import { motion } from "framer-motion";
import { useId } from "react";

interface TextPathProps {
  text: string;
  className?: string;
  /** Duration of one full loop in seconds */
  duration?: number;
}

/**
 * Text that flows along a sinusoidal SVG path, creating organic movement.
 */
const TextPath = ({ text, className = "", duration = 20 }: TextPathProps) => {
  const id = useId();
  const pathId = `textpath-${id.replace(/:/g, "")}`;

  // Sinusoidal wave path spanning double width for seamless loop
  const d =
    "M0,50 C80,10 160,90 240,50 C320,10 400,90 480,50 C560,10 640,90 720,50 C800,10 880,90 960,50 C1040,10 1120,90 1200,50";

  return (
    <div className={`overflow-hidden w-full ${className}`}>
      <svg
        viewBox="0 0 600 100"
        className="w-full h-auto"
        preserveAspectRatio="xMidYMid meet"
        aria-label={text}
      >
        <defs>
          <path id={pathId} d={d} fill="none" />
        </defs>
        <motion.text
          className="fill-current"
          fontSize="14"
          fontWeight="500"
          letterSpacing="0.15em"
          textAnchor="start"
        >
          <motion.textPath
            href={`#${pathId}`}
            startOffset="0%"
            animate={{ startOffset: ["0%", "-100%"] }}
            transition={{
              startOffset: {
                repeat: Infinity,
                duration,
                ease: "linear",
              },
            }}
          >
            {text} — {text} — {text} —{" "}
          </motion.textPath>
        </motion.text>
      </svg>
    </div>
  );
};

export default TextPath;
