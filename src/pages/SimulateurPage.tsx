import { motion } from "framer-motion";
import { Sun } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const SimulateurPage = () => (
  <>
    {/* Minimal hero */}
    <section className="pt-28 pb-8 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mb-3 text-xs uppercase tracking-[0.4em] text-muted-foreground font-medium"
        >
          Simulateur
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-3xl font-bold md:text-5xl mb-4"
        >
          Estimez vos économies.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="text-muted-foreground text-base max-w-lg mx-auto"
        >
          Découvrez en quelques clics combien vous pourriez économiser grâce à l'autoconsommation solaire.
        </motion.p>
      </div>
    </section>

    {/* Simulator container */}
    <section className="px-6 pb-28 pt-8">
      <div className="mx-auto max-w-3xl">
        <AnimatedSection delay={0.3}>
          <div className="section-alt rounded-3xl p-12 md:p-20" style={{ boxShadow: "var(--shadow-soft)" }}>
            <div className="flex flex-col items-center justify-center space-y-5">
              <div className="h-14 w-14 rounded-2xl bg-background flex items-center justify-center" style={{ boxShadow: "var(--shadow-soft)" }}>
                <Sun className="h-6 w-6 text-muted-foreground" strokeWidth={1.2} />
              </div>
              <p className="text-muted-foreground text-xs uppercase tracking-[0.3em] font-medium">
                Simulateur Reonic
              </p>
              <p className="text-muted-foreground text-sm max-w-md leading-relaxed text-center">
                L'intégration du simulateur Reonic sera disponible ici. Connectez votre compte Reonic pour activer le calculateur.
              </p>
              <a
                href="https://www.reonic.de"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill bg-foreground text-background mt-4 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em]"
              >
                En savoir plus
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default SimulateurPage;
