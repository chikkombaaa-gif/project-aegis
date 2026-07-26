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
    "I build production-ready NLP and ML systems — clean Python, rigorous evaluation, and pipelines that survive outside the notebook.",
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
} as const;

export type SkillGroup = {
  group: string;
  icon: LucideIcon;
  items: string[];
  level: number;
};

export const SKILLS: SkillGroup[] = [
  { group: "Languages", icon: Code2, items: ["Python", "SQL"], level: 92 },
  {
    group: "NLP",
    icon: Brain,
    items: ["Text Classification", "Preprocessing", "Tokenization", "Text Analytics"],
    level: 88,
  },
  {
    group: "Machine Learning",
    icon: Cpu,
    items: ["Supervised Learning", "Feature Engineering", "Cross-Validation", "Model Selection"],
    level: 86,
  },
  {
    group: "Deep Learning",
    icon: Sparkles,
    items: ["Neural Networks", "Representation Learning"],
    level: 78,
  },
  {
    group: "Data & Storage",
    icon: Database,
    items: ["MongoDB", "Data Pipelines", "ETL patterns"],
    level: 85,
  },
  {
    group: "Engineering",
    icon: Layers,
    items: ["Scikit-learn", "Pandas", "NumPy", "Git", "Clean Code"],
    level: 90,
  },
];

export const VALUE = [
  {
    title: "Ship, don't just experiment",
    body: "Models are products. Metrics, data handling, and inference are designed together — never as afterthoughts.",
  },
  {
    title: "Python that becomes systems",
    body: "Modular, readable Python with MongoDB. Pipelines that move from prototype to something a team can run.",
  },
  {
    title: "NLP for real data",
    body: "From raw text to structured insight. Classification and analytics built for messy, real-world inputs.",
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
};

export const PROJECTS: Project[] = [
  {
    title: "End-to-End NLP Classification Pipeline",
    status: "Active",
    year: "2025–26",
    tags: ["Python", "NLP", "MongoDB", "Scikit-learn"],
    body: "Complete pipeline: ingestion → preprocessing → features → training → evaluation → inference. MongoDB for durable document and prediction storage. Structured for reproducibility and a clear path to serving.",
    outcome: "Production architecture · Reproducible evaluation",
  },
  {
    title: "Supervised ML Prediction System",
    status: "Completed",
    year: "2025",
    tags: ["Python", "ML", "Feature Engineering", "Validation"],
    body: "Full supervised workflow with leakage-aware splits, cross-validation, and metric-driven model selection. Honest performance reporting — not inflated notebook scores.",
    outcome: "Evaluation discipline · Leakage-aware design",
  },
  {
    title: "Deep Learning Representation Experiments",
    status: "In Progress",
    year: "2026",
    tags: ["Python", "Neural Nets", "Representation Learning"],
    body: "Neural architectures for stronger representations on structured and text data. Focus on what the model learns and how it generalizes — not leaderboard chasing.",
    outcome: "Research mindset · Generalization first",
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

export function mailOpportunity(subject = "Opportunity for Barath V") {
  return `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject)}`;
}
