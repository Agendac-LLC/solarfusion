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

import ContactSection from "@/components/ContactSection";
import SEOHead from "@/components/SEOHead";
import heroB2b from "@/assets/hero-b2b.webp";
import { Coins, Zap, BarChart3, Building2 } from "lucide-react";

const benefits = [
  { icon: Coins, title: "stabilisez vos coûts", description: "L'énergie devient prévisible.\nMoins d'exposition aux hausses. Plus de visibilité budgétaire." },
  { icon: Zap, title: "transformez votre bâtiment", description: "Votre toiture travaille.\nVotre site devient un outil de production énergétique intégré à votre entreprise." },
  { icon: BarChart3, title: "Renforcez votre position commerciale.", description: "C'est une installation visible et mesurable.\nVos clients la constatent. Vos partenaires aussi." },
{ icon: Building2, title: " Ceux qui anticipent prennent l'avance.", description: "Ils produisent.\nIls maîtrisent.\nIls gagnent." },
];

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
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5, ease: "easeOut" }} className="max-w-4xl text-3xl sm:text-4xl font-bold leading-[1.08] text-primary-foreground md:text-6xl">
            Réduisez vos charges<br />énergétiques.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }} className="mt-4 sm:mt-6 max-w-lg text-sm sm:text-base text-primary-foreground font-normal" style={{ textShadow: "0 2px 12px hsla(0,0%,0%,0.7), 0 0 4px hsla(0,0%,0%,0.5)" }}>
            Installations photovoltaïques pour entreprises, collectivités et industriels. Dimensionnement sur mesure, retour sur investissement calculé.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }} className="mt-8 sm:mt-10 w-full max-w-sm sm:max-w-none sm:w-auto px-4 sm:px-0">
            <MagneticButton href="/simulateur" className="btn-glass-hero glow-pulse px-8 py-3.5 sm:px-12 sm:py-5 text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em]" strength={0.4}>Calculer ma rentabilité</MagneticButton>
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
            <TextReveal text="L’énergie est votre première vulnérabilité." className="mb-16 text-3xl font-bold md:text-5xl" />
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
            <TextReveal text="Calculez votre rentabilité." className="mb-6 text-3xl font-bold md:text-5xl" />
            <p className="mb-10 text-muted-foreground text-base max-w-2xl mx-auto">Chaque bâtiment est différent. Simulez votre potentiel solaire en 2 minutes.</p>
            <MagneticButton href="/simulateur" className="btn-pill bg-foreground text-background glow-pulse inline-block px-14 py-6 text-sm font-semibold uppercase tracking-[0.2em]">Lancer le simulateur</MagneticButton>
          </BlurFade>
        </div>
      </section>

      <ContactSection />
    </>
  );
};

export default B2B;
