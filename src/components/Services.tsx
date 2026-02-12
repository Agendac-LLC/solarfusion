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
  <section className="section-padding section-alt-deep relative grain">
    <FloatingShapes variant="light" />
    <div className="mx-auto max-w-6xl relative z-10">
      <BlurFade>
        <p className="mb-3 text-xs uppercase tracking-[0.4em] text-muted-foreground font-medium">
          Ce qu'on fait
        </p>
        <TextReveal
          text="Quatre métiers, une équipe."
          className="mb-4 text-3xl font-bold md:text-5xl"
        />
        <p className="mb-20 text-muted-foreground text-base max-w-xl">
          Du panneau solaire à la domotique, on couvre toute la chaîne pour que votre maison produise, stocke et consomme intelligemment.
        </p>
      </BlurFade>
      <StaggerChildren className="grid gap-6 md:grid-cols-2" stagger={0.1}>
        {services.map((service) => (
          <StaggerItem key={service.title} direction="scale">
            <TiltCard className="rounded-2xl h-full depth-layer" tiltMax={6}>
              <div className="flex flex-col glass-card-light embossed p-10 md:p-12 h-full group cursor-default rounded-2xl">
                <div className="mb-8 h-14 w-14 rounded-2xl bg-foreground/5 flex items-center justify-center group-hover:bg-foreground/10 transition-colors duration-300">
                  <service.icon className="h-7 w-7 text-foreground/80 group-hover:text-foreground transition-colors duration-300" strokeWidth={1.2} />
                </div>
                <h3 className="mb-3 text-lg font-semibold">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {service.description}
                </p>
                <p className="mt-auto pt-6 text-xs text-muted-foreground/70 uppercase tracking-wider font-medium">
                  {service.detail}
                </p>
              </div>
            </TiltCard>
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
            Être rappelé gratuitement
          </MagneticButton>
        </div>
      </BlurFade>
    </div>
  </section>
);

export default Services;
