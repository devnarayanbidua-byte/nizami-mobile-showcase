import { motion } from "framer-motion";
import { Shield, Award, Clock, ThumbsUp } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "100% ओरिजनल",
    description: "Original Products Only",
  },
  {
    icon: Award,
    title: "क्वालिटी सर्विस",
    description: "Best Quality Service",
  },
  {
    icon: Clock,
    title: "तेज़ रिपेयर",
    description: "Quick Turnaround",
  },
  {
    icon: ThumbsUp,
    title: "ग्राहक संतुष्टि",
    description: "Customer Satisfaction",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              हमारे बारे में
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              About Nizami Mobile Shop
            </p>
            
            <motion.p
              className="text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-primary font-semibold">निज़ामी मोबाइल शॉप</span> आपकी मोबाइल 
              जरूरतों के लिए एक भरोसेमंद नाम है। हम सभी टॉप ब्रांड्स के मोबाइल फोन, ओरिजनल 
              पार्ट्स और एक्सपर्ट रिपेयरिंग सर्विसेज प्रदान करते हैं। हमारी प्राथमिकता है 
              ग्राहकों को बेहतरीन क्वालिटी और सर्विस देना।
            </motion.p>
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
                  className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-7 h-7 text-primary" />
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
