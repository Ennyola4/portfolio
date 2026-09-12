import { Code2, Database, Globe, Server, Sparkles, TrendingUp, Award, Cpu, ArrowUpRight } from "lucide-react";
import { motion, type Variants, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// ── Data ──────────────────────────────────────────────────────────────────────

const skillCategories = [
  {
    title: "Frontend",
    icon: Globe,
    accent: "#4787ff",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: Server,
    accent: "#0eb406",
    skills: ["Node.js", "Nest.js", "Express", "REST APIs", "Authentication"],
  },
  {
    title: "Database",
    icon: Database,
    accent: "#F97316",
    skills: ["PostgreSQL", "MongoDB", "Prisma", "Supabase"],
  },
  {
    title: "Tools & Craft",
    icon: Code2,
    accent: "#cfff47",
    skills: ["Git", "Figma", "Agile", "Testing", "SEO", "Strapi"],
  },
];

const stats = [
  { label: "Technologies", value: 15, suffix: "+", icon: Cpu },
  { label: "Projects Built", value: 13, suffix: "", icon: TrendingUp },
  { label: "Years Coding", value: 4, suffix: "", icon: Award },
];

// ── Variants ──────────────────────────────────────────────────────────────────

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const lineReveal: Variants = {
  hidden: { y: "105%" },
  show: { y: "0%", transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

const skillItem: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

// ── Animated Counter ──────────────────────────────────────────────────────────

const AnimatedCounter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          let s = 0;
          const inc = value / (1600 / 16);
          const t = setInterval(() => {
            s += inc;
            if (s >= value) { setCount(value); clearInterval(t); }
            else setCount(Math.floor(s));
          }, 16);
          obs.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value]);

  return <span ref={ref}>{count}{suffix}</span>;
};

// ── Category Row ──────────────────────────────────────────────────────────────

