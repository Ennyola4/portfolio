import { Code2, Database, Globe, Server, Smartphone, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    icon: Globe,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "Python", "REST APIs", "GraphQL"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Supabase"],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    skills: ["React Native", "Expo", "iOS", "Android"],
  },
  {
    title: "DevOps",
    icon: Wrench,
    skills: ["Docker", "AWS", "Vercel", "CI/CD", "Linux"],
  },
  {
    title: "Other",
    icon: Code2,
    skills: ["Git", "Figma", "Agile", "Testing", "SEO"],
  },
];

// 🔹 Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};



const itemVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1], 
    },
  },
};

const Skills = () => {
  return (
    <section className="relative py-24 px-6 bg-[#0a192f] text-gray-300 overflow-hidden">
      {/* SVG background */}
      <svg
        className="absolute bottom-0 left-0 w-full h-[110vh] -z-10"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          d="M0,160 C240,220 480,260 720,240 960,220 1200,160 1440,120 L1440,320 L0,320 Z"
          fill="#64ffda"
          opacity="0.15"
        />
      </svg>

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Section Title */}
        <motion.h2
          className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-[#D8C99B] mb-12"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#64ffda] font-mono text-xl">02.</span>
          Skills & Technologies
          <span className="h-px bg-gray-600 flex-1 max-w-xs" />
        </motion.h2>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="p-6 bg-[#0f172a]/50 rounded-lg border border-gray-700 hover:border-[#64ffda]/50 shadow-lg transition-all duration-300 group cursor-pointer"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <category.icon className="text-[#64ffda]" size={24} />
                <h3 className="text-lg font-semibold text-[#D8C99B]">
                  {category.title}
                </h3>
              </div>

              {/* Staggered Skills */}
              <motion.ul
                className="space-y-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {category.skills.map((skill) => (
                  <motion.li
                    key={skill}
                    variants={itemVariants}
                    className="text-gray-400 text-sm flex items-center gap-2 hover:text-[#64ffda] transition-colors"
                    whileHover={{ x: 6 }}
                  >
                    <span className="w-2 h-2 bg-[#64ffda] rounded-full" />
                    {skill}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
