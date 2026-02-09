import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { ShieldCheck, Search, CheckCircle, Bot, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { useEffect } from "react";

const Index = () => {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated && user) {
      navigate(user.role === "admin" ? "/admin" : "/dashboard");
    }
  }, [isAuthenticated, user, navigate]);

  const features = [
    { icon: ShieldCheck, title: "Verified Recruiters", desc: "Only badge-verified employers can post opportunities" },
    { icon: Bot, title: "AI Fraud Detection", desc: "Real-time scanning for scam keywords and suspicious patterns" },
    { icon: Star, title: "Rating System", desc: "Student feedback builds recruiter credibility scores" },
    { icon: CheckCircle, title: "Real-Time Validation", desc: "Company domains and credentials verified instantly" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-hero-gradient/90" />
        </div>

        <div className="relative z-10 container flex flex-col items-center justify-center py-24 md:py-36 text-center">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-trust-gold/20 backdrop-blur-sm border border-trust-gold/30 animate-scale-in">
            <ShieldCheck className="h-8 w-8 text-trust-gold" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold font-display text-primary-foreground mb-4 animate-fade-in-up">
            Trust<span className="text-gradient-gold">Hire</span>
          </h1>

          <p className="max-w-2xl text-lg md:text-xl text-primary-foreground/80 mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Your shield against fake jobs. AI-powered verification ensures only genuine, safe opportunities reach students.
          </p>

          <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Button size="lg" onClick={() => navigate("/login")} className="bg-trust-gold text-accent-foreground hover:bg-trust-gold/90 shadow-gold font-semibold">
              Get Started <ArrowRight size={18} className="ml-2" />
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
              <div key={label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-trust-gold">{num}</div>
                <div className="text-sm text-primary-foreground/60 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container py-20">
        <h2 className="text-3xl font-bold font-display text-foreground text-center mb-4">
          Why TrustHire?
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Built to protect students from fraudulent job postings with multi-layer verification
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="rounded-xl border bg-card p-6 shadow-trust hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                <Icon size={24} />
              </div>
              <h3 className="font-semibold text-foreground font-sans mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
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
