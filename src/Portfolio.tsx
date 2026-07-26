import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowUpRight,
  Github,
  Mail,
  MapPin,
  Phone,
  GraduationCap,
  ExternalLink,
  Zap,
  Target,
  CheckCircle2,
  Menu,
  X,
} from "lucide-react";
import { Background } from "@/components/portfolio/Background";
import { Stats } from "@/components/portfolio/Stats";
import { Magnetic } from "@/components/portfolio/Magnetic";
import { TextReveal } from "@/components/portfolio/TextReveal";
import { Marquee } from "@/components/portfolio/Marquee";
import { useLenis } from "@/hooks/useLenis";
import {
  PROFILE,
  SKILLS,
  VALUE,
  PROJECTS,
  STATUS_STYLES,
  NAV_LINKS,
  SECTIONS,
  PORTRAIT_URL,
  mailOpportunity,
} from "@/data/content";

export default function Portfolio() {
  useLenis();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[oklch(0.15_0.005_260)]"
      >
        Skip to content
      </a>
      <Background />
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 right-0 top-0 z-50 h-[2px] origin-left"
        aria-hidden
      >
        <div className="h-full w-full" style={{ background: "oklch(0.72 0.09 250)" }} />
      </motion.div>
      <Navbar />
      <main id="main" className="relative">
        <Hero />
        <Marquee />
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
  const [active, setActive] = useState("top");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    for (const s of SECTIONS) {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    }
    return () => obs.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="pointer-events-auto fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
    >
      <ul className="flex flex-col items-end gap-4">
        {SECTIONS.map((s) => {
          const on = active === s.id;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-label={`Go to ${s.label}`}
                aria-current={on ? "true" : undefined}
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
                        ? "0 0 14px oklch(0.7 0.22 260), 0 0 28px oklch(0.55 0.25 260 / 0.7)"
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
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
          <ArrowUpRight className="h-4 w-4 -rotate-45" aria-hidden />
        </motion.a>
      )}
    </AnimatePresence>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-40 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-[oklch(0.55_0.25_260/0.1)] bg-[oklch(0.08_0.01_260/0.65)] backdrop-blur-2xl"
          : ""
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[oklch(0.75_0.05_260/0.25)] bg-[oklch(0.2_0.05_260/0.6)] text-[11px] font-semibold tracking-widest text-white">
            BV
          </span>
          <span className="text-xs font-medium tracking-[0.22em] text-[oklch(0.9_0.02_260)]">
            Barath Velu
          </span>
        </a>
        <nav className="hidden items-center gap-10 md:flex" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="group relative text-[11px] uppercase tracking-[0.28em] text-[oklch(0.78_0.02_260)] transition hover:text-white"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[oklch(0.72_0.12_250)] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Magnetic>
            <a
              href={mailOpportunity()}
              className="glass hidden rounded-full px-5 py-2.5 text-[11px] uppercase tracking-[0.28em] transition hover:glow-ring sm:inline-flex"
            >
              Hire me
            </a>
          </Magnetic>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[oklch(0.7_0.01_260/0.25)] text-white md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-[oklch(0.55_0.25_260/0.12)] md:hidden"
            aria-label="Mobile"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    className="block rounded-xl px-3 py-3 text-sm uppercase tracking-[0.2em] text-[oklch(0.85_0.02_260)] transition hover:bg-[oklch(0.2_0.05_260/0.5)] hover:text-white"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={mailOpportunity()}
                  className="flex items-center justify-center rounded-full bg-white px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[oklch(0.15_0.005_260)]"
                  onClick={() => setOpen(false)}
                >
                  Hire me
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function Portrait() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [10, -10]), { stiffness: 120, damping: 14 });
  const ry = useSpring(useTransform(mx, [0, 1], [-12, 12]), { stiffness: 120, damping: 14 });
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

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => {
        mx.set(0.5);
        my.set(0.5);
      }}
      className="relative"
      style={{ perspective: 1200 }}
    >
      <div
        className="pointer-events-none absolute -inset-10 rounded-[2rem] blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, oklch(0.55 0.25 260 / 0.45), transparent 65%), radial-gradient(circle at 80% 90%, oklch(0.4 0.08 260 / 0.4), transparent 65%)",
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
            width={400}
            height={520}
            className="block h-[480px] w-[360px] object-cover object-center transition duration-[1200ms] ease-out will-change-transform hover:scale-[1.05] md:h-[520px] md:w-[400px]"
            loading="eager"
            decoding="async"
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
                Open to hire
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
  const scrollCueOpacity = useTransform(hp, [0, 0.15], [1, 0]);

  return (
    <section
      id="top"
      ref={heroRef}
      className="relative flex min-h-[100svh] items-center overflow-hidden px-6 pt-32 md:pt-24"
    >
      <motion.div
        style={{ y: heroY, opacity: heroOpacity, filter: heroBlur }}
        className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[oklch(0.7_0.01_260/0.18)] bg-[oklch(0.18_0.01_260/0.55)] px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-[oklch(0.88_0.01_260)]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[oklch(0.72_0.09_250)] opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[oklch(0.72_0.09_250)]" />
            </span>
            {PROFILE.availability}
          </div>
          <div className="mb-4 text-[10px] uppercase tracking-[0.5em] text-[oklch(0.65_0.03_260)]">
            <TextReveal text="AI · ML · Production Systems" delay={0.28} />
          </div>
          <h1 className="display overflow-hidden text-5xl leading-[1.02] md:text-7xl lg:text-[5.5rem]">
            <TextReveal text={PROFILE.name} className="text-gradient inline-block" delay={0.4} />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.8 }}
            className="mt-5 max-w-lg text-xl font-normal text-[oklch(0.9_0.02_260)] md:text-2xl"
          >
            {PROFILE.role}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-5 max-w-xl text-[15px] leading-relaxed text-[oklch(0.7_0.03_260)]"
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
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[oklch(0.12_0.01_260)] transition hover:bg-[oklch(0.94_0.005_260)]"
              >
                View work{" "}
                <ArrowUpRight
                  className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={mailOpportunity()}
                className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.7_0.01_260/0.22)] px-6 py-3.5 text-sm font-medium text-white transition hover:border-[oklch(0.7_0.01_260/0.4)] hover:bg-[oklch(0.2_0.03_260/0.35)]"
              >
                Contact <Mail className="h-4 w-4" aria-hidden />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.7_0.01_260/0.22)] px-5 py-3.5 text-sm font-medium text-[oklch(0.85_0.01_260)] transition hover:border-[oklch(0.7_0.01_260/0.4)]"
              >
                <Github className="h-4 w-4" aria-hidden /> GitHub
              </a>
            </Magnetic>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.45, duration: 0.8 }}
            className="mt-14 flex flex-wrap gap-x-10 gap-y-3 text-[11px] uppercase tracking-[0.28em] text-[oklch(0.62_0.03_260)]"
          >
            <span className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5" aria-hidden /> {PROFILE.location}
            </span>
            <span className="flex items-center gap-2">
              <GraduationCap className="h-3.5 w-3.5" aria-hidden /> CGPA {PROFILE.cgpa}
            </span>
            <span className="flex items-center gap-2">
              <Target className="h-3.5 w-3.5 text-[oklch(0.72_0.09_250)]" aria-hidden />{" "}
              {PROFILE.year}
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
        style={{ opacity: scrollCueOpacity }}
        className="pointer-events-none absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        aria-hidden
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[9px] uppercase tracking-[0.4em] text-[oklch(0.62_0.03_260)]">
            Scroll
          </span>
          <div className="relative h-10 w-px overflow-hidden bg-[oklch(0.55_0.25_260/0.2)]">
            <motion.div
              className="absolute inset-x-0 top-0 h-3"
              style={{
                background: "linear-gradient(180deg, transparent, oklch(0.75 0.22 260))",
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
  index,
  eyebrow,
  title,
  children,
}: {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <div className="mb-4 flex items-center gap-4 text-[11px] uppercase tracking-[0.4em] text-[oklch(0.62_0.03_260)]">
            <span className="tabular-nums text-[oklch(0.72_0.1_250)]">{index}</span>
            <span className="h-px w-10 bg-[oklch(0.72_0.09_250/0.6)]" />
            {eyebrow}
          </div>
          <h2 className="display max-w-3xl text-4xl leading-[1.1] text-white md:text-5xl lg:text-6xl">
            {title}
          </h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" index="01" eyebrow="About" title="I build systems that ship.">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass col-span-1 rounded-[1.75rem] p-8 md:col-span-2 md:p-10"
        >
          <p className="text-lg leading-relaxed text-[oklch(0.9_0.02_260)] md:text-xl">
            Pre-final year <span className="text-white">BE CSE (AI & ML)</span> at{" "}
            <span className="text-white">{PROFILE.college}</span>. I sit at the intersection of
            machine learning and software engineering — Python that turns data into decisions and
            keeps working after the demo ends.
          </p>
          <p className="mt-6 text-[oklch(0.72_0.02_260)]">
            Looking for an SDE or ML role with real ownership. I want a team that ships product,
            values rigorous evaluation, and lets strong juniors contribute from day one.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {VALUE.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-[oklch(0.55_0.25_260/0.18)] bg-[oklch(0.12_0.04_260/0.45)] p-5"
              >
                <div className="mb-2 flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[oklch(0.7_0.12_250)]">
                  <CheckCircle2 className="h-3.5 w-3.5" aria-hidden /> 0{i + 1}
                </div>
                <div className="text-sm font-semibold text-white">{s.title}</div>
                <p className="mt-2 text-xs leading-relaxed text-[oklch(0.7_0.03_260)]">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="glass rounded-[1.75rem] p-8 md:p-9"
        >
          <div className="mb-6 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[oklch(0.7_0.12_250)]">
            <GraduationCap className="h-4 w-4" aria-hidden /> Education
          </div>
          <div className="relative border-l border-[oklch(0.55_0.25_260/0.25)] pl-6">
            <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-[oklch(0.55_0.2_250)] shadow-[0_0_20px_oklch(0.55_0.2_250)]" />
            <div className="text-sm font-semibold text-white">{PROFILE.degree}</div>
            <div className="mt-1 text-xs text-[oklch(0.75_0.02_260)]">{PROFILE.college}</div>
            <div className="mt-0.5 text-xs text-[oklch(0.6_0.03_260)]">{PROFILE.university}</div>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[oklch(0.7_0.01_260/0.18)] px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-[oklch(0.85_0.01_260)]">
              CGPA {PROFILE.cgpa}
            </div>
            <p className="mt-4 text-xs leading-relaxed text-[oklch(0.68_0.02_260)]">
              {PROFILE.year}. Building production-style ML systems. Targeting product teams with
              serious ownership.
            </p>
          </div>
          <div className="mt-8 rounded-2xl border border-[oklch(0.55_0.25_260/0.2)] bg-[oklch(0.12_0.04_260/0.45)] p-4">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[oklch(0.7_0.12_250)]">
              <Zap className="h-3.5 w-3.5" aria-hidden /> Focus now
            </div>
            <p className="mt-2 text-xs leading-relaxed text-[oklch(0.82_0.02_260)]">
              Production NLP pipelines, leakage-aware evaluation, and engineering habits that turn
              prototypes into systems a team can run.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" index="02" eyebrow="Capabilities" title="Tools I use to deliver.">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.group}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.65, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="glass group relative overflow-hidden rounded-[1.5rem] p-6"
            >
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-0 blur-2xl transition duration-500 group-hover:opacity-50"
                style={{ background: "oklch(0.55 0.2 250 / 0.55)" }}
              />
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[oklch(0.55_0.2_250/0.12)] text-[oklch(0.8_0.12_250)]">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-[oklch(0.58_0.03_260)]">
                      Domain
                    </div>
                    <div className="text-base font-semibold text-white">{s.group}</div>
                  </div>
                </div>
                <div
                  className="display text-2xl text-[oklch(0.7_0.12_250)]"
                  aria-label={`${s.level} percent`}
                >
                  {s.level}
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-full border border-[oklch(0.7_0.05_260/0.2)] bg-[oklch(0.18_0.04_260/0.5)] px-3 py-1 text-[11px] text-[oklch(0.85_0.02_260)]"
                  >
                    {it}
                  </span>
                ))}
              </div>
              <div
                className="mt-5 h-[3px] w-full overflow-hidden rounded-full bg-[oklch(0.2_0.01_260)]"
                role="progressbar"
                aria-valuenow={s.level}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${s.group} proficiency`}
              >
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
    <Section id="projects" index="03" eyebrow="Selected Work" title="Evidence of how I work.">
      <div className="flex flex-col gap-6">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="glass group relative overflow-hidden rounded-[1.75rem] p-7 md:p-9"
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(ellipse at 15% 0%, oklch(0.5 0.18 250 / 0.2), transparent 50%)",
              }}
            />
            <div className="relative grid gap-8 md:grid-cols-[auto_1fr]">
              <div className="display text-5xl text-[oklch(0.45_0.08_250)] md:text-6xl">
                0{i + 1}
              </div>
              <div>
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[9px] uppercase tracking-[0.2em] ${
                      STATUS_STYLES[p.status]
                    }`}
                  >
                    {p.status}
                  </span>
                  <span className="text-[11px] tracking-[0.2em] text-[oklch(0.55_0.03_260)]">
                    {p.year}
                  </span>
                  {p.href && (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-[oklch(0.75_0.08_250)] transition hover:text-white"
                    >
                      <Github className="h-3.5 w-3.5" aria-hidden /> View code
                      <ExternalLink className="h-3 w-3" aria-hidden />
                    </a>
                  )}
                </div>
                <h3 className="display text-2xl leading-snug text-white md:text-3xl">{p.title}</h3>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[oklch(0.72_0.03_260)] md:text-[15px]">
                  {p.body}
                </p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-3">
                  {p.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-xs text-[oklch(0.78_0.03_260)]"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[oklch(0.7_0.12_250)]"
                        aria-hidden
                      />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[oklch(0.55_0.25_260/0.12)] pt-5">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[oklch(0.7_0.1_250)]">
                    {p.outcome}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[oklch(0.55_0.2_250/0.25)] px-2.5 py-0.5 text-[10px] uppercase tracking-[0.12em] text-[oklch(0.78_0.08_250)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
      <motion.a
        href={PROFILE.github}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass group mt-8 flex items-center justify-between rounded-[1.5rem] p-6 transition hover:glow-ring md:p-7"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[oklch(0.55_0.2_250/0.12)]">
            <Github className="h-6 w-6 text-white" aria-hidden />
          </div>
          <div>
            <div className="text-sm font-semibold text-white">
              github.com/{PROFILE.githubHandle}
            </div>
            <div className="text-xs text-[oklch(0.62_0.03_260)]">
              Source code, experiments, and implementation detail
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-[oklch(0.7_0.12_250)] transition group-hover:translate-x-1">
          <span className="hidden text-xs uppercase tracking-[0.2em] sm:inline">Open</span>
          <ExternalLink className="h-5 w-5" aria-hidden />
        </div>
      </motion.a>
    </Section>
  );
}

