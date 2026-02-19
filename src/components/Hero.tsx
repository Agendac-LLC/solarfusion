import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/hero-solar.webp";
import logoSite from "@/assets/logo-solar-fusion-white.png";
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
  // Logo parallax: compensate contentY (-15%) and match imageY (30%) => net offset 0% to 45%
  const logoY = useTransform(scrollYProgress, [0, 1], ["0%", "45%"]);

  const words = ["Là", "où", "le", "soleil", "devient", "solution"];

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
          width={1920}
          height={1080}
        />
      </motion.div>
      <div className="hero-overlay absolute inset-0" />
      <FloatingShapes variant="dark" />
      <motion.div
        style={{ opacity, y: contentY }}
        className="relative z-10 flex h-full items-center justify-center px-6 text-center"
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-full max-w-2xl bg-black/60 backdrop-blur-sm rounded-xl" />
        <div className="relative z-10 w-full max-w-2xl mx-auto p-6 rounded-xl flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mb-4 flex justify-center items-center"
          style={{ y: logoY, scale }}
        >
          <img
            src={logoSite}
            alt="Logo SolarFusion"
            className="max-h-14 md:max-h-20 w-auto drop-shadow-lg object-contain"
            loading="eager"
            decoding="async"
          />
        </motion.div>
        <h1 className="mb-6 text-4xl font-bold md:text-6xl text-white drop-shadow-xl">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial="hidden"
              animate="visible"
              variants={wordVariants}
              custom={i}
              className="inline-block mr-[0.25em] text-white drop-shadow-lg"
            >
              {word}
            </motion.span>
          ))}
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          className="mt-5 max-w-lg text-sm sm:text-base md:text-lg leading-relaxed font-light px-2 sm:px-0 text-white drop-shadow-lg"
        >
          Vous voulez arrêter de subir les hausses d'énergie ? On dimensionne votre installation pour vos besoins, pas pour le catalogue. Père et fils, on s'engage sur la sécurité, la qualité et le suivi. Zéro accident, zéro surprise.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4 w-full px-4 sm:w-auto sm:px-0"
        >
          <MagneticButton
            href="/particuliers"
            className="btn-glass-hero glow-pulse px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-center sm:px-10 bg-white/90 text-primary"
          >
            Espace Particuliers
          </MagneticButton>
          <MagneticButton
            href="/b2b"
            className="btn-glass-hero px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-center sm:px-8 bg-white/90 text-primary"
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
