import { MessageCircle, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/628978898454", "_blank");
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4 hidden md:block">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Agung Digital</h3>
            <p className="text-primary-foreground/80 mb-4">
              Solusi digital marketing terpercaya untuk UMKM. 
              Membantu bisnis Anda berkembang di era digital.
            </p>
            <button 
              onClick={openWhatsApp}
              className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              +62 897-8898-454
            </button>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Layanan Kami</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Kelola Media Sosial</li>
              <li>Iklan Facebook & Instagram</li>
              <li>Pembuatan Website</li>
              <li>Konsultasi Digital Marketing</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                info@agungdigital.com
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Indonesia
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 Agung Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;