import { JobPosting, Recruiter, FraudAlert, User } from "./types";

export const DEMO_USERS: Record<string, { password: string; user: User }> = {
  Admin: {
    password: "123",
    user: { username: "Admin", role: "admin", name: "Admin Panel" },
  },
  "stud@123": {
    password: "12345",
    user: { username: "stud@123", role: "student", name: "Rahul Sharma" },
  },
  sharan: {
    password: "777",
    user: { username: "sharan", role: "student", name: "Sharan Raj R", avatar: "sharan-raj" },
  },
  prithiv: {
    password: "777",
    user: { username: "prithiv", role: "student", name: "Prithiv" },
  },
  prakash: {
    password: "777",
    user: { username: "prakash", role: "student", name: "Prakash" },
  },
  subash: {
    password: "777",
    user: { username: "subash", role: "student", name: "Subash" },
  },
  pranav: {
    password: "777",
    user: { username: "pranav", role: "student", name: "Pranav" },
  },
};

export const recruiters: Recruiter[] = [
  { id: "r1", companyName: "Google India", domain: "google.com", verified: true, trustLevel: "high", rating: 4.9, totalReviews: 234, logo: "🏢", verifiedAt: "2025-12-01" },
  { id: "r2", companyName: "Microsoft", domain: "microsoft.com", verified: true, trustLevel: "high", rating: 4.8, totalReviews: 189, logo: "🏢", verifiedAt: "2025-11-15" },
  { id: "r3", companyName: "Infosys", domain: "infosys.com", verified: true, trustLevel: "medium", rating: 4.2, totalReviews: 156, logo: "🏢", verifiedAt: "2025-10-20" },
  { id: "r4", companyName: "TechStart Solutions", domain: "techstart.io", verified: false, trustLevel: "low", rating: 2.1, totalReviews: 12, logo: "🏢" },
  { id: "r5", companyName: "Wipro", domain: "wipro.com", verified: true, trustLevel: "high", rating: 4.5, totalReviews: 201, logo: "🏢", verifiedAt: "2025-09-10" },
  { id: "r6", companyName: "QuickJobs Corp", domain: "quickjobs.xyz", verified: false, trustLevel: "unverified", rating: 1.2, totalReviews: 3, logo: "🏢" },
  { id: "r7", companyName: "Tata Consultancy Services", domain: "tcs.com", verified: true, trustLevel: "high", rating: 4.6, totalReviews: 310, logo: "🏢", verifiedAt: "2025-08-01" },
  { id: "r8", companyName: "Larsen & Toubro", domain: "larsentoubro.com", verified: true, trustLevel: "high", rating: 4.4, totalReviews: 178, logo: "🏢", verifiedAt: "2025-07-15" },
  { id: "r9", companyName: "Intel India", domain: "intel.com", verified: true, trustLevel: "high", rating: 4.7, totalReviews: 145, logo: "🏢", verifiedAt: "2025-10-05" },
  { id: "r10", companyName: "Bosch India", domain: "bosch.com", verified: true, trustLevel: "high", rating: 4.5, totalReviews: 167, logo: "🏢", verifiedAt: "2025-09-20" },
  { id: "r11", companyName: "Mahindra & Mahindra", domain: "mahindra.com", verified: true, trustLevel: "high", rating: 4.3, totalReviews: 198, logo: "🏢", verifiedAt: "2025-11-01" },
  { id: "r12", companyName: "Siemens India", domain: "siemens.com", verified: true, trustLevel: "high", rating: 4.6, totalReviews: 142, logo: "🏢", verifiedAt: "2025-08-20" },
  { id: "r13", companyName: "Amazon India", domain: "amazon.com", verified: true, trustLevel: "high", rating: 4.7, totalReviews: 278, logo: "🏢", verifiedAt: "2025-12-10" },
  { id: "r14", companyName: "Zoho Corporation", domain: "zoho.com", verified: true, trustLevel: "high", rating: 4.4, totalReviews: 165, logo: "🏢", verifiedAt: "2025-11-20" },
  { id: "r15", companyName: "Flipkart", domain: "flipkart.com", verified: true, trustLevel: "high", rating: 4.5, totalReviews: 210, logo: "🏢", verifiedAt: "2025-10-15" },
  { id: "r16", companyName: "Reliance Industries", domain: "ril.com", verified: true, trustLevel: "high", rating: 4.3, totalReviews: 245, logo: "🏢", verifiedAt: "2025-09-01" },
  { id: "r17", companyName: "HCL Technologies", domain: "hcltech.com", verified: true, trustLevel: "high", rating: 4.4, totalReviews: 195, logo: "🏢", verifiedAt: "2025-10-25" },
  { id: "r18", companyName: "Accenture India", domain: "accenture.com", verified: true, trustLevel: "high", rating: 4.5, totalReviews: 220, logo: "🏢", verifiedAt: "2025-11-05" },
  { id: "r19", companyName: "Tata Motors", domain: "tatamotors.com", verified: true, trustLevel: "high", rating: 4.4, totalReviews: 185, logo: "🏢", verifiedAt: "2025-08-15" },
  { id: "r20", companyName: "Hyundai India", domain: "hyundai.com", verified: true, trustLevel: "high", rating: 4.3, totalReviews: 140, logo: "🏢", verifiedAt: "2025-09-25" },
  { id: "r21", companyName: "Samsung R&D India", domain: "samsung.com", verified: true, trustLevel: "high", rating: 4.6, totalReviews: 175, logo: "🏢", verifiedAt: "2025-10-30" },
  { id: "r22", companyName: "Qualcomm India", domain: "qualcomm.com", verified: true, trustLevel: "high", rating: 4.7, totalReviews: 130, logo: "🏢", verifiedAt: "2025-11-12" },
];

