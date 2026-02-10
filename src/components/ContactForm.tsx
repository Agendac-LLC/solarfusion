import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { z } from "zod";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Nom requis").max(100),
  email: z.string().trim().email("Email invalide").max(255),
  phone: z.string().trim().min(1, "Téléphone requis").max(20),
  postalCode: z.string().trim().min(1, "Code postal requis").max(10),
  projectType: z.string().min(1, "Type de projet requis"),
  message: z.string().trim().min(1, "Message requis").max(2000),
});

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", postalCode: "", projectType: "", message: "" });
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
    toast.success("Message envoyé avec succès. Nous vous recontacterons rapidement.");
    setForm({ name: "", email: "", phone: "", postalCode: "", projectType: "", message: "" });
    setLoading(false);
  };

  const inputClass =
    "w-full rounded-xl border border-border bg-transparent px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground focus:ring-2 focus:ring-foreground/5 transition-all duration-300";

  return (
    <section id="contact" className="section-padding">
      <div className="mx-auto max-w-2xl">
        <AnimatedSection>
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-muted-foreground font-medium">
            Contact
          </p>
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">
            Parlons de votre projet.
          </h2>
          <p className="mb-14 text-muted-foreground text-sm">
            Intervention sur les départements 73 et 74, avec déplacements possibles dans toute la région.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <form onSubmit={handleSubmit} className="space-y-5">
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
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                />
                {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>}
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
            </div>
            <div className="grid gap-5 md:grid-cols-2">
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
              <div>
                <select
                  value={form.projectType}
                  onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                  className={`${inputClass} ${!form.projectType ? "text-muted-foreground/60" : ""}`}
                >
                  <option value="">Type de projet</option>
                  <option value="solaire">Panneaux solaires</option>
                  <option value="domotique">Domotique</option>
                  <option value="pac">Pompe à chaleur</option>
                  <option value="autre">Autre</option>
                </select>
                {errors.projectType && <p className="mt-1.5 text-xs text-destructive">{errors.projectType}</p>}
              </div>
            </div>
            <div>
              <textarea
                placeholder="Votre message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={inputClass + " resize-none"}
              />
              {errors.message && <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>}
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
                "Envoyer"
              )}
            </button>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactForm;
