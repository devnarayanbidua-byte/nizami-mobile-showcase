import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-border/50 bg-card/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Smartphone className="w-5 h-5 text-primary" />
            </div>
            <span className="text-xl font-bold text-gradient">
              निज़ामी मोबाइल शॉप
            </span>
          </div>
          
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Nizami Mobile Shop. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            Made with ❤️ by Sahil Khan
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
