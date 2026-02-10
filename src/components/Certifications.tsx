import AnimatedSection from "./AnimatedSection";

const certs = [
  {
    title: "QualiPV 36K",
    subtitle: "Certification RGE",
    description: "Garantissant la qualité de nos installations photovoltaïques conformément aux normes en vigueur.",
  },
  {
    title: "Partenaire Hitachi",
    subtitle: "Partenariat officiel",
    description: "Solutions de climatisation et pompes à chaleur de haute performance.",
  },
  {
    title: "Garantie Décennale",
    subtitle: "Couverture française",
    description: "Tranquillité d'esprit totale avec une couverture décennale sur chaque installation.",
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
          Certifié. Garanti. Fiable.
        </h2>
      </AnimatedSection>
      <div className="grid gap-6 md:grid-cols-3">
        {certs.map((cert, i) => (
          <AnimatedSection key={cert.title} delay={i * 0.12}>
            <div className="bg-background p-10 rounded-2xl card-lift h-full">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-medium mb-4">
                {cert.subtitle}
              </p>
              <h3 className="mb-4 text-xl font-bold">{cert.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{cert.description}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
