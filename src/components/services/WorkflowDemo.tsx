
import { motion } from "framer-motion";
import { FileText, MessageSquare, Calendar, Bell, ClipboardList } from "lucide-react";
import { useState, useEffect } from "react";

const workflowSteps = [
  {
    icon: MessageSquare,
    label: "AI Capturing Leads & Auto-Sending Follow-Ups...",
  },
  {
    icon: FileText,
    label: "AI Scraping Data & Updating Reports...",
  },
  {
    icon: ClipboardList,
    label: "AI Processing Invoices & Notifying Finance...",
  },
  {
    icon: Calendar,
    label: "AI Scheduling Meetings & Sending Reminders...",
  },
  {
    icon: Bell,
    label: "AI Managing Orders & Tracking Shipments...",
  },
];

const WorkflowDemo = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % workflowSteps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-secondary-light/30 p-6 rounded-lg overflow-hidden">
      <div className="relative h-24">
        {workflowSteps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={index}
              className="absolute inset-0 flex items-center space-x-4"
              initial={{ x: "100%", opacity: 0 }}
              animate={{
                x: index === currentStep ? "0%" : index < currentStep ? "-100%" : "100%",
                opacity: index === currentStep ? 1 : 0,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="flex items-center space-x-4 w-full">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="w-8 h-8 text-primary" />
                </motion.div>
                <p className="text-sm text-gray-300 flex-1">{step.label}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {workflowSteps.map((_, index) => (
          <motion.div
            key={index}
            className={`w-1.5 h-1.5 rounded-full ${
              index === currentStep ? "bg-primary" : "bg-gray-600"
            }`}
            animate={{
              scale: index === currentStep ? 1.2 : 1,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkflowDemo;
