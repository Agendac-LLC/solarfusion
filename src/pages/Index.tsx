import { useMemo, lazy, Suspense } from "react";
import Hero from "@/components/Hero";
import SectionDivider from "@/components/SectionDivider";
import SEOHead from "@/components/SEOHead";

// Lazy load all below-fold sections
const FamilyStory = lazy(() => import("@/components/FamilyStory"));
const Reassurance = lazy(() => import("@/components/Reassurance"));
const Services = lazy(() => import("@/components/Services"));
const HorizontalScrollGallery = lazy(() => import("@/components/HorizontalScrollGallery"));
const ContactSection = lazy(() => import("@/components/ContactSection"));

const Index = () => {
  const breadcrumbLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://solar-fusion.fr/" }
    ]
  }), []);

  return (
    <>
      <SEOHead
        title="Solar Fusion - Panneaux Solaires Chambéry | France entière"
        description="Expert photovoltaïque à Chambéry. Installation panneaux solaires, batterie, domotique partout en France. Garantie décennale."
        canonical="https://solar-fusion.fr/"
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
        <SectionDivider />
        
        <ContactSection />
      </Suspense>
    </>
  );
};

export default Index;
