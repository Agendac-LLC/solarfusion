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
import { TrendingUp, Zap, BarChart3, Building2 } from "lucide-react";

const benefits = [
  { icon: TrendingUp, title: "Amorti en 4 à 7 ans", description: "Le retour sur investissement dépend de votre surface de toiture et de votre consommation. On calcule ça avec vous.", metric: "4-7 ans" },
  { icon: Zap, title: "Jusqu'à -70% sur l'énergie", description: "L'autoconsommation réduit votre facture dès le premier mois. Le surplus est revendu à EDF OA.", metricNum: 70, metricSuffix: "%" },
  { icon: BarChart3, title: "Patrimoine valorisé", description: "Un bâtiment équipé en solaire vaut plus à la revente. C'est un actif, pas une dépense.", metricNum: 15, metricSuffix: "%", metricPrefix: "+" },
  { icon: Building2, title: "Engagement RSE concret", description: "Vos panneaux produisent. Vos clients et partenaires le voient. C'est du concret, pas un logo.", metric: "RSE" },
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
        description="Installation photovoltaïque pour entreprises, collectivités et industriels en Savoie et Haute-Savoie. ROI en 4-7 ans, -70% sur l'énergie, valorisation du patrimoine. Étude gratuite à Chambéry."
        canonical="https://solarfusion.lovable.app/b2b"
        jsonLd={breadcrumbLd}
      />
      <section ref={heroRef} className="relative h-[85vh] sm:h-[70vh] w-full overflow-hidden grain" aria-label="Installation solaire pour professionnels">
        <motion.div className="absolute inset-0 w-full h-full" style={{ y: imageY, scale }}>
          <img src={heroB2b} alt="Installation de panneaux solaires sur bâtiment professionnel, toiture industrielle photovoltaïque Savoie" className="w-full h-full object-cover" loading="eager" fetchPriority="high" decoding="async" width={1920} height={1080} />
        </motion.div>
        <div className="hero-overlay absolute inset-0" />
        <FloatingShapes variant="dark" />
        <motion.div style={{ opacity, y: contentY }} className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="mb-4 text-xs uppercase tracking-[0.4em] text-primary-foreground/60 font-medium">Professionnels</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5, ease: "easeOut" }} className="max-w-4xl text-3xl font-bold leading-[1.08] text-primary-foreground sm:text-4xl md:text-6xl">
            Réduisez vos charges<br />énergétiques.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }} className="mt-6 max-w-lg text-base text-primary-foreground font-normal" style={{ textShadow: "0 2px 12px hsla(0,0%,0%,0.7), 0 0 4px hsla(0,0%,0%,0.5)" }}>
            Installations photovoltaïques pour entreprises, collectivités et industriels. Dimensionnement sur mesure, retour sur investissement calculé.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }} className="mt-10">
            <MagneticButton href="/simulateur" className="btn-glass-hero glow-pulse px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em]" strength={0.4}>Calculer ma rentabilité</MagneticButton>
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-[1px] h-10 bg-primary-foreground/30 scroll-indicator" />
        </motion.div>
      </section>

      <SectionDivider />

      <section className="section-padding relative grain" aria-label="Avantages solaire pour les entreprises">
        <FloatingShapes variant="light" />
        <div className="mx-auto max-w-6xl relative z-10">
          <BlurFade>
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-muted-foreground font-medium">Chiffres clés</p>
            <h2 className="sr-only">Avantages du photovoltaïque pour les entreprises en Savoie</h2>
            <TextReveal text="Le solaire, un investissement rentable." className="mb-16 text-3xl font-bold md:text-5xl" />
          </BlurFade>
          <StaggerChildren className="grid gap-6 md:grid-cols-2" stagger={0.1}>
            {benefits.map((b) => (
              <StaggerItem key={b.title} direction="scale">
                <TiltCard className="rounded-2xl h-full depth-layer" tiltMax={5}>
                  <div className="flex gap-6 p-8 rounded-2xl glass-card-light embossed h-full">
                    <div className="shrink-0">
                      <p className="text-2xl font-bold tracking-tight">
                        {b.metricNum !== undefined ? <CountUp end={b.metricNum} prefix={b.metricPrefix} suffix={b.metricSuffix} /> : b.metric}
                      </p>
                      <b.icon className="mt-2 h-5 w-5 text-muted-foreground" strokeWidth={1.2} />
                    </div>
                    <div>
                      <h3 className="mb-2 text-base font-semibold">{b.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">{b.description}</p>
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
            <MagneticButton href="/simulateur" className="btn-pill bg-foreground text-background glow-pulse inline-block px-12 py-5 text-xs font-semibold uppercase tracking-[0.2em]">Lancer le simulateur</MagneticButton>
          </BlurFade>
        </div>
      </section>

      <ContactSection />
    </>
  );
};

export default B2B;
