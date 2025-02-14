
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
      <section id="hero">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <section id="process">
        <ProcessSection />
      </section>
      <section id="industries">
        <IndustriesSection />
      </section>
      <section id="pricing">
        <PricingSection />
      </section>
      <section id="success-stories">
        <SuccessStoriesSection />
      </section>
      <section id="faq">
        <FAQSection />
      </section>
    </main>
  );
};

export default Index;
