
import { motion } from "framer-motion";
import { useState } from "react";

const ChatbotDemo = () => {
  const [isActive, setIsActive] = useState(false);
  const conversation = [
    { user: true, message: "What are your pricing plans?" },
    { user: false, message: "Sure! We offer Basic ($997/month), Pro ($3997/month), and Custom solutions. Want to see details?" },
    { user: true, message: "Do you integrate with WhatsApp?" },
    { user: false, message: "Yes! Our chatbots work with WhatsApp, Instagram, and websites." }
  ];

  return (
    <div 
      className="bg-secondary-light/30 p-4 rounded-lg cursor-pointer"
      onClick={() => setIsActive(true)}
    >
      <div className="space-y-3">
        {conversation.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: msg.user ? -10 : 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: isActive ? index * 0.5 : 0 }}
            className={`flex ${msg.user ? "justify-end" : "justify-start"}`}
          >
            <div className={`max-w-[80%] p-3 rounded-lg ${msg.user ? "bg-primary/20" : "bg-white/10"}`}>
              <p className="text-sm">
                <span className="font-semibold">{msg.user ? "User: " : "Bot: "}</span>
                {msg.message}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ChatbotDemo;
