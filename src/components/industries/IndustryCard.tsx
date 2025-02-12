
import { motion } from "framer-motion";
import { LucideIcon, Zap } from "lucide-react";
import { useState } from "react";

interface IndustryCardProps {
  icon: LucideIcon;
  title: string;
  summary: string;
  solutions: string[];
  delay: number;
}

const IndustryCard = ({ icon: Icon, title, summary, solutions, delay }: IndustryCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="relative h-[280px] perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative preserve-3d cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Front of card */}
        <div className="absolute inset-0 glass rounded-xl p-4 backface-hidden">
          <div className="relative h-full flex flex-col items-center justify-center text-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="mb-4"
            >
              <Icon className="w-12 h-12 text-primary" />
            </motion.div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-300 text-sm">{summary}</p>
            <div className="absolute top-3 right-3 flex items-center space-x-1 bg-primary/10 px-2 py-0.5 rounded-full">
              <Zap className="w-3 h-3 text-primary" />
              <span className="text-xs text-primary">AI-powered</span>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 glass rounded-xl p-4 backface-hidden rotate-y-180">
          <div className="h-full flex flex-col justify-center">
            <h4 className="text-lg font-bold mb-3">AI Solutions:</h4>
            <ul className="space-y-2">
              {solutions.map((solution, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <Zap className="w-3 h-3 text-primary flex-shrink-0" />
                  <span className="text-gray-300 text-xs">{solution}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default IndustryCard;
