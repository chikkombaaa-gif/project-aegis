import { createFileRoute } from "@tanstack/react-router";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Github,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Brain,
  Database,
  Code2,
  Cpu,
  GraduationCap,
  ExternalLink,
  Layers,
  Zap,
  Target,
  CheckCircle2,
} from "lucide-react";
import { Background } from "@/components/portfolio/Background";
import { Stats } from "@/components/portfolio/Stats";
import { Magnetic } from "@/components/portfolio/Magnetic";
import { TextReveal } from "@/components/portfolio/TextReveal";
import { useLenis } from "@/hooks/useLenis";

const PORTRAIT_URL = "/assets/barath.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Barath V — AI & ML Engineer | Python · NLP · Production ML" },
      {
        name: "description",
        content:
          "Barath V — Pre-final year BE CSE (AI & ML) engineer building production-ready NLP pipelines, supervised ML systems, and data-backed intelligent applications with Python and MongoDB.",
      },
      { property: "og:title", content: "Barath V — AI & ML Engineer" },
      {
        property: "og:description",
        content:
          "Production-oriented AI & ML engineer. Python, NLP, Machine Learning, MongoDB. Open for high-impact SDE & ML roles.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0c0c12" },
    ],
  }),
  component: Index,
});

const PROFILE = {
  name: "Barath V",
  fullName: "Barath Velu",
  role: "AI & Machine Learning Engineer",
  tagline:
    "I design and ship production-ready NLP and ML systems — clean Python, solid evaluation, and data pipelines that hold up beyond the notebook.",
  email: "barathvelu777@gmail.com",
  phone: "7550140875",
  location: "Chennai, Tamil Nadu",
  github: "https://github.com/barathvelu1",
  githubHandle: "barathvelu1",
  cgpa: "8.0 / 10",
  college: "Jeppiaar Engineering College",
  degree: "B.E. Computer Science & Engineering (AI & ML)",
  university: "Affiliated to Anna University",
};

const SKILLS: { group: string; icon: any; items: string[]; level: number }[] = [
  {
    group: "Languages",
    icon: Code2,
    items: ["Python", "SQL"],
    level: 92,
  },
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

const VALUE = [
  {
    title: "Ship, don't just experiment",
    body: "I treat models as products. Evaluation metrics, data handling, and inference paths are designed together — not as afterthoughts.",
  },
  {
    title: "Python that scales to systems",
    body: "Readable, modular Python backed by MongoDB. Pipelines that can move from prototype to something a team can actually run.",
  },
  {
    title: "NLP with real-world intent",
    body: "From raw text to structured insight. Classification, analytics, and preprocessing built for the messiness of real data.",
  },
];

const PROJECTS = [
  {
    title: "End-to-End NLP Classification Pipeline",
    status: "Active",
    year: "2025–26",
    tags: ["Python", "NLP", "MongoDB", "Scikit-learn"],
    body: "Full pipeline from raw text ingestion → preprocessing → feature extraction → model training → evaluation → inference. MongoDB used for durable storage of documents and predictions. Built with production structure in mind: clear stages, reproducible evaluation, and a path to serving.",
    outcome: "Production-oriented architecture · Reproducible evaluation",
  },
  {
    title: "Supervised ML Prediction System",
    status: "Completed",
    year: "2025",
    tags: ["Python", "ML", "Feature Engineering", "Validation"],
    body: "Complete supervised learning workflow: data cleaning, feature design, train/validation splits, cross-validation, and metric-driven model selection. Emphasis on avoiding leakage and reporting honest performance — not inflated notebook scores.",
    outcome: "Strong evaluation discipline · Leakage-aware design",
  },
  {
    title: "Deep Learning Representation Experiments",
    status: "In Progress",
    year: "2026",
    tags: ["Python", "Neural Nets", "Representation Learning"],
    body: "Exploring neural architectures for better representations on structured and text data. Focus on understanding what the model learns and how it generalizes — not just chasing leaderboard metrics.",
    outcome: "Research mindset · Generalization focus",
  },
];

function Index() {
  useLenis();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });

  return (
    <>
      <Background />

      <motion.div
        style={{ scaleX }}
        className="fixed left-0 right-0 top-0 z-50 h-[2px] origin-left"
      >
        <div
          className="h-full w-full"
          style={{ background: "oklch(0.72 0.09 250)" }}
        />
      </motion.div>

      <Navbar />

      <main className="relative">
        <Hero />
        <About />
        <Stats />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
      <ScrollTop />
      <SectionDots />
    </>
  );
}

