import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star, Clock, IndianRupee } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const services = [
  { id: 1, name: "Basic Service", price: 349, duration: "45 mins", rating: 4.8, reviews: 1234 },
  { id: 2, name: "Premium Service", price: 599, duration: "60 mins", rating: 4.9, reviews: 856, badge: "Popular" },
  { id: 3, name: "Deluxe Package", price: 899, duration: "90 mins", rating: 4.7, reviews: 543 },
  { id: 4, name: "Express Service", price: 449, duration: "30 mins", rating: 4.6, reviews: 678 },
];

const ServiceList = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const categoryName = category?.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="p-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-bold">{categoryName}</h1>
        </div>
      </div>

      {/* Services List */}
      <div className="p-4">
        <div className="space-y-3 animate-slide-up">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`glass rounded-2xl p-4 shadow-soft transition-all cursor-pointer ${
                selectedService === service.id ? 'ring-2 ring-primary shadow-glow' : ''
              }`}
              onClick={() => setSelectedService(service.id)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold">{service.name}</h3>
                    {service.badge && (
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                        {service.badge}
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {service.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                      {service.rating} ({service.reviews})
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-primary font-bold text-lg">
                    <IndianRupee className="w-4 h-4" />
                    {service.price}
                  </div>
                </div>
              </div>

              <div className="flex gap-2 text-xs text-muted-foreground">
                <Badge variant="secondary">Safe & Hygienic</Badge>
                <Badge variant="secondary">Trained Professionals</Badge>
              </div>
            </div>
          ))}
        </div>

        {/* Details Section */}
        <div className="mt-6 glass rounded-2xl p-6 shadow-soft">
          <h3 className="font-semibold mb-4">What's Included</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Professional service by trained experts</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>High-quality products and equipment</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>30-day warranty on services</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Flexible rescheduling available</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-xl border-t border-border/50 p-4">
        <Link to="/booking">
          <Button
            disabled={!selectedService}
            className="w-full h-14 rounded-2xl gradient-primary text-white font-semibold shadow-soft hover:shadow-glow transition-all"
          >
            Continue to Book
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceList;
