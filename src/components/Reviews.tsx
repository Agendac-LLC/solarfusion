import AnimatedSection from "./AnimatedSection";
import { Star, ExternalLink } from "lucide-react";

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
        <p className="mb-2 text-sm uppercase tracking-[0.3em] text-muted-foreground">
          Avis clients
        </p>
        <h2 className="mb-16 text-3xl font-semibold md:text-5xl">
          Ils nous font confiance.
        </h2>
      </AnimatedSection>
      <div className="grid gap-px bg-border md:grid-cols-3 mb-16">
        {reviews.map((review, i) => (
          <AnimatedSection key={review.name} delay={i * 0.1}>
            <div className="bg-background p-10 h-full flex flex-col">
              <div className="mb-4 flex gap-1">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-foreground text-foreground" />
                ))}
              </div>
              <p className="mb-6 flex-1 text-muted-foreground leading-relaxed italic">
                "{review.text}"
              </p>
              <p className="text-sm font-medium">{review.name}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
      <AnimatedSection>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-border px-6 py-3 text-sm uppercase tracking-widest transition-colors hover:bg-foreground hover:text-background"
            >
              {s.name}
              <ExternalLink className="h-3 w-3" />
            </a>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default Reviews;
