import BlurFade from "./BlurFade";
import TextReveal from "./TextReveal";
import CountUp from "./CountUp";
import TiltCard from "./TiltCard";
import StaggerChildren, { StaggerItem } from "./StaggerChildren";
import ParallaxBackground from "./ParallaxBackground";
import FloatingShapes from "./FloatingShapes";
import chaletBoisImage from "@/assets/install-chalet-bois.webp";

const stats = [
  {
    value: 15,
    suffix: " ans",
    label: "d'expérience terrain",
    description: "Installations en Savoie et Haute-Savoie depuis 2009.",
  },
  {
    displayValue: "Père & fils",
    label: "Chaffardon",
    description: "On pose nous-mêmes. Pas de sous-traitance.",
  },
  {
    value: 0,
    suffix: "",
    label: "accident",
    description: "Bilan sécurité parfait sur l'ensemble de nos chantiers.",
  },
  {
    value: 10,
    suffix: " ans",
    label: "garantie décennale",
    description: "Couverture décennale française sur chaque installation.",
  },
];

const Reassurance = () => (
  <ParallaxBackground
    image={chaletBoisImage}
    alt="Installation solaire sur chalet bois en montagne"
    overlayOpacity={0.65}
    blur={2}
  >
    <FloatingShapes variant="dark" />
    <div className="section-padding">
      <div className="mx-auto max-w-6xl">
        <BlurFade blur={12}>
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-primary-foreground/60 font-medium">
            Pourquoi nous
          </p>
          <h2 className="sr-only">Pourquoi choisir Solar Fusion - chiffres clés et garanties</h2>
          <TextReveal
            text="Les faits, pas les promesses."
            className="mb-20 text-3xl font-bold md:text-5xl text-primary-foreground"
            variant="light"
            as="p"
          />
        </BlurFade>
        <StaggerChildren className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {stats.map((stat) => (
            <StaggerItem key={stat.label} direction="scale">
              <TiltCard className="rounded-2xl h-full" tiltMax={5}>
                <div className="glass-card rounded-2xl p-8 h-full">
                  <p className="text-4xl font-bold tracking-tight text-primary-foreground">
                    {stat.displayValue ? stat.displayValue : <CountUp end={stat.value!} suffix={stat.suffix} />}
                  </p>
                  <p className="mt-1 text-base font-semibold text-primary-foreground">{stat.label}</p>
                  <p className="mt-4 text-primary-foreground/70 leading-relaxed text-sm">
                    {stat.description}
                  </p>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </div>
  </ParallaxBackground>
);

export default Reassurance;
