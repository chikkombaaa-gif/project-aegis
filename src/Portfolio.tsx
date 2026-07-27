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
  CheckCircle2,
  Github,
  GraduationCap,
  Loader2,
  Mail,
  MapPin,
  Menu,
  Phone,
  Target,
  X,
  Zap,
} from "lucide-react";
import {
  MARQUEE,
  NAV,
  PROFILE,
  PROJECTS,
  SKILLS,
  VALUE,
} from "@/data/content";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-black"
      >
        Skip to content
      </a>
      <div className="pointer-events-none fixed inset-0 -z-20 grid-bg" />
      <motion.div
        style={{ scaleX, background: "linear-gradient(90deg, var(--accent), var(--accent-2))" }}
        className="fixed left-0 right-0 top-0 z-50 h-[2px] origin-left"
        aria-hidden
      />
      <Navbar />
      <main id="main" className="relative">
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
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
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-[var(--border)] bg-[color-mix(in_oklab,var(--bg)_80%,transparent)] backdrop-blur-xl"
          : ""
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-6">
        <a href="#top" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border)] text-[11px] font-semibold tracking-widest">
            BV
          </span>
          <span className="text-xs font-medium tracking-[0.2em] text-[var(--muted)]">
            {PROFILE.fullName}
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="text-[11px] uppercase tracking-[0.22em] text-[var(--muted)] transition hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={`mailto:${PROFILE.email}?subject=${encodeURIComponent("Opportunity for Barath V")}`}
            className="glass hidden rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.2em] sm:inline-flex"
          >
            Hire me
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-[var(--border)] md:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {NAV.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    className="block rounded-xl px-3 py-3 text-sm tracking-wide text-[var(--muted)]"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
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
  const rx = useSpring(useTransform(my, [0, 1], [8, -8]), { stiffness: 120, damping: 16 });
  const ry = useSpring(useTransform(mx, [0, 1], [-10, 10]), { stiffness: 120, damping: 16 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        mx.set((e.clientX - r.left) / r.width);
        my.set((e.clientY - r.top) / r.height);
      }}
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
            "radial-gradient(circle at 30% 20%, color-mix(in oklab, var(--accent) 35%, transparent), transparent 65%)",
        }}
      />
      <motion.div
        className="glass relative overflow-hidden rounded-[1.75rem] p-2"
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      >
        <div className="relative overflow-hidden rounded-[1.4rem]">
          <img
            src={PROFILE.photo}
            alt={`${PROFILE.name} — ${PROFILE.role}`}
            width={400}
            height={520}
            className="block h-[420px] w-[320px] object-cover object-center md:h-[500px] md:w-[380px]"
            loading="eager"
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, transparent 45%, color-mix(in oklab, var(--bg) 90%, transparent) 100%)",
            }}
          />
          <div className="absolute inset-x-4 bottom-4 flex items-end justify-between">
            <div>
              <div className="text-[9px] uppercase tracking-[0.3em] text-[var(--muted)]">
                {PROFILE.role}
              </div>
              <div className="display mt-1 text-lg text-white">{PROFILE.name}</div>
            </div>
            <span className="flex items-center gap-1.5 text-[9px] uppercase tracking-[0.25em] text-emerald-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              Open to hire
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-5 pt-28 md:px-6 md:pt-24"
    >
      <div
        className="pointer-events-none absolute -left-1/4 top-0 -z-10 h-[55vh] w-[55vh] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--glow), transparent 70%)" }}
      />
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] text-[var(--muted)]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--accent)]" />
            {PROFILE.availability}
          </div>
          <h1 className="display text-5xl font-semibold leading-[1.02] md:text-6xl lg:text-7xl">
            <span className="text-gradient">{PROFILE.name}</span>
          </h1>
          <p className="mt-5 text-xl text-[var(--muted)] md:text-2xl">{PROFILE.role}</p>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-[var(--muted)]">
            {PROFILE.tagline}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              View work <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-sm"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              className="glass inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-sm"
            >
              <Mail className="h-4 w-4" /> Contact
            </a>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-2 text-[11px] uppercase tracking-[0.25em] text-[var(--muted)]">
            <span className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5" /> {PROFILE.location}
            </span>
            <span className="flex items-center gap-2">
              <GraduationCap className="h-3.5 w-3.5" /> CGPA {PROFILE.cgpa}
            </span>
            <span className="flex items-center gap-2">
              <Target className="h-3.5 w-3.5 text-[var(--accent)]" /> {PROFILE.year}
            </span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease }}
          className="flex justify-center"
        >
          <Portrait />
        </motion.div>
      </div>
    </section>
  );
}

