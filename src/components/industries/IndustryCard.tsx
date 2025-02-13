
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
      className="relative h-[280px] perspective-1000 group"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full h-full relative preserve-3d cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        {/* Front of card */}
        <div className="absolute inset-0 glass rounded-xl p-4 backface-hidden">
          <div className="relative h-full flex flex-col items-center justify-center text-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="mb-3"
            >
              <Icon className="w-14 h-14 text-primary group-hover:text-primary-light transition-colors duration-300" />
            </motion.div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-300 text-sm leading-snug px-2">{summary}</p>
            <div className="absolute top-3 right-3 flex items-center space-x-1 bg-primary/10 px-2 py-0.5 rounded-full">
              <Zap className="w-3 h-3 text-primary" />
              <span className="text-xs text-primary">Click for more</span>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 glass rounded-xl p-4 backface-hidden rotate-y-180">
          <div className="h-full flex flex-col justify-center">
            <h4 className="text-lg font-bold mb-2">AI Solutions:</h4>
            <ul className="space-y-2">
              {solutions.map((solution, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <Zap className="w-3 h-3 text-primary flex-shrink-0" />
                  <span className="text-gray-300 text-xs leading-tight">{solution}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
      {/* Glow effect */}
      <div className="absolute inset-0 -z-10 bg-primary/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};

export default IndustryCard;
