import { useState } from "react";
import BlurFade from "./BlurFade";
import TextReveal from "./TextReveal";
import MagneticButton from "./MagneticButton";
import FloatingShapes from "./FloatingShapes";
import { z } from "zod";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Nom requis").max(100),
  phone: z.string().trim().min(1, "Téléphone requis").max(20),
  postalCode: z.string().trim().min(1, "Code postal requis").max(10),
  subject: z.string().trim().max(500).optional(),
});

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", phone: "", postalCode: "", subject: "" });
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
    setForm({ name: "", phone: "", postalCode: "", subject: "" });
    setLoading(false);
  };

  const inputClass =
    "w-full rounded-xl border border-border/60 bg-background px-4 py-3.5 text-sm text-foreground font-medium placeholder:text-foreground/40 focus:outline-none focus:border-foreground/40 focus:ring-2 focus:ring-foreground/10 transition-all duration-300";

  return (
    <section id="contact-form" className="section-padding relative grain">
      <FloatingShapes variant="light" />
      <div className="mx-auto max-w-lg relative z-10">
        <BlurFade>
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-muted-foreground font-medium text-center">
            Contact
          </p>
          <TextReveal
            text="Contactez-nous."
            className="mb-4 text-3xl font-bold md:text-4xl text-center text-foreground"
          />
          <p className="mb-10 text-muted-foreground/80 text-sm text-center font-medium">
            Remplissez ce formulaire rapide, nous vous rappelons pour discuter de votre projet.
          </p>
        </BlurFade>
        <BlurFade delay={0.2}>
          <div className="bg-background border border-border/60 shadow-md rounded-3xl p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { type: "text", placeholder: "Nom complet", key: "name" },
                { type: "tel", placeholder: "Téléphone", key: "phone" },
                { type: "text", placeholder: "Code postal (ex: 73000)", key: "postalCode" },
              ].map((field) => (
                <div key={field.key}>
                  <motion.input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={(form as any)[field.key]}
                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                    className={inputClass}
                    whileFocus={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  />
                  {errors[field.key] && <p className="mt-1.5 text-xs text-destructive">{errors[field.key]}</p>}
                </div>
              ))}
              <div>
                <motion.textarea
                  placeholder="Sujet / Question (optionnel)"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className={`${inputClass} resize-none min-h-[100px]`}
                  whileFocus={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
              <MagneticButton
                as="button"
                className="btn-pill bg-foreground text-background glow-pulse w-full py-4 text-xs font-semibold uppercase tracking-[0.2em] disabled:opacity-50 flex items-center justify-center gap-2 text-center"
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
                  "Nous contacter"
                )}
              </MagneticButton>
              <p className="text-center text-xs text-muted-foreground/50 mt-2">
                Intervention en Savoie (73) et Haute-Savoie (74)
              </p>
            </form>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default ContactForm;
