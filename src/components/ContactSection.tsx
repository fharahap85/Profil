"use client";

import { useState } from "react";
import { Mail, MapPin, Linkedin, Github, Send } from "lucide-react";
import { personal } from "@/lib/data";

const contacts = [
  {
    icon: <Mail className="h-4 w-4" />,
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: <MapPin className="h-4 w-4" />,
    label: "Location",
    value: personal.location,
  },
  {
    icon: <Linkedin className="h-4 w-4" />,
    label: "LinkedIn",
    value: "linkedin.com/in/abdullah-fikri-harahap",
    href: personal.linkedin,
  },
  {
    icon: <Github className="h-4 w-4" />,
    label: "GitHub",
    value: "github.com/fharahap85",
    href: personal.github,
  },
];

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  }

  return (
    <div className="flex h-full flex-col p-6 sm:p-8 lg:p-10">
      <p className="font-mono text-xs tracking-widest text-zinc-500 uppercase">
        05 &mdash; Contact
      </p>
      <h2 className="mt-1 text-xl font-bold text-white sm:text-2xl">
        Let&apos;s Talk
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-zinc-500">
        Have a project in mind or just want to say hi? I&apos;m always open to
        discussing new ideas and opportunities.
      </p>

      <div className="mt-5 space-y-2">
        {contacts.map((c, i) => (
          <div
            key={i}
            className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3.5 py-2.5"
          >
            <span className="text-blue-400">{c.icon}</span>
            <div className="min-w-0">
              <p className="text-xs text-zinc-600">{c.label}</p>
              {c.href ? (
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  className="text-sm text-zinc-300 transition-colors hover:text-blue-400"
                >
                  {c.value}
                </a>
              ) : (
                <p className="text-sm text-zinc-300">{c.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="mt-5 space-y-3">
        <input
          type="text"
          placeholder="Your name"
          required
          className="w-full rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-2.5 text-sm text-white placeholder-zinc-600 outline-none transition-all focus:border-blue-500/40 focus:bg-white/[0.04]"
        />
        <input
          type="email"
          placeholder="Your email"
          required
          className="w-full rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-2.5 text-sm text-white placeholder-zinc-600 outline-none transition-all focus:border-blue-500/40 focus:bg-white/[0.04]"
        />
        <textarea
          rows={3}
          placeholder="Your message"
          required
          className="w-full resize-none rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-2.5 text-sm text-white placeholder-zinc-600 outline-none transition-all focus:border-blue-500/40 focus:bg-white/[0.04]"
        />
        <button
          type="submit"
          disabled={sent}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:from-blue-400 hover:to-violet-400 disabled:opacity-70"
        >
          {sent ? "Message Sent!" : "Send Message"}
          <Send className="h-3.5 w-3.5" />
        </button>
      </form>
    </div>
  );
}
