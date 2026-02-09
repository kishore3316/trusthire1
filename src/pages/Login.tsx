import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { ShieldCheck, Eye, EyeOff, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const success = login(username, password);
    if (success) {
      const entry = username === "Admin" ? "/admin" : "/dashboard";
      navigate(entry);
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-hero-gradient items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30Z' fill='none' stroke='%23DAA520' stroke-width='0.5'/%3E%3C/svg%3E")`,
        }} />
        <div className="relative z-10 text-center max-w-md">
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-trust-gold/20 backdrop-blur-sm border border-trust-gold/30">
            <ShieldCheck className="h-10 w-10 text-trust-gold" />
          </div>
          <h1 className="text-4xl font-bold font-display text-primary-foreground mb-4">
            TrustHire
          </h1>
          <p className="text-lg text-primary-foreground/80 leading-relaxed">
            Your shield against fake jobs. AI-powered verification ensures only genuine opportunities reach you.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-4 text-center">
            {[
              { num: "10K+", label: "Verified Jobs" },
              { num: "500+", label: "Trusted Companies" },
              { num: "99%", label: "Scam Detection" },
            ].map(({ num, label }) => (
              <div key={label} className="rounded-lg bg-primary-foreground/5 backdrop-blur-sm p-3 border border-primary-foreground/10">
                <div className="text-2xl font-bold text-trust-gold">{num}</div>
                <div className="text-xs text-primary-foreground/60 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="flex w-full lg:w-1/2 items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md">
          <div className="lg:hidden flex items-center justify-center gap-2 mb-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <ShieldCheck className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold font-display text-foreground">TrustHire</span>
          </div>

          <h2 className="text-3xl font-bold font-display text-foreground mb-2">Welcome back</h2>
          <p className="text-muted-foreground mb-8">Sign in to access verified opportunities</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPw ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPw(!showPw)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {error && (
              <p className="text-sm text-destructive font-medium">{error}</p>
            )}

            <Button type="submit" className="w-full" size="lg">
              <LogIn size={18} className="mr-2" />
              Sign In
            </Button>
          </form>

          <div className="mt-8 rounded-lg border border-border bg-muted/50 p-4">
            <p className="text-sm font-medium text-foreground mb-3">Demo Credentials</p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex justify-between">
                <span>👨‍💼 Admin:</span>
                <span className="font-mono text-foreground">Admin / 123</span>
              </div>
              <div className="flex justify-between">
                <span>🎓 Student:</span>
                <span className="font-mono text-foreground">stud@123 / 12345</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
