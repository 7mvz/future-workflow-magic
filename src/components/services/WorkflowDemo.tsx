
import { motion } from "framer-motion";
import { Calendar, FileText, MessageSquare, Bell, ArrowRight } from "lucide-react";

const WorkflowStep = ({ icon: Icon, label, index, total }: { icon: any; label: string; index: number; total: number }) => (
  <motion.div
    className="flex flex-col items-center relative"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.2 }}
  >
    <div className="relative">
      <motion.div
        whileInView={{ scale: [0.8, 1.2, 1] }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
      >
        <Icon className="w-8 h-8 text-primary" />
      </motion.div>
      {index < total - 1 && (
        <motion.div
          className="absolute top-1/2 left-full w-full h-0.5 bg-primary/20"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: index * 0.2 }}
        />
      )}
    </div>
    <p className="text-xs mt-2 text-center max-w-[100px]">{label}</p>
  </motion.div>
);

const WorkflowDemo = () => {
  const steps = [
    { icon: MessageSquare, label: "Form Submission" },
    { icon: FileText, label: "AI Processing" },
    { icon: Calendar, label: "Calendar Update" },
    { icon: Bell, label: "Team Notification" }
  ];

  return (
    <div className="bg-secondary-light/30 p-6 rounded-lg">
      <div className="flex justify-between items-center">
        {steps.map((step, index) => (
          <WorkflowStep
            key={index}
            icon={step.icon}
            label={step.label}
            index={index}
            total={steps.length}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkflowDemo;
