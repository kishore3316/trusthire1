import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { ShieldCheck, Search, CheckCircle, Bot, Star, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import verifiedImg from "@/assets/verified-shield.jpg";
import aiImg from "@/assets/ai-detection.jpg";
import ratingImg from "@/assets/rating-stars.jpg";
import validationImg from "@/assets/realtime-validation.jpg";

const FloatingOrb = ({ className }: { className?: string }) => (
  <div className={`absolute rounded-full blur-3xl opacity-20 animate-pulse ${className}`} />
);

const Index = () => {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  useEffect(() => {
    if (isAuthenticated && user) {
      navigate(user.role === "admin" ? "/admin" : "/dashboard");
    }
  }, [isAuthenticated, user, navigate]);

  const features = [
    { icon: ShieldCheck, title: "Verified Recruiters", desc: "Only badge-verified employers can post opportunities", img: verifiedImg },
    { icon: Bot, title: "AI Fraud Detection", desc: "Real-time scanning for scam keywords and suspicious patterns", img: aiImg },
    { icon: Star, title: "Rating System", desc: "Student feedback builds recruiter credibility scores", img: ratingImg },
    { icon: CheckCircle, title: "Real-Time Validation", desc: "Company domains and credentials verified instantly", img: validationImg },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-hero-gradient/90" />
        </div>

        {/* Animated orbs */}
        <FloatingOrb className="w-96 h-96 bg-trust-gold -top-48 right-0" />
        <FloatingOrb className="w-72 h-72 bg-trust-green bottom-0 left-10" />

        <div className="relative z-10 container flex flex-col items-center justify-center py-24 md:py-36 text-center">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-trust-gold/20 backdrop-blur-sm border border-trust-gold/30 shadow-gold animate-[float_3s_ease-in-out_infinite]">
            <ShieldCheck className="h-8 w-8 text-trust-gold" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold font-display text-primary-foreground mb-4 animate-fade-in-up">
            Trust<span className="text-gradient-gold">Hire</span>
          </h1>

          <p className="max-w-2xl text-lg md:text-xl text-primary-foreground/80 mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Your shield against fake jobs. AI-powered verification ensures only genuine, safe opportunities reach students.
          </p>

          <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Button size="lg" onClick={() => navigate("/login")} className="bg-trust-gold text-accent-foreground hover:bg-trust-gold/90 shadow-gold font-semibold group">
              Get Started <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate("/login")} className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              Sign In
            </Button>
          </div>

          {/* Stats bar */}
          <div className="mt-16 grid grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            {[
              { num: "10,000+", label: "Verified Jobs" },
              { num: "500+", label: "Trusted Companies" },
              { num: "99.2%", label: "Scam Detection Rate" },
            ].map(({ num, label }) => (
              <div key={label} className="text-center group cursor-default">
                <div className="text-2xl md:text-3xl font-bold text-trust-gold group-hover:scale-110 transition-transform">{num}</div>
                <div className="text-sm text-primary-foreground/60 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features with interactive images */}
      <section className="container py-20">
        <div className="text-center mb-4 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            <Sparkles size={14} /> Why TrustHire?
          </div>
        </div>
        <h2 className="text-3xl font-bold font-display text-foreground text-center mb-4">
          Multi-Layer Protection
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Built to protect students from fraudulent job postings with AI-powered verification
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc, img }, i) => (
            <div
              key={title}
              className="rounded-xl border bg-card overflow-hidden shadow-trust hover:shadow-lg hover:-translate-y-2 transition-all duration-500 cursor-pointer group"
              onMouseEnter={() => setHoveredFeature(i)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              {/* Interactive image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  className={`w-full h-full object-cover transition-all duration-700 ${hoveredFeature === i ? "scale-110 brightness-110" : "scale-100"}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <div className={`absolute top-3 right-3 flex h-10 w-10 items-center justify-center rounded-lg backdrop-blur-sm border transition-all duration-300 ${hoveredFeature === i ? "bg-trust-gold/30 border-trust-gold/50 scale-110" : "bg-card/50 border-border/50"}`}>
                  <Icon size={20} className={`transition-colors duration-300 ${hoveredFeature === i ? "text-trust-gold" : "text-foreground"}`} />
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-semibold text-foreground font-sans mb-2 group-hover:text-primary transition-colors">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8">
        <div className="container flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-primary" />
            <span className="font-display font-semibold text-foreground">TrustHire</span>
          </div>
          <p>© 2026 TrustHire. Protecting students from job scams.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
