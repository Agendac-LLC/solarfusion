import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Accueil", to: "/" },
  { label: "Professionnels", to: "/b2b" },
  { label: "Contact", to: "/#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (to: string) => {
    setOpen(false);
    if (to.startsWith("/#")) {
      const id = to.replace("/#", "");
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed top-0 z-40 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="text-lg font-semibold tracking-tight">
          SOLAR FUSION
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) =>
            link.to.startsWith("/#") ? (
              <a
                key={link.label}
                href={link.to}
                onClick={() => handleNavClick(link.to)}
                className="text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.to}
                className={`text-sm uppercase tracking-widest transition-colors hover:text-foreground ${
                  location.pathname === link.to ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
          <a
            href="tel:+33762111470"
            className="flex items-center gap-2 text-sm font-medium"
          >
            <Phone className="h-4 w-4" />
            07 62 11 14 70
          </a>
        </nav>

        {/* Mobile */}
        <div className="flex items-center gap-4 md:hidden">
          <a href="tel:+33762111470" aria-label="Appeler">
            <Phone className="h-5 w-5" />
          </a>
          <button onClick={() => setOpen(!open)} aria-label="Menu">
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
            className="overflow-hidden border-t border-border bg-background md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) =>
                link.to.startsWith("/#") ? (
                  <a
                    key={link.label}
                    href={link.to}
                    onClick={() => handleNavClick(link.to)}
                    className="text-sm uppercase tracking-widest text-muted-foreground"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="text-sm uppercase tracking-widest text-muted-foreground"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
