import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { Sun, Battery, Wifi, Thermometer } from "lucide-react";

const services = [
  {
    icon: Sun,
    title: "Panneaux solaires",
    description:
      "On dimensionne votre installation selon votre consommation réelle, pas selon un catalogue. Pose en toiture ou au sol.",
    detail: "Autoconsommation avec revente du surplus.",
  },
  {
    icon: Battery,
    title: "Stockage d'énergie",
    description:
      "Batterie physique ou virtuelle pour utiliser votre production le soir et les jours gris. Vous consommez ce que vous produisez.",
    detail: "Jusqu'à 70% d'économie sur la facture.",
  },
  {
    icon: Wifi,
    title: "Domotique",
    description:
      "Pilotage à distance de votre chauffage et de vos appareils. Vous voyez ce que vous consommez, en temps réel.",
    detail: "Pilotage depuis votre smartphone.",
  },
  {
    icon: Thermometer,
    title: "Pompes à chaleur",
    description:
      "PAC air-air et air-eau Hitachi. Chauffage et climatisation haute performance, couplés au solaire. Installation réalisée par nos partenaires qualifiés.",
    detail: "Coordination et suivi par Solar Fusion.",
  },
];

const Services = () => (
  <section className="section-padding section-alt-deep">
    <div className="mx-auto max-w-6xl">
      <AnimatedSection>
        <p className="mb-3 text-xs uppercase tracking-[0.4em] text-muted-foreground font-medium">
          Ce qu'on fait
        </p>
        <h2 className="mb-4 text-3xl font-bold md:text-5xl">
          Quatre métiers, une équipe.
        </h2>
        <p className="mb-20 text-muted-foreground text-base max-w-xl">
          Du panneau solaire à la domotique, on couvre toute la chaîne pour que votre maison produise, stocke et consomme intelligemment.
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
            Résultat en moins de 2 minutes. Gratuit, sans engagement.
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
