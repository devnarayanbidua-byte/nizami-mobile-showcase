import { motion } from "framer-motion";
import { Smartphone, Monitor, Wrench, CheckCircle } from "lucide-react";
import { memo } from "react";

const services = [
  {
    icon: Smartphone,
    title: "मोबाइल फोन बिक्री",
    subtitle: "Mobile Phone Sales",
    description: "सभी टॉप ब्रांड्स के लेटेस्ट मोबाइल फोन बेस्ट प्राइस में",
    features: ["Latest Models", "Best Prices", "Warranty"],
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    icon: Monitor,
    title: "ओरिजनल पार्ट्स",
    subtitle: "Folder • Display • Touch",
    description: "100% ओरिजनल पार्ट्स वारंटी के साथ उपलब्ध",
    features: ["100% Original", "Quality Tested", "Warranty"],
    gradient: "from-emerald-500 to-green-600",
  },
  {
    icon: Wrench,
    title: "मोबाइल रिपेयरिंग",
    subtitle: "Expert Repairs",
    description: "एक्सपर्ट टेक्नीशियन द्वारा क्विक रिपेयर सर्विस",
    features: ["Expert Technicians", "Quick Service", "Affordable"],
    gradient: "from-orange-500 to-red-600",
  },
];

const ServiceCard = memo(({ service, index }: { service: typeof services[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
  >
    <motion.div 
      className="h-full card-premium rounded-2xl p-6 md:p-8 group hover:border-primary/30 transition-all duration-300"
      whileHover={{ y: -5 }}
    >
      {/* Icon */}
      <div className={`w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-105 transition-transform duration-300`}>
        <service.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
      </div>

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-bold mb-1 text-foreground group-hover:text-primary transition-colors">
        {service.title}
      </h3>
      
      {/* Subtitle */}
      <p className="text-primary/70 text-sm font-medium mb-3">
        {service.subtitle}
      </p>
      
      {/* Description */}
      <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-5">
        {service.description}
      </p>

      {/* Features */}
      <div className="space-y-2">
        {service.features.map((feature) => (
          <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </motion.div>
  </motion.div>
));
ServiceCard.displayName = "ServiceCard";

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-transparent to-secondary/5" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-gradient">
            हमारी सेवाएं
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-md mx-auto">
            Quality Services at Best Prices
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
