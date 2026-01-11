import { Phone, MessageCircle, Instagram, MapPin, Clock, ChevronRight } from "lucide-react";
import { memo, useState } from "react";
import sahilKhanImg from "@/assets/sahil-khan.jpg";

const ContactCard = memo(({ 
  href, 
  gradient, 
  icon: Icon, 
  title, 
  subtitle, 
  shadow 
}: { 
  href: string; 
  gradient: string; 
  icon: typeof Phone; 
  title: string; 
  subtitle: string;
  shadow: string;
}) => (
  <a
    href={href}
    target={href.startsWith("http") ? "_blank" : undefined}
    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    className={`flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r ${gradient} cursor-pointer group hover:scale-[1.02] hover:translate-x-1 transition-all duration-300`}
    style={{ boxShadow: shadow }}
  >
    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
      <Icon className="w-6 h-6 text-white" />
    </div>
    <div className="flex-1 min-w-0">
      <h3 className="text-lg font-bold text-white truncate">{title}</h3>
      <p className="text-white/80 text-sm truncate">{subtitle}</p>
    </div>
    <ChevronRight className="w-5 h-5 text-white/70 group-hover:translate-x-1 transition-transform flex-shrink-0" />
  </a>
));
ContactCard.displayName = "ContactCard";

const ContactSection = () => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const phoneNumber = "8103267938";
  const whatsappLink = `https://wa.me/91${phoneNumber}?text=नमस्ते! मुझे निज़ामी मोबाइल शॉप से जानकारी चाहिए।`;
  const instagramLink = "https://www.instagram.com/nizami__mobaileshop_";

  return (
    <section id="contact" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-card/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-gradient">
            संपर्क करें
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Get in Touch Anytime
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto items-center">
          {/* Owner Photo Card */}
          <div className="order-2 lg:order-1">
            <div className="card-premium rounded-2xl p-5 text-center">
              <div className="relative w-36 h-36 md:w-44 md:h-44 mx-auto mb-4 rounded-full overflow-hidden gold-glow ring-4 ring-primary/20">
                {!imgLoaded && <div className="absolute inset-0 bg-secondary animate-pulse" />}
                <img
                  src={sahilKhanImg}
                  alt="Sahil Khan - Owner"
                  className={`w-full h-full object-cover object-center transition-opacity duration-300 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
                  loading="eager"
                  onLoad={() => setImgLoaded(true)}
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gradient mb-1">Sahil Khan</h3>
              <p className="text-muted-foreground text-sm mb-2">Shop Owner</p>
              <p className="text-foreground/80 italic text-sm">"आपकी सेवा में हमेशा तत्पर"</p>
              
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-xs">
                  <Clock className="w-3 h-3 text-primary" />
                  <span className="text-muted-foreground">10 AM - 9 PM</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-xs">
                  <MapPin className="w-3 h-3 text-primary" />
                  <span className="text-muted-foreground">Contact for address</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Cards */}
          <div className="order-1 lg:order-2 space-y-3">
            <ContactCard
              href={`tel:+91${phoneNumber}`}
              gradient="from-blue-600 to-blue-700"
              icon={Phone}
              title="कॉल करें"
              subtitle={`+91 ${phoneNumber}`}
              shadow="0 8px 30px rgba(59, 130, 246, 0.3)"
            />
            <ContactCard
              href={whatsappLink}
              gradient="from-green-500 to-green-600"
              icon={MessageCircle}
              title="WhatsApp चैट"
              subtitle="Instant Reply • 24/7"
              shadow="0 8px 30px rgba(34, 197, 94, 0.3)"
            />
            <ContactCard
              href={instagramLink}
              gradient="from-purple-500 via-pink-500 to-orange-500"
              icon={Instagram}
              title="Instagram फॉलो करें"
              subtitle="@nizami__mobaileshop_"
              shadow="0 8px 30px rgba(236, 72, 153, 0.3)"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