function Marquee() {
  const row = [...MARQUEE, ...MARQUEE];
  return (
    <div className="relative overflow-hidden border-y border-[var(--border)] py-4" aria-hidden>
      <div className="flex w-max gap-10 pr-10" style={{ animation: "marquee 36s linear infinite" }}>
        {row.map((t, i) => (
          <span key={`${t}-${i}`} className="text-[11px] uppercase tracking-[0.35em] text-[var(--muted)]">
            {t}
            <span className="ml-10 text-[var(--accent)]">·</span>
          </span>
        ))}
      </div>
    </div>
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
    <section id={id} className="relative px-5 py-24 md:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
          className="mb-14"
        >
          <div className="mb-3 flex items-center gap-3 text-[11px] uppercase tracking-[0.35em] text-[var(--muted)]">
            <span className="text-[var(--accent)]">{index}</span>
            <span className="h-px w-8 bg-[var(--accent)] opacity-60" />
            {eyebrow}
          </div>
          <h2 className="display max-w-3xl text-3xl font-semibold md:text-5xl">{title}</h2>
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="glass col-span-1 rounded-[1.75rem] p-8 md:col-span-2 md:p-10"
        >
          <p className="text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            Pre-final year <span className="text-white">BE CSE (AI & ML)</span> at{" "}
            <span className="text-white">{PROFILE.college}</span>. I sit at the intersection of
            machine learning and software engineering — Python that turns data into decisions and
            keeps working after the demo ends.
          </p>
          <p className="mt-5 text-[var(--muted)]">
            Looking for an SDE or ML role with real ownership. I want a team that ships product,
            values rigorous evaluation, and lets strong juniors contribute from day one.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {VALUE.map((v, i) => (
              <div
                key={v.title}
                className="rounded-2xl border border-[var(--border)] bg-[color-mix(in_oklab,var(--card)_70%,transparent)] p-5"
              >
                <div className="mb-2 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[var(--accent)]">
                  <CheckCircle2 className="h-3.5 w-3.5" /> 0{i + 1}
                </div>
                <div className="text-sm font-semibold text-white">{v.title}</div>
                <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">{v.body}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="glass rounded-[1.75rem] p-8"
        >
          <div className="mb-6 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
            <GraduationCap className="h-4 w-4" /> Education
          </div>
          <div className="relative border-l border-[var(--border)] pl-6">
            <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-[var(--accent)] shadow-[0_0_16px_var(--glow)]" />
            <div className="text-sm font-semibold text-white">{PROFILE.degree}</div>
            <div className="mt-1 text-xs text-[var(--muted)]">{PROFILE.college}</div>
            <div className="mt-0.5 text-xs text-[var(--muted)]">{PROFILE.university}</div>
            <div className="mt-4 inline-flex rounded-full border border-[var(--border)] px-3 py-1 text-[10px] uppercase tracking-[0.2em]">
              CGPA {PROFILE.cgpa}
            </div>
            <p className="mt-4 text-xs leading-relaxed text-[var(--muted)]">
              {PROFILE.year}. Building production-style ML systems. Targeting product teams with
              serious ownership.
            </p>
          </div>
          <div className="mt-8 rounded-2xl border border-[var(--border)] p-4">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[var(--accent)]">
              <Zap className="h-3.5 w-3.5" /> Focus now
            </div>
            <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">
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
        {SKILLS.map((s, i) => (
          <motion.div
            key={s.group}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.65, ease }}
            whileHover={{ y: -4 }}
            className="glass group relative overflow-hidden rounded-[1.5rem] p-6"
          >
            <div className="flex items-center justify-between">
              <div className="text-base font-semibold text-white">{s.group}</div>
              <div className="display text-2xl text-[var(--accent)]">{s.level}</div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {s.items.map((it) => (
                <span
                  key={it}
                  className="rounded-full border border-[var(--border)] px-3 py-1 text-[11px] text-[var(--muted)]"
                >
                  {it}
                </span>
              ))}
            </div>
            <div className="mt-5 h-[3px] overflow-hidden rounded-full bg-[color-mix(in_oklab,var(--border)_80%,transparent)]">
              <motion.div
                className="h-full rounded-full"
                style={{ background: "linear-gradient(90deg, var(--accent), var(--accent-2))" }}
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease, delay: 0.1 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" index="03" eyebrow="Selected Work" title="Evidence of how I work.">
      <div className="flex flex-col gap-5">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.08, duration: 0.75, ease }}
            className="glass group relative overflow-hidden rounded-[1.75rem] p-7 md:p-9"
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(ellipse at 10% 0%, color-mix(in oklab, var(--accent) 14%, transparent), transparent 55%)",
              }}
            />
            <div className="relative grid gap-6 md:grid-cols-[auto_1fr]">
              <div className="display text-5xl text-[var(--muted)] opacity-30">0{i + 1}</div>
              <div>
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-[var(--border)] px-2.5 py-0.5 text-[9px] uppercase tracking-[0.2em] text-[var(--muted)]">
                    {p.status}
                  </span>
                  <span className="text-[11px] tracking-[0.15em] text-[var(--muted)]">{p.year}</span>
                  {p.href && (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-[var(--accent)]"
                    >
                      <Github className="h-3.5 w-3.5" /> Code
                    </a>
                  )}
                </div>
                <h3 className="display text-2xl text-white md:text-3xl">{p.title}</h3>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[var(--muted)]">{p.body}</p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-3">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-xs text-[var(--muted)]">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--accent)]" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border)] pt-5">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--accent)]">
                    {p.outcome}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[var(--border)] px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-[var(--muted)]"
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
      <a
        href={PROFILE.github}
        target="_blank"
        rel="noopener noreferrer"
        className="glass group mt-8 flex items-center justify-between rounded-[1.5rem] p-6 transition hover:glow-border"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--border)]">
            <Github className="h-6 w-6" />
          </div>
          <div>
            <div className="text-sm font-semibold">github.com/{PROFILE.githubHandle}</div>
            <div className="text-xs text-[var(--muted)]">Source, experiments, implementation detail</div>
          </div>
        </div>
        <ArrowUpRight className="h-5 w-5 text-[var(--accent)] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </Section>
  );
}

