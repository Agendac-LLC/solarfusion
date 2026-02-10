import AnimatedSection from "./AnimatedSection";
import ParallaxBackground from "./ParallaxBackground";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";
import installImage from "@/assets/install-chalet-savoie.png";

const PHONE = "+33 7 62 11 14 70";
const PHONE_LINK = "tel:+33762111470";
const EMAIL = "sebastien@solarfusion.fr";
const WHATSAPP_LINK = `https://wa.me/33762111470?text=${encodeURIComponent("Bonjour, je souhaite discuter d'un projet solaire.")}`;

const contactMethods = [
  {
    icon: Phone,
    label: "Téléphone",
    value: PHONE,
    href: PHONE_LINK,
    description: "Lun-Mer 9h-18h / Jeu-Ven sur demande",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Envoyez-nous un message",
    href: WHATSAPP_LINK,
    description: "Réponse sous 1h en journée",
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    description: "Réponse sous 24h",
  },
  {
    icon: MapPin,
    label: "Zone d'intervention",
    value: "Savoie & Haute-Savoie",
    description: "Départements 73 et 74. Déplacements possibles en région.",
  },
];

const ContactSection = () => (
  <ParallaxBackground
    image={installImage}
    alt="Installation solaire en Savoie"
    overlayOpacity={0.7}
    blur={2}
  >
    <div id="contact" className="section-padding">
      <div className="mx-auto max-w-4xl">
        <AnimatedSection>
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-primary-foreground/60 font-medium">
            Contact
          </p>
          <h2 className="mb-4 text-3xl font-bold md:text-5xl text-primary-foreground">
            On en discute ?
          </h2>
          <p className="mb-16 text-primary-foreground/75 text-sm max-w-xl">
            Appelez, écrivez ou passez par WhatsApp. Sébastien ou son fils vous répond directement.
          </p>
        </AnimatedSection>
        <div className="grid gap-5 sm:grid-cols-2">
          {contactMethods.map((method, i) => (
            <AnimatedSection key={method.label} delay={i * 0.1}>
              {method.href ? (
                <a
                  href={method.href}
                  target={method.external ? "_blank" : undefined}
                  rel={method.external ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-5 p-8 rounded-2xl glass-card group h-full transition-all duration-300"
                >
                  <div className="shrink-0 h-11 w-11 rounded-xl bg-primary-foreground/10 flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors duration-300">
                    <method.icon className="h-5 w-5 text-primary-foreground" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60 font-medium mb-1">
                      {method.label}
                    </p>
                    <p className="text-base font-semibold mb-1 text-primary-foreground">{method.value}</p>
                    <p className="text-sm text-primary-foreground/60">{method.description}</p>
                  </div>
                </a>
              ) : (
                <div className="flex items-start gap-5 p-8 rounded-2xl glass-card h-full">
                  <div className="shrink-0 h-11 w-11 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                    <method.icon className="h-5 w-5 text-primary-foreground" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60 font-medium mb-1">
                      {method.label}
                    </p>
                    <p className="text-base font-semibold mb-1 text-primary-foreground">{method.value}</p>
                    <p className="text-sm text-primary-foreground/60">{method.description}</p>
                  </div>
                </div>
              )}
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </ParallaxBackground>
);

export default ContactSection;
