
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  demo: () => JSX.Element;
  delay: number;
}

const ServiceCard = ({ icon: Icon, title, description, demo: Demo, delay }: ServiceCardProps) => {
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

export default ServiceCard;
