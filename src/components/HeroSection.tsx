
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
    <div className="relative w-full max-w-4xl mx-auto h-48 flex items-center justify-center rounded-xl mb-8 overflow-hidden">
      {/* Enhanced background grid with gradient overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-dark/80 via-transparent to-secondary-dark/80 z-10" />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="w-full h-full"
        >
          <svg className="w-full h-full">
            <pattern id="grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect width="20" height="20" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </motion.div>
      </div>

      {/* Main visualization with enhanced animations */}
      <div className="relative z-20 flex flex-col items-center w-full px-8 space-y-8">
        {/* Progress bar with pulse effect */}
        <div className="w-full max-w-lg bg-secondary-light h-3 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-primary via-primary-light to-primary rounded-full"
            style={{ width: `${progress}%` }}
            initial={{ width: "0%" }}
            animate={{ 
              width: `${progress}%`,
              boxShadow: isLoading ? ["0 0 10px rgba(155, 135, 245, 0.3)", "0 0 20px rgba(155, 135, 245, 0.5)"] : "none"
            }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Enhanced status icons with animations */}
        <motion.div 
          className="flex items-center space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            animate={{ scale: progress > 0 ? [1, 1.2, 1] : 1 }}
            transition={{ duration: 0.3 }}
          >
            <Upload className={`w-6 h-6 ${progress > 0 ? 'text-primary' : 'text-gray-600'}`} />
          </motion.div>
          
          <motion.div 
            className="w-32 h-px bg-secondary-light"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          
          <div className="relative">
            <motion.div 
              className={`w-8 h-8 rounded-full flex items-center justify-center
                ${isLoading ? 'bg-primary/20 border border-primary' : 'bg-primary/20 border border-primary'}`}
              animate={{ 
                scale: isLoading ? [1, 1.1, 1] : 1,
                rotate: isLoading ? 360 : 0 
              }}
              transition={{ 
                duration: 2,
                repeat: isLoading ? Infinity : 0,
                ease: "linear"
              }}
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full" />
              ) : (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <CheckCircle className="w-5 h-5 text-primary" />
                </motion.div>
              )}
            </motion.div>
          </div>
          
          <motion.div 
            className="w-32 h-px bg-secondary-light"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
          
          <motion.div
            animate={{ 
              scale: progress === 100 ? [1, 1.2, 1] : 1,
              opacity: progress === 100 ? 1 : 0.3
            }}
            transition={{ duration: 0.3 }}
          >
            <CheckCircle className={`w-6 h-6 ${progress === 100 ? 'text-primary' : 'text-gray-600'}`} />
          </motion.div>
        </motion.div>

        {/* Enhanced status label with smoother transitions */}
        <motion.div 
          className="text-lg font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {progress < 100 ? (
            <div className="flex items-center space-x-2 text-gray-200">
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
              className="text-primary"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              AI Transformation Complete!
            </motion.span>
          )}
        </motion.div>

        {/* Enhanced reset button with hover effect */}
        <motion.button 
          onClick={resetAnimation}
          className="absolute bottom-4 right-4 text-sm text-gray-400 hover:text-primary transition-colors"
          whileHover={{ scale: 1.1, rotate: 360 }}
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
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container max-w-4xl mx-auto text-center"
      >
        <ProcessVisualization />
        
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
