import { motion } from "framer-motion";
import { Phone, MessageCircle, Instagram, MapPin, Clock, ChevronRight } from "lucide-react";
import { memo } from "react";

const ContactCard = memo(({ 
  href, 
  gradient, 
  icon: Icon, 
  title, 
  subtitle, 
  delay,
  shadow 
}: { 
  href: string; 
  gradient: string; 
  icon: typeof Phone; 
  title: string; 
  subtitle: string; 
  delay: number;
  shadow: string;
}) => (
  <motion.a
    href={href}
    target={href.startsWith("http") ? "_blank" : undefined}
    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
    className="block"
  >
    <motion.div
      className={`flex items-center gap-4 md:gap-5 p-4 md:p-5 rounded-2xl bg-gradient-to-r ${gradient} cursor-pointer group`}
      whileHover={{ scale: 1.02, x: 5 }}
      style={{ boxShadow: shadow }}
    >
      <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
        <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-lg md:text-xl font-bold text-white truncate">{title}</h3>
        <p className="text-white/80 text-sm md:text-base truncate">{subtitle}</p>
      </div>
      <ChevronRight className="w-5 h-5 text-white/70 group-hover:translate-x-1 transition-transform flex-shrink-0" />
    </motion.div>
  </motion.a>
));
ContactCard.displayName = "ContactCard";

const ContactSection = () => {
  const phoneNumber = "8103267938";
  const whatsappLink = `https://wa.me/91${phoneNumber}?text=नमस्ते! मुझे निज़ामी मोबाइल शॉप से जानकारी चाहिए।`;
  const instagramLink = "https://www.instagram.com/nizami__mobaileshop_";

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-card/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-gradient">
            संपर्क करें
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Get in Touch Anytime
          </p>
        </motion.div>

        <div className="max-w-xl mx-auto space-y-4">
          {/* Phone */}
          <ContactCard
            href={`tel:+91${phoneNumber}`}
            gradient="from-blue-600 to-blue-700"
            icon={Phone}
            title="कॉल करें"
            subtitle={`+91 ${phoneNumber}`}
            delay={0}
            shadow="0 8px 30px rgba(59, 130, 246, 0.3)"
          />

          {/* WhatsApp */}
          <ContactCard
            href={whatsappLink}
            gradient="from-green-500 to-green-600"
            icon={MessageCircle}
            title="WhatsApp चैट"
            subtitle="Instant Reply • 24/7"
            delay={0.1}
            shadow="0 8px 30px rgba(34, 197, 94, 0.3)"
          />

          {/* Instagram */}
          <ContactCard
            href={instagramLink}
            gradient="from-purple-500 via-pink-500 to-orange-500"
            icon={Instagram}
            title="Instagram फॉलो करें"
            subtitle="@nizami__mobaileshop_"
            delay={0.2}
            shadow="0 8px 30px rgba(236, 72, 153, 0.3)"
          />
        </div>

        {/* Info Cards */}
        <motion.div
          className="mt-10 grid grid-cols-2 gap-4 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-3 p-3 md:p-4 rounded-xl card-premium">
            <Clock className="w-6 h-6 text-primary flex-shrink-0" />
            <div className="min-w-0">
              <h4 className="font-semibold text-foreground text-sm">Shop Timing</h4>
              <p className="text-xs text-muted-foreground truncate">10 AM - 9 PM</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 md:p-4 rounded-xl card-premium">
            <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
            <div className="min-w-0">
              <h4 className="font-semibold text-foreground text-sm">Location</h4>
              <p className="text-xs text-muted-foreground truncate">Contact for address</p>
            </div>
          </div>
        </motion.div>

        {/* Owner */}
        <motion.div
          className="text-center mt-10 p-5 md:p-6 rounded-2xl card-premium max-w-sm mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-muted-foreground text-sm mb-1">Shop Owner</p>
          <h3 className="text-xl md:text-2xl font-bold text-gradient">Sahil Khan</h3>
          <p className="text-sm text-muted-foreground mt-2">"आपकी सेवा में हमेशा तत्पर"</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
