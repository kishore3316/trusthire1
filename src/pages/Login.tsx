import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { DEMO_USERS } from "@/lib/mock-data";
import { ShieldCheck, Eye, EyeOff, LogIn, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import studentsImg from "@/assets/students-collab.jpg";
import sharanImg from "@/assets/sharan-raj.jpg";

const FloatingOrb = ({ className }: { className?: string }) => (
  <div className={`absolute rounded-full blur-3xl opacity-20 animate-pulse ${className}`} />
);

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");
  const [loadingUser, setLoadingUser] = useState<{ name: string; avatar?: string } | null>(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loadingUser) return;
    const utterance = new SpeechSynthesisUtterance(`${loadingUser.name}, please wait`);
    utterance.rate = 0.9;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
    const timer = setTimeout(() => {
      setLoadingUser(null);
      navigate(username === "Admin" ? "/admin" : "/dashboard");
    }, 3000);
    return () => clearTimeout(timer);
  }, [loadingUser, navigate, username]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const success = login(username.trim(), password.trim());
    if (success) {
      const entry = DEMO_USERS[username.trim()];
      if (entry?.user?.avatar) {
        setLoadingUser({ name: entry.user.name, avatar: entry.user.avatar });
      } else {
        const utterance = new SpeechSynthesisUtterance(`Welcome ${entry?.user?.name || username.trim()}`);
        utterance.rate = 0.9;
        utterance.pitch = 1;
        window.speechSynthesis.speak(utterance);
        navigate(username.trim() === "Admin" ? "/admin" : "/dashboard");
      }
    } else {
      setError("Invalid username or password");
    }
  };

  if (loadingUser) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background relative overflow-hidden">
        <FloatingOrb className="w-96 h-96 bg-primary/30 -top-32 -left-32" />
        <FloatingOrb className="w-72 h-72 bg-trust-gold/20 bottom-20 right-10" />
        <div className="relative z-10 flex flex-col items-center gap-6 animate-fade-in-up">
          <div className="relative">
            <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-trust-gold shadow-gold animate-[float_3s_ease-in-out_infinite]">
              <img src={sharanImg} alt={loadingUser.name} className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-10 h-10 rounded-full bg-trust-green flex items-center justify-center border-2 border-background animate-scale-in">
              <ShieldCheck className="w-5 h-5 text-primary-foreground" />
            </div>
          </div>
          <h2 className="text-3xl font-bold font-display text-foreground">{loadingUser.name}</h2>
          <p className="text-muted-foreground text-lg">Please wait, loading your dashboard...</p>
          <div className="flex gap-2 mt-2">
            {[0, 1, 2].map(i => (
              <div key={i} className="w-3 h-3 rounded-full bg-trust-gold animate-bounce" style={{ animationDelay: `${i * 0.2}s` }} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      {/* Left Panel - Animated Hero */}
      <div className="hidden lg:flex lg:w-1/2 bg-hero-gradient items-center justify-center p-12 relative overflow-hidden">
        {/* Floating orbs */}
        <FloatingOrb className="w-72 h-72 bg-trust-gold -top-20 -left-20" />
        <FloatingOrb className="w-48 h-48 bg-trust-green bottom-20 right-10" />
        <FloatingOrb className="w-56 h-56 bg-primary-foreground top-1/2 left-1/3" />

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30Z' fill='none' stroke='%23DAA520' stroke-width='0.5'/%3E%3C/svg%3E")`,
          animation: "shimmer 8s linear infinite",
        }} />

        <div className="relative z-10 text-center max-w-md">
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-trust-gold/20 backdrop-blur-sm border border-trust-gold/30 animate-[float_3s_ease-in-out_infinite] shadow-gold">
            <ShieldCheck className="h-10 w-10 text-trust-gold" />
          </div>

          <h1 className="text-5xl font-bold font-display text-primary-foreground mb-4 animate-fade-in-up">
            Trust<span className="text-gradient-gold">Hire</span>
          </h1>
          <p className="text-lg text-primary-foreground/80 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            Your shield against fake jobs. AI-powered verification ensures only genuine opportunities reach you.
          </p>

          {/* Interactive image card */}
          <div className="mt-8 rounded-xl overflow-hidden border border-primary-foreground/10 shadow-2xl group cursor-pointer animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
            <div className="relative overflow-hidden">
              <img
                src={studentsImg}
                alt="Students collaborating"
                className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2">
                <Sparkles size={14} className="text-trust-gold" />
                <span className="text-sm font-medium text-primary-foreground">Join 50,000+ students on TrustHire</span>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 text-center animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
            {[
              { num: "10K+", label: "Verified Jobs" },
              { num: "500+", label: "Trusted Companies" },
              { num: "99%", label: "Scam Detection" },
            ].map(({ num, label }) => (
              <div key={label} className="rounded-lg bg-primary-foreground/5 backdrop-blur-sm p-3 border border-primary-foreground/10 hover:bg-primary-foreground/10 hover:border-trust-gold/30 transition-all duration-300 cursor-default group/stat">
                <div className="text-2xl font-bold text-trust-gold group-hover/stat:scale-110 transition-transform">{num}</div>
                <div className="text-xs text-primary-foreground/60 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="flex w-full lg:w-1/2 items-center justify-center p-8 bg-background relative overflow-hidden">
        <FloatingOrb className="w-64 h-64 bg-primary/30 -bottom-32 -right-32" />

        <div className="w-full max-w-md relative z-10">
          <div className="lg:hidden flex items-center justify-center gap-2 mb-8 animate-fade-in-up">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <ShieldCheck className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold font-display text-foreground">TrustHire</span>
          </div>

          <h2 className="text-3xl font-bold font-display text-foreground mb-2 animate-fade-in-up">Welcome back</h2>
          <p className="text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>Sign in to access verified opportunities</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="transition-all duration-300 focus:shadow-trust focus:scale-[1.01]"
                required
              />
            </div>

            <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPw ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="transition-all duration-300 focus:shadow-trust focus:scale-[1.01]"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPw(!showPw)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {error && (
              <p className="text-sm text-destructive font-medium animate-scale-in">{error}</p>
            )}

            <div className="animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
              <Button type="submit" className="w-full group" size="lg">
                <LogIn size={18} className="mr-2 group-hover:translate-x-1 transition-transform" />
                Sign In
              </Button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            Protected by AI-powered fraud detection
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
