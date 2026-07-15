import { ExternalLink, Lock } from "lucide-react";
import { projects } from "@/lib/data";

const roleColors: Record<string, string> = {
  green:
    "bg-green-500/10 text-green-400 border-green-500/20",
  blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  purple:
    "bg-purple-500/10 text-purple-400 border-purple-500/20",
  orange:
    "bg-orange-500/10 text-orange-400 border-orange-500/20",
  yellow:
    "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
};

const statusIcons: Record<string, React.ReactNode> = {
  Private: <Lock className="h-3 w-3" />,
  Development: <ExternalLink className="h-3 w-3" />,
};

export default function ProjectsSection() {
  return (
    <div className="flex h-full flex-col p-6 sm:p-8 lg:p-10">
      <p className="font-mono text-xs tracking-widest text-zinc-500 uppercase">
        04 &mdash; Projects
      </p>
      <h2 className="mt-1 text-xl font-bold text-white sm:text-2xl">
        What I&apos;ve Built
      </h2>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {projects.map((project, i) => (
          <div
            key={i}
            className="group relative rounded-xl border border-white/[0.06] bg-white/[0.015] p-4 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.03]"
          >
            <div className="mb-2 flex items-center justify-between">
              <span
                className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[10px] font-medium ${roleColors[project.roleColor] ?? roleColors.green}`}
              >
                {statusIcons[project.status]}
                {project.role}
              </span>
            </div>

            <h3 className="text-sm font-bold text-white">
              {project.title}
            </h3>
            <p className="mt-0.5 text-[11px] text-zinc-500">
              {project.tagline}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-zinc-500">
              {project.description}
            </p>

            <div className="mt-3 flex flex-wrap gap-1">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-white/[0.05] bg-white/[0.02] px-1.5 py-0.5 font-mono text-[10px] text-zinc-500"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
