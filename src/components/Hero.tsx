import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/hero-solar.webp";
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

  const words = ["Produisez", "votre", "propre", "électricité."];

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

        {/* Word-split title - 4 motion.span instead of 34 */}
        <h1 className="max-w-4xl text-3xl font-bold leading-[1.08] text-primary-foreground sm:text-4xl md:text-6xl lg:text-7xl">
          {words.map((word, i) => (
            <motion.span
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={wordVariants}
              className="inline-block mr-[0.25em]"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          className="mt-5 max-w-lg text-sm text-primary-foreground/75 sm:text-base md:text-lg leading-relaxed font-light px-2 sm:px-0"
        >
          15 ans d'installations solaires. 0 accident. Garantie décennale. Père et fils, on pose vos panneaux comme si c'était chez nous.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4 w-full px-4 sm:w-auto sm:px-0"
        >
          <MagneticButton
            href="/particuliers"
            className="btn-glass-hero glow-pulse px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-center sm:px-10"
          >
            Espace Particuliers
          </MagneticButton>
          <MagneticButton
            href="/b2b"
            className="btn-glass-hero px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-center sm:px-8"
          >
            Espace Professionnels
          </MagneticButton>
        </motion.div>
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