const CategoryRow = ({
  category,
  index,
}: {
  category: (typeof skillCategories)[number];
  index: number;
}) => {
  const [hovered, setHovered] = useState(false);
  const Icon = category.icon;

  return (
    <motion.div
      variants={fadeUp}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative py-8 sm:py-10 border-b"
      style={{ borderColor: "#1a1a1a" }}
    >
      {/* Top hover rule */}
      <motion.span
        className="absolute top-0 left-0 h-px"
        style={{ background: category.accent }}
        initial={false}
        animate={{ width: hovered ? "100%" : "0%" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="grid grid-cols-12 gap-4 sm:gap-6 items-start">

        {/* Index */}
        <div className="col-span-12 sm:col-span-1 hidden sm:block">
          <span
            className="text-xs font-mono tracking-widest transition-colors duration-300"
            style={{ color: hovered ? category.accent : "#4a4a4a" }}
          >
            0{index + 1}
          </span>
        </div>

        {/* Icon + title */}
        <div className="col-span-12 sm:col-span-4 lg:col-span-4 flex items-center gap-4">
          <motion.div
            className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 border transition-colors duration-300"
            animate={{
              borderColor: hovered ? `${category.accent}66` : "#1f1f1f",
              background: hovered ? `${category.accent}12` : "transparent",
            }}
            transition={{ duration: 0.3 }}
          >
            <Icon
              size={16}
              style={{ color: hovered ? category.accent : "#6b6b6b" }}
              className="transition-colors duration-300"
            />
          </motion.div>

          <h3
            className="font-bold leading-tight transition-colors duration-300"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(1.2rem, 2.4vw, 1.6rem)",
              color: hovered ? "#f0ebe0" : "#a9a9a9",
            }}
          >
            {category.title}
          </h3>
        </div>

        {/* Skills list — editorial, not pills */}
        <motion.div
          className="col-span-12 sm:col-span-7 lg:col-span-7"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {category.skills.map((skill, i) => (
              <motion.div
                key={i}
                variants={skillItem}
                whileHover={{ x: 4 }}
                className="flex items-center gap-2 cursor-default group/skill"
              >
                <span
                  className="w-1 h-1 rounded-full transition-all duration-300 group-hover/skill:w-4"
                  style={{ background: category.accent }}
                />
                <span
                  className="text-sm transition-colors duration-300 group-hover/skill:text-[#f0ebe0]"
                  style={{ color: "#6b6b6b", fontFamily: "'DM Sans', sans-serif" }}
                >
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// ── Main ──────────────────────────────────────────────────────────────────────

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');
        ::selection { background: #4787ff; color: #0c0c0c; }
      `}</style>

      <section
        id="skills"
        ref={sectionRef}
        className="relative py-24 sm:py-32 px-5 sm:px-8 overflow-hidden"
        style={{ background: "#0c0c0c" }}
      >
        {/* ── Background ── */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute inset-0 opacity-[0.028]"
            style={{
              backgroundImage: "radial-gradient(circle, #f0ebe0 1px, transparent 1px)",
              backgroundSize: "32px 32px",
              y: bgY,
            }}
          />
          <div
            className="absolute top-1/3 -right-40 w-[520px] h-[520px] rounded-full blur-3xl"
            style={{ background: "#4787ff", opacity: 0.05 }}
          />
          {/* Huge "02" watermark */}
          <motion.div
            style={{ y: useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]) }}
            className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none"
          >
            <span
              className="font-extrabold leading-none"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(12rem, 28vw, 28rem)",
                color: "#4787ff08",
                letterSpacing: "-0.05em",
              }}
            >
              02
            </span>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">

          {/* ── Header ── */}
          <motion.header
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-16 sm:mb-24"
          >
            {/* Top row */}
            <motion.div
              variants={fadeUp}
              className="flex items-center justify-between mb-12 flex-wrap gap-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#4787ff" }} />
                <span
                  className="text-[10px] font-mono tracking-[0.3em] uppercase"
                  style={{ color: "#6b6b6b" }}
                >
                  Skills & Stack
                </span>
              </div>
              <span
                className="text-[10px] font-mono tracking-[0.3em] uppercase"
                style={{ color: "#4a4a4a" }}
              >
                {skillCategories.reduce((a, c) => a + c.skills.length, 0)} Technologies
              </span>
            </motion.div>

            {/* Big heading */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-12">
              <h2
                className="lg:col-span-7 font-extrabold leading-[0.95]"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "clamp(2.2rem, 6vw, 4.4rem)",
                  color: "#f0ebe0",
                  letterSpacing: "-0.02em",
                }}
              >
                <div className="overflow-hidden">
                  <motion.span variants={lineReveal} className="block">
                    The tools behind
                  </motion.span>
                </div>
                <div className="overflow-hidden">
                  <motion.span
                    variants={lineReveal}
                    className="block"
                    transition={{ delay: 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  >
                    the{" "}
                    <span
                      className="italic font-light"
                      style={{ color: "#4787ff", fontFamily: "'DM Sans', sans-serif" }}
                    >
                      products
                    </span>
                    .
                  </motion.span>
                </div>
              </h2>

              <motion.p
                variants={fadeUp}
                className="lg:col-span-5 text-sm sm:text-base leading-relaxed lg:pb-3 max-w-md"
                style={{ color: "#9a9080", fontFamily: "'DM Sans', sans-serif" }}
              >
                The stack I reach for most — chosen for reliability, developer
                experience, and the ability to ship fast without cutting corners.
              </motion.p>
            </div>

            {/* Stats row */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-3 gap-4 sm:gap-8 py-6 border-y"
              style={{ borderColor: "#1a1a1a" }}
            >
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -3 }}
                  className="flex items-start gap-3"
                >
                  <s.icon size={15} style={{ color: "#4787ff", marginTop: 3 }} />
                  <div>
                    <div
                      className="font-bold leading-none mb-1.5"
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: "clamp(1.2rem, 2.6vw, 1.7rem)",
                        color: "#f0ebe0",
                      }}
                    >
                      <AnimatedCounter value={s.value} suffix={s.suffix} />
                    </div>
                    <div
                      className="text-[10px] font-mono tracking-wider uppercase"
                      style={{ color: "#4a4a4a" }}
                    >
                      {s.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.header>

          {/* ── Column labels ── */}
          <div
            className="hidden sm:grid grid-cols-12 gap-6 pb-5 border-b"
            style={{ borderColor: "#1a1a1a" }}
          >
            <div className="col-span-1">
              <span
                className="text-[10px] font-mono tracking-[0.25em] uppercase"
                style={{ color: "#4a4a4a" }}
              >
                No.
              </span>
            </div>
            <div className="col-span-4">
              <span
                className="text-[10px] font-mono tracking-[0.25em] uppercase"
                style={{ color: "#4a4a4a" }}
              >
                Category
              </span>
            </div>
            <div className="col-span-7">
              <span
                className="text-[10px] font-mono tracking-[0.25em] uppercase"
                style={{ color: "#4a4a4a" }}
              >
                Stack
              </span>
            </div>
          </div>

          {/* ── Rows ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {skillCategories.map((category, index) => (
              <CategoryRow key={category.title} category={category} index={index} />
            ))}
          </motion.div>

          {/* ── Footer CTA ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-20 sm:mt-28 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          >
            <div className="flex items-center gap-3">
              <Sparkles size={14} style={{ color: "#4787ff" }} />
              <span
                className="text-sm italic"
                style={{ color: "#6b6b6b", fontFamily: "'DM Sans', sans-serif" }}
              >
                Always learning — the stack evolves with every project.
              </span>
            </div>

            <motion.a
              href="#projects"
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="inline-flex items-center gap-3 group"
            >
              <span
                className="text-sm font-mono tracking-[0.2em] uppercase"
                style={{ color: "#f0ebe0" }}
              >
                See it in action
              </span>
              <motion.span
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: "#4787ff" }}
                whileHover={{ rotate: 45 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowUpRight className="w-4 h-4" style={{ color: "#0c0c0c" }} />
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Skills;