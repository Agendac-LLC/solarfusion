import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

import img1 from "@/assets/install-chalet-village.png";
import img2 from "@/assets/install-maison-moderne.png";
import img3 from "@/assets/install-champ-solaire.png";
import img4 from "@/assets/install-toiture-industrielle.png";
import img5 from "@/assets/install-ferme-alpine.png";

const images = [
  { src: img1, alt: "Chalet en village - installation solaire", label: "Chalet alpin" },
  { src: img2, alt: "Maison moderne - panneaux solaires", label: "Villa contemporaine" },
  { src: img3, alt: "Champ solaire en Savoie", label: "Champ solaire" },
  { src: img4, alt: "Toiture industrielle - énergie solaire", label: "Toiture pro" },
  { src: img5, alt: "Ferme alpine - installation photovoltaïque", label: "Ferme alpine" },
];

/**
 * Horizontal scroll gallery: as the user scrolls vertically, images slide horizontally.
 * Creates a dramatic "cinematic reel" effect.
 */
const HorizontalScrollGallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-45%"]);

  return (
    <section ref={containerRef} className="overflow-hidden py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6 mb-12">
        <AnimatedSection>
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-muted-foreground font-medium">
            Nos réalisations
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            Installés en Savoie.
          </h2>
        </AnimatedSection>
      </div>
      <motion.div style={{ x }} className="flex gap-6 pl-6 md:pl-24">
        {images.map((img, i) => (
          <motion.div
            key={img.label}
            className="relative shrink-0 w-[75vw] md:w-[40vw] lg:w-[30vw] aspect-[4/3] rounded-2xl overflow-hidden group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.6, delay: i * 0.05, ease: "easeOut" }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-5 text-xs font-semibold uppercase tracking-[0.15em] text-primary-foreground">
              {img.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default HorizontalScrollGallery;
