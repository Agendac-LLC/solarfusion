import { useEffect, useRef, useCallback } from "react";
import BlurFade from "./BlurFade";
import TextReveal from "./TextReveal";
import FloatingShapes from "./FloatingShapes";

const ContactForm = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const loadTypeform = useCallback(() => {
    if (!containerRef.current) return;

    // Clean previous instances
    containerRef.current.innerHTML = '';

    // Create the widget div
    const tfDiv = document.createElement('div');
    tfDiv.setAttribute('data-tf-live', '01KH9FQCC8R8ACRSMMZFD8N2HV');
    containerRef.current.appendChild(tfDiv);

    // Remove old script to force re-execution
    const oldScript = document.querySelector('script[src*="embed.typeform.com"]');
    if (oldScript) oldScript.remove();

    // Load fresh script
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    loadTypeform();
  }, [loadTypeform]);

  return (
    <section id="contact-form" className="section-padding relative grain">
      <FloatingShapes variant="light" />
      <div className="mx-auto max-w-lg relative z-10">
        <BlurFade>
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-muted-foreground font-medium text-center">
            Contact
          </p>
          <TextReveal
            text="Contactez-nous."
            className="mb-4 text-3xl font-bold md:text-4xl text-center text-foreground"
          />
          <p className="mb-10 text-muted-foreground/80 text-sm text-center font-medium">
            Remplissez ce formulaire rapide, nous vous rappelons pour discuter de votre projet.
          </p>
        </BlurFade>
        <BlurFade delay={0.2}>
          <div ref={containerRef} className="min-h-[400px]" />
        </BlurFade>
      </div>
    </section>
  );
};

export default ContactForm;
