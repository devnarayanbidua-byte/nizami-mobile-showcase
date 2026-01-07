import { motion } from "framer-motion";
import { Smartphone, Monitor, Wrench } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const services = [
  {
    icon: Smartphone,
    title: "मोबाइल फोन बिक्री",
    subtitle: "Mobile Phone Sales",
    description: "सभी टॉप ब्रांड्स के लेटेस्ट मोबाइल फोन बेस्ट प्राइस में उपलब्ध",
  },
  {
    icon: Monitor,
    title: "ओरिजनल पार्ट्स",
    subtitle: "Folder • Display • Touch",
    description: "100% ओरिजनल फोल्डर, डिस्प्ले और टच स्क्रीन की वारंटी के साथ",
  },
  {
    icon: Wrench,
    title: "मोबाइल रिपेयरिंग",
    subtitle: "Expert Repairs",
    description: "सभी प्रकार की मोबाइल रिपेयरिंग एक्सपर्ट टेक्नीशियन द्वारा",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            हमारी सेवाएं
          </h2>
          <p className="text-muted-foreground text-lg">
            Quality Services at Best Prices
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full bg-card border-border/50 hover:border-primary/50 transition-all duration-500 group overflow-hidden relative">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/10 group-hover:to-accent/5 transition-all duration-500" />
                
                <CardContent className="p-8 relative z-10">
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <service.icon className="w-8 h-8 text-primary" />
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-primary/80 text-sm font-medium mb-4">
                    {service.subtitle}
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
