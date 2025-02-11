
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container max-w-4xl mx-auto text-center"
      >
        <div className="heading-reveal mb-2">
          <span className="inline-block text-sm font-medium text-primary px-4 py-1 rounded-full glass mb-6">
            AI Workflow Automation
          </span>
        </div>
        <div className="heading-reveal mb-6">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
            We elevate your business using{" "}
            <span className="text-gradient">Artificial Intelligence.</span>
          </h1>
        </div>
        <div className="heading-reveal mb-12">
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            We elevate and grow organizations using top-tier AI solutions.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary-light text-white transition-all duration-300 group"
          >
            Our Services
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
          >
            Book a Call
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
