import AnimatedSection from "./AnimatedSection";

interface SimulatorProps {
  variant?: "b2c" | "b2b";
}

const Simulator = ({ variant = "b2c" }: SimulatorProps) => (
  <section id="simulateur" className="section-padding section-alt">
    <div className="mx-auto max-w-4xl text-center">
      <AnimatedSection>
        <p className="mb-2 text-sm uppercase tracking-[0.3em] text-muted-foreground">
          {variant === "b2c" ? "Simulateur" : "Simulateur B2B"}
        </p>
        <h2 className="mb-6 text-3xl font-semibold md:text-5xl">
          {variant === "b2c"
            ? "Estimez vos économies."
            : "Calculez votre rentabilité."}
        </h2>
        <p className="mb-12 text-muted-foreground text-lg max-w-2xl mx-auto">
          {variant === "b2c"
            ? "Découvrez en quelques clics combien vous pourriez économiser grâce à l'autoconsommation solaire."
            : "Simulez le retour sur investissement d'une installation photovoltaïque pour votre entreprise."}
        </p>
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <div className="border border-border bg-background p-12 md:p-16">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="h-12 w-12 border border-border flex items-center justify-center">
              <Sun className="h-6 w-6 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground text-sm uppercase tracking-widest">
              Simulateur Reonic
            </p>
            <p className="text-muted-foreground text-sm max-w-md">
              L'intégration du simulateur Reonic sera disponible ici. Connectez votre compte Reonic pour activer le calculateur.
            </p>
            <a
              href="https://www.reonic.de"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 border border-foreground px-6 py-3 text-sm font-medium uppercase tracking-widest text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              En savoir plus
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

// Need to import Sun for the icon
import { Sun } from "lucide-react";

export default Simulator;
