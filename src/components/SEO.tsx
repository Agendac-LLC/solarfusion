import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  structuredData?: object | object[];
  noIndex?: boolean;
}

const SITE_URL = "https://solarfusion.fr";
const DEFAULT_OG_IMAGE = "https://solarfusion.fr/og-image.webp";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://solarfusion.fr/#business",
  name: "Solar Fusion",
  description:
    "Expert en autoconsommation photovoltaïque. Installation de panneaux solaires, batteries, domotique et pompes à chaleur partout en France!",
  url: SITE_URL,
  telephone: "+33762111470",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1 rue du Château",
    addressLocality: "Chambéry",
    postalCode: "73000",
    addressRegion: "Auvergne-Rhône-Alpes",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.5646,
    longitude: 5.9178,
  },
  areaServed: [{ "@type": "Country", name: "France" }],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Thursday", "Friday"],
      description: "Sur rendez-vous",
    },
  ],
  vatID: "FR61929522175",
  foundingDate: "2009",
  founder: { "@type": "Person", name: "Sébastien Chaffardon" },
  numberOfEmployees: { "@type": "QuantitativeValue", value: 2 },
  knowsAbout: [
    "Installation panneaux solaires",
    "Autoconsommation photovoltaïque",
    "Batterie solaire virtuelle",
    "Batterie solaire physique",
    "Domotique énergétique",
    "Pompe à chaleur air-air",
    "Pompe à chaleur air-eau",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "3",
    bestRating: "5",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Marie L." },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody:
        "Posé en une journée. Propre, carré, rien à redire. On produit plus que prévu.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Jean-Pierre D." },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody:
        "Production conforme aux estimations. Sébastien et son fils connaissent leur métier.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Sophie M." },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody:
        "Suivi du début à la fin. On sent l'entreprise familiale sérieuse. Je recommande.",
    },
  ],
  sameAs: [
    "https://www.google.com/maps/place/Solar+Fusion",
    "https://www.instagram.com/solarfusion73",
  ],
};

const SEO = ({
  title,
  description,
  canonicalUrl,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  structuredData,
  noIndex = false,
}: SEOProps) => {
  const fullTitle = title.includes("Solar Fusion")
    ? title
    : `${title} | Solar Fusion`;
  const fullCanonicalUrl = canonicalUrl
    ? `${SITE_URL}${canonicalUrl}`
    : SITE_URL;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonicalUrl} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content="Solar Fusion" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* LocalBusiness schema on every page */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>

      {/* Page-specific structured data */}
      {structuredData &&
        (Array.isArray(structuredData) ? (
          structuredData.map((data, index) => (
            <script key={index} type="application/ld+json">
              {JSON.stringify(data)}
            </script>
          ))
        ) : (
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        ))}
    </Helmet>
  );
};

export default SEO;
