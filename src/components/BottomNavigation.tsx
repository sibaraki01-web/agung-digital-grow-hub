import { Home, Users, Megaphone, Globe, MessageCircle } from "lucide-react";

const BottomNavigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/628978898454", "_blank");
  };

  const navigation = [
    { name: "Beranda", icon: Home, action: () => scrollToSection("hero") },
    { name: "Kelola", icon: Users, action: () => scrollToSection("social-media") },
    { name: "Iklan", icon: Megaphone, action: () => scrollToSection("ads") },
    { name: "Website", icon: Globe, action: () => scrollToSection("website") },
    { name: "Hubungi", icon: MessageCircle, action: openWhatsApp },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border md:hidden z-50">
      <div className="flex justify-around items-center py-2">
        {navigation.map((item) => (
          <button
            key={item.name}
            onClick={item.action}
            className="flex flex-col items-center justify-center p-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <item.icon className="h-5 w-5 mb-1" />
            <span className="text-xs">{item.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomNavigation;