import { ArrowUpRight, MapPin } from "lucide-react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, type Variants } from "framer-motion";
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
  year: string;
};

// ── Data ──────────────────────────────────────────────────────────────────────

const featuredProjects: Project[] = [
  {
    title: "Goldbucks",
    description:
      "An all-in-one investment platform. From target savings to group investments and Bucksfield Naira & Dollar funds — build your wealth with confidence.",
    tech: ["React", "TypeScript", "Firebase", "Strapi", "TailwindCSS"],
    address: "goldbucks.ng",
    href: "https://www.goldbucks.ng/",
    image: "/goldbucks.png",
    accent: "#bb7f19",
    tag: "LIVE",
    year: "2024",
  },
  {
    title: "Business Banking",
    description:
      "A secure banking platform for AlertMFB enabling account management, fund transfers, and real-time transaction tracking.",
    tech: ["React", "Prisma", "Tailwind", "TypeScript"],
    address: "business.alertmfb.com.ng",
    href: "https://business.alertmfb.com.ng/welcome",
    image: "/businessBanking.png",
    accent: "#0b37bb",
    tag: "LIVE",
    year: "2024",
  },
  {
    title: "Greenbucks",
    description:
      "A modern, responsive website for Green Bucks — a solar energy company providing intelligent solar systems for homes and businesses.",
    tech: ["React", "TailwindCSS", "TypeScript", "Strapi"],
    address: "greenbucks.com.ng",
    href: "https://www.greenbucks.com.ng/",
    image: "/greenbucks.png",
    accent: "#0eb406",
    tag: "LIVE",
    year: "2025",
  },
  {
    title: "Alert Group Scholarship Portal",
    description:
      "A comprehensive scholarship management platform for Alert Group allowing applicants to submit applications and administrators to manage approvals.",
    tech: ["React", "TypeScript", "Prisma", "TailwindCSS"],
    address: "alertscholarshipportal.com",
    href: "https://alertscholarshiportal.vercel.app/",
    image: "/alertPortal.png",
    accent: "#0b3475",
    tag: "UI Project",
    year: "2025",
  },
];

// ── Variants ──────────────────────────────────────────────────────────────────

