
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import IndustriesSection from "@/components/IndustriesSection";
import PricingSection from "@/components/PricingSection";
import ParticleBackground from "@/components/ParticleBackground";

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <ParticleBackground />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <IndustriesSection />
      <PricingSection />
    </main>
  );
};

export default Index;
