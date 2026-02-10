import AnimatedSection from "./AnimatedSection";

const stats = [
  {
    value: "15 ans",
    label: "d'expérience",
    description: "Une expertise solide au service de votre transition énergétique.",
  },
  {
    value: "Famille",
    label: "Chaffardon",
    description: "Entreprise familiale dirigée par Sébastien Chaffardon et son fils.",
  },
  {
    value: "0",
    label: "accident à ce jour",
    description: "La sécurité est notre priorité absolue sur chaque chantier.",
  },
];

const Reassurance = () => (
  <section className="section-padding section-alt">
    <div className="mx-auto max-w-6xl">
      <AnimatedSection>
        <p className="mb-3 text-xs uppercase tracking-[0.4em] text-muted-foreground font-medium">
          Pourquoi nous choisir
        </p>
        <h2 className="mb-20 text-3xl font-bold md:text-5xl">
          La confiance comme fondation.
        </h2>
      </AnimatedSection>
      <div className="grid gap-6 md:grid-cols-3">
        {stats.map((stat, i) => (
          <AnimatedSection key={stat.label} delay={i * 0.15}>
            <div className="bg-background rounded-2xl p-8" style={{ boxShadow: "var(--shadow-soft)" }}>
              <p className="text-4xl font-bold tracking-tight">{stat.value}</p>
              <p className="mt-1 text-base font-semibold">{stat.label}</p>
              <p className="mt-4 text-muted-foreground leading-relaxed text-sm">
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