const lineReveal: Variants = {
  hidden: { y: "100%" },
  visible: {
    y: "0%",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

// ── Floating preview image (desktop only) ─────────────────────────────────────

const FloatingPreview = ({
  project,
  visible,
}: {
  project: Project;
  visible: boolean;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring follow
  const springX = useSpring(x, { damping: 25, stiffness: 220, mass: 0.6 });
  const springY = useSpring(y, { damping: 25, stiffness: 220, mass: 0.6 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-50 hidden lg:block"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      initial={false}
      animate={{
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.85,
        rotate: visible ? -3 : 0,
      }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="relative w-[420px] h-[280px] rounded-2xl overflow-hidden shadow-2xl"
        style={{ border: `1px solid ${project.accent}44` }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        {/* accent tint */}
        <div
          className="absolute inset-0 mix-blend-overlay"
          style={{
            background: `linear-gradient(135deg, ${project.accent}22, transparent 60%)`,
          }}
        />
      </div>
    </motion.div>
  );
};

// ── Row Item ──────────────────────────────────────────────────────────────────

const ProjectRow = ({
  project,
  index,
  onHover,
}: {
  project: Project;
  index: number;
  onHover: (p: Project | null) => void;
}) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start end", "end start"],
  });
  const numY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const thumbScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 0.96]);

  const handleEnter = () => {
    setHovered(true);
    onHover(project);
  };
  const handleLeave = () => {
    setHovered(false);
    onHover(null);
  };

  return (
    <motion.a
      
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      variants={fadeIn}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="group block relative py-8 sm:py-10 border-b"
      style={{ borderColor: "#1a1a1a" }}
    >
      {/* Top hover rule */}
      <motion.span
        className="absolute top-0 left-0 h-px"
        style={{ background: "#4787ff" }}
        initial={false}
        animate={{ width: hovered ? "100%" : "0%" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="grid grid-cols-12 gap-4 sm:gap-6 items-center">

        {/* Index */}
        <motion.div style={{ y: numY }} className="col-span-12 sm:col-span-1 hidden sm:block">
          <span
            className="text-xs font-mono tracking-widest"
            style={{ color: "#4787ff" }}
          >
            0{index + 1}
          </span>
        </motion.div>

        {/* Thumbnail */}
        <div className="col-span-4 sm:col-span-2">
          <motion.div
            className="relative aspect-[4/3] rounded-lg overflow-hidden"
            style={{
              border: `1px solid ${hovered ? project.accent + "66" : "#1f1f1f"}`,
              transition: "border-color 0.4s ease",
            }}
          >
            <motion.img
              src={project.image}
              alt={project.title}
              style={{ scale: thumbScale }}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* subtle dark overlay */}
            <div
              className="absolute inset-0 transition-opacity duration-500"
              style={{
                background: `linear-gradient(180deg, transparent 40%, #0c0c0c99 100%)`,
                opacity: hovered ? 0.4 : 0.7,
              }}
            />
            {/* accent bar that appears on hover */}
            <motion.div
              className="absolute bottom-0 left-0 h-0.5"
              style={{ background: project.accent }}
              initial={false}
              animate={{ width: hovered ? "100%" : "0%" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>
        </div>

        {/* Title + description */}
        <div className="col-span-8 sm:col-span-5 lg:col-span-6">
          <h3
            className="font-bold leading-[1.05] mb-2 transition-colors duration-500"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(1.15rem, 2.4vw, 1.8rem)",
              color: hovered ? "#4787ff" : "#f0ebe0",
            }}
          >
            {project.title}
          </h3>

          <motion.p
            className="text-[10px] leading-relaxed max-w-xl text-sm"
            style={{ color: "#fffffe", fontFamily: "'DM Sans', sans-serif" }}
            animate={{ opacity: hovered ? 1 : 0.7 }}
            transition={{ duration: 0.4 }}
          >
            {project.description}
          </motion.p>

          {/* Tech — appears on hover */}
          <motion.div
            className="hidden sm:flex flex-wrap gap-x-4 gap-y-2 mt-4"
            animate={{ opacity: hovered ? 1 : 0.45 }}
            transition={{ duration: 0.4 }}
          >
            {project.tech.slice(0, 4).map((t) => (
              <span
                key={t}
                className="text-[10px] font-mono tracking-wider uppercase"
                style={{ color: "#ffffff" }}
              >
                {t}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Year */}
        <div className="col-span-6 sm:col-span-2 lg:col-span-1 hidden sm:block">
          <span
            className="text-xs font-mono tracking-wider"
            style={{ color: "#d0d0d0" }}
          >
            {project.year}
          </span>
        </div>

        {/* Tag + arrow */}
        <div className="col-span-12 sm:col-span-2 lg:col-span-2 flex items-center justify-between sm:justify-end gap-3">
          <span
            className="text-[10px] font-mono tracking-[0.2em] uppercase px-2.5 py-1 rounded-full"
            style={{
              color: project.tag === "LIVE" ? "#4787ff" : "#f5f4f3",
              border: `1px solid ${project.tag === "LIVE" ? "#4787ff33" : "#ffffff12"}`,
            }}
          >
            {project.tag}
          </span>

          <motion.div
            className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 border"
            style={{ borderColor: "#ffffff10" }}
            animate={{
              background: hovered ? "#4787ff" : "transparent",
              borderColor: hovered ? "#4787ff" : "#ffffff10",
            }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              animate={{ x: hovered ? 2 : 0, y: hovered ? -2 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowUpRight
                className="w-4 h-4 transition-colors duration-300"
                style={{ color: hovered ? "#0c0c0c" : "#666" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Address — reveals on hover */}
      <motion.div
        className="mt-3 flex items-center gap-2"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      >
        <MapPin className="w-3 h-3" style={{ color: project.accent }} />
        <span className="text-[11px] font-mono" style={{ color: "#f4f0f0" }}>
          {project.address}
        </span>
      </motion.div>
    </motion.a>
  );
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
          const inc = value / (1800 / 16);
          const timer = setInterval(() => {
            s += inc;
            if (s >= value) {
              setCount(value);
              clearInterval(timer);
            } else setCount(Math.floor(s));
          }, 16);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

// ── Main Section ──────────────────────────────────────────────────────────────

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500&display=swap');
        ::selection { background: #4787ff; color: #0c0c0c; }
      `}</style>

      {/* Floating cursor-following preview */}
      <FloatingPreview
        project={hoveredProject ?? featuredProjects[0]}
        visible={!!hoveredProject}
      />

      <section
        id="projects"
        ref={sectionRef}
        className="relative py-24 sm:py-32 px-5 sm:px-8 overflow-hidden"
        style={{ background: "#0c0c0c" }}
      >
        {/* Subtle background */}
        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{ y: bgY }}
        >
          <div
            className="absolute inset-x-0 top-0 h-px"
            style={{ background: "#1a1a1a" }}
          />
        </motion.div>

        <div className="max-w-6xl mx-auto relative z-10">

          {/* ── Header ── */}
          <header className="mb-16 sm:mb-20">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-between mb-12 flex-wrap gap-4"
            >
              <div className="flex items-center gap-3">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "#4787ff" }}
                />
                <span
                  className="text-[10px] font-mono tracking-[0.3em] uppercase"
                  style={{ color: "#6b6b6b" }}
                >
                  Selected Work
                </span>
              </div>
              <span
                className="text-[10px] font-mono tracking-[0.3em] uppercase"
                style={{ color: "#4a4a4a" }}
              >
                {featuredProjects.length} Projects — 2024 / 2025
              </span>
            </motion.div>

            {/* Editorial heading */}
            <h2
              className="font-extrabold leading-[0.95] mb-10"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(2.4rem, 7vw, 5rem)",
                color: "#f0ebe0",
                letterSpacing: "-0.02em",
              }}
            >
              <div className="overflow-hidden">
                <motion.span
                  className="block"
                  variants={lineReveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  Crafts
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span
                  className="block"
                  variants={lineReveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.12, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                  distilled into{" "}
                  <span
                    className="italic font-light"
                    style={{ color: "#4787ff", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    four
                  </span>{" "}
                  pieces.
                </motion.span>
              </div>
            </h2>

            {/* Intro + stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
            >
              <p
                className="text-sm sm:text-base leading-relaxed max-w-md"
                style={{ color: "#9a9080", fontFamily: "'DM Sans', sans-serif" }}
              >
                A selection of products I've designed and shipped —
                spanning fintech, banking, clean energy, and education.
              </p>

              <div className="flex gap-8 sm:gap-12">
                {[
                  { v: 13, l: "Projects", s: "" },
                  { v: 96, l: "Satisfaction", s: "%" },
                  { v: 4, l: "Years", s: "" },
                ].map((s, i) => (
                  <div key={i}>
                    <div
                      className="font-bold leading-none mb-1.5"
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
                        color: "#f0ebe0",
                      }}
                    >
                      <AnimatedCounter value={s.v} suffix={s.s} />
                    </div>
                    <div
                      className="text-[10px] font-mono tracking-wider uppercase"
                      style={{ color: "#4a4a4a" }}
                    >
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </header>

          {/* ── Column labels ── */}
          <div
            className="hidden sm:grid grid-cols-12 gap-6 pb-5 border-b"
            style={{ borderColor: "#1a1a1a" }}
          >
            <div className="col-span-1">
              <span className="text-[10px] font-mono tracking-[0.25em] uppercase" style={{ color: "#cfcfcf" }}>
                No.
              </span>
            </div>
            <div className="col-span-2">
              <span className="text-[10px] font-mono tracking-[0.25em] uppercase" style={{ color: "#cfcfcf" }}>
                Preview
              </span>
            </div>
            <div className="col-span-5 lg:col-span-6">
              <span className="text-[10px] font-mono tracking-[0.25em] uppercase" style={{ color: "#cfcfcf" }}>
                Project
              </span>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <span className="text-[10px] font-mono tracking-[0.25em] uppercase" style={{ color: "#cfcfcf" }}>
                Year
              </span>
            </div>
            <div className="col-span-2">
              <span className="text-[10px] font-mono tracking-[0.25em] uppercase" style={{ color: "#cfcfcf" }}>
                Status
              </span>
            </div>
          </div>

          {/* ── Rows ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ staggerChildren: 0.12 }}
          >
            {featuredProjects.map((project, index) => (
              <ProjectRow
                key={project.title}
                project={project}
                index={index}
                onHover={setHoveredProject}
              />
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
            <p
              className="text-lg sm:text-xl max-w-md leading-snug"
              style={{
                fontFamily: "'Syne', sans-serif",
                color: "#f0ebe0",
                fontWeight: 700,
              }}
            >
              Have something in mind?
              <br />
              <span style={{ color: "#4787ff" }}>Let's talk.</span>
            </p>

            <motion.a
              href="#contact"
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="inline-flex items-center gap-3 group"
            >
              <span
                className="text-sm font-mono tracking-widest uppercase"
                style={{ color: "#f0ebe0" }}
              >
                Get in touch
              </span>
              <span
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                style={{ background: "#4787ff" }}
              >
                <ArrowUpRight className="w-4 h-4" style={{ color: "#0c0c0c" }} />
              </span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Projects;