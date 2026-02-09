import { Star } from "lucide-react";

export const StarRating = ({ rating, total }: { rating: number; total?: number }) => (
  <span className="inline-flex items-center gap-1">
    {[1, 2, 3, 4, 5].map((i) => (
      <Star
        key={i}
        size={14}
        className={i <= Math.round(rating) ? "fill-trust-gold text-trust-gold" : "text-muted-foreground/30"}
      />
    ))}
    <span className="ml-1 text-sm font-medium text-foreground">{rating.toFixed(1)}</span>
    {total !== undefined && <span className="text-xs text-muted-foreground">({total})</span>}
  </span>
);
