
import { motion } from "framer-motion";
import { Mic } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

const VoiceAssistantDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-secondary-light/30 p-4 rounded-lg">
      <div className="flex flex-col items-center space-y-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center justify-center space-x-4"
        >
          <Button
            variant="outline"
            size="lg"
            className="relative overflow-hidden"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            <Mic className={`w-5 h-5 mr-2 ${isPlaying ? "text-primary animate-pulse" : ""}`} />
            {isPlaying ? "Stop" : "Play Demo"}
          </Button>
        </motion.div>

        {isPlaying && (
          <>
            <div className="flex space-x-1">
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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-gray-300 text-center"
            >
              <p>Caller: "What time are you open tomorrow?"</p>
              <p className="mt-2">AI Assistant: "We're open from 9 AM to 8 PM. Would you like to book an appointment?"</p>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
};

export default VoiceAssistantDemo;
