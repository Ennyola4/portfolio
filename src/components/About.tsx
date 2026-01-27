import { Github, Linkedin, Mail } from "lucide-react"

const About = () => {
  return (
    <section id="about" className="relative py-20 bg-[#0a192f] text-gray-300">
      <div className="max-w-6xl mx-auto px-6 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT: Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#D8C99B] mb-4">
            About Me
          </h2>
          <p className="text-gray-400 mb-4">
            Hi! I’m <span className="text-[#64ffda] font-semibold">Enitan Ajayi</span>, a software developer passionate about building beautiful and functional digital experiences. I specialize in full-stack web development and enjoy turning complex problems into elegant solutions.
          </p>

          <p className="text-gray-400 mb-4">
            I’m experienced in modern technologies including <span className="text-[#64ffda] font-medium">React, Node.js, TypeScript, TailwindCSS</span>, and more. I focus on writing clean, maintainable code while creating responsive, accessible, and performant applications.
          </p>

          <p className="text-gray-400 mb-6">
            When I’m not coding, I love exploring new technologies, contributing to open-source projects, and learning new design patterns that improve both user experience and developer experience.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mt-6">
            <a href="https://github.com/" target="_blank" className="text-[#64ffda] hover:text-white transition">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/" target="_blank" className="text-[#64ffda] hover:text-white transition">
              <Linkedin size={20} />
            </a>
            <a href="mailto:example@email.com" className="text-[#64ffda] hover:text-white transition">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* RIGHT: Image / Illustration */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-xl overflow-hidden border-2 border-[#64ffda]">
            <img
              src="https://www.mavenart.com/wp-blog/wp-content/uploads/2023/07/image17.png" 
              alt="Enitan Ajayi"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
