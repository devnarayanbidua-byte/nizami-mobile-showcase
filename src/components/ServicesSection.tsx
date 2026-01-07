import { motion } from "framer-motion";
import { Smartphone, Monitor, Wrench, ArrowRight, CheckCircle } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const services = [
  {
    icon: Smartphone,
    title: "मोबाइल फोन बिक्री",
    subtitle: "Mobile Phone Sales",
    description: "सभी टॉप ब्रांड्स के लेटेस्ट मोबाइल फोन बेस्ट प्राइस में उपलब्ध",
    features: ["Latest Models", "Best Prices", "Warranty"],
    gradient: "from-blue-500/20 to-purple-500/20",
    iconBg: "from-blue-500 to-purple-500",
  },
  {
    icon: Monitor,
    title: "ओरिजनल पार्ट्स",
    subtitle: "Folder • Display • Touch",
    description: "100% ओरिजनल फोल्डर, डिस्प्ले और टच स्क्रीन की वारंटी के साथ",
    features: ["100% Original", "Quality Tested", "Warranty"],
    gradient: "from-green-500/20 to-emerald-500/20",
    iconBg: "from-green-500 to-emerald-500",
  },
  {
    icon: Wrench,
    title: "मोबाइल रिपेयरिंग",
    subtitle: "Expert Repairs",
    description: "सभी प्रकार की मोबाइल रिपेयरिंग एक्सपर्ट टेक्नीशियन द्वारा",
    features: ["Expert Technicians", "Quick Service", "Affordable"],
    gradient: "from-orange-500/20 to-red-500/20",
    iconBg: "from-orange-500 to-red-500",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{ x: [-50, 50, -50], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/4 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
          animate={{ x: [50, -50, 50], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
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
            Our Services
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            हमारी सेवाएं
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Quality Services at Best Prices with Expert Care
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 group overflow-hidden relative">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-lg"
                  style={{
                    background: "linear-gradient(90deg, transparent, hsl(45 100% 50% / 0.3), transparent)",
                    backgroundSize: "200% 100%",
                  }}
                  animate={{
                    backgroundPosition: ["200% 0", "-200% 0"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                />
                
                <CardContent className="p-8 relative z-10">
                  {/* Icon */}
                  <motion.div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.iconBg} flex items-center justify-center mb-6 shadow-lg`}
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <service.icon className="w-10 h-10 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Subtitle */}
                  <p className="text-primary/80 text-sm font-medium mb-4 flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    {service.subtitle}
                  </p>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, i) => (
                      <motion.div
                        key={feature}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.1 }}
                      >
                        <CheckCircle className="w-4 h-4 text-primary" />
                        {feature}
                      </motion.div>
                    ))}
                  </div>
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
