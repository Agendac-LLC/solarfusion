import AnimatedSection from "./AnimatedSection";
import { Shield, Users, Clock } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: "15 ans",
    label: "d'expérience",
    description: "Une expertise solide au service de votre transition énergétique.",
  },
  {
    icon: Users,
    value: "Famille",
    label: "Chaffardon",
    description: "Entreprise familiale dirigée par Sébastien Chaffardon et son fils.",
  },
  {
    icon: Shield,
    value: "0",
    label: "accident à ce jour",
    description: "La sécurité est notre priorité absolue sur chaque chantier.",
  },
];

const Reassurance = () => (
  <section className="section-padding">
    <div className="mx-auto max-w-6xl">
      <AnimatedSection>
        <p className="mb-2 text-sm uppercase tracking-[0.3em] text-muted-foreground">
          Pourquoi nous choisir
        </p>
        <h2 className="mb-16 text-3xl font-semibold md:text-5xl">
          La confiance comme fondation.
        </h2>
      </AnimatedSection>
      <div className="grid gap-12 md:grid-cols-3">
        {stats.map((stat, i) => (
          <AnimatedSection key={stat.label} delay={i * 0.15}>
            <div className="group">
              <stat.icon className="mb-6 h-8 w-8 text-foreground" strokeWidth={1.5} />
              <p className="text-4xl font-semibold">{stat.value}</p>
              <p className="mt-1 text-lg font-medium">{stat.label}</p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {stat.description}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Reassurance;
