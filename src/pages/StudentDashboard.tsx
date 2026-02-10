import { useState, useMemo } from "react";
import { Search, Briefcase, GraduationCap, ShieldCheck, Code2, Cpu, HardHat, Cog, Building2, TrendingUp, ChevronRight, Menu, X, Filter } from "lucide-react";
import { jobPostings } from "@/lib/mock-data";
import { Department } from "@/lib/types";
import { JobCard } from "@/components/JobCard";
import { Navbar } from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const departments = [
  { id: "all" as const, label: "All Departments", icon: Briefcase },
  { id: "software" as const, label: "Software & IT", icon: Code2 },
  { id: "hardware" as const, label: "Hardware & Electronics", icon: Cpu },
  { id: "civil" as const, label: "Civil Engineering", icon: HardHat },
  { id: "mechanical" as const, label: "Mechanical Engineering", icon: Cog },
];

const StudentDashboard = () => {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<"all" | "job" | "internship">("all");
  const [trustFilter, setTrustFilter] = useState<"all" | "verified">("all");
  const [activeDept, setActiveDept] = useState<"all" | Department>("all");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filtered = useMemo(() => {
    return jobPostings.filter((j) => {
      const matchSearch =
        j.title.toLowerCase().includes(search.toLowerCase()) ||
        j.company.toLowerCase().includes(search.toLowerCase()) ||
        j.location.toLowerCase().includes(search.toLowerCase());
      const matchType = typeFilter === "all" || j.type === typeFilter;
      const matchTrust = trustFilter === "all" || j.verified;
      const matchDept = activeDept === "all" || j.department === activeDept;
      return matchSearch && matchType && matchTrust && matchDept;
    });
  }, [search, typeFilter, trustFilter, activeDept]);

  const deptCounts = useMemo(() => {
    const counts: Record<string, number> = { all: jobPostings.length };
    jobPostings.forEach((j) => {
      counts[j.department] = (counts[j.department] || 0) + 1;
    });
    return counts;
  }, []);

  const verifiedCount = filtered.filter((j) => j.verified).length;
  const flaggedCount = filtered.filter((j) => j.flagged).length;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="flex">
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
          lg:translate-x-0 fixed lg:sticky top-0 lg:top-0 inset-y-0 left-0 z-40
          w-72 lg:w-64 shrink-0 bg-sidebar text-sidebar-foreground
          min-h-screen overflow-y-auto shadow-trust
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

          {/* Trending Panel */}
          <div className="mx-3 mt-4 p-4 rounded-xl bg-sidebar-accent/60 border border-sidebar-border">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp size={16} className="text-sidebar-primary" />
              <span className="text-xs font-semibold text-sidebar-foreground">Trending</span>
            </div>
            <p className="text-xs text-sidebar-foreground/60 mb-2">Software & IT jobs are up 40% this month</p>
          </div>
        </aside>

        {/* Overlay for mobile sidebar */}
        {sidebarOpen && (
          <div className="fixed inset-0 bg-foreground/30 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />
        )}

        {/* Main Content */}
        <main className="flex-1 min-w-0 p-6 lg:p-8">
          {/* Stats */}
          <div className="mb-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Total Listings", value: filtered.length, icon: Briefcase, color: "text-primary" },
              { label: "Verified", value: verifiedCount, icon: ShieldCheck, color: "text-trust-green" },
              { label: "Flagged", value: flaggedCount, icon: Filter, color: "text-destructive" },
            ].map(({ label, value, icon: Icon, color }) => (
              <div key={label} className="rounded-xl border bg-card p-4 shadow-trust flex items-center gap-4">
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-muted ${color}`}>
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{value}</p>
                  <p className="text-sm text-muted-foreground">{label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Search & Filters */}
          <div className="mb-6 flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                className="pl-10"
                placeholder="Search jobs, companies, locations..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {(["all", "job", "internship"] as const).map((t) => (
                <Button key={t} variant={typeFilter === t ? "default" : "outline"} size="sm" onClick={() => setTypeFilter(t)}>
                  {t === "job" && <Briefcase size={14} className="mr-1" />}
                  {t === "internship" && <GraduationCap size={14} className="mr-1" />}
                  {t === "all" ? "All" : t.charAt(0).toUpperCase() + t.slice(1)}
                </Button>
              ))}
              <Button
                variant={trustFilter === "verified" ? "default" : "outline"}
                size="sm"
                onClick={() => setTrustFilter(trustFilter === "verified" ? "all" : "verified")}
              >
                <ShieldCheck size={14} className="mr-1" />
                Verified Only
              </Button>
            </div>
          </div>

          {/* Department Title */}
          <div className="mb-4">
            <h2 className="text-xl font-bold font-display text-foreground">
              {departments.find((d) => d.id === activeDept)?.label}
            </h2>
            <p className="text-sm text-muted-foreground">{filtered.length} opportunities found</p>
          </div>

          {/* Results */}
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground">
              <Search size={48} className="mx-auto mb-4 opacity-30" />
              <p className="text-lg">No matching listings found</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
              {filtered.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;
