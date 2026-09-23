import desktop from "@/assets/france-renov/encart-desktop.png";
import mobile from "@/assets/france-renov/encart-mobile.png";

const LABEL = "France Rénov' - Avant de vous engager, le service public vous informe gratuitement pour préparer et sécuriser votre projet : france-renov.gouv.fr";

export default function FranceRenovBanner({ className = "" }: { className?: string }) {
  return (
    <div className={`relative z-10 w-full bg-white ${className}`}>
      <a
        href="https://france-renov.gouv.fr/servicepublic"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={LABEL}
        className="block w-full lg:w-[800px] lg:mx-auto py-4 lg:px-0"
      >
        <picture>
          <source media="(max-width: 749px)" srcSet={mobile} />
          <img
            src={desktop}
            alt={LABEL}
            width={800}
            height={160}
            loading="eager"
            className="block w-full h-auto"
          />
        </picture>
      </a>
    </div>
  );
}
