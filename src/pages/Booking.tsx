import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, MapPin, IndianRupee } from "lucide-react";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { toast } from "sonner";

const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
];

const Booking = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [address, setAddress] = useState("123 Main Street, Ahmedabad");
  const [loading, setLoading] = useState(false);

  const handleBooking = () => {
    if (!date || !selectedTime) {
      toast.error("Please select date and time");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Booking confirmed!");
      navigate("/bookings");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="p-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-bold">Book Service</h1>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Service Summary */}
        <div className="glass rounded-2xl p-4 shadow-soft animate-slide-up">
          <h3 className="font-semibold mb-2">Premium Service</h3>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Duration: 60 mins</span>
            <span className="flex items-center text-primary font-bold">
              <IndianRupee className="w-4 h-4" />
              599
            </span>
          </div>
        </div>

        {/* Address */}
        <div className="glass rounded-2xl p-4 shadow-soft animate-slide-up" style={{ animationDelay: '100ms' }}>
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-primary mt-1" />
            <div className="flex-1">
              <h4 className="font-semibold mb-1">Service Address</h4>
              <p className="text-sm text-muted-foreground">{address}</p>
              <Button variant="link" className="h-auto p-0 text-primary text-sm mt-2">
                Change Address
              </Button>
            </div>
          </div>
        </div>

        {/* Date Selection */}
        <div className="glass rounded-2xl p-4 shadow-soft animate-slide-up" style={{ animationDelay: '200ms' }}>
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-5 h-5 text-primary" />
            <h4 className="font-semibold">Select Date</h4>
          </div>
          <CalendarComponent
            mode="single"
            selected={date}
            onSelect={setDate}
            disabled={(date) => date < new Date()}
            className="rounded-xl border-0"
          />
        </div>

        {/* Time Selection */}
        <div className="glass rounded-2xl p-4 shadow-soft animate-slide-up" style={{ animationDelay: '300ms' }}>
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-primary" />
            <h4 className="font-semibold">Select Time</h4>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`p-2 rounded-xl text-xs font-medium transition-all ${
                  selectedTime === time
                    ? 'bg-primary text-primary-foreground shadow-soft'
                    : 'bg-muted hover:bg-muted/80'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-xl border-t border-border/50 p-4">
        <Button
          onClick={handleBooking}
          disabled={loading || !date || !selectedTime}
          className="w-full h-14 rounded-2xl gradient-primary text-white font-semibold shadow-soft hover:shadow-glow transition-all"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            "Confirm Booking"
          )}
        </Button>
      </div>
    </div>
  );
};

export default Booking;
