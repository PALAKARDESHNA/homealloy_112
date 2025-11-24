import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Home } from "lucide-react";
import { toast } from "sonner";

const Auth = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [loading, setLoading] = useState(false);
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
                    <div className="w-16 h-12 rounded-xl border border-border flex items-center justify-center bg-muted/50">
                      <span className="text-sm font-medium">+91</span>
                    </div>
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
                    We've sent a code to +91 {phoneNumber}
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
