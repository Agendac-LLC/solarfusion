import { motion } from "framer-motion";
import { memo } from "react";

const PHONE = "33762111470";

const WhatsAppButton = memo(() => (
  <motion.a
    href={`https://wa.me/${PHONE}?text=${encodeURIComponent("Bonjour, je souhaite en savoir plus sur vos solutions solaires.")}`}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contacter via WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg"
    style={{ backgroundColor: "#25D366", willChange: "transform" }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 2, duration: 0.5 }}
  >
    <svg viewBox="0 0 32 32" className="h-7 w-7 block" fill="white">
      <path d="M16.004 2.667A13.26 13.26 0 0 0 2.667 15.89a13.16 13.16 0 0 0 1.795 6.64L2.667 29.333l7.022-1.84A13.28 13.28 0 0 0 16.004 29.2 13.27 13.27 0 0 0 29.333 15.89 13.27 13.27 0 0 0 16.004 2.667Zm0 24.266a11 11 0 0 1-5.615-1.537l-.403-.24-4.176 1.095 1.115-4.073-.263-.418A10.9 10.9 0 0 1 4.933 15.89a11.08 11.08 0 0 1 11.07-11.056A11.08 11.08 0 0 1 27.067 15.89a11.08 11.08 0 0 1-11.063 11.043Zm6.07-8.277c-.333-.167-1.97-.972-2.276-1.083-.306-.111-.529-.167-.751.167-.223.333-.862 1.083-.057 1.306-.195.223-.751.333-1.084.167a6.84 6.84 0 0 1-2.015-1.243 7.55 7.55 0 0 1-1.394-1.735c-.146-.251-.016-.387.11-.512.113-.113.25-.293.376-.44.125-.146.167-.25.25-.417.084-.167.042-.312-.02-.437-.063-.125-.752-1.812-1.03-2.48-.272-.652-.548-.564-.752-.574-.195-.01-.418-.012-.64-.012a1.23 1.23 0 0 0-.89.417c-.307.334-1.17 1.144-1.17 2.79s1.198 3.235 1.365 3.457c.167.223 2.358 3.6 5.714 5.05.798.344 1.421.55 1.907.704.802.255 1.531.219 2.108.133.643-.096 1.97-.805 2.249-1.583.278-.778.278-1.444.195-1.583-.084-.14-.306-.223-.64-.39Z" />
    </svg>
  </motion.a>
));

WhatsAppButton.displayName = "WhatsAppButton";

export default WhatsAppButton;
