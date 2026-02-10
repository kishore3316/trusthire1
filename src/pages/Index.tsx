import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import {
  ShieldCheck, Search, CheckCircle, Bot, Star, ArrowRight, Sparkles,
  Cpu, Code2, HardHat, Cog, ChevronRight, MapPin, Building2, TrendingUp,
  Briefcase, GraduationCap, Menu, X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState, useMemo } from "react";
import { jobPostings } from "@/lib/mock-data";
import { TrustBadge } from "@/components/TrustBadge";
import heroBg from "@/assets/hero-bg.jpg";
import verifiedImg from "@/assets/verified-shield.jpg";
import aiImg from "@/assets/ai-detection.jpg";
import ratingImg from "@/assets/rating-stars.jpg";
import validationImg from "@/assets/realtime-validation.jpg";

const departments = [
  { id: "all", label: "All Departments", icon: Briefcase },
  { id: "software", label: "Software & IT", icon: Code2 },
  { id: "hardware", label: "Hardware & Electronics", icon: Cpu },
  { id: "civil", label: "Civil Engineering", icon: HardHat },
  { id: "mechanical", label: "Mechanical Engineering", icon: Cog },
];

const FloatingOrb = ({ className }: { className?: string }) => (
  <div className={`absolute rounded-full blur-3xl opacity-20 animate-pulse ${className}`} />
);

