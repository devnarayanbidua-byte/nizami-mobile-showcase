import { motion } from "framer-motion";
import { Smartphone, ChevronDown, Wifi, Battery, Signal, Zap } from "lucide-react";
import { Button } from "./ui/button";

// Floating mobile phone component
const FloatingPhone = ({ delay, x, y, rotate }: { delay: number; x: string; y: string; rotate: number }) => (
  <motion.div
    className="absolute opacity-10"
    style={{ left: x, top: y }}
    initial={{ opacity: 0, scale: 0, rotate: rotate - 20 }}
    animate={{ 
      opacity: [0.05, 0.15, 0.05],
      scale: [0.8, 1, 0.8],
      rotate: [rotate - 5, rotate + 5, rotate - 5],
      y: [0, -20, 0]
    }}
    transition={{
      duration: 6,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <div className="w-16 h-28 md:w-20 md:h-36 rounded-xl border-2 border-primary/30 bg-gradient-to-b from-primary/5 to-primary/10 relative overflow-hidden">
      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-6 h-1 bg-primary/30 rounded-full" />
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 border border-primary/30 rounded-full" />
    </div>
  </motion.div>
);

// Animated circuit lines
const CircuitLine = ({ path, delay }: { path: string; delay: number }) => (
  <motion.svg
    className="absolute w-full h-full opacity-20"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
  >
    <motion.path
      d={path}
      stroke="hsl(45 100% 50%)"
      strokeWidth="0.2"
      fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: [0, 0.5, 0] }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  </motion.svg>
);

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated tech grid background */}
      <div className="absolute inset-0 tech-grid opacity-50" />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large glowing orbs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.35, 0.15],
            x: [0, -40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating mobile phones */}
        <FloatingPhone delay={0} x="10%" y="20%" rotate={-15} />
        <FloatingPhone delay={1} x="85%" y="15%" rotate={20} />
        <FloatingPhone delay={2} x="5%" y="70%" rotate={10} />
        <FloatingPhone delay={1.5} x="90%" y="65%" rotate={-25} />
        <FloatingPhone delay={0.5} x="75%" y="45%" rotate={5} />
        <FloatingPhone delay={2.5} x="20%" y="55%" rotate={-10} />

        {/* Animated icons floating */}
        <motion.div
          className="absolute top-1/4 left-1/4"
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 10, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
        >
          <Wifi className="w-8 h-8 text-primary" />
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-1/4"
          animate={{ 
            y: [0, 25, 0],
            rotate: [0, -15, 0],
            opacity: [0.1, 0.25, 0.1]
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        >
          <Battery className="w-10 h-10 text-primary" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 left-1/3"
          animate={{ 
            y: [0, -20, 0],
            x: [0, 10, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 1.5 }}
        >
          <Signal className="w-6 h-6 text-accent" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 right-1/3"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.8 }}
        >
          <Zap className="w-8 h-8 text-primary" />
        </motion.div>

        {/* Circuit lines */}
        <CircuitLine path="M0,30 L30,30 L30,50 L60,50 L60,70 L100,70" delay={0} />
        <CircuitLine path="M100,20 L70,20 L70,40 L40,40 L40,60 L0,60" delay={1.5} />
        <CircuitLine path="M50,0 L50,30 L80,30 L80,80 L50,80 L50,100" delay={3} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Icon with enhanced glow */}
          <motion.div
            className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 mb-8 relative"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              boxShadow: "0 0 60px hsl(45 100% 50% / 0.4), 0 0 100px hsl(45 100% 50% / 0.2)",
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-primary/20"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <Smartphone className="w-12 h-12 text-primary" />
          </motion.div>

          {/* Shop Name with enhanced styling */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-gradient drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            निज़ामी मोबाइल शॉप
          </motion.h1>

          {/* Owner Name with badge */}
          <motion.div
            className="flex items-center justify-center gap-2 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <span className="text-lg md:text-xl text-muted-foreground">by</span>
            <span className="px-4 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary font-semibold text-lg md:text-xl">
              Sahil Khan
            </span>
          </motion.div>

          {/* Tagline with better typography */}
          <motion.div
            className="mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-2xl md:text-3xl text-foreground/90 font-medium mb-4">
              आपकी मोबाइल जरूरतों का भरोसेमंद साथी
            </p>
            <div className="flex items-center justify-center gap-4 text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Sales
              </span>
              <span className="text-primary">•</span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Repairs
              </span>
              <span className="text-primary">•</span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Original Parts
              </span>
            </div>
          </motion.div>

          {/* CTA Button with enhanced glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Button
              size="lg"
              onClick={scrollToContact}
              className="text-xl px-10 py-7 font-semibold hover:scale-105 transition-all duration-300 relative overflow-hidden group"
              style={{
                boxShadow: "0 0 40px hsl(45 100% 50% / 0.3), 0 4px 20px hsl(45 100% 50% / 0.2)",
              }}
            >
              <span className="relative z-10">संपर्क करें</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              />
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span className="text-xs text-muted-foreground mb-2">Scroll Down</span>
          <ChevronDown className="w-8 h-8 text-primary/60" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
