import ServiceCard from "./ServiceCard";
import websiteImage from "@/assets/website-service.jpg";

const WebsiteSection = () => {
  const websiteFeatures = [
    "Free Hosting",
    "Free Domain",
    "Design Responsif (Mobile & Desktop)",
    "Optimasi SEO Dasar",
    "Setup Complete",
    "Support & Maintenance",
    "Perpanjangan tahunan Rp290.000"
  ];

  return (
    <section id="website" className="section-spacing px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Jasa Pembuatan Website
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Punya website sendiri, tampil lebih dipercaya. 
            Solusi website sederhana, cepat, dan terjangkau.
          </p>
          <img 
            src={websiteImage} 
            alt="Jasa Pembuatan Website" 
            className="w-full max-w-2xl mx-auto rounded-2xl shadow-lg"
          />
        </div>

        <div className="max-w-md mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <ServiceCard
            title="Website UMKM"
            price="Rp490.000"
            features={websiteFeatures}
          />
        </div>
      </div>
    </section>
  );
};

export default WebsiteSection;