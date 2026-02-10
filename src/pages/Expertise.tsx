import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxBackground from "@/components/ParallaxBackground";
import ContactSection from "@/components/ContactSection";
import { Shield, Star } from "lucide-react";
import fermeImage from "@/assets/install-ferme-alpine.png";
import champImage from "@/assets/install-champ-solaire.png";

const milestones = [
  { year: "2009", title: "Création", description: "Sébastien Chaffardon fonde Solar Fusion avec une vision claire : rendre l'énergie solaire accessible en Savoie." },
  { year: "2015", title: "Certification", description: "Obtention de la certification QualiPV 36K, gage de qualité et de conformité aux normes les plus exigeantes." },
  { year: "2020", title: "Nouvelle génération", description: "Le fils de Sébastien rejoint l'entreprise, apportant un regard neuf et perpétuant le savoir-faire familial." },
  { year: "2024", title: "15 ans d'excellence", description: "Plus de 15 ans d'expérience, zéro accident, et une réputation bâtie sur la confiance et la rigueur." },
];

const Expertise = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative h-[70vh] w-full overflow-hidden">
        <motion.img
          src={fermeImage}
          alt="Ferme alpine avec installation solaire en Savoie"
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
            Notre expertise
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="max-w-4xl text-4xl font-bold leading-[1.05] text-primary-foreground md:text-6xl"
          >
            15 ans de passion,
            <br />
            deux générations.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            className="mt-6 max-w-lg text-base text-primary-foreground/75 font-light leading-relaxed"
          >
            L'histoire d'une entreprise familiale qui place la rigueur, la sécurité et la confiance au coeur de chaque installation.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection>
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-muted-foreground font-medium">
              L'esprit de famille
            </p>
            <h2 className="mb-8 text-3xl font-bold md:text-5xl leading-[1.1]">
              Un savoir-faire transmis.
            </h2>
          </AnimatedSection>
          <div className="grid gap-8 md:grid-cols-2 mt-12">
            <AnimatedSection direction="left">
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Depuis <strong className="text-foreground font-semibold">2009</strong>, Sébastien Chaffardon bâtit Solar Fusion avec une conviction : chaque installation mérite le même soin que si elle était destinée à sa propre maison.
                </p>
                <p>
                  Cette philosophie, transmise aujourd'hui à son fils, fait de Solar Fusion bien plus qu'un installateur. C'est un partenaire de confiance qui accompagne les familles et les entreprises de Savoie et Haute-Savoie dans leur transition énergétique.
                </p>
                <p>
                  Notre bilan parle de lui-même : <strong className="text-foreground font-semibold">zéro accident</strong> sur l'ensemble de nos chantiers, une certification QualiPV 36K et une garantie décennale française sur chaque installation.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.2}>
              <div className="space-y-6">
                <div className="glass-card-light p-8 rounded-2xl transition-all duration-300">
                  <p className="text-4xl font-bold tracking-tight md:text-5xl">15+</p>
                  <p className="mt-2 text-base font-semibold">Années d'expertise</p>
                  <p className="mt-1 text-sm text-muted-foreground">en autoconsommation solaire</p>
                </div>
                <div className="glass-card-light p-8 rounded-2xl transition-all duration-300">
                  <p className="text-4xl font-bold tracking-tight md:text-5xl">0</p>
                  <p className="mt-2 text-base font-semibold">Accident à ce jour</p>
                  <p className="mt-1 text-sm text-muted-foreground">la sécurité avant tout</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

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
                Notre parcours
              </p>
              <h2 className="mb-16 text-3xl font-bold md:text-5xl text-primary-foreground">
                Les étapes clés.
              </h2>
            </AnimatedSection>
            <div className="space-y-6">
              {milestones.map((m, i) => (
                <AnimatedSection key={m.year} delay={i * 0.1}>
                  <div className="glass-card p-8 rounded-2xl transition-all duration-300 flex gap-6 items-start">
                    <p className="text-3xl font-bold text-primary-foreground/40 shrink-0">{m.year}</p>
                    <div>
                      <h3 className="text-lg font-semibold text-primary-foreground mb-2">{m.title}</h3>
                      <p className="text-primary-foreground/70 text-sm leading-relaxed">{m.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </ParallaxBackground>

      {/* Certifications & CTA */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <div className="glass-card-light px-6 py-3 rounded-full transition-all duration-300">
                <p className="text-xs font-semibold uppercase tracking-wider flex items-center gap-2">
                  <Shield className="h-3.5 w-3.5" strokeWidth={1.5} /> QualiPV 36K
                </p>
              </div>
              <div className="glass-card-light px-6 py-3 rounded-full transition-all duration-300">
                <p className="text-xs font-semibold uppercase tracking-wider">Partenaire Hitachi</p>
              </div>
              <div className="glass-card-light px-6 py-3 rounded-full transition-all duration-300">
                <p className="text-xs font-semibold uppercase tracking-wider">Garantie Décennale</p>
              </div>
            </div>
            <h2 className="text-3xl font-bold md:text-5xl mb-6">
              Prêt à nous faire confiance ?
            </h2>
            <p className="mb-10 text-muted-foreground text-sm max-w-lg mx-auto">
              Découvrez combien vous pourriez économiser avec une installation dimensionnée pour vos besoins.
            </p>
            <Link
              to="/simulateur"
              className="btn-pill bg-foreground text-background inline-block px-12 py-5 text-xs font-semibold uppercase tracking-[0.2em]"
            >
              Simuler mon projet
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <ContactSection />
    </>
  );
};

export default Expertise;
