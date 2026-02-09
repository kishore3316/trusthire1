export type UserRole = "admin" | "student";

export interface User {
  username: string;
  role: UserRole;
  name: string;
}

export type TrustLevel = "high" | "medium" | "low" | "unverified";

export interface Recruiter {
  id: string;
  companyName: string;
  domain: string;
  verified: boolean;
  trustLevel: TrustLevel;
  rating: number;
  totalReviews: number;
  logo: string;
  verifiedAt?: string;
}

export interface JobPosting {
  id: string;
  title: string;
  company: string;
  recruiterId: string;
  type: "job" | "internship";
  location: string;
  salary: string;
  description: string;
  requirements: string[];
  postedAt: string;
  trustScore: number;
  verified: boolean;
  flagged: boolean;
  flagReason?: string;
  applicationUrl: string;
  recruiter: Recruiter;
}

export interface FraudAlert {
  id: string;
  postingId: string;
  reason: string;
  severity: "high" | "medium" | "low";
  timestamp: string;
  resolved: boolean;
}
