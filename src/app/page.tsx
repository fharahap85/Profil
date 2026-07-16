import BentoGrid from "@/components/BentoGrid";
import BentoCard from "@/components/BentoCard";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import EducationSection from "@/components/EducationSection";
import CertificationsSection from "@/components/CertificationsSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-grid">
        <BentoGrid>
          {/* HERO — wide horizontal card */}
          <BentoCard
            className="md:col-span-3 lg:col-span-7 md:row-span-1 min-h-[340px] sm:min-h-[380px]"
            glowSide="tr"
            glowColor="blue"
            delay={0}
          >
            <HeroSection />
          </BentoCard>

          {/* SKILLS — tall vertical card */}
          <BentoCard
            className="md:col-span-3 lg:col-span-5 md:row-span-2 min-h-[480px]"
            glowSide="bl"
            glowColor="violet"
            delay={100}
          >
            <SkillsSection />
          </BentoCard>

          {/* ABOUT — medium card */}
          <BentoCard
            className="md:col-span-3 lg:col-span-4 min-h-[420px]"
            glowSide="tl"
            glowColor="indigo"
            delay={200}
          >
            <AboutSection />
          </BentoCard>

          {/* PROJECTS — wide card (2 cols) */}
          <BentoCard
            className="md:col-span-3 lg:col-span-4 min-h-[420px]"
            glowSide="br"
            glowColor="teal"
            delay={300}
          >
            <ProjectsSection />
          </BentoCard>

          {/* CONTACT — medium card */}
          <BentoCard
            className="md:col-span-2 lg:col-span-4 min-h-[420px]"
            glowSide="top"
            glowColor="purple"
            delay={400}
          >
            <ContactSection />
          </BentoCard>

          {/* EXPERIENCE — extra wide (3 cols) */}
          <BentoCard
            className="md:col-span-3 lg:col-span-8 min-h-[300px]"
            glowSide="bottom"
            glowColor="cyan"
            delay={500}
          >
            <ExperienceSection />
          </BentoCard>

          {/* EDUCATION */}
          <BentoCard
            className="md:col-span-2 lg:col-span-2 min-h-[220px]"
            glowSide="tr"
            glowColor="blue"
            delay={600}
          >
            <EducationSection />
          </BentoCard>

          {/* CERTIFICATIONS */}
          <BentoCard
            className="md:col-span-2 lg:col-span-2 min-h-[220px]"
            glowSide="bl"
            glowColor="indigo"
            delay={700}
          >
            <CertificationsSection />
          </BentoCard>
        </BentoGrid>

        {/* FOOTER — full-width simple bar */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <BentoCard
            className="mb-8 min-h-[60px]"
            glowSide="top"
            glowColor="blue"
            hoverEffect={false}
            delay={800}
          >
            <FooterSection />
          </BentoCard>
        </div>
      </div>
    </>
  );
}
