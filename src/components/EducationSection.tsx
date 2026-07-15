import { GraduationCap } from "lucide-react";
import { education } from "@/lib/data";

export default function EducationSection() {
  return (
    <div className="flex h-full flex-col p-6 sm:p-8">
      <div className="flex items-center gap-2">
        <GraduationCap className="h-4 w-4 text-blue-400" />
        <p className="font-mono text-xs tracking-widest text-zinc-500 uppercase">
          Education
        </p>
      </div>

      <div className="mt-4 space-y-4">
        {education.map((edu, i) => (
          <div key={i} className="relative pl-4">
            <div className="absolute left-0 top-1.5 h-1.5 w-1.5 rounded-full bg-blue-400/50" />
            <div
              className={`absolute bottom-0 left-[2.5px] top-4 w-px bg-white/[0.06] ${i === education.length - 1 ? "hidden" : ""}`}
            />
            <span className="font-mono text-[11px] text-zinc-600">
              {edu.period}
            </span>
            <h3 className="mt-0.5 text-sm font-bold text-white">
              {edu.degree}
            </h3>
            <p className="text-xs text-zinc-500">{edu.school}</p>
            <p className="mt-1 text-xs leading-relaxed text-zinc-600">
              {edu.focus}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
