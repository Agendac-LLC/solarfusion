import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import Simulator from "@/components/Simulator";
import ContactForm from "@/components/ContactForm";
import heroB2b from "@/assets/hero-b2b.jpg";
import { TrendingUp, Zap, BarChart3, Building2 } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Rentabilité rapide",
    description: "Retour sur investissement en 4 à 7 ans selon la taille de votre installation.",
  },
  {
    icon: Zap,
    title: "Réduction des charges",
    description: "Réduisez vos factures d'énergie jusqu'à 70% grâce à l'autoconsommation.",
  },
  {
    icon: BarChart3,
    title: "Valorisation du patrimoine",
    description: "Augmentez la valeur de vos bâtiments avec une installation photovoltaïque.",
  },
  {
    icon: Building2,
    title: "Image RSE",
    description: "Renforcez votre engagement environnemental auprès de vos clients et partenaires.",
  },
];

const B2B = () => (
  <>
    {/* Hero */}
    <section className="relative h-[70vh] w-full overflow-hidden">
      <img
        src={heroB2b}
        alt="Installation solaire professionnelle"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 text-sm uppercase tracking-[0.3em] text-primary-foreground/70"
        >
          Espace Professionnels
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl text-4xl font-semibold leading-tight text-primary-foreground md:text-6xl"
        >
          Optimisez votre
          <br />
          performance énergétique.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 max-w-xl text-lg text-primary-foreground/80"
        >
          Des solutions photovoltaïques dimensionnées pour les besoins des entreprises, collectivités et industriels.
        </motion.p>
      </div>
    </section>

    {/* Benefits */}
    <section className="section-padding">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <p className="mb-2 text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Avantages
          </p>
          <h2 className="mb-16 text-3xl font-semibold md:text-5xl">
            Le solaire, un investissement stratégique.
          </h2>
        </AnimatedSection>
        <div className="grid gap-8 md:grid-cols-2">
          {benefits.map((b, i) => (
            <AnimatedSection key={b.title} delay={i * 0.1}>
              <div className="flex gap-6 border border-border p-8 transition-colors hover:bg-secondary/50">
                <b.icon className="h-8 w-8 shrink-0" strokeWidth={1} />
                <div>
                  <h3 className="mb-2 text-lg font-semibold">{b.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{b.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <Simulator variant="b2b" />
    <ContactForm />
  </>
);

export default B2B;
