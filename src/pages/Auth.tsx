import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowRight, Home, ChevronDown } from "lucide-react";
import { toast } from "sonner";

const countries = [
  { name: "India", code: "+91", flag: "🇮🇳" },
  { name: "United States", code: "+1", flag: "🇺🇸" },
  { name: "United Kingdom", code: "+44", flag: "🇬🇧" },
  { name: "Canada", code: "+1", flag: "🇨🇦" },
  { name: "Australia", code: "+61", flag: "🇦🇺" },
  { name: "Germany", code: "+49", flag: "🇩🇪" },
  { name: "France", code: "+33", flag: "🇫🇷" },
  { name: "Japan", code: "+81", flag: "🇯🇵" },
  { name: "China", code: "+86", flag: "🇨🇳" },
  { name: "Brazil", code: "+55", flag: "🇧🇷" },
  { name: "UAE", code: "+971", flag: "🇦🇪" },
  { name: "Singapore", code: "+65", flag: "🇸🇬" },
];

const Auth = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleSendOtp = () => {
    if (phoneNumber.length !== 10) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }
    
    setLoading(true);
    
    // Simulate OTP send
    setTimeout(() => {
      setLoading(false);
      setShowOtp(true);
      toast.success("OTP sent successfully!");
    }, 1500);
  };

  const handleVerifyOtp = () => {
    if (otp.length !== 6) {
      toast.error("Please enter a valid 6-digit OTP");
      return;
    }
    
    setLoading(true);
    
    // Simulate OTP verification
    setTimeout(() => {
      setLoading(false);
      toast.success("Login successful!");
      navigate("/home");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex flex-col">
      {/* Header */}
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
          <Home className="w-5 h-5 text-primary-foreground" />
        </div>
        <span className="text-xl font-bold text-foreground">Homealloy</span>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md animate-slide-up">
          <div className="glass rounded-3xl p-8 shadow-soft">
            <h2 className="text-3xl font-bold mb-2">Welcome</h2>
            <p className="text-muted-foreground mb-8">Sign in to continue</p>

            {!showOtp ? (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Mobile Number</label>
                  <div className="flex gap-2">
                    <Popover open={open} onOpenChange={setOpen}>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-20 h-12 rounded-xl border-border bg-muted/50 hover:bg-muted flex items-center justify-between px-3"
                        >
                          <span className="text-sm font-medium">{selectedCountry.code}</span>
                          <ChevronDown className="w-4 h-4 opacity-50" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-72 p-0" align="start">
                        <ScrollArea className="h-72">
                          <div className="p-2">
                            {countries.map((country) => (
                              <button
                                key={country.code + country.name}
                                onClick={() => {
                                  setSelectedCountry(country);
                                  setOpen(false);
                                }}
                                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-accent transition-colors text-left"
                              >
                                <span className="text-2xl">{country.flag}</span>
                                <div className="flex-1">
                                  <div className="text-sm font-medium">{country.name}</div>
                                  <div className="text-xs text-muted-foreground">{country.code}</div>
                                </div>
                              </button>
                            ))}
                          </div>
                        </ScrollArea>
                      </PopoverContent>
                    </Popover>
                    <Input
                      type="tel"
                      placeholder="Enter mobile number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                      maxLength={10}
                      className="flex-1 h-12 rounded-xl border-border"
                    />
                  </div>
                </div>

                <Button
                  onClick={handleSendOtp}
                  disabled={loading || phoneNumber.length !== 10}
                  className="w-full h-12 rounded-xl gradient-primary text-white font-medium shadow-soft hover:shadow-glow transition-all"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Send OTP <ArrowRight className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>
              </div>
            ) : (
              <div className="space-y-6 animate-slide-up">
                <div>
                  <label className="block text-sm font-medium mb-2">Enter OTP</label>
                  <p className="text-sm text-muted-foreground mb-4">
                    We've sent a code to {selectedCountry.code} {phoneNumber}
                  </p>
                  <Input
                    type="text"
                    placeholder="Enter 6-digit OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                    maxLength={6}
                    className="h-12 rounded-xl border-border text-center text-2xl tracking-widest"
                  />
                </div>

                <Button
                  onClick={handleVerifyOtp}
                  disabled={loading || otp.length !== 6}
                  className="w-full h-12 rounded-xl gradient-primary text-white font-medium shadow-soft hover:shadow-glow transition-all"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Verify & Continue <ArrowRight className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>

                <button
                  onClick={() => setShowOtp(false)}
                  className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Change mobile number
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
