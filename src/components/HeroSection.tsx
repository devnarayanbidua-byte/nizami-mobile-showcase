import { motion } from "framer-motion";
import { Smartphone, ChevronDown, Shield, Award, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { memo } from "react";

// Optimized floating phone - memoized for performance
const FloatingPhone = memo(({ delay, x, y, scale = 1 }: { delay: number; x: string; y: string; scale?: number }) => (
  <motion.div
    className="absolute gpu-accelerated"
    style={{ left: x, top: y }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ 
      opacity: [0.15, 0.25, 0.15],
      y: [0, -15, 0],
    }}
    transition={{
      duration: 4,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <div 
      className="rounded-2xl bg-gradient-to-b from-primary/10 to-primary/5 border border-primary/20 backdrop-blur-sm overflow-hidden"
      style={{ 
        width: `${64 * scale}px`, 
        height: `${120 * scale}px`,
        boxShadow: "0 8px 32px hsl(45 100% 50% / 0.1)"
      }}
    >
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary/30 rounded-full" />
      <div className="absolute inset-3 top-6 rounded-lg bg-gradient-to-br from-secondary to-muted" />
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 border-2 border-primary/30 rounded-full" />
    </div>
  </motion.div>
));
FloatingPhone.displayName = "FloatingPhone";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-background" />
      <div className="absolute inset-0 tech-grid opacity-40" />
      
      {/* Radial glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] gpu-accelerated" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[80px] gpu-accelerated" />
      
      {/* Floating phones - reduced for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingPhone delay={0} x="8%" y="20%" scale={0.9} />
        <FloatingPhone delay={1.5} x="85%" y="18%" scale={1.1} />
        <FloatingPhone delay={0.8} x="78%" y="55%" scale={0.85} />
        <FloatingPhone delay={2} x="12%" y="60%" scale={1} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Premium badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Trusted Since Years</span>
          </motion.div>

          {/* Main Icon */}
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 mb-6 premium-border gold-glow"
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
          >
            <Smartphone className="w-10 h-10 text-primary" />
          </motion.div>

          {/* Shop Name */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 text-gradient-animate tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            निज़ामी मोबाइल शॉप
          </motion.h1>

          {/* Owner Badge */}
          <motion.div
            className="flex items-center justify-center gap-3 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
            <span className="text-muted-foreground">by</span>
            <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/15 to-accent/10 border border-primary/20 text-primary font-semibold">
              Sahil Khan
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl text-foreground/90 font-medium mb-6"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            आपकी मोबाइल जरूरतों का भरोसेमंद साथी
          </motion.p>

          {/* Features row */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-10 text-sm md:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {[
              { icon: Smartphone, label: "Premium Sales" },
              { icon: Shield, label: "Original Parts" },
              { icon: Clock, label: "Quick Repairs" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-muted-foreground">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>
                <span>{item.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Button
              size="lg"
              onClick={scrollToContact}
              className="text-lg px-8 py-6 font-semibold gold-glow hover:gold-glow-intense transition-all duration-300 hover:scale-105"
            >
              संपर्क करें
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ opacity: { delay: 1 }, y: { duration: 1.5, repeat: Infinity } }}
        >
          <span className="text-xs text-muted-foreground uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-5 h-5 text-primary/60" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
