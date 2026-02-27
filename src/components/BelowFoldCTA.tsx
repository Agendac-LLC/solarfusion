import BlurFade from "./BlurFade";
import TextReveal from "./TextReveal";
import MagneticButton from "./MagneticButton";
import FloatingShapes from "./FloatingShapes";
import ParallaxBackground from "./ParallaxBackground";
import { memo } from "react";
import fermeImage from "@/assets/panneaux-solaires-batiment-professionnel-savoie.webp";

interface BelowFoldCTAProps {
  variant?: "simulator" | "contact";
}

const BelowFoldCTA = memo(({ variant = "simulator" }: BelowFoldCTAProps) => {
  if (variant === "contact") {
    return (
      <section className="section-padding bg-background relative" aria-label="Appel à l'action contact">
        <FloatingShapes variant="light" />
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <BlurFade>
            <TextReveal
              text="Votre toiture peut faire mieux."
              className="mb-4 text-3xl font-medium md:text-5xl font-heading"
              as="p"
            />
            <p className="mb-8 text-muted-foreground text-sm max-w-xl mx-auto">
              Parlez-nous de vos factures, de vos besoins, de vos doutes. On vous conseille sans engagement, et on vous donne une estimation claire.
            </p>
            <MagneticButton
              href="#contact"
              className="btn-pill bg-foreground text-background glow-pulse inline-block px-12 py-5 text-xs font-semibold uppercase tracking-[0.2em]"
            >
              Nous contacter
            </MagneticButton>
          </BlurFade>
        </div>
      </section>
    );
  }

  return (
    <ParallaxBackground
      image={fermeImage}
      alt="Installation solaire sur ferme alpine en France"
      overlayOpacity={0.55}
      blur={2}
    >
      <FloatingShapes variant="dark" />
      <div className="section-padding">
        <div className="mx-auto max-w-4xl text-center">
          <BlurFade>
            <TextReveal
              text="Votre toit peut générer des économies."
              className="text-2xl font-medium md:text-4xl text-primary-foreground mb-6 font-heading"
              variant="light"
              as="p"
            />
            <p className="mb-10 text-primary-foreground/70 text-sm">
              Testez le simulateur : découvrez combien vous pourriez économiser, sans engagement, en moins de 2 minutes.
            </p>
            <MagneticButton
              href="/simulateur"
              className="btn-pill bg-primary-foreground text-primary glow-pulse inline-block px-12 py-5 text-xs font-semibold uppercase tracking-[0.2em]"
            >
              Simuler mes économies
            </MagneticButton>
          </BlurFade>
        </div>
      </div>
    </ParallaxBackground>
  );
});

BelowFoldCTA.displayName = "BelowFoldCTA";

export default BelowFoldCTA;
