import { motion } from "framer-motion";

const brands = [
  {
    name: "Apple iPhone",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    name: "Samsung",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
  },
  {
    name: "Vivo",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/13/Vivo_logo_2019.svg",
  },
  {
    name: "OPPO",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0a/OPPO_LOGO_2019.svg",
  },
  {
    name: "Realme",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Realme_logo.svg",
  },
];

const BrandsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            हमारे ब्रांड पार्टनर्स
          </h2>
          <p className="text-muted-foreground text-lg">
            All Top Brands Available
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              className="group relative"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl bg-card border border-border/50 flex items-center justify-center p-6 card-glow hover:border-primary/50 transition-all duration-300 group-hover:scale-110 group-hover:gold-glow">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-full object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <motion.p
                className="text-center mt-3 text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300"
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
      </div>
    </section>
  );
};

export default BrandsSection;
