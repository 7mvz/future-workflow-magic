
import { motion } from "framer-motion";
import { Cog, Activity, CircleDot } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.1 }}
            transition={{ duration: 0.8 }}
            className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.1 }}
            transition={{ duration: 0.8 }}
            className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Who We Are
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            SimplerWork is an AI-Workflow Automation agency that helps businesses automate repetitive, 
            time-consuming tasks to improve efficiency and drive growth.
          </p>
        </motion.div>

        {/* Animated Elements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Lines */}
          <div className="absolute inset-0 -z-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="hidden md:block absolute top-1/2 left-1/3 w-1/3 h-0.5 bg-gradient-to-r from-primary/20 to-primary/40"
            />
          </div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-8 rounded-xl text-center group hover:bg-primary/5 transition-all duration-300"
          >
            <div className="relative w-16 h-16 mx-auto mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <Cog className="w-16 h-16 text-primary" />
              </motion.div>
            </div>
            <h3 className="text-xl font-bold mb-4">Automation Expertise</h3>
            <p className="text-gray-300">
              We transform manual processes into efficient automated workflows.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass p-8 rounded-xl text-center group hover:bg-primary/5 transition-all duration-300"
          >
            <div className="relative w-16 h-16 mx-auto mb-6">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0"
              >
                <Activity className="w-16 h-16 text-primary" />
              </motion.div>
            </div>
            <h3 className="text-xl font-bold mb-4">Growth Focus</h3>
            <p className="text-gray-300">
              Drive business growth through intelligent automation solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="glass p-8 rounded-xl text-center group hover:bg-primary/5 transition-all duration-300"
          >
            <div className="relative w-16 h-16 mx-auto mb-6">
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0"
              >
                <CircleDot className="w-16 h-16 text-primary" />
              </motion.div>
            </div>
            <h3 className="text-xl font-bold mb-4">AI Innovation</h3>
            <p className="text-gray-300">
              Leverage cutting-edge AI technology for smarter operations.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
