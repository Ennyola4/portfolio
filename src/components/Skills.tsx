import { Code2, Database, Globe, Server, Sparkles, TrendingUp, Award, Cpu } from "lucide-react";
import { motion, type Variants, useScroll, useTransform, } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// ── Data ──────────────────────────────────────────────────────────────────────

const skillCategories = [
  {
    title: "Frontend",
    icon: Globe,
    accent: "#3B82F6",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    level: 90,
  },
  {
    title: "Backend",
    icon: Server,
    accent: "#10B981",
    skills: ["Node.js", "Express", "REST APIs"],
    level: 85,
  },
  {
    title: "Database",
    icon: Database,
    accent: "#F97316",
    skills: ["PostgreSQL", "MongoDB", "Prisma", "Supabase"],
    level: 80,
  },
  {
    title: "Other",
    icon: Code2,
    accent: "#cfff47",
    skills: ["Git", "Figma", "Agile", "Testing", "SEO"],
    level: 75,
  },
];

// ── Variants ──────────────────────────────────────────────────────────────────

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const skillItem: Variants = {
  hidden: { opacity: 0, x: -15, rotateY: -10 },
  show: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], type: "spring" },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 20, duration: 0.6 },
  },
};

const gridVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};


// ── Curved divider ────────────────────────────────────────────────────────────

const CurveDivider = ({ flip = false }: { flip?: boolean }) => (
  <div
    className="w-full overflow-hidden pointer-events-none"
    style={{ transform: flip ? "scaleY(-1)" : undefined, lineHeight: 0 }}
  >
    <svg
      viewBox="0 0 1440 60"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className="w-full h-[60px] block"
    >
      <motion.path
        d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,60 L0,60 Z"
        fill="#0c0c0c"
        initial={{ opacity: 0, scaleY: 0 }}
        whileInView={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 1 }}
      />
    </svg>
  </div>
);


// ── Animated Counter ─────────────────────────────────────────────────────────

const AnimatedCounter = ({ value, accent }: { value: number; accent: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 2000;
          const increment = value / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} style={{ color: accent }}>
      {count}
    </span>
  );
};

// ── Component ─────────────────────────────────────────────────────────────────

