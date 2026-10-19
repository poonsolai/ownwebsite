import { AboutPreview } from "@/components/home/AboutPreview";
import { ContactCTA } from "@/components/home/ContactCTA";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Hero } from "@/components/home/Hero";
import { JourneyPreview } from "@/components/home/JourneyPreview";
import { LearningPreview } from "@/components/home/LearningPreview";
import { NowSection } from "@/components/home/NowSection";
import { SkillsOverview } from "@/components/home/SkillsOverview";

export default function Home() {
  return (
    <div className="home-page">
      <Hero />
      <div className="home-content">
        <AboutPreview />
        <NowSection />
        <FeaturedProjects />
        <SkillsOverview />
        <JourneyPreview />
        <LearningPreview />
        <ContactCTA />
      </div>
    </div>
  );
}
