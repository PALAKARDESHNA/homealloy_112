import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, MapPin, Home } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const bookingsData = {
  upcoming: [
    {
      id: 1,
      service: "AC Service & Repair",
      date: "Dec 28, 2024",
      time: "02:00 PM",
      address: "123 Main Street, Ahmedabad",
      status: "confirmed",
      price: 349
    },
    {
      id: 2,
      service: "Full Home Deep Cleaning",
      date: "Dec 30, 2024",
      time: "10:00 AM",
      address: "123 Main Street, Ahmedabad",
      status: "confirmed",
      price: 1499
    }
  ],
  completed: [
    {
      id: 3,
      service: "Hair Care Package",
      date: "Dec 20, 2024",
      time: "03:00 PM",
      address: "123 Main Street, Ahmedabad",
      status: "completed",
      price: 599
    }
  ]
};

const Bookings = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("upcoming");

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="p-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-bold">My Bookings</h1>
        </div>
      </div>

      <div className="p-4">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-3 animate-slide-up">
            {bookingsData.upcoming.map((booking) => (
              <div key={booking.id} className="glass rounded-2xl p-4 shadow-soft">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">{booking.service}</h3>
                    <Badge className="bg-primary/10 text-primary">
                      {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                    </Badge>
                  </div>
                  <span className="text-primary font-bold">₹{booking.price}</span>
                </div>

                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{booking.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{booking.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{booking.address}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1 rounded-xl">
                    Reschedule
                  </Button>
                  <Button variant="destructive" className="flex-1 rounded-xl">
                    Cancel
                  </Button>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="completed" className="space-y-3 animate-slide-up">
            {bookingsData.completed.map((booking) => (
              <div key={booking.id} className="glass rounded-2xl p-4 shadow-soft">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">{booking.service}</h3>
                    <Badge className="bg-green-500/10 text-green-600">
                      Completed
                    </Badge>
                  </div>
                  <span className="text-primary font-bold">₹{booking.price}</span>
                </div>

                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{booking.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{booking.time}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1 rounded-xl">
                    Book Again
                  </Button>
                  <Button className="flex-1 rounded-xl gradient-primary">
                    Rate Service
                  </Button>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-xl border-t border-border/50">
        <div className="flex items-center justify-around p-4">
          <Link to="/home" className="flex flex-col items-center gap-1 text-muted-foreground">
            <Home className="w-6 h-6" />
            <span className="text-xs">Home</span>
          </Link>
          <Link to="/bookings" className="flex flex-col items-center gap-1 text-primary">
            <Calendar className="w-6 h-6" />
            <span className="text-xs font-medium">Bookings</span>
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

export default Bookings;
