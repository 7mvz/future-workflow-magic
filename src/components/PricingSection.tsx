
import { motion } from "framer-motion";
import { Check, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const plans = [
  {
    name: "Basic",
    price: "997",
    features: [
      "1 Dedicated Developer",
      "Custom Workflow Automations",
      "AI Business Consulting",
      "Chatbot & LLM Development",
      "Voice Assistant Development"
    ],
    cta: "Book a Call",
    delay: 0.1
  },
  {
    name: "Professional",
    price: "3,997",
    features: [
      "2 Dedicated Developers",
      "Advanced AI Workflow Automations",
      "AI Business Consulting",
      "AI Chatbot & Voice Assistant Development",
      "Priority Support"
    ],
    cta: "Book a Call",
    popular: true,
    delay: 0.2
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "X Dedicated Developers",
      "Advanced Custom AI Solutions",
      "24/7 Priority Support",
      "Custom Integration Development",
      "Dedicated Account Manager"
    ],
    cta: "Get a Custom Quote",
    delay: 0.3
  }
];

const PricingSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.1 }}
            transition={{ duration: 0.8 }}
            className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.1 }}
            transition={{ duration: 0.8 }}
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: plan.delay }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 0 20px rgba(155, 135, 245, 0.2)"
                }}
                transition={{ duration: 0.2 }}
                className={`h-full glass rounded-xl p-8 relative ${
                  plan.popular ? "border-2 border-primary" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold mb-2">
                    ${plan.price}
                    {plan.price !== "Custom" && <span className="text-lg">/mo</span>}
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: plan.delay + (index * 0.1) }}
                      className="flex items-center space-x-3"
                    >
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary-light text-white transition-all duration-300 group"
                >
                  {plan.cta}
                  <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
