import { motion } from "framer-motion";
import { Shield, Award, Clock, ThumbsUp, Users, Star } from "lucide-react";
import { memo } from "react";

const features = [
  { icon: Shield, title: "100% ओरिजनल", description: "Original Products", gradient: "from-blue-500 to-cyan-600" },
  { icon: Award, title: "क्वालिटी सर्विस", description: "Best Quality", gradient: "from-purple-500 to-pink-600" },
  { icon: Clock, title: "तेज़ रिपेयर", description: "Quick Service", gradient: "from-orange-500 to-amber-600" },
  { icon: ThumbsUp, title: "ग्राहक संतुष्टि", description: "Customer First", gradient: "from-emerald-500 to-green-600" },
];

const stats = [
  { value: "1000+", label: "Happy Customers", icon: Users },
  { value: "5+", label: "Years Experience", icon: Star },
  { value: "100%", label: "Genuine Parts", icon: Shield },
];

const FeatureCard = memo(({ feature, index }: { feature: typeof features[0]; index: number }) => (
  <motion.div
    className="text-center group"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.08 }}
  >
    <motion.div
      className={`w-16 h-16 md:w-18 md:h-18 mx-auto rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-3 shadow-lg`}
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ duration: 0.2 }}
    >
      <feature.icon className="w-8 h-8 text-white" />
    </motion.div>
    <h3 className="font-bold text-foreground text-sm md:text-base group-hover:text-primary transition-colors">
      {feature.title}
    </h3>
    <p className="text-xs md:text-sm text-muted-foreground">{feature.description}</p>
  </motion.div>
));
FeatureCard.displayName = "FeatureCard";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-gradient">
              हमारे बारे में
            </h2>
            
            {/* About Text */}
            <motion.div
              className="max-w-2xl mx-auto card-premium rounded-2xl p-6 md:p-8 mt-8"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                <span className="text-primary font-bold">निज़ामी मोबाइल शॉप</span> आपकी मोबाइल 
                जरूरतों के लिए एक भरोसेमंद नाम है। हम सभी टॉप ब्रांड्स के मोबाइल फोन, ओरिजनल 
                पार्ट्स और एक्सपर्ट रिपेयरिंग सर्विसेज प्रदान करते हैं।
              </p>
              <div className="mt-4 pt-4 border-t border-border/30">
                <p className="text-muted-foreground italic text-sm md:text-base">
                  "Customer satisfaction is our top priority"
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-4 md:gap-6 mb-14 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-3 md:p-4 rounded-xl card-premium"
                whileHover={{ scale: 1.03 }}
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 mb-2">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-primary">{stat.value}</h3>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
