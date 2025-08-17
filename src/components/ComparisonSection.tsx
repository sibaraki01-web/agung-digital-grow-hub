import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

const ComparisonSection = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/628978898454", "_blank");
  };

  const features = [
    { name: "Total Konten", basic: "25 Konten", plus: "30 Konten" },
    { name: "Desain Feed", basic: "20 Feed", plus: "22 Feed" },
    { name: "Video Reels", basic: "4 Reels", plus: "8 Reels" },
    { name: "Carousel", basic: "3 Carousel", plus: "4 Carousel" },
    { name: "Revisi", basic: "Up to 3x", plus: "Up to 3x" },
    { name: "Caption Copywriting", basic: true, plus: true },
    { name: "Optimasi Hashtag", basic: true, plus: true },
    { name: "Bahan Materi", basic: "Klien/AI", plus: "Klien/AI" }
  ];

  return (
    <section className="section-spacing px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Perbandingan Paket Kelola Media Sosial
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan bisnis Anda
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <CardHeader className="text-center border-b">
                <CardTitle className="text-2xl">Paket Basic</CardTitle>
                <div className="text-3xl font-bold text-primary">Rp1.280.000</div>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center justify-between">
                      <span className="font-medium">{feature.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {typeof feature.basic === 'boolean' ? (
                          feature.basic ? <Check className="h-4 w-4 text-green-500" /> : <X className="h-4 w-4 text-red-500" />
                        ) : (
                          feature.basic
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={openWhatsApp}
                  className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl"
                  size="lg"
                >
                  Pilih Basic
                </Button>
              </CardContent>
            </Card>

            <Card className="border-primary shadow-lg animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <CardHeader className="text-center border-b bg-primary/5">
                <CardTitle className="text-2xl">Paket Plus</CardTitle>
                <div className="text-3xl font-bold text-primary">Rp1.480.000</div>
                <div className="text-sm text-primary font-medium">Paling Populer</div>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center justify-between">
                      <span className="font-medium">{feature.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {typeof feature.plus === 'boolean' ? (
                          feature.plus ? <Check className="h-4 w-4 text-green-500" /> : <X className="h-4 w-4 text-red-500" />
                        ) : (
                          feature.plus
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={openWhatsApp}
                  className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl"
                  size="lg"
                >
                  Pilih Plus
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;