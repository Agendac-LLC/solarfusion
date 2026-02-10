import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { Sun, Battery, Wifi, Thermometer } from "lucide-react";

const services = [
  {
    icon: Sun,
    title: "Panneaux Solaires",
    description:
      "Installation sur-mesure de panneaux photovoltaïques pour l'autoconsommation résidentielle et professionnelle.",
    detail: "Dimensionnement optimisé selon votre consommation réelle.",
  },
  {
    icon: Battery,
    title: "Batterie Virtuelle & Physique",
    description:
      "Stockez votre surplus de production pour le consommer quand vous en avez besoin, de jour comme de nuit.",
    detail: "Solution de stockage intelligente avec suivi en temps réel.",
  },
  {
    icon: Wifi,
    title: "Domotique",
    description:
      "Solutions intelligentes pour piloter et optimiser votre consommation énergétique à distance.",
    detail: "Compatible avec tous les systèmes de gestion énergétique.",
  },
  {
    icon: Thermometer,
    title: "Pompes à Chaleur",
    description:
      "Installation de pompes à chaleur performantes, réalisée par nos partenaires certifiés.",
    detail: "Solutions de chauffage et climatisation haute efficacité.",
  },
];

const Services = () => (
  <section className="section-padding">
    <div className="mx-auto max-w-6xl">
      <AnimatedSection>
        <p className="mb-3 text-xs uppercase tracking-[0.4em] text-muted-foreground font-medium">
          Nos solutions
        </p>
        <h2 className="mb-4 text-3xl font-bold md:text-5xl">
          Des solutions de pointe.
        </h2>
        <p className="mb-20 text-muted-foreground text-base max-w-xl">
          De l'installation photovoltaïque au stockage intelligent, nous couvrons l'ensemble de votre transition énergétique.
        </p>
      </AnimatedSection>
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service, i) => (
          <AnimatedSection key={service.title} delay={i * 0.12}>
            <motion.div
              className="flex flex-col glass-card-light p-10 md:p-12 h-full group cursor-default rounded-2xl transition-all duration-300"
              style={{}}
              whileHover={{ y: -4, boxShadow: "var(--shadow-elevated)" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <service.icon className="mb-8 h-8 w-8 text-foreground/80 group-hover:text-foreground transition-colors duration-300" strokeWidth={1.2} />
              <h3 className="mb-3 text-lg font-semibold">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {service.description}
              </p>
              <p className="mt-4 text-xs text-muted-foreground/70 uppercase tracking-wider font-medium">
                {service.detail}
              </p>
            </motion.div>
          </AnimatedSection>
        ))}
        </div>
        <AnimatedSection delay={0.3}>
          <div className="mt-16 text-center">
            <p className="mb-6 text-muted-foreground text-sm">
              Simulez votre projet en moins de 2 minutes et obtenez une étude personnalisée.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row justify-center">
              <Link
                to="/simulateur"
                className="btn-pill bg-foreground text-background inline-block px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em]"
              >
                Simuler mon projet
              </Link>
              <a
                href="tel:+33762111470"
                className="btn-ghost-fill inline-block px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ borderRadius: "9999px" }}
              >
                Être rappelé gratuitement
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
);

export default Services;
