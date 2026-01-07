import { motion } from "framer-motion";
import { Shield, Award, Clock, ThumbsUp, Users, Star } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "100% ओरिजनल",
    description: "Original Products Only",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Award,
    title: "क्वालिटी सर्विस",
    description: "Best Quality Service",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Clock,
    title: "तेज़ रिपेयर",
    description: "Quick Turnaround",
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: ThumbsUp,
    title: "ग्राहक संतुष्टि",
    description: "Customer Satisfaction",
    color: "from-green-500 to-emerald-500",
  },
];

const stats = [
  { value: "1000+", label: "Happy Customers", icon: Users },
  { value: "5+", label: "Years Experience", icon: Star },
  { value: "100%", label: "Genuine Parts", icon: Shield },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -right-20 w-80 h-80 border border-primary/10 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 border border-primary/10 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
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
              About Us
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              हमारे बारे में
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Know More About Nizami Mobile Shop
            </p>
            
            {/* About Text */}
            <motion.div
              className="max-w-3xl mx-auto bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-lg text-foreground/90 leading-relaxed">
                <span className="text-primary font-bold text-xl">निज़ामी मोबाइल शॉप</span> आपकी मोबाइल 
                जरूरतों के लिए एक भरोसेमंद नाम है। हम सभी टॉप ब्रांड्स के मोबाइल फोन, ओरिजनल 
                पार्ट्स और एक्सपर्ट रिपेयरिंग सर्विसेज प्रदान करते हैं। हमारी प्राथमिकता है 
                ग्राहकों को बेहतरीन क्वालिटी और सर्विस देना।
              </p>
              <div className="mt-4 pt-4 border-t border-border/50">
                <p className="text-muted-foreground italic">
                  "Customer satisfaction is our top priority"
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-6 mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-4 rounded-xl bg-card/30 border border-border/30"
                whileHover={{ scale: 1.05, borderColor: "hsl(45 100% 50% / 0.5)" }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                >
                  <stat.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</h3>
                <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg`}
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <feature.icon className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
