import { useEffect, useMemo } from "react";
import BlurFade from "@/components/BlurFade";
import FloatingShapes from "@/components/FloatingShapes";
import SectionDivider from "@/components/SectionDivider";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";

const useReonicLoader = () => {
  useEffect(() => {
    (window as any).elementsloaded = false;
    document.querySelectorAll('.ifrGuest').forEach((el) => el.remove());

    const script = document.createElement("script");
    script.src = "https://apps.reonic.de/elements/reonic-loader.js";
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);
};

const SimulateurPage = () => {
  useReonicLoader();

  const breadcrumbLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://solarfusion.lovable.app/" },
      { "@type": "ListItem", "position": 2, "name": "Simulateur", "item": "https://solarfusion.lovable.app/simulateur" }
    ]
  }), []);

  return (
    <>
      <SEOHead
        title="Simulateur Solaire Gratuit — Calculez Vos Économies | Solar Fusion Chambéry"
        description="Simulez gratuitement vos économies avec le photovoltaïque en Savoie et Haute-Savoie. Résultat en 2 minutes : retour sur investissement, production annuelle, économies sur facture. Sans engagement."
        canonical="https://solarfusion.lovable.app/simulateur"
        jsonLd={breadcrumbLd}
      />
      <section className="pt-28 pb-8 px-6 relative" aria-label="Simulateur d'économies solaires">
        <FloatingShapes variant="light" />
        <div className="mx-auto max-w-3xl text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mb-3 text-xs uppercase tracking-[0.4em] text-muted-foreground font-medium"
          >
            Simulateur gratuit
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-3xl font-bold md:text-5xl mb-4"
          >
            Vos économies en 2 minutes.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="text-muted-foreground text-base max-w-lg mx-auto"
          >
            Entrez votre adresse et votre facture actuelle. Le simulateur calcule vos économies annuelles et votre retour sur investissement.
          </motion.p>
        </div>
      </section>

      <SectionDivider />

      <section className="px-6 pb-28 pt-8 relative grain" aria-label="Outil de simulation photovoltaïque">
        <FloatingShapes variant="light" />
        <div className="mx-auto max-w-3xl relative z-10">
          <BlurFade delay={0.3}>
            <div className="section-alt rounded-3xl p-12 md:p-20 embossed" style={{ boxShadow: "var(--shadow-dramatic)" }}>
              <div
                data-reonic-type="element"
                data-product="energyhouse"
                data-client-id="609b49a2-adbb-4259-bcb2-24bc28be9c4b"
              />
            </div>
          </BlurFade>
        </div>
      </section>
    </>
  );
};

export default SimulateurPage;
