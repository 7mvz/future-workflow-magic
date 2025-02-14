
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const WorkflowNode = ({ delay, x, y, color }: { delay: number; x: number; y: number; color: string }) => (
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
      <div className={`w-4 h-4 rounded-full ${color} blur-sm`} />
      <div className={`w-3 h-3 rounded-full ${color} absolute top-0.5 left-0.5`} />
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
        strokeWidth="2"
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
    </svg>
  </motion.div>
);

const FloatingDataPoint = ({ delay, x, y }: { delay: number; x: number; y: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ 
      opacity: [0, 1, 0],
      y: [y + 20, y, y - 20]
    }}
    transition={{
      duration: 2,
      delay,
      repeat: Infinity,
      repeatDelay: 3
    }}
    className="absolute text-xs font-mono text-primary"
    style={{ left: `${x}%`, top: `${y}%` }}
  >
    01101
  </motion.div>
);

const WorkflowAnimation = () => (
  <div className="relative w-full h-32 mb-8">
    {/* Nodes */}
    <WorkflowNode delay={0} x={10} y={50} color="bg-primary" />
    <WorkflowNode delay={0.3} x={30} y={20} color="bg-primary-light" />
    <WorkflowNode delay={0.6} x={50} y={70} color="bg-primary" />
    <WorkflowNode delay={0.9} x={70} y={30} color="bg-primary-light" />
    <WorkflowNode delay={1.2} x={90} y={50} color="bg-primary" />

    {/* Connecting Lines */}
    <ConnectingLine delay={0.2} start={{ x: 12, y: 52 }} end={{ x: 30, y: 22 }} />
    <ConnectingLine delay={0.5} start={{ x: 32, y: 22 }} end={{ x: 50, y: 72 }} />
    <ConnectingLine delay={0.8} start={{ x: 52, y: 72 }} end={{ x: 70, y: 32 }} />
    <ConnectingLine delay={1.1} start={{ x: 72, y: 32 }} end={{ x: 90, y: 52 }} />

    {/* Floating Data Points */}
    <FloatingDataPoint delay={0} x={20} y={40} />
    <FloatingDataPoint delay={0.5} x={40} y={60} />
    <FloatingDataPoint delay={1} x={60} y={50} />
    <FloatingDataPoint delay={1.5} x={80} y={40} />
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
