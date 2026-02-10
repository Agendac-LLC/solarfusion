import AnimatedSection from "./AnimatedSection";
import { Star, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Marie L.",
    text: "Travail impeccable, équipe sérieuse et réactive. Installation réalisée en une journée.",
    rating: 5,
  },
  {
    name: "Jean-Pierre D.",
    text: "Très satisfait de l'installation. Production conforme aux estimations. Je recommande.",
    rating: 5,
  },
  {
    name: "Sophie M.",
    text: "Entreprise familiale très professionnelle. Suivi excellent du début à la fin.",
    rating: 5,
  },
];

const socials = [
  { name: "Google", url: "https://google.com" },
  { name: "Facebook", url: "https://facebook.com" },
  { name: "Instagram", url: "https://instagram.com" },
  { name: "LinkedIn", url: "https://linkedin.com" },
];

const Reviews = () => (
  <section className="section-padding">
    <div className="mx-auto max-w-6xl">
      <AnimatedSection>
        <p className="mb-3 text-xs uppercase tracking-[0.4em] text-muted-foreground font-medium">
          Avis clients
        </p>
        <h2 className="mb-16 text-3xl font-bold md:text-5xl">
          Ils nous font confiance.
        </h2>
      </AnimatedSection>
      <div className="grid gap-[1px] bg-border md:grid-cols-3 mb-16">
        {reviews.map((review, i) => (
          <AnimatedSection key={review.name} delay={i * 0.1}>
            <div className="bg-background p-10 h-full flex flex-col">
              <div className="mb-5 flex gap-0.5">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="h-3.5 w-3.5 fill-foreground text-foreground" />
                ))}
              </div>
              <p className="mb-6 flex-1 text-muted-foreground leading-relaxed text-sm">
                « {review.text} »
              </p>
              <p className="text-xs font-semibold uppercase tracking-wider">{review.name}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
      <AnimatedSection>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {socials.map((s) => (
            <motion.a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium flex items-center gap-2 border border-border rounded-sm px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] hover:bg-foreground hover:text-background hover:border-foreground transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              {s.name}
              <ArrowUpRight className="h-3 w-3" />
            </motion.a>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default Reviews;
