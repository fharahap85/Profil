import { Github, Linkedin, Mail } from "lucide-react";
import { personal } from "@/lib/data";

export default function FooterSection() {
  return (
    <div className="flex items-center justify-between gap-4 p-6 sm:p-8">
      <div>
        <span className="text-sm font-bold text-white">
          {personal.shortName}
        </span>
        <span className="mx-2 text-zinc-700">&middot;</span>
        <span className="text-sm text-zinc-600">
          {personal.role}
        </span>
      </div>

      <div className="flex items-center gap-3">
        <a
          href={personal.github}
          target="_blank"
          aria-label="GitHub"
          className="text-zinc-600 transition-colors hover:text-white"
        >
          <Github className="h-4 w-4" />
        </a>
        <a
          href={personal.linkedin}
          target="_blank"
          aria-label="LinkedIn"
          className="text-zinc-600 transition-colors hover:text-blue-400"
        >
          <Linkedin className="h-4 w-4" />
        </a>
        <a
          href={`mailto:${personal.email}`}
          aria-label="Email"
          className="text-zinc-600 transition-colors hover:text-blue-400"
        >
          <Mail className="h-4 w-4" />
        </a>
      </div>

      <p className="text-xs text-zinc-700">
        &copy; {new Date().getFullYear()} {personal.shortName}
      </p>
    </div>
  );
}
