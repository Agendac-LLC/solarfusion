import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

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
        <h2 className="mb-16 text-3xl font-bold md:text-5xl">
          Certifié. Garanti. Fiable.
        </h2>
      </AnimatedSection>
      <div className="grid gap-8 md:grid-cols-3">
        {certs.map((cert, i) => (
          <AnimatedSection key={cert.title} delay={i * 0.12}>
            <motion.div
              className="border border-border bg-background p-10 card-lift h-full"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-medium mb-4">
                {cert.subtitle}
              </p>
              <h3 className="mb-4 text-xl font-bold">{cert.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{cert.description}</p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
