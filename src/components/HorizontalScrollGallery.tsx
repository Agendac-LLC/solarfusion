import { useRef, memo } from "react";
import { motion, AnimatePresence, useTransform, MotionValue } from "framer-motion";
import { useState } from "react";
import BlurFade from "./BlurFade";

import img1 from "@/assets/install-chalet-village.webp";
import img2 from "@/assets/install-maison-moderne.webp";
import img3 from "@/assets/install-champ-solaire.webp";
import img4 from "@/assets/install-toiture-industrielle.webp";
import img5 from "@/assets/install-ferme-alpine.webp";

const images = [
  { src: img1, alt: "Chalet en village - installation solaire", label: "Chalet alpin" },
  { src: img2, alt: "Maison moderne - panneaux solaires", label: "Villa contemporaine" },
  { src: img3, alt: "Champ solaire en Savoie", label: "Champ solaire" },
  { src: img4, alt: "Toiture industrielle - énergie solaire", label: "Toiture pro" },
  { src: img5, alt: "Ferme alpine - installation photovoltaïque", label: "Ferme alpine" },
];

/** Extracted to avoid useTransform inside .map() - hooks rule violation */
const GalleryImage = memo(({
  img,
  index,
  direction,
}: {
  img: (typeof images)[number];
  index: number;
  scrollYProgress: MotionValue<number>;
}) => {
  return (
    <motion.div
      className="relative shrink-0 w-[95vw] sm:w-[90vw] md:w-[70vw] lg:w-[50vw] aspect-[16/9] rounded-3xl overflow-hidden group shadow-xl"
      initial={{ x: direction === 1 ? 300 : -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: direction === 1 ? -300 : 300, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <img
        src={img.src}
        alt={img.alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
        decoding="async"
        width={1200}
        height={675}
        style={{}}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <p className="absolute bottom-6 left-6 text-base font-semibold uppercase tracking-[0.15em] text-white drop-shadow-lg">
        {img.label}
      </p>
    </motion.div>
  );
});

GalleryImage.displayName = "GalleryImage";

const HorizontalScrollGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev
  const total = images.length;
  const scrollTo = (dir: number) => {
    setDirection(dir);
    setActiveIndex((prev) => {
      let next = prev + dir;
      if (next < 0) return total - 1;
      if (next >= total) return 0;
      return next;
    });
  };

  return (
    <section className="overflow-hidden py-16 sm:py-24 md:py-36 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 mb-10 sm:mb-14">
        <BlurFade>
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-primary font-medium">
            Nos réalisations
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-6xl text-foreground drop-shadow-lg">
            Installation dans toute la France.
          </h2>
        </BlurFade>
      </div>
      <div className="flex items-center justify-center">
        {/* Flèches visibles uniquement sur desktop */}
        <button
          className="hidden sm:flex items-center px-2 py-2 bg-transparent border-none text-3xl font-bold text-primary hover:text-primary/80 transition mr-2"
          onClick={() => scrollTo(-1)}
          aria-label="Précédent"
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 8L12 16L20 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div className="relative flex justify-center items-center">
          <AnimatePresence initial={false} mode="wait">
            <GalleryImage key={activeIndex} img={images[activeIndex]} index={activeIndex} direction={direction} />
          </AnimatePresence>
        </div>
        <button
          className="hidden sm:flex items-center px-2 py-2 bg-transparent border-none text-3xl font-bold text-primary hover:text-primary/80 transition ml-2"
          onClick={() => scrollTo(1)}
          aria-label="Suivant"
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 8L20 16L12 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      <div className="flex justify-center mt-8 gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            className={`w-2.5 h-2.5 rounded-full ${i === activeIndex ? 'bg-primary' : 'bg-muted-foreground/40'} transition-all duration-200`}
            onClick={() => setActiveIndex(i)}
            aria-label={`Aller à la réalisation ${i + 1}`}
            style={{ minWidth: '10px', minHeight: '10px', maxWidth: '10px', maxHeight: '10px', padding: 0, border: 'none', boxShadow: i === activeIndex ? '0 0 4px 1px rgba(0,0,0,0.10)' : 'none' }}
          />
        ))}
      </div>
    </section>
  );
};

export default HorizontalScrollGallery;
  