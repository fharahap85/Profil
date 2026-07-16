import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Particles from "@/components/Particles";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abdullah Fikri Harahap | Fullstack Developer",
  description:
    "Fullstack Developer specializing in Laravel, Vue.js & React. Building robust B2B SaaS solutions for POS, HRIS, inventory, and finance systems.",
  openGraph: {
    title: "Abdullah Fikri Harahap | Fullstack Developer",
    description:
      "Fullstack Developer — Laravel, Vue.js & React. Building B2B SaaS solutions.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${plusJakarta.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <Particles />
        {children}
      </body>
    </html>
  );
}
