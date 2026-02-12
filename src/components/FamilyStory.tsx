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
          text="Père et fils, installateurs solaires."
          className="mb-8 text-3xl font-bold md:text-5xl leading-[1.1]"
          as="p"
        />
      </BlurFade>

      <BlurFade delay={0.2}>
        <div className="max-w-2xl space-y-5 text-muted-foreground leading-relaxed">
          <p>
            Sébastien Chaffardon installe des panneaux solaires en Savoie depuis <strong className="text-foreground font-semibold">2009</strong>. Son fils l'a rejoint pour continuer le métier. À deux, ils gèrent chaque chantier du dimensionnement à la mise en service.
          </p>
          <p>
            Pas de sous-traitance, pas d'intérimaires. Chaque toit est posé avec le même soin que si c'était le nôtre. Résultat : <strong className="text-foreground font-semibold">zéro accident</strong> en 15 ans de chantiers.
          </p>
        </div>
      </BlurFade>
    </div>
  </section>
);

export default FamilyStory;
