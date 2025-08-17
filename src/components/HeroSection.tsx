import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/628978898454?text=Hallo%20Kak%20Admin,%20Saya%20Berminat%20dengan%20Paket%20Digital%20Marketingnya.%20Bisa%20konsultasi%3F", "_blank");
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Paket Jasa{" "}
                <span className="hero-gradient bg-clip-text text-transparent">
                  Marketing Digital
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Solusi lengkap digital marketing untuk bisnis Anda. Tingkatkan brand awareness,
                jangkauan pelanggan, dan penjualan Anda bersama kami.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={openWhatsApp}
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-xl"
              >
                Konsultasi Gratis
              </Button>
              <Button 
                onClick={() => {
                  document.getElementById("social-media")?.scrollIntoView({ behavior: "smooth" });
                }}
                variant="outline" 
                size="lg"
                className="px-8 py-6 text-lg rounded-xl border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Lihat Layanan
              </Button>
            </div>
          </div>
          
          <div className="animate-scale-in">
            <img 
              src={heroImage} 
              alt="Digital Marketing untuk UMKM" 
              className="w-full h-auto rounded-2xl shadow-lg floating-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
