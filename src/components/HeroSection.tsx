
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
      {/* Background grid effect */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <svg className="w-full h-full">
          <pattern id="grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect width="20" height="20" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Main visualization */}
      <div className="relative flex flex-col items-center w-full px-8 space-y-8">
        {/* Progress bar */}
        <div className="w-full max-w-lg bg-secondary-light h-3 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-primary via-primary-light to-primary transition-all duration-300 rounded-full"
            style={{ width: `${progress}%` }}
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
          />
        </div>

        {/* Status text */}
        <div className="flex items-center space-x-4">
          <Upload className={`w-6 h-6 ${progress > 0 ? 'text-primary' : 'text-gray-600'}`} />
          <div className="w-32 h-px bg-secondary-light" />
          <div className="relative">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center
              ${isLoading ? 'bg-primary/20 border border-primary' : 'bg-primary/20 border border-primary'}`}>
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              ) : (
                <CheckCircle className="w-5 h-5 text-primary" />
              )}
            </div>
          </div>
          <div className="w-32 h-px bg-secondary-light" />
          <CheckCircle className={`w-6 h-6 ${progress === 100 ? 'text-primary' : 'text-gray-600'}`} />
        </div>

        {/* Status label */}
        <div className="text-lg font-medium text-gray-200">
          {progress < 100 ? (
            <div className="flex items-center space-x-2">
              <span>Transforming Your Workflow</span>
              <span className="inline-flex space-x-1">
                <span className="animate-bounce delay-0">.</span>
                <span className="animate-bounce delay-150">.</span>
                <span className="animate-bounce delay-300">.</span>
              </span>
            </div>
          ) : (
            <span className="text-primary">AI Transformation Complete!</span>
          )}
        </div>

        {/* Reset button */}
        <button 
          onClick={resetAnimation}
          className="absolute bottom-4 right-4 text-sm text-gray-400 hover:text-primary transition-colors"
        >
          <Play className="w-4 h-4" />
        </button>
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
