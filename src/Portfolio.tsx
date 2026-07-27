import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
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
  X,
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
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[var(--accent)] focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-black"
      >
        Skip to content
      </a>
      <motion.div
        style={{ scaleX, background: "var(--accent)" }}
        className="fixed left-0 right-0 top-0 z-50 h-[3px] origin-left"
        aria-hidden
      />
      <Navbar />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Categories />
        <Projects />
        <Skills />
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
    const onScroll = () => setScrolled(window.scrollY > 12);
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
        scrolled || open ? "border-b border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur-md" : ""
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-6">
        <a href="#top" className="display text-lg font-bold tracking-tight" onClick={() => setOpen(false)}>
          {PROFILE.name}
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="text-sm font-medium text-[var(--muted)] transition hover:text-[var(--fg)]"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={`mailto:${PROFILE.email}`} className="btn-primary hidden !py-2 !px-4 text-xs sm:inline-flex">
            Hire me
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] md:hidden"
            aria-label={open ? "Close" : "Menu"}
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
            <ul className="flex flex-col px-5 py-4">
              {NAV.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    className="block py-3 text-sm text-[var(--muted)]"
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

function Hero() {
  return (
    <section id="top" className="relative px-5 pb-16 pt-28 md:px-6 md:pb-24 md:pt-32">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent)]"
        >
          {PROFILE.availability}
        </motion.p>

        {/* Go Zero–style stacked headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="display text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl"
        >
          SHIP SYSTEMS,
          <br />
          <span className="text-accent">NOT DEMOS</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-8 max-w-xl text-base leading-relaxed text-[var(--muted)] md:text-lg"
        >
          {PROFILE.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a href="#projects" className="btn-primary">
            View work <ArrowUpRight className="h-4 w-4" />
          </a>
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="btn-outline">
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a href={`mailto:${PROFILE.email}`} className="btn-outline">
            <Mail className="h-4 w-4" /> Contact
          </a>
        </motion.div>

        {/* Social-proof strip — honest facts only */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-16 grid grid-cols-2 gap-4 border-t border-[var(--border)] pt-10 sm:grid-cols-4"
        >
          {[
            { label: "CGPA", value: "8.0 / 10" },
            { label: "Focus", value: "NLP · ML" },
            { label: "Base", value: "Chennai" },
            { label: "Stage", value: PROFILE.year },
          ].map((s) => (
            <div key={s.label}>
              <div className="display text-2xl font-bold md:text-3xl">{s.value}</div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Marquee() {
  const row = [...MARQUEE, ...MARQUEE];
  return (
    <div
      className="overflow-hidden border-y border-[var(--border)] bg-[var(--card)] py-4"
      aria-hidden
    >
      <div className="flex w-max gap-10 pr-10" style={{ animation: "marquee 32s linear infinite" }}>
        {row.map((t, i) => (
          <span key={`${t}-${i}`} className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">
            {t}
            <span className="ml-10 text-[var(--accent)]">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: ReactNode;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="px-5 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="mb-12 md:mb-16"
        >
          <h2 className="display text-3xl font-bold leading-tight md:text-5xl">{title}</h2>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-[var(--muted)]">{subtitle}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}

function About() {
  return (
    <Section
      id="about"
      title={
        <>
          WE BUILD SYSTEMS,
          <br />
          <span className="text-accent">NOT NOTEBOOKS</span>
        </>
      }
      subtitle={`${PROFILE.fullName} · ${PROFILE.role}`}
    >
      <div className="grid gap-8 md:grid-cols-2 md:gap-14">
        <div>
          <p className="text-lg leading-relaxed text-[var(--muted)]">
            Pre-final year <span className="text-[var(--fg)] font-medium">BE CSE (AI & ML)</span> at{" "}
            {PROFILE.college}. I sit where machine learning meets engineering — Python that turns
            data into decisions and keeps working after the demo ends.
          </p>
          <p className="mt-5 leading-relaxed text-[var(--muted)]">
            Looking for an SDE or ML role with real ownership on a team that ships product and values
            honest evaluation.
          </p>
          <div className="mt-8 flex items-center gap-3 text-sm text-[var(--muted)]">
            <GraduationCap className="h-4 w-4 text-[var(--accent)]" />
            CGPA {PROFILE.cgpa} · {PROFILE.university}
          </div>
        </div>
        <div className="grid gap-3">
          {VALUE.map((v, i) => (
            <div key={v.title} className="card p-5">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--accent)]">
                <CheckCircle2 className="h-3.5 w-3.5" /> 0{i + 1}
              </div>
              <div className="mt-2 font-semibold">{v.title}</div>
              <p className="mt-1 text-sm text-[var(--muted)]">{v.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Large name block like Go Zero founder section */}
      <div className="mt-16 border-t border-[var(--border)] pt-12">
        <div className="display text-5xl font-bold leading-none text-[var(--muted)]/30 md:text-7xl">
          Barath
        </div>
        <div className="display text-5xl font-bold leading-none text-[var(--fg)] md:text-7xl">
          Velu
        </div>
        <p className="mt-6 max-w-lg text-sm text-[var(--muted)]">
          {PROFILE.year} · Chennai · Open to full-time and strong internships in SDE & ML.
        </p>
      </div>
    </Section>
  );
}

/** Product-category style cards (Go Zero FRUIT POPS / CUPS pattern) */
function Categories() {
  const cats = [
    {
      title: "NLP Pipelines",
      body: "Text → clean → features → train → evaluate → infer. Built to run, not just demo.",
    },
    {
      title: "Supervised ML",
      body: "Leakage-aware splits, CV, metric-first model choice you can defend in review.",
    },
    {
      title: "Python Systems",
      body: "Clear modules, Git discipline, and storage (MongoDB) for real workflows.",
    },
    {
      title: "Evaluation",
      body: "Honest metrics. No inflated notebook scores. Generalisation over vanity.",
    },
  ];

  return (
    <Section
      id="skills"
      title={
        <>
          FOCUS AREAS,
          <br />
          <span className="text-accent">ALL SHAPES</span>
        </>
      }
      subtitle="Where I spend depth — not a laundry list of every library."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {cats.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.55 }}
            whileHover={{ y: -4 }}
            className="card p-6 md:p-8"
          >
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              0{i + 1}
            </div>
            <h3 className="display mt-3 text-2xl font-bold">{c.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{c.body}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <section className="border-y border-[var(--border)] bg-[var(--card)] px-5 py-16 md:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="display mb-10 text-2xl font-bold md:text-3xl">Stack I ship with</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((s) => (
            <div key={s.group}>
              <div className="mb-2 flex items-baseline justify-between">
                <span className="font-semibold">{s.group}</span>
                <span className="text-sm text-[var(--accent)]">{s.level}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-full border border-[var(--border)] px-2.5 py-1 text-[11px] text-[var(--muted)]"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <Section
      id="projects"
      title={
        <>
          SELECTED WORK,
          <br />
          <span className="text-accent">REAL PIPELINES</span>
        </>
      }
      subtitle="Problem → approach → outcome. Evidence of how I work."
    >
      <div className="flex flex-col gap-5">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.65 }}
            className="card p-6 md:p-8"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold text-[var(--accent)]">0{i + 1}</span>
              <span className="rounded-full border border-[var(--border)] px-2 py-0.5 text-[10px] uppercase tracking-wider text-[var(--muted)]">
                {p.status}
              </span>
              <span className="text-[11px] text-[var(--muted)]">{p.year}</span>
              {p.href && (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto inline-flex items-center gap-1 text-xs font-semibold text-[var(--accent)]"
                >
                  <Github className="h-3.5 w-3.5" /> Code
                </a>
              )}
            </div>
            <h3 className="display mt-4 text-xl font-bold md:text-2xl">{p.title}</h3>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--muted)]">{p.body}</p>
            <ul className="mt-5 grid gap-2 sm:grid-cols-3">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-2 text-xs text-[var(--muted)]">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--accent)]" />
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border)] pt-5">
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--accent)]">
                {p.outcome}
              </span>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[var(--border)] px-2 py-0.5 text-[10px] text-[var(--muted)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
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
      setError("Please fill name, email, and a short message.");
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
          _subject: `Portfolio from ${name}`,
          _captcha: "false",
        }),
      });
      if (!res.ok) throw new Error("fail");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError(`Could not send. Email ${PROFILE.email}`);
    }
  };

  return (
    <Section
      id="contact"
      title={
        <>
          LET&apos;S BUILD
          <br />
          <span className="text-accent">SOMETHING REAL</span>
        </>
      }
      subtitle="Hiring for SDE, ML, or applied AI? Reach out directly."
    >
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-3">
          {[
            { icon: Mail, label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
            { icon: Phone, label: "Phone", value: PROFILE.phoneDisplay, href: `tel:+91${PROFILE.phone}` },
            { icon: Github, label: "GitHub", value: PROFILE.githubHandle, href: PROFILE.github },
            { icon: MapPin, label: "Location", value: PROFILE.location, href: undefined as string | undefined },
          ].map((l) => {
            const Icon = l.icon;
            const inner = (
              <div className="card flex items-center gap-4 p-4">
                <Icon className="h-5 w-5 text-[var(--accent)]" />
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">{l.label}</div>
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
        <div className="card p-6 md:p-8">
          {status === "success" ? (
            <div className="py-12 text-center">
              <CheckCircle2 className="mx-auto h-10 w-10 text-[var(--accent)]" />
              <p className="display mt-3 text-xl font-bold">Sent</p>
              <button type="button" onClick={() => setStatus("idle")} className="mt-4 text-sm text-[var(--accent)]">
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              <input
                name="name"
                required
                placeholder="Name"
                className="w-full rounded-xl border border-[var(--border)] bg-transparent px-4 py-3 text-sm outline-none focus:border-[var(--accent)]"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Work email"
                className="w-full rounded-xl border border-[var(--border)] bg-transparent px-4 py-3 text-sm outline-none focus:border-[var(--accent)]"
              />
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Role, team, stack…"
                className="w-full resize-none rounded-xl border border-[var(--border)] bg-transparent px-4 py-3 text-sm outline-none focus:border-[var(--accent)]"
              />
              {error && <p className="text-sm text-red-400">{error}</p>}
              <button type="submit" disabled={status === "loading"} className="btn-primary w-full justify-center">
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
    <footer className="border-t border-[var(--border)] px-5 py-12 md:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <span className="text-sm text-[var(--muted)]">
          © {new Date().getFullYear()} {PROFILE.fullName}
        </span>
        <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--muted)]">
          Built to ship · Chennai
        </span>
        <a href="#top" className="text-sm font-medium text-[var(--accent)]">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
