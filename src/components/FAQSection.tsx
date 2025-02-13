
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How can AI help my business?",
    answer: "AI can automate repetitive tasks, enhance customer service through 24/7 support, analyze data for better decision-making, and streamline operations. This leads to increased efficiency, reduced costs, and improved customer satisfaction."
  },
  {
    question: "What industries can AI automation be applied to?",
    answer: "AI automation can benefit virtually any industry, including healthcare, finance, retail, manufacturing, logistics, and professional services. We customize solutions to meet your specific industry needs and requirements."
  },
  {
    question: "How long does AI implementation take?",
    answer: "Implementation timelines vary based on project complexity, typically ranging from 2-12 weeks. We follow an agile approach, delivering value incrementally while ensuring minimal disruption to your operations."
  },
  {
    question: "How secure is AI automation?",
    answer: "We prioritize security in all our AI implementations, using enterprise-grade encryption, secure APIs, and following industry best practices. Our solutions comply with relevant data protection regulations and standards."
  },
  {
    question: "What makes SimplerWork different?",
    answer: "We combine technical expertise with business acumen, offering customized AI solutions that deliver measurable results. Our dedicated team approach, proven methodology, and focus on practical applications set us apart."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Get answers to common questions about our AI solutions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass rounded-lg border-none"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                  <span className="text-left font-medium text-lg group-hover:text-primary transition-colors">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