function SectionDots() {
  const sections = [
    { id: "top", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Work" },
    { id: "contact", label: "Contact" },
  ];
  const [active, setActive] = useState("top");
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);
  return (
    <nav
      aria-label="Section navigation"
      className="pointer-events-auto fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 md:block"
    >
      <ul className="flex flex-col items-end gap-4">
        {sections.map((s) => {
          const on = active === s.id;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-label={`Go to ${s.label}`}
                className="group flex items-center gap-3"
              >
                <span
                  className={`text-[9px] uppercase tracking-[0.35em] transition ${
                    on
                      ? "text-white opacity-100"
                      : "text-[oklch(0.7_0.03_260)] opacity-0 group-hover:opacity-100"
                  }`}
                >
                  {s.label}
                </span>
                <motion.span
                  animate={{ scale: on ? 1 : 0.7 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative block"
                >
                  <span
                    className={`block h-2 w-2 rounded-full transition ${
                      on
                        ? "bg-[oklch(0.75_0.22_260)]"
                        : "bg-[oklch(0.5_0.05_260)] group-hover:bg-[oklch(0.75_0.22_260)]"
                    }`}
                    style={{
                      boxShadow: on
                        ? "0 0 14px oklch(0.7 0.22 260), 0 0 28px oklch(0.55 0.25 260/0.7)"
                        : undefined,
                    }}
                  />
                </motion.span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="#top"
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className="glass fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full text-white/80 transition hover:text-white hover:glow-ring"
          aria-label="Scroll to top"
        >
          <ArrowUpRight className="h-4 w-4 -rotate-45" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  const links = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Work" },
    { id: "contact", label: "Contact" },
  ];
  return (
    <header
      className={`fixed left-0 right-0 top-0 z-40 transition-all ${
        scrolled
          ? "border-b border-[oklch(0.55_0.25_260/0.12)] backdrop-blur-xl"
          : ""
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-[oklch(0.75_0.05_260/0.25)] bg-[oklch(0.2_0.05_260/0.6)] text-[11px] font-semibold tracking-widest text-white">
            BV
          </span>
          <span className="text-xs font-medium tracking-[0.2em] text-[oklch(0.9_0.02_260)]">
            Barath Velu
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="group relative text-xs uppercase tracking-[0.25em] text-[oklch(0.8_0.02_260)] transition hover:text-white"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[oklch(0.7_0.22_260)] transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>
        <Magnetic>
          <a
            href={`mailto:${PROFILE.email}?subject=Opportunity%20for%20Barath%20V`}
            className="glass rounded-full px-4 py-2 text-xs uppercase tracking-[0.25em] transition hover:glow-ring"
          >
            Hire me
          </a>
        </Magnetic>
      </div>
    </header>
  );
}

function Portrait() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [10, -10]), {
    stiffness: 120,
    damping: 14,
  });
  const ry = useSpring(useTransform(mx, [0, 1], [-12, 12]), {
    stiffness: 120,
    damping: 14,
  });
  const sweepX = useSpring(useTransform(mx, [0, 1], ["-20%", "120%"]), {
    stiffness: 80,
    damping: 20,
  });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };
  const onLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative"
      style={{ perspective: 1200 }}
    >
      <div
        className="pointer-events-none absolute -inset-10 rounded-[2rem] blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, oklch(0.55 0.25 260 / 0.4), transparent 65%), radial-gradient(circle at 80% 90%, oklch(0.4 0.08 260 / 0.4), transparent 65%)",
        }}
      />

      <motion.div
        className="glass relative overflow-hidden rounded-[1.75rem] p-2"
        style={{
          boxShadow: "var(--shadow-elevated)",
          rotateX: rx,
          rotateY: ry,
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div
          className="relative overflow-hidden rounded-[1.4rem]"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src={PORTRAIT_URL}
            alt="Barath V — AI & ML Engineer"
            className="block h-[480px] w-[360px] object-cover object-center transition duration-[1200ms] ease-out will-change-transform hover:scale-[1.05] md:h-[520px] md:w-[400px]"
            loading="eager"
          />
          <motion.div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(115deg, transparent 40%, oklch(0.95 0.05 260 / 0.18) 50%, transparent 60%)",
              x: sweepX,
              mixBlendMode: "screen",
            }}
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, transparent 40%, oklch(0.08 0.04 260 / 0.85) 100%), radial-gradient(ellipse at 50% 0%, oklch(0.55 0.25 260 / 0.15), transparent 60%)",
            }}
          />
          <div className="absolute inset-x-4 bottom-4 flex items-end justify-between">
            <div>
              <div className="text-[9px] uppercase tracking-[0.35em] text-[oklch(0.75_0.05_260)]">
                AI & ML Engineer
              </div>
              <div className="display mt-1 text-lg text-white">Barath V</div>
            </div>
            <div className="flex flex-col items-end gap-1 text-right">
              <span className="flex items-center gap-1.5 text-[9px] uppercase tracking-[0.3em] text-[oklch(0.85_0.05_150)]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[oklch(0.7_0.13_150)]" />
                Open to offers
              </span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-[oklch(0.7_0.01_260)]">
                Chennai, IN
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: hp } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(hp, [0, 1], [0, 120]);
  const heroOpacity = useTransform(hp, [0, 0.8], [1, 0]);
  const heroBlur = useTransform(hp, [0, 1], ["blur(0px)", "blur(6px)"]);

  return (
    <section
      id="top"
      ref={heroRef}
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-32 md:pt-24"
    >
      <motion.div
        style={{ y: heroY, opacity: heroOpacity, filter: heroBlur }}
        className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[oklch(0.7_0.01_260/0.2)] bg-[oklch(0.2_0.005_260/0.5)] px-3.5 py-1.5 text-[10px] uppercase tracking-[0.28em] text-[oklch(0.85_0.01_260)]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[oklch(0.72_0.09_250)] opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[oklch(0.72_0.09_250)]" />
            </span>
            Open for SDE & ML roles · High-impact teams
          </div>

          <div className="mb-3 text-[10px] uppercase tracking-[0.5em] text-[oklch(0.7_0.03_260)]">
            <TextReveal text="AI · ML · Production Systems" delay={0.28} />
          </div>

          <h1 className="display overflow-hidden text-5xl leading-[1.05] md:text-7xl">
            <TextReveal
              text={PROFILE.name}
              className="text-gradient inline-block"
              delay={0.4}
            />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.8 }}
            className="mt-4 max-w-lg text-xl font-normal text-[oklch(0.88_0.02_260)]"
          >
            {PROFILE.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-5 max-w-xl text-sm leading-relaxed text-[oklch(0.72_0.03_260)] md:text-[15px]"
          >
            {PROFILE.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, duration: 0.7 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <Magnetic>
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[oklch(0.15_0.005_260)] transition hover:bg-[oklch(0.92_0.005_260)]"
              >
                See my work{" "}
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={`mailto:${PROFILE.email}?subject=Opportunity%20for%20Barath%20V`}
                className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.7_0.01_260/0.25)] px-6 py-3.5 text-sm font-medium text-white transition hover:border-[oklch(0.7_0.01_260/0.45)] hover:bg-[oklch(0.2_0.03_260/0.4)]"
              >
                Contact <Mail className="h-4 w-4" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.7_0.01_260/0.25)] px-5 py-3.5 text-sm font-medium text-[oklch(0.85_0.01_260)] transition hover:border-[oklch(0.7_0.01_260/0.45)]"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            </Magnetic>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.45, duration: 0.8 }}
            className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.25em] text-[oklch(0.7_0.03_260)]"
          >
            <span className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5" /> {PROFILE.location}
            </span>
            <span className="flex items-center gap-2">
              <GraduationCap className="h-3.5 w-3.5" /> CGPA {PROFILE.cgpa}
            </span>
            <span className="flex items-center gap-2">
              <Target className="h-3.5 w-3.5 text-[oklch(0.72_0.09_250)]" /> Pre-final year
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center"
        >
          <Portrait />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.65, duration: 0.8 }}
        style={{ opacity: useTransform(hp, [0, 0.15], [1, 0]) }}
        className="pointer-events-none absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[9px] uppercase tracking-[0.4em] text-[oklch(0.7_0.03_260)]">
            Scroll
          </span>
          <div className="relative h-9 w-[1px] overflow-hidden bg-[oklch(0.55_0.25_260/0.25)]">
            <motion.div
              className="absolute inset-x-0 top-0 h-3"
              style={{
                background:
                  "linear-gradient(180deg, transparent, oklch(0.75 0.22 260))",
              }}
              animate={{ y: ["-100%", "300%"] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative px-6 py-28 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <div className="mb-3 flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-[oklch(0.7_0.01_260)]">
            <span className="h-px w-8 bg-[oklch(0.72_0.09_250)]" />
            {eyebrow}
          </div>
          <h2 className="display max-w-3xl text-4xl text-white md:text-5xl">{title}</h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="About" title="I build systems that ship.">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass col-span-1 rounded-3xl p-8 md:col-span-2"
        >
          <p className="text-lg leading-relaxed text-[oklch(0.88_0.02_260)]">
            Pre-final year{" "}
            <span className="text-white">BE CSE (AI & ML)</span> at{" "}
            <span className="text-white">{PROFILE.college}</span>. I work at the
            intersection of machine learning and software engineering — writing Python that
            turns data into decisions and keeps working after the demo.
          </p>
          <p className="mt-5 text-[oklch(0.75_0.02_260)]">
            Looking for a high-caliber SDE or ML role where ownership, code quality, and real
            impact matter. I want to join a team that ships, and contribute from day one.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {VALUE.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-[oklch(0.55_0.25_260/0.2)] bg-[oklch(0.15_0.05_260/0.4)] p-5"
              >
                <div className="mb-2 flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[oklch(0.7_0.15_260)]">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  0{i + 1}
                </div>
                <div className="text-sm font-semibold text-white">{s.title}</div>
                <p className="mt-2 text-xs leading-relaxed text-[oklch(0.72_0.03_260)]">
                  {s.body}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="glass rounded-3xl p-8"
        >
          <div className="mb-6 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[oklch(0.7_0.15_260)]">
            <GraduationCap className="h-4 w-4" /> Education
          </div>
          <div className="relative border-l border-[oklch(0.55_0.25_260/0.3)] pl-6">
            <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-[oklch(0.55_0.25_260)] shadow-[0_0_20px_oklch(0.55_0.25_260)]" />
            <div className="text-sm font-semibold text-white">{PROFILE.degree}</div>
            <div className="mt-1 text-xs text-[oklch(0.75_0.02_260)]">{PROFILE.college}</div>
            <div className="mt-0.5 text-xs text-[oklch(0.65_0.03_260)]">
              {PROFILE.university}
            </div>
            <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-[oklch(0.7_0.01_260/0.2)] px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-[oklch(0.85_0.01_260)]">
              CGPA {PROFILE.cgpa}
            </div>
            <p className="mt-4 text-xs leading-relaxed text-[oklch(0.7_0.02_260)]">
              Pre-final year. Actively building production-style ML systems and seeking roles
              with serious ownership.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-[oklch(0.55_0.25_260/0.25)] bg-[oklch(0.15_0.05_260/0.4)] p-4">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[oklch(0.7_0.15_260)]">
              <Zap className="h-3.5 w-3.5" /> Focus now
            </div>
            <p className="mt-2 text-xs leading-relaxed text-[oklch(0.82_0.02_260)]">
              Production NLP pipelines, rigorous ML evaluation, and the engineering habits that
              turn prototypes into reliable systems.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="Capabilities" title="Tools I use to deliver.">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.group}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="glass group relative overflow-hidden rounded-3xl p-6"
            >
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-0 blur-2xl transition group-hover:opacity-60"
                style={{ background: "oklch(0.55 0.25 260 / 0.6)" }}
              />
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[oklch(0.55_0.25_260/0.15)] text-[oklch(0.8_0.15_260)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-[oklch(0.7_0.03_260)]">
                      Domain
                    </div>
                    <div className="text-base font-semibold text-white">{s.group}</div>
                  </div>
                </div>
                <div className="display text-2xl text-[oklch(0.7_0.15_260)]">{s.level}</div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-full border border-[oklch(0.7_0.05_260/0.25)] bg-[oklch(0.2_0.05_260/0.6)] px-3 py-1 text-[11px] text-[oklch(0.85_0.02_260)]"
                  >
                    {it}
                  </span>
                ))}
              </div>
              <div className="mt-5 h-[3px] w-full overflow-hidden rounded-full bg-[oklch(0.22_0.005_260)]">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.15, ease: "easeOut", delay: 0.15 }}
                  className="h-full"
                  style={{ background: "oklch(0.72 0.09 250)" }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" eyebrow="Selected Work" title="Evidence of how I work.">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            className="glass group relative flex flex-col overflow-hidden rounded-3xl p-7"
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(circle at 30% 15%, oklch(0.55 0.25 260 / 0.28), transparent 55%)",
              }}
            />
            <div className="relative flex flex-1 flex-col">
              <div className="mb-5 flex items-start justify-between gap-3">
                <div className="display text-3xl text-[oklch(0.55_0.15_260)]">0{i + 1}</div>
                <div className="flex flex-col items-end gap-1.5">
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[9px] uppercase tracking-[0.2em] ${
                      p.status === "Active"
                        ? "border border-[oklch(0.7_0.13_150/0.45)] text-[oklch(0.8_0.12_150)]"
                        : p.status === "In Progress"
                          ? "border border-[oklch(0.7_0.15_260/0.4)] text-[oklch(0.8_0.12_260)]"
                          : "border border-[oklch(0.65_0.05_260/0.4)] text-[oklch(0.75_0.04_260)]"
                    }`}
                  >
                    {p.status}
                  </span>
                  <span className="text-[10px] tracking-[0.15em] text-[oklch(0.6_0.03_260)]">
                    {p.year}
                  </span>
                </div>
              </div>

              <h3 className="display text-xl leading-snug text-white">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[oklch(0.75_0.03_260)]">
                {p.body}
              </p>

              <div className="mt-5 border-t border-[oklch(0.55_0.25_260/0.15)] pt-4 text-[10px] uppercase tracking-[0.18em] text-[oklch(0.72_0.1_260)]">
                {p.outcome}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[oklch(0.55_0.25_260/0.3)] px-2.5 py-0.5 text-[10px] uppercase tracking-[0.12em] text-[oklch(0.8_0.1_260)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.a
        href={PROFILE.github}
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass group mt-8 flex items-center justify-between rounded-3xl p-6 transition hover:glow-ring"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[oklch(0.55_0.25_260/0.15)]">
            <Github className="h-6 w-6 text-white" />
          </div>
          <div>
            <div className="text-sm font-semibold text-white">
              github.com/{PROFILE.githubHandle}
            </div>
            <div className="text-xs text-[oklch(0.7_0.03_260)]">
              Code, experiments, and implementation details
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-[oklch(0.7_0.15_260)] transition group-hover:translate-x-1">
          <span className="hidden text-xs uppercase tracking-[0.2em] sm:inline">Open</span>
          <ExternalLink className="h-5 w-5" />
        </div>
      </motion.a>
    </Section>
  );
}

function Contact() {
  const items = [
    {
      icon: Mail,
      label: "Email",
      value: PROFILE.email,
      href: `mailto:${PROFILE.email}?subject=Opportunity%20for%20Barath%20V`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: PROFILE.phone,
      href: `tel:${PROFILE.phone}`,
    },
    {
      icon: Github,
      label: "GitHub",
      value: PROFILE.githubHandle,
      href: PROFILE.github,
    },
    {
      icon: MapPin,
      label: "Location",
      value: PROFILE.location,
      href: "#",
    },
  ];

  return (
    <Section id="contact" eyebrow="Contact" title="Ready when you are.">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass rounded-3xl p-8"
        >
          <p className="text-lg leading-relaxed text-[oklch(0.88_0.02_260)]">
            Hiring for AI, ML, or software engineering roles with real ownership? I am prepared
            to join, contribute, and ship.
          </p>
          <p className="mt-4 text-sm text-[oklch(0.72_0.03_260)]">
            Prefer a direct conversation. Send a note or reach out on any channel below.
          </p>

          <div className="mt-8 space-y-3">
            {items.map((it) => {
              const Icon = it.icon;
              return (
                <a
                  key={it.label}
                  href={it.href}
                  target={it.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-[oklch(0.55_0.25_260/0.2)] bg-[oklch(0.15_0.05_260/0.4)] p-4 transition hover:border-[oklch(0.55_0.25_260/0.55)] hover:bg-[oklch(0.55_0.25_260/0.08)]"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[oklch(0.55_0.25_260/0.15)] text-[oklch(0.8_0.15_260)]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.25em] text-[oklch(0.7_0.03_260)]">
                        {it.label}
                      </div>
                      <div className="text-sm font-medium text-white">{it.value}</div>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-[oklch(0.7_0.15_260)] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          onSubmit={(e) => {
            e.preventDefault();
            const f = e.currentTarget as HTMLFormElement;
            const name = (f.elements.namedItem("name") as HTMLInputElement)?.value ?? "";
            const msg =
              (f.elements.namedItem("message") as HTMLTextAreaElement)?.value ?? "";
            window.location.href = `mailto:${PROFILE.email}?subject=Opportunity%20from%20${encodeURIComponent(
              name,
            )}&body=${encodeURIComponent(msg)}`;
          }}
          className="glass rounded-3xl p-8"
        >
          <div className="mb-6 text-xs uppercase tracking-[0.3em] text-[oklch(0.7_0.15_260)]">
            Direct message
          </div>
          <div className="space-y-4">
            {[
              { name: "name", label: "Your name", type: "text" },
              { name: "email", label: "Work email", type: "email" },
            ].map((f) => (
              <label key={f.name} className="block">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[oklch(0.7_0.03_260)]">
                  {f.label}
                </span>
                <input
                  required
                  name={f.name}
                  type={f.type}
                  className="mt-1.5 w-full rounded-xl border border-[oklch(0.55_0.25_260/0.25)] bg-[oklch(0.12_0.04_260/0.6)] px-4 py-3 text-sm text-white outline-none transition focus:border-[oklch(0.55_0.25_260)] focus:glow-ring"
                />
              </label>
            ))}
            <label className="block">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[oklch(0.7_0.03_260)]">
                Message
              </span>
              <textarea
                required
                name="message"
                rows={4}
                placeholder="Role, team, or what you're looking for…"
                className="mt-1.5 w-full resize-none rounded-xl border border-[oklch(0.55_0.25_260/0.25)] bg-[oklch(0.12_0.04_260/0.6)] px-4 py-3 text-sm text-white outline-none transition placeholder:text-[oklch(0.5_0.02_260)] focus:border-[oklch(0.55_0.25_260)] focus:glow-ring"
              />
            </label>
            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[oklch(0.15_0.005_260)] transition hover:bg-[oklch(0.92_0.005_260)]"
            >
              Send message{" "}
              <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </div>
        </motion.form>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[oklch(0.55_0.25_260/0.15)] px-6 pb-12 pt-24">
      <motion.div
        aria-hidden
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none mx-auto mb-16 max-w-[1600px] px-4 text-center"
      >
        <div
          className="display text-[11vw] leading-[0.9] tracking-tight md:text-[9vw]"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.9 0.03 260 / 0.2), transparent 90%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            WebkitTextStroke: "1px oklch(0.75 0.05 260 / 0.3)",
          }}
        >
          Barath Velu
        </div>
      </motion.div>

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-[oklch(0.75_0.05_260/0.25)] text-[10px] font-semibold tracking-widest text-white/85">
            BV
          </span>
          <span className="text-xs tracking-[0.2em] text-[oklch(0.75_0.02_260)]">
            © {new Date().getFullYear()} {PROFILE.fullName}
          </span>
        </div>
        <div className="hidden text-[10px] uppercase tracking-[0.35em] text-[oklch(0.6_0.03_260)] md:block">
          Built for impact · Chennai, IN
        </div>
        <a
          href="#top"
          className="glass rounded-full px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-white transition hover:glow-ring"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