export type Department = "software" | "hardware" | "civil" | "mechanical";

export const jobPostings: JobPosting[] = [
  // ── Software & IT ──
  {
    id: "j1", title: "Software Engineer - Full Stack", company: "Google India", recruiterId: "r1", type: "job",
    location: "Bangalore, India", salary: "₹25-40 LPA", department: "software",
    description: "Join Google's engineering team to build world-class products that impact billions of users worldwide. Work with React, Go, and cloud-native technologies.",
    requirements: ["B.Tech/M.Tech in CS", "3+ years experience", "React, Node.js, Python"],
    postedAt: "2026-02-05", trustScore: 98, verified: true, flagged: false,
    applicationUrl: "https://careers.google.com", recruiter: recruiters[0],
  },
  {
    id: "j2", title: "Data Science Intern", company: "Microsoft", recruiterId: "r2", type: "internship",
    location: "Hyderabad, India", salary: "₹50,000/month", department: "software",
    description: "Work with Microsoft's AI research team on cutting-edge machine learning projects. Build models using Azure ML and Python.",
    requirements: ["Pursuing B.Tech/M.Tech", "Python, ML basics", "Strong analytical skills"],
    postedAt: "2026-02-03", trustScore: 96, verified: true, flagged: false,
    applicationUrl: "https://careers.microsoft.com", recruiter: recruiters[1],
  },
  {
    id: "j3", title: "Associate Software Engineer", company: "Infosys", recruiterId: "r3", type: "job",
    location: "Pune, India", salary: "₹6-10 LPA", department: "software",
    description: "Join Infosys as a fresher and kickstart your IT career with training and mentorship. Work on enterprise Java and cloud projects.",
    requirements: ["B.Tech in any branch", "Good communication", "Willingness to learn"],
    postedAt: "2026-02-01", trustScore: 82, verified: true, flagged: false,
    applicationUrl: "https://careers.infosys.com", recruiter: recruiters[2],
  },
  {
    id: "j7", title: "Cloud DevOps Engineer", company: "Tata Consultancy Services", recruiterId: "r7", type: "job",
    location: "Mumbai, India", salary: "₹12-20 LPA", department: "software",
    description: "Design CI/CD pipelines and manage Kubernetes clusters for enterprise clients. Hands-on with AWS, Docker, and Terraform.",
    requirements: ["B.Tech in CS/IT", "AWS/Azure certified", "Docker, Kubernetes experience"],
    postedAt: "2026-02-06", trustScore: 91, verified: true, flagged: false,
    applicationUrl: "https://careers.tcs.com", recruiter: recruiters[6],
  },
  {
    id: "j8", title: "Frontend Developer - React", company: "Wipro", recruiterId: "r5", type: "job",
    location: "Bangalore, India", salary: "₹8-14 LPA", department: "software",
    description: "Build responsive web applications using React, TypeScript, and modern CSS. Collaborate with UX designers to ship pixel-perfect interfaces.",
    requirements: ["B.Tech in CS", "2+ years React experience", "TypeScript, Tailwind CSS"],
    postedAt: "2026-02-04", trustScore: 88, verified: true, flagged: false,
    applicationUrl: "https://careers.wipro.com", recruiter: recruiters[4],
  },

  // ── Hardware & Electronics ──
  {
    id: "j9", title: "VLSI Design Engineer", company: "Intel India", recruiterId: "r9", type: "job",
    location: "Bangalore, India", salary: "₹18-30 LPA", department: "hardware",
    description: "Design and verify next-gen processor architectures using Verilog and SystemVerilog. Work on cutting-edge semiconductor technology.",
    requirements: ["M.Tech in ECE/VLSI", "Verilog/SystemVerilog", "ASIC/FPGA experience"],
    postedAt: "2026-02-07", trustScore: 97, verified: true, flagged: false,
    applicationUrl: "https://jobs.intel.com", recruiter: recruiters[8],
  },
  {
    id: "j10", title: "Embedded Systems Intern", company: "Bosch India", recruiterId: "r10", type: "internship",
    location: "Coimbatore, India", salary: "₹35,000/month", department: "hardware",
    description: "Develop firmware for automotive ECUs using C/C++ and AUTOSAR. Work on real-time embedded systems for next-gen vehicles.",
    requirements: ["Pursuing B.Tech/M.Tech in ECE", "C/C++ programming", "Microcontroller basics"],
    postedAt: "2026-02-05", trustScore: 93, verified: true, flagged: false,
    applicationUrl: "https://careers.bosch.com", recruiter: recruiters[9],
  },
  {
    id: "j11", title: "PCB Design Engineer", company: "Siemens India", recruiterId: "r12", type: "job",
    location: "Gurgaon, India", salary: "₹10-16 LPA", department: "hardware",
    description: "Design multi-layer PCBs for industrial automation products using Altium Designer. Perform signal integrity analysis and thermal simulations.",
    requirements: ["B.Tech in ECE/EEE", "Altium Designer proficiency", "2+ years PCB design"],
    postedAt: "2026-02-03", trustScore: 90, verified: true, flagged: false,
    applicationUrl: "https://jobs.siemens.com", recruiter: recruiters[11],
  },

  // ── Civil Engineering ──
  {
    id: "j12", title: "Structural Engineer", company: "Larsen & Toubro", recruiterId: "r8", type: "job",
    location: "Chennai, India", salary: "₹10-18 LPA", department: "civil",
    description: "Design and analyze structures for mega infrastructure projects including bridges, metro rail, and high-rise buildings using STAAD Pro and ETABS.",
    requirements: ["B.Tech/M.Tech in Civil", "STAAD Pro, AutoCAD", "3+ years experience"],
    postedAt: "2026-02-06", trustScore: 94, verified: true, flagged: false,
    applicationUrl: "https://careers.larsentoubro.com", recruiter: recruiters[7],
  },
  {
    id: "j13", title: "Site Engineer Intern", company: "Larsen & Toubro", recruiterId: "r8", type: "internship",
    location: "Delhi NCR, India", salary: "₹25,000/month", department: "civil",
    description: "On-site internship working on highway and flyover construction projects. Learn project management, quality control, and safety standards.",
    requirements: ["Pursuing B.Tech in Civil", "AutoCAD basics", "Willingness to travel"],
    postedAt: "2026-02-04", trustScore: 92, verified: true, flagged: false,
    applicationUrl: "https://careers.larsentoubro.com", recruiter: recruiters[7],
  },
  {
    id: "j14", title: "BIM Engineer", company: "Tata Consultancy Services", recruiterId: "r7", type: "job",
    location: "Hyderabad, India", salary: "₹7-12 LPA", department: "civil",
    description: "Create 3D BIM models for commercial buildings using Revit. Coordinate MEP and structural models for clash detection.",
    requirements: ["B.Tech in Civil", "Revit proficiency", "BIM certification preferred"],
    postedAt: "2026-02-02", trustScore: 89, verified: true, flagged: false,
    applicationUrl: "https://careers.tcs.com", recruiter: recruiters[6],
  },

  // ── Mechanical Engineering ──
  {
    id: "j15", title: "Automotive Design Engineer", company: "Mahindra & Mahindra", recruiterId: "r11", type: "job",
    location: "Pune, India", salary: "₹12-22 LPA", department: "mechanical",
    description: "Design vehicle chassis and body structures using CATIA V5 and HyperMesh. Work on EV platform development and lightweight design optimization.",
    requirements: ["B.Tech/M.Tech in Mechanical", "CATIA V5, HyperMesh", "Automotive industry exp"],
    postedAt: "2026-02-07", trustScore: 95, verified: true, flagged: false,
    applicationUrl: "https://careers.mahindra.com", recruiter: recruiters[10],
  },
  {
    id: "j16", title: "Manufacturing Intern", company: "Bosch India", recruiterId: "r10", type: "internship",
    location: "Jaipur, India", salary: "₹30,000/month", department: "mechanical",
    description: "Hands-on internship in manufacturing operations. Learn CNC machining, quality inspection, and lean manufacturing principles on the shop floor.",
    requirements: ["Pursuing B.Tech in Mechanical", "AutoCAD/SolidWorks", "Shop floor enthusiasm"],
    postedAt: "2026-02-05", trustScore: 91, verified: true, flagged: false,
    applicationUrl: "https://careers.bosch.com", recruiter: recruiters[9],
  },
  {
    id: "j17", title: "HVAC Design Engineer", company: "Siemens India", recruiterId: "r12", type: "job",
    location: "Bangalore, India", salary: "₹8-14 LPA", department: "mechanical",
    description: "Design HVAC systems for smart buildings and industrial facilities. Perform load calculations and duct design using Carrier HAP.",
    requirements: ["B.Tech in Mechanical", "Carrier HAP, AutoCAD", "HVAC design knowledge"],
    postedAt: "2026-02-03", trustScore: 88, verified: true, flagged: false,
    applicationUrl: "https://jobs.siemens.com", recruiter: recruiters[11],
  },
  {
    id: "j5", title: "Cloud Engineer", company: "Wipro", recruiterId: "r5", type: "job",
    location: "Chennai, India", salary: "₹8-15 LPA", department: "software",
    description: "Design and manage cloud infrastructure for enterprise clients using AWS and Azure. Automate deployments with Terraform.",
    requirements: ["B.Tech in CS/IT", "AWS/Azure certified", "2+ years experience"],
    postedAt: "2026-01-28", trustScore: 90, verified: true, flagged: false,
    applicationUrl: "https://careers.wipro.com", recruiter: recruiters[4],
  },

  // ── New LinkedIn-sourced Jobs ──

  // Software
  {
    id: "j18", title: "SDE-1 Backend Engineer", company: "Amazon India", recruiterId: "r13", type: "job",
    location: "Hyderabad, India", salary: "₹22-38 LPA", department: "software",
    description: "Build scalable microservices powering Amazon's e-commerce platform. Work with Java, AWS Lambda, DynamoDB, and distributed systems at massive scale.",
    requirements: ["B.Tech/M.Tech in CS", "Java/Python proficiency", "Data structures & algorithms", "System design knowledge"],
    postedAt: "2026-02-10", trustScore: 97, verified: true, flagged: false,
    applicationUrl: "https://www.amazon.jobs", recruiter: recruiters[12],
  },
  {
    id: "j19", title: "Product Engineer - CRM", company: "Zoho Corporation", recruiterId: "r14", type: "job",
    location: "Chennai, India", salary: "₹8-16 LPA", department: "software",
    description: "Develop features for Zoho CRM used by 250K+ businesses worldwide. Full-stack role with Java backend and JavaScript frontend.",
    requirements: ["B.Tech in CS/IT", "Java, JavaScript", "REST APIs", "SQL databases"],
    postedAt: "2026-02-09", trustScore: 92, verified: true, flagged: false,
    applicationUrl: "https://careers.zoho.com", recruiter: recruiters[13],
  },
  {
    id: "j20", title: "Software Development Intern", company: "Flipkart", recruiterId: "r15", type: "internship",
    location: "Bangalore, India", salary: "₹60,000/month", department: "software",
    description: "6-month internship with Flipkart's supply chain tech team. Build ML-powered logistics optimization tools using Python and Spark.",
    requirements: ["Pursuing B.Tech/M.Tech in CS", "Python, SQL", "ML basics preferred", "Strong problem-solving"],
    postedAt: "2026-02-11", trustScore: 94, verified: true, flagged: false,
    applicationUrl: "https://www.flipkartcareers.com", recruiter: recruiters[14],
  },
  {
    id: "j21", title: "Full Stack Developer", company: "HCL Technologies", recruiterId: "r17", type: "job",
    location: "Noida, India", salary: "₹7-13 LPA", department: "software",
    description: "Develop enterprise web applications using Angular, Node.js, and PostgreSQL for global banking clients.",
    requirements: ["B.Tech in CS/IT", "Angular/React", "Node.js, Express", "2+ years experience"],
    postedAt: "2026-02-08", trustScore: 89, verified: true, flagged: false,
    applicationUrl: "https://www.hcltech.com/careers", recruiter: recruiters[16],
  },
  {
    id: "j22", title: "Data Analyst - Jio Platforms", company: "Reliance Industries", recruiterId: "r16", type: "job",
    location: "Mumbai, India", salary: "₹10-18 LPA", department: "software",
    description: "Analyze user behavior data from 450M+ Jio subscribers. Build dashboards and predictive models using Python, Tableau, and BigQuery.",
    requirements: ["B.Tech/M.Tech in CS/Stats", "Python, SQL", "Tableau/PowerBI", "Statistics knowledge"],
    postedAt: "2026-02-12", trustScore: 91, verified: true, flagged: false,
    applicationUrl: "https://careers.ril.com", recruiter: recruiters[15],
  },
  {
    id: "j23", title: "SAP Consultant - Fresher", company: "Accenture India", recruiterId: "r18", type: "job",
    location: "Bangalore, India", salary: "₹6-10 LPA", department: "software",
    description: "Join Accenture's SAP practice and work on ERP implementations for Fortune 500 clients. Full training provided for freshers.",
    requirements: ["B.Tech in any branch", "Strong communication", "Willingness to learn SAP", "Analytical mindset"],
    postedAt: "2026-02-10", trustScore: 90, verified: true, flagged: false,
    applicationUrl: "https://www.accenture.com/in-en/careers", recruiter: recruiters[17],
  },

  // Hardware
  {
    id: "j24", title: "5G Modem Engineer", company: "Qualcomm India", recruiterId: "r22", type: "job",
    location: "Hyderabad, India", salary: "₹20-35 LPA", department: "hardware",
    description: "Design and verify 5G NR modem subsystems using Verilog/SystemVerilog. Work on next-gen Snapdragon chipsets.",
    requirements: ["M.Tech in ECE/VLSI", "Verilog, SystemVerilog", "5G/LTE protocol knowledge", "UVM verification"],
    postedAt: "2026-02-11", trustScore: 96, verified: true, flagged: false,
    applicationUrl: "https://www.qualcomm.com/company/careers", recruiter: recruiters[21],
  },
  {
    id: "j25", title: "Hardware Test Engineer", company: "Samsung R&D India", recruiterId: "r21", type: "job",
    location: "Bangalore, India", salary: "₹12-22 LPA", department: "hardware",
    description: "Develop test frameworks for Samsung's mobile SoC platforms. Work with JTAG, oscilloscopes, and automated test equipment.",
    requirements: ["B.Tech/M.Tech in ECE", "PCB testing experience", "Python/Perl scripting", "Lab equipment proficiency"],
    postedAt: "2026-02-09", trustScore: 93, verified: true, flagged: false,
    applicationUrl: "https://www.samsung.com/in/aboutsamsung/careers", recruiter: recruiters[20],
  },
  {
    id: "j26", title: "IoT Embedded Intern", company: "Reliance Industries", recruiterId: "r16", type: "internship",
    location: "Pune, India", salary: "₹40,000/month", department: "hardware",
    description: "Develop IoT sensor nodes for Reliance's smart factory initiative. Program ESP32/STM32 microcontrollers with FreeRTOS.",
    requirements: ["Pursuing B.Tech in ECE/EEE", "C/C++ embedded programming", "Arduino/ESP32 projects", "Basic circuit design"],
    postedAt: "2026-02-13", trustScore: 90, verified: true, flagged: false,
    applicationUrl: "https://careers.ril.com", recruiter: recruiters[15],
  },

  // Mechanical
  {
    id: "j27", title: "EV Powertrain Engineer", company: "Tata Motors", recruiterId: "r19", type: "job",
    location: "Pune, India", salary: "₹14-25 LPA", department: "mechanical",
    description: "Design electric vehicle powertrain systems for Tata's EV lineup. Work on motor selection, battery pack integration, and thermal management.",
    requirements: ["B.Tech/M.Tech in Mechanical/Auto", "EV powertrain knowledge", "MATLAB/Simulink", "3+ years experience"],
    postedAt: "2026-02-10", trustScore: 94, verified: true, flagged: false,
    applicationUrl: "https://www.tatamotors.com/careers", recruiter: recruiters[18],
  },
  {
    id: "j28", title: "Vehicle Testing Intern", company: "Hyundai India", recruiterId: "r20", type: "internship",
    location: "Chennai, India", salary: "₹35,000/month", department: "mechanical",
    description: "6-month internship in Hyundai's vehicle testing division. Conduct NVH testing, durability analysis, and crash simulation support.",
    requirements: ["Pursuing B.Tech in Mechanical", "AutoCAD/CATIA basics", "Automotive passion", "Good analytical skills"],
    postedAt: "2026-02-12", trustScore: 91, verified: true, flagged: false,
    applicationUrl: "https://www.hyundai.com/in/en/careers", recruiter: recruiters[19],
  },
  {
    id: "j29", title: "Robotics Engineer", company: "Bosch India", recruiterId: "r10", type: "job",
    location: "Bangalore, India", salary: "₹15-24 LPA", department: "mechanical",
    description: "Develop robotic automation solutions for Bosch's Industry 4.0 initiatives. Program industrial robots and design end-effectors.",
    requirements: ["B.Tech/M.Tech in Mechanical/Mechatronics", "ROS framework", "Python/C++", "Robot kinematics"],
    postedAt: "2026-02-08", trustScore: 93, verified: true, flagged: false,
    applicationUrl: "https://careers.bosch.com", recruiter: recruiters[9],
  },

  // Civil
  {
    id: "j30", title: "Highway Design Engineer", company: "Larsen & Toubro", recruiterId: "r8", type: "job",
    location: "Mumbai, India", salary: "₹12-20 LPA", department: "civil",
    description: "Design national highway alignments and interchanges using Civil 3D and MX Road. Work on NHAI mega projects across India.",
    requirements: ["B.Tech/M.Tech in Civil", "Civil 3D, MX Road", "Highway design codes", "3+ years experience"],
    postedAt: "2026-02-11", trustScore: 94, verified: true, flagged: false,
    applicationUrl: "https://careers.larsentoubro.com", recruiter: recruiters[7],
  },
  {
    id: "j31", title: "Smart City Project Intern", company: "Tata Consultancy Services", recruiterId: "r7", type: "internship",
    location: "Pune, India", salary: "₹30,000/month", department: "civil",
    description: "Work on IoT-integrated smart city infrastructure projects. Support GIS mapping, traffic modeling, and urban planning initiatives.",
    requirements: ["Pursuing B.Tech in Civil", "GIS/Remote Sensing basics", "AutoCAD", "Interest in urban planning"],
    postedAt: "2026-02-13", trustScore: 89, verified: true, flagged: false,
    applicationUrl: "https://careers.tcs.com", recruiter: recruiters[6],
  },
  {
    id: "j32", title: "Water Resources Engineer", company: "Reliance Industries", recruiterId: "r16", type: "job",
    location: "Jamnagar, India", salary: "₹9-15 LPA", department: "civil",
    description: "Design water treatment plants and pipeline networks for Reliance's refinery complex. Work on effluent treatment and rainwater harvesting systems.",
    requirements: ["B.Tech in Civil/Environmental", "HEC-RAS, EPANET", "Water treatment knowledge", "2+ years experience"],
    postedAt: "2026-02-09", trustScore: 90, verified: true, flagged: false,
    applicationUrl: "https://careers.ril.com", recruiter: recruiters[15],
  },

  // ── Flagged/Fraud ──
  {
    id: "j4", title: "Marketing Intern - URGENT HIRING $$", company: "TechStart Solutions", recruiterId: "r4", type: "internship",
    location: "Remote", salary: "₹1,00,000/month + iPhone", department: "software",
    description: "Earn big money from home! No experience needed. Just pay a small registration fee of ₹5000 to get started.",
    requirements: ["No experience needed", "Pay registration fee"],
    postedAt: "2026-02-07", trustScore: 12, verified: false, flagged: true,
    flagReason: "Scam keywords detected: 'registration fee', unrealistic salary, urgency tactics",
    applicationUrl: "#", recruiter: recruiters[3],
  },
  {
    id: "j6", title: "Work From Home - Earn ₹50K Daily!!!", company: "QuickJobs Corp", recruiterId: "r6", type: "job",
    location: "Remote", salary: "₹50,000/day", department: "software",
    description: "Easy money! Click links and earn. Send your bank details to start immediately.",
    requirements: ["Phone with internet", "Bank account details"],
    postedAt: "2026-02-08", trustScore: 5, verified: false, flagged: true,
    flagReason: "Multiple fraud indicators: unrealistic pay, request for bank details, suspicious domain",
    applicationUrl: "#", recruiter: recruiters[5],
  },
];

export const fraudAlerts: FraudAlert[] = [
  { id: "f1", postingId: "j4", reason: "Registration fee required — common scam pattern detected", severity: "high", timestamp: "2026-02-07T14:30:00", resolved: false },
  { id: "f2", postingId: "j6", reason: "Request for bank details and unrealistic daily pay of ₹50,000", severity: "high", timestamp: "2026-02-08T09:15:00", resolved: false },
  { id: "f3", postingId: "j4", reason: "Unverified company domain: techstart.io — no business records found", severity: "medium", timestamp: "2026-02-07T14:32:00", resolved: false },
];
