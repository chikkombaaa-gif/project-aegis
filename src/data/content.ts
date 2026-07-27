export const PROFILE = {
  name: "Barath V",
  fullName: "Barath Velu",
  role: "AI & Machine Learning Engineer",
  tagline:
    "I build ML systems that work outside the notebook — Python, honest evaluation, and NLP pipelines a team can run and own.",
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
  photo: "/assets/barath.png",
} as const;

export const VALUE = [
  {
    title: "Ship systems, not demos",
    body: "Metrics, data flow, and inference designed together so models survive outside a notebook and can be owned by a team.",
  },
  {
    title: "Honest evaluation",
    body: "Leakage-aware splits, cross-validation, and clear metrics. I report what the model actually does — not inflated scores.",
  },
  {
    title: "NLP on real text",
    body: "Classification and analytics built for noisy inputs — from raw documents to decisions you can defend in review.",
  },
] as const;

export type SkillGroup = {
  group: string;
  level: number;
  items: string[];
};

export const SKILLS: SkillGroup[] = [
  {
    group: "Languages",
    level: 92,
    items: ["Python", "SQL", "TypeScript basics"],
  },
  {
    group: "NLP",
    level: 88,
    items: ["Text Classification", "Preprocessing", "Tokenization", "Feature Extraction", "Text Analytics"],
  },
  {
    group: "Machine Learning",
    level: 86,
    items: ["Supervised Learning", "Feature Engineering", "Cross-Validation", "Model Selection", "Metrics"],
  },
  {
    group: "Deep Learning",
    level: 78,
    items: ["Neural Networks", "Representation Learning", "Generalization focus"],
  },
  {
    group: "Data & Storage",
    level: 85,
    items: ["MongoDB", "Data Pipelines", "ETL patterns", "Document stores"],
  },
  {
    group: "Engineering",
    level: 90,
    items: ["Scikit-learn", "Pandas", "NumPy", "Git", "Clean Architecture"],
  },
];

export type Project = {
  title: string;
  status: "Active" | "Completed" | "In Progress";
  year: string;
  tags: string[];
  body: string;
  outcome: string;
  highlights: string[];
  href?: string;
};

/**
 * Keep every claim true. Link real repos when they exist.
 * Recruiters check GitHub — empty or profile-only links hurt more than no link.
 */
export const PROJECTS: Project[] = [
  {
    title: "End-to-End NLP Classification Pipeline",
    status: "Active",
    year: "2025–26",
    tags: ["Python", "NLP", "MongoDB", "Scikit-learn"],
    body: "Full pipeline from raw text to predictions: ingestion, cleaning, features, training, evaluation, and inference. MongoDB stores documents and outputs so the path to serving is real — not a one-off notebook.",
    outcome: "Reproducible pipeline · Storage-backed predictions",
    highlights: [
      "Modular stages you can swap or extend",
      "Durable storage for inputs and outputs",
      "Evaluation wired into the training loop",
    ],
    href: "https://github.com/barathvelu1",
  },
  {
    title: "Supervised ML Prediction System",
    status: "Completed",
    year: "2025",
    tags: ["Python", "ML", "Feature Engineering", "Validation"],
    body: "End-to-end supervised workflow with strict train/validation boundaries, cross-validation, and metric-driven model choice — built to avoid leakage and overclaiming performance.",
    outcome: "Leakage-aware design · Metric-first selection",
    highlights: [
      "Feature transforms fit on train only",
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
    body: "Experiments on neural representations for structured and text data — prioritising generalisation and what the model learns, not leaderboard chasing.",
    outcome: "Research rigor · Generalisation first",
    highlights: [
      "Architecture and representation focus",
      "Generalisation over vanity metrics",
      "Measured, iterative experiments",
    ],
    href: "https://github.com/barathvelu1",
  },
];

export const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Work" },
  { id: "contact", label: "Contact" },
] as const;

export const MARQUEE = [
  "Python",
  "NLP",
  "Machine Learning",
  "MongoDB",
  "Scikit-learn",
  "Feature Engineering",
  "Cross-Validation",
  "Model Evaluation",
  "Data Pipelines",
  "Git",
  "Pandas",
  "NumPy",
  "SQL",
  "Production ML",
];
