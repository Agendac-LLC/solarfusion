import { motion, useScroll, useTransform } from "framer-motion";

import { useRef } from "react";

import heroImage from "@/assets/hero-solar.webp";

// import logoSite from "@/assets/logo-solar-fusion-white.png";

import logoHero from "@/assets/logo-hero.png";

import MagneticButton from "./MagneticButton";

import FloatingShapes from "./FloatingShapes";



const wordVariants = {

  hidden: { opacity: 0, y: 40 },

  visible: (i: number) => ({

    opacity: 1,

    y: 0,

    transition: {

      duration: 0.7,

      delay: 0.5 + i * 0.08,

      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],

    },

  }),

};



const Hero = () => {

  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({

    target: ref,

    offset: ["start start", "end start"],

  });



  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);



  const words = ["Là", "où", "le", "soleil", "devient", "solution"];



  return (

    <section ref={ref} className="relative h-[100svh] w-full overflow-hidden grain flex items-center justify-center">

      <motion.div

        className="absolute inset-0 w-full h-full"

        style={{ scale, y: imageY }}

      >

        <img

          src={heroImage}

          alt="Panneaux solaires installés sur toiture en Savoie"

          className="w-full h-full object-cover"

          loading="eager"

          fetchPriority="high"

          decoding="async"

          width={1920}

          height={1080}

          sizes="100vw"

        />

      </motion.div>

      {/* Logo white supprimé, seul logo-hero affiché dans le contenu */}

      <div className="hero-overlay absolute inset-0" />

      <FloatingShapes variant="dark" />

      <motion.div

        style={{ opacity, y: contentY }}

        className="absolute inset-0 z-10 flex flex-col items-center justify-center px-5 sm:px-6 text-center"

      >

        <div
          className="flex flex-col items-center justify-start w-full h-full pt-8 sm:pt-[2vh] gap-5 sm:gap-8 max-w-2xl mx-auto relative"
          style={{
            transform: 'none',
            // Sur desktop, on applique le translateY négatif pour garder l'effet original
            ...(window.innerWidth >= 640 ? { transform: 'translateY(-3cm)' } : {})
          }}
        >

          {/* Logo hero au dessus du texte */}

          <motion.img
            src={logoHero}
            alt="Logo Solar Fusion"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 140 }}
            transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
            className="w-full max-w-[180px] sm:max-w-[280px] md:max-w-[360px] lg:max-w-[440px] drop-shadow-2xl mb-0"
            style={{ filter: 'invert(1) brightness(2)', transform: window.innerWidth >= 640 ? 'translateY(3cm)' : 'none' }}
            loading="eager"
            decoding="async"
          />

          {/* Texte centré au milieu */}

          <motion.p

            initial={{ opacity: 0, y: 20 }}

            animate={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}

            className="max-w-lg text-sm sm:text-base md:text-lg leading-relaxed font-light px-2 sm:px-0 text-white drop-shadow-lg text-center mt-24 md:mt-0 mb-4 sm:mb-6"

          >

            Une solution maîtrisée.<br />

            Conçue selon vos besoins réels.<br />

            Dimensionnée avec précision, jamais standardisée.<br />

            Réalisée par notre équipe, sans intermédiaire.<br />

            Pensée pour rester fiable et rentable dans le temps.

          </motion.p>

          {/* Boutons sous le texte */}

          <motion.div

            initial={{ opacity: 0, y: 30 }}

            animate={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}

            className="flex flex-col gap-3 sm:flex-row sm:gap-4 w-full max-w-xs sm:max-w-none sm:w-auto px-4 sm:px-0"

          >

            <MagneticButton

              href="/particuliers"

              className="btn-glass-hero glow-pulse px-6 py-3.5 sm:px-12 sm:py-5 text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-center bg-white/90 text-primary shadow-md hover:scale-105 transition-transform"

            >

              Espace Particuliers

            </MagneticButton>

            <MagneticButton

              href="/b2b"

              className="btn-glass-hero px-6 py-3.5 sm:px-12 sm:py-5 text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-center bg-white/90 text-primary shadow-md hover:scale-105 transition-transform"

            >

              Espace Professionnels

            </MagneticButton>

          </motion.div>

        </div>

      </motion.div>



      {/* Scroll indicator - pure CSS animation */}

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