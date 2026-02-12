import { motion } from "framer-motion";
import { memo } from "react";
import whatsappIcon from "@/assets/whatsapp-icon.webp";

const PHONE = "33762111470";

const WhatsAppButton = memo(() => (
  <motion.a
    href={`https://wa.me/${PHONE}?text=${encodeURIComponent("Bonjour, je souhaite en savoir plus sur vos solutions solaires.")}`}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contacter via WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg overflow-hidden"
    style={{ willChange: "transform", marginBottom: "env(safe-area-inset-bottom, 0px)" }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 2, duration: 0.5 }}
  >
    <img src={whatsappIcon} alt="WhatsApp" className="h-full w-full object-cover block" />
  </motion.a>
));

WhatsAppButton.displayName = "WhatsAppButton";

export default WhatsAppButton;
