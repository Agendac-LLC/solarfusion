import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/hero-solar.png";
import { Link } from "react-router-dom";
import MagneticButton from "./MagneticButton";

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

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden grain">
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
        />
      </motion.div>
      <div className="hero-overlay absolute inset-0" />
      <motion.div
        style={{ opacity, y: contentY }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mb-4 text-xs uppercase tracking-[0.4em] text-primary-foreground/60 font-medium"
        >
          Savoie & Haute-Savoie
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="max-w-4xl text-4xl font-bold leading-[1.05] text-primary-foreground md:text-6xl lg:text-7xl"
        >
          Produisez votre
          <br />
          propre électricité.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="mt-6 max-w-lg text-base text-primary-foreground/75 md:text-lg leading-relaxed font-light"
        >
          15 ans d'installations solaires. 0 accident. Garantie décennale. Père et fils, on pose vos panneaux comme si c'était chez nous.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <MagneticButton
            href="#simulateur"
            className="btn-glass-hero px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em]"
            strength={0.4}
          >
            Simuler mes économies
          </MagneticButton>
          <MagneticButton
            href="/b2b"
            className="btn-glass-hero px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em]"
            strength={0.4}
          >
            Espace Professionnels
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-10 bg-primary-foreground/30"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
