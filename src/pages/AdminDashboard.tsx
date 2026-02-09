import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { TrustBadge } from "@/components/TrustBadge";
import { StarRating } from "@/components/StarRating";
import { recruiters, jobPostings, fraudAlerts } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ShieldCheck, AlertTriangle, Users, FileText, CheckCircle, XCircle, Clock, Eye,
} from "lucide-react";
import { cn } from "@/lib/utils";

const AdminDashboard = () => {
  const [resolvedAlerts, setResolvedAlerts] = useState<Set<string>>(new Set());

  const toggleResolve = (id: string) => {
    setResolvedAlerts((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container py-8">
        <h1 className="text-3xl font-bold font-display text-foreground mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground mb-8">Manage recruiters, job postings, and fraud alerts</p>

        {/* Stats */}
        <div className="mb-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Recruiters", value: recruiters.length, icon: Users, color: "text-primary" },
            { label: "Job Postings", value: jobPostings.length, icon: FileText, color: "text-trust-green" },
            { label: "Fraud Alerts", value: fraudAlerts.length, icon: AlertTriangle, color: "text-destructive" },
            { label: "Verified", value: recruiters.filter((r) => r.verified).length, icon: ShieldCheck, color: "text-trust-gold" },
          ].map(({ label, value, icon: Icon, color }) => (
            <div key={label} className="rounded-xl border bg-card p-4 shadow-trust">
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-muted mb-3 ${color}`}>
                <Icon size={20} />
              </div>
              <p className="text-2xl font-bold text-foreground">{value}</p>
              <p className="text-sm text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>

        <Tabs defaultValue="recruiters" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="recruiters"><Users size={14} className="mr-1" /> Recruiters</TabsTrigger>
            <TabsTrigger value="postings"><FileText size={14} className="mr-1" /> Postings</TabsTrigger>
            <TabsTrigger value="alerts"><AlertTriangle size={14} className="mr-1" /> Fraud Alerts</TabsTrigger>
          </TabsList>

          {/* Recruiters */}
          <TabsContent value="recruiters" className="space-y-4">
            {recruiters.map((r) => (
              <div key={r.id} className="flex items-center justify-between rounded-xl border bg-card p-4 shadow-trust">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-xl">{r.logo}</div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-foreground">{r.companyName}</span>
                      <TrustBadge level={r.trustLevel} size="sm" />
                    </div>
                    <p className="text-sm text-muted-foreground">{r.domain}</p>
                    <StarRating rating={r.rating} total={r.totalReviews} />
                  </div>
                </div>
                <div className="flex gap-2">
                  {!r.verified ? (
                    <Button size="sm" className="bg-trust-green hover:bg-trust-green/90 text-trust-green-foreground">
                      <CheckCircle size={14} className="mr-1" /> Verify
                    </Button>
                  ) : (
                    <Badge className="bg-trust-green/10 text-trust-green border-trust-green/30">Verified</Badge>
                  )}
                  <Button size="sm" variant="outline"><Eye size={14} /></Button>
                </div>
              </div>
            ))}
          </TabsContent>

          {/* Postings */}
          <TabsContent value="postings" className="space-y-4">
            {jobPostings.map((j) => (
              <div key={j.id} className={cn(
                "flex items-center justify-between rounded-xl border bg-card p-4 shadow-trust",
                j.flagged && "border-destructive/40 bg-destructive/5"
              )}>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-foreground">{j.title}</span>
                    {j.flagged && (
                      <Badge variant="destructive" className="text-xs">
                        <AlertTriangle size={10} className="mr-1" /> Flagged
                      </Badge>
                    )}
                    {j.verified && (
                      <Badge className="bg-trust-green/10 text-trust-green border-trust-green/30 text-xs">Verified</Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{j.company} · {j.type} · Trust Score: {j.trustScore}</p>
                </div>
                <div className="flex gap-2">
                  {j.flagged ? (
                    <>
                      <Button size="sm" variant="destructive"><XCircle size={14} className="mr-1" /> Remove</Button>
                      <Button size="sm" variant="outline"><CheckCircle size={14} className="mr-1" /> Approve</Button>
                    </>
                  ) : (
                    <Button size="sm" variant="outline"><Eye size={14} /></Button>
                  )}
                </div>
              </div>
            ))}
          </TabsContent>

          {/* Fraud Alerts */}
          <TabsContent value="alerts" className="space-y-4">
            {fraudAlerts.map((alert) => {
              const isResolved = resolvedAlerts.has(alert.id);
              return (
                <div
                  key={alert.id}
                  className={cn(
                    "rounded-xl border p-4 shadow-trust",
                    isResolved ? "bg-muted/50 border-border" : "bg-destructive/5 border-destructive/30"
                  )}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className={cn(
                        "mt-0.5 flex h-8 w-8 items-center justify-center rounded-full",
                        alert.severity === "high" ? "bg-destructive/10 text-destructive" : "bg-warning/10 text-warning"
                      )}>
                        <AlertTriangle size={16} />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{alert.reason}</p>
                        <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1"><Clock size={10} />{new Date(alert.timestamp).toLocaleString()}</span>
                          <Badge variant={alert.severity === "high" ? "destructive" : "secondary"} className="text-[10px]">
                            {alert.severity.toUpperCase()}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant={isResolved ? "outline" : "default"}
                      onClick={() => toggleResolve(alert.id)}
                    >
                      {isResolved ? "Reopen" : "Resolve"}
                    </Button>
                  </div>
                </div>
              );
            })}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminDashboard;
