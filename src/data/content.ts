import type { LucideIcon } from "lucide-react";
import {
  Brain,
  Code2,
  Cpu,
  Database,
  Layers,
  Sparkles,
} from "lucide-react";

export const PROFILE = {
  name: "Barath V",
  fullName: "Barath Velu",
  role: "AI & Machine Learning Engineer",
  tagline:
    "I turn messy data into reliable ML systems — production-minded Python, honest evaluation, and NLP pipelines teams can actually run.",
  availability: "Open to SDE & ML roles · Full-time & internships",
  email: "barathvelu777@gmail.com",
  phone: "7550140875",
  phoneDisplay: "+91 75501 40875",
  location: "Chennai, Tamil Nadu",
  github: "https://github.com/barathvelu1",
  githubHandle: "barathvelu1",
  cgpa: "8.0 / 10",
  college: "Jeppiaar Engineering College",
  degree: "B.E. Computer Science & Engineering (AI & ML)",
  university: "Affiliated to Anna University",
  year: "Pre-final year",
} as const;

export type SkillGroup = {
  group: string;
  icon: LucideIcon;
  items: string[];
  level: number;
};

export const SKILLS: SkillGroup[] = [
  {
    group: "Languages",
    icon: Code2,
    items: ["Python", "SQL", "TypeScript basics"],
    level: 92,
  },
  {
    group: "NLP",
    icon: Brain,
    items: [
      "Text Classification",
      "Preprocessing",
      "Tokenization",
      "Feature Extraction",
      "Text Analytics",
    ],
    level: 88,
  },
  {
    group: "Machine Learning",
    icon: Cpu,
    items: [
      "Supervised Learning",
      "Feature Engineering",
      "Cross-Validation",
      "Model Selection",
      "Metrics & Diagnostics",
    ],
    level: 86,
  },
  {
    group: "Deep Learning",
    icon: Sparkles,
    items: ["Neural Networks", "Representation Learning", "Generalization focus"],
    level: 78,
  },
  {
    group: "Data & Storage",
    icon: Database,
    items: ["MongoDB", "Data Pipelines", "ETL patterns", "Document stores"],
    level: 85,
  },
  {
    group: "Engineering",
    icon: Layers,
    items: ["Scikit-learn", "Pandas", "NumPy", "Git", "Clean Architecture"],
    level: 90,
  },
];

export const VALUE = [
  {
    title: "Ship systems, not demos",
    body: "I design metrics, data flow, and inference together so models survive outside a notebook and can be owned by a team.",
  },
  {
    title: "Honest evaluation",
    body: "Leakage-aware splits, cross-validation, and clear metrics. I report what the model actually does — not inflated scores.",
  },
  {
    title: "NLP on real text",
    body: "Classification and analytics built for noisy, real-world inputs — from raw documents to decisions you can trust.",
  },
] as const;

export type ProjectStatus = "Active" | "Completed" | "In Progress";

export type Project = {
  title: string;
  status: ProjectStatus;
  year: string;
  tags: string[];
  body: string;
  outcome: string;
  highlights: string[];
  /** Optional deep-link to implementation */
  href?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "End-to-End NLP Classification Pipeline",
    status: "Active",
    year: "2025–26",
    tags: ["Python", "NLP", "MongoDB", "Scikit-learn"],
    body: "Full pipeline from raw text to predictions: ingestion, cleaning, features, training, evaluation, and inference. MongoDB stores documents and outputs for a path toward serving — not a one-off script.",
    outcome: "Reproducible pipeline · Storage-backed predictions",
    highlights: [
      "Modular stages you can swap or extend",
      "Durable storage for inputs & outputs",
      "Evaluation wired into the loop",
    ],
    href: "https://github.com/barathvelu1",
  },
  {
    title: "Supervised ML Prediction System",
    status: "Completed",
    year: "2025",
    tags: ["Python", "ML", "Feature Engineering", "Validation"],
    body: "End-to-end supervised workflow with careful train/validation design, cross-validation, and metric-driven model choice. Built to avoid leakage and overclaiming performance.",
    outcome: "Leakage-aware design · Metric-first selection",
    highlights: [
      "Feature engineering with clear train/test boundaries",
      "CV-based model comparison",
      "Transparent performance reporting",
    ],
    href: "https://github.com/barathvelu1",
  },
  {
    title: "Deep Learning Representation Experiments",
    status: "In Progress",
    year: "2026",
    tags: ["Python", "Neural Nets", "Representations"],
    body: "Experiments on neural representations for structured and text data — emphasizing generalization and what the model learns, not leaderboard chasing.",
    outcome: "Research rigor · Generalization first",
    highlights: [
      "Architecture & representation focus",
      "Generalization over vanity metrics",
      "Iterative, measured experiments",
    ],
    href: "https://github.com/barathvelu1",
  },
];

export const STATUS_STYLES: Record<ProjectStatus, string> = {
  Active: "border border-[oklch(0.7_0.13_150/0.45)] text-[oklch(0.8_0.12_150)]",
  "In Progress": "border border-[oklch(0.7_0.15_260/0.4)] text-[oklch(0.8_0.12_260)]",
  Completed: "border border-[oklch(0.65_0.05_260/0.4)] text-[oklch(0.75_0.04_260)]",
};

export const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Work" },
  { id: "contact", label: "Contact" },
] as const;

export const SECTIONS = [
  { id: "top", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Work" },
  { id: "contact", label: "Contact" },
] as const;

export const PORTRAIT_URL = "/assets/barath.png";

export function mailOpportunity(subject = "Opportunity for Barath V — SDE / ML") {
  return `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject)}`;
}
