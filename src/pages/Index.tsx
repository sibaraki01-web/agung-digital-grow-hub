import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";
import HeroSection from "@/components/HeroSection";
import SocialMediaSection from "@/components/SocialMediaSection";
import AdsSection from "@/components/AdsSection";
import WebsiteSection from "@/components/WebsiteSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <SocialMediaSection />
        <AdsSection />
        <WebsiteSection />
        <CTASection />
      </main>
      <Footer />
      <BottomNavigation />
    </div>
  );
};

export default Index;
