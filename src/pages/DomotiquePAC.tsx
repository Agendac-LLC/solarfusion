import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import TextReveal from "@/components/TextReveal";
import TiltCard from "@/components/TiltCard";
import MagneticButton from "@/components/MagneticButton";
import SectionDivider from "@/components/SectionDivider";
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
  const scale = useTransform(scrollYProgress, [0, 1], [1.12, 1]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative h-[70vh] w-full overflow-hidden grain">
        <motion.div className="absolute inset-0 w-full h-full" style={{ y: imageY, scale }}>
          <img
            src={heroImage}
            alt="Maison moderne avec domotique et solaire"
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
            className="mt-10"
          >
            <MagneticButton
              href="tel:+33762111470"
              className="btn-glass-hero px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em]"
              strength={0.4}
            >
              Être rappelé gratuitement
            </MagneticButton>
          </motion.div>
        </motion.div>
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

      <SectionDivider />

      {/* Solutions */}
      <section className="section-padding section-alt-deep relative grain">
        <div className="mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-muted-foreground font-medium">
              Nos solutions
            </p>
            <TextReveal
              text="Chauffage, clim, pilotage."
              className="mb-4 text-3xl font-bold md:text-5xl"
            />
            <p className="mb-16 text-muted-foreground text-base max-w-xl">
              Chaque solution se couple au solaire pour maximiser vos économies.
            </p>
          </AnimatedSection>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.12}>
                <TiltCard className="rounded-2xl h-full" tiltMax={6} glare>
                  <div className="glass-card-light p-10 md:p-12 h-full rounded-2xl group cursor-default">
                    <motion.div
                      className="mb-8 h-14 w-14 rounded-2xl bg-foreground/5 flex items-center justify-center group-hover:bg-foreground/10 transition-colors duration-300"
                      whileHover={{ scale: 1.15, rotate: -8 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                      <service.icon className="h-7 w-7 text-foreground/80 group-hover:text-foreground transition-colors duration-300" strokeWidth={1.2} />
                    </motion.div>
                    <h3 className="mb-3 text-lg font-semibold">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
                    <p className="mt-auto pt-6 text-xs text-muted-foreground/70 uppercase tracking-wider font-medium">{service.detail}</p>
                  </div>
                </TiltCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* CTA */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
              {["Partenaire Hitachi", "Garantie Décennale", "QualiPV 36K"].map((badge) => (
                <motion.div
                  key={badge}
                  className="glass-card-light px-6 py-3 rounded-full"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <p className="text-xs font-semibold uppercase tracking-wider">{badge}</p>
                </motion.div>
              ))}
            </div>
            <TextReveal
              text="On étudie votre projet ?"
              className="text-3xl font-bold md:text-5xl mb-6"
            />
            <p className="mb-10 text-muted-foreground text-sm max-w-lg mx-auto">
              Chaque maison est différente. On vient chez vous, on mesure, on propose.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row justify-center">
              <MagneticButton
                href="/simulateur"
                className="btn-pill bg-foreground text-background inline-block px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em]"
              >
                Simuler mon projet
              </MagneticButton>
              <MagneticButton
                href="tel:+33762111470"
                className="btn-ghost-fill inline-block px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] rounded-full"
              >
                Être rappelé gratuitement
              </MagneticButton>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ContactSection />
    </>
  );
};

export default DomotiquePAC;
