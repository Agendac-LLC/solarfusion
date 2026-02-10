import AnimatedSection from "./AnimatedSection";
import { Sun, Home, Thermometer } from "lucide-react";

const services = [
  {
    icon: Sun,
    title: "Panneaux Solaires",
    description:
      "Installation sur-mesure de panneaux photovoltaïques pour l'autoconsommation résidentielle et professionnelle. Batterie virtuelle et physique disponibles.",
  },
  {
    icon: Home,
    title: "Domotique",
    description:
      "Solutions domotiques intelligentes pour optimiser votre consommation énergétique et piloter votre maison à distance.",
  },
  {
    icon: Thermometer,
    title: "Pompes à Chaleur",
    description:
      "Installation de pompes à chaleur performantes, réalisée en sous-traitance par nos partenaires certifiés.",
  },
];

const Services = () => (
  <section className="section-padding section-alt">
    <div className="mx-auto max-w-6xl">
      <AnimatedSection>
        <p className="mb-2 text-sm uppercase tracking-[0.3em] text-muted-foreground">
          Nos services
        </p>
        <h2 className="mb-16 text-3xl font-semibold md:text-5xl">
          Des solutions complètes.
        </h2>
      </AnimatedSection>
      <div className="grid gap-px bg-border md:grid-cols-3">
        {services.map((service, i) => (
          <AnimatedSection key={service.title} delay={i * 0.15}>
            <div className="flex flex-col bg-background p-10 md:p-12 transition-colors hover:bg-secondary/50 h-full">
              <service.icon className="mb-8 h-10 w-10" strokeWidth={1} />
              <h3 className="mb-4 text-xl font-semibold">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
