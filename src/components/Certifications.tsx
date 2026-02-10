import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";

const certs = [
  {
    title: "QualiPV 36K",
    subtitle: "Certification RGE",
    description: "Obligatoire pour bénéficier des aides de l'État. Renouvelée tous les 4 ans après audit.",
  },
  {
    title: "Partenaire Hitachi",
    subtitle: "Installateur agréé",
    description: "Accès direct aux gammes pro Hitachi pour les PAC air-air et air-eau.",
  },
  {
    title: "Garantie Décennale",
    subtitle: "Assurance française",
    description: "Votre installation est couverte 10 ans. En cas de problème, on intervient.",
  },
];

const Certifications = () => (
  <section className="section-padding section-alt">
    <div className="mx-auto max-w-6xl">
      <AnimatedSection>
        <p className="mb-3 text-xs uppercase tracking-[0.4em] text-muted-foreground font-medium">
          Certifications
        </p>
        <h2 className="mb-20 text-3xl font-bold md:text-5xl">
          Certifié, assuré, vérifié.
        </h2>
      </AnimatedSection>
      <div className="grid gap-6 md:grid-cols-3">
        {certs.map((cert, i) => (
          <AnimatedSection key={cert.title} delay={i * 0.12}>
            <div className="glass-card-light p-10 rounded-2xl h-full transition-all duration-300">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-medium mb-4">
                {cert.subtitle}
              </p>
              <h3 className="mb-4 text-xl font-bold">{cert.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{cert.description}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
      <AnimatedSection delay={0.3}>
        <div className="mt-16 text-center">
          <Link
            to="/simulateur"
            className="btn-pill bg-foreground text-background inline-block px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em]"
          >
            Simuler mes économies
          </Link>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default Certifications;
