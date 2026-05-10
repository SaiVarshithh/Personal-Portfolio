import { AboutSection } from "@/components/about-section";
import { AchievementsSection } from "@/components/achievements-section";
import { AmbientBackground } from "@/components/ambient-background";
import { ContactSection } from "@/components/contact-section";
import { ExperienceSection } from "@/components/experience-section";
import { ExpertiseSection } from "@/components/expertise-section";
import { FloatingNavbar } from "@/components/floating-navbar";
import { Footer } from "@/components/footer";
import { GithubSection } from "@/components/github-section";
import { HeroSection } from "@/components/hero-section";
import { InfrastructureSection } from "@/components/infrastructure-section";
import { LeftSectionRail } from "@/components/left-section-rail";
import { ProjectsSection } from "@/components/projects-section";
import { ScrollProgress } from "@/components/scroll-progress";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <AmbientBackground />
      <ScrollProgress />
      <FloatingNavbar />
      <LeftSectionRail />
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <ExperienceSection />
      <ProjectsSection />
      <InfrastructureSection />
      <AchievementsSection />
      <GithubSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