const Index = () => {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const [activeDept, setActiveDept] = useState("all");
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  useEffect(() => {
    if (isAuthenticated && user) {
      navigate(user.role === "admin" ? "/admin" : "/dashboard");
    }
  }, [isAuthenticated, user, navigate]);

  const deptCounts = useMemo(() => {
    const counts: Record<string, number> = { all: jobPostings.length };
    jobPostings.forEach((j) => {
      counts[j.department] = (counts[j.department] || 0) + 1;
    });
    return counts;
  }, []);

  const filteredJobs = jobPostings.filter((j) => {
    const inDept = activeDept === "all" || j.department === activeDept;
    const matchSearch =
      !search ||
      j.title.toLowerCase().includes(search.toLowerCase()) ||
      j.company.toLowerCase().includes(search.toLowerCase());
    return inDept && matchSearch;
  });

  const features = [
    { icon: ShieldCheck, title: "Verified Recruiters", desc: "Only badge-verified employers can post opportunities", img: verifiedImg },
    { icon: Bot, title: "AI Fraud Detection", desc: "Real-time scanning for scam keywords and suspicious patterns", img: aiImg },
    { icon: Star, title: "Rating System", desc: "Student feedback builds recruiter credibility scores", img: ratingImg },
    { icon: CheckCircle, title: "Real-Time Validation", desc: "Company domains and credentials verified instantly", img: validationImg },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero - Compact */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-hero-gradient/90" />
        </div>
        <FloatingOrb className="w-96 h-96 bg-trust-gold -top-48 right-0" />
        <FloatingOrb className="w-72 h-72 bg-trust-green bottom-0 left-10" />

        <div className="relative z-10 container flex flex-col items-center justify-center py-16 md:py-24 text-center">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-trust-gold/20 backdrop-blur-sm border border-trust-gold/30 shadow-gold animate-[float_3s_ease-in-out_infinite]">
            <ShieldCheck className="h-7 w-7 text-trust-gold" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-display text-primary-foreground mb-3 animate-fade-in-up">
            Trust<span className="text-gradient-gold">Hire</span>
          </h1>
          <p className="max-w-xl text-base md:text-lg text-primary-foreground/80 mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Your shield against fake jobs. AI-powered verification ensures only genuine opportunities reach students.
          </p>
          <div className="flex gap-3 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Button size="lg" onClick={() => navigate("/login")} className="bg-trust-gold text-accent-foreground hover:bg-trust-gold/90 shadow-gold font-semibold group">
              Get Started <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate("/login")} className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              Sign In
            </Button>
          </div>
          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            {[
              { num: "10,000+", label: "Verified Jobs" },
              { num: "500+", label: "Trusted Companies" },
              { num: "99.2%", label: "Scam Detection" },
            ].map(({ num, label }) => (
              <div key={label} className="text-center">
                <div className="text-xl md:text-2xl font-bold text-trust-gold">{num}</div>
                <div className="text-xs text-primary-foreground/60 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content: Sidebar + Job Panel */}
      <section className="container py-10">
        <div className="flex gap-6">
          {/* Mobile sidebar toggle */}
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden fixed bottom-6 left-6 z-50 h-12 w-12 rounded-full shadow-trust bg-card"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>

          {/* Department Sidebar */}
          <aside className={`
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
            lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-40
            w-72 lg:w-64 shrink-0 bg-sidebar text-sidebar-foreground
            rounded-none lg:rounded-2xl overflow-hidden shadow-trust
            transition-transform duration-300
          `}>
            <div className="p-5 border-b border-sidebar-border">
              <div className="flex items-center gap-2 mb-1">
                <Building2 size={18} className="text-sidebar-primary" />
                <h3 className="font-display font-bold text-lg text-sidebar-foreground">Departments</h3>
              </div>
              <p className="text-xs text-sidebar-foreground/50">Browse jobs by department</p>
            </div>
            <nav className="p-3 space-y-1">
              {departments.map((dept) => {
                const isActive = activeDept === dept.id;
                return (
                  <button
                    key={dept.id}
                    onClick={() => { setActiveDept(dept.id); setSidebarOpen(false); }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group
                      ${isActive
                        ? "bg-sidebar-accent text-sidebar-primary shadow-gold"
                        : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                      }`}
                  >
                    <dept.icon size={18} className={isActive ? "text-sidebar-primary" : "text-sidebar-foreground/50 group-hover:text-sidebar-foreground/70"} />
                    <span className="flex-1 text-left">{dept.label}</span>
                    <Badge variant="secondary" className={`text-xs px-2 ${isActive ? "bg-sidebar-primary text-sidebar-primary-foreground" : "bg-sidebar-accent text-sidebar-foreground/60"}`}>
                      {deptCounts[dept.id] || 0}
                    </Badge>
                    <ChevronRight size={14} className={`transition-transform ${isActive ? "translate-x-0 opacity-100" : "-translate-x-1 opacity-0"}`} />
                  </button>
                );
              })}
            </nav>

            {/* Sidebar CTA */}
            <div className="mx-3 mt-4 p-4 rounded-xl bg-sidebar-accent/60 border border-sidebar-border">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp size={16} className="text-sidebar-primary" />
                <span className="text-xs font-semibold text-sidebar-foreground">Trending</span>
              </div>
              <p className="text-xs text-sidebar-foreground/60 mb-3">Software & IT jobs are up 40% this month</p>
              <Button size="sm" onClick={() => navigate("/login")} className="w-full bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90 text-xs">
                Explore Now
              </Button>
            </div>
          </aside>

          {/* Overlay for mobile sidebar */}
          {sidebarOpen && (
            <div className="fixed inset-0 bg-foreground/30 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />
          )}

          {/* Main Panel */}
          <div className="flex-1 min-w-0">
            {/* Search + Department Title */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-bold font-display text-foreground">
                  {departments.find((d) => d.id === activeDept)?.label}
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  {filteredJobs.length} opportunities available
                </p>
              </div>
              <div className="relative w-full sm:w-72">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                <Input
                  className="pl-9"
                  placeholder="Search jobs..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            {/* Job Cards Grid */}
            {filteredJobs.length === 0 ? (
              <div className="text-center py-16 text-muted-foreground">
                <Search size={48} className="mx-auto mb-4 opacity-30" />
                <p className="text-lg">No jobs found in this department</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredJobs.map((job) => (
                  <div
                    key={job.id}
                    className={`rounded-xl border p-5 transition-all duration-300 cursor-pointer group hover:shadow-lg hover:-translate-y-1 ${
                      job.flagged
                        ? "bg-destructive/5 border-destructive/20"
                        : "bg-card border-border hover:border-primary/30"
                    }`}
                    onClick={() => navigate("/login")}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm leading-tight">
                            {job.title}
                          </h3>
                          {job.flagged && (
                            <Badge variant="destructive" className="text-[10px] px-1.5 py-0">Flagged</Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Building2 size={12} />
                          <span>{job.company}</span>
                          {job.verified && <ShieldCheck size={12} className="text-trust-green" />}
                        </div>
                      </div>
                      <div className={`flex h-10 w-10 items-center justify-center rounded-lg text-xs font-bold ${
                        job.trustScore >= 80
                          ? "bg-trust-green/10 text-trust-green"
                          : job.trustScore >= 50
                          ? "bg-warning/10 text-warning"
                          : "bg-destructive/10 text-destructive"
                      }`}>
                        {job.trustScore}
                      </div>
                    </div>

                    <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{job.description}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin size={11} /> {job.location}
                        </span>
                        <span className="font-medium text-foreground">{job.salary}</span>
                      </div>
                      <Badge variant={job.type === "internship" ? "secondary" : "outline"} className="text-[10px]">
                        {job.type === "internship" ? <GraduationCap size={10} className="mr-1" /> : <Briefcase size={10} className="mr-1" />}
                        {job.type}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container py-16">
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            <Sparkles size={14} /> Why TrustHire?
          </div>
        </div>
        <h2 className="text-3xl font-bold font-display text-foreground text-center mb-4">
          Multi-Layer Protection
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
          Built to protect students from fraudulent job postings with AI-powered verification
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map(({ icon: Icon, title, desc, img }, i) => (
            <div
              key={title}
              className="rounded-xl border bg-card overflow-hidden shadow-trust hover:shadow-lg hover:-translate-y-2 transition-all duration-500 cursor-pointer group"
              onMouseEnter={() => setHoveredFeature(i)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div className="relative h-36 overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  className={`w-full h-full object-cover transition-all duration-700 ${hoveredFeature === i ? "scale-110 brightness-110" : "scale-100"}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <div className={`absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-lg backdrop-blur-sm border transition-all duration-300 ${hoveredFeature === i ? "bg-trust-gold/30 border-trust-gold/50 scale-110" : "bg-card/50 border-border/50"}`}>
                  <Icon size={18} className={`transition-colors duration-300 ${hoveredFeature === i ? "text-trust-gold" : "text-foreground"}`} />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground font-sans mb-1.5 text-sm group-hover:text-primary transition-colors">{title}</h3>
                <p className="text-xs text-muted-foreground">{desc}</p>
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
