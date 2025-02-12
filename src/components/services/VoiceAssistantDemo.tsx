
import { motion, AnimatePresence } from "framer-motion";
import { Mic, Play, Pause } from "lucide-react";
import { Button } from "../ui/button";
import { useState, useEffect } from "react";

const VoiceAssistantDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoPlayStarted, setAutoPlayStarted] = useState(false);

  useEffect(() => {
    // Start auto-play preview after a short delay
    const timer = setTimeout(() => {
      if (!autoPlayStarted) {
        setIsPlaying(true);
        setAutoPlayStarted(true);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [autoPlayStarted]);

  return (
    <div className="bg-secondary-light/30 p-6 rounded-lg">
      <div className="flex flex-col items-center space-y-4">
        <motion.div className="relative w-full">
          <Button
            variant="outline"
            size="lg"
            className="w-full relative overflow-hidden"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isPlaying ? "playing" : "stopped"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-5 h-5 mr-2" />
                    Stop
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5 mr-2" />
                    Play Demo
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </Button>
          
          {isPlaying && (
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-primary w-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 3, ease: "linear" }}
              onAnimationComplete={() => setIsPlaying(false)}
            />
          )}
        </motion.div>

        <AnimatePresence>
          {isPlaying && (
            <>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center justify-center"
              >
                <Mic className="w-8 h-8 text-primary" />
                <div className="flex space-x-1 ml-4">
                  {[1, 2, 3, 4].map((i) => (
                    <motion.div
                      key={i}
                      className="w-1 h-4 bg-primary rounded-full"
                      animate={{
                        height: ["16px", "24px", "16px"]
                      }}
                      transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        delay: i * 0.1
                      }}
                    />
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="text-sm text-gray-300 text-center"
              >
                <p>Caller: "What time are you open tomorrow?"</p>
                <p className="mt-2">AI Assistant: "We're open from 9 AM to 8 PM. Would you like to book an appointment?"</p>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default VoiceAssistantDemo;
