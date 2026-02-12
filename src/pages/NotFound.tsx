import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import logoFullSlogan from "@/assets/logo-full-slogan.webp";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-6">
        <img
          src={logoFullSlogan}
          alt="Solar Fusion - Là où le soleil devient solution"
          className="mx-auto mb-12 w-72 md:w-96"
        />
        <h1 className="mb-2 text-7xl font-bold text-foreground">404</h1>
        <p className="mb-8 text-lg text-muted-foreground">
          Cette page n'existe pas ou a été déplacée.
        </p>
        <Link
          to="/"
          className="btn-pill bg-foreground text-background px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em] inline-block"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
