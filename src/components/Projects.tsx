import { MapPin, ExternalLink, ArrowUpRight, Eye, Zap } from "lucide-react";
import { motion, useScroll, useTransform, type Variants, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// ── Types ─────────────────────────────────────────────────────────────────────

type Project = {
  title: string;
  description: string;
  tech: string[];
  address: string;
  href: string;
  image: string;
  accent: string;
  tag: string;
};

type ProjectCardProps = {
  project: Project;
  index: number;
};

// ── Data ──────────────────────────────────────────────────────────────────────

const featuredProjects: Project[] = [
  {
    title: "Goldbucks",
    description:
      "An all-in-one investment platform. From target savings to group investments and Bucksfield Naira & Dollar funds — build your wealth with confidence.",
    tech: ["React", "TypeScript", "Firebase","Strapi", "TailwindCSS"],
    address: "goldbucks.ng",
    href: "https://www.goldbucks.ng/",
    image: "/goldbucks.png",
    accent: "#ffba42",
    tag: "LIVE",
  },
  {
    title: "Business Banking",
    description:
      "A secure banking platform for AlertMFB enabling account management, fund transfers, and real-time transaction tracking.",
    tech: ["React", "Prisma", "Tailwind", "TypeScript"],
    address: "business.alertmfb.com.ng",
    href: "https://business.alertmfb.com.ng/welcome",
    image: "/businessBanking.png",
    accent: "#1f52e9",
    tag: "LIVE",
  },
  {
    title: "Greenbucks",
    description:
      "Designed and developed a modern, responsive website for Green Bucks, a solar energy company providing intelligent solar systems for homes and businesses. The website highlights their solar solutions, flexible payment options, and commitment to making clean, reliable energy more accessible. Built with a focus on clean UI, responsive layouts, smooth interactions, and a user-friendly experience..",
    tech: ["React", "TailwindCSS", "TypeScript","Strapi"],
    address: "greenbucks.com.ng",
    href: "https://www.greenbucks.com.ng/",
    image: "/greenbucks.png",
    accent: "#21f916",
    tag: "LIVE",
  },
  {
    title: "Alert Group Scholarship Portal",
    description:
      "A comprehensive scholarship management platform for Alert Group allowing applicants to submit applications and administrators to manage approvals.",
    tech: ["React", "TypeScript", "Prisma", "TailwindCSS"],
    address: "alertscholarshipportal.com",
    href: "https://alertscholarshiportal.vercel.app/",
    image: "/alertPortal.png",
    accent: "#3B82F6",
    tag: "UI Project",
  },
];

// ── Variants ──────────────────────────────────────────────────────────────────

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 100, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: "spring", stiffness: 70, damping: 20, duration: 0.8 },
  },
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.25, delayChildren: 0.1 } },
};



// ── Curved wave divider ───────────────────────────────────────────────────────

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

// ── Animated Counter ──────────────────────────────────────────────────────────

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

