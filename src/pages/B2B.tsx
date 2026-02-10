import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import Simulator from "@/components/Simulator";
import ContactSection from "@/components/ContactSection";
import heroB2b from "@/assets/hero-b2b.png";
import { TrendingUp, Zap, BarChart3, Building2 } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Rentabilité rapide",
    description: "Retour sur investissement en 4 à 7 ans selon la taille de votre installation.",
    metric: "4-7 ans",
  },
  {
    icon: Zap,
    title: "Réduction des charges",
    description: "Réduisez vos factures d'énergie jusqu'à 70% grâce à l'autoconsommation.",
    metric: "-70%",
  },
  {
    icon: BarChart3,
    title: "Valorisation du patrimoine",
    description: "Augmentez la valeur de vos bâtiments avec une installation photovoltaïque.",
    metric: "+15%",
  },
  {
    icon: Building2,
    title: "Image RSE",
    description: "Renforcez votre engagement environnemental auprès de vos clients et partenaires.",
    metric: "RSE",
  },
];

const B2B = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative h-[70vh] w-full overflow-hidden">
        <motion.img
          src={heroB2b}
          alt="Installation solaire professionnelle"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ y: imageY }}
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mb-4 text-xs uppercase tracking-[0.4em] text-primary-foreground/60 font-medium"
          >
            Espace Professionnels
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="max-w-4xl text-4xl font-bold leading-[1.05] text-primary-foreground md:text-6xl"
          >
            Optimisez votre
            <br />
            performance énergétique.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            className="mt-6 max-w-lg text-base text-primary-foreground font-normal"
            style={{ textShadow: "0 2px 12px hsla(0,0%,0%,0.7), 0 0 4px hsla(0,0%,0%,0.5)" }}
          >
            Des solutions photovoltaïques dimensionnées pour les besoins des entreprises, collectivités et industriels.
          </motion.p>
          <motion.a
            href="#simulateur"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
            className="btn-glass-hero mt-10 px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em]"
          >
            Simuler mon projet
          </motion.a>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection>
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-muted-foreground font-medium">
              ROI & Performance
            </p>
            <h2 className="mb-16 text-3xl font-bold md:text-5xl">
              Le solaire, un investissement stratégique.
            </h2>
          </AnimatedSection>
          <div className="grid gap-6 md:grid-cols-2">
            {benefits.map((b, i) => (
              <AnimatedSection key={b.title} delay={i * 0.1}>
                <div className="flex gap-6 p-8 rounded-2xl card-lift">
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

      <Simulator variant="b2b" />

      {/* CTA before contact */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <p className="mb-4 text-muted-foreground text-sm">
              Chaque projet est unique. Obtenez une analyse détaillée de votre potentiel solaire.
            </p>
            <a
              href="#contact"
              className="btn-pill bg-foreground text-background inline-block px-12 py-5 text-xs font-semibold uppercase tracking-[0.2em]"
            >
              Demander une étude personnalisée
            </a>
          </AnimatedSection>
        </div>
      </section>

      <ContactSection />
    </>
  );
};

export default B2B;
