import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, FileText } from "lucide-react";
import MagneticButton from "./MagneticButton";
import StaggerChildren, { StaggerItem } from "./StaggerChildren";
import BlurFade from "./BlurFade";
import { AnimatedLine } from "./AnimatedSection";
import logoWhite from "@/assets/logo-solar-fusion-white.png";


function Footer() {
  return (
    <footer className="bg-foreground text-background" role="contentinfo" itemScope itemType="https://schema.org/LocalBusiness">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16 md:px-12">
        <StaggerChildren className="grid gap-10 sm:gap-12 md:grid-cols-3 items-start" stagger={0.12}>
          {/* Logo */}
          <StaggerItem direction="up">
            <div className="flex items-center h-full">
              <Link to="/" className="block hover:opacity-80 transition-opacity duration-200">
                <img src={logoWhite} alt="Solar Fusion" className="h-20 sm:h-24 w-auto" />
              </Link>
            </div>
          </StaggerItem>

          {/* Links */}
          <StaggerItem direction="up">
            <div>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-background/40">
                Navigation
              </h4>
              <nav className="flex flex-col gap-3" aria-label="Plan du site">
                {[
                  { to: "/", label: "Accueil" },
                  { to: "/particuliers", label: "Particuliers" },
                  { to: "/b2b", label: "Professionnels" },
                  { to: "/domotique-pac", label: "Domotique & PAC" },
                  { to: "/simulateur", label: "Simulateur" },
                  { to: "/mentions-legales", label: "Mentions légales" },
                ].map((link) => (
                  <Link key={link.to} to={link.to} className="text-sm text-background/60 hover:text-background transition-colors duration-200">
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </StaggerItem>

          {/* Contact */}
          <StaggerItem direction="up">
            <div>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-background/40">
                Contact
              </h4>
              <div className="flex flex-col gap-3">
                <a href="tel:+33762111470" className="flex items-center gap-2 text-sm text-background/60 hover:text-background transition-colors duration-200">
                  <Phone className="h-3.5 w-3.5" strokeWidth={1.5} /> 07 62 11 14 70
                </a>
                <a href="mailto:sebastien@solarfusion.fr" className="flex items-center gap-2 text-sm text-background/60 hover:text-background transition-colors duration-200">
                  <Mail className="h-3.5 w-3.5" strokeWidth={1.5} /> sebastien@solarfusion.fr
                </a>
                <p className="flex items-start gap-2 text-sm text-background/60" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                  <MapPin className="h-3.5 w-3.5 mt-0.5 shrink-0" strokeWidth={1.5} />
                  <span><span itemProp="addressLocality">Chambéry</span></span>
                </p>
                <p className="text-xs text-background/35 mt-1">
                  Intervention partout en France.
                </p>
              </div>
            </div>
          </StaggerItem>
        </StaggerChildren>

        <BlurFade delay={0.3}>
          <div className="pt-8 flex flex-col items-center gap-3 text-xs sm:text-sm text-background/50">
            <p>© {new Date().getFullYear()} Solar Fusion. Tous droits réservés.</p>
            <p>TVA : FR61929522175</p>
          </div>
        </BlurFade>
      </div>
    </footer>
  );
}

export default Footer;
