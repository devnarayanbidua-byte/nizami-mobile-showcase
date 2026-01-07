import { motion } from "framer-motion";
import { Apple } from "lucide-react";

// Brand data with text-based logos for reliability
const brands = [
  {
    name: "iPhone",
    displayName: "iPhone",
    color: "from-gray-100 to-gray-300",
    icon: "🍎",
    textColor: "text-white",
  },
  {
    name: "Samsung",
    displayName: "SAMSUNG",
    color: "from-blue-500 to-blue-700",
    icon: null,
    textColor: "text-white",
  },
  {
    name: "Vivo",
    displayName: "vivo",
    color: "from-blue-400 to-blue-600",
    icon: null,
    textColor: "text-white",
  },
  {
    name: "OPPO",
    displayName: "OPPO",
    color: "from-green-400 to-green-600",
    icon: null,
    textColor: "text-white",
  },
  {
    name: "Realme",
    displayName: "realme",
    color: "from-yellow-400 to-yellow-600",
    icon: null,
    textColor: "text-black",
  },
];

const BrandsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
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
            Authorized Dealer
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            हमारे ब्रांड पार्टनर्स
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            All Top Mobile Brands Available at Best Prices
          </p>
        </motion.div>

        {/* Brands Grid */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 max-w-4xl mx-auto">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              className="group relative"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
            >
              <motion.div
                className={`w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br ${brand.color} flex flex-col items-center justify-center p-4 relative overflow-hidden cursor-pointer`}
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -2, 2, 0],
                }}
                transition={{ duration: 0.3 }}
                style={{
                  boxShadow: "0 10px 40px rgba(0,0,0,0.3), 0 0 20px rgba(255,215,0,0.1)",
                }}
              >
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                  initial={{ x: "-200%" }}
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 0.6 }}
                />
                
                {/* Brand logo/text */}
                {brand.name === "iPhone" ? (
                  <div className="flex flex-col items-center">
                    <Apple className="w-12 h-12 text-white mb-2" />
                    <span className={`text-lg font-bold ${brand.textColor}`}>
                      {brand.displayName}
                    </span>
                  </div>
                ) : (
                  <span className={`text-xl md:text-2xl font-bold ${brand.textColor} tracking-wider`}>
                    {brand.displayName}
                  </span>
                )}
                
                {/* Bottom glow on hover */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-primary"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              
              {/* Brand name below */}
              <motion.p
                className="text-center mt-4 text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {brand.name}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-muted-foreground">
            और भी कई ब्रांड्स उपलब्ध हैं • <span className="text-primary">Contact for more brands</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandsSection;
