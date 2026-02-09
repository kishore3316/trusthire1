import { MapPin, Clock, AlertTriangle, ExternalLink, Briefcase, GraduationCap } from "lucide-react";
import { JobPosting } from "@/lib/types";
import { TrustBadge } from "./TrustBadge";
import { StarRating } from "./StarRating";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const JobCard = ({ job }: { job: JobPosting }) => {
  const isFlagged = job.flagged;

  return (
    <div
      className={cn(
        "group relative rounded-xl border bg-card p-5 shadow-trust transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5",
        isFlagged && "border-destructive/40 bg-destructive/5"
      )}
    >
      {isFlagged && (
        <div className="mb-3 flex items-center gap-2 rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive">
          <AlertTriangle size={16} />
          <span className="font-medium">⚠️ AI Fraud Alert:</span>
          <span className="text-xs">{job.flagReason}</span>
        </div>
      )}

      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <Badge variant={job.type === "internship" ? "secondary" : "default"} className="text-xs">
              {job.type === "internship" ? (
                <><GraduationCap size={12} className="mr-1" /> Internship</>
              ) : (
                <><Briefcase size={12} className="mr-1" /> Job</>
              )}
            </Badge>
            <TrustBadge level={job.recruiter.trustLevel} size="sm" />
          </div>

          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {job.title}
          </h3>
          <p className="mt-1 text-sm font-medium text-primary">{job.company}</p>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{job.description}</p>

          <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><MapPin size={12} />{job.location}</span>
            <span className="font-semibold text-foreground">{job.salary}</span>
            <span className="flex items-center gap-1"><Clock size={12} />{job.postedAt}</span>
          </div>

          <div className="mt-3">
            <StarRating rating={job.recruiter.rating} total={job.recruiter.totalReviews} />
          </div>
        </div>

        <div className="flex flex-col items-end gap-2">
          <div className={cn(
            "flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold",
            job.trustScore >= 80 ? "bg-trust-green/10 text-trust-green" :
            job.trustScore >= 50 ? "bg-trust-gold/10 text-trust-gold" :
            "bg-destructive/10 text-destructive"
          )}>
            {job.trustScore}
          </div>
          <span className="text-[10px] text-muted-foreground">Trust Score</span>
        </div>
      </div>

      {!isFlagged && (
        <div className="mt-4 pt-3 border-t border-border">
          <Button
            size="sm"
            className="w-full"
            onClick={() => window.open(job.applicationUrl, "_blank")}
          >
            Apply Now <ExternalLink size={14} className="ml-1" />
          </Button>
        </div>
      )}

      {isFlagged && (
        <div className="mt-4 pt-3 border-t border-destructive/20">
          <Button size="sm" variant="destructive" className="w-full" disabled>
            🚫 Blocked — Suspected Fraud
          </Button>
        </div>
      )}
    </div>
  );
};
