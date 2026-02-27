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
import ContactSection from "@/components/ContactSection";
import SEOHead from "@/components/SEOHead";
import heroB2b from "@/assets/installation-solaire-professionnelle-toiture.webp";
import proImg1 from "@/assets/panneaux-solaires-batiment-professionnel-savoie.webp";
import proImg2 from "@/assets/installation-photovoltaique-entreprise-france.webp";
import { Coins, Zap, BarChart3, Building2, ChevronLeft, ChevronRight } from "lucide-react";

const benefits = [
  { icon: Coins, title: "stabilisez vos coûts", description: "L'énergie devient prévisible.\nMoins d'exposition aux hausses. Plus de visibilité budgétaire." },
  { icon: Zap, title: "transformez votre bâtiment", description: "Votre toiture travaille.\nVotre site devient un outil de production énergétique intégré à votre entreprise." },
  { icon: BarChart3, title: "Renforcez votre position commerciale.", description: "C'est une installation visible et mesurable.\nVos clients la constatent. Vos partenaires aussi." },
{ icon: Building2, title: " Ceux qui anticipent prennent l'avance.", description: "Ils produisent.\nIls maîtrisent.\nIls gagnent." },
];

const realisationsPro = [
  { src: heroB2b, alt: "Installation solaire professionnelle sur toiture en France - Solar Fusion", label: "Installation professionnelle" },
  { src: proImg1, alt: "Panneaux solaires bâtiment professionnel en Savoie", label: "Bâtiment professionnel" },
  { src: proImg2, alt: "Installation photovoltaïque entreprise en France", label: "Site industriel" },
];

