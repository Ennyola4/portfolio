import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            About Me
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl">
            I’m <span className="font-semibold text-black">Enitan Ajayi</span>,
            a software developer focused on building modern, scalable, and
            high-performance web applications.
          </p>

          <p className="mt-4 text-gray-600 text-lg leading-relaxed max-w-xl">
            I specialize in <span className="font-medium text-black">React, TypeScript, Node.js</span> and
            love creating clean user interfaces with great user experience.
          </p>

          <p className="mt-4 text-gray-600 text-lg leading-relaxed max-w-xl">
            My goal is simple — build products that not only work well but feel
            great to use.
          </p>

          {/* SOCIALS */}
          <div className="flex gap-4 mt-8">
            <a
              href="https://github.com/Ennyola4"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-gray-200 hover:bg-gray-200  transition transform transition-all duration-300 ease-in-out hover:scale-105 active:scale-95"
            >
              <Github size={18} />
              
            </a>
            <a
              href="https://www.linkedin.com/in/enitan-ajayi-02829a3a7/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-gray-200 hover:bg-gray-200 transition  transform transition-all duration-300 ease-in-out hover:scale-105 active:scale-95"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://mail.google.com/mail/u/0/#inbox"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-gray-200 hover:bg-gray-200 transition  transform transition-all duration-300 ease-in-out hover:scale-105 active:scale-95"
            >
              <Mail size={18} />
            </a>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Background card */}
            <div className="absolute -top-6 -left-6 w-full h-full bg-gray-100 rounded-2xl" />

            {/* Image */}
            <img
              src="https://media.craiyon.com/2024-09-19/pTqdzlorS-uGf367PYXzSA.webp"
              alt="Enitan Ajayi"
              className="relative w-72 h-72 md:w-80 md:h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;