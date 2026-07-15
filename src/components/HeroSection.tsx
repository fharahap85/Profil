"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { personal } from "@/lib/data";

export default function HeroSection() {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = personal.typingRoles[phraseIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (deleting) {
      if (charIdx === 0) {
        setDeleting(false);
        setPhraseIdx((i) => (i + 1) % personal.typingRoles.length);
        timeout = setTimeout(() => {}, 500);
      } else {
        timeout = setTimeout(() => setCharIdx((c) => c - 1), 40);
      }
    } else {
      if (charIdx === current.length) {
        timeout = setTimeout(() => setDeleting(true), 2000);
      } else {
        timeout = setTimeout(() => setCharIdx((c) => c + 1), 80);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, phraseIdx]);

  return (
    <div className="flex h-full flex-col justify-center p-6 sm:p-8 lg:p-10">
      <div className="mb-4 flex items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-green-500/20 bg-green-500/5 px-3 py-1 text-[11px] font-medium tracking-wide text-green-400">
          <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
          {personal.status}
        </span>
      </div>

      <p className="font-mono text-xs tracking-widest text-zinc-500 uppercase mb-3">
        Hi, my name is
      </p>

      <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
        {personal.name.split(" ").map((word, i) =>
          i === personal.name.split(" ").length - 1 ? (
            <span key={i} className="text-gradient block sm:inline">
              {word}
            </span>
          ) : (
            <span key={i} className="block sm:inline">
              {word}{" "}
            </span>
          )
        )}
      </h1>

      <div className="mt-4 flex items-center gap-1.5">
        <span className="font-mono text-base text-zinc-300 sm:text-lg">
          {personal.typingRoles[phraseIdx].substring(0, charIdx)}
        </span>
        <span className="typing-cursor h-5 w-[2px] bg-blue-400" />
      </div>

      <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-400">
        I architect and build production-ready B2B SaaS platforms — from POS
        and HRIS to inventory and finance systems.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:from-blue-400 hover:to-violet-400 hover:shadow-lg hover:shadow-blue-500/25"
        >
          Get in Touch
          <ArrowRight className="h-4 w-4" />
        </a>
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-2.5 text-sm font-medium text-zinc-300 transition-all hover:border-white/25 hover:text-white"
        >
          View Projects
        </a>
      </div>

      <a
        href="#about"
        className="mt-6 flex items-center gap-1.5 text-xs text-zinc-600 transition-colors hover:text-zinc-400"
      >
        Scroll down
        <ChevronDown className="h-3.5 w-3.5 animate-bounce" />
      </a>
    </div>
  );
}
