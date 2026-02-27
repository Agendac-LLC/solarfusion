import BlurFade from "./BlurFade";
import TextReveal from "./TextReveal";
import CountUp from "./CountUp";
import TiltCard from "./TiltCard";
import StaggerChildren, { StaggerItem } from "./StaggerChildren";
import ParallaxBackground from "./ParallaxBackground";
import FloatingShapes from "./FloatingShapes";
import chaletBoisImage from "@/assets/installation-solaire-toiture-particulier-chambery.webp";

const stats = [
  {
    title: "Depuis 2009",
    description: "Une expertise construite sur le terrain, projet après projet.",
  },
  {
    title: "Entreprise familiale",
    description: "Les mêmes visages du premier échange à la mise en service.",
  },
  {
    title: "Certification RGE",
    description: "Respect strict des normes et des exigences réglementaires.",
  },
  {
    title: "Garantie décennale",
    description: "Couverture 10 ans sur chaque installation.",
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
            text="L'énergie nouvelle, le savoir-faire d'artisan."
            className="mb-10 sm:mb-16 md:mb-20 text-3xl font-medium md:text-5xl text-primary-foreground font-heading"
            variant="light"
            as="p"
          />
        </BlurFade>
        <StaggerChildren className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {stats.map((stat) => (
            <StaggerItem key={stat.title} direction="scale">
              <TiltCard className="rounded-2xl h-full" tiltMax={5}>
                <div className="glass-card rounded-2xl p-5 sm:p-8 h-full">
                  <p className="text-xl sm:text-3xl md:text-4xl font-bold tracking-tight text-primary-foreground">
                    {stat.title}
                  </p>
                  <p className="mt-3 sm:mt-5 text-primary-foreground/70 leading-relaxed text-sm sm:text-base">
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
