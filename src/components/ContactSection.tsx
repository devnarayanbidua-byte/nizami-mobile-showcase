import { motion } from "framer-motion";
import { Phone, MessageCircle, Instagram, MapPin, Clock } from "lucide-react";
import { Button } from "./ui/button";

const ContactSection = () => {
  const phoneNumber = "8103267938";
  const whatsappLink = `https://wa.me/91${phoneNumber}?text=नमस्ते! मुझे निज़ामी मोबाइल शॉप से जानकारी चाहिए।`;
  const instagramLink = "https://www.instagram.com/nizami__mobaileshop_?igsh=bnEwOGQyd3I2b3Vx";

  return (
    <section id="contact" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Contact Us
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            संपर्क करें
          </h2>
          <p className="text-muted-foreground text-lg">
            Get in Touch with Us Anytime
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Cards */}
          <div className="grid gap-6">
            {/* Phone Button */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <a href={`tel:+91${phoneNumber}`}>
                <motion.div
                  className="flex items-center gap-6 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 group cursor-pointer"
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      कॉल करें
                    </h3>
                    <p className="text-2xl font-semibold text-primary">
                      +91 {phoneNumber}
                    </p>
                  </div>
                  <motion.div
                    className="text-primary"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </motion.div>
              </a>
            </motion.div>

            {/* WhatsApp Button */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <motion.div
                  className="flex items-center gap-6 p-6 rounded-2xl bg-gradient-to-r from-[hsl(142,70%,45%)] to-[hsl(142,70%,35%)] shadow-lg cursor-pointer group"
                  whileHover={{ scale: 1.02, x: 10 }}
                  style={{
                    boxShadow: "0 10px 40px rgba(37, 211, 102, 0.3)",
                  }}
                >
                  <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white">
                      WhatsApp पर चैट करें
                    </h3>
                    <p className="text-white/80">
                      Instant reply • 24/7 Available
                    </p>
                  </div>
                  <motion.div
                    className="text-white"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </motion.div>
              </a>
            </motion.div>

            {/* Instagram Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                <motion.div
                  className="flex items-center gap-6 p-6 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 shadow-lg cursor-pointer group"
                  whileHover={{ scale: 1.02, x: 10 }}
                  style={{
                    boxShadow: "0 10px 40px rgba(236, 72, 153, 0.3)",
                  }}
                >
                  <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Instagram className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white">
                      Instagram पर फॉलो करें
                    </h3>
                    <p className="text-white/80">
                      @nizami__mobaileshop_
                    </p>
                  </div>
                  <motion.div
                    className="text-white"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </motion.div>
              </a>
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div
            className="mt-12 grid md:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-4 p-4 rounded-xl bg-card/30 border border-border/30">
              <Clock className="w-8 h-8 text-primary" />
              <div>
                <h4 className="font-semibold text-foreground">Shop Timing</h4>
                <p className="text-sm text-muted-foreground">10:00 AM - 9:00 PM (Mon-Sat)</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-card/30 border border-border/30">
              <MapPin className="w-8 h-8 text-primary" />
              <div>
                <h4 className="font-semibold text-foreground">Location</h4>
                <p className="text-sm text-muted-foreground">Contact for shop address</p>
              </div>
            </div>
          </motion.div>

          {/* Owner Name */}
          <motion.div
            className="text-center mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-muted-foreground mb-2">Shop Owner</p>
            <h3 className="text-2xl font-bold text-gradient">Sahil Khan</h3>
            <p className="text-sm text-muted-foreground mt-2">
              "आपकी सेवा में हमेशा तत्पर"
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
