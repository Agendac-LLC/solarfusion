import AnimatedSection from "@/components/AnimatedSection";

const MentionsLegales = () => (
  <div className="pt-24 section-padding">
    <div className="mx-auto max-w-3xl">
      <AnimatedSection>
        <h1 className="mb-12 text-3xl font-semibold md:text-5xl">Mentions légales</h1>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">Éditeur du site</h2>
            <p>
              Solar Fusion - Entreprise familiale spécialisée dans l'installation de panneaux photovoltaïques.
              <br />
              Dirigée par Sébastien Chaffardon et son fils.
              <br />
              Siège social : Chambéry, Savoie (73), France.
              <br />
              Téléphone : +33 7 62 11 14 70
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">Zone d'intervention</h2>
            <p>
              Départements de la Savoie (73) et de la Haute-Savoie (74). Déplacements possibles dans l'ensemble de la région Auvergne-Rhône-Alpes.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">Protection des données (RGPD)</h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD), les données personnelles collectées via ce site sont utilisées uniquement dans le cadre de la relation commerciale avec Solar Fusion.
            </p>
            <p className="mt-2">
              Vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ce droit, contactez-nous à l'adresse : contact@solarfusion.fr
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">Certifications</h2>
            <p>QualiPV 36K - Partenaire Hitachi - Garantie décennale française.</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">Hébergement</h2>
            <p>Ce site est hébergé par Lovable.</p>
          </section>
        </div>
      </AnimatedSection>
    </div>
  </div>
);

export default MentionsLegales;
