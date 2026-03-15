import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919238945751?text=Hello%20Kensoft%20Education%2C%20I%20want%20to%20know%20more%20about%20your%20courses.";

const WhatsAppButton = () => (
  <motion.a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noreferrer"
    aria-label="Chat with Kensoft Education on WhatsApp"
    initial={{ opacity: 0, scale: 0.9, y: 10 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
    whileHover={{ scale: 1.06, y: -2 }}
    whileTap={{ scale: 0.97 }}
    className="fixed bottom-6 right-6 z-[70]"
  >
    <span className="absolute inset-0 rounded-full bg-[#25D366]/35 blur-xl animate-pulse" />
    <span className="relative flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-[linear-gradient(135deg,#25D366_0%,#1ea952_100%)] text-white shadow-[0_18px_40px_rgba(37,211,102,0.35)]">
      <MessageCircle size={26} />
    </span>
  </motion.a>
);

export default WhatsAppButton;
