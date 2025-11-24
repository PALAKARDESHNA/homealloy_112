import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Home,
  Search,
  Bell,
  Menu,
  Sparkles,
  Wrench,
  PaintBucket,
  Zap,
  ShowerHead,
  AirVent,
  Laptop,
  Sofa,
  ChevronRight,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";

const categories = [
  { name: "Salon for Women", icon: Sparkles, color: "from-pink-500 to-rose-500", services: "Hair, Makeup & more" },
  { name: "Appliance Repair", icon: Wrench, color: "from-blue-500 to-cyan-500", services: "AC, Washing Machine" },
  { name: "Painting", icon: PaintBucket, color: "from-orange-500 to-amber-500", services: "Interior & Exterior" },
  { name: "Electrician", icon: Zap, color: "from-yellow-500 to-orange-500", services: "Wiring, Fans & more" },
  { name: "Plumber", icon: ShowerHead, color: "from-blue-600 to-indigo-600", services: "Tap, Basin & more" },
  { name: "AC Service", icon: AirVent, color: "from-cyan-500 to-blue-600", services: "Repair & Installation" },
  { name: "Laptop Repair", icon: Laptop, color: "from-purple-500 to-indigo-500", services: "Software & Hardware" },
  { name: "Home Cleaning", icon: Home, color: "from-green-500 to-emerald-500", services: "Deep & Regular" },
];

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80">
                  <div className="py-6">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
                        JD
                      </div>
                      <div>
                        <p className="font-semibold">John Doe</p>
                        <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                      </div>
                    </div>

                    <nav className="space-y-2">
                      <Link to="/bookings" className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted transition-colors">
                        <Home className="w-5 h-5 text-primary" />
                        <span>My Bookings</span>
                      </Link>
                      <Link to="/profile" className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted transition-colors">
                        <Home className="w-5 h-5 text-primary" />
                        <span>Profile</span>
                      </Link>
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>

              <div>
                <p className="text-xs text-muted-foreground">Location</p>
                <p className="font-semibold">Ahmedabad</p>
              </div>
            </div>

            <Button variant="ghost" size="icon" className="rounded-full relative">
              <Bell className="w-5 h-5" />
              <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 bg-destructive text-[10px]">
                3
              </Badge>
            </Button>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-12 pl-12 pr-4 rounded-2xl border-border bg-muted/50"
            />
          </div>
        </div>
      </div>

      {/* Banner */}
      <div className="p-4">
        <div className="relative h-40 rounded-3xl overflow-hidden shadow-soft">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary opacity-90"></div>
          <div className="relative h-full flex items-center p-6">
            <div className="text-white">
              <h2 className="text-2xl font-bold mb-2">Welcome to Homealloy</h2>
              <p className="text-white/90 text-sm">Book trusted home services</p>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="p-4">
        <h3 className="text-xl font-bold mb-4">Our Services</h3>
        <div className="grid grid-cols-2 gap-3">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={`/services/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="group"
            >
              <div className="glass rounded-2xl p-4 shadow-soft hover:shadow-glow transition-all animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-1 text-sm">{category.name}</h4>
                <p className="text-xs text-muted-foreground">{category.services}</p>
                <ChevronRight className="w-4 h-4 text-muted-foreground mt-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Section */}
      <div className="p-4 mt-6">
        <h3 className="text-xl font-bold mb-4">Popular Choices</h3>
        <div className="space-y-3">
          {[
            { title: "AC Service & Repair", price: "₹349", rating: "4.8", image: "🔧" },
            { title: "Full Home Deep Cleaning", price: "₹1,499", rating: "4.9", image: "✨" },
            { title: "Hair Care Package", price: "₹599", rating: "4.7", image: "💇" },
          ].map((service, index) => (
            <Link key={index} to="/service-details" className="block">
              <div className="glass rounded-2xl p-4 flex items-center gap-4 shadow-soft hover:shadow-glow transition-all">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-2xl">
                  {service.image}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-1">{service.title}</h4>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-primary font-bold">{service.price}</span>
                    <span className="text-muted-foreground">⭐ {service.rating}</span>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-xl border-t border-border/50 safe-area-pb">
        <div className="flex items-center justify-around p-4">
          <Link to="/home" className="flex flex-col items-center gap-1 text-primary">
            <Home className="w-6 h-6" />
            <span className="text-xs font-medium">Home</span>
          </Link>
          <Link to="/bookings" className="flex flex-col items-center gap-1 text-muted-foreground">
            <Sofa className="w-6 h-6" />
            <span className="text-xs">Bookings</span>
          </Link>
          <Link to="/profile" className="flex flex-col items-center gap-1 text-muted-foreground">
            <Home className="w-6 h-6" />
            <span className="text-xs">Account</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