const Skills = () => {
  const sectionRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const cardsY = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const headerScale = useTransform(scrollYProgress, [0, 0.3], [0.9, 1]);

  // Mouse follow effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Stats data
  const stats = [
    { label: "Technologies", value: 15, icon: Cpu, suffix: "+" },
    { label: "Projects Built", value: 13, icon: TrendingUp },
    { label: "Years Coding", value: 4, icon: Award },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:ital,wght@0,300;0,400;1,300&display=swap');
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }
      `}</style>

      <CurveDivider />

      <section
        id="skills"
        ref={sectionRef}
        style={{ 
          background: "#0c0c0c",
          backgroundPosition: `${mousePosition.x * 20}px ${mousePosition.y * 20}px`,
        }}
        className="relative py-28 px-6 overflow-hidden"
      >
        {/* ── Enhanced Atmosphere ── */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -left-40 w-[420px] h-[420px] rounded-full opacity-[0.08] blur-3xl"
            style={{ 
              background: "#4787ff",
              x: mousePosition.x * 50,
              y: mousePosition.y * 30,
            }}
            animate={{ animation: "blob 12s infinite" }}
          />
          <motion.div
            className="absolute -bottom-40 -right-40 w-[380px] h-[380px] rounded-full opacity-[0.06] blur-3xl"
            style={{ 
              background: "#3b82f6",
              x: -mousePosition.x * 40,
              y: -mousePosition.y * 40,
            }}
            animate={{ animation: "blob 14s infinite 4s" }}
          />
          
          {/* Dot grid with parallax */}
          <motion.div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: "radial-gradient(circle, #f0ebe0 1px, transparent 1px)",
              backgroundSize: "36px 36px",
              y: backgroundY,
            }}
          />

          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{ 
                background: `hsl(${Math.random() * 60 + 40}, 100%, 60%)`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                x: [0, Math.random() * 80 - 40, 0],
                opacity: [0, 0.4, 0],
                scale: [0, Math.random() * 2 + 0.5, 0],
              }}
              transition={{
                duration: Math.random() * 7 + 5,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto relative z-10">

          {/* ── Enhanced Header ── */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 90 }}
            className="mb-20"
            style={{ scale: headerScale }}
          >
            {/* Eyebrow with animation */}
            <div className="flex items-center gap-3 mb-5">
              <motion.div 
                className="h-px w-10" 
                style={{ background: "#4787ff" }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8 }}
              />
              <motion.span
                className="text-xs font-mono tracking-[0.22em] uppercase"
                style={{ color: "#4787ff", fontFamily: "'DM Sans', sans-serif" }}
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                What I Work With
              </motion.span>
            </div>

            <div className="flex items-end gap-6 flex-wrap">
              <motion.h2
                className="font-extrabold leading-[0.95]"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "clamp(2.6rem, 6vw, 5rem)",
                  color: "#f0ebe0",
                }}
              >
                Skills &{" "}
                <motion.span 
                  style={{ color: "#4787ff" }}
                  animate={{ 
                    textShadow: [
                      "0 0 0px #4787ff",
                      "0 0 15px #4787ff",
                      "0 0 0px #4787ff"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Tech
                </motion.span>
              </motion.h2>

              {/* Animated squiggle */}
              <svg
                viewBox="0 0 160 12"
                className="mb-2 w-32 hidden sm:block"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M2 8 Q20 4 40 8 Q60 12 80 8 Q100 4 120 8 Q140 12 158 8"
                  stroke="#4787ff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, ease: "easeOut" }}
                />
              </svg>
            </div>

            <motion.p
              className="mt-4 text-base max-w-lg"
              style={{
                color: "#6b6b6b",
                fontFamily: "'DM Sans', sans-serif",
                fontStyle: "italic",
              }}
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Tools and technologies I use to turn ideas into production-ready products.
            </motion.p>

            {/* Stats row */}
            <motion.div
              className="flex gap-8 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-3"
                  whileHover={{ scale: 1.05, x: 5 }}
                >
                  <stat.icon size={24} style={{ color: "#4787ff" }} />
                  <div>
                    <div className="text-2xl font-bold" style={{ color: "#4787ff" }}>
                      <AnimatedCounter value={stat.value} accent="#4787ff" />
                      {stat.suffix || ""}
                    </div>
                    <div className="text-xs" style={{ color: "#6b6b6b" }}>{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Cards grid with enhanced animations ── */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={gridVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            style={{ y: cardsY }}
          >
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                variants={cardVariants}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.25, type: "spring" }
                }}
                onHoverStart={() => setHoveredCard(category.title)}
                onHoverEnd={() => setHoveredCard(null)}
                className="relative p-6 rounded-2xl overflow-hidden cursor-pointer group"
                style={{
                  background: `linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)`,
                  border: `1px solid ${category.accent}25`,
                  borderRadius: "1.5rem 1.5rem 2.5rem 1.5rem",
                }}
              >
                {/* Animated gradient background */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${category.accent}15, transparent 70%)`,
                  }}
                  animate={hoveredCard === category.title ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 1 }}
                />

                {/* Top accent bar with animation */}
                <motion.div
                  className="absolute top-0 left-6 h-0.5 rounded-full"
                  style={{ background: category.accent }}
                  initial={{ width: 0 }}
                  whileInView={{ width: "2.5rem" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                />

                {/* Icon + title with float animation */}
                <div className="flex items-center gap-3 mb-6 mt-2 relative z-10">
                  <motion.div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: `${category.accent}15`,
                      border: `1px solid ${category.accent}30`,
                    }}
                    
                  >
                    <category.icon size={20} style={{ color: category.accent }} />
                  </motion.div>
                  <motion.h3
                    className="font-bold text-lg"
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      color: "#f0ebe0",
                    }}
                    animate={hoveredCard === category.title ? { x: 3 } : {}}
                  >
                    {category.title}
                  </motion.h3>
                </div>

                {/* Skills list with staggered entrance */}
                <motion.ul
                  className="space-y-3 relative z-10"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  {category.skills.map((skill, skillIdx) => (
                    <motion.li
                      key={skill}
                      variants={skillItem}
                      whileHover={{ 
                        x: 8,
                        scale: 1.02,
                        transition: { type: "spring", stiffness: 300 }
                      }}
                      className="flex items-center gap-2.5 text-sm group/skill"
                      style={{
                        color: "#9a9080",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      <motion.span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: category.accent }}
                        animate={hoveredCard === category.title ? { scale: [1, 1.5, 1] } : {}}
                        transition={{ delay: skillIdx * 0.1 }}
                      />
                      <span>{skill}</span>
                      {hoveredCard === category.title && (
                        <motion.span
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className="ml-auto text-[10px]"
                          style={{ color: category.accent }}
                        >
                          <Sparkles size={10} />
                        </motion.span>
                      )}
                    </motion.li>
                  ))}
                </motion.ul>

               

                {/* Skill count badge with animation */}
                <motion.div
                  className="absolute bottom-4 right-4 text-xs font-mono px-2 py-0.5 rounded-full"
                  style={{
                    color: category.accent,
                    background: `${category.accent}12`,
                    border: `1px solid ${category.accent}25`,
                  }}
                  animate={hoveredCard === category.title ? { scale: 1.1, rotate: 5 } : {}}
                >
                  {category.skills.length} skills
                </motion.div>

                {/* Decorative corner element */}
                <motion.div
                  className="absolute bottom-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    borderBottom: `2px solid ${category.accent}30`,
                    borderRight: `2px solid ${category.accent}30`,
                    borderRadius: "0 0 1.5rem 0",
                  }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* ── CTA Section ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-center mt-20"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px #cfff4766" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-3 rounded-full text-sm font-semibold relative overflow-hidden group"
              style={{
                background: "rgba(71, 141, 255, 0.1)",
                border: "1px solid #5c47ff30",
                color: "#4787ff",
                fontFamily: "'Syne', sans-serif",
              }}
            >
              <span className="relative z-10">Explore My Work</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="relative z-10"
              >
                →
              </motion.div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cfff47/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.5 }}
              />
            </motion.a>
          </motion.div>
        </div>

        {/* Decorative floating elements */}
        <motion.div
          className="absolute bottom-32 left-10 w-1 h-1 rounded-full"
          style={{ background: "#4787ff" }}
          animate={{
            scale: [1, 3, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-48 right-20 w-2 h-2 rounded-full"
          style={{ background: "#3B82F6" }}
          animate={{
            scale: [1, 2.5, 1],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
      </section>

      <CurveDivider flip />
    </>
  );
};

export default Skills;