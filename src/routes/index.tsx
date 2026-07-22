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
  Download,
  GitBranch as Github,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Brain,
  Database,
  Code2,
  Cpu,
  Rocket,
  GraduationCap,
  ChevronRight,
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
      { title: "Barath V — AI & ML Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Barath V — BE CSE (AI & ML) undergraduate specializing in Python, NLP, Machine Learning, Deep Learning, and MongoDB.",
      },
      { property: "og:title", content: "Barath V — AI & ML Engineer" },
      {
        property: "og:description",
        content:
          "Pre-final year AI & ML engineer building production-grade NLP and Machine Learning systems.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PROFILE = {
  name: "Barath V",
  role: "AI & Machine Learning Engineer",
  tagline:
    "Pre-final year BE CSE (AI & ML) undergraduate engineering production-ready NLP and ML systems with Python and MongoDB.",
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
  { group: "Languages", icon: Code2, items: ["Python"], level: 88 },
  { group: "AI / NLP", icon: Brain, items: ["Natural Language Processing", "Text Analytics"], level: 82 },
  { group: "Machine Learning", icon: Cpu, items: ["Supervised Learning", "Model Evaluation", "Feature Engineering"], level: 78 },
  { group: "Deep Learning", icon: Sparkles, items: ["Neural Networks", "Predictive Systems"], level: 74 },
  { group: "Databases", icon: Database, items: ["MongoDB"], level: 80 },
];

const STRENGTHS = [
  {
    title: "Programming & Backend",
    body: "Ships Python applications and data pipelines backed by MongoDB for reliable storage and retrieval.",
  },
  {
    title: "Machine Learning & Deep Learning",
    body: "Applies ML and DL fundamentals to design predictive systems that turn raw data into decisions.",
  },
  {
    title: "Natural Language Processing",
    body: "Builds NLP workflows that transform unstructured text into structured, real-world insight.",
  },
];

const FOCUS_AREAS = [
  {
    title: "NLP Pipelines",
    tags: ["Python", "NLP", "MongoDB"],
    body: "End-to-end text classification and processing pipelines — from ingestion to model inference.",
  },
  {
    title: "ML Prediction Systems",
    tags: ["Python", "ML", "Scikit-learn"],
    body: "Supervised learning workflows with careful data handling, feature design, and evaluation.",
  },
  {
    title: "Deep Learning Prototypes",
    tags: ["Python", "Deep Learning"],
    body: "Neural network prototypes exploring representation learning on structured and text data.",
  },
];

function Index() {
  useLenis();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });

  return (
    <>
      <Background />

      {/* scroll progress */}
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
        <Focus />
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
    { id: "focus", label: "Focus" },
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

function MouseGlow() {
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const sx = useSpring(x, { stiffness: 60, damping: 20, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 60, damping: 20, mass: 0.6 });
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const on = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", on);
    return () => window.removeEventListener("mousemove", on);
  }, [x, y]);
  const bg = useTransform(
    [sx, sy],
    ([px, py]) =>
      `radial-gradient(500px circle at ${px}px ${py}px, oklch(0.55 0.25 260 / 0.18), transparent 55%)`,
  );
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1] mix-blend-screen"
      style={{ background: bg }}
    />
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
    { id: "focus", label: "Work" },
    { id: "contact", label: "Contact" },
  ];
  return (
    <header
      className={`fixed left-0 right-0 top-0 z-40 transition-all ${
        scrolled ? "backdrop-blur-xl" : ""
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
        <a
          href={`mailto:${PROFILE.email}`}
          className="glass rounded-full px-4 py-2 text-xs uppercase tracking-[0.25em] transition hover:glow-ring"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <HeroInner />
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
      {/* Soft ambient glow */}
      <div
        className="pointer-events-none absolute -inset-10 rounded-[2rem] blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, oklch(0.55 0.25 260 / 0.35), transparent 65%), radial-gradient(circle at 80% 90%, oklch(0.4 0.08 260 / 0.35), transparent 65%)",
        }}
      />

      {/* Frame */}
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
            className="block h-[520px] w-[400px] object-cover object-center transition duration-[1200ms] ease-out will-change-transform hover:scale-[1.06]"
            loading="eager"
          />
          {/* Light sweep */}
          <motion.div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(115deg, transparent 40%, oklch(0.95 0.05 260 / 0.18) 50%, transparent 60%)",
              x: sweepX,
              mixBlendMode: "screen",
            }}
          />
          {/* Cinematic overlay */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, transparent 40%, oklch(0.08 0.04 260 / 0.85) 100%), radial-gradient(ellipse at 50% 0%, oklch(0.55 0.25 260 / 0.15), transparent 60%)",
            }}
          />
          {/* Name plate */}
          <div className="absolute inset-x-4 bottom-4 flex items-end justify-between">
            <div>
              <div className="text-[9px] uppercase tracking-[0.35em] text-[oklch(0.75_0.05_260)]">
                AI & ML Engineer
              </div>
              <div className="display mt-1 text-lg text-white">Barath V</div>
            </div>
            <div className="flex flex-col items-end gap-1 text-right">
              <span className="flex items-center gap-1.5 text-[9px] uppercase tracking-[0.3em] text-[oklch(0.85_0.1_25)]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[oklch(0.65_0.25_25)]" />
                Open to work
              </span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-[oklch(0.75_0.05_260)]">
                Chennai, IN
              </span>
            </div>
          </div>

        </motion.div>
      </motion.div>

    </motion.div>
  );
}

function HeroInner() {
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
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[oklch(0.7_0.01_260/0.2)] bg-[oklch(0.2_0.005_260/0.5)] px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-[oklch(0.85_0.01_260)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.72_0.09_250)]" />
            Available for internships
          </div>
          <div className="mb-3 text-[10px] uppercase tracking-[0.5em] text-[oklch(0.7_0.03_260)]">
            <TextReveal text="AI & Machine Learning" delay={0.35} />
          </div>
          <h1 className="display overflow-hidden text-5xl leading-[1.05] md:text-7xl">
            <TextReveal
              text={PROFILE.name}
              className="text-gradient inline-block"
              delay={0.5}
            />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-4 max-w-lg text-lg font-normal text-[oklch(0.85_0.02_260)]"
          >
            {PROFILE.role}
          </motion.p>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-[oklch(0.72_0.03_260)] md:text-base">
            {PROFILE.tagline}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Magnetic>
              <a
                href="#focus"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[oklch(0.15_0.005_260)] transition hover:bg-[oklch(0.92_0.005_260)]"
              >
                View Work <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.7_0.01_260/0.2)] px-6 py-3 text-sm font-medium text-white transition hover:border-[oklch(0.7_0.01_260/0.4)]"
              >
                Contact <Mail className="h-4 w-4" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.7_0.01_260/0.2)] px-6 py-3 text-sm font-medium text-[oklch(0.85_0.01_260)] transition hover:border-[oklch(0.7_0.01_260/0.4)]"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            </Magnetic>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-2 text-xs uppercase tracking-[0.25em] text-[oklch(0.7_0.03_260)]">
            <span className="flex items-center gap-2"><MapPin className="h-3 w-3" /> {PROFILE.location}</span>
            <span className="flex items-center gap-2"><GraduationCap className="h-3 w-3" /> CGPA {PROFILE.cgpa}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center"
        >
          <Portrait />
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        style={{ opacity: useTransform(hp, [0, 0.15], [1, 0]) }}
        className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[9px] uppercase tracking-[0.4em] text-[oklch(0.7_0.03_260)]">
            Scroll
          </span>
          <div className="relative h-8 w-[1px] overflow-hidden bg-[oklch(0.55_0.25_260/0.25)]">
            <motion.div
              className="absolute inset-x-0 top-0 h-3"
              style={{ background: "linear-gradient(180deg, transparent, oklch(0.75 0.22 260))" }}
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
    <section id={id} className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <div className="mb-3 flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-[oklch(0.7_0.15_260)]">
            <span className="h-px w-8 bg-[oklch(0.55_0.25_260)]" />
            {eyebrow}
          </div>
          <h2 className="display max-w-3xl text-4xl md:text-5xl">
            <span className="text-gradient">{title}</span>
          </h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="About" title="Engineer, learner, builder.">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass col-span-1 rounded-3xl p-8 md:col-span-2"
        >
          <p className="text-lg leading-relaxed text-[oklch(0.88_0.02_260)]">
            Pre-final year <span className="text-white">BE CSE (AI & ML)</span> undergraduate at{" "}
            <span className="text-white">{PROFILE.college}</span> with hands-on skills across
            Python, MongoDB, NLP, Machine Learning, and Deep Learning.
          </p>
          <p className="mt-6 text-[oklch(0.75_0.02_260)]">
            Seeking an SDE or ML internship where data-driven problem solving translates into
            production-ready systems — and where I can grow into a strong, versatile software
            engineer.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {STRENGTHS.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-[oklch(0.55_0.25_260/0.2)] bg-[oklch(0.15_0.05_260/0.4)] p-5"
              >
                <div className="mb-2 text-[10px] uppercase tracking-[0.25em] text-[oklch(0.7_0.15_260)]">
                  0{i + 1}
                </div>
                <div className="text-sm font-semibold text-white">{s.title}</div>
                <p className="mt-2 text-xs leading-relaxed text-[oklch(0.72_0.03_260)]">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-3xl p-8"
        >
          <div className="mb-6 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[oklch(0.7_0.15_260)]">
            <GraduationCap className="h-4 w-4" /> Education
          </div>
          <div className="relative border-l border-[oklch(0.55_0.25_260/0.3)] pl-6">
            <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-[oklch(0.55_0.25_260)] shadow-[0_0_20px_oklch(0.55_0.25_260)]" />
            <div className="text-sm font-semibold text-white">{PROFILE.degree}</div>
            <div className="mt-1 text-xs text-[oklch(0.75_0.02_260)]">{PROFILE.college}</div>
            <div className="mt-0.5 text-xs text-[oklch(0.65_0.03_260)]">{PROFILE.university}</div>
            <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-[oklch(0.55_0.22_25/0.4)] px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-[oklch(0.85_0.1_25)]">
              CGPA {PROFILE.cgpa}
            </div>
            <p className="mt-4 text-xs text-[oklch(0.7_0.02_260)]">
              Currently in pre-final year, pursuing AI & ML coursework.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="A precise toolkit for AI systems.">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.group}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
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
              <div className="mt-5 h-[3px] w-full overflow-hidden rounded-full bg-[oklch(0.25_0.03_260)]">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                  className="h-full"
                  style={{
                    background: "linear-gradient(90deg, oklch(0.7 0.22 260), oklch(0.55 0.22 25))",
                  }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

function Focus() {
  return (
    <Section id="focus" eyebrow="Work" title="What I'm building right now.">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {FOCUS_AREAS.map((f, i) => (
          <motion.article
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            whileHover={{ y: -8, rotateX: 4, rotateY: -4 }}
            style={{ transformStyle: "preserve-3d" }}
            className="glass group relative overflow-hidden rounded-3xl p-8"
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(circle at 30% 20%, oklch(0.55 0.25 260 / 0.25), transparent 60%)",
              }}
            />
            <div className="relative">
              <div className="mb-6 flex items-start justify-between">
                <div className="display text-4xl text-[oklch(0.55_0.15_260)]">0{i + 1}</div>
                <Rocket className="h-5 w-5 text-[oklch(0.7_0.15_260)]" />
              </div>
              <h3 className="display text-xl text-white">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[oklch(0.75_0.03_260)]">{f.body}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {f.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[oklch(0.55_0.25_260/0.3)] px-2.5 py-0.5 text-[10px] uppercase tracking-[0.2em] text-[oklch(0.8_0.1_260)]"
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
        className="glass mt-8 flex items-center justify-between rounded-3xl p-6 transition hover:glow-ring"
      >
        <div className="flex items-center gap-4">
          <Github className="h-6 w-6 text-white" />
          <div>
            <div className="text-sm font-semibold text-white">github.com/{PROFILE.githubHandle}</div>
            <div className="text-xs text-[oklch(0.7_0.03_260)]">Live repositories, experiments, and study notes</div>
          </div>
        </div>
        <ChevronRight className="h-5 w-5 text-[oklch(0.7_0.15_260)]" />
      </motion.a>
    </Section>
  );
}

function Contact() {
  const items = [
    { icon: Mail, label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
    { icon: Phone, label: "Phone", value: PROFILE.phone, href: `tel:${PROFILE.phone}` },
    { icon: Github, label: "GitHub", value: PROFILE.githubHandle, href: PROFILE.github },
    { icon: MapPin, label: "Location", value: PROFILE.location, href: "#" },
  ];
  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something together.">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass rounded-3xl p-8"
        >
          <p className="text-lg text-[oklch(0.88_0.02_260)]">
            Hiring for AI, ML, or software engineering internships? I'm ready to join your
            team and ship work that matters.
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
                  className="group flex items-center justify-between rounded-2xl border border-[oklch(0.55_0.25_260/0.2)] bg-[oklch(0.15_0.05_260/0.4)] p-4 transition hover:border-[oklch(0.55_0.25_260/0.6)] hover:bg-[oklch(0.55_0.25_260/0.08)]"
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
            const msg = (f.elements.namedItem("message") as HTMLTextAreaElement)?.value ?? "";
            window.location.href = `mailto:${PROFILE.email}?subject=Recruiting ${encodeURIComponent(
              name,
            )}&body=${encodeURIComponent(msg)}`;
          }}
          className="glass rounded-3xl p-8"
        >
          <div className="mb-6 text-xs uppercase tracking-[0.3em] text-[oklch(0.7_0.15_260)]">
            Send a message
          </div>
          <div className="space-y-4">
            {[
              { name: "name", label: "Your name", type: "text" },
              { name: "email", label: "Email", type: "email" },
            ].map((f) => (
              <label key={f.name} className="block">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[oklch(0.7_0.03_260)]">
                  {f.label}
                </span>
                <input
                  required
                  name={f.name}
                  type={f.type}
                  className="mt-1 w-full rounded-xl border border-[oklch(0.55_0.25_260/0.25)] bg-[oklch(0.12_0.04_260/0.6)] px-4 py-3 text-sm text-white outline-none transition focus:border-[oklch(0.55_0.25_260)] focus:glow-ring"
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
                className="mt-1 w-full resize-none rounded-xl border border-[oklch(0.55_0.25_260/0.25)] bg-[oklch(0.12_0.04_260/0.6)] px-4 py-3 text-sm text-white outline-none transition focus:border-[oklch(0.55_0.25_260)] focus:glow-ring"
              />
            </label>
            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[oklch(0.55_0.25_260)] px-6 py-3 text-sm font-semibold text-white transition hover:shadow-[0_20px_60px_-10px_oklch(0.55_0.25_260)]"
            >
              Send message <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </div>
        </motion.form>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[oklch(0.55_0.25_260/0.15)] px-6 pb-10 pt-24">
      {/* Kinetic signature */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none mx-auto mb-14 max-w-[1600px] px-6 text-center"
      >
        <div
          className="display text-[12vw] leading-[0.9] tracking-tight"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.9 0.03 260 / 0.18), transparent 90%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            WebkitTextStroke: "1px oklch(0.75 0.05 260 / 0.28)",
          }}
        >
          Barath Velu
        </div>
      </motion.div>

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-[oklch(0.75_0.05_260/0.25)] text-[10px] font-semibold tracking-widest text-white/85">
            BV
          </span>
          <span className="text-xs tracking-[0.2em] text-[oklch(0.75_0.02_260)]">
            © {new Date().getFullYear()} {PROFILE.name}
          </span>
        </div>
        <div className="hidden text-[10px] uppercase tracking-[0.35em] text-[oklch(0.6_0.03_260)] md:block">
          Crafted with precision • Chennai, IN
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
