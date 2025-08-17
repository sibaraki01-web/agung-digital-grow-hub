import ServiceCard from "./ServiceCard";
import socialMediaImage from "@/assets/social-media-service.jpg";

const SocialMediaSection = () => {
  const basicFeatures = [
    "Total 25 Konten",
    "20 Desain Feed",
    "4 Video Reels",
    "3 Carousel",
    "Revisi up to 3x per desain",
    "Free Caption Copywriting",
    "Free Optimasi Hashtag",
    "Bahan materi dari klien atau bisa pakai AI"
  ];

  const plusFeatures = [
    "Total 30 Konten",
    "22 Desain Feed",
    "8 Video Reels",
    "4 Carousel",
    "Revisi up to 3x per desain",
    "Free Caption Copywriting",
    "Free Optimasi Hashtag",
    "Bahan materi dari klien atau bisa pakai AI"
  ];

  return (
    <section id="social-media" className="section-spacing px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Jasa Kelola Media Sosial
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Bantu bisnis Anda tampil konsisten & profesional di Instagram. 
            Kelola konten tanpa ribet, cukup serahkan pada kami.
          </p>
          <img 
            src={socialMediaImage} 
            alt="Jasa Kelola Media Sosial" 
            className="w-full max-w-2xl mx-auto rounded-2xl shadow-lg"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <ServiceCard
              title="Paket Basic"
              price="Rp1.280.000"
              features={basicFeatures}
            />
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <ServiceCard
              title="Paket Plus"
              price="Rp1.480.000"
              features={plusFeatures}
              popular={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;