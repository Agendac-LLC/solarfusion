import { useEffect, useRef, useState } from "react";
import BlurFade from "./BlurFade";
import TextReveal from "./TextReveal";
import FloatingShapes from "./FloatingShapes";

const TYPEFORM_ID = "01KH9FQCC8R8ACRSMMZFD8N2HV";

const ContactForm = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear container
    containerRef.current.innerHTML = "";

    // Create widget div
    const tfDiv = document.createElement("div");
    tfDiv.setAttribute("data-tf-live", TYPEFORM_ID);
    containerRef.current.appendChild(tfDiv);

    // Remove any existing Typeform script to force fresh load
    document.querySelectorAll('script[src*="embed.typeform.com"]').forEach((s) => s.remove());

    // Also clean up Typeform's global state if it exists
    if ((window as any).tf) {
      try {
        (window as any).tf = undefined;
      } catch {
        // ignore
      }
    }

    // Load script
    const script = document.createElement("script");
    script.src = "https://embed.typeform.com/next/embed.js";
    script.async = true;
    script.onload = () => {
      // Typeform auto-initializes on script load
    };
    script.onerror = () => {
      // Retry once after a short delay
      setTimeout(() => setKey((k) => k + 1), 2000);
    };
    document.body.appendChild(script);

    return () => {
      // Cleanup on unmount
      document.querySelectorAll('script[src*="embed.typeform.com"]').forEach((s) => s.remove());
    };
  }, [key]);

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
          <div ref={containerRef} className="min-h-[400px]" />
        </BlurFade>
      </div>
    </section>
  );
};

export default ContactForm;