// ── Project Card ──────────────────────────────────────────────────────────────

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const isEven = index % 2 === 0;
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Per-card scroll parallax on the image
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.6, 1, 1, 0.6]);

  // Mouse tracking for 3D effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-100, 100], [10, -10]), { damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-10, 10]), { damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <motion.article
      ref={cardRef}
      variants={cardVariants}
      style={{ opacity: cardOpacity }}
      className={`relative flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-20 items-center`}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
    >
      {/* Large watermark index number with entrance animation */}
      <motion.span
        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
        className="absolute -top-10 font-extrabold select-none pointer-events-none"
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(5rem, 13vw, 10rem)",
          color: `${project.accent}0c`,
          left: isEven ? "-0.5rem" : undefined,
          right: isEven ? undefined : "-0.5rem",
          lineHeight: 1,
        }}
      >
        0{index + 1}
      </motion.span>

      {/* ── Image column ── */}
      <motion.div
        className="w-full lg:w-[55%] relative group"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        {/* Ambient glow with pulse animation */}
        <motion.div
          className="absolute -inset-4 rounded-3xl opacity-20 blur-3xl transition-opacity duration-700"
          style={{ background: project.accent }}
          animate={isHovered ? { opacity: 0.35, scale: 1.05 } : { opacity: 0.2, scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Asymmetric curved frame */}
        <motion.div
          className="relative overflow-hidden shadow-2xl cursor-pointer"
          style={{
            borderRadius: isEven
              ? "2rem 2rem 4rem 2rem"
              : "2rem 2rem 2rem 4rem",
            border: `1px solid ${project.accent}20`,
          }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          {/* Parallax image */}
          <div className="overflow-hidden h-[340px] md:h-[440px]">
            <motion.img
              src={project.image}
              alt={project.title}
              style={{ y: imgY, scale: imgScale }}
              className="w-full h-[115%] object-cover"
            />
          </div>

          {/* Animated gradient overlay on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/10"
            initial={{ opacity: 0 }}
            animate={isHovered ? { opacity: 0.3, x: ["-100%", "100%"] } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
          />

          {/* Hover overlay with spring animation */}
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${project.title}`}
            className="absolute inset-0 flex flex-col items-center justify-center gap-3
                       opacity-0 group-hover:opacity-100 transition-all duration-500
                       bg-black/70 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
              className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl"
              style={{ background: project.accent }}
            >
              <ExternalLink className="w-6 h-6 text-black" />
            </motion.div>
            <motion.span
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-white font-semibold tracking-wide mt-1"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              View Live
            </motion.span>
            <motion.span
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xs"
              style={{ color: "#888" }}
            >
              {project.address}
            </motion.span>
          </a>

          {/* Tag ribbon with pulse animation */}
          <motion.div
            className="absolute top-4 px-3 py-1 text-[10px] font-mono font-bold rounded-full"
            style={{
              background: project.accent,
              color: "#0c0c0c",
              left: isEven ? "1rem" : undefined,
              right: isEven ? undefined : "1rem",
            }}
            animate={isHovered ? { scale: 1.05, x: [0, 3, 0] } : { scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {project.tag}
          </motion.div>

        </motion.div>

        {/* Floating tech pills below the frame */}
        <div
          className={`absolute -bottom-5 flex gap-2 flex-wrap z-10 ${isEven ? "left-4" : "right-4"}`}
        >
          {project.tech.slice(0, 3).map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, y: 12, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.09, type: "spring" }}
              whileHover={{ y: -5, scale: 1.1 }}
              animate={isHovered ? { y: [0, -2, 0] } : {}}
              className="px-3 py-1 text-xs font-mono rounded-full border backdrop-blur-sm"
              style={{
                color: project.accent,
                borderColor: `${project.accent}44`,
                background: `${project.accent}12`,
              }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* ── Content column ── */}
      <motion.div
        className={`w-full lg:w-[45%] mt-8 lg:mt-0 ${isEven ? "lg:pl-2" : "lg:pr-2"}`}
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {/* Eyebrow with enhanced animation */}
        <div className="flex items-center gap-2 mb-5">
          <motion.span
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 rounded-full"
            style={{ background: project.accent }}
          />
          <motion.span
            className="text-xs font-mono tracking-[0.2em] uppercase"
            style={{ color: project.accent, fontFamily: "'DM Sans', monospace" }}
            animate={isHovered ? { letterSpacing: "0.3em" } : { letterSpacing: "0.2em" }}
            transition={{ duration: 0.3 }}
          >
            Featured · {project.tag}
          </motion.span>
        </div>

        {/* Title with gradient animation */}
        <motion.h3
          className="font-extrabold leading-[1.05] mb-6"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            color: "#f0ebe0",
          }}
          whileHover={{ scale: 1.02, x: isEven ? 5 : -5 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <motion.span
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{
              backgroundImage: `linear-gradient(90deg, #f0ebe0, ${project.accent}, #f0ebe0)`,
              backgroundSize: "200% auto",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            {project.title}
          </motion.span>
        </motion.h3>

        {/* Description card — curved corner matches image frame direction */}
        <motion.div
          className="relative p-6 mb-7"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: `1px solid ${project.accent}18`,
            borderRadius: isEven ? "1rem 2.5rem 1rem 1rem" : "2.5rem 1rem 1rem 1rem",
          }}
          whileHover={{
            scale: 1.02,
            background: "rgba(255,255,255,0.05)",
            transition: { duration: 0.2 },
          }}
        >
          {/* Accent top rule */}
          <motion.div
            className="absolute top-0 left-6 w-10 h-0.5 rounded-full"
            style={{ background: project.accent }}
            animate={isHovered ? { width: 40, opacity: 1 } : { width: 40, opacity: 0.6 }}
          />
          <motion.p
            className="text-sm leading-relaxed"
            style={{ color: "#9a9080", fontFamily: "'DM Sans', sans-serif" }}
            animate={isHovered ? { color: "#b0a698" } : { color: "#9a9080" }}
          >
            {project.description}
          </motion.p>
        </motion.div>

        {/* Full tech stack with staggered entrance */}
        <motion.div
          className="flex flex-wrap gap-2 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.05 }}
        >
          {project.tech.map((tech, idx) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: idx * 0.03, type: "spring" }}
              whileHover={{ y: -5, scale: 1.1, background: `${project.accent}20` }}
              className="px-3 py-1.5 text-xs font-mono rounded-lg border cursor-default"
              style={{
                color: project.accent,
                borderColor: `${project.accent}30`,
                background: "rgba(0,0,0,0.35)",
              }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* Live link + arrow CTA */}
        <div className="flex items-center gap-3">
          <motion.a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 8 }}
            className="inline-flex items-center gap-2 group/link"
          >
            <motion.div
              animate={isHovered ? { x: [0, -3, 0] } : {}}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <MapPin className="w-4 h-4 shrink-0" style={{ color: project.accent }} />
            </motion.div>
            <span
              className="text-sm transition-colors duration-200 group-hover/link:text-[#f0ebe0]"
              style={{ color: "#666", fontFamily: "'DM Sans', sans-serif" }}
            >
              {project.address}
            </span>
            <ExternalLink
              className="w-3.5 h-3.5 opacity-0 group-hover/link:opacity-100 transition-opacity"
              style={{ color: project.accent }}
            />
          </motion.a>

          <motion.a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 15, background: `${project.accent}25` }}
            whileTap={{ scale: 0.9 }}
            className="ml-auto w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300"
            style={{
              background: `${project.accent}15`,
              border: `1px solid ${project.accent}30`,
            }}
          >
            <ArrowUpRight className="w-4 h-4" style={{ color: project.accent }} />
          </motion.a>
        </div>

        {/* View stats button */}
        <motion.button
          className="mt-6 flex items-center gap-2 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ color: project.accent }}
          whileHover={{ x: 5 }}
        >
          <Eye size={12} />
          <span>View project insights</span>
          <Zap size={10} />
        </motion.button>
      </motion.div>
    </motion.article>
  );
};

