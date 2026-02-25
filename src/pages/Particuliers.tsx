import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useMemo } from "react";
import BlurFade from "@/components/BlurFade";
import TextReveal from "@/components/TextReveal";
import CountUp from "@/components/CountUp";
import TiltCard from "@/components/TiltCard";
import MagneticButton from "@/components/MagneticButton";
import SectionDivider from "@/components/SectionDivider";
import StaggerChildren, { StaggerItem } from "@/components/StaggerChildren";
import FloatingShapes from "@/components/FloatingShapes";
import ParallaxBackground from "@/components/ParallaxBackground";
import ContactSection from "@/components/ContactSection";
import SEOHead from "@/components/SEOHead";
import { Sun, Battery, TrendingDown, Shield, Star } from "lucide-react";
import heroImage from "@/assets/install-chalet-savoie.webp";
import chaletVillage from "@/assets/install-chalet-village.webp";

const benefits = [
  {
    icon: TrendingDown,
    title: "Jusqu'à -70% sur la facture",
    description: "Vous consommez ce que vous produisez. Le surplus est revendu ou stocké. Résultat visible dès le premier mois.",
    metric: "-70%",
    metricNum: 70,
  },
  {
    icon: Sun,
    title: "Votre propre électricité",
    description: "Vos panneaux produisent en journée. Avec une batterie, vous consommez aussi le soir.",
    metric: "100%",
    metricNum: 100,
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
    description: "Couverture 10 ans sur l'installation. Certification RGE.",
    metric: "10 ans",
    metricNum: 10,
  },
];


const Particuliers = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.12, 1]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const breadcrumbLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://solarfusion.lovable.app/" },
      { "@type": "ListItem", "position": 2, "name": "Particuliers", "item": "https://solarfusion.lovable.app/particuliers" }
    ]
  }), []);

  return (
    <>
      <SEOHead
        title="Panneaux Solaires Particuliers Chambéry - Autoconsommation France | Solar Fusion"
        description="Installation de panneaux solaires pour particuliers à Chambéry et partout en France. Jusqu'à -70% sur votre facture d'électricité. Batterie, autoconsommation, garantie décennale. Devis gratuit."
        canonical="https://solarfusion.lovable.app/particuliers"
        jsonLd={breadcrumbLd}
      />
      {/* Hero */}
      <section ref={heroRef} className="relative h-[100svh] sm:h-[70vh] w-full overflow-hidden grain px-4 sm:px-6 md:px-12" aria-label="Panneaux solaires pour particuliers partout en France">
        <motion.div className="absolute inset-0 w-full h-full" style={{ y: imageY, scale }}>
          <img src={heroImage} alt="Installation de panneaux solaires sur chalet en France, Solar Fusion installateur photovoltaïque" className="w-full h-full object-cover" loading="eager" fetchPriority="high" decoding="async" width={1920} height={1080} />
        </motion.div>
        <div className="hero-overlay absolute inset-0" />
        <FloatingShapes variant="dark" />
        <motion.div style={{ opacity, y: contentY }} className="relative z-10 flex h-full flex-col items-center justify-center px-4 sm:px-6 md:px-12 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="mb-3 sm:mb-4 text-xs uppercase tracking-[0.4em] text-primary-foreground/60 font-medium">Particuliers</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5, ease: "easeOut" }} className="max-w-4xl text-3xl sm:text-4xl font-medium leading-[1.08] text-primary-foreground md:text-6xl font-heading uppercase">
            Votre maison<br />travaille pour vous.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }} className="mt-4 sm:mt-6 max-w-lg text-sm sm:text-base text-primary-foreground/75 font-light leading-relaxed">
            Installation solaire partout en France.<br />On dimensionne, on pose, on garantit.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }} className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 w-full max-w-sm sm:max-w-none sm:w-auto px-2 sm:px-0">
            <MagneticButton href="/simulateur" className="btn-glass-hero glow-pulse px-6 py-3.5 sm:px-12 sm:py-5 text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-center">Simuler mon projet</MagneticButton>
            <MagneticButton href="#contact" className="btn-glass-hero px-6 py-3.5 sm:px-12 sm:py-5 text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-center">Être rappelé gratuitement</MagneticButton>
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-[1px] h-10 bg-primary-foreground/30 scroll-indicator" />
        </motion.div>
      </section>

      <SectionDivider />

      {/* Benefits */}
      <section className="section-padding relative grain w-full px-4 sm:px-6 md:px-12" aria-label="Avantages du solaire pour les particuliers">
        <FloatingShapes variant="light" />
        <div className="mx-auto max-w-6xl w-full relative z-10">
          <BlurFade>
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-muted-foreground font-medium">Concrètement</p>
            <h2 className="sr-only">Avantages du solaire pour les particuliers en France</h2>
            <TextReveal text="Là où le soleil devient solution" className="mb-16 text-3xl font-bold md:text-5xl font-heading uppercase" as="p" />
          </BlurFade>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-6" stagger={0.1}>
            {benefits.map((b) => (
              <StaggerItem key={b.title} direction="scale">
                <TiltCard className="rounded-2xl h-full depth-layer" tiltMax={5}>
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-8 rounded-2xl glass-card-light embossed h-full">
                    <div className="shrink-0">
                      <p className="text-2xl font-bold tracking-tight">
                        {b.metricNum !== undefined ? <CountUp end={b.metricNum} suffix={b.metric.replace(String(b.metricNum), "")} /> : b.metric}
                      </p>
                      <b.icon className="mt-2 h-5 w-5 text-muted-foreground" strokeWidth={1.2} />
                    </div>
                    <div>
                      <h3 className="mb-2 text-base sm:text-lg font-semibold">{b.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm break-words">{b.description}</p>
                    </div>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <SectionDivider />

      <ParallaxBackground image={chaletVillage} alt="Chalet avec panneaux solaires en village alpin de France" overlayOpacity={0.55} blur={2}>
        <FloatingShapes variant="dark" />
        <div className="section-padding w-full px-4 sm:px-6 md:px-12">
          <div className="mx-auto max-w-4xl w-full text-center">
            <BlurFade>
              <TextReveal text="Combien économiseriez-vous ?" className="text-3xl font-bold md:text-5xl text-primary-foreground mb-6" variant="light" />
              <p className="mb-10 text-primary-foreground/70 text-base max-w-lg mx-auto">Entrez votre adresse et votre facture. Résultat en 2 minutes.</p>
              <MagneticButton href="/simulateur" className="btn-pill bg-primary-foreground text-primary glow-pulse inline-block px-8 py-4 sm:px-14 sm:py-6 text-sm font-semibold uppercase tracking-[0.2em]">Lancer le simulateur</MagneticButton>
            </BlurFade>
          </div>
        </div>
      </ParallaxBackground>

      <SectionDivider />

      {/* Trust */}


      <ContactSection />
    </>
  );
};

export default Particuliers;
