import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { z } from "zod";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Nom requis").max(100),
  email: z.string().trim().email("Email invalide").max(255),
  phone: z.string().trim().min(1, "Téléphone requis").max(20),
  message: z.string().trim().min(1, "Message requis").max(2000),
});

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
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
    // Placeholder for Google Sheet / CRM integration
    await new Promise((r) => setTimeout(r, 1000));
    toast.success("Message envoyé avec succès. Nous vous recontacterons rapidement.");
    setForm({ name: "", email: "", phone: "", message: "" });
    setLoading(false);
  };

  const inputClass =
    "w-full border border-border bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-colors";

  return (
    <section id="contact" className="section-padding section-alt">
      <div className="mx-auto max-w-2xl">
        <AnimatedSection>
          <p className="mb-2 text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Contact
          </p>
          <h2 className="mb-12 text-3xl font-semibold md:text-5xl">
            Parlons de votre projet.
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Nom complet"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass}
              />
              {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                />
                {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Téléphone"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={inputClass}
                />
                {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
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
              {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-foreground py-4 text-sm font-medium uppercase tracking-widest text-background transition-opacity hover:opacity-80 disabled:opacity-50"
            >
              {loading ? "Envoi en cours..." : "Envoyer"}
            </button>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactForm;
