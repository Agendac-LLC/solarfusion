import { memo, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BlurFade from "./BlurFade";

import img1 from "@/assets/maison-solaire-particulier-savoie.webp";
import img2 from "@/assets/installation-solaire-toiture-particulier-chambery.webp";
import img3 from "@/assets/panneaux-solaires-maison-individuelle-france.webp";
import img4 from "@/assets/installation-photovoltaique-maison-particulier.webp";
import img5 from "@/assets/installation-solaire-professionnelle-toiture.webp";
import img6 from "@/assets/panneaux-solaires-batiment-professionnel-savoie.webp";
import img7 from "@/assets/installation-photovoltaique-entreprise-france.webp";

const images = [
  { src: img1, alt: "Maison avec panneaux solaires en Savoie", label: "Maison de particulier" },
  { src: img2, alt: "Installation solaire sur toiture particulier", label: "Installation sur toiture" },
  { src: img3, alt: "Panneaux solaires sur maison individuelle en France", label: "Maison individuelle" },
  { src: img4, alt: "Installation photovoltaïque maison particulier en France", label: "Installation photovoltaïque" },
  { src: img5, alt: "Installation solaire professionnelle sur toiture en France", label: "Installation professionnelle" },
  { src: img6, alt: "Panneaux solaires bâtiment professionnel", label: "Bâtiment professionnel" },
  { src: img7, alt: "Installation photovoltaïque entreprise en France", label: "Site industriel" },
];

const GalleryImage = memo(({
  img,
  index,
  direction,
}: {
  img: (typeof images)[number];
  index: number;
  direction: number;
}) => {
  return (
    <motion.div
      className="relative shrink-0 w-[90vw] sm:w-[90vw] md:w-[70vw] lg:w-[50vw] aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden group shadow-xl"
      initial={{ x: direction === 1 ? 300 : -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: direction === 1 ? -300 : 300, opacity: 0 }}
      transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <img
        src={img.src}
        alt={img.alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
        decoding="async"
        width={1200}
        height={675}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <p className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-sm sm:text-base font-semibold uppercase tracking-[0.15em] text-white drop-shadow-lg">
        {img.label}
      </p>
    </motion.div>
  );
});

GalleryImage.displayName = "GalleryImage";

const HorizontalScrollGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = images.length;
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const scrollTo = useCallback((dir: number) => {
    setDirection(dir);
    setActiveIndex((prev) => {
      let next = prev + dir;
      if (next < 0) return total - 1;
      if (next >= total) return 0;
      return next;
    });
  }, [total]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;
    // Only trigger if horizontal swipe is dominant and exceeds threshold
    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
      scrollTo(deltaX < 0 ? 1 : -1);
    }
    touchStartX.current = null;
    touchStartY.current = null;
  }, [scrollTo]);

  return (
    <section className="overflow-hidden py-12 sm:py-24 md:py-36 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 mb-8 sm:mb-14">
        <BlurFade>
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-primary font-medium">
            Nos réalisations
          </p>
          <h2 className="text-3xl font-medium md:text-5xl text-foreground font-heading">
            Installation dans toute la France.
          </h2>
        </BlurFade>
      </div>
      <div
        className="flex items-center justify-center"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <button
          className="hidden sm:flex items-center px-2 py-2 bg-transparent border-none text-3xl font-bold text-primary hover:text-primary/80 transition mr-2"
          onClick={() => scrollTo(-1)}
          aria-label="Précédent"
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M20 8L12 16L20 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <div className="relative flex justify-center items-center touch-pan-y">
          <AnimatePresence initial={false} mode="wait">
            <GalleryImage key={activeIndex} img={images[activeIndex]} index={activeIndex} direction={direction} />
          </AnimatePresence>
        </div>
        <button
          className="hidden sm:flex items-center px-2 py-2 bg-transparent border-none text-3xl font-bold text-primary hover:text-primary/80 transition ml-2"
          onClick={() => scrollTo(1)}
          aria-label="Suivant"
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M12 8L20 16L12 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
      </div>
      {/* Mobile swipe hint */}
      <p className="sm:hidden text-center text-xs text-muted-foreground/40 mt-4 tracking-widest select-none">
        ← Glissez →
      </p>
      <div className="flex justify-center mt-2 sm:mt-6 gap-1">
        {images.map((_, i) => (
          <button
            key={i}
            className="p-2 flex items-center justify-center bg-transparent border-0"
            onClick={() => setActiveIndex(i)}
            aria-label={`Aller à la réalisation ${i + 1}`}
          >
            <span
              className={`block w-2.5 h-2.5 rounded-full transition-all duration-200 ${i === activeIndex ? 'bg-primary scale-125' : 'bg-muted-foreground/40'}`}
            />
          </button>
        ))}
      </div>
    </section>
  );
};

export default HorizontalScrollGallery;
