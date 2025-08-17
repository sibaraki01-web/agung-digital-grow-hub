import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

const CTASection = () => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });
  const openWhatsApp = () => {
    window.open("https://wa.me/628978898454?text=Hallo%20Kak%20Admin,%20Saya%20Berminat%20dengan%20Paket%20Digital%20Marketingnya.%20Bisa%20konsultasi%3F", "_blank");
  };

  return (
    <section id="contact" className="section-spacing px-4 bg-primary/5">
      <div ref={ref} className="container mx-auto text-center">
        <div className={`max-w-3xl mx-auto transition-all duration-1000 ${isIntersecting ? 'animate-fade-in-up' : 'opacity-0 transform translate-y-10'}`}>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Siap Tingkatkan Bisnis Anda?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Konsultasi gratis untuk menentukan strategi digital marketing untuk bisnis Anda. 
            Kami siap membantu mewujudkan goals bisnis Anda.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={openWhatsApp}
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-xl flex items-center gap-3"
            >
              <MessageCircle className="h-6 w-6" />
              Hubungi Admin
            </Button>
            
            <Button 
              onClick={openWhatsApp}
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg rounded-xl border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground flex items-center gap-3"
            >
              <Phone className="h-6 w-6" />
              Konsultasi Gratis
            </Button>
            <Button asChild>
              <a href="https://api.whatsapp.com/send/?phone=628978898454&text=Hallo%20Kak%20Admin,%20Saya%20Berminat%20dengan%20Paket%20Digital%20Marketingnya.%20Bisa%20konsultasi%3F" target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </Button>
          </div>
          
          <div className="mt-8 text-sm text-muted-foreground">
            <p>WhatsApp: +62 897-8898-454</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
