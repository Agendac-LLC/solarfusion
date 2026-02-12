import { memo } from "react";

/**
 * Lightweight divider — pure CSS intersection-based animation.
 * Replaces per-instance useScroll + useTransform with a simple CSS animation.
 */
const SectionDivider = memo(({ className = "" }: { className?: string }) => (
  <div className={`flex justify-center py-4 ${className}`}>
    <div className="h-[1px] w-full max-w-md bg-border section-divider-line" />
  </div>
));

SectionDivider.displayName = "SectionDivider";

export default SectionDivider;
