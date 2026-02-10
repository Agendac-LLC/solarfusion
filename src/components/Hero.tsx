import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/hero-solar.png";
import { Link } from "react-router-dom";

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      <motion.img
        src={heroImage}
        alt="Installation panneaux solaires sur maison moderne"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ y: imageY }}
        loading="eager"
      />
      <div className="hero-overlay absolute inset-0" />
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mb-4 text-xs uppercase tracking-[0.4em] text-primary-foreground/60 font-medium"
        >
          Autoconsommation photovoltaïque
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="max-w-4xl text-4xl font-bold leading-[1.05] text-primary-foreground md:text-6xl lg:text-7xl"
        >
          L'énergie solaire,
          <br />
          simplement.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="mt-6 max-w-lg text-base text-primary-foreground/75 md:text-lg leading-relaxed font-light"
        >
          Produisez, stockez et consommez votre propre électricité grâce à nos solutions photovoltaïques et batteries virtuelles ou physiques.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#simulateur"
            className="px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-all duration-300 hover:scale-[1.02]"
            style={{
              borderRadius: "9999px",
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
              background: "linear-gradient(135deg, hsla(0,0%,100%,0.2) 0%, hsla(0,0%,100%,0.12) 100%)",
              border: "1px solid hsla(0,0%,100%,0.2)",
              boxShadow: "0 8px 32px -8px hsla(0,0%,0%,0.3), inset 0 1px 0 hsla(0,0%,100%,0.15)",
            }}
          >
            Simuler mes économies
          </a>
          <Link
            to="/b2b"
            className="px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-all duration-300 hover:scale-[1.02]"
            style={{
              borderRadius: "9999px",
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
              background: "linear-gradient(135deg, hsla(0,0%,100%,0.2) 0%, hsla(0,0%,100%,0.12) 100%)",
              border: "1px solid hsla(0,0%,100%,0.2)",
              boxShadow: "0 8px 32px -8px hsla(0,0%,0%,0.3), inset 0 1px 0 hsla(0,0%,100%,0.15)",
            }}
          >
            Espace Professionnels
          </Link>
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
