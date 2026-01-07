import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const phoneNumber = "8103267938";
  const whatsappLink = `https://wa.me/91${phoneNumber}?text=नमस्ते! मुझे निज़ामी मोबाइल शॉप से जानकारी चाहिए।`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[hsl(142,70%,45%)] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={{
        boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4), 0 0 40px rgba(37, 211, 102, 0.2)",
      }}
    >
      <MessageCircle className="w-8 h-8 text-white" />
      
      {/* Pulse animation */}
      <motion.span
        className="absolute inset-0 rounded-full bg-[hsl(142,70%,45%)]"
        animate={{
          scale: [1, 1.4, 1.4],
          opacity: [0.5, 0, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />
    </motion.a>
  );
};

export default FloatingWhatsApp;
