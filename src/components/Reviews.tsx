import BlurFade from "./BlurFade";
import TextReveal from "./TextReveal";
import TiltCard from "./TiltCard";
import StaggerChildren, { StaggerItem } from "./StaggerChildren";
import ParallaxBackground from "./ParallaxBackground";
import FloatingShapes from "./FloatingShapes";
import { Star, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { memo } from "react";
import maisonPierreImage from "@/assets/installation-photovoltaique-entreprise-france.webp";

const reviews = [];

const socials = [
  { name: "Google", url: "https://www.google.com/maps/place/Solar+Fusion" },
  { name: "Instagram", url: "https://www.instagram.com/solarfusion73" },
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
          <h2 className="sr-only">Avis clients Solar Fusion - installations solaires en France</h2>
          <TextReveal
            text="Ils ont sauté le pas."
            className="mb-20 text-3xl font-medium md:text-5xl text-primary-foreground font-heading"
            variant="light"
            as="p"
          />
        </BlurFade>
        {/* Aucun avis affiché, uniquement Google ou rien */}
        <BlurFade delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {socials.map((s, i) => (
              <motion.a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300 rounded-full"
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
