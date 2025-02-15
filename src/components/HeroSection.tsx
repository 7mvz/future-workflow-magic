
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, BrainCircuit, CheckCircle2 } from "lucide-react";

const WorkflowNode = ({ delay, x, y, color, label }: { delay: number; x: number; y: number; color: string; label: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.5,
      delay,
      type: "spring",
      stiffness: 100
    }}
    className="absolute"
    style={{ left: `${x}%`, top: `${y}%` }}
  >
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 360],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "linear"
      }}
      className="relative"
    >
      <div className={`w-6 h-6 rounded-full ${color} blur-sm`} />
      <div className={`w-4 h-4 rounded-full ${color} absolute top-1 left-1`} />
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-medium text-gray-300">
        {label}
      </div>
    </motion.div>
  </motion.div>
);

const ConnectingLine = ({ delay, start, end }: { delay: number; start: { x: number, y: number }; end: { x: number, y: number } }) => (
  <motion.div
    initial={{ opacity: 0, pathLength: 0 }}
    animate={{ opacity: 1, pathLength: 1 }}
    transition={{ duration: 1, delay }}
    style={{
      position: 'absolute',
      left: `${start.x}%`,
      top: `${start.y}%`,
      width: `${Math.abs(end.x - start.x)}%`,
      height: `${Math.abs(end.y - start.y)}%`,
    }}
  >
    <svg
      width="100%"
      height="100%"
      style={{
        position: 'absolute',
        overflow: 'visible',
      }}
    >
      <motion.path
        d={`M0 0 L${end.x - start.x} ${end.y - start.y}`}
        stroke="url(#gradient)"
        strokeWidth="3"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay }}
      />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#9b87f5" />
          <stop offset="100%" stopColor="#b3a3f7" />
        </linearGradient>
      </defs>
      <motion.path
        d={`M${end.x - start.x - 10} ${(end.y - start.y) / 2 - 5} L${end.x - start.x} ${(end.y - start.y) / 2} L${end.x - start.x - 10} ${(end.y - start.y) / 2 + 5}`}
        stroke="url(#gradient)"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  </motion.div>
);

const ProcessingIndicator = () => (
  <motion.div
    animate={{ 
      scale: [1, 1.2, 1],
      opacity: [0.5, 1, 0.5]
    }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
  >
    <div className="text-sm font-semibold text-primary">
      Processing...
    </div>
  </motion.div>
);

const IconWithTooltip = ({ Icon, label, className }: { Icon: any, label: string, className?: string }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    className={`absolute -bottom-16 left-1/2 -translate-x-1/2 text-gray-400 hover:text-primary transition-colors ${className}`}
  >
    <Icon className="w-5 h-5" />
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileHover={{ opacity: 1, y: 0 }}
      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 rounded text-xs whitespace-nowrap"
    >
      {label}
    </motion.div>
  </motion.div>
);

const WorkflowAnimation = () => (
  <div className="relative w-full h-40 mb-8">
    {/* Stage nodes with distinct colors and icons */}
    <div className="relative">
      <WorkflowNode delay={0} x={15} y={50} color="bg-primary" label="Your Workflow" />
      <IconWithTooltip Icon={FileText} label="Input your tasks" />
    </div>
    
    <div className="relative">
      <WorkflowNode delay={0.5} x={50} y={50} color="bg-primary-light" label="AI Automation" />
      <IconWithTooltip Icon={BrainCircuit} label="AI processes and optimizes" className="text-primary-light" />
    </div>
    
    <div className="relative">
      <WorkflowNode delay={1} x={85} y={50} color="bg-primary" label="Work Transformed" />
      <IconWithTooltip Icon={CheckCircle2} label="Tasks completed efficiently" />
    </div>

    {/* Connecting lines with arrows */}
    <ConnectingLine delay={0.2} start={{ x: 17, y: 52 }} end={{ x: 50, y: 52 }} />
    <ConnectingLine delay={0.7} start={{ x: 52, y: 52 }} end={{ x: 85, y: 52 }} />

    {/* Processing indicator */}
    <ProcessingIndicator />
  </div>
);

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container max-w-4xl mx-auto text-center"
      >
        <WorkflowAnimation />
        
        <div className="heading-reveal mb-6">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
            We elevate your business using{" "}
            <span className="text-gradient">Artificial Intelligence.</span>
          </h1>
        </div>
        <div className="heading-reveal mb-12">
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            We elevate and grow organizations using top-tier AI solutions.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary-light text-white transition-all duration-300 group"
          >
            Our Services
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
          >
            Book a Call
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
