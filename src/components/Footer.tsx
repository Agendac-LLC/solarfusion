import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, FileText } from "lucide-react";
import MagneticButton from "./MagneticButton";
import StaggerChildren, { StaggerItem } from "./StaggerChildren";
import BlurFade from "./BlurFade";
import { AnimatedLine } from "./AnimatedSection";
import logoIcon from "@/assets/logo-icon.png";

const Footer = () => (
  <footer className="bg-foreground text-background" role="contentinfo" itemScope itemType="https://schema.org/LocalBusiness">
    <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16 md:px-12">
      <StaggerChildren className="grid gap-10 sm:gap-12 md:grid-cols-3" stagger={0.12}>
        {/* Company */}
        <StaggerItem direction="up">
          <div>
            <Link to="/" className="flex items-center gap-2 text-base font-bold tracking-[0.1em] hover:text-background/80 transition-colors duration-200">
              <img src={logoIcon} alt="Solar Fusion logo" className="h-7 w-7 invert brightness-200" />
              SOLAR FUSION
            </Link>
            <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-background/40 font-medium">
              Là où le soleil devient solution.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-background/50 font-light" itemProp="description">
              Installateurs solaires père et fils depuis 2009. Basés à Chambéry, on intervient en Savoie et Haute-Savoie.
            </p>
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
                { to: "/notre-expertise", label: "Notre expertise" },
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
                <span><span itemProp="addressLocality">Chambéry</span>, <span itemProp="addressRegion">Savoie</span> (<span itemProp="postalCode">73</span>)</span>
              </p>
              <p className="text-xs text-background/35 mt-1">
                Intervention en Savoie (73) et Haute-Savoie (74).
              </p>
            </div>
          </div>
        </StaggerItem>
      </StaggerChildren>

      {/* Devis à distance */}
      <AnimatedLine className="mt-12 bg-background/10" delay={0.2} />
      <BlurFade delay={0.3}>
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-background/50">
            Hors Savoie / Haute-Savoie ?
          </p>
          <MagneticButton
            href="mailto:sebastien@solarfusion.fr?subject=Demande%20de%20devis%20%C3%A0%20distance"
            className="inline-flex items-center gap-2 border border-background/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-background/70 hover:bg-background hover:text-foreground transition-all duration-300 rounded-full"
          >
            <FileText className="h-3.5 w-3.5" strokeWidth={1.5} />
            Devis à distance
          </MagneticButton>
        </div>
      </BlurFade>

      <AnimatedLine className="mt-8 bg-background/10" delay={0.4} />
      <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-background/30">
        <p>© {new Date().getFullYear()} Solar Fusion. Tous droits réservés.</p>
        <p>TVA : FR61929522175</p>
      </div>
    </div>
  </footer>
);

export default Footer;
