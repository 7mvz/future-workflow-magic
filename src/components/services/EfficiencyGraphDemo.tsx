
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const EfficiencyGraphDemo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);

  return (
    <div 
      ref={containerRef}
      className="bg-secondary-light/30 p-4 rounded-lg"
    >
      <div className="h-32 relative">
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-600" />
        <div className="absolute left-0 h-full w-0.5 bg-gray-600" />
        <motion.div className="absolute bottom-0 left-0 w-full h-full">
          <svg className="w-full h-full">
            <motion.path
              d="M 0 120 Q 50 120 100 80 Q 150 40 200 20"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-primary"
              style={{ pathLength }}
            />
          </svg>
        </motion.div>
        <motion.div
          className="absolute bottom-[120px] left-0 text-xs"
          style={{ opacity }}
        >
          40%
        </motion.div>
        <motion.div
          className="absolute bottom-[20px] right-0 text-xs"
          style={{ opacity }}
        >
          85%
        </motion.div>
      </div>
    </div>
  );
};

export default EfficiencyGraphDemo;
