import { motion } from "framer-motion";
import { memo } from "react";
import mobileRepairImg from "@/assets/mobile-repair.jpg";
import repairToolsImg from "@/assets/repair-tools.jpg";
import mobilePartsImg from "@/assets/mobile-parts.jpg";

const galleryItems = [
  {
    image: mobileRepairImg,
    title: "Expert Repairs",
    subtitle: "एक्सपर्ट रिपेयरिंग",
  },
  {
    image: repairToolsImg,
    title: "Professional Tools",
    subtitle: "प्रोफेशनल टूल्स",
  },
  {
    image: mobilePartsImg,
    title: "Original Parts",
    subtitle: "ओरिजनल पार्ट्स",
  },
];

const GalleryCard = memo(({ item, index }: { item: typeof galleryItems[0]; index: number }) => (
  <motion.div
    className="group relative overflow-hidden rounded-2xl"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
  >
    <motion.div
      className="aspect-square md:aspect-[4/3] overflow-hidden"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
        <h3 className="text-lg md:text-xl font-bold text-foreground">{item.title}</h3>
        <p className="text-primary text-sm md:text-base">{item.subtitle}</p>
      </div>
      
      {/* Hover border */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-2xl transition-colors duration-300" />
    </motion.div>
  </motion.div>
));
GalleryCard.displayName = "GalleryCard";

const GallerySection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            Our Workshop
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-gradient">
            हमारी वर्कशॉप
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Professional Equipment & Expert Service
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {galleryItems.map((item, index) => (
            <GalleryCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
