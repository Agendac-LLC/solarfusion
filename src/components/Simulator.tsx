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
          <div className="flex flex-col items-center justify-center space-y-5">
            <div className="h-14 w-14 rounded-2xl bg-background flex items-center justify-center" style={{ boxShadow: "var(--shadow-soft)" }}>
              <Sun className="h-6 w-6 text-muted-foreground" strokeWidth={1.2} />
            </div>
            <p className="text-muted-foreground text-xs uppercase tracking-[0.3em] font-medium">
              Simulateur Reonic
            </p>
            <p className="text-muted-foreground text-sm max-w-md leading-relaxed">
              Le simulateur Reonic sera intégré ici. Il calcule vos économies selon votre toiture et votre consommation réelle.
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
