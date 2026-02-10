import Hero from "@/components/Hero";
import FamilyStory from "@/components/FamilyStory";
import Reassurance from "@/components/Reassurance";
import Services from "@/components/Services";
import Certifications from "@/components/Certifications";
import Simulator from "@/components/Simulator";
import Reviews from "@/components/Reviews";
import ContactForm from "@/components/ContactForm";
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxBackground from "@/components/ParallaxBackground";
import fermeImage from "@/assets/install-ferme-alpine.png";

const Index = () => (
  <>
    <Hero />
    <FamilyStory />
    <Reassurance />
    <Services />
    {/* CTA after services */}
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
              Découvrez combien vous pourriez économiser chaque année.
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
    <ContactForm />
  </>
);

export default Index;
