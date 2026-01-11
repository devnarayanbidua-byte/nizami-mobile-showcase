import { memo, useState } from "react";
import mobileRepairImg from "@/assets/mobile-repair.jpg";
import repairToolsImg from "@/assets/repair-tools.jpg";
import mobilePartsImg from "@/assets/mobile-parts.jpg";

const galleryItems = [
  { image: mobileRepairImg, title: "Expert Repairs", subtitle: "एक्सपर्ट रिपेयरिंग" },
  { image: repairToolsImg, title: "Professional Tools", subtitle: "प्रोफेशनल टूल्स" },
  { image: mobilePartsImg, title: "Original Parts", subtitle: "ओरिजनल पार्ट्स" },
];

const GalleryCard = memo(({ item }: { item: typeof galleryItems[0] }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="group relative overflow-hidden rounded-2xl hover:scale-[1.02] transition-transform duration-300">
      <div className="aspect-square md:aspect-[4/3] overflow-hidden">
        {!loaded && <div className="absolute inset-0 bg-secondary animate-pulse" />}
        <img
          src={item.image}
          alt={item.title}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          loading="lazy"
          onLoad={() => setLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
          <p className="text-primary text-sm">{item.subtitle}</p>
        </div>
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-2xl transition-colors duration-300" />
      </div>
    </div>
  );
});
GalleryCard.displayName = "GalleryCard";

const GallerySection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            Our Workshop
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-gradient">
            हमारी वर्कशॉप
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Professional Equipment & Expert Service
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 max-w-5xl mx-auto">
          {galleryItems.map((item) => (
            <GalleryCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
