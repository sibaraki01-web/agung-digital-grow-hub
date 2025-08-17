import ServiceCard from "./ServiceCard";
import websiteImage from "@/assets/website-service.jpg";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

const WebsiteSection = () => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });
  const websiteFeatures = [
    "Free Hosting",
    "Free Domain",
    "Design Responsif (Mobile & Desktop)",
    "Optimasi SEO Dasar",
    "Setup Complete",
    "Support & Maintenance",
    "Perpanjangan tahunan Rp190.000"
  ];

  return (
    <section id="website" className="section-spacing px-4 bg-secondary/30">
      <div ref={ref} className="container mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isIntersecting ? 'animate-fade-in-up' : 'opacity-0 transform translate-y-10'}`}>
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

        <div className={`max-w-md mx-auto transition-all duration-1000 ${isIntersecting ? 'animate-fade-in-up' : 'opacity-0 transform translate-y-10'}`} style={{ animationDelay: "0.2s" }}>
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
