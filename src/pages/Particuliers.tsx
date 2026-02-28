import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useMemo, useState, useCallback } from "react";
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
import { Sun, Battery, TrendingDown, Shield, ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/maison-solaire-particulier-savoie.webp";
import chaletVillage from "@/assets/panneaux-solaires-maison-individuelle-france.webp";
import realImg1 from "@/assets/installation-solaire-toiture-particulier-chambery.webp";
import realImg2 from "@/assets/panneaux-solaires-maison-individuelle-france.webp";
import realImg3 from "@/assets/installation-photovoltaique-maison-particulier.webp";

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


const realisations = [
  { src: heroImage, alt: "Maison avec panneaux solaires en Savoie - Solar Fusion", label: "Maison de particulier" },
  { src: realImg1, alt: "Installation solaire sur toiture particulier à Chambéry", label: "Installation sur toiture" },
  { src: realImg2, alt: "Panneaux solaires sur maison individuelle en France", label: "Maison individuelle" },
  { src: realImg3, alt: "Installation photovoltaïque maison particulier en France", label: "Installation photovoltaïque" },
];

const ParticuliersGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const startX = useRef<number | null>(null);
  const startY = useRef<number | null>(null);
  const total = realisations.length;

  const scrollTo = useCallback((dir: number) => {
    setDirection(dir);
    setActiveIndex((prev) => {
      const next = prev + dir;
      if (next < 0) return total - 1;
      if (next >= total) return 0;
      return next;
    });
  }, [total]);

  // Touch events (mobile - most reliable)
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    startY.current = e.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (startX.current === null || startY.current === null) return;
    const deltaX = e.changedTouches[0].clientX - startX.current;
    const deltaY = e.changedTouches[0].clientY - startY.current;
    if (Math.abs(deltaX) > 30 && Math.abs(deltaX) > Math.abs(deltaY)) {
      scrollTo(deltaX < 0 ? 1 : -1);
    }
    startX.current = null;
    startY.current = null;
  }, [scrollTo]);

  // Pointer events (PC tactile, stylet)
  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    if (e.pointerType === 'touch') return; // handled by touch events
    startX.current = e.clientX;
    startY.current = e.clientY;
  }, []);

  const handlePointerUp = useCallback((e: React.PointerEvent) => {
    if (e.pointerType === 'touch') return;
    if (startX.current === null || startY.current === null) return;
    const deltaX = e.clientX - startX.current;
    const deltaY = e.clientY - startY.current;
    if (Math.abs(deltaX) > 30 && Math.abs(deltaX) > Math.abs(deltaY)) {
      scrollTo(deltaX < 0 ? 1 : -1);
    }
    startX.current = null;
    startY.current = null;
  }, [scrollTo]);

  const img = realisations[activeIndex];

  return (
    <section className="overflow-hidden py-12 sm:py-24 md:py-36 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 mb-8 sm:mb-14">
        <BlurFade>
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-primary font-medium">
            Nos réalisations
          </p>
          <h2 className="text-3xl font-medium md:text-5xl text-foreground font-heading">
            Installations chez les particuliers.
          </h2>
        </BlurFade>
      </div>
      <div className="flex items-center justify-center">
        <button
          className="hidden sm:flex items-center px-2 py-2 bg-transparent border-none text-3xl font-bold text-primary hover:text-primary/80 transition mr-2"
          onClick={() => scrollTo(-1)}
          aria-label="Précédent"
        >
          <ChevronLeft size={32} strokeWidth={2.5} />
        </button>
        <div
          className="relative flex justify-center items-center cursor-grab active:cursor-grabbing select-none"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
        >
          <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={activeIndex}
            className="relative shrink-0 w-[90vw] sm:w-[90vw] md:w-[70vw] lg:w-[50vw] aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden group shadow-xl"
            initial={{ x: direction === 1 ? 200 : -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction === 1 ? -200 : 200, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
              loading="lazy"
              decoding="async"
              width={1200}
              height={675}
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-sm sm:text-base font-semibold uppercase tracking-[0.15em] text-white drop-shadow-lg">
              {img.label}
            </p>
          </motion.div>
          </AnimatePresence>
        </div>
        <button
          className="hidden sm:flex items-center px-2 py-2 bg-transparent border-none text-3xl font-bold text-primary hover:text-primary/80 transition ml-2"
          onClick={() => scrollTo(1)}
          aria-label="Suivant"
        >
          <ChevronRight size={32} strokeWidth={2.5} />
        </button>
      </div>
      {/* Mobile swipe hint */}
      <p className="sm:hidden text-center text-xs text-muted-foreground/40 mt-4 tracking-widest select-none">
        ← Glissez →
      </p>
      <div className="flex justify-center mt-2 sm:mt-8 gap-1">
        {realisations.map((_, i) => (
          <button
            key={i}
            className="p-2 flex items-center justify-center bg-transparent border-0"
            onClick={() => { setDirection(i > activeIndex ? 1 : -1); setActiveIndex(i); }}
            aria-label={`Aller à la réalisation ${i + 1}`}
          >
            <span
              className={`block w-2.5 h-2.5 rounded-full transition-all duration-200 ${i === activeIndex ? 'bg-primary scale-125' : 'bg-muted-foreground/40'}`}
            />
          </button>
        ))}
      </div>
    </section>
  );
};

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
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://solar-fusion.fr/" },
      { "@type": "ListItem", "position": 2, "name": "Particuliers", "item": "https://solar-fusion.fr/particuliers" }
    ]
  }), []);

  return (
    <>
      <SEOHead
        title="Panneaux Solaires Particuliers Chambéry - Autoconsommation France | Solar Fusion"
        description="Installation de panneaux solaires pour particuliers à Chambéry et partout en France. Jusqu'à -70% sur votre facture d'électricité. Batterie, autoconsommation, garantie décennale. Devis gratuit."
        canonical="https://solar-fusion.fr/particuliers"
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
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5, ease: "easeOut" }} className="max-w-4xl text-3xl sm:text-4xl font-medium leading-[1.08] text-primary-foreground md:text-6xl font-heading text-shadow-hero">
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
            <TextReveal text="Là où le soleil devient solution" className="mb-8 sm:mb-16 text-3xl font-medium md:text-5xl font-heading" as="p" />
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
              <TextReveal text="Combien économiseriez-vous ?" className="text-3xl font-medium md:text-5xl text-primary-foreground mb-6 font-heading" variant="light" />
              <p className="mb-10 text-primary-foreground/70 text-base max-w-lg mx-auto">Entrez votre adresse et votre facture. Résultat en 2 minutes.</p>
              <MagneticButton href="/simulateur" className="btn-pill bg-primary-foreground text-primary glow-pulse inline-block px-7 py-2.5 sm:px-14 sm:py-6 text-xs sm:text-sm font-semibold uppercase tracking-[0.1em] sm:tracking-[0.2em]">Lancer le simulateur</MagneticButton>
            </BlurFade>
          </div>
        </div>
      </ParallaxBackground>

      <SectionDivider />

      {/* Réalisations particuliers */}
      <ParticuliersGallery />

      <SectionDivider />

      <ContactSection />
    </>
  );
};

export default Particuliers;
