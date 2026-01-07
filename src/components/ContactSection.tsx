import { motion } from "framer-motion";
import { Phone, MessageCircle, Instagram } from "lucide-react";
import { Button } from "./ui/button";

const ContactSection = () => {
  const phoneNumber = "8103267938";
  const whatsappLink = `https://wa.me/91${phoneNumber}?text=नमस्ते! मुझे निज़ामी मोबाइल शॉप से जानकारी चाहिए।`;
  const instagramLink = "https://www.instagram.com/nizami__mobaileshop_?igsh=bnEwOGQyd3I2b3Vx";

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            संपर्क करें
          </h2>
          <p className="text-muted-foreground text-lg">
            Get in Touch with Us
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <div className="grid gap-6">
            {/* Phone Button */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <a href={`tel:+91${phoneNumber}`}>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full py-8 text-xl border-primary/30 hover:bg-primary/10 hover:border-primary group transition-all duration-300"
                >
                  <Phone className="w-7 h-7 mr-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-foreground group-hover:text-primary transition-colors duration-300">
                    +91 {phoneNumber}
                  </span>
                </Button>
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
                <Button
                  size="lg"
                  className="w-full py-8 text-xl bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] group transition-all duration-300"
                >
                  <MessageCircle className="w-7 h-7 mr-4 group-hover:scale-110 transition-transform duration-300" />
                  WhatsApp पर चैट करें
                </Button>
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
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full py-8 text-xl border-pink-500/30 hover:bg-pink-500/10 hover:border-pink-500 group transition-all duration-300"
                >
                  <Instagram className="w-7 h-7 mr-4 text-pink-500 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-foreground group-hover:text-pink-500 transition-colors duration-300">
                    Instagram पर फॉलो करें
                  </span>
                </Button>
              </a>
            </motion.div>
          </div>

          {/* Owner Name */}
          <motion.p
            className="text-center mt-10 text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Owner: <span className="text-primary font-semibold">Sahil Khan</span>
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
