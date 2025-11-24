import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Home } from "lucide-react";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/auth");
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-primary via-accent to-primary flex items-center justify-center animate-fade-in">
      <div className="text-center animate-scale-in">
        <div className="mb-6 inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/10 backdrop-blur-lg border border-white/20">
          <Home className="w-12 h-12 text-white" strokeWidth={1.5} />
        </div>
        <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">Homealloy</h1>
        <p className="text-white/80 text-sm">Premium Home Services</p>
      </div>
    </div>
  );
};

export default Splash;
