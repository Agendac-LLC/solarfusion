import { useEffect } from "react";
import { motion } from "framer-motion";
import BlurFade from "@/components/BlurFade";
import ScrollScale from "@/components/ScrollScale";
import FloatingShapes from "@/components/FloatingShapes";
import SectionDivider from "@/components/SectionDivider";

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

  return (
    <>
      <section className="pt-28 pb-8 px-6 relative">
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

      <section className="px-6 pb-28 pt-8 relative grain">
        <FloatingShapes variant="light" />
        <div className="mx-auto max-w-3xl relative z-10">
          <ScrollScale scaleRange={[0.92, 1]} opacityRange={[0.4, 1]}>
            <BlurFade delay={0.3}>
              <div className="section-alt rounded-3xl p-12 md:p-20 embossed" style={{ boxShadow: "var(--shadow-dramatic)" }}>
                <div
                  data-reonic-type="element"
                  data-product="energyhouse"
                  data-client-id="609b49a2-adbb-4259-bcb2-24bc28be9c4b"
                />
              </div>
            </BlurFade>
          </ScrollScale>
        </div>
      </section>
    </>
  );
};

export default SimulateurPage;
