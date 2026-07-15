import { ChevronRight } from "lucide-react";
import { experiences } from "@/lib/data";

export default function ExperienceSection() {
  return (
    <div className="flex h-full flex-col p-6 sm:p-8 lg:p-10">
      <p className="font-mono text-xs tracking-widest text-zinc-500 uppercase">
        03 &mdash; Experience
      </p>
      <h2 className="mt-1 text-xl font-bold text-white sm:text-2xl">
        Where I&apos;ve Worked
      </h2>

      <div className="mt-5 space-y-6">
        {experiences.map((exp, i) => (
          <div key={i} className="relative pl-5">
            <div className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-blue-500/60" />
            <div className="absolute bottom-0 left-[3px] top-4 w-px bg-white/[0.06]" />

            <span className="font-mono text-[11px] text-blue-400/70">
              {exp.period}
            </span>
            <h3 className="text-sm font-bold text-white">{exp.title}</h3>
            <p className="text-xs text-zinc-500">
              {exp.company} &mdash; {exp.location}
            </p>
            <ul className="mt-2 space-y-1.5">
              {exp.items.map((item, j) => (
                <li
                  key={j}
                  className="flex items-start gap-1.5 text-xs leading-relaxed text-zinc-500"
                >
                  <ChevronRight className="mt-0.5 h-3 w-3 shrink-0 text-blue-400/60" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
