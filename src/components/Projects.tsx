import { ExternalLink, Github, Folder } from "lucide-react";
import { motion } from "framer-motion";

const featuredProjects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with user authentication, payment processing, and inventory management. Built with a modern tech stack for optimal performance.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team workspace features.",
    tech: ["Next.js", "TypeScript", "Prisma", "WebSocket"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Social Media Dashboard",
    description:
      "An analytics dashboard for social media managers featuring data visualization, scheduled posting, and engagement tracking across multiple platforms.",
    tech: ["React", "D3.js", "Express", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
  },
];

const otherProjects = [
  {
    title: "Weather App",
    description:
      "A beautiful weather application with location-based forecasts and animated weather icons.",
    tech: ["React", "OpenWeather API", "Tailwind"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Markdown Editor",
    description:
      "A real-time markdown editor with preview, syntax highlighting, and export options.",
    tech: ["TypeScript", "CodeMirror", "Vite"],
    github: "https://github.com",
  },
  {
    title: "Portfolio Generator",
    description:
      "A CLI tool that generates beautiful portfolio websites from a simple configuration file.",
    tech: ["Node.js", "Handlebars", "CLI"],
    github: "https://github.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-[#0a192f] text-gray-300">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-[#D8C99B] mb-16"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[#64ffda] font-mono text-xl">03.</span>
          Some Things I've Built
          <span className="h-px bg-gray-600 flex-1" />
        </motion.h2>

        {/* Featured Projects */}
        <div className="space-y-24">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`relative grid md:grid-cols-12 gap-6 items-center ${
                index % 2 === 1 ? "md:text-right" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Project Image */}
              <div
                className={`md:col-span-7 ${
                  index % 2 === 1 ? "md:col-start-6" : ""
                } relative group cursor-pointer`}
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  transition={{ duration: 0.3 }}
                  className="aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-700 bg-gradient-to-br from-[#0f172a] to-[#0a192f]"
                >
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#64ffda]/20 to-[#64ffda]/10">
                    <Folder size={64} className="text-[#64ffda]/50" />
                  </div>
                  <div className="absolute inset-0 bg-[#64ffda]/20 group-hover:bg-transparent transition-colors duration-300" />
                </motion.div>
              </div>

              {/* Project Content */}
              <div
                className={`md:col-span-6 ${
                  index % 2 === 1
                    ? "md:col-start-1 md:row-start-1"
                    : "md:col-start-7"
                } md:absolute md:inset-0 flex flex-col justify-center px-4 md:px-0`}
              >
                <p className="text-[#64ffda] font-mono text-sm mb-2">
                  Featured Project
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-[#D8C99B] mb-4">
                  {project.title}
                </h3>
                <div className="bg-[#0f172a] p-6 rounded-xl shadow-lg mb-4 border border-gray-700">
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <ul
                  className={`flex flex-wrap gap-3 mb-4 text-sm font-mono text-gray-400 ${
                    index % 2 === 1 ? "md:justify-end" : ""
                  }`}
                >
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <div
                  className={`flex gap-4 ${
                    index % 2 === 1 ? "md:justify-end" : ""
                  }`}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#64ffda] transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#64ffda] transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.h3
          className="text-xl md:text-2xl font-bold text-[#D8C99B] text-center mt-32 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Other Noteworthy Projects
        </motion.h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project,) => (
            <motion.div
              key={project.title}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-[#0f172a] rounded-xl border border-gray-700 hover:border-[#64ffda]/50 shadow-md"
            >
              <div className="flex items-start justify-between mb-4">
                <Folder className="text-[#64ffda]" size={36} />
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#64ffda] transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#64ffda] transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              <h4 className="text-lg font-semibold text-[#D8C99B] mb-2 hover:text-[#64ffda] transition-colors">
                {project.title}
              </h4>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-2 text-xs font-mono text-gray-400">
                {project.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
