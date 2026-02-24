import { useEffect, useRef, useState } from "react";
import BlurFade from "./BlurFade";
import TextReveal from "./TextReveal";
import ParallaxBackground from "./ParallaxBackground";
import FloatingShapes from "./FloatingShapes";
import { Phone, Mail, MessageCircle, MapPin, Copy, Check } from "lucide-react";
import { toast } from "sonner";
import installImage from "@/assets/install-chalet-savoie.webp";

const PHONE_LINK = "tel:+33762111470";
const EMAIL = "sebastien@solarfusion.fr";
const WHATSAPP_LINK = `https://wa.me/33762111470?text=${encodeURIComponent("Bonjour, je souhaite discuter d'un projet solaire.")}`;
const TYPEFORM_ID = "01KH9FQCC8R8ACRSMMZFD8N2HV";

const contactIcons = [
  {
    icon: Phone,
    label: "Appeler",
    href: PHONE_LINK,
  },
  {
    icon: Mail,
    label: "Envoyer un email",
    action: "copy-email",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: WHATSAPP_LINK,
    external: true,
  },
];

const ContactSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [key, setKey] = useState(0);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setEmailCopied(true);
      toast.success("Email copié !", {
        description: EMAIL,
        duration: 3000,
      });
      // Also try mailto as fallback (might work if client is configured)
      window.location.href = `mailto:${EMAIL}`;
      setTimeout(() => setEmailCopied(false), 2500);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = EMAIL;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setEmailCopied(true);
      toast.success("Email copié !", {
        description: EMAIL,
        duration: 3000,
      });
      setTimeout(() => setEmailCopied(false), 2500);
    }
  };

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = "";

    const tfDiv = document.createElement("div");
    tfDiv.setAttribute("data-tf-live", TYPEFORM_ID);
    containerRef.current.appendChild(tfDiv);

    document.querySelectorAll('script[src*="embed.typeform.com"]').forEach((s) => s.remove());
    if ((window as any).tf) {
      try { (window as any).tf = undefined; } catch { /* ignore */ }
    }

    const script = document.createElement("script");
    script.src = "https://embed.typeform.com/next/embed.js";
    script.async = true;
    script.onerror = () => {
      setTimeout(() => setKey((k) => k + 1), 2000);
    };
    document.body.appendChild(script);

    return () => {
      document.querySelectorAll('script[src*="embed.typeform.com"]').forEach((s) => s.remove());
    };
  }, [key]);

  return (
    <ParallaxBackground
      image={installImage}
      alt="Installation solaire en France"
      overlayOpacity={0.7}
      blur={2}
    >
      <FloatingShapes variant="dark" />
      <div id="contact" className="section-padding">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            {/* Left: Contact info */}
            <div>
              <BlurFade blur={12}>
                <p className="mb-3 text-xs uppercase tracking-[0.4em] text-primary-foreground/60 font-medium">
                  Contact
                </p>
                <TextReveal
                  text="Parler à ceux qui font."
                  className="mb-4 text-xl sm:text-2xl md:text-3xl font-bold lg:text-5xl text-primary-foreground"
                  variant="light"
                />
                <p className="mb-8 text-primary-foreground/75 text-sm max-w-md">
                  Directement avec l'équipe qui conçoit et réalise votre installation.
                </p>
              </BlurFade>

              {/* Zone d'intervention - glass card */}
              <BlurFade delay={0.15}>
                <div className="glass-card rounded-2xl p-5 sm:p-6 mb-8 max-w-xs">
                  <div className="flex items-center gap-3 mb-1">
                    <MapPin className="h-5 w-5 text-primary-foreground shrink-0" strokeWidth={1.5} />
                    <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60 font-medium">
                      Zone d'intervention
                    </p>
                  </div>
                  <p className="text-lg font-bold text-primary-foreground ml-8">
                    Toute la France
                  </p>
                </div>
              </BlurFade>

              {/* Contact icon buttons */}
              <BlurFade delay={0.25}>
                <div className="flex gap-4">
                  {contactIcons.map((item) =>
                    item.action === "copy-email" ? (
                      <button
                        key={item.label}
                        onClick={handleEmailClick}
                        aria-label={item.label}
                        className="h-14 w-14 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center hover:bg-primary-foreground/25 transition-all duration-300 hover:scale-110 cursor-pointer"
                      >
                        {emailCopied ? (
                          <Check className="h-6 w-6 text-green-400" strokeWidth={1.5} />
                        ) : (
                          <item.icon className="h-6 w-6 text-primary-foreground" strokeWidth={1.5} />
                        )}
                      </button>
                    ) : (
                      <a
                        key={item.label}
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        aria-label={item.label}
                        className="h-14 w-14 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center hover:bg-primary-foreground/25 transition-all duration-300 hover:scale-110"
                      >
                        <item.icon className="h-6 w-6 text-primary-foreground" strokeWidth={1.5} />
                      </a>
                    )
                  )}
                </div>
              </BlurFade>
            </div>

            {/* Right: Contact form */}
            <div>
              <BlurFade delay={0.2}>
                <div className="rounded-2xl bg-background/95 backdrop-blur-md p-4 sm:p-6 shadow-2xl">
                  <div ref={containerRef} className="min-h-[350px]" />
                </div>
              </BlurFade>
            </div>
          </div>
        </div>
      </div>
    </ParallaxBackground>
  );
};

export default ContactSection;
