import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const PHONE = "33762111470";

const WhatsAppButton = () => (
  <motion.a
    href={`https://wa.me/${PHONE}?text=${encodeURIComponent("Bonjour, je souhaite en savoir plus sur vos solutions solaires.")}`}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contacter via WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center border border-border bg-background text-foreground shadow-sm transition-colors hover:bg-foreground hover:text-background"
    whileHover={{ scale: 1.08 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 2, duration: 0.5 }}
  >
    <MessageCircle className="h-5 w-5" strokeWidth={1.5} />
  </motion.a>
);

export default WhatsAppButton;
