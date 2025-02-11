
import { motion } from "framer-motion";
import { MessageSquare, Mic, ArrowRight, ChartLine } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

// Chat Demo Component
const ChatDemo = () => {
  const [isActive, setIsActive] = useState(false);
  const conversation = [
    { user: true, message: "What are your pricing plans?" },
    { user: false, message: "Sure! We offer Basic ($997/month), Pro ($3997/month), and Custom solutions. Want to see details?" }
  ];

  return (
    <div 
      className="bg-secondary-light/30 p-4 rounded-lg cursor-pointer"
      onClick={() => setIsActive(true)}
    >
      <div className="space-y-3">
        {conversation.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: msg.user ? -10 : 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: isActive ? index * 0.5 : 0 }}
            className={`flex ${msg.user ? "justify-end" : "justify-start"}`}
          >
            <div className={`max-w-[80%] p-3 rounded-lg ${msg.user ? "bg-primary/20" : "bg-white/10"}`}>
              <p className="text-sm">{msg.message}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Voice Assistant Demo
const VoiceDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-secondary-light/30 p-4 rounded-lg">
      <motion.div
        className="flex items-center justify-center space-x-4"
        whileHover={{ scale: 1.02 }}
      >
        <Button
          variant="outline"
          size="sm"
          className="relative overflow-hidden"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? "Stop" : "Play Demo"}
          {isPlaying && (
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-primary"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3 }}
            />
          )}
        </Button>
        {isPlaying && (
          <div className="flex space-x-1">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="w-1 h-4 bg-primary rounded-full"
                animate={{
                  height: ["16px", "24px", "16px"]
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  delay: i * 0.1
                }}
              />
            ))}
          </div>
        )}
      </motion.div>
      {isPlaying && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 text-sm text-gray-300"
        >
          <p>Caller: "What time are you open tomorrow?"</p>
          <p className="mt-2">AI Assistant: "We're open from 9 AM to 8 PM. Would you like to book an appointment?"</p>
        </motion.div>
      )}
    </div>
  );
};

// Workflow Demo
const WorkflowDemo = () => {
  const steps = [
    { icon: MessageSquare, label: "Form Submission" },
    { icon: ArrowRight, label: "AI Processing" },
    { icon: ChartLine, label: "CRM Update" }
  ];

  return (
    <div className="bg-secondary-light/30 p-4 rounded-lg">
      <div className="flex justify-between items-center">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="relative">
              <step.icon className="w-8 h-8 text-primary" />
              {index < steps.length - 1 && (
                <motion.div
                  className="absolute top-1/2 left-full w-full h-0.5 bg-primary/20"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: index * 0.2 }}
                />
              )}
            </div>
            <p className="text-xs mt-2">{step.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Performance Graph Demo
const GraphDemo = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-secondary-light/30 p-4 rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-32 relative">
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-600" />
        <div className="absolute left-0 h-full w-0.5 bg-gray-600" />
        <motion.div
          className="absolute bottom-0 left-0 w-full h-full"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isHovered ? 1 : 0 }}
          transition={{ duration: 1.5 }}
        >
          <svg className="w-full h-full">
            <motion.path
              d="M 0 120 Q 50 120 100 80 Q 150 40 200 20"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-primary"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: isHovered ? 1 : 0 }}
              transition={{ duration: 1.5 }}
            />
          </svg>
        </motion.div>
        <motion.div
          className="absolute bottom-[120px] left-0 text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
        >
          40%
        </motion.div>
        <motion.div
          className="absolute bottom-[20px] right-0 text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
        >
          85%
        </motion.div>
      </div>
    </div>
  );
};

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  demo: Demo, 
  delay 
}: { 
  icon: any, 
  title: string, 
  description: string, 
  demo: () => JSX.Element, 
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
      <Demo />
    </motion.div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: MessageSquare,
      title: "AI Chatbots That Understand & Respond Like a Human",
      description: "Automate customer support, lead generation, and FAQs with intelligent chatbots. Seamlessly integrates into websites, WhatsApp, Instagram, and more.",
      demo: ChatDemo,
      delay: 0.2
    },
    {
      icon: Mic,
      title: "Smart AI Voice Assistants for Your Business Calls",
      description: "AI that answers, routes, and responds to calls automatically. Personalized voice tones and multilingual support.",
      demo: VoiceDemo,
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
      demo: GraphDemo,
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
