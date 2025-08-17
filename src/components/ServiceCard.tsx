import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface ServiceCardProps {
  title: string;
  price: string;
  description?: string;
  features: string[];
  badge?: string;
  popular?: boolean;
}

const ServiceCard = ({ title, price, description, features, badge, popular }: ServiceCardProps) => {
  const openWhatsApp = () => {
    window.open("https://wa.me/628978898454", "_blank");
  };

  return (
    <Card className={`relative transition-all duration-300 hover:shadow-lg ${popular ? 'border-primary shadow-md' : ''}`}>
      {popular && (
        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
          Paling Populer
        </Badge>
      )}
      
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">{title}</CardTitle>
        {description && (
          <CardDescription className="text-base">{description}</CardDescription>
        )}
        <div className="text-3xl font-bold text-primary">
          {price}
          {badge && <span className="text-sm text-muted-foreground font-normal">/{badge}</span>}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button 
          onClick={openWhatsApp}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl"
          size="lg"
        >
          Pesan Sekarang
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;