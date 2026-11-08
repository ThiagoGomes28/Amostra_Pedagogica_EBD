import { Header } from "@/components/layout/header/Header";
import { Footer } from "@/components/layout/footer/Footer";
import { HeroSection } from "@/components/features/home/sections/HeroSection";
import { LocationSection } from "@/components/features/home/sections/LocationSection";

export function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}
