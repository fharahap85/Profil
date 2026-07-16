"use client";

import { type ReactNode } from "react";
import Reveal from "./Reveal";

type GlowSide = "tl" | "tr" | "bl" | "br" | "top" | "bottom";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  glowSide?: GlowSide;
  glowColor?: string;
  hoverEffect?: boolean;
  delay?: number;
}

const glowPositions: Record<GlowSide, string> = {
  tl: "top-0 left-0 -translate-x-1/2 -translate-y-1/2",
  tr: "top-0 right-0 translate-x-1/2 -translate-y-1/2",
  bl: "bottom-0 left-0 -translate-x-1/2 translate-y-1/2",
  br: "bottom-0 right-0 translate-x-1/2 translate-y-1/2",
  top: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
  bottom: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
};

const glowColors: Record<string, string> = {
  blue: "bg-blue-500",
  violet: "bg-violet-500",
  indigo: "bg-indigo-500",
  teal: "bg-teal-500",
  purple: "bg-purple-500",
  cyan: "bg-cyan-500",
};

function getGlowColor(color: string): string {
  return glowColors[color] ?? color;
}

export default function BentoCard({
  children,
  className = "",
  glowSide = "tr",
  glowColor = "blue",
  hoverEffect = true,
  delay = 0,
}: BentoCardProps) {
  return (
    <Reveal delay={delay}>
      <div
        className={`
          group glow-card glow-border relative overflow-hidden rounded-2xl
          border border-white/[0.06]
          bg-white/[0.02] backdrop-blur-xl
          ${hoverEffect ? "hover:-translate-y-0.5 hover:border-white/20 hover:shadow-2xl hover:shadow-black/30" : ""}
          transition-all duration-500 ease-out
          ${className}
        `}
      >
        <div
          className={`glow-orb ${glowPositions[glowSide]} ${getGlowColor(glowColor)}`}
        />

        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

        <div className="relative z-[1] h-full">{children}</div>
      </div>
    </Reveal>
  );
}
