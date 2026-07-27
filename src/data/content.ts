/**
 * Single source of truth — keep this honest.
 * No fake companies, no placeholder projects on the live site.
 */

export const PROFILE = {
  name: "Barath V",
  fullName: "Barath Velu",
  role: "AI & Machine Learning Engineer",
  tagline:
    "I build ML systems that survive outside the notebook — clean Python, leakage-aware evaluation, and NLP pipelines a team can run.",
  availability: "Open to SDE & ML roles · Full-time & internships",
  email: "barathvelu777@gmail.com",
  phone: "+91 75501 40875",
  phoneTel: "+917550140875",
  location: "Chennai, India",
  github: "https://github.com/barathvelu1",
  githubHandle: "barathvelu1",
  linkedin: "",
  resumeUrl: "/resume.pdf",
  photo: "/assets/barath.png",
  cgpa: "8.0 / 10",
  college: "Jeppiaar Engineering College",
  degree: "B.E. Computer Science & Engineering (AI & ML)",
  university: "Anna University",
  yearLabel: "Pre-final year",
} as const;

export const HIGHLIGHTS = [
  { label: "Focus", value: "NLP · Supervised ML" },
  { label: "CGPA", value: "8.0 / 10" },
  { label: "Stage", value: "Pre-final year" },
  { label: "Base", value: "Chennai, IN" },
] as const;

export type SkillCategory = {
  name: string;
  skills: { name: string; level: number; years?: string }[];
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Machine Learning",
    skills: [
      { name: "Supervised Learning", level: 88, years: "2+" },
      { name: "Feature Engineering", level: 86, years: "2+" },
      { name: "Cross-Validation", level: 90, years: "2+" },
      { name: "Model Selection", level: 84, years: "2+" },
    ],
  },
  {
    name: "Deep Learning",
    skills: [
      { name: "Neural Networks", level: 78, years: "1+" },
      { name: "Representation Learning", level: 75, years: "1+" },
      { name: "Generalization focus", level: 80, years: "1+" },
    ],
  },
  {
    name: "NLP",
    skills: [
      { name: "Text Classification", level: 88, years: "2+" },
      { name: "Preprocessing & Tokenization", level: 90, years: "2+" },
      { name: "Feature Extraction", level: 85, years: "2+" },
      { name: "Text Analytics", level: 84, years: "2+" },
    ],
  },
  {
    name: "Data & Engineering",
    skills: [
      { name: "Python", level: 92, years: "3+" },
      { name: "Scikit-learn", level: 90, years: "2+" },
      { name: "Pandas / NumPy", level: 90, years: "3+" },
      { name: "MongoDB", level: 85, years: "2+" },
      { name: "Git", level: 88, years: "3+" },
      { name: "SQL", level: 82, years: "2+" },
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  summary: string;
  problem: string;
  approach: string;
  architecture: string;
  results: string;
  learned: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  status: "Active" | "Completed" | "In Progress";
  year: string;
  github?: string;
  demo?: string;
};

export const PROJECTS: Project[] = [
  {
    id: "nlp-pipeline",
    title: "End-to-End NLP Classification Pipeline",
    summary:
      "Full text → prediction pipeline with durable storage and evaluation in the loop.",
    problem:
      "Notebook classifiers rarely transfer: unclear stages, weak evaluation, no storage for inputs or outputs.",
    approach:
      "Modular stages: ingest → clean → features → train → evaluate → infer. MongoDB for documents and predictions.",
    architecture:
      "Linear pipeline with swappable stages; train/eval separated; inference shares feature code with training.",
    results:
      "Reproducible runs, stored predictions, evaluation wired into the workflow — not a one-off script.",
    learned:
      "Production ML is mostly data contracts and evaluation discipline, not model choice alone.",
    tags: ["Python", "NLP", "MongoDB", "Scikit-learn"],
    metrics: [
      { label: "Stages", value: "6" },
      { label: "Focus", value: "Reproducibility" },
      { label: "Status", value: "Active" },
    ],
    status: "Active",
    year: "2025–26",
    github: "https://github.com/barathvelu1",
  },
  {
    id: "supervised-ml",
    title: "Supervised ML Prediction System",
    summary:
      "Leakage-aware supervised workflow with CV-driven model selection and honest metrics.",
    problem:
      "Inflated notebook scores from leakage and single-split luck hide true generalization.",
    approach:
      "Strict train/validation boundaries, cross-validation, metric-first model comparison.",
    architecture:
      "Transforms fit on train only; evaluate on held-out folds; selection prefers generalization.",
    results:
      "Transparent performance reporting and a selection process you can defend in review.",
    learned:
      "The split protocol is part of the model — document it like an API.",
    tags: ["Python", "ML", "Feature Engineering", "Validation"],
    metrics: [
      { label: "Protocol", value: "CV" },
      { label: "Focus", value: "No leakage" },
      { label: "Status", value: "Completed" },
    ],
    status: "Completed",
    year: "2025",
    github: "https://github.com/barathvelu1",
  },
  {
    id: "representations",
    title: "Deep Learning Representation Experiments",
    summary:
      "Neural representation experiments prioritizing generalization over leaderboard chasing.",
    problem:
      "Chasing vanity metrics without understanding what the network learns.",
    approach:
      "Controlled experiments on architectures and representations for structured and text data.",
    architecture:
      "Small, measurable training loops with clear baselines and ablations.",
    results:
      "Research cadence: hypothesis → experiment → generalization check.",
    learned:
      "Representation quality shows up in transfer and robustness, not only train loss.",
    tags: ["Python", "Neural Nets", "Representations"],
    metrics: [
      { label: "Mode", value: "Research" },
      { label: "Focus", value: "Generalization" },
      { label: "Status", value: "In Progress" },
    ],
    status: "In Progress",
    year: "2026",
    github: "https://github.com/barathvelu1",
  },
];

export type TimelineItem = {
  type: "education" | "experience";
  title: string;
  org: string;
  period: string;
  bullets: string[];
  tech?: string[];
};

export const TIMELINE: TimelineItem[] = [
  {
    type: "education",
    title: "B.E. CSE (AI & ML)",
    org: "Jeppiaar Engineering College · Anna University",
    period: "Ongoing · Pre-final year",
    bullets: [
      "CGPA 8.0 / 10",
      "Focus: NLP, supervised ML, production-minded Python",
      "Building end-to-end pipelines beyond notebooks",
    ],
    tech: ["Python", "ML", "NLP"],
  },
];

export const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;