function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();
    if (name.length < 2 || !email.includes("@") || message.length < 10) {
      setError("Please fill name, valid email, and a short message.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${PROFILE.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `Portfolio contact from ${name}`,
          _template: "table",
          _captcha: "false",
        }),
      });
      if (!res.ok) throw new Error("fail");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError(`Could not send. Email ${PROFILE.email} directly.`);
    }
  };

  const links = [
    { icon: Mail, label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
    { icon: Phone, label: "Phone", value: PROFILE.phoneDisplay, href: `tel:+91${PROFILE.phone}` },
    { icon: Github, label: "GitHub", value: PROFILE.githubHandle, href: PROFILE.github },
    { icon: MapPin, label: "Location", value: PROFILE.location, href: undefined as string | undefined },
  ];

  return (
    <Section id="contact" index="04" eyebrow="Contact" title="Let's build something that ships.">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-3">
          <p className="text-lg text-[var(--muted)]">
            Hiring for SDE, ML, or applied AI with real ownership? Ready to join a product team and
            ship.
          </p>
          {links.map((l) => {
            const Icon = l.icon;
            const inner = (
              <div className="glass flex items-center gap-4 rounded-2xl p-4 transition hover:glow-border">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)]">
                  <Icon className="h-4 w-4 text-[var(--accent)]" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">
                    {l.label}
                  </div>
                  <div className="text-sm font-medium">{l.value}</div>
                </div>
              </div>
            );
            return l.href ? (
              <a key={l.label} href={l.href}>
                {inner}
              </a>
            ) : (
              <div key={l.label}>{inner}</div>
            );
          })}
        </div>
        <div className="glass rounded-[1.75rem] p-6 md:p-8">
          {status === "success" ? (
            <div className="flex flex-col items-center gap-3 py-12 text-center">
              <CheckCircle2 className="h-10 w-10 text-[var(--accent)]" />
              <p className="display text-xl">Message sent</p>
              <p className="text-sm text-[var(--muted)]">Thanks — I'll reply soon.</p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-2 text-sm text-[var(--accent)]"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              <label className="block">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">Name</span>
                <input
                  name="name"
                  required
                  className="mt-1.5 w-full rounded-xl border border-[var(--border)] bg-transparent px-4 py-3 text-sm outline-none focus:border-[var(--accent)]"
                />
              </label>
              <label className="block">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  className="mt-1.5 w-full rounded-xl border border-[var(--border)] bg-transparent px-4 py-3 text-sm outline-none focus:border-[var(--accent)]"
                />
              </label>
              <label className="block">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">Message</span>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="mt-1.5 w-full resize-none rounded-xl border border-[var(--border)] bg-transparent px-4 py-3 text-sm outline-none focus:border-[var(--accent)]"
                  placeholder="Role, team, stack…"
                />
              </label>
              {error && <p className="text-sm text-red-400">{error}</p>}
              <button
                type="submit"
                disabled={status === "loading"}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-black disabled:opacity-70"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                  </>
                ) : (
                  "Send message"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-5 pb-12 pt-16 md:px-6">
      <div className="mx-auto mb-10 max-w-6xl text-center" aria-hidden>
        <div
          className="display text-[12vw] leading-none md:text-[7vw]"
          style={{
            background: "linear-gradient(180deg, color-mix(in oklab, white 16%, transparent), transparent 85%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            WebkitTextStroke: "1px color-mix(in oklab, white 12%, transparent)",
          }}
        >
          Barath Velu
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <span className="text-xs tracking-[0.15em] text-[var(--muted)]">
          © {new Date().getFullYear()} {PROFILE.fullName}
        </span>
        <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--muted)]">
          Built to ship · Chennai
        </span>
        <a href="#top" className="glass rounded-full px-4 py-2 text-[10px] uppercase tracking-[0.3em]">
          Top ↑
        </a>
      </div>
    </footer>
  );
}
