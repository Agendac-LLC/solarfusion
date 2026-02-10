import Hero from "@/components/Hero";
import FamilyStory from "@/components/FamilyStory";
import Reassurance from "@/components/Reassurance";
import Services from "@/components/Services";
import Certifications from "@/components/Certifications";
import Simulator from "@/components/Simulator";
import Reviews from "@/components/Reviews";
import ContactSection from "@/components/ContactSection";
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxBackground from "@/components/ParallaxBackground";
import fermeImage from "@/assets/install-ferme-alpine.png";

const Index = () => (
  <>
    <Hero />
    <FamilyStory />
    <Reassurance />
    <Services />
    <ParallaxBackground
      image={fermeImage}
      alt="Installation solaire sur ferme alpine en Savoie"
      overlayOpacity={0.55}
      blur={2}
    >
      <div className="section-padding">
        <div className="mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <p className="mb-4 text-primary-foreground/70 text-sm">
              Gratuit, sans engagement, résultat en 2 minutes.
            </p>
            <a
              href="#simulateur"
              className="btn-pill bg-primary-foreground text-primary inline-block px-12 py-5 text-xs font-semibold uppercase tracking-[0.2em]"
            >
              Simuler mes économies
            </a>
          </AnimatedSection>
        </div>
      </div>
    </ParallaxBackground>
    <Certifications />
    <Simulator variant="b2c" />
    <Reviews />
    <section className="section-padding bg-background">
      <div className="mx-auto max-w-4xl text-center">
        <AnimatedSection>
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">
            On en parle ?
          </h2>
          <p className="mb-8 text-muted-foreground text-sm max-w-xl mx-auto">
            Appelez-nous ou remplissez le formulaire. On vous rappelle pour discuter de votre toiture.
          </p>
          <a
            href="#contact"
            className="btn-pill bg-foreground text-background inline-block px-12 py-5 text-xs font-semibold uppercase tracking-[0.2em]"
          >
            Nous contacter
          </a>
        </AnimatedSection>
      </div>
    </section>
    <ContactSection />
  </>
);

export default Index;
