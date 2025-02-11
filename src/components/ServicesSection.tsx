
import { motion } from "framer-motion";
import { MessageSquare, Mic, ArrowRight, ChartLine } from "lucide-react";
import { Button } from "./ui/button";

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  example, 
  delay 
}: { 
  icon: any, 
  title: string, 
  description: string, 
  example: string, 
  delay: number 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="glass p-8 rounded-xl group hover:bg-primary/5 transition-all duration-300"
    >
      <div className="relative w-16 h-16 mb-6">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="absolute inset-0"
        >
          <Icon className="w-16 h-16 text-primary" />
        </motion.div>
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-300 mb-6">{description}</p>
      <div className="glass p-4 rounded-lg bg-secondary-light/50">
        <p className="text-sm text-gray-300">{example}</p>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: MessageSquare,
      title: "Chatbot Development",
      description: "Create intelligent chatbots that understand and respond to your customers' needs.",
      example: "User: \"Please create a graph of the profits in this file.\"\nAI: \"Of course! Here's a graph based on your data.\"",
      delay: 0.2
    },
    {
      icon: Mic,
      title: "Voice Assistants",
      description: "Build voice-enabled AI assistants that provide seamless customer support.",
      example: "New voice assistant handling customer support calls with natural language understanding.",
      delay: 0.4
    },
    {
      icon: ArrowRight,
      title: "Workflow Automations",
      description: "Automate repetitive tasks and streamline your business processes.",
      example: "1. New form submission in Framer\n2. Lead data formatted in Zapier\n3. Lead added to Airtable",
      delay: 0.6
    },
    {
      icon: ChartLine,
      title: "AI Consulting",
      description: "Get expert guidance on implementing AI solutions for your business.",
      example: "January: Low efficiency\nJune: 3X Efficiency Boost",
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
