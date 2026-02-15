import BlurFade from "./BlurFade";
import TextReveal from "./TextReveal";
import FloatingShapes from "./FloatingShapes";

const FamilyStory = () => (
  <section className="section-padding relative" aria-label="Qui sommes-nous, entreprise familiale solaire Chambéry">
    <FloatingShapes variant="light" />
    <div className="mx-auto max-w-6xl relative z-10">
      <BlurFade>
        <p className="mb-3 text-xs uppercase tracking-[0.4em] text-muted-foreground font-medium">
          Qui sommes-nous
        </p>
        <h2 className="sr-only">Qui sommes-nous - Installateurs solaires père et fils à Chambéry</h2>
        <TextReveal
          text="Votre projet, notre famille."
          className="mb-8 text-3xl font-bold md:text-5xl leading-[1.1]"
          as="p"
        />
      </BlurFade>

      <BlurFade delay={0.2}>
        <div className="max-w-2xl space-y-5 text-muted-foreground leading-relaxed">
          <p>
            Vous cherchez un installateur qui ne disparaît pas après la pose ? Ici, c'est Sébastien et son fils qui vous accompagnent, du premier appel à la mise en service. Pas de commerciaux, pas de sous-traitance.
          </p>
          <p>
            On connaît les toits de Savoie, on sait ce qui marche et ce qui ne marche pas. Notre priorité : votre sécurité, votre rentabilité, votre tranquillité. Zéro accident, zéro chantier bâclé.
          </p>
        </div>
      </BlurFade>
    </div>
  </section>
);

export default FamilyStory;
