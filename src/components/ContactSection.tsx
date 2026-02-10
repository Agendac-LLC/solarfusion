import AnimatedSection from "./AnimatedSection";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";

const PHONE = "+33 7 62 11 14 70";
const PHONE_LINK = "tel:+33762111470";
const EMAIL = "sebastien@solarfusion.fr";
const WHATSAPP_LINK = `https://wa.me/33762111470?text=${encodeURIComponent("Bonjour, je souhaite en savoir plus sur vos solutions solaires.")}`;

const contactMethods = [
  {
    icon: Phone,
    label: "Téléphone",
    value: PHONE,
    href: PHONE_LINK,
    description: "Du lundi au vendredi, 8h-18h",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Envoyez-nous un message",
    href: WHATSAPP_LINK,
    description: "Réponse rapide garantie",
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
    description: "Départements 73 et 74, déplacements possibles en région",
  },
];

const ContactSection = () => (
  <section id="contact" className="section-padding">
    <div className="mx-auto max-w-4xl">
      <AnimatedSection>
        <p className="mb-3 text-xs uppercase tracking-[0.4em] text-muted-foreground font-medium">
          Contact
        </p>
        <h2 className="mb-4 text-3xl font-bold md:text-5xl">
          Parlons de votre projet.
        </h2>
        <p className="mb-16 text-muted-foreground text-sm max-w-xl">
          Contactez-nous directement par le moyen qui vous convient. Nous vous répondons rapidement.
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
                className="flex items-start gap-5 p-8 rounded-2xl card-lift group h-full"
              >
                <div className="shrink-0 h-11 w-11 rounded-xl bg-foreground/5 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                  <method.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-1">
                    {method.label}
                  </p>
                  <p className="text-base font-semibold mb-1">{method.value}</p>
                  <p className="text-sm text-muted-foreground">{method.description}</p>
                </div>
              </a>
            ) : (
              <div className="flex items-start gap-5 p-8 rounded-2xl h-full" style={{ boxShadow: "var(--shadow-soft)" }}>
                <div className="shrink-0 h-11 w-11 rounded-xl bg-foreground/5 flex items-center justify-center">
                  <method.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-1">
                    {method.label}
                  </p>
                  <p className="text-base font-semibold mb-1">{method.value}</p>
                  <p className="text-sm text-muted-foreground">{method.description}</p>
                </div>
              </div>
            )}
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ContactSection;
