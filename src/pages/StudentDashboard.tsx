import { useState, useMemo } from "react";
import { Search, Filter, Briefcase, GraduationCap, ShieldCheck } from "lucide-react";
import { jobPostings } from "@/lib/mock-data";
import { JobCard } from "@/components/JobCard";
import { Navbar } from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const StudentDashboard = () => {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<"all" | "job" | "internship">("all");
  const [trustFilter, setTrustFilter] = useState<"all" | "verified">("all");

  const filtered = useMemo(() => {
    return jobPostings.filter((j) => {
      const matchSearch =
        j.title.toLowerCase().includes(search.toLowerCase()) ||
        j.company.toLowerCase().includes(search.toLowerCase()) ||
        j.location.toLowerCase().includes(search.toLowerCase());
      const matchType = typeFilter === "all" || j.type === typeFilter;
      const matchTrust = trustFilter === "all" || j.verified;
      return matchSearch && matchType && matchTrust;
    });
  }, [search, typeFilter, trustFilter]);

  const verifiedCount = jobPostings.filter((j) => j.verified).length;
  const flaggedCount = jobPostings.filter((j) => j.flagged).length;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container py-8">
        {/* Stats */}
        <div className="mb-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: "Total Listings", value: jobPostings.length, icon: Briefcase, color: "text-primary" },
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
          <div className="flex gap-2">
            {(["all", "job", "internship"] as const).map((t) => (
              <Button
                key={t}
                variant={typeFilter === t ? "default" : "outline"}
                size="sm"
                onClick={() => setTypeFilter(t)}
              >
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

        {/* Results */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-muted-foreground">
            <Search size={48} className="mx-auto mb-4 opacity-30" />
            <p className="text-lg">No matching listings found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {filtered.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default StudentDashboard;
