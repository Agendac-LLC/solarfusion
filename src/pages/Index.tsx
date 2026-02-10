import Hero from "@/components/Hero";
import FamilyStory from "@/components/FamilyStory";
import Reassurance from "@/components/Reassurance";
import Services from "@/components/Services";
import Certifications from "@/components/Certifications";
import Simulator from "@/components/Simulator";
import Reviews from "@/components/Reviews";
import ContactForm from "@/components/ContactForm";

const Index = () => (
  <>
    <Hero />
    <FamilyStory />
    <Reassurance />
    <Services />
    <Certifications />
    <Simulator variant="b2c" />
    <Reviews />
    <ContactForm />
  </>
);

export default Index;
