import { MessageCircle } from "lucide-react";

const PHONE = "33762111470";

const WhatsAppButton = () => (
  <a
    href={`https://wa.me/${PHONE}?text=${encodeURIComponent("Bonjour, je souhaite en savoir plus sur vos solutions solaires.")}`}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contacter via WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center bg-foreground text-background shadow-lg transition-transform hover:scale-110"
  >
    <MessageCircle className="h-6 w-6" />
  </a>
);

export default WhatsAppButton;
