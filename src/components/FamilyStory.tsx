import AnimatedSection from "./AnimatedSection";
import ParallaxBackground from "./ParallaxBackground";
import chaletImage from "@/assets/install-chalet-savoie.png";

const FamilyStory = () => (
  <ParallaxBackground
    image={chaletImage}
    alt="Installation solaire sur chalet en Savoie avec vue sur les Alpes"
    overlayOpacity={0.6}
    blur={1}
  >
    <div className="section-padding">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-20 md:grid-cols-2 items-start">
          <AnimatedSection direction="left">
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-primary-foreground/60 font-medium">
              L'esprit de famille
            </p>
            <h2 className="mb-8 text-3xl font-bold md:text-5xl leading-[1.1] text-primary-foreground">
              Une expertise
              <br />
              transmise.
            </h2>
            <div className="space-y-5 text-primary-foreground/75 leading-relaxed">
              <p>
                Depuis <strong className="text-primary-foreground font-semibold">15 ans</strong>, Sébastien Chaffardon bâtit Solar Fusion avec rigueur et passion. Aujourd'hui rejoint par son fils, l'entreprise familiale incarne un savoir-faire qui se transmet de génération en génération.
              </p>
              <p>
                Notre approche est simple : chaque installation est réalisée comme si c'était pour notre propre maison. Cette exigence se reflète dans notre bilan sécurité irréprochable et la satisfaction de nos clients.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <div className="space-y-6">
              {[
                { value: "15+", label: "Années d'expertise", sub: "en autoconsommation solaire" },
                { value: "0", label: "Accident à ce jour", sub: "la sécurité avant tout" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-8 rounded-2xl backdrop-blur-md bg-white/10 border border-white/10"
                >
                  <p className="text-4xl font-bold tracking-tight md:text-5xl text-primary-foreground">{stat.value}</p>
                  <p className="mt-2 text-base font-semibold text-primary-foreground">{stat.label}</p>
                  <p className="mt-1 text-sm text-primary-foreground/60">{stat.sub}</p>
                </div>
              ))}
              <div className="p-6 text-center rounded-2xl backdrop-blur-md bg-white/15 border border-white/10">
                <p className="text-xs uppercase tracking-[0.3em] text-primary-foreground/60 font-medium">
                  Couverture complète
                </p>
                <p className="mt-1 text-base font-semibold text-primary-foreground">
                  Garantie Décennale Française
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  </ParallaxBackground>
);

export default FamilyStory;
