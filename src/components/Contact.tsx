import { Mail } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-2xl text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0a192f] mb-6"
        >
          Get In Touch
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gray-700 text-base sm:text-lg mb-12 leading-relaxed"
        >
          I'm currently open to new opportunities and always happy to connect. 
          Whether you have a question, a project idea, or just want to say hi, 
          my inbox is always open!
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="mailto:hello@example.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="inline-flex items-center gap-2 px-8 py-4 border  rounded hover:bg-[#64ffda]/10 transition-all duration-200 font-medium text-lg"
        >
          <Mail size={20} />
          Say Hello
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;