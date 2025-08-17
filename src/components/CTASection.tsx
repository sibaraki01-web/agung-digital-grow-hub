import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

const CTASection = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/628978898454", "_blank");
  };

  return (
    <section id="contact" className="section-spacing px-4 bg-primary/5">
      <div className="container mx-auto text-center">
        <div className="max-w-3xl mx-auto animate-fade-in-up">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Siap Tingkatkan Bisnis Anda?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Konsultasi gratis untuk menentukan strategi digital marketing terbaik untuk bisnis Anda. 
            Tim ahli kami siap membantu mewujudkan goals bisnis Anda.
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
          </div>
          
          <div className="mt-8 text-sm text-muted-foreground">
            <p>WhatsApp: +62 897-8898-454</p>
            <p>Respon cepat dalam 5 menit</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;