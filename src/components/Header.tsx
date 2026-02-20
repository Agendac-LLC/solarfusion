
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoIcon from "@/assets/logo-icon.png";
import logoWhite from "@/assets/logo-solar-fusion-white.png";

const navLinks = [
  { label: "Accueil", to: "/" },
  { label: "Particuliers", to: "/particuliers" },
  { label: "Professionnels", to: "/b2b" },
  { label: "Domotique & PAC", to: "/domotique-pac" },
];

const pagesWithDarkHero = ["/", "/particuliers", "/b2b", "/domotique-pac"];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const hasDarkHero = pagesWithDarkHero.includes(location.pathname);
  const useLight = hasDarkHero && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (to: string, e: React.MouseEvent) => {
    setOpen(false);
    if (to.startsWith("#")) {
      const id = to.replace("#", "");
      if (
        location.pathname === "/" ||
        location.pathname === "/index.html" ||
        location.pathname.endsWith("/solarfusion/") ||
        location.pathname.endsWith("/solarfusion/index.html") ||
        window.location.hash.startsWith("#/")) {
        // On est déjà sur la landing (hash routing ou non)
        e.preventDefault();
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 50);
      } else {
        // Si hash routing (GitHub Pages), modifie window.location.hash
        e.preventDefault();
        if (window.location.hash.startsWith("#/")) {
          window.location.hash = `#/` + (id ? `#${id}` : "");
        } else {
          window.location.href = `${window.location.origin}${window.location.pathname.includes('solarfusion') ? '/solarfusion/' : '/'}#${id}`;
        }
      }
    }
  };

  const textColor = useLight ? "text-primary-foreground" : "text-foreground";
  const textMuted = useLight ? "text-primary-foreground" : "text-foreground";
  const textActive = useLight ? "text-primary-foreground font-semibold" : "text-foreground font-semibold";
  const textShadow = useLight ? "0 1px 3px rgba(0,0,0,0.4)" : "none";

  return (
    <header
      className="fixed top-0 z-40 w-full transition-all duration-500 ease-out"
      style={{
        backgroundColor: scrolled ? "hsl(0 0% 100% / 0.75)" : "transparent",
        boxShadow: scrolled ? "0 1px 24px rgba(0,0,0,0.06)" : "none",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
      }}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className={`flex items-center gap-2 font-bold tracking-[0.1em] transition-colors duration-300 shrink-0 min-w-[120px] ${textColor}`}
          style={{ textShadow }}
        >
             <img
               src={logoWhite}
               alt="Logo Solar Fusion"
               className="h-16 w-auto sm:h-20 sm:w-auto transition-all duration-300"
               style={{ filter: scrolled ? "invert(1)" : "none" }}
             />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-7 h-full flex-nowrap whitespace-nowrap" aria-label="Navigation principale">
          {navLinks.map((link) =>
            link.to.startsWith("/#") ? (
              <a
                key={link.label}
                href={link.to}
                onClick={(e) => handleNavClick(link.to, e)}
                className={`text-xs sm:text-[13px] uppercase tracking-wide font-medium transition-colors duration-300 hover:opacity-80 inline-flex items-center h-full shrink-0 ${textMuted}`}
                style={{ textShadow }}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => {
                  if (location.pathname === link.to) {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                className={`text-xs sm:text-[13px] uppercase tracking-wide transition-colors duration-300 hover:opacity-80 inline-flex items-center h-full shrink-0 ${
                  location.pathname === link.to ? textActive : `${textMuted} font-medium`
                }`}
                style={{ textShadow }}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            to="/simulateur"
            className={`h-10 inline-flex items-center justify-center rounded-full px-4 sm:px-6 text-xs sm:text-[13px] uppercase tracking-wide font-semibold transition-all duration-300 shrink-0 ${
              scrolled
                ? "bg-foreground text-background hover:bg-foreground/90"
                : "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            }`}
          >
            Simuler mon projet
          </Link>
          <a
            href="tel:+33762111470"
            className={`inline-flex items-center gap-2 text-xs sm:text-[13px] font-semibold tracking-wide transition-colors duration-300 shrink-0 ${textColor}`}
            style={{ textShadow }}
          >
            <Phone className="h-4 w-4 shrink-0" strokeWidth={1.5} />
            07 62 11 14 70
          </a>
        </nav>

        {/* Mobile */}
        <div className="flex items-center md:hidden gap-2">
          <a
            href="tel:+33762111470"
            aria-label="Appeler"
            className={`inline-flex items-center justify-center h-11 w-11 transition-colors duration-300 ${textColor}`}
          >
            <Phone className="h-5 w-5" strokeWidth={1.5} />
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className={`inline-flex items-center justify-center h-11 w-11 transition-colors duration-300 border border-border rounded-md bg-background/60 backdrop-blur-sm ${textColor}`}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden glass border-t border-border/50 md:hidden"
          >
            <div className="flex flex-col gap-4 px-4 py-6 sm:px-6 sm:py-8">
              {navLinks.map((link) =>
                link.to.startsWith("/#") ? (
                  <a
                    key={link.label}
                    href={link.to}
                    onClick={(e) => handleNavClick(link.to, e)}
                    className="text-sm uppercase tracking-[0.15em] font-medium text-muted-foreground py-2"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={`text-sm uppercase tracking-[0.15em] font-medium py-2 ${
                      location.pathname === link.to ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Link
                to="/simulateur"
                onClick={() => setOpen(false)}
                className="btn-pill bg-foreground text-background text-center py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] mt-2"
              >
                Simuler mon projet
              </Link>
              <a
                href="tel:+33762111470"
                className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-foreground"
              >
                <Phone className="h-4 w-4" strokeWidth={1.5} />
                07 62 11 14 70
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
