import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxBackground from "@/components/ParallaxBackground";
import ContactSection from "@/components/ContactSection";
import { Sun, Battery, TrendingDown, Shield, Star } from "lucide-react";
import heroImage from "@/assets/install-chalet-savoie.png";
import chaletVillage from "@/assets/install-chalet-village.png";

const benefits = [
  {
    icon: TrendingDown,
    title: "Jusqu'à -70% sur la facture",
    description: "Vous consommez ce que vous produisez. Le surplus est revendu ou stocké. Résultat visible dès le premier mois.",
    metric: "-70%",
  },
  {
    icon: Sun,
    title: "Votre propre électricité",
    description: "Vos panneaux produisent en journée. Avec une batterie, vous consommez aussi le soir.",
    metric: "100%",
  },
  {
    icon: Battery,
    title: "Stockage jour et nuit",
    description: "Batterie physique ou virtuelle selon votre usage. On dimensionne ce qui a du sens pour vous.",
    metric: "24/7",
  },
  {
    icon: Shield,
    title: "Garantie décennale",
    description: "Couverture 10 ans sur l'installation. Certification QualiPV 36K. 0 accident en 15 ans.",
    metric: "10 ans",
  },
];

const testimonials = [
  { name: "Marie L.", text: "Posé en une journée. Propre, carré. On produit plus que prévu.", rating: 5 },
  { name: "Jean-Pierre D.", text: "Production conforme aux estimations. Sébastien connaît son métier.", rating: 5 },
];

const Particuliers = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative h-[70vh] w-full overflow-hidden">
        <motion.img
          src={heroImage}
          alt="Installation solaire sur chalet en Savoie"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ y: imageY }}
          loading="eager"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mb-4 text-xs uppercase tracking-[0.4em] text-primary-foreground/60 font-medium"
          >
            Particuliers
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="max-w-4xl text-4xl font-bold leading-[1.05] text-primary-foreground md:text-6xl"
          >
            Votre toit produit,
            <br />
            vous économisez.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            className="mt-6 max-w-lg text-base text-primary-foreground/75 font-light leading-relaxed"
          >
            Installation solaire en Savoie et Haute-Savoie. On dimensionne, on pose, on garantit. Père et fils depuis 15 ans.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              to="/simulateur"
              className="btn-glass-hero px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em]"
            >
              Simuler mon projet
            </Link>
            <a
              href="tel:+33762111470"
              className="btn-glass-hero px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em]"
            >
              Être rappelé gratuitement
            </a>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection>
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-muted-foreground font-medium">
              Concrètement
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">
              Ce que le solaire change chez vous.
            </h2>
            <p className="mb-16 text-muted-foreground text-base max-w-xl">
              Des résultats mesurables, pas des promesses.
            </p>
          </AnimatedSection>
          <div className="grid gap-6 md:grid-cols-2">
            {benefits.map((b, i) => (
              <AnimatedSection key={b.title} delay={i * 0.1}>
                <div className="flex gap-6 p-8 rounded-2xl glass-card-light transition-all duration-300">
                  <div className="shrink-0">
                    <p className="text-2xl font-bold tracking-tight">{b.metric}</p>
                    <b.icon className="mt-2 h-5 w-5 text-muted-foreground" strokeWidth={1.2} />
                  </div>
                  <div>
                    <h3 className="mb-2 text-base font-semibold">{b.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{b.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA mid-page */}
      <ParallaxBackground
        image={chaletVillage}
        alt="Chalet avec panneaux solaires en village alpin"
        overlayOpacity={0.55}
        blur={2}
      >
        <div className="section-padding">
          <div className="mx-auto max-w-4xl text-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold md:text-5xl text-primary-foreground mb-6">
                Combien économiseriez-vous ?
              </h2>
              <p className="mb-10 text-primary-foreground/70 text-base max-w-lg mx-auto">
                Entrez votre adresse et votre facture. Résultat en 2 minutes.
              </p>
              <Link
                to="/simulateur"
                className="btn-pill bg-primary-foreground text-primary inline-block px-12 py-5 text-xs font-semibold uppercase tracking-[0.2em]"
              >
                Lancer le simulateur
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </ParallaxBackground>

      {/* Trust */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection>
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-muted-foreground font-medium">
              Retours clients
            </p>
            <h2 className="mb-16 text-3xl font-bold md:text-5xl">
              Ils l'ont fait.
            </h2>
          </AnimatedSection>
          <div className="grid gap-6 md:grid-cols-2 mb-12">
            {testimonials.map((review, i) => (
              <AnimatedSection key={review.name} delay={i * 0.1}>
                <div className="glass-card-light p-8 rounded-2xl transition-all duration-300">
                  <div className="mb-4 flex gap-0.5">
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <Star key={j} className="h-3.5 w-3.5 fill-foreground text-foreground" />
                    ))}
                  </div>
                  <p className="mb-4 text-muted-foreground leading-relaxed text-sm">« {review.text} »</p>
                  <p className="text-xs font-semibold uppercase tracking-wider">{review.name}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.2}>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <div className="glass-card-light px-6 py-3 rounded-full transition-all duration-300">
                <p className="text-xs font-semibold uppercase tracking-wider">QualiPV 36K</p>
              </div>
              <div className="glass-card-light px-6 py-3 rounded-full transition-all duration-300">
                <p className="text-xs font-semibold uppercase tracking-wider">Garantie Décennale</p>
              </div>
              <div className="glass-card-light px-6 py-3 rounded-full transition-all duration-300">
                <p className="text-xs font-semibold uppercase tracking-wider">0 accident en 15 ans</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ContactSection />
    </>
  );
};

export default Particuliers;
