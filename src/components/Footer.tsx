import { Smartphone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 md:py-10 border-t border-border/30 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
              <Smartphone className="w-4 h-4 text-primary" />
            </div>
            <span className="text-lg font-bold text-gradient">निज़ामी मोबाइल शॉप</span>
          </div>
          <p className="text-muted-foreground text-xs md:text-sm">
            © {new Date().getFullYear()} Nizami Mobile Shop. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs mt-1">
            Made with ❤️ by Sahil Khan
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
