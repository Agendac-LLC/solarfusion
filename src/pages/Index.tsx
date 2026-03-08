import { useMemo } from "react";
import Hero from "@/components/Hero";
import SectionDivider from "@/components/SectionDivider";
import SEO from "@/components/SEO";
import FamilyStory from "@/components/FamilyStory";
import Reassurance from "@/components/Reassurance";
import Services from "@/components/Services";
import HorizontalScrollGallery from "@/components/HorizontalScrollGallery";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const breadcrumbLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://solar-fusion.fr/" }
    ]
  }), []);

  const websiteSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Solar Fusion",
    "url": "https://solar-fusion.fr",
    "description": "Expert en autoconsommation photovoltaïque. Installation de panneaux solaires, batteries, domotique et pompes à chaleur partout en France."
  }), []);

  const faqSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Combien coûte une installation de panneaux solaires en France ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le coût dépend de la taille de l'installation et de votre consommation. Utilisez notre simulateur en ligne pour obtenir une estimation gratuite et personnalisée en 2 minutes. Solar Fusion dimensionne chaque projet sur mesure."
        }
      },
      {
        "@type": "Question",
        "name": "Quelle est la zone d'intervention de Solar Fusion ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Solar Fusion intervient partout en France, avec une base à Chambéry (Savoie)."
        }
      },
      {
        "@type": "Question",
        "name": "Quelles certifications possède Solar Fusion ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Solar Fusion est certifié QualiPV 36K et partenaire agréé Hitachi pour les pompes à chaleur. L'entreprise dispose d'une garantie décennale française et affiche un bilan sécurité de 0 accident depuis sa création en 2009."
        }
      }
    ]
  }), []);

  return (
    <>
      <SEO
        title="Solar Fusion - Panneaux Solaires Chambéry | France entière"
        description="Expert photovoltaïque à Chambéry. Installation panneaux solaires, batterie, domotique partout en France. Garantie décennale."
        canonicalUrl="/"
        structuredData={[breadcrumbLd, websiteSchema, faqSchema]}
      />
      <Hero />
      <SectionDivider />
      <FamilyStory />
      <Reassurance />
      <SectionDivider />
      <Services />
      <HorizontalScrollGallery />
      <SectionDivider />
      <ContactSection />
    </>
  );
};

export default Index;
