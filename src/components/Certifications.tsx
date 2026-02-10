import AnimatedSection from "./AnimatedSection";
import { Award, Handshake, ShieldCheck } from "lucide-react";

const certs = [
  {
    icon: Award,
    title: "QualiPV 36K",
    description: "Certification RGE garantissant la qualité de nos installations photovoltaïques.",
  },
  {
    icon: Handshake,
    title: "Partenaire Hitachi",
    description: "Partenariat officiel avec Hitachi pour des solutions de climatisation et pompes à chaleur.",
  },
  {
    icon: ShieldCheck,
    title: "Garantie Décennale",
    description: "Couverture décennale française pour une tranquillité d'esprit totale.",
  },
];

const Certifications = () => (
  <section className="section-padding">
    <div className="mx-auto max-w-6xl">
      <AnimatedSection>
        <p className="mb-2 text-sm uppercase tracking-[0.3em] text-muted-foreground">
          Certifications
        </p>
        <h2 className="mb-16 text-3xl font-semibold md:text-5xl">
          Certifié. Garanti. Fiable.
        </h2>
      </AnimatedSection>
      <div className="grid gap-12 md:grid-cols-3">
        {certs.map((cert, i) => (
          <AnimatedSection key={cert.title} delay={i * 0.15}>
            <div className="border border-border p-10 transition-colors hover:bg-secondary/50">
              <cert.icon className="mb-6 h-10 w-10" strokeWidth={1} />
              <h3 className="mb-3 text-lg font-semibold">{cert.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{cert.description}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
