import { Code2, Database, Globe, Server } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    icon: Globe,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "REST APIs"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Prisma", "Supabase"],
  },
  {
    title: "Other",
    icon: Code2,
    skills: ["Git", "Figma", "Agile", "Testing", "SEO"],
  },
];

// Animation Variants
const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
};

const Skills = () => {
  return (
    <section className="relative py-24 px-6 bg-white text-gray-800 overflow-hidden">
      {/* Abstract Shapes */}
      <div className="absolute -top-20 -left-40 w-96 h-96 rounded-full bg-[#64ffda]/10 blur-3xl animate-pulse" />
      <div className="absolute -bottom-32 -right-20 w-80 h-80 rounded-full bg-[#D8C99B]/10 blur-2xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#64ffda]/5 blur-2xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Title */}
        <motion.h2
          className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-[#D8C99B] mb-16"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#64ffda] font-mono text-xl">03.</span>
          Skills & Technologies
          <span className="h-px bg-gray-300 flex-1 max-w-xs" />
        </motion.h2>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="relative p-6 bg-gray-50 rounded-2xl border border-gray-200 shadow-lg hover:shadow-[#64ffda]/20 transition-all duration-300 group cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Glow Layer on Hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#64ffda]/20 to-[#D8C99B]/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl blur-xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-4 relative z-10">
                <category.icon className="text-[#64ffda]" size={26} />
                <h3 className="text-lg md:text-xl font-semibold text-[#D8C99B]">
                  {category.title}
                </h3>
              </div>

              {/* Staggered Skills */}
              <motion.ul
                className="space-y-2 relative z-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {category.skills.map((skill) => (
                  <motion.li
                    key={skill}
                    variants={itemVariants}
                    className="text-gray-600 text-sm flex items-center gap-2 hover:text-[#64ffda] transition-colors"
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