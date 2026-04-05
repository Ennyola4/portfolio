import { Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-gray-300 bg-white text-gray-700">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Social Links */}
          <motion.div
            className="flex items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.a
              href="https://github.com/Ennyola4"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#64ffda" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Github size={20} />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#64ffda" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Linkedin size={20} />
            </motion.a>

            <motion.a
              href="https://x.com/home"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#64ffda" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Twitter size={20} />
            </motion.a>
          </motion.div>

          {/* Footer Text */}
          <motion.p
            className="text-sm font-mono mt-4 md:mt-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Designed & Built by{" "}
            <span className="text-gray-800 text-lg font-medium">Enitan Ajayi</span>
          </motion.p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;