import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const FamilyStory = () => (
  <section className="section-padding">
    <div className="mx-auto max-w-6xl">
      <div className="grid gap-16 md:grid-cols-2 items-center">
        <AnimatedSection direction="left">
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-muted-foreground font-medium">
            L'esprit de famille
          </p>
          <h2 className="mb-8 text-3xl font-bold md:text-5xl leading-[1.1]">
            Une expertise
            <br />
            transmise.
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Depuis <strong className="text-foreground font-semibold">15 ans</strong>, Sébastien Chaffardon bâtit Solar Fusion avec rigueur et passion. Aujourd'hui rejoint par son fils, l'entreprise familiale incarne un savoir-faire qui se transmet de génération en génération.
            </p>
            <p>
              Notre approche est simple : chaque installation est réalisée comme si c'était pour notre propre maison. Cette exigence se reflète dans notre bilan sécurité irréprochable et la satisfaction de nos clients.
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection direction="right" delay={0.2}>
          <div className="space-y-6">
            {/* Stat cards */}
            {[
              { value: "15+", label: "Années d'expertise", sub: "en autoconsommation solaire" },
              { value: "0", label: "Accident à ce jour", sub: "la sécurité avant tout" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="border border-border p-8 card-lift"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-4xl font-bold tracking-tight md:text-5xl">{stat.value}</p>
                <p className="mt-2 text-base font-semibold">{stat.label}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.sub}</p>
              </motion.div>
            ))}
            {/* Guarantee banner */}
            <div className="border border-foreground bg-foreground p-6 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-background/60 font-medium">
                Couverture complète
              </p>
              <p className="mt-1 text-base font-semibold text-background">
                Garantie Décennale Française
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default FamilyStory;
