import BlurFade from "./BlurFade";
import TextReveal from "./TextReveal";
import TiltCard from "./TiltCard";
import StaggerChildren, { StaggerItem } from "./StaggerChildren";
import ParallaxBackground from "./ParallaxBackground";
import FloatingShapes from "./FloatingShapes";
import { Star, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { memo } from "react";
import maisonPierreImage from "@/assets/install-maison-pierre.webp";

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
  { name: "Google", url: "https://www.google.com/maps/place/Solar+Fusion" },
  { name: "Facebook", url: "https://www.facebook.com/sebastien.chaffardon/?locale=fr_FR" },
  { name: "Instagram", url: "https://www.instagram.com/solarfusion73" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/s%C3%A9bastien-chaffardon-b50831345/?originalSubdomain=fr" },
];

const Reviews = () => (
  <ParallaxBackground
    image={maisonPierreImage}
    alt="Installation solaire sur maison en pierre"
    overlayOpacity={0.6}
    blur={1}
  >
    <FloatingShapes variant="dark" />
    <div className="section-padding">
      <div className="mx-auto max-w-6xl">
        <BlurFade blur={12}>
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-primary-foreground/60 font-medium">
            Avis clients
          </p>
          <h2 className="sr-only">Avis clients Solar Fusion - installations solaires en Savoie</h2>
          <TextReveal
            text="Ce qu'ils en disent."
            className="mb-20 text-3xl font-bold md:text-5xl text-primary-foreground"
            variant="light"
            as="p"
          />
        </BlurFade>
        <StaggerChildren className="grid gap-6 md:grid-cols-3 mb-20" stagger={0.12}>
          {reviews.map((review) => (
            <StaggerItem key={review.name} direction="scale">
              <TiltCard className="rounded-2xl h-full" tiltMax={5} glare>
                <div className="glass-card p-8 h-full flex flex-col rounded-2xl">
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
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerChildren>
        <BlurFade delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {socials.map((s, i) => (
              <motion.a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300 rounded-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                whileHover={{ scale: 1.05, y: -3 }}
              >
                {s.name}
                <ArrowUpRight className="h-3 w-3" />
              </motion.a>
            ))}
          </div>
        </BlurFade>
      </div>
    </div>
  </ParallaxBackground>
);

export default Reviews;
