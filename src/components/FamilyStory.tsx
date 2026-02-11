import AnimatedSection from "./AnimatedSection";
import TextReveal from "./TextReveal";
import CountUp from "./CountUp";
import { motion } from "framer-motion";

const stats = [
  { value: 15, suffix: "", label: "ans sur les toits", sub: "Savoie & Haute-Savoie" },
  { value: 0, suffix: "", label: "accident", sub: "en 15 ans de chantiers" },
  { label: "Garantie Décennale", sub: "Assurance française 10 ans", isBlack: true },
];

const FamilyStory = () => (
  <section className="section-padding">
    <div className="mx-auto max-w-6xl">
      {/* Title */}
      <AnimatedSection>
        <p className="mb-3 text-xs uppercase tracking-[0.4em] text-muted-foreground font-medium">
          Qui sommes-nous
        </p>
        <TextReveal
          text="Père et fils, installateurs solaires."
          className="mb-8 text-3xl font-bold md:text-5xl leading-[1.1]"
        />
      </AnimatedSection>

      {/* Text */}
      <AnimatedSection>
        <div className="max-w-2xl mb-16 space-y-5 text-muted-foreground leading-relaxed">
          <p>
            Sébastien Chaffardon installe des panneaux solaires en Savoie depuis <strong className="text-foreground font-semibold">2009</strong>. Son fils l'a rejoint pour continuer le métier. À deux, ils gèrent chaque chantier du dimensionnement à la mise en service.
          </p>
          <p>
            Pas de sous-traitance, pas d'intérimaires. Chaque toit est posé avec le même soin que si c'était le nôtre. Résultat : <strong className="text-foreground font-semibold">zéro accident</strong> en 15 ans de chantiers.
          </p>
        </div>
      </AnimatedSection>

      {/* Stats row */}
      <div className="grid gap-6 md:grid-cols-3">
        {stats.map((stat, i) => (
          <AnimatedSection key={stat.label} delay={i * 0.12}>
            <motion.div
              className={`p-8 rounded-2xl h-full transition-all duration-300 ${
                stat.isBlack
                  ? "bg-foreground text-background"
                  : "glass-card-light"
              }`}
              whileHover={{ y: -4, boxShadow: "var(--shadow-elevated)" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{ transformPerspective: 800 }}
            >
              {stat.isBlack ? (
                <>
                  <p className="text-xs uppercase tracking-[0.3em] text-background/60 font-medium mb-2">
                    Chaque installation
                  </p>
                  <p className="text-xl font-bold">{stat.label}</p>
                  <p className="mt-1 text-sm text-background/60">{stat.sub}</p>
                </>
              ) : (
                <>
                  <p className="text-4xl font-bold tracking-tight md:text-5xl">
                    <CountUp end={stat.value!} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 text-base font-semibold">{stat.label}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.sub}</p>
                </>
              )}
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default FamilyStory;
