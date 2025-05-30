
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Upload, CheckCircle, Play } from "lucide-react";

const ProcessVisualization = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    if (isLoading) {
      const timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setIsLoading(false);
            clearInterval(timer);
            return 100;
          }
          return prev + 1;
        });
      }, 30);
      return () => clearInterval(timer);
    }
  }, [isLoading]);

  const resetAnimation = () => {
    setIsLoading(true);
    setProgress(0);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto h-48 flex items-center justify-center rounded-3xl mb-8 overflow-hidden card-elegant">
      {/* Elegant background with subtle pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 via-transparent to-pink-50/50 z-10" />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1 }}
          className="w-full h-full"
        >
          <svg className="w-full h-full">
            <pattern id="elegantGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="currentColor" className="text-purple-400" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#elegantGrid)" />
          </svg>
        </motion.div>
      </div>

      {/* Main visualization with refined animations */}
      <div className="relative z-20 flex flex-col items-center w-full px-8 space-y-8">
        {/* Elegant progress bar */}
        <div className="w-full max-w-lg bg-gray-100 h-2 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 rounded-full"
            style={{ width: `${progress}%` }}
            initial={{ width: "0%" }}
            animate={{ 
              width: `${progress}%`,
              boxShadow: isLoading ? ["0 0 10px rgba(139, 92, 246, 0.3)", "0 0 20px rgba(139, 92, 246, 0.5)"] : "none"
            }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Refined status icons */}
        <motion.div 
          className="flex items-center space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            animate={{ scale: progress > 0 ? [1, 1.1, 1] : 1 }}
            transition={{ duration: 0.3 }}
          >
            <Upload className={`w-6 h-6 ${progress > 0 ? 'text-purple-600' : 'text-gray-400'}`} />
          </motion.div>
          
          <motion.div 
            className="w-24 h-px bg-gray-200"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          
          <div className="relative">
            <motion.div 
              className={`w-8 h-8 rounded-full flex items-center justify-center
                ${isLoading ? 'bg-purple-50 border border-purple-200' : 'bg-purple-50 border border-purple-200'}`}
              animate={{ 
                scale: isLoading ? [1, 1.05, 1] : 1,
                rotate: isLoading ? 360 : 0 
              }}
              transition={{ 
                duration: 3,
                repeat: isLoading ? Infinity : 0,
                ease: "linear"
              }}
            >
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-purple-400 border-t-transparent rounded-full" />
              ) : (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                </motion.div>
              )}
            </motion.div>
          </div>
          
          <motion.div 
            className="w-24 h-px bg-gray-200"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
          
          <motion.div
            animate={{ 
              scale: progress === 100 ? [1, 1.1, 1] : 1,
              opacity: progress === 100 ? 1 : 0.4
            }}
            transition={{ duration: 0.3 }}
          >
            <CheckCircle className={`w-6 h-6 ${progress === 100 ? 'text-purple-600' : 'text-gray-400'}`} />
          </motion.div>
        </motion.div>

        {/* Elegant status label */}
        <motion.div 
          className="text-base font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {progress < 100 ? (
            <div className="flex items-center space-x-2 text-gray-600">
              <span>Transforming Your Workflow</span>
              <motion.div 
                className="inline-flex space-x-1"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <span className="animate-bounce delay-0">.</span>
                <span className="animate-bounce delay-150">.</span>
                <span className="animate-bounce delay-300">.</span>
              </motion.div>
            </div>
          ) : (
            <motion.span
              className="text-gradient"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              AI Transformation Complete!
            </motion.span>
          )}
        </motion.div>

        {/* Refined reset button */}
        <motion.button 
          onClick={resetAnimation}
          className="absolute bottom-4 right-4 text-sm text-gray-400 hover:text-purple-600 transition-colors"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <Play className="w-4 h-4" />
        </motion.button>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Floating gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 gradient-orb rounded-full animate-float opacity-60" />
      <div className="absolute bottom-20 right-10 w-80 h-80 gradient-orb-secondary rounded-full animate-float-delayed opacity-50" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] gradient-orb rounded-full animate-pulse-soft opacity-30" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container max-w-4xl mx-auto text-center relative z-10"
      >
        <ProcessVisualization />
        
        <div className="heading-reveal mb-6">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
            We elevate your business using{" "}
            <span className="text-gradient">Artificial Intelligence.</span>
          </h1>
        </div>
        <div className="heading-reveal mb-12">
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            We elevate and grow organizations using top-tier AI solutions.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="btn-gradient text-white transition-all duration-300 group shadow-lg shadow-purple-500/25"
          >
            Our Services
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-purple-200 text-purple-700 hover:bg-purple-50 bg-white/80 backdrop-blur-sm"
          >
            Book a Call
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
