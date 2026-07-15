import { skills } from "@/lib/data";

const categoryIcons: Record<string, string> = {
  backend: "⚙",
  frontend: "◇",
  databases: "▤",
  architecture: "◎",
  tools: "🔧",
};

const categoryColors: Record<string, string> = {
  backend: "text-blue-400",
  frontend: "text-indigo-400",
  databases: "text-violet-400",
  architecture: "text-cyan-400",
  tools: "text-zinc-400",
};

export default function SkillsSection() {
  return (
    <div className="flex h-full flex-col p-6 sm:p-8">
      <p className="font-mono text-xs tracking-widest text-zinc-500 uppercase">
        02 &mdash; Skills
      </p>
      <h2 className="mt-1 text-xl font-bold text-white sm:text-2xl">
        Tech Stack
      </h2>
      <p className="mt-2 text-sm text-zinc-500">
        Tools and technologies I work with daily.
      </p>

      <div className="mt-5 space-y-5 overflow-y-auto">
        {(Object.keys(skills) as Array<keyof typeof skills>).map(
          (category) => (
            <div key={category}>
              <h3
                className={`font-mono text-[11px] font-medium tracking-wider uppercase ${categoryColors[category] ?? "text-zinc-400"}`}
              >
                {categoryIcons[category] ?? "▸"} {category}
              </h3>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {skills[category].map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-block rounded-lg border border-white/[0.06] bg-white/[0.03] px-2.5 py-1 text-[12px] text-zinc-300 transition-all hover:border-white/15 hover:bg-white/[0.06]"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
