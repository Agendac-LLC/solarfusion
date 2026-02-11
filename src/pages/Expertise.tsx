import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import TextReveal from "@/components/TextReveal";
import CountUp from "@/components/CountUp";
import TiltCard from "@/components/TiltCard";
import MagneticButton from "@/components/MagneticButton";
import SectionDivider from "@/components/SectionDivider";
import ParallaxBackground from "@/components/ParallaxBackground";
import ContactSection from "@/components/ContactSection";
import { Shield } from "lucide-react";
import fermeImage from "@/assets/install-ferme-alpine.png";
import champImage from "@/assets/install-champ-solaire.png";

const milestones = [
  { year: "2009", title: "Création", description: "Sébastien Chaffardon crée Solar Fusion à Chambéry. Premiers chantiers en Savoie." },
  { year: "2015", title: "QualiPV 36K", description: "Certification RGE obtenue. Condition obligatoire pour que nos clients touchent les aides de l'État." },
  { year: "2020", title: "Père et fils", description: "Le fils de Sébastien rejoint l'entreprise. Deux générations sur les toits." },
  { year: "2024", title: "15 ans, 0 accident", description: "15 ans de chantiers, aucun accident. Garantie décennale sur chaque installation." },
];

const Expertise = () => {
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
            src={fermeImage}
            alt="Ferme alpine avec panneaux solaires en Savoie"
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
            Notre histoire
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="max-w-4xl text-4xl font-bold leading-[1.05] text-primary-foreground md:text-6xl"
          >
            15 ans sur les toits,
            <br />
            père et fils.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            className="mt-6 max-w-lg text-base text-primary-foreground/75 font-light leading-relaxed"
          >
            Installateurs solaires en Savoie depuis 2009. Zéro accident, zéro sous-traitance. On pose comme si c'était chez nous.
          </motion.p>
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

      {/* Story */}
      <section className="section-padding relative grain">
        <div className="mx-auto max-w-4xl relative z-10">
          <AnimatedSection>
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-muted-foreground font-medium">
              Qui sommes-nous
            </p>
            <TextReveal
              text="Pas de discours, des faits."
              className="mb-8 text-3xl font-bold md:text-5xl leading-[1.1]"
            />
          </AnimatedSection>
          <div className="grid gap-8 md:grid-cols-2 mt-12">
            <AnimatedSection direction="left">
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Sébastien Chaffardon a fondé Solar Fusion en <strong className="text-foreground font-semibold">2009</strong> à Chambéry. Son fils l'a rejoint en 2020. À deux, ils gèrent chaque projet de A à Z : étude, dimensionnement, pose, mise en service.
                </p>
                <p>
                  Pas de commercial, pas de sous-traitant. Quand vous appelez, c'est Sébastien qui décroche. Quand on monte sur votre toit, c'est nous.
                </p>
                <p>
                  Résultat : <strong className="text-foreground font-semibold">0 accident</strong> en 15 ans. Une certification QualiPV 36K. Une garantie décennale française sur chaque installation.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.2}>
              <div className="space-y-6">
                <TiltCard className="rounded-2xl" tiltMax={5} glare>
                  <div className="glass-card-light p-8 rounded-2xl">
                    <p className="text-4xl font-bold tracking-tight md:text-5xl">
                      <CountUp end={15} />
                    </p>
                    <p className="mt-2 text-base font-semibold">ans d'expérience</p>
                    <p className="mt-1 text-sm text-muted-foreground">en Savoie et Haute-Savoie</p>
                  </div>
                </TiltCard>
                <TiltCard className="rounded-2xl" tiltMax={5} glare>
                  <div className="glass-card-light p-8 rounded-2xl">
                    <p className="text-4xl font-bold tracking-tight md:text-5xl">
                      <CountUp end={0} />
                    </p>
                    <p className="mt-2 text-base font-semibold">accident</p>
                    <p className="mt-1 text-sm text-muted-foreground">sur l'ensemble de nos chantiers</p>
                  </div>
                </TiltCard>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Timeline */}
      <ParallaxBackground
        image={champImage}
        alt="Panneaux solaires en pleine nature"
        overlayOpacity={0.65}
        blur={2}
      >
        <div className="section-padding">
          <div className="mx-auto max-w-4xl">
            <AnimatedSection>
              <p className="mb-3 text-xs uppercase tracking-[0.4em] text-primary-foreground/60 font-medium">
                Chronologie
              </p>
              <TextReveal
                text="Les dates clés."
                className="mb-16 text-3xl font-bold md:text-5xl text-primary-foreground"
                variant="light"
              />
            </AnimatedSection>
            <div className="space-y-6">
              {milestones.map((m, i) => (
                <AnimatedSection key={m.year} delay={i * 0.1}>
                  <TiltCard className="rounded-2xl" tiltMax={4}>
                    <div className="glass-card p-8 rounded-2xl flex gap-6 items-start">
                      <p className="text-3xl font-bold text-primary-foreground/40 shrink-0">{m.year}</p>
                      <div>
                        <h3 className="text-lg font-semibold text-primary-foreground mb-2">{m.title}</h3>
                        <p className="text-primary-foreground/70 text-sm leading-relaxed">{m.description}</p>
                      </div>
                    </div>
                  </TiltCard>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </ParallaxBackground>

      <SectionDivider />

      {/* CTA */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <motion.div
                className="glass-card-light px-6 py-3 rounded-full"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <p className="text-xs font-semibold uppercase tracking-wider flex items-center gap-2">
                  <Shield className="h-3.5 w-3.5" strokeWidth={1.5} /> QualiPV 36K
                </p>
              </motion.div>
              {["Partenaire Hitachi", "Garantie Décennale"].map((badge) => (
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
              text="Votre projet, notre métier."
              className="text-3xl font-bold md:text-5xl mb-6"
            />
            <p className="mb-10 text-muted-foreground text-sm max-w-lg mx-auto">
              On vient chez vous, on regarde votre toit, on vous dit ce qui est faisable. Gratuit, sans engagement.
            </p>
            <MagneticButton
              href="/simulateur"
              className="btn-pill bg-foreground text-background inline-block px-12 py-5 text-xs font-semibold uppercase tracking-[0.2em]"
            >
              Simuler mon projet
            </MagneticButton>
          </AnimatedSection>
        </div>
      </section>

      <ContactSection />
    </>
  );
};

export default Expertise;
