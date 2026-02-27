import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/maison-solaire-particulier-savoie.webp";
import logoHero from "@/assets/logo-hero.png";
import MagneticButton from "./MagneticButton";
import FloatingShapes from "./FloatingShapes";

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section ref={ref} className="relative h-[100svh] w-full overflow-hidden grain flex items-center justify-center">

      {/* Background image with parallax */}
      <motion.div className="absolute inset-0 w-full h-full" style={{ scale, y: imageY }}>
        <img
          src={heroImage}
          alt="Panneaux solaires installés sur toiture en France"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          width={1920}
          height={1080}
          sizes="100vw"
        />
      </motion.div>

      {/* Overlay */}
      <div className="hero-overlay absolute inset-0" />

      <FloatingShapes variant="dark" />

      {/* Content */}
      <motion.div
        style={{ opacity, y: contentY }}
        className="absolute inset-0 z-10 flex flex-col items-center justify-center px-5 sm:px-6 text-center"
      >
        <div className="flex flex-col items-center max-w-2xl mx-auto gap-[30px]">

          {/* Logo */}
          <motion.img
            src={logoHero}
            alt="Logo Solar Fusion"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="max-h-[150px] w-auto drop-shadow-2xl"
            style={{ filter: "invert(1) brightness(2)" }}
            loading="eager"
            decoding="async"
          />

          {/* Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
            className="max-w-lg text-sm sm:text-base md:text-lg leading-relaxed font-light text-white drop-shadow-lg"
          >
            Une solution maîtrisée.<br />
            Conçue selon vos besoins réels.<br />
            Dimensionnée avec précision, jamais standardisée.<br />
            Réalisée par notre équipe, sans intermédiaire.<br />
            Pensée pour rester fiable et rentable dans le temps.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
            className="flex flex-col gap-3 sm:flex-row sm:gap-4"
          >
            <MagneticButton
              href="/particuliers"
              className="btn-glass-hero glow-pulse px-6 py-3.5 sm:px-12 sm:py-5 text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-center bg-white/90 text-primary shadow-[0_6px_40px_rgba(0,0,0,0.75),0_2px_12px_rgba(0,0,0,0.5)] hover:shadow-[0_10px_56px_rgba(0,0,0,0.9),0_4px_16px_rgba(0,0,0,0.65)] hover:scale-105 transition-all"
            >
              Espace Particuliers
            </MagneticButton>
            <MagneticButton
              href="/b2b"
              className="btn-glass-hero px-6 py-3.5 sm:px-12 sm:py-5 text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-center bg-white/90 text-primary shadow-[0_6px_40px_rgba(0,0,0,0.75),0_2px_12px_rgba(0,0,0,0.5)] hover:shadow-[0_10px_56px_rgba(0,0,0,0.9),0_4px_16px_rgba(0,0,0,0.65)] hover:scale-105 transition-all"
            >
              Espace Professionnels
            </MagneticButton>
          </motion.div>

        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-[1px] h-10 bg-primary-foreground/30 scroll-indicator" />
      </motion.div>

    </section>
  );
};

export default Hero;