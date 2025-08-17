import ServiceCard from "./ServiceCard";
import adsImage from "@/assets/ads-service.jpg";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

const AdsSection = () => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });
  const adsFeatures = [
    "Planning Goal",
    "Setting Target Market / Audience",
    "Plan Ads Objective & Content Type",
    "Setup iklan, target market, schedule & budget",
    "Report & Evaluasi",
    "Biaya iklan tidak termasuk"
  ];

  return (
    <section id="ads" className="section-spacing px-4">
      <div ref={ref} className="container mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isIntersecting ? 'animate-fade-in-up' : 'opacity-0 transform translate-y-10'}`}>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Jasa Iklan Media Sosial
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Tingkatkan jangkauan, tarik calon pelanggan baru. 
            Strategi iklan terarah untuk hasil yang lebih maksimal.
          </p>
          <img 
            src={adsImage} 
            alt="Jasa Iklan Media Sosial" 
            className="w-full max-w-2xl mx-auto rounded-2xl shadow-lg"
          />
        </div>

        <div className={`max-w-md mx-auto transition-all duration-1000 ${isIntersecting ? 'animate-fade-in-up' : 'opacity-0 transform translate-y-10'}`} style={{ animationDelay: "0.2s" }}>
          <ServiceCard
            title="Iklan IG + FB"
            price="Rp390.000"
            badge="bulan"
            features={adsFeatures}
          />
        </div>
      </div>
    </section>
  );
};

export default AdsSection;