// ── Main Section ──────────────────────────────────────────────────────────────

const Projects = () => {
  const sectionRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  
  const sectionScale = useTransform(scrollYProgress, [0, 1], [1, 0.97]);
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0.9]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  // Mouse follow effect for background
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:ital,wght@0,300;0,400;1,300&display=swap');
        @keyframes blob {
          0%   { transform: translate(0,0) scale(1); }
          33%  { transform: translate(30px,-50px) scale(1.1); }
          66%  { transform: translate(-20px,20px) scale(0.9); }
          100% { transform: translate(0,0) scale(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }
      `}</style>

      {/* Wavy top edge */}
      <CurveDivider />

      <motion.section
        id="projects"
        ref={sectionRef}
        style={{ 
          scale: sectionScale, 
          opacity: sectionOpacity, 
          background: "#0c0c0c",
          backgroundPosition: `${mousePosition.x * 20}px ${mousePosition.y * 20}px`,
        }}
        className="relative py-28 px-6 overflow-hidden"
      >
        {/* Atmosphere with mouse-following orbs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-48 -right-48 w-[500px] h-[500px] rounded-full opacity-[0.07] blur-3xl"
            style={{ 
              background: "#cfff47",
              x: mousePosition.x * 50,
              y: mousePosition.y * 50,
            }}
            animate={{ animation: "blob 12s infinite" }}
          />
          <motion.div
            className="absolute -bottom-48 -left-48 w-[500px] h-[500px] rounded-full opacity-[0.06] blur-3xl"
            style={{ 
              background: "#3b82f6",
              x: -mousePosition.x * 50,
              y: -mousePosition.y * 50,
            }}
            animate={{ animation: "blob 14s infinite 4s" }}
          />
          
          {/* Animated grid pattern */}
          <motion.div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: "radial-gradient(circle, #f0ebe0 1px, transparent 1px)",
              backgroundSize: "36px 36px",
              y: backgroundY,
            }}
          />

          {/* Floating orbs */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{ 
                background: `hsl(${40 + i * 10}, 100%, 60%)`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 40 - 20, 0],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto relative z-10">

          {/* ── Section header with enhanced animations ── */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 90 }}
            className="mb-28 text-center"
          >
            {/* Eyebrow with flanking rules */}
            <div className="flex items-center justify-center gap-3 mb-5">
              <motion.div 
                className="h-px w-16" 
                style={{ background: "#cfff4744" }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8 }}
              />
              <motion.span
                className="text-xs font-mono tracking-[0.25em] uppercase"
                style={{ color: "#4787ff", fontFamily: "'DM Sans', sans-serif" }}
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Selected Work
              </motion.span>
              <motion.div 
                className="h-px w-16" 
                style={{ background: "#cfff4744" }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8 }}
              />
            </div>

            <motion.h2
              className="font-bold tracking-tight mb-5"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(1.8rem, 5vw, 3.5rem)",
                color: "#f0ebe0",
                lineHeight: 0.95,
              }}
            >
              Things I&apos;ve{" "}
              <motion.span 
                style={{ color: "#4787ff" }}
                animate={{ 
                  textShadow: [
                    "0 0 0px #4787ff",
                    "0 0 10px #4787ff",
                    "0 0 0px #4787ff"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Built
              </motion.span>
            </motion.h2>

            <motion.p
              className="text-base max-w-lg mx-auto"
              style={{
                color: "#a9a9a9",
                fontFamily: "'DM Sans', sans-serif",
                fontStyle: "italic",
              }}
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              A selection of projects I've shipped — from fintech platforms to booking apps.
            </motion.p>

            {/* Animated SVG squiggle underline */}
            <svg
              viewBox="0 0 240 12"
              className="mx-auto mt-6 w-48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M2 8 Q30 4 60 8 Q90 12 120 8 Q150 4 180 8 Q210 12 238 8"
                stroke="#4787ff"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </svg>

            {/* Stats counter */}
            <motion.div
              className="flex justify-center gap-12 mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {[
                { label: "Projects Completed", value: 13, icon: "🚀" },
                { label: "Happy Clients", value: 96, suffix: "%", icon: "⭐" },
                { label: "Years Experience", value: 4, icon: "✨" },
              ].map((stat, idx) => (
                
                <motion.div
                  key={idx}
                  className="text-center"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-2xl font-bold" style={{ color: "#4787ff" }}>
                    <AnimatedCounter value={stat.value} accent="#4787ff" />
                    {stat.suffix || ""}
                  </div>
                  <div className="text-sm" style={{ color: "#6b6b6b" }}>{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Cards ── */}
          <motion.div
            className="space-y-40"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </motion.div>

          {/* ── CTA with enhanced animation ── */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
            className="text-center mt-32"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.08, boxShadow: "0 0 30px #cfff4766" }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-sm relative overflow-hidden group"
              style={{
                fontFamily: "'Syne', sans-serif",
                background: "#4787ff",
                color: "#0c0c0c",
              }}
            >
              <span className="relative z-10">Get In Touch</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                className="relative z-10"
              >
                <ArrowUpRight className="w-4 h-4" />
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.4 }}
              />
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* Wavy bottom edge */}
      <CurveDivider flip />
    </>
  );
};

export default Projects;