function Contact() {
  const items = [
    { icon: Mail, label: "Email", value: PROFILE.email, href: mailOpportunity() },
    { icon: Phone, label: "Phone", value: PROFILE.phoneDisplay, href: `tel:+91${PROFILE.phone}` },
    { icon: Github, label: "GitHub", value: PROFILE.githubHandle, href: PROFILE.github },
    {
      icon: MapPin,
      label: "Location",
      value: PROFILE.location,
      href: undefined as string | undefined,
    },
  ];

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();
    const subject = encodeURIComponent(`Opportunity from ${name || "portfolio visitor"}`);
    const body = encodeURIComponent([`From: ${name}`, `Email: ${email}`, "", message].join("\n"));
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  };

  return (
    <Section id="contact" index="04" eyebrow="Contact" title="Let's build something that ships.">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="glass rounded-[1.75rem] p-8 md:p-10"
        >
          <p className="text-lg leading-relaxed text-[oklch(0.9_0.02_260)] md:text-xl">
            Hiring for SDE, ML, or applied AI with real ownership? I am ready to join a product team,
            contribute, and ship.
          </p>
          <p className="mt-4 text-sm text-[oklch(0.68_0.03_260)]">
            Open to full-time and strong internships. Prefer a direct conversation — use any channel
            below or the form.
          </p>
          <div className="mt-8 space-y-3">
            {items.map((it) => {
              const Icon = it.icon;
              const isLink = Boolean(it.href);
              const className =
                "group flex items-center justify-between rounded-2xl border border-[oklch(0.55_0.25_260/0.15)] bg-[oklch(0.12_0.04_260/0.4)] p-4 transition hover:border-[oklch(0.55_0.2_250/0.4)] hover:bg-[oklch(0.5_0.15_250/0.08)]";
              const inner = (
                <>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[oklch(0.55_0.2_250/0.12)] text-[oklch(0.8_0.12_250)]">
                      <Icon className="h-4 w-4" aria-hidden />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.25em] text-[oklch(0.58_0.03_260)]">
                        {it.label}
                      </div>
                      <div className="text-sm font-medium text-white">{it.value}</div>
                    </div>
                  </div>
                  {isLink && (
                    <ArrowUpRight
                      className="h-4 w-4 text-[oklch(0.7_0.12_250)] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  )}
                </>
              );
              return isLink ? (
                <a
                  key={it.label}
                  href={it.href}
                  target={it.href?.startsWith("http") ? "_blank" : undefined}
                  rel={it.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={className}
                >
                  {inner}
                </a>
              ) : (
                <div key={it.label} className={className}>
                  {inner}
                </div>
              );
            })}
          </div>
        </motion.div>
        <motion.form
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          onSubmit={onSubmit}
          className="glass rounded-[1.75rem] p-8 md:p-10"
        >
          <div className="mb-6 text-xs uppercase tracking-[0.3em] text-[oklch(0.7_0.12_250)]">
            Direct message
          </div>
          <div className="space-y-4">
            {(
              [
                { name: "name", label: "Your name", type: "text", autoComplete: "name" },
                { name: "email", label: "Work email", type: "email", autoComplete: "email" },
              ] as const
            ).map((f) => (
              <label key={f.name} className="block">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[oklch(0.58_0.03_260)]">
                  {f.label}
                </span>
                <input
                  required
                  name={f.name}
                  type={f.type}
                  autoComplete={f.autoComplete}
                  className="mt-1.5 w-full rounded-xl border border-[oklch(0.55_0.25_260/0.2)] bg-[oklch(0.1_0.03_260/0.55)] px-4 py-3.5 text-sm text-white outline-none transition focus:border-[oklch(0.55_0.2_250)] focus:glow-ring"
                />
              </label>
            ))}
            <label className="block">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[oklch(0.58_0.03_260)]">
                Message
              </span>
              <textarea
                required
                name="message"
                rows={4}
                placeholder="Role, team, stack, or what you're hiring for…"
                className="mt-1.5 w-full resize-none rounded-xl border border-[oklch(0.55_0.25_260/0.2)] bg-[oklch(0.1_0.03_260/0.55)] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-[oklch(0.45_0.02_260)] focus:border-[oklch(0.55_0.2_250)] focus:glow-ring"
              />
            </label>
            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[oklch(0.12_0.01_260)] transition hover:bg-[oklch(0.94_0.005_260)]"
            >
              Send message{" "}
              <ArrowUpRight
                className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden
              />
            </button>
          </div>
        </motion.form>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[oklch(0.55_0.25_260/0.12)] px-6 pb-12 pt-28">
      <motion.div
        aria-hidden
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none mx-auto mb-16 max-w-[1600px] px-4 text-center"
      >
        <div
          className="display text-[12vw] leading-[0.85] tracking-tight md:text-[9vw]"
          style={{
            background: "linear-gradient(180deg, oklch(0.9 0.03 260 / 0.18), transparent 85%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            WebkitTextStroke: "1px oklch(0.72 0.04 260 / 0.25)",
          }}
        >
          Barath Velu
        </div>
      </motion.div>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-[oklch(0.75_0.05_260/0.2)] text-[10px] font-semibold tracking-widest text-white/85">
            BV
          </span>
          <span className="text-xs tracking-[0.2em] text-[oklch(0.7_0.02_260)]">
            © {new Date().getFullYear()} {PROFILE.fullName}
          </span>
        </div>
        <div className="hidden text-[10px] uppercase tracking-[0.35em] text-[oklch(0.55_0.03_260)] md:block">
          Built to ship · Chennai, IN
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
