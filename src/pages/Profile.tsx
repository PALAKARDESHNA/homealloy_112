import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  User, 
  MapPin, 
  Bell, 
  CreditCard, 
  HelpCircle, 
  Settings, 
  LogOut,
  ChevronRight,
  Home,
  Calendar
} from "lucide-react";
import { toast } from "sonner";

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.success("Logged out successfully");
    navigate("/auth");
  };

  const menuItems = [
    { icon: User, label: "Edit Profile", onClick: () => toast.info("Edit Profile") },
    { icon: MapPin, label: "Manage Addresses", onClick: () => toast.info("Manage Addresses") },
    { icon: CreditCard, label: "Payment Methods", onClick: () => toast.info("Payment Methods") },
    { icon: Bell, label: "Notifications", onClick: () => toast.info("Notifications") },
    { icon: HelpCircle, label: "Help & Support", onClick: () => toast.info("Help & Support") },
    { icon: Settings, label: "Settings", onClick: () => toast.info("Settings") },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="p-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-bold">Profile</h1>
        </div>
      </div>

      <div className="p-4">
        {/* Profile Header */}
        <div className="glass rounded-3xl p-6 shadow-soft mb-6 animate-slide-up">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-2xl">
              JD
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold">John Doe</h2>
              <p className="text-muted-foreground">+91 98765 43210</p>
              <p className="text-sm text-muted-foreground">john.doe@email.com</p>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="space-y-2 animate-slide-up" style={{ animationDelay: '100ms' }}>
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={item.onClick}
              className="w-full glass rounded-2xl p-4 flex items-center gap-4 shadow-soft hover:shadow-glow transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="flex-1 text-left font-medium">{item.label}</span>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          ))}
        </div>

        {/* Logout Button */}
        <Button
          onClick={handleLogout}
          variant="destructive"
          className="w-full mt-6 h-14 rounded-2xl font-semibold animate-slide-up"
          style={{ animationDelay: '200ms' }}
        >
          <LogOut className="w-5 h-5 mr-2" />
          Logout
        </Button>

        {/* App Info */}
        <div className="text-center mt-8 text-sm text-muted-foreground">
          <p>Homealloy v1.0.0</p>
          <p className="mt-1">Premium Home Services</p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-xl border-t border-border/50">
        <div className="flex items-center justify-around p-4">
          <Link to="/home" className="flex flex-col items-center gap-1 text-muted-foreground">
            <Home className="w-6 h-6" />
            <span className="text-xs">Home</span>
          </Link>
          <Link to="/bookings" className="flex flex-col items-center gap-1 text-muted-foreground">
            <Calendar className="w-6 h-6" />
            <span className="text-xs">Bookings</span>
          </Link>
          <Link to="/profile" className="flex flex-col items-center gap-1 text-primary">
            <User className="w-6 h-6" />
            <span className="text-xs font-medium">Account</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
