
import { motion } from "framer-motion";
import { Code2, Settings, BarChart, FileJson, Database, Workflow } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";

const ProcessStep = ({ 
  title, 
  description, 
  children,
  index 
}: { 
  title: string; 
  description: string; 
  children: React.ReactNode;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16"
    >
      <div className="space-y-4">
        <h3 className="text-2xl md:text-3xl font-bold">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>
      <div className="bg-secondary-light/30 rounded-lg p-6">
        {children}
      </div>
    </motion.div>
  );
};

const IntegrationIcon = ({ icon: Icon, label }: { icon: any; label: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4 }}
    className="flex flex-col items-center space-y-2"
  >
    <div className="p-3 bg-primary/10 rounded-lg">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <span className="text-xs text-gray-300">{label}</span>
  </motion.div>
);

const CodePreview = () => (
  <ScrollArea className="h-[200px] w-full rounded-md bg-secondary-dark/50 p-4">
    <pre className="text-sm text-gray-300">
      <code>{`import { useState } from 'react';
import OpenAI from 'openai';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  
  const handleQuery = async (userInput) => {
    const response = await openai.chat.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: "You are a helpful assistant" },
        { role: "user", content: userInput }
      ]
    });
    
    setMessages([...messages, response]);
  };

  return (
    <div className="chatbot-container">
      {/* Chat interface */}
    </div>
  );
};`}</code>
    </pre>
  </ScrollArea>
);

const StatusList = () => {
  const items = [
    { name: "Customer Service Chatbot", status: "Operational" },
    { name: "Lead Generation AI", status: "Active" },
    { name: "Data Processing Pipeline", status: "Running" },
  ];

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
          className="flex items-center justify-between p-3 bg-secondary-dark/50 rounded-lg"
        >
          <span className="text-sm text-gray-300">{item.name}</span>
          <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full">
            {item.status}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

const ProcessSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Our Process
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            How we transform your business with AI
          </p>
        </motion.div>

        <div className="space-y-8">
          <ProcessStep
            index={0}
            title="Workflow Analysis"
            description="We start by analyzing your workflows to identify AI automation opportunities."
          >
            <div className="grid grid-cols-3 gap-4">
              <IntegrationIcon icon={Database} label="Airtable" />
              <IntegrationIcon icon={FileJson} label="Notion" />
              <IntegrationIcon icon={Settings} label="Zapier" />
              <IntegrationIcon icon={Code2} label="OpenAI" />
              <IntegrationIcon icon={BarChart} label="Analytics" />
              <IntegrationIcon icon={Workflow} label="Automation" />
            </div>
          </ProcessStep>

          <ProcessStep
            index={1}
            title="Solution Development"
            description="Next, we build AI solutions tailored to your needs."
          >
            <CodePreview />
          </ProcessStep>

          <ProcessStep
            index={2}
            title="Maintenance & Improvement"
            description="We continuously refine and optimize your AI workflows."
          >
            <StatusList />
          </ProcessStep>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
