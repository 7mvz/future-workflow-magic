
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  {
    quote: "SimplerWork automated 70% of our manual tasks—boosted efficiency by 3X!",
    author: "Emma Castillo",
    title: "Founder"
  },
  {
    quote: "Their AI assistant handles all customer queries instantly, 24/7.",
    author: "James Harrington",
    title: "CEO"
  },
  {
    quote: "Our costs dropped by 30% after their AI consulting. Highly recommend!",
    author: "Liam Bennett",
    title: "CTO"
  }
];

const SuccessStoriesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

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
            Success Stories
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            See how we've helped businesses transform with AI
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="max-w-4xl mx-auto"
          setApi={(api) => {
            if (api) {
              api.scrollTo(activeIndex);
            }
          }}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center px-4"
                >
                  <div className="relative glass rounded-xl p-8 group">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 -z-10 bg-primary/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <Quote className="w-12 h-12 text-primary mx-auto mb-6 opacity-50" />
                    <p className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="font-display">
                      <p className="font-bold text-lg">{testimonial.author}</p>
                      <p className="text-gray-400">{testimonial.title}</p>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
