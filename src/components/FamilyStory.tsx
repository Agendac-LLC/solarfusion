import AnimatedSection from "./AnimatedSection";
import TextReveal from "./TextReveal";
import CountUp from "./CountUp";

const FamilyStory = () => (
  <section className="section-padding">
    <div className="mx-auto max-w-6xl">
      <div className="grid gap-20 md:grid-cols-2 items-start">
        <AnimatedSection direction="left" className="overflow-hidden min-w-0">
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-muted-foreground font-medium">
            Qui sommes-nous
          </p>
          <TextReveal
            text="Père et fils, installateurs solaires."
            className="mb-8 text-3xl font-bold md:text-5xl leading-[1.1]"
          />
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Sébastien Chaffardon installe des panneaux solaires en Savoie depuis <strong className="text-foreground font-semibold">2009</strong>. Son fils l'a rejoint pour continuer le métier. À deux, ils gèrent chaque chantier du dimensionnement à la mise en service.
            </p>
            <p>
              Pas de sous-traitance, pas d'intérimaires. Chaque toit est posé avec le même soin que si c'était le nôtre. Résultat : <strong className="text-foreground font-semibold">zéro accident</strong> en 15 ans de chantiers.
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection direction="right" delay={0.2}>
          <div className="space-y-6">
            {[
              { value: 15, suffix: "", label: "ans sur les toits", sub: "de la Savoie et Haute-Savoie" },
              { value: 0, suffix: "", label: "accident", sub: "sur l'ensemble de nos chantiers" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-8 rounded-2xl glass-card-light transition-all duration-300"
              >
                <p className="text-4xl font-bold tracking-tight md:text-5xl">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-base font-semibold">{stat.label}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.sub}</p>
              </div>
            ))}
            <div className="bg-foreground p-6 text-center rounded-2xl" style={{ boxShadow: "var(--shadow-card)" }}>
              <p className="text-xs uppercase tracking-[0.3em] text-background/60 font-medium">
                Chaque installation
              </p>
              <p className="mt-1 text-base font-semibold text-background">
                Garantie Décennale Française
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default FamilyStory;
