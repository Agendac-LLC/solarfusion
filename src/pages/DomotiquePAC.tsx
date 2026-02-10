import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import ContactSection from "@/components/ContactSection";
import { Thermometer, Wifi, Zap, BarChart3 } from "lucide-react";
import heroImage from "@/assets/install-maison-moderne.png";

const services = [
  {
    icon: Thermometer,
    title: "Pompes à chaleur Hitachi",
    description: "Air-air et air-eau. Installation réalisée par nos partenaires qualifiés, coordination et suivi assurés par Solar Fusion.",
    detail: "Partenaire Hitachi.",
  },
  {
    icon: Wifi,
    title: "Domotique énergétique",
    description: "Pilotez chauffage et appareils depuis votre téléphone. Vous voyez ce que vous consommez, en temps réel.",
    detail: "Programmation sur mesure.",
  },
  {
    icon: Zap,
    title: "Couplage solaire + PAC",
    description: "Vos panneaux alimentent votre pompe à chaleur. Résultat : chauffage quasi gratuit en mi-saison.",
    detail: "Jusqu'à 90% d'autoconsommation.",
  },
  {
    icon: BarChart3,
    title: "Suivi en temps réel",
    description: "Production, consommation, économies - tout sur votre smartphone. Alertes si quelque chose ne va pas.",
    detail: "Tableaux de bord personnalisés.",
  },
];

const DomotiquePAC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative h-[70vh] w-full overflow-hidden">
        <motion.img
          src={heroImage}
          alt="Maison moderne avec domotique et solaire"
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
            Domotique & PAC
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="max-w-4xl text-4xl font-bold leading-[1.05] text-primary-foreground md:text-6xl"
          >
            Chauffez malin,
            <br />
            consommez moins.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            className="mt-6 max-w-lg text-base text-primary-foreground/75 font-light leading-relaxed"
          >
            PAC Hitachi + domotique + solaire. Le trio qui réduit vos factures de chauffage sans compromis sur le confort.
          </motion.p>
          <motion.a
            href="tel:+33762111470"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
            className="btn-glass-hero mt-10 px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em]"
          >
            Être rappelé gratuitement
          </motion.a>
        </div>
      </section>

      {/* Solutions */}
      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection>
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-muted-foreground font-medium">
              Nos solutions
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">
              Chauffage, clim, pilotage.
            </h2>
            <p className="mb-16 text-muted-foreground text-base max-w-xl">
              Chaque solution se couple au solaire pour maximiser vos économies.
            </p>
          </AnimatedSection>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.12}>
                <div className="glass-card-light p-10 md:p-12 h-full rounded-2xl transition-all duration-300">
                  <service.icon className="mb-8 h-8 w-8 text-foreground/80" strokeWidth={1.2} />
                  <h3 className="mb-3 text-lg font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
                  <p className="mt-4 text-xs text-muted-foreground/70 uppercase tracking-wider font-medium">{service.detail}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding section-alt">
        <div className="mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
              <div className="glass-card-light px-6 py-3 rounded-full transition-all duration-300">
                <p className="text-xs font-semibold uppercase tracking-wider">Partenaire Hitachi</p>
              </div>
              <div className="glass-card-light px-6 py-3 rounded-full transition-all duration-300">
                <p className="text-xs font-semibold uppercase tracking-wider">Garantie Décennale</p>
              </div>
              <div className="glass-card-light px-6 py-3 rounded-full transition-all duration-300">
                <p className="text-xs font-semibold uppercase tracking-wider">QualiPV 36K</p>
              </div>
            </div>
            <h2 className="text-3xl font-bold md:text-5xl mb-6">
              On étudie votre projet ?
            </h2>
            <p className="mb-10 text-muted-foreground text-sm max-w-lg mx-auto">
              Chaque maison est différente. On vient chez vous, on mesure, on propose.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row justify-center">
              <Link
                to="/simulateur"
                className="btn-pill bg-foreground text-background inline-block px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em]"
              >
                Simuler mon projet
              </Link>
              <a
                href="tel:+33762111470"
                className="btn-ghost-fill inline-block px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ borderRadius: "9999px" }}
              >
                Être rappelé gratuitement
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ContactSection />
    </>
  );
};

export default DomotiquePAC;
