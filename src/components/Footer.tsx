import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-foreground text-background">
    <div className="mx-auto max-w-7xl px-6 py-16 md:px-12">
      <div className="grid gap-12 md:grid-cols-3">
        {/* Company */}
        <div>
          <h3 className="mb-4 text-base font-bold tracking-[0.1em]">SOLAR FUSION</h3>
          <p className="text-sm leading-relaxed text-background/50 font-light">
            Expert en autoconsommation photovoltaïque depuis 15 ans. Entreprise familiale basée à Chambéry.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-background/40">
            Navigation
          </h4>
          <nav className="flex flex-col gap-3">
            <Link to="/" className="text-sm text-background/60 hover:text-background transition-colors duration-300">
              Accueil
            </Link>
            <Link to="/b2b" className="text-sm text-background/60 hover:text-background transition-colors duration-300">
              Professionnels
            </Link>
            <Link to="/mentions-legales" className="text-sm text-background/60 hover:text-background transition-colors duration-300">
              Mentions légales & RGPD
            </Link>
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-background/40">
            Contact
          </h4>
          <div className="flex flex-col gap-3">
            <a href="tel:+33762111470" className="flex items-center gap-2 text-sm text-background/60 hover:text-background transition-colors duration-300">
              <Phone className="h-3.5 w-3.5" strokeWidth={1.5} /> +33 7 62 11 14 70
            </a>
            <a href="mailto:contact@solarfusion.fr" className="flex items-center gap-2 text-sm text-background/60 hover:text-background transition-colors duration-300">
              <Mail className="h-3.5 w-3.5" strokeWidth={1.5} /> contact@solarfusion.fr
            </a>
            <p className="flex items-start gap-2 text-sm text-background/60">
              <MapPin className="h-3.5 w-3.5 mt-0.5 shrink-0" strokeWidth={1.5} />
              Chambéry, Savoie (73)
            </p>
            <p className="text-xs text-background/35 mt-1">
              Zone d'intervention : départements 73 et 74, déplacements possibles dans toute la région.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-background/10 pt-8 text-center text-xs text-background/30">
        © {new Date().getFullYear()} Solar Fusion. Tous droits réservés.
      </div>
    </div>
  </footer>
);

export default Footer;
