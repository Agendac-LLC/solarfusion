import AnimatedSection from "./AnimatedSection";
import { Sun } from "lucide-react";

interface SimulatorProps {
  variant?: "b2c" | "b2b";
}

const Simulator = ({ variant = "b2c" }: SimulatorProps) => (
  <section id="simulateur" className="section-padding">
    <div className="mx-auto max-w-4xl text-center">
      <AnimatedSection>
        <p className="mb-3 text-xs uppercase tracking-[0.4em] text-muted-foreground font-medium">
          {variant === "b2c" ? "Simulateur" : "Simulateur B2B"}
        </p>
        <h2 className="mb-6 text-3xl font-bold md:text-5xl">
          {variant === "b2c"
            ? "Estimez vos économies."
            : "Calculez votre rentabilité."}
        </h2>
        <p className="mb-12 text-muted-foreground text-base max-w-2xl mx-auto">
          {variant === "b2c"
            ? "Découvrez en quelques clics combien vous pourriez économiser grâce à l'autoconsommation solaire."
            : "Simulez le retour sur investissement d'une installation photovoltaïque pour votre entreprise."}
        </p>
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <div className="section-alt rounded-3xl p-12 md:p-16" style={{ boxShadow: "var(--shadow-soft)" }}>
          <div className="flex flex-col items-center justify-center space-y-5">
            <div className="h-14 w-14 rounded-2xl bg-background flex items-center justify-center" style={{ boxShadow: "var(--shadow-soft)" }}>
              <Sun className="h-6 w-6 text-muted-foreground" strokeWidth={1.2} />
            </div>
            <p className="text-muted-foreground text-xs uppercase tracking-[0.3em] font-medium">
              Simulateur Reonic
            </p>
            <p className="text-muted-foreground text-sm max-w-md leading-relaxed">
              L'intégration du simulateur Reonic sera disponible ici. Connectez votre compte Reonic pour activer le calculateur.
            </p>
            <a
              href="https://www.reonic.de"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill bg-foreground text-background mt-4 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em]"
            >
              En savoir plus
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default Simulator;
