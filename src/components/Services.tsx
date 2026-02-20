import BlurFade from "./BlurFade";
import TextReveal from "./TextReveal";
import TiltCard from "./TiltCard";
import MagneticButton from "./MagneticButton";
import StaggerChildren, { StaggerItem } from "./StaggerChildren";
import FloatingShapes from "./FloatingShapes";
import { Sun, Battery, Wifi, Thermometer } from "lucide-react";

const services = [
  {
    icon: Sun,
    title: "Production solaire",
    description:
      "On dimensionne votre installation selon votre consommation réelle, pas selon un catalogue. Pose en toiture ou au sol.",
    detail: "Production maîtrisée. Rentabilité mesurée.",
  },
  {
    icon: Battery,
    title: "Stockage & optimisation",
    description:
      "Batterie physique ou virtuelle pour utiliser votre production le soir et les jours gris. Vous consommez ce que vous produisez.",
    detail: "Moins de réseau. Plus d’autonomie.",
  },
  {
    icon: Wifi,
    title: "Pilotage intelligent",
    description:
      "Pilotage à distance de votre chauffage et de vos appareils. Vous voyez ce que vous consommez, en temps réel.",
    detail: "Chaque KWh compte.",
  },
  {
    icon: Thermometer,
    title: "Pompes à Chaleur/Climatisation",
    description:
      "Le solaire prend tout son sens lorsqu’il alimente un système thermique performant.",
    detail: "Un ensemble logique. Pas un assemblage",
  },
];

const Services = () => (
  <section className="section-padding section-alt-deep relative grain" aria-label="Services d'installation solaire en Savoie">
    <FloatingShapes variant="light" />
    <div className="mx-auto max-w-6xl relative z-10">
      <BlurFade>
        <p className="mb-3 text-xs uppercase tracking-[0.4em] text-muted-foreground font-medium">
          Ce que nous faisons
        </p>
        <h2 className="sr-only">Services d'installation solaire en Savoie - Panneaux, batterie, domotique, PAC</h2>
        <TextReveal
          text="Produire moins de dépendance. Plus de maîtrise."
          className="mb-4 text-3xl font-bold md:text-5xl"
          as="p"
        />
        <p className="mb-6 text-muted-foreground text-base max-w-xl">
          L'énergie n'est pas un produit.<br/>
          C'est un système.
        </p>
        <p className="mb-16 text-muted-foreground text-base max-w-xl">
          Nous concevons des installations cohérentes, dimensionnées selon votre mode de vie, votre toiture et vos objectifs.<br/>
          Chaque choix technique a un seul but : performance, stabilité et rentabilité sur le long terme.
        </p>
      </BlurFade>
      <StaggerChildren className="grid gap-6 md:grid-cols-2" stagger={0.1}>
        {services.map((service) => (
          <StaggerItem key={service.title} direction="scale">
            <div className="flex flex-col bg-background border border-border/60 shadow-md p-7 sm:p-10 md:p-12 h-full rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <div className="mb-6 sm:mb-8 h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-foreground/5 flex items-center justify-center">
                <service.icon className="h-7 w-7 text-foreground/80" strokeWidth={1.2} />
              </div>
              <h3 className="mb-3 text-lg font-semibold">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {service.description}
              </p>
              <p className="mt-auto pt-6 text-xs text-muted-foreground/70 uppercase tracking-wider font-medium">
                {service.detail}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
      <BlurFade delay={0.3}>
        <div className="mt-16 flex flex-col gap-4 sm:flex-row justify-center items-center">
          <MagneticButton
            href="/simulateur"
            className="btn-pill bg-foreground text-background glow-pulse inline-block px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em]"
          >
            Simuler mon projet
          </MagneticButton>
          <MagneticButton
            href="tel:+33762111470"
            className="btn-ghost-fill inline-block px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] rounded-full"
          >
            Appeler directement
          </MagneticButton>
        </div>
      </BlurFade>
    </div>
  </section>
);

export default Services;
