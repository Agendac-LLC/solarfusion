import { useMemo } from "react";
import Hero from "@/components/Hero";
import FamilyStory from "@/components/FamilyStory";
import Reassurance from "@/components/Reassurance";
import Services from "@/components/Services";
import HorizontalScrollGallery from "@/components/HorizontalScrollGallery";
import Certifications from "@/components/Certifications";
import Simulator from "@/components/Simulator";
import Reviews from "@/components/Reviews";
import ContactSection from "@/components/ContactSection";
import BlurFade from "@/components/BlurFade";
import SectionDivider from "@/components/SectionDivider";
import MagneticButton from "@/components/MagneticButton";
import ParallaxBackground from "@/components/ParallaxBackground";
import FloatingShapes from "@/components/FloatingShapes";
import TextReveal from "@/components/TextReveal";
import SEOHead from "@/components/SEOHead";
import fermeImage from "@/assets/install-ferme-alpine.webp";

const Index = () => {
  const breadcrumbLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://solarfusion.lovable.app/" }
    ]
  }), []);

  return (
    <>
      <SEOHead
        title="Solar Fusion — Installation Panneaux Solaires Chambéry | Savoie & Haute-Savoie"
        description="Expert en autoconsommation photovoltaïque à Chambéry. Installation panneaux solaires, batterie, domotique et pompe à chaleur en Savoie (73) et Haute-Savoie (74). 15 ans d'expérience, garantie décennale."
        canonical="https://solarfusion.lovable.app/"
        jsonLd={breadcrumbLd}
      />
      <Hero />
      <SectionDivider />
      <FamilyStory />
      <Reassurance />
      <SectionDivider />
      <Services />
      <HorizontalScrollGallery />
      <ParallaxBackground
        image={fermeImage}
        alt="Installation solaire sur ferme alpine en Savoie"
        overlayOpacity={0.55}
        blur={2}
      >
        <FloatingShapes variant="dark" />
        <div className="section-padding">
          <div className="mx-auto max-w-4xl text-center">
            <BlurFade>
              <TextReveal
                text="Et si votre toit travaillait pour vous ?"
                className="text-2xl font-bold md:text-4xl text-primary-foreground mb-6"
                variant="light"
              />
              <p className="mb-10 text-primary-foreground/70 text-sm">
                Gratuit, sans engagement, résultat en 2 minutes.
              </p>
              <MagneticButton
                href="#simulateur"
                className="btn-pill bg-primary-foreground text-primary glow-pulse inline-block px-12 py-5 text-xs font-semibold uppercase tracking-[0.2em]"
              >
                Simuler mes économies
              </MagneticButton>
            </BlurFade>
          </div>
        </div>
      </ParallaxBackground>
      <Certifications />
      <SectionDivider />
      <Simulator variant="b2c" />
      <Reviews />
      <section className="section-padding bg-background relative" aria-label="Appel à l'action contact">
        <FloatingShapes variant="light" />
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <BlurFade>
            <TextReveal
              text="On en parle ?"
              className="mb-4 text-3xl font-bold md:text-5xl"
            />
            <p className="mb-8 text-muted-foreground text-sm max-w-xl mx-auto">
              Appelez-nous ou remplissez le formulaire. On vous rappelle pour discuter de votre toiture.
            </p>
            <MagneticButton
              href="#contact"
              className="btn-pill bg-foreground text-background glow-pulse inline-block px-12 py-5 text-xs font-semibold uppercase tracking-[0.2em]"
            >
              Nous contacter
            </MagneticButton>
          </BlurFade>
        </div>
      </section>
      <ContactSection />
    </>
  );
};

export default Index;