const B2BGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const startX = useRef<number | null>(null);
  const startY = useRef<number | null>(null);
  const total = realisationsPro.length;

  const scrollTo = useCallback((dir: number) => {
    setDirection(dir);
    setActiveIndex((prev) => {
      const next = prev + dir;
      if (next < 0) return total - 1;
      if (next >= total) return 0;
      return next;
    });
  }, [total]);

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

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    if (e.pointerType === 'touch') return;
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

  const img = realisationsPro[activeIndex];

  return (
    <section className="overflow-hidden py-12 sm:py-24 md:py-36 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 mb-8 sm:mb-14">
        <BlurFade>
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-primary font-medium">
            Nos réalisations
          </p>
          <h2 className="text-3xl font-medium md:text-5xl text-foreground font-heading">
            Installations chez les professionnels.
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
        {realisationsPro.map((_, i) => (
          <button
            key={i}
            className="p-2 flex items-center justify-center"
            onClick={() => { setDirection(i > activeIndex ? 1 : -1); setActiveIndex(i); }}
            aria-label={`Aller à la réalisation ${i + 1}`}
            style={{ background: 'transparent', border: 'none' }}
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

const B2B = () => {
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
      { "@type": "ListItem", "position": 2, "name": "Professionnels", "item": "https://solarfusion.lovable.app/b2b" }
    ]
  }), []);

  return (
    <>
      <SEOHead
        title="Panneaux Solaires Professionnels Chambéry - Installation Photovoltaïque Entreprise | Solar Fusion"
        description="Installation photovoltaïque pour entreprises, collectivités et industriels partout en France. ROI en 4-7 ans, -70% sur l'énergie, valorisation du patrimoine. Étude gratuite à Chambéry."
        canonical="https://solarfusion.lovable.app/b2b"
        jsonLd={breadcrumbLd}
      />
      <section ref={heroRef} className="relative h-[100svh] sm:h-[70vh] w-full overflow-hidden grain px-4 sm:px-6 md:px-12" aria-label="Installation solaire pour professionnels partout en France">
        <motion.div className="absolute inset-0 w-full h-full" style={{ y: imageY, scale }}>
          <img src={heroB2b} alt="Installation de panneaux solaires sur bâtiment professionnel, toiture industrielle photovoltaïque en France" className="w-full h-full object-cover" loading="eager" fetchPriority="high" decoding="async" width={1920} height={1080} />
        </motion.div>
        <div className="hero-overlay absolute inset-0" />
        <FloatingShapes variant="dark" />
        <motion.div style={{ opacity, y: contentY }} className="relative z-10 flex h-full flex-col items-center justify-center px-4 sm:px-6 md:px-12 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="mb-3 sm:mb-4 text-xs uppercase tracking-[0.4em] text-primary-foreground/60 font-medium">Professionnels</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5, ease: "easeOut" }} className="max-w-4xl text-3xl sm:text-4xl font-medium leading-[1.08] text-primary-foreground md:text-6xl font-heading" style={{ textShadow: "0 2px 20px hsla(0,0%,0%,0.65), 0 1px 6px hsla(0,0%,0%,0.4)" }}>
            Réduisez vos charges<br />énergétiques.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }} className="mt-4 sm:mt-6 max-w-lg text-sm sm:text-base text-primary-foreground font-normal" style={{ textShadow: "0 2px 12px hsla(0,0%,0%,0.7), 0 0 4px hsla(0,0%,0%,0.5)" }}>
            Installations photovoltaïques pour entreprises, collectivités et industriels. Dimensionnement sur mesure, retour sur investissement calculé.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }} className="mt-8 sm:mt-10 w-full max-w-sm sm:max-w-none sm:w-auto px-4 sm:px-0">
            <MagneticButton href="/simulateur" className="btn-glass-hero glow-pulse px-8 py-3.5 sm:px-12 sm:py-5 text-xs sm:text-sm font-semibold uppercase tracking-[0.08em] sm:tracking-[0.2em] whitespace-nowrap" strength={0.4}>Calculer ma rentabilité</MagneticButton>
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-[1px] h-10 bg-primary-foreground/30 scroll-indicator" />
        </motion.div>
      </section>

      <SectionDivider />

      <section className="section-padding relative grain w-full px-4 sm:px-6 md:px-12" aria-label="Avantages solaire pour les entreprises">
        <FloatingShapes variant="light" />
        <div className="mx-auto max-w-6xl w-full relative z-10">
          <BlurFade>
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-muted-foreground font-medium">Pourquoi pas vous ?</p>
            <h2 className="sr-only">Avantages du photovoltaïque pour les entreprises en France</h2>
            <TextReveal text="L'énergie est votre première vulnérabilité." className="mb-8 sm:mb-16 text-3xl font-medium md:text-5xl font-heading" />
          </BlurFade>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-6" stagger={0.1}>
            {benefits.map((b) => (
              <StaggerItem key={b.title} direction="scale">
                <TiltCard className="rounded-2xl h-full depth-layer" tiltMax={5}>
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-8 rounded-2xl glass-card-light embossed h-full">
                    <div className="shrink-0">
                      {'metricNum' in b && b.metricNum !== undefined ? (
                        <>
                          <p className="text-2xl font-bold tracking-tight">
                            <CountUp end={b.metricNum as number} prefix={(b as any).metricPrefix} suffix={(b as any).metricSuffix} />
                          </p>
                          <b.icon className="mt-2 h-5 w-5 text-muted-foreground" strokeWidth={1.2} />
                        </>
                      ) : 'metric' in b && (b as any).metric ? (
                        <>
                          <p className="text-2xl font-bold tracking-tight">{(b as any).metric}</p>
                          <b.icon className="mt-2 h-5 w-5 text-muted-foreground" strokeWidth={1.2} />
                        </>
                      ) : (
                        <b.icon className="h-8 w-8 text-muted-foreground" strokeWidth={1} />
                      )}
                    </div>
                    <div>
                      <h3 className="mb-2 text-base sm:text-lg font-semibold">{b.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm break-words whitespace-pre-line">{b.description}</p>
                    </div>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <SectionDivider />

      <section className="section-padding" aria-label="Simuler votre rentabilité">
        <div className="mx-auto max-w-4xl text-center">
          <BlurFade>
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-muted-foreground font-medium">Simulateur pro</p>
            <TextReveal text="Calculez votre rentabilité." className="mb-6 text-3xl font-medium md:text-5xl font-heading" />
            <p className="mb-10 text-muted-foreground text-base max-w-2xl mx-auto">Chaque bâtiment est différent. Simulez votre potentiel solaire en 2 minutes.</p>
            <MagneticButton href="/simulateur" className="btn-pill bg-foreground text-background glow-pulse inline-block px-7 py-2.5 sm:px-14 sm:py-6 text-xs sm:text-sm font-semibold uppercase tracking-[0.1em] sm:tracking-[0.2em]">Lancer le simulateur</MagneticButton>
          </BlurFade>
        </div>
      </section>

      <SectionDivider />

      <B2BGallery />

      <SectionDivider />

      <ContactSection />
    </>
  );
};

export default B2B;
