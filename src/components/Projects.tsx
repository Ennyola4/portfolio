import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

const featuredProjects = [
  {
    title: "(UI)Alert Group Scholarship Portal",
    description: "A comprehensive scholarship management platform for Alert Group allowing applicants to submit applications and administrators to manage approvals.",
    tech: ["React", "TypeScript", "Prisma", "TailwindCSS"],
    Address: "alertscholarshiportal.com",
    href: "https://alertscholarshiportal.vercel.app/",
    image: "/alertPortal.png",
  },
  {
    title: "(LIVE)Business Banking",
    description: "A secure banking platform for AlertMFB enabling account management, fund transfers, and real-time transaction tracking.",
    tech: ["React", "NextJs", "Prisma", "Tailwind", "TypeScript"],
    Address: "business.alertmfb.com.ng",
    href: "https://business.alertmfb.com.ng/welcome",
    image: "/businessBanking.png",
  },
  {
    title: "Elanci Travels",
    description: "A modern travel booking platform allowing users to explore destinations and manage travel reservations through an intuitive interface.",
    tech: ["React", "TailwindCSS", "TypeScript"],
    Address: "elancitravels.com",
    href: "https://elancitravels.onrender.com/",
    image: "/elanciTravels.png",
  },
  {
    title: "Goldbucks",
    description: "Goldbucks is your all-in-one investment platform. From target savings to group investments and Bucksfield Naira & Dollar funds - build your wealth with confidence.",
    tech: ["React", "TypeScript", "Firebase"],
    Address: "goldbucks.alertmfb.com.ng",
    href: "https://www.goldbucks.alertmfb.com.ng/",
    image: "/goldbucks.png",
  }
];



const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          className="flex items-center gap-4 text-3xl md:text-4xl font-bold text-black mb-16"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Some Things I've Built
          <span className="h-px bg-gray-300 flex-1" />
        </motion.h2>

        {/* Featured Projects */}
        <div className="space-y-24">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`relative grid md:grid-cols-12 gap-6 items-center ${index % 2 === 1 ? 'md:text-right' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Project Image */}
              <div className={`md:col-span-7 ${index % 2 === 1 ? 'md:col-start-6' : ''} relative group cursor-pointer`}
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  transition={{ duration: 0.3 }}
                  className="aspect-video rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-gray-50"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </motion.div>
              </div>

              {/* Project Content */}
              <div className={`md:col-span-6 ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : 'md:col-start-7'} md:absolute md:inset-0 flex flex-col justify-center px-4 md:px-0`}
              >
                <p className="text-yellow-500 font-mono text-sm mb-2">Featured Project</p>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-4">{project.title}</h3>
                <div className="bg-gray-100 p-6 rounded-2xl shadow-md mb-4 border border-gray-200">
                  <p className="text-gray-500 text-sm leading-relaxed">{project.description}</p>
                </div>
                <ul className={`flex flex-wrap gap-3 mb-6 text-sm font-mono text-yellow-500 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                  {project.tech.map((tech) => <li key={tech}>{tech}</li>)}
                </ul>
                <div className={`flex gap-3 items-center text-yellow-500 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                  <a href={project.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
                    <MapPin size={20} className="animate-bounce text-yellow-500" />
                    <span className="text-yellow-500">{project.Address}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;