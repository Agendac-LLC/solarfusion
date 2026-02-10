import AnimatedSection from "./AnimatedSection";
import ParallaxBackground from "./ParallaxBackground";
import chaletBoisImage from "@/assets/install-chalet-bois.png";

const stats = [
  {
    value: "15 ans",
    label: "d'expérience",
    description: "Une expertise solide au service de votre transition énergétique.",
  },
  {
    value: "Famille",
    label: "Chaffardon",
    description: "Entreprise familiale dirigée par Sébastien Chaffardon et son fils.",
  },
  {
    value: "0",
    label: "accident à ce jour",
    description: "La sécurité est notre priorité absolue sur chaque chantier.",
  },
];

const Reassurance = () => (
  <ParallaxBackground
    image={chaletBoisImage}
    alt="Installation solaire sur chalet bois en montagne"
    overlayOpacity={0.65}
    blur={2}
  >
    <div className="section-padding">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-primary-foreground/60 font-medium">
            Pourquoi nous choisir
          </p>
          <h2 className="mb-20 text-3xl font-bold md:text-5xl text-primary-foreground">
            La confiance comme fondation.
          </h2>
        </AnimatedSection>
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.15}>
              <div className="backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl p-8">
                <p className="text-4xl font-bold tracking-tight text-primary-foreground">{stat.value}</p>
                <p className="mt-1 text-base font-semibold text-primary-foreground">{stat.label}</p>
                <p className="mt-4 text-primary-foreground/70 leading-relaxed text-sm">
                  {stat.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </ParallaxBackground>
);

export default Reassurance;
