"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Github, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { PROFILE } from "@/data/content";
import { easeOut } from "@/lib/motion";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();
    const website = String(fd.get("website") ?? "").trim(); // honeypot

    if (name.length < 2) {
      setError("Please enter your name.");
      setStatus("error");
      return;
    }
    if (!/^[^
\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid work email.");
      setStatus("error");
      return;
    }
    if (message.length < 10) {
      setError("Please write a short message (at least 10 characters).");
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, website }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok || !data.ok) {
        setStatus("error");
        setError(data.error || "Something went wrong. Please try again or email directly.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError("Network error. Please email barathvelu777@gmail.com directly.");
    }
  };

  const links = [
    { icon: Mail, label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
    { icon: Phone, label: "Phone", value: PROFILE.phone, href: `tel:${PROFILE.phoneTel}` },
    { icon: Github, label: "GitHub", value: PROFILE.githubHandle, href: PROFILE.github },
    {
      icon: MapPin,
      label: "Location",
      value: PROFILE.location,
      href: undefined as string | undefined,
    },
  ];

  return (
    <section id="contact" className="px-5 py-24 md:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-[11px] uppercase tracking-[0.35em] text-[var(--accent)]">
          06 — Contact
        </p>
        <h2 className="font-display max-w-2xl text-3xl font-semibold md:text-5xl">
          Let’s build something that ships.
        </h2>

        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          {PROFILE.availability}
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easeOut }}
            className="space-y-3"
          >
            {links.map((l) => {
              const Icon = l.icon;
              const inner = (
                <div className="glass flex items-center gap-4 rounded-2xl p-4">
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
                <a key={l.label} href={l.href} className="block transition hover:opacity-90">
                  {inner}
                </a>
              ) : (
                <div key={l.label}>{inner}</div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08, ease: easeOut }}
            className="glass rounded-3xl p-6 md:p-8"
          >
            {status === "success" ? (
              <div
                className="flex flex-col items-center justify-center gap-3 py-12 text-center"
                role="status"
                aria-live="polite"
              >
                <CheckCircle2 className="h-10 w-10 text-[var(--accent)]" aria-hidden />
                <p className="font-display text-xl font-semibold">Message sent</p>
                <p className="max-w-sm text-sm text-[var(--muted)]">
                  Thanks for reaching out. I’ll get back to you soon.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-4 text-sm text-[var(--accent)] underline-offset-4 hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-4">
                {/* Honeypot — hidden from users */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="absolute left-[-9999px] h-0 w-0 opacity-0"
                  aria-hidden
                />

                <label className="block">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">
                    Name
                  </span>
                  <input
                    required
                    name="name"
                    autoComplete="name"
                    disabled={status === "loading"}
                    className="mt-1.5 w-full rounded-xl border border-[var(--border)] bg-transparent px-4 py-3 text-sm outline-none transition focus:border-[var(--accent)] disabled:opacity-60"
                  />
                </label>

                <label className="block">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">
                    Work email
                  </span>
                  <input
                    required
                    type="email"
                    name="email"
                    autoComplete="email"
                    disabled={status === "loading"}
                    className="mt-1.5 w-full rounded-xl border border-[var(--border)] bg-transparent px-4 py-3 text-sm outline-none transition focus:border-[var(--accent)] disabled:opacity-60"
                  />
                </label>

                <label className="block">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">
                    Message
                  </span>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    disabled={status === "loading"}
                    className="mt-1.5 w-full resize-none rounded-xl border border-[var(--border)] bg-transparent px-4 py-3 text-sm outline-none transition focus:border-[var(--accent)] disabled:opacity-60"
                    placeholder="Role, team, or what you’re hiring for…"
                  />
                </label>

                {error && (
                  <p className="text-sm text-red-400" role="alert" aria-live="assertive">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--fg)] px-6 py-3.5 text-sm font-semibold text-[var(--bg)] transition disabled:opacity-70"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                      Sending…
                    </>
                  ) : (
                    "Send message"
                  )}
                </button>

                <p className="text-center text-[11px] text-[var(--muted)]">
                  Or email{" "}
                  <a href={`mailto:${PROFILE.email}`} className="text-[var(--accent)] hover:underline">
                    {PROFILE.email}
                  </a>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
