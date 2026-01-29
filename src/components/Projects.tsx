import { ExternalLink, Github, Folder, MapPin } from "lucide-react";
import { motion } from "framer-motion";


const featuredProjects = [
    {
    title: "Alert Group Scholarship Portal",
    description:
      "A comprehensive scholarship management platform for Alert Group that allows applicants to submit applications, upload documents, and track application status in real time, while administrators manage reviews, approvals, and notifications.",
    tech: ["React", "TypeScript", "Prisma", "TailwindCSS"],
    Address: "alertscholarshiportal.com",
    href: "https://alertscholarshiportal.vercel.app/",
    image: "/alertPortal.png",
  },
  {
    title: "Business Banking",
    description:
      "A secure banking platform for AlertMFB that enables account management, fund transfers, transaction tracking, and role-based access control. Designed with a scalable architecture to support real-time operations, high availability, and enterprise-grade security.",
    tech: ["React", "NextJs", "Prisma", "Tailwind", "TypeScript"],
    Address: "business.alertmfb.com.ng",
    href: "https://business.alertmfb.com.ng/welcome",
    image: "/businessBanking.png",
  },
  {
    title: "Elanci Travels",
    description:
      "A modern travel booking and management platform that allows users to explore destinations, plan trips, and manage travel reservations through an intuitive and responsive interface.",
    tech: ["React", "TailwindCSS", "TypeScript"],
    Address: "elancitravels.com",
    href: "https://elancitravels.onrender.com/",
    image: "/elanciTravels.png",
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
              className={`relative grid md:grid-cols-12 gap-6 items-center ${index % 2 === 1 ? "md:text-right" : ""
                }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Project Image */}
              <div
                className={`md:col-span-7 ${index % 2 === 1 ? "md:col-start-6" : ""
                  } relative group cursor-pointer`}
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  transition={{ duration: 0.3 }}
                  className="aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-700 bg-gradient-to-br from-[#0f172a] to-[#0a192f]"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-[#64ffda]/20 group-hover:bg-transparent transition-colors duration-300" />
                </motion.div>
              </div>

              {/* Project Content */}
              <div
                className={`md:col-span-6 ${index % 2 === 1
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
                  className={`flex flex-wrap gap-3 mb-6 text-sm font-mono text-gray-400 ${index % 2 === 1 ? "md:justify-end" : ""
                    }`}
                >
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <div className={`flex gap-3 items-center ${index % 2 === 1 ? "md:justify-end" : ""}`}>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#64ffda] hover:underline"
                  >
                    <MapPin size={22} className="animate-bounce" />
                    <span>{project.Address}</span>
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
