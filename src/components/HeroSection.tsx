import { Smartphone, ChevronDown, Shield, Award, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { memo, useEffect, useState } from "react";

// Static floating phone - CSS only animation for performance
const FloatingPhone = memo(({ x, y, scale = 1, animDelay }: { x: string; y: string; scale?: number; animDelay: string }) => (
  <div
    className="absolute gpu-accelerated animate-float opacity-20"
    style={{ left: x, top: y, animationDelay: animDelay }}
  >
    <div 
      className="rounded-2xl bg-gradient-to-b from-primary/15 to-primary/5 border border-primary/20"
      style={{ width: `${60 * scale}px`, height: `${110 * scale}px` }}
    >
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-primary/30 rounded-full" />
      <div className="absolute inset-2 top-5 rounded-md bg-secondary/50" />
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-5 h-5 border border-primary/30 rounded-full" />
    </div>
  </div>
));
FloatingPhone.displayName = "FloatingPhone";

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-background" />
      <div className="absolute inset-0 tech-grid opacity-30" />
      
      {/* Radial glow effects */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/8 rounded-full blur-[80px]" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/8 rounded-full blur-[60px]" />
      
      {/* Floating phones - CSS only */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <FloatingPhone x="10%" y="20%" scale={0.8} animDelay="0s" />
        <FloatingPhone x="85%" y="15%" scale={1} animDelay="1s" />
        <FloatingPhone x="80%" y="60%" scale={0.7} animDelay="2s" />
        <FloatingPhone x="8%" y="65%" scale={0.9} animDelay="1.5s" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center max-w-4xl mx-auto transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Premium badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Trusted Since Years</span>
          </div>

          {/* Main Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 mb-5 premium-border gold-glow">
            <Smartphone className="w-8 h-8 text-primary" />
          </div>

          {/* Shop Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 text-gradient-animate tracking-tight">
            निज़ामी मोबाइल शॉप
          </h1>

          {/* Owner Badge */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-primary/50" />
            <span className="text-muted-foreground text-sm">by</span>
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-primary/15 to-accent/10 border border-primary/20 text-primary font-semibold text-sm">
              Sahil Khan
            </span>
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-primary/50" />
          </div>

          {/* Tagline */}
          <p className="text-lg sm:text-xl md:text-2xl text-foreground/90 font-medium mb-6">
            आपकी मोबाइल जरूरतों का भरोसेमंद साथी
          </p>

          {/* Features row */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8 text-sm">
            {[
              { icon: Smartphone, label: "Premium Sales" },
              { icon: Shield, label: "Original Parts" },
              { icon: Clock, label: "Quick Repairs" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-muted-foreground">
                <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-3.5 h-3.5 text-primary" />
                </div>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Button
            size="lg"
            onClick={scrollToContact}
            className="text-base px-6 py-5 font-semibold gold-glow hover:gold-glow-intense transition-all duration-300 hover:scale-105"
          >
            संपर्क करें
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 animate-bounce">
          <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-4 h-4 text-primary/60" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
