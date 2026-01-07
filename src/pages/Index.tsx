import HeroSection from "@/components/HeroSection";
import BrandsSection from "@/components/BrandsSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <BrandsSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
