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
        <h2 className="mb-16 text-3xl font-bold md:text-5xl">
          La confiance comme fondation.
        </h2>
      </AnimatedSection>
      <div className="grid gap-12 md:grid-cols-3">
        {stats.map((stat, i) => (
          <AnimatedSection key={stat.label} delay={i * 0.15}>
            <div className="group">
              <div className="mb-6 h-[1px] w-12 bg-foreground/20 group-hover:w-20 transition-all duration-500" />
              <p className="text-4xl font-bold tracking-tight">{stat.value}</p>
              <p className="mt-1 text-base font-semibold">{stat.label}</p>
              <p className="mt-3 text-muted-foreground leading-relaxed text-sm">
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
