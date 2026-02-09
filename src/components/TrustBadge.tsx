import { Shield, ShieldCheck, ShieldAlert, ShieldX } from "lucide-react";
import { TrustLevel } from "@/lib/types";
import { cn } from "@/lib/utils";

interface TrustBadgeProps {
  level: TrustLevel;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}

const config: Record<TrustLevel, { icon: typeof Shield; label: string; className: string }> = {
  high: { icon: ShieldCheck, label: "Trusted", className: "bg-trust-green/10 text-trust-green border-trust-green/30" },
  medium: { icon: Shield, label: "Verified", className: "bg-trust-gold/10 text-trust-gold border-trust-gold/30" },
  low: { icon: ShieldAlert, label: "Low Trust", className: "bg-warning/10 text-warning border-warning/30" },
  unverified: { icon: ShieldX, label: "Unverified", className: "bg-destructive/10 text-destructive border-destructive/30" },
};

const sizes = { sm: "text-xs px-1.5 py-0.5", md: "text-sm px-2 py-1", lg: "text-base px-3 py-1.5" };
const iconSizes = { sm: 12, md: 14, lg: 18 };

export const TrustBadge = ({ level, size = "md", showLabel = true }: TrustBadgeProps) => {
  const { icon: Icon, label, className } = config[level];
  return (
    <span className={cn("inline-flex items-center gap-1 rounded-full border font-medium", className, sizes[size])}>
      <Icon size={iconSizes[size]} />
      {showLabel && label}
    </span>
  );
};
