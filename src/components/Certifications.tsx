import AnimatedSection from "./AnimatedSection";
import ParallaxBackground from "./ParallaxBackground";
import maisonPierreImage from "@/assets/install-maison-pierre.png";

const certs = [
  {
    title: "QualiPV 36K",
    subtitle: "Certification RGE",
    description: "Garantissant la qualité de nos installations photovoltaïques conformément aux normes en vigueur.",
  },
  {
    title: "Partenaire Hitachi",
    subtitle: "Partenariat officiel",
    description: "Solutions de climatisation et pompes à chaleur de haute performance.",
  },
  {
    title: "Garantie Décennale",
    subtitle: "Couverture française",
    description: "Tranquillité d'esprit totale avec une couverture décennale sur chaque installation.",
  },
];

const Certifications = () => (
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
            Certifications
          </p>
          <h2 className="mb-20 text-3xl font-bold md:text-5xl text-primary-foreground">
            Certifié. Garanti. Fiable.
          </h2>
        </AnimatedSection>
        <div className="grid gap-6 md:grid-cols-3">
          {certs.map((cert, i) => (
            <AnimatedSection key={cert.title} delay={i * 0.12}>
              <div className="backdrop-blur-md bg-white/10 border border-white/10 p-10 rounded-2xl h-full">
                <p className="text-xs uppercase tracking-[0.3em] text-primary-foreground/60 font-medium mb-4">
                  {cert.subtitle}
                </p>
                <h3 className="mb-4 text-xl font-bold text-primary-foreground">{cert.title}</h3>
                <p className="text-primary-foreground/70 leading-relaxed text-sm">{cert.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </ParallaxBackground>
);

export default Certifications;
