import BlurFade from "./BlurFade";
import TextReveal from "./TextReveal";
import FloatingShapes from "./FloatingShapes";
import TypeformWidget from "@/components/TypeformWidget";
import { CONTACT_TYPEFORM_FORM_ID, CONTACT_TYPEFORM_URL } from "@/lib/typeform";

const ContactForm = () => {
  return (
    <section id="contact-form" className="section-padding relative grain w-full px-4 sm:px-6 md:px-12">
      <FloatingShapes variant="light" />
      <div className="mx-auto max-w-lg w-full relative z-10">
        <BlurFade>
          <p className="mb-2 text-xs uppercase tracking-[0.4em] text-muted-foreground font-medium text-center">
            Contact
          </p>
          <TextReveal
            text="Contactez-nous."
            className="mb-2 text-3xl font-medium md:text-4xl text-center text-foreground font-heading"
          />
          <p className="mb-4 text-muted-foreground/80 text-sm text-center font-medium">
            Remplissez ce formulaire rapide, nous vous rappelons pour discuter de votre projet.
          </p>
        </BlurFade>
        <BlurFade delay={0.2}>
          <TypeformWidget
            formId={CONTACT_TYPEFORM_FORM_ID}
            formUrl={CONTACT_TYPEFORM_URL}
            title="Prise de contact"
            embedClassName="min-h-[400px]"
          />
        </BlurFade>
      </div>
    </section>
  );
};

export default ContactForm;
