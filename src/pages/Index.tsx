import { useMemo, lazy, Suspense } from "react";
import Hero from "@/components/Hero";
import SectionDivider from "@/components/SectionDivider";
import SEOHead from "@/components/SEOHead";

// Lazy load all below-fold sections
const FamilyStory = lazy(() => import("@/components/FamilyStory"));
const Reassurance = lazy(() => import("@/components/Reassurance"));
const Services = lazy(() => import("@/components/Services"));
const HorizontalScrollGallery = lazy(() => import("@/components/HorizontalScrollGallery"));
const Certifications = lazy(() => import("@/components/Certifications"));

const Reviews = lazy(() => import("@/components/Reviews"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const ContactForm = lazy(() => import("@/components/ContactForm"));
const BelowFoldCTA = lazy(() => import("@/components/BelowFoldCTA"));

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
        title="Solar Fusion - Panneaux Solaires Chambéry | Savoie & Haute-Savoie"
        description="Expert photovoltaïque à Chambéry. Installation panneaux solaires, batterie, domotique en Savoie (73) et Haute-Savoie (74). 15 ans d'expérience, garantie décennale."
        canonical="https://solarfusion.lovable.app/"
        jsonLd={breadcrumbLd}
      />
      <Hero />
      <SectionDivider />
      <Suspense fallback={<div className="min-h-[200px]" />}>
        <FamilyStory />
        <Reassurance />
        <SectionDivider />
        <Services />
        <HorizontalScrollGallery />
        <BelowFoldCTA />
        <Certifications />
        <SectionDivider />
        
        <Reviews />
        <BelowFoldCTA variant="contact" />
        <ContactSection />
        <ContactForm />
      </Suspense>
    </>
  );
};

export default Index;
