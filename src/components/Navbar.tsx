
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToSection } from "@/utils/scrollToSection";

const navLinks = [
  { name: "About", sectionId: "about" },
  { name: "Services", sectionId: "services" },
  { name: "Pricing", sectionId: "pricing" },
  { name: "FAQ", sectionId: "faq" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const toggleMenu = () => setIsOpen(!isOpen);

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.sectionId));
      const scrollPosition = window.scrollY + 100; // Offset for better accuracy

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(navLinks[index].sectionId);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-display font-bold text-gradient"
          >
            SimplerWork
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.sectionId}
                onClick={() => {
                  scrollToSection(link.sectionId);
                  setActiveSection(link.sectionId);
                }}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === link.sectionId
                    ? "text-primary"
                    : "text-gray-400"
                }`}
              >
                {link.name}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("pricing")}
              className="gap-2"
            >
              Get Started for Free
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <Button
              onClick={() => scrollToSection("pricing")}
              size="sm"
              className="gap-2"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
              <div className="py-4 space-y-4">
                {navLinks.map((link) => (
                  <button
                    key={link.sectionId}
                    onClick={() => {
                      scrollToSection(link.sectionId);
                      setActiveSection(link.sectionId);
                      setIsOpen(false);
                    }}
                    className={`block w-full text-left text-sm font-medium transition-colors hover:text-primary ${
                      activeSection === link.sectionId
                        ? "text-primary"
                        : "text-gray-400"
                    }`}
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
