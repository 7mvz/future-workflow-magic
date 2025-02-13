
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import IndustriesSection from "@/components/IndustriesSection";
import PricingSection from "@/components/PricingSection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import FAQSection from "@/components/FAQSection";
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
      <SuccessStoriesSection />
      <FAQSection />
    </main>
  );
};

export default Index;
