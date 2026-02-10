import AnimatedSection from "./AnimatedSection";
import ParallaxBackground from "./ParallaxBackground";
import { Star, ArrowUpRight } from "lucide-react";
import maisonPierreImage from "@/assets/install-maison-pierre.png";

const reviews = [
  {
    name: "Marie L.",
    text: "Posé en une journée. Propre, carré, rien à redire. On produit plus que prévu.",
    rating: 5,
  },
  {
    name: "Jean-Pierre D.",
    text: "Production conforme aux estimations. Sébastien et son fils connaissent leur métier.",
    rating: 5,
  },
  {
    name: "Sophie M.",
    text: "Suivi du début à la fin. On sent l'entreprise familiale sérieuse. Je recommande.",
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
  <ParallaxBackground
    image={maisonPierreImage}
    alt="Installation solaire sur maison en pierre"
    overlayOpacity={0.6}
    blur={1}
  >
    <div className="section-padding">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-primary-foreground/60 font-medium">
            Avis clients
          </p>
          <h2 className="mb-20 text-3xl font-bold md:text-5xl text-primary-foreground">
            Ce qu'ils en disent.
          </h2>
        </AnimatedSection>
        <div className="grid gap-6 md:grid-cols-3 mb-20">
          {reviews.map((review, i) => (
            <AnimatedSection key={review.name} delay={i * 0.1}>
              <div className="glass-card p-8 h-full flex flex-col rounded-2xl transition-all duration-300">
                <div className="mb-5 flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-primary-foreground text-primary-foreground" />
                  ))}
                </div>
                <p className="mb-6 flex-1 text-primary-foreground/75 leading-relaxed text-sm">
                  « {review.text} »
                </p>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary-foreground">{review.name}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300"
                style={{ borderRadius: "9999px" }}
              >
                {s.name}
                <ArrowUpRight className="h-3 w-3" />
              </a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  </ParallaxBackground>
);

export default Reviews;
