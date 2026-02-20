import { Star, Quote } from "lucide-react";
import { memo } from "react";

const reviews = [
  {
    name: "Marie L.",
    text: "Posé en une journée. Propre, carré, rien à redire.",
    initials: "ML",
  },
  {
    name: "Jean-Pierre D.",
    text: "Production conforme aux estimations. Ils connaissent leur métier.",
    initials: "JD",
  },
  {
    name: "Sophie M.",
    text: "Suivi du début à la fin. Entreprise familiale sérieuse.",
    initials: "SM",
  },
];

const socials = [
  {
    name: "Google",
    url: "https://share.google/mpZ68FFy4C3ErrGGA",
    color: "#4285F4",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/solarfusion73",
    color: "#E4405F",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5">
        <defs>
          <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#feda75" />
            <stop offset="25%" stopColor="#fa7e1e" />
            <stop offset="50%" stopColor="#d62976" />
            <stop offset="75%" stopColor="#962fbf" />
            <stop offset="100%" stopColor="#4f5bd5" />
          </linearGradient>
        </defs>
        <path fill="url(#ig-grad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C16.67.014 16.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61583804034534",
    color: "#1877F2",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#1877F2">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

const ReviewsBanner = memo(() => (
  <section className="bg-muted/30 border-t border-border/40 py-10 sm:py-14">
    <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-12">
      {/* Reviews as cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
        {reviews.map((review) => (
          <div
            key={review.name}
            className="relative bg-background rounded-xl p-5 shadow-sm border border-border/40"
          >
            <Quote className="absolute top-4 right-4 h-5 w-5 text-muted-foreground/15" strokeWidth={1.5} />
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed mb-4">
              « {review.text} »
            </p>
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-full bg-foreground/10 flex items-center justify-center text-[10px] font-bold text-foreground/60 uppercase">
                {review.initials}
              </div>
              <span className="text-xs font-semibold text-foreground tracking-wide">{review.name}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Social links */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        {socials.map((s) => (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.name}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-background border border-border/50 shadow-sm text-sm font-medium text-foreground hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          >
            {s.icon}
            <span>{s.name}</span>
          </a>
        ))}
      </div>
    </div>
  </section>
));

ReviewsBanner.displayName = "ReviewsBanner";

export default ReviewsBanner;
