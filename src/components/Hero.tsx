import { motion } from "framer-motion";
import heroImage from "@/assets/hero-solar.jpg";
import { Link } from "react-router-dom";

const Hero = () => (
  <section className="relative h-screen w-full overflow-hidden">
    <img
      src={heroImage}
      alt="Installation panneaux solaires sur maison moderne"
      className="absolute inset-0 w-full h-full object-cover"
      loading="eager"
    />
    <div className="hero-overlay absolute inset-0" />
    <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-4 text-sm uppercase tracking-[0.3em] text-primary-foreground/70"
      >
        Autoconsommation photovoltaïque
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-4xl text-4xl font-semibold leading-tight text-primary-foreground md:text-6xl lg:text-7xl"
      >
        L'énergie solaire,
        <br />
        simplement.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-6 max-w-xl text-lg text-primary-foreground/80 md:text-xl"
      >
        Produisez, stockez et consommez votre propre électricité grâce à nos solutions photovoltaïques et batteries virtuelles ou physiques.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-10 flex flex-col gap-4 sm:flex-row"
      >
        <a
          href="#simulateur"
          className="bg-primary-foreground px-8 py-4 text-sm font-medium uppercase tracking-widest text-primary transition-opacity hover:opacity-80"
        >
          Simuler mes économies
        </a>
        <Link
          to="/b2b"
          className="border border-primary-foreground/30 px-8 py-4 text-sm font-medium uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary-foreground/10"
        >
          Espace Professionnels
        </Link>
      </motion.div>
    </div>
  </section>
);

export default Hero;
