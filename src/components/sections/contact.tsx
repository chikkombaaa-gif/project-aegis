"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Github, Mail, MapPin, Phone } from "lucide-react";
import { PROFILE } from "@/data/content";
import { easeOut } from "@/lib/motion";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();
    const subject = encodeURIComponent(`Opportunity from ${name || "portfolio"}`);
    const body = encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const links = [
    { icon: Mail, label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
    { icon: Phone, label: "Phone", value: PROFILE.phone, href: `tel:${PROFILE.phoneTel}` },
    { icon: Github, label: "GitHub", value: PROFILE.githubHandle, href: PROFILE.github },
    { icon: MapPin, label: "Location", value: PROFILE.location, href: undefined as string | undefined },
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

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08, ease: easeOut }}
            onSubmit={onSubmit}
            className="glass rounded-3xl p-6 md:p-8"
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center gap-3 py-12 text-center">
                <CheckCircle2 className="h-10 w-10 text-[var(--accent)]" />
                <p className="font-display text-xl font-semibold">Opening your mail client…</p>
                <p className="text-sm text-[var(--muted)]">Thanks for reaching out.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <label className="block">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">
                    Name
                  </span>
                  <input
                    required
                    name="name"
                    className="mt-1.5 w-full rounded-xl border border-[var(--border)] bg-transparent px-4 py-3 text-sm outline-none focus:border-[var(--accent)]"
                  />
                </label>
                <label className="block">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">
                    Email
                  </span>
                  <input
                    required
                    type="email"
                    name="email"
                    className="mt-1.5 w-full rounded-xl border border-[var(--border)] bg-transparent px-4 py-3 text-sm outline-none focus:border-[var(--accent)]"
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
                    className="mt-1.5 w-full resize-none rounded-xl border border-[var(--border)] bg-transparent px-4 py-3 text-sm outline-none focus:border-[var(--accent)]"
                    placeholder="Role, team, or what you’re hiring for…"
                  />
                </label>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-[var(--fg)] px-6 py-3.5 text-sm font-semibold text-[var(--bg)]"
                >
                  Send message
                </button>
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
