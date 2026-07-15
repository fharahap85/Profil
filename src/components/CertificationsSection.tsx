import { Award } from "lucide-react";
import { certifications } from "@/lib/data";

export default function CertificationsSection() {
  return (
    <div className="flex h-full flex-col p-6 sm:p-8">
      <div className="flex items-center gap-2">
        <Award className="h-4 w-4 text-indigo-400" />
        <p className="font-mono text-xs tracking-widest text-zinc-500 uppercase">
          Certifications
        </p>
      </div>

      {certifications.length === 0 ? (
        <p className="mt-4 text-sm text-zinc-600">Coming soon.</p>
      ) : (
        <div className="mt-4 space-y-3">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4"
            >
              <h3 className="text-sm font-bold text-white">
                {cert.title}
              </h3>
              <p className="text-xs text-zinc-500">{cert.issuer}</p>
              <p className="mt-2 text-xs leading-relaxed text-zinc-600">
                {cert.topics}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
