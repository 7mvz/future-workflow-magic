
import { motion } from "framer-motion";
import { MessageSquare, Mic, ArrowRight, ChartLine } from "lucide-react";
import { Button } from "./ui/button";
import ServiceCard from "./services/ServiceCard";
import ChatbotDemo from "./services/ChatbotDemo";
import VoiceAssistantDemo from "./services/VoiceAssistantDemo";
import WorkflowDemo from "./services/WorkflowDemo";
import EfficiencyGraphDemo from "./services/EfficiencyGraphDemo";

const ServicesSection = () => {
  const services = [
    {
      icon: MessageSquare,
      title: "AI Chatbots That Understand & Respond Like a Human",
      description: "Automate customer support, lead generation, and FAQs with intelligent chatbots. Seamlessly integrates into websites, WhatsApp, Instagram, and more.",
      demo: ChatbotDemo,
      delay: 0.2
    },
    {
      icon: Mic,
      title: "Smart AI Voice Assistants for Your Business Calls",
      description: "AI that answers, routes, and responds to calls automatically. Personalized voice tones and multilingual support.",
      demo: VoiceAssistantDemo,
      delay: 0.4
    },
    {
      icon: ArrowRight,
      title: "Let AI Handle Repetitive Tasks – So You Don't Have To",
      description: "Automate your emails, forms, CRM updates, and customer follow-ups. Save hours of manual work with custom AI workflows.",
      demo: WorkflowDemo,
      delay: 0.6
    },
    {
      icon: ChartLine,
      title: "We Design AI Models That Transform Your Business",
      description: "Custom-built AI solutions for finance, healthcare, real estate, and e-commerce. AI-powered data analysis, forecasting, and decision-making.",
      demo: EfficiencyGraphDemo,
      delay: 0.8
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Background Gradients */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.1 }}
            transition={{ duration: 0.8 }}
            className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.1 }}
            transition={{ duration: 0.8 }}
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your business with our comprehensive AI solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary-light text-white transition-all duration-300 group"
          >
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
