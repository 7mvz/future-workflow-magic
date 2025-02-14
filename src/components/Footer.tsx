
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Youtube, Twitter, Instagram } from "lucide-react";
import { scrollToSection } from "@/utils/scrollToSection";

const quickLinks = [
  { name: "Services", sectionId: "services" },
  { name: "Process", sectionId: "process" },
  { name: "Industries", sectionId: "industries" },
  { name: "Pricing", sectionId: "pricing" },
  { name: "FAQ", sectionId: "faq" },
];

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, url: "#" },
  { name: "YouTube", icon: Youtube, url: "#" },
  { name: "Twitter", icon: Twitter, url: "#" },
  { name: "Instagram", icon: Instagram, url: "#" },
];

const Footer = () => {
  return (
    <footer className="relative py-20 backdrop-blur-sm bg-transparent">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-6"
          >
            <button
              onClick={() => scrollToSection("hero")}
              className="text-3xl font-display font-bold text-gradient"
            >
              SimplerWork
            </button>
            <p className="text-gray-400 max-w-md leading-relaxed">
              Experience the future of work with our AI-powered automation solutions. Transform your business operations and unlock new possibilities.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-gradient">Navigation</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.sectionId)}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-gradient">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:team@simplerwork.co"
                  className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  team@simplerwork.co
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  +1 234 567 8900
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-white/5"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2024 SimplerWork. All rights reserved.
            </p>
            <div className="flex gap-8 text-sm">
              <button
                onClick={() => scrollToSection("terms")}
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Terms & Conditions
              </button>
              <button
                onClick={() => scrollToSection("privacy")}
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Privacy Policy
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
