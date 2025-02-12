
import { motion } from "framer-motion";
import { ShoppingBag, Building2, CreditCard, Heart, Globe } from "lucide-react";
import { Button } from "./ui/button";
import IndustryCard from "./industries/IndustryCard";

const industries = [
  {
    icon: ShoppingBag,
    title: "E-commerce",
    summary: "Transform your online store with AI-powered customer experiences",
    solutions: [
      "24/7 AI Customer Support Chatbots",
      "Smart Product Recommendations",
      "Automated Order Tracking",
      "Inventory Optimization"
    ],
    delay: 0.2
  },
  {
    icon: Building2,
    title: "Real Estate",
    summary: "Revolutionize property management and customer service with AI",
    solutions: [
      "AI Property Matching",
      "Automated Property Valuations",
      "Virtual Property Tours",
      "Smart Document Processing"
    ],
    delay: 0.4
  },
  {
    icon: CreditCard,
    title: "Finance",
    summary: "Enhance security and decision-making with AI-powered analysis",
    solutions: [
      "Fraud Detection Systems",
      "Smart Investment Advisors",
      "Risk Assessment AI",
      "Automated Compliance Checks"
    ],
    delay: 0.6
  },
  {
    icon: Heart,
    title: "Healthcare",
    summary: "Improve patient care and operations with AI assistance",
    solutions: [
      "Medical Image Analysis",
      "Patient Care Assistants",
      "Appointment Scheduling",
      "Health Monitoring Systems"
    ],
    delay: 0.8
  },
  {
    icon: Globe,
    title: "Others",
    summary: "No matter your industry, our AI solutions optimize workflows",
    solutions: [
      "Custom AI Development",
      "Process Automation",
      "Data Analysis",
      "Efficiency Optimization"
    ],
    delay: 1.0
  }
];

const IndustriesSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Background Effects */}
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

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            AI-Powered Solutions for Every Industry
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how our AI solutions can transform your business, regardless of your industry
          </p>
        </motion.div>

        {/* Industry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {industries.map((industry, index) => (
            <IndustryCard key={index} {...industry} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-6">
            Not listed? No problem.
          </h3>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary-light text-white transition-all duration-300"
          >
            Let's automate your industry today
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesSection;
