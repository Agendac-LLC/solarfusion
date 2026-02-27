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
          text="Une entreprise. Une famille. Une exigence"
            className="mb-8 text-2xl sm:text-3xl font-medium md:text-5xl leading-snug sm:leading-[1.1] font-heading"
          as="p"
        />
      </BlurFade>

      <BlurFade delay={0.2}>
        <div className="max-w-2xl space-y-5 text-muted-foreground leading-relaxed">
          <p>
            Solar Fusion est une entreprise familiale spécialisée dans la conception et l’installation de solutions photovoltaïques performantes.
          </p>
          <p>
            Nous privilégions des projets maîtrisés, étudiés avec précision et réalisés avec rigueur.
          </p>
          <p>
            Depuis 2009, l'un des dirigeants évolue dans le secteur du photovoltaïque avec une conviction claire : une installation solaire doit être fiable, cohérente et rentable dans le temps.
          </p>
          <p>
            C’est sur cette exigence qu’est née Solar Fusion.
          </p>
          <p>
            Pas de sous-traitance en cascade. Nous engageons notre nom sur chaque projet.
          </p>
        </div>
      </BlurFade>
    </div>
  </section>
);

export default FamilyStory;
