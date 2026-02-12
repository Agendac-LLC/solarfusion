import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoIcon from "@/assets/logo-icon.png";

const navLinks = [
  { label: "Accueil", to: "/" },
  { label: "Particuliers", to: "/particuliers" },
  { label: "Professionnels", to: "/b2b" },
  { label: "Domotique & PAC", to: "/domotique-pac" },
  { label: "Contact", to: "/#contact" },
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

  const handleNavClick = (to: string) => {
    setOpen(false);
    if (to.startsWith("/#")) {
      const id = to.replace("/#", "");
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        // Navigate to homepage then scroll - handled by browser with hash
        window.location.href = to;
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
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link
          to="/"
          className={`flex items-center gap-1.5 font-bold tracking-[0.1em] transition-colors duration-300 shrink-0 ${textColor}`}
          style={{ textShadow }}
        >
          <img
            src={logoIcon}
            alt="Solar Fusion logo"
            className={`h-16 w-16 transition-all duration-300 ${useLight ? "invert brightness-200" : ""}`}
          />
          <span className="text-lg font-bold">SOLAR FUSION</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex h-full" aria-label="Navigation principale">
          {navLinks.map((link) =>
            link.to.startsWith("/#") ? (
              <a
                key={link.label}
                href={link.to}
                onClick={() => handleNavClick(link.to)}
                className={`text-[13px] uppercase tracking-wide font-medium transition-colors duration-300 hover:opacity-80 inline-flex items-center h-full ${textMuted}`}
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
                className={`text-[13px] uppercase tracking-wide transition-colors duration-300 hover:opacity-80 inline-flex items-center h-full ${
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
            className={`h-10 inline-flex items-center justify-center rounded-full px-6 text-[13px] uppercase tracking-wide font-semibold transition-all duration-300 ${
              scrolled
                ? "bg-foreground text-background hover:bg-foreground/90"
                : "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            }`}
          >
            Simuler mon projet
          </Link>
          <a
            href="tel:+33762111470"
            className={`inline-flex items-center gap-2 text-[13px] font-semibold tracking-wide transition-colors duration-300 ${textColor}`}
            style={{ textShadow }}
          >
            <Phone className="h-4 w-4 shrink-0" strokeWidth={1.5} />
            07 62 11 14 70
          </a>
        </nav>

        {/* Mobile */}
        <div className="flex items-center gap-5 md:hidden">
          <a
            href="tel:+33762111470"
            aria-label="Appeler"
            className={`inline-flex items-center justify-center h-10 w-10 transition-colors duration-300 ${textColor}`}
          >
            <Phone className="h-5 w-5" strokeWidth={1.5} />
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className={`inline-flex items-center justify-center h-10 w-10 transition-colors duration-300 ${textColor}`}
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
            <div className="flex flex-col gap-5 px-6 py-8">
              {navLinks.map((link) =>
                link.to.startsWith("/#") ? (
                  <a
                    key={link.label}
                    href={link.to}
                    onClick={() => handleNavClick(link.to)}
                    className="text-xs uppercase tracking-[0.15em] font-medium text-muted-foreground"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={`text-xs uppercase tracking-[0.15em] font-medium ${
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
                className="btn-pill bg-foreground text-background text-center py-3.5 text-xs font-semibold uppercase tracking-[0.15em] mt-2"
              >
                Simuler mon projet
              </Link>
              <a
                href="tel:+33762111470"
                className="flex items-center justify-center gap-2 text-xs font-semibold text-foreground"
              >
                <Phone className="h-3.5 w-3.5" strokeWidth={1.5} />
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
