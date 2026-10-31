import { Header } from "@/components/layout/header/Header";
import { Footer } from "@/components/layout/footer/Footer";
import { HeroSection } from "@/components/features/home/sections/HeroSection";
import { AboutSection } from "@/components/features/home/sections/AboutSection";
import { VerseSection } from "@/components/features/home/sections/VerseSection";
import { ScheduleSection } from "@/components/features/home/sections/ScheduleSection";
import { ClassesSection } from "@/components/features/home/sections/ClassesSection";
import { ProjectsSection } from "@/components/features/home/sections/ProjectsSection";
import { GallerySection } from "@/components/features/home/sections/GallerySection";
import { LocationSection } from "@/components/features/home/sections/LocationSection";
import { FinalCTASection } from "@/components/features/home/sections/FinalCTASection";

export function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <VerseSection />
        <ScheduleSection />
        <ClassesSection />
        <ProjectsSection />
        <GallerySection />
        <LocationSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
