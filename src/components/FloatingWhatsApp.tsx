import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const phoneNumber = "8103267938";
  const whatsappLink = `https://wa.me/91${phoneNumber}?text=नमस्ते! मुझे निज़ामी मोबाइल शॉप से जानकारी चाहिए।`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 w-14 h-14 md:w-16 md:h-16 bg-green-500 rounded-full flex items-center justify-center shadow-xl hover:scale-110 hover:bg-green-600 transition-all duration-300 animate-pulse"
      style={{
        boxShadow: "0 4px 20px rgba(34, 197, 94, 0.4)",
      }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white" />
    </a>
  );
};

export default FloatingWhatsApp;
