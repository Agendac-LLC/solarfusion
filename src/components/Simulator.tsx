import { useEffect } from "react";
import AnimatedSection from "./AnimatedSection";

const useReonicLoader = () => {
  useEffect(() => {
    // Reset the flag so the loader re-scans the DOM
    (window as any).elementsloaded = false;

    // Remove any previously injected iframes to avoid duplicates
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

interface SimulatorProps {
  variant?: "b2c" | "b2b";
}

const Simulator = ({ variant = "b2c" }: SimulatorProps) => {
  useReonicLoader();

  return (
    <section id="simulateur" className="section-padding">
      <div className="mx-auto max-w-4xl text-center">
        <AnimatedSection>
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-muted-foreground font-medium">
            {variant === "b2c" ? "Simulateur gratuit" : "Simulateur pro"}
          </p>
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            {variant === "b2c"
              ? "Vos économies en 2 minutes."
              : "Votre rentabilité en 2 minutes."}
          </h2>
          <p className="mb-12 text-muted-foreground text-base max-w-2xl mx-auto">
            {variant === "b2c"
              ? "Entrez votre adresse et votre facture actuelle. Le simulateur calcule vos économies annuelles et le retour sur investissement."
              : "Surface de toiture, consommation actuelle, tarif d'achat - le simulateur calcule votre ROI et le temps d'amortissement."}
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className="section-alt rounded-3xl p-12 md:p-16" style={{ boxShadow: "var(--shadow-soft)" }}>
            {variant === "b2c" ? (
              <div
                data-reonic-type="element"
                data-product="energyhouse"
                data-client-id="609b49a2-adbb-4259-bcb2-24bc28be9c4b"
              />
            ) : (
              <div
                data-reonic-type="element"
                data-product="energycompany"
                data-client-id="609b49a2-adbb-4259-bcb2-24bc28be9c4b"
              />
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Simulator;
