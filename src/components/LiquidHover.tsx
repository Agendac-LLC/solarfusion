import { useState, ReactNode, useId } from "react";

interface LiquidHoverProps {
  children: ReactNode;
  className?: string;
}

/**
 * Wraps children with a liquid distortion effect on hover.
 * Uses an inline SVG feTurbulence filter for the water-like effect.
 */
const LiquidHover = ({ children, className = "" }: LiquidHoverProps) => {
  const [hovered, setHovered] = useState(false);
  const id = useId();
  const filterId = `liquid-${id.replace(/:/g, "")}`;

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <filter id={filterId}>
            <feTurbulence
              type="fractalNoise"
              baseFrequency={hovered ? "0.015" : "0"}
              numOctaves="3"
              result="noise"
            >
              {hovered && (
                <animate
                  attributeName="baseFrequency"
                  values="0;0.015;0.01;0.015;0"
                  dur="0.8s"
                  repeatCount="1"
                />
              )}
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale={hovered ? "8" : "0"}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
      <div
        style={{
          filter: hovered ? `url(#${filterId})` : "none",
          transition: "filter 0.3s ease-out",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default LiquidHover;
