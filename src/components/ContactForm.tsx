import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { z } from "zod";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Nom requis").max(100),
  phone: z.string().trim().min(1, "Téléphone requis").max(20),
  postalCode: z.string().trim().min(1, "Code postal requis").max(10),
});

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", phone: "", postalCode: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    toast.success("Demande envoyée. Nous vous rappelons dans les plus brefs délais.");
    setForm({ name: "", phone: "", postalCode: "" });
    setLoading(false);
  };

  const inputClass =
    "w-full rounded-xl border border-border bg-transparent px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground focus:ring-2 focus:ring-foreground/5 transition-all duration-300";

  return (
    <section id="contact-form" className="section-padding">
      <div className="mx-auto max-w-lg">
        <AnimatedSection>
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-muted-foreground font-medium text-center">
            Rappel gratuit
          </p>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl text-center">
            Être rappelé en 24h.
          </h2>
          <p className="mb-10 text-muted-foreground text-sm text-center">
            Remplissez ce formulaire rapide, nous vous rappelons pour discuter de votre projet.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Nom complet"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass}
              />
              {errors.name && <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>}
            </div>
            <div>
              <input
                type="tel"
                placeholder="Téléphone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={inputClass}
              />
              {errors.phone && <p className="mt-1.5 text-xs text-destructive">{errors.phone}</p>}
            </div>
            <div>
              <input
                type="text"
                placeholder="Code postal (ex: 73000)"
                value={form.postalCode}
                onChange={(e) => setForm({ ...form, postalCode: e.target.value })}
                className={inputClass}
              />
              {errors.postalCode && <p className="mt-1.5 text-xs text-destructive">{errors.postalCode}</p>}
            </div>
            <button
              type="submit"
              disabled={loading}
              className="btn-pill bg-foreground text-background w-full py-4 text-xs font-semibold uppercase tracking-[0.2em] disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                  >
                    <Loader2 className="h-4 w-4" />
                  </motion.div>
                  Envoi en cours...
                </>
              ) : (
                "Demander un rappel gratuit"
              )}
            </button>
            <p className="text-center text-xs text-muted-foreground/50 mt-2">
              Intervention en Savoie (73) et Haute-Savoie (74)
            </p>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactForm;
