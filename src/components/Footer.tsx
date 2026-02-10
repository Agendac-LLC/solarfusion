import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, FileText } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="mx-auto max-w-7xl px-6 py-16 md:px-12">
      <div className="grid gap-12 md:grid-cols-3">
        {/* Company */}
        <div>
          <Link to="/" className="text-base font-bold tracking-[0.1em] hover:text-background/80 transition-colors duration-200">
            SOLAR FUSION
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-background/50 font-light">
            Installateurs solaires père et fils depuis 2009. Basés à Chambéry, on intervient en Savoie et Haute-Savoie.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-background/40">
            Navigation
          </h4>
          <nav className="flex flex-col gap-3">
            <Link to="/" className="text-sm text-background/60 hover:text-background transition-colors duration-200">
              Accueil
            </Link>
            <Link to="/particuliers" className="text-sm text-background/60 hover:text-background transition-colors duration-200">
              Particuliers
            </Link>
            <Link to="/b2b" className="text-sm text-background/60 hover:text-background transition-colors duration-200">
              Professionnels
            </Link>
            <Link to="/domotique-pac" className="text-sm text-background/60 hover:text-background transition-colors duration-200">
              Domotique & PAC
            </Link>
            <Link to="/notre-expertise" className="text-sm text-background/60 hover:text-background transition-colors duration-200">
              Notre expertise
            </Link>
            <Link to="/simulateur" className="text-sm text-background/60 hover:text-background transition-colors duration-200">
              Simulateur
            </Link>
            <Link to="/mentions-legales" className="text-sm text-background/60 hover:text-background transition-colors duration-200">
              Mentions légales
            </Link>
          </nav>
        </div>

        {/* Contact */}
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
            <p className="flex items-start gap-2 text-sm text-background/60">
              <MapPin className="h-3.5 w-3.5 mt-0.5 shrink-0" strokeWidth={1.5} />
              Chambéry, Savoie (73)
            </p>
            <p className="text-xs text-background/35 mt-1">
              Intervention en Savoie (73) et Haute-Savoie (74).
            </p>
          </div>
        </div>
      </div>

      {/* Devis à distance */}
      <div className="mt-12 border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-background/50">
          Hors Savoie / Haute-Savoie ?
        </p>
        <a
          href="mailto:sebastien@solarfusion.fr?subject=Demande%20de%20devis%20%C3%A0%20distance"
          className="inline-flex items-center gap-2 border border-background/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-background/70 hover:bg-background hover:text-foreground transition-all duration-300"
          style={{ borderRadius: "9999px" }}
        >
          <FileText className="h-3.5 w-3.5" strokeWidth={1.5} />
          Devis à distance
        </a>
      </div>

      <div className="mt-8 border-t border-background/10 pt-8 text-center text-xs text-background/30">
        © {new Date().getFullYear()} Solar Fusion. Tous droits réservés.
      </div>
    </div>
  </footer>
);

export default Footer;
