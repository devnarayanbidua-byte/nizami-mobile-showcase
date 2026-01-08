import { motion } from "framer-motion";
import { Apple } from "lucide-react";
import { memo } from "react";

const brands = [
  { name: "iPhone", displayName: "iPhone", gradient: "from-zinc-700 to-zinc-900", icon: true },
  { name: "Samsung", displayName: "SAMSUNG", gradient: "from-blue-600 to-blue-800" },
  { name: "Vivo", displayName: "vivo", gradient: "from-blue-500 to-indigo-700" },
  { name: "OPPO", displayName: "OPPO", gradient: "from-emerald-500 to-green-700" },
  { name: "Realme", displayName: "realme", gradient: "from-amber-400 to-yellow-600", dark: true },
];

const BrandCard = memo(({ brand, index }: { brand: typeof brands[0]; index: number }) => (
  <motion.div
    className="group"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.08 }}
  >
    <motion.div
      className={`w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-2xl bg-gradient-to-br ${brand.gradient} flex flex-col items-center justify-center p-4 relative overflow-hidden cursor-pointer premium-border`}
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.2 }}
      style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.4)" }}
    >
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
        initial={{ x: "-200%" }}
        whileHover={{ x: "200%" }}
        transition={{ duration: 0.5 }}
      />
      
      {brand.icon ? (
        <div className="flex flex-col items-center">
          <Apple className="w-10 h-10 md:w-12 md:h-12 text-white mb-1" />
          <span className="text-base md:text-lg font-bold text-white">{brand.displayName}</span>
        </div>
      ) : (
        <span className={`text-lg md:text-xl font-bold tracking-wider ${brand.dark ? 'text-zinc-900' : 'text-white'}`}>
          {brand.displayName}
        </span>
      )}
    </motion.div>
    <p className="text-center mt-3 text-xs md:text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
      {brand.name}
    </p>
  </motion.div>
));
BrandCard.displayName = "BrandCard";

const BrandsSection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            Authorized Dealer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-gradient">
            हमारे ब्रांड पार्टनर्स
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            All Top Mobile Brands at Best Prices
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 max-w-3xl mx-auto">
          {brands.map((brand, index) => (
            <BrandCard key={brand.name} brand={brand} index={index} />
          ))}
        </div>

        <motion.p
          className="text-center mt-12 text-muted-foreground text-sm md:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          और भी कई ब्रांड्स उपलब्ध हैं • <span className="text-primary">Contact for more</span>
        </motion.p>
      </div>
    </section>
  );
};

export default BrandsSection;
