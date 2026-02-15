import BlurFade from "./BlurFade";
import TextReveal from "./TextReveal";
import TiltCard from "./TiltCard";
import MagneticButton from "./MagneticButton";
import StaggerChildren, { StaggerItem } from "./StaggerChildren";
import FloatingShapes from "./FloatingShapes";

const certs = [
  {
    title: "QualiPV 36K",
    subtitle: "Certification RGE",
    description: "Obligatoire pour bénéficier des aides de l'État. Renouvelée tous les 4 ans après audit.",
  },
  {
    title: "Partenaire Hitachi",
    subtitle: "Installateur agréé",
    description: "Accès direct aux gammes pro Hitachi pour les PAC air-air et air-eau.",
  },
  {
    title: "Garantie Décennale",
    subtitle: "Assurance française",
    description: "Votre installation est couverte 10 ans. En cas de problème, on intervient.",
  },
];

const Certifications = () => (
  <section className="section-padding section-alt relative grain" aria-label="Certifications et qualifications solaires">
    <FloatingShapes variant="light" />
    <div className="mx-auto max-w-6xl relative z-10">
      <BlurFade>
        <p className="mb-3 text-xs uppercase tracking-[0.4em] text-muted-foreground font-medium">
          Certifications
        </p>
        <h2 className="sr-only">Certifications et qualifications - QualiPV, Hitachi, garantie décennale</h2>
        <TextReveal
          text="Votre sécurité, notre priorité."
          className="mb-20 text-3xl font-bold md:text-5xl"
          as="p"
        />
      </BlurFade>
      <StaggerChildren className="grid gap-6 md:grid-cols-3" stagger={0.1}>
        {certs.map((cert) => (
          <StaggerItem key={cert.title} direction="scale">
            <TiltCard className="rounded-2xl h-full depth-layer" tiltMax={6}>
              <div className="glass-card-light embossed p-10 rounded-2xl h-full">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-medium mb-4">
                  {cert.subtitle}
                </p>
                <h3 className="mb-4 text-xl font-bold">{cert.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{cert.description}</p>
              </div>
            </TiltCard>
          </StaggerItem>
        ))}
      </StaggerChildren>
      <BlurFade delay={0.3}>
        <div className="mt-16 text-center">
          <MagneticButton
            href="/simulateur"
            className="btn-pill bg-foreground text-background glow-pulse inline-block px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em]"
          >
            Simuler mes économies
          </MagneticButton>
        </div>
      </BlurFade>
    </div>
  </section>
);

export default Certifications;
