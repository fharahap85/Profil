import { MapPin, Briefcase, Zap, CheckCircle } from "lucide-react";
import { about } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  MapPin: <MapPin className="h-4 w-4" />,
  Briefcase: <Briefcase className="h-4 w-4" />,
  Zap: <Zap className="h-4 w-4" />,
};

export default function AboutSection() {
  return (
    <div className="flex h-full flex-col p-6 sm:p-8 lg:p-10">
      <p className="font-mono text-xs tracking-widest text-zinc-500 uppercase">
        01 &mdash; About
      </p>
      <h2 className="mt-1 text-xl font-bold text-white sm:text-2xl">
        Who I Am
      </h2>

      <p className="mt-4 text-sm leading-relaxed text-zinc-400">
        {about.tagline}
      </p>

      <div className="mt-4 space-y-3">
        {about.paragraphs.slice(0, 2).map((p, i) => (
          <p key={i} className="text-sm leading-relaxed text-zinc-500">
            {p}
          </p>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-3 gap-2">
        {about.highlights.map((h, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-1.5 rounded-xl border border-white/[0.06] bg-white/[0.02] px-2 py-3 text-center"
          >
            <span className="text-blue-400">{iconMap[h.icon]}</span>
            <span className="text-[11px] font-medium text-zinc-400">
              {h.label}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
        <h4 className="font-mono text-[11px] font-medium tracking-wider text-blue-400 uppercase">
          What I Do
        </h4>
        <ul className="mt-3 space-y-2">
          {about.whatIDo.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-zinc-400"
            >
              <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-400" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
