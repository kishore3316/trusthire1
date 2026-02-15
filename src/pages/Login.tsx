import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { DEMO_USERS } from "@/lib/mock-data";
import { ShieldCheck, Eye, EyeOff, LogIn, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import sharanImg from "@/assets/sharan-raj.jpg";
import teamBg from "@/assets/team-bg.jpeg";

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
      <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
        {/* Team BG */}
        <img src={teamBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        <div className="relative z-10 flex flex-col items-center gap-6 animate-fade-in">
          <div className="relative">
            <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-trust-gold shadow-gold animate-[float_3s_ease-in-out_infinite]">
              <img src={sharanImg} alt={loadingUser.name} className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-10 h-10 rounded-full bg-trust-green flex items-center justify-center border-2 border-white/20 animate-scale-in">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold font-display text-white">{loadingUser.name}</h2>
          <p className="text-white/70 text-lg">Please wait, loading your dashboard...</p>
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
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-screen team background */}
      <img src={teamBg} alt="Team White Devils" className="absolute inset-0 w-full h-full object-cover" />
      {/* Dark transparent overlay to see faces clearly */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Team name banner at top */}
      <div className="absolute top-0 left-0 right-0 z-20 flex flex-col items-center pt-6">
        <h1 className="text-4xl md:text-5xl font-bold font-display text-white tracking-widest drop-shadow-lg">
          WHITE DEVILS
        </h1>
        <div className="mt-2 h-0.5 w-32 bg-gradient-to-r from-transparent via-trust-gold to-transparent" />
      </div>

      {/* Glassmorphism login card */}
      <div className="relative z-10 w-full max-w-md mx-4 animate-fade-in">
        <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-8">
          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-trust-gold/20 backdrop-blur-sm border border-trust-gold/30">
              <ShieldCheck className="h-6 w-6 text-trust-gold" />
            </div>
            <span className="text-2xl font-bold font-display text-white">TrustHire</span>
          </div>

          <h2 className="text-2xl font-bold font-display text-white text-center mb-1">Welcome back</h2>
          <p className="text-white/60 text-center mb-6 text-sm">Sign in to access verified opportunities</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-white/80">Username</Label>
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-trust-gold/50 focus:bg-white/15 transition-all duration-300"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-white/80">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPw ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-trust-gold/50 focus:bg-white/15 transition-all duration-300"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPw(!showPw)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
                >
                  {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {error && (
              <p className="text-sm text-red-400 font-medium animate-scale-in">{error}</p>
            )}

            <Button type="submit" className="w-full group bg-trust-gold/80 hover:bg-trust-gold text-black font-semibold backdrop-blur-sm" size="lg">
              <LogIn size={18} className="mr-2 group-hover:translate-x-1 transition-transform" />
              Sign In
            </Button>
          </form>

          <div className="mt-5 flex items-center justify-center gap-2 text-white/40 text-xs">
            <Sparkles size={12} className="text-trust-gold/60" />
            <span>Protected by AI-powered fraud detection</span>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            { num: "10K+", label: "Verified Jobs" },
            { num: "500+", label: "Companies" },
            { num: "99%", label: "Scam Detection" },
          ].map(({ num, label }) => (
            <div key={label} className="rounded-xl bg-white/10 backdrop-blur-md border border-white/10 p-3 text-center hover:bg-white/15 transition-all duration-300">
              <div className="text-lg font-bold text-trust-gold">{num}</div>
              <div className="text-[10px] text-white/50 mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Login;
