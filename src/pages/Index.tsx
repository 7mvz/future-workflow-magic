
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ParticleBackground from "@/components/ParticleBackground";

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <ParticleBackground />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
    </main>
  );
};

export default Index;
