import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Accueil", to: "/" },
  { label: "Particuliers", to: "/particuliers" },
  { label: "Professionnels", to: "/b2b" },
  { label: "Domotique & PAC", to: "/domotique-pac" },
  { label: "Simulateur", to: "/simulateur" },
  { label: "Contact", to: "/#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
      }
    }
  };

  const textColor = scrolled ? "text-foreground" : "text-primary-foreground";
  const textMuted = scrolled ? "text-muted-foreground" : "text-primary-foreground/70";
  const textShadow = scrolled ? "none" : "0 1px 3px rgba(0,0,0,0.4)";

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
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          to="/"
          className={`text-base font-bold tracking-[0.1em] transition-colors duration-300 ${textColor}`}
          style={{ textShadow }}
        >
          SOLAR FUSION
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-5 md:flex">
          {navLinks.map((link) =>
            link.to.startsWith("/#") ? (
              <a
                key={link.label}
                href={link.to}
                onClick={() => handleNavClick(link.to)}
                className={`text-[10px] uppercase tracking-[0.12em] font-medium transition-colors duration-300 hover:opacity-100 ${textMuted}`}
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
                className={`text-[10px] uppercase tracking-[0.12em] font-medium transition-colors duration-300 hover:opacity-100 ${
                  location.pathname === link.to ? textColor : textMuted
                }`}
                style={{ textShadow }}
              >
                {link.label}
              </Link>
            )
          )}
          <a
            href="tel:+33762111470"
            className={`flex items-center gap-2 text-[10px] font-semibold tracking-wide transition-colors duration-300 ${textColor}`}
            style={{ textShadow }}
          >
            <Phone className="h-3.5 w-3.5" strokeWidth={1.5} />
            07 62 11 14 70
          </a>
        </nav>

        {/* Mobile */}
        <div className="flex items-center gap-4 md:hidden">
          <a
            href="tel:+33762111470"
            aria-label="Appeler"
            className={`transition-colors duration-300 ${textColor}`}
          >
            <Phone className="h-4 w-4" strokeWidth={1.5} />
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className={`transition-colors duration-300 ${textColor}`}
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
              <a
                href="tel:+33762111470"
                className="flex items-center gap-2 text-xs font-semibold text-foreground mt-2"
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
