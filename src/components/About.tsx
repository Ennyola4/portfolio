import { Github, Linkedin, Mail, ArrowUpRight, Sparkles, Code, User, Heart } from "lucide-react";
import { motion, type Variants, useScroll, useTransform,} from "framer-motion";
import { useRef, useEffect, useState } from "react";
import me from "/me.jpeg";

// ── Data ──────────────────────────────────────────────────────────────────────

const socialLinks = [
  {
    href: "https://github.com/Ennyola4",
    icon: Github,
    label: "GitHub",
    color: "#333",
  },
  {
    href: "https://www.linkedin.com/in/enitan-ajayi-02829a3a7/",
    icon: Linkedin,
    label: "LinkedIn",
    color: "#0A66C2",
  },
  {
    href: "https://mail.google.com/mail/u/0/#inbox",
    icon: Mail,
    label: "Email",
    color: "#EA4335",
  },
];

const traits = ["React", "TypeScript", "Node.js", "UI/UX", "Fintech"];
const achievements = [
  { label: "Projects Completed", value: 13, icon: Code },
  { label: "Happy Clients", value: 96, suffix: "%", icon: Heart },
  { label: "Years Experience", value: 3, icon: User },
];

// ── Variants ──────────────────────────────────────────────────────────────────



const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};


const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};





// ── Curved divider (reused from Projects) ─────────────────────────────────────

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

// ── Animated Counter Component ─────────────────────────────────────────────────

const AnimatedCounter = ({ value, suffix = "", accent = "#cfff47" }: { value: number; suffix?: string; accent?: string }) => {
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
      {count}{suffix}
    </span>
  );
};

// ── Typewriter Effect ─────────────────────────────────────────────────────────

const TypewriterText = ({ texts, accent }: { texts: string[]; accent: string }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.random() * 100 + 50);
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, texts]);

  return (
    <motion.span style={{ color: accent }}>
      {texts[index].substring(0, subIndex)}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ color: accent }}
      >
        |
      </motion.span>
    </motion.span>
  );
};

// ── Component ─────────────────────────────────────────────────────────────────

const About = () => {
  const sectionRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredTrait, setHoveredTrait] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);
  const imageRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-5, 0, 5]);
  const textY = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

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
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }
      `}</style>

      <CurveDivider />

      <section
        id="about"
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
            className="absolute top-0 right-0 w-[420px] h-[420px] rounded-full opacity-[0.08] blur-3xl"
            style={{ 
              background: "#cfff47",
              x: mousePosition.x * 50,
              y: mousePosition.y * 30,
            }}
            animate={{ animation: "blob 12s infinite" }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-[360px] h-[360px] rounded-full opacity-[0.06] blur-3xl"
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
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{ 
                background: `hsl(${60 + Math.random() * 40}, 100%, 60%)`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                x: [0, Math.random() * 60 - 30, 0],
                opacity: [0, 0.4, 0],
                scale: [0, Math.random() * 2, 0],
              }}
              transition={{
                duration: Math.random() * 6 + 4,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ════ LEFT — TEXT ════ */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            style={{ y: textY }}
          >
            {/* Eyebrow with enhanced animation */}
            <motion.div variants={fadeLeft} className="flex items-center gap-3 mb-6">
              <motion.div 
                className="h-px w-10" 
                style={{ background: "#cfff4755" }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8 }}
              />
              <motion.span
                className="text-xs font-mono tracking-[0.22em] uppercase"
                style={{ color: "#cfff47", fontFamily: "'DM Sans', sans-serif" }}
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Who I Am
              </motion.span>
            </motion.div>

            {/* Heading with gradient animation */}
            <motion.h2
              variants={fadeLeft}
              className="font-extrabold leading-[0.95] mb-8"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(2.6rem, 6vw, 5rem)",
                color: "#f0ebe0",
              }}
            >
              About{" "}
              <motion.span 
                style={{ color: "#cfff47" }}
                animate={{ 
                  textShadow: [
                    "0 0 0px #cfff47",
                    "0 0 15px #cfff47",
                    "0 0 0px #cfff47"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Me
              </motion.span>
            </motion.h2>

            {/* Bio paragraphs with enhanced animations */}
            <motion.div variants={fadeLeft} className="space-y-4 mb-8">
              <motion.p
                className="text-base leading-relaxed"
                style={{ color: "#9a9080", fontFamily: "'DM Sans', sans-serif" }}
                whileHover={{ x: 5, color: "#b0a698" }}
                transition={{ duration: 0.2 }}
              >
                I'm{" "}
                <motion.span 
                  style={{ color: "#f0ebe0", fontWeight: 500, display: "inline-block" }}
                  whileHover={{ scale: 1.05, color: "#cfff47" }}
                >
                  Enitan Ajayi
                </motion.span>
                , a software developer focused on building modern, scalable, and
                high-performance web applications.
              </motion.p>
              
              <motion.p
                className="text-base leading-relaxed"
                style={{ color: "#9a9080", fontFamily: "'DM Sans', sans-serif" }}
                whileHover={{ x: 5, color: "#b0a698" }}
                transition={{ duration: 0.2 }}
              >
                I specialise in{" "}
                <TypewriterText 
                  texts={["React", "TypeScript", "Node.js", "UI/UX"]} 
                  accent="#cfff47" 
                />
                {" "} and love creating clean interfaces with great user experience.
              </motion.p>
              
              <motion.p
                className="text-base leading-relaxed"
                style={{ color: "#9a9080", fontFamily: "'DM Sans', sans-serif" }}
                whileHover={{ x: 5, color: "#b0a698" }}
                transition={{ duration: 0.2 }}
              >
                My goal is simple — build products that not only work well but
                feel great to use.
              </motion.p>
            </motion.div>

            {/* Trait pills with 3D hover effect */}
            <motion.div variants={fadeLeft} className="flex flex-wrap gap-2 mb-10">
              {traits.map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, scale: 0.85, rotateX: -30 }}
                  whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, type: "spring" }}
                  whileHover={{ 
                    y: -5, 
                    scale: 1.1,
                    background: "rgba(207,255,71,0.15)",
                    borderColor: "#cfff47",
                  }}
                  onHoverStart={() => setHoveredTrait(t)}
                  onHoverEnd={() => setHoveredTrait(null)}
                  className="px-3 py-1.5 text-xs font-mono rounded-lg border cursor-pointer relative overflow-hidden"
                  style={{
                    color: "#cfff47",
                    borderColor: "#cfff4730",
                    background: "rgba(207,255,71,0.06)",
                  }}
                >
                  {t}
                  {hoveredTrait === t && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      transition={{ duration: 0.6, repeat: Infinity }}
                    />
                  )}
                </motion.span>
              ))}
            </motion.div>

            {/* Social links with enhanced interactions */}
            <motion.div variants={fadeLeft} className="flex items-center gap-3 flex-wrap">
              {socialLinks.map(({ href, icon: Icon, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    borderColor: color,
                    background: `${color}15`,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm border transition-all duration-200 group relative overflow-hidden"
                  style={{
                    color: "#f0ebe0",
                    borderColor: "#ffffff18",
                    background: "rgba(255,255,255,0.04)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <Icon size={15} className="relative z-10" />
                  <span className="relative z-10">{label}</span>
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5"
                    style={{ background: color, width: "0%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </motion.div>

            {/* Achievement stats */}
            <motion.div 
              variants={fadeLeft}
              className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t"
              style={{ borderColor: "#ffffff0f" }}
            >
              {achievements.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ scale: 1.05, y: -3 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <stat.icon size={20} style={{ color: "#cfff47", margin: "0 auto 8px" }} />
                  <div className="text-xl font-bold" style={{ color: "#cfff47" }}>
                    <AnimatedCounter value={stat.value} suffix={stat.suffix || ""} />
                  </div>
                  <div className="text-xs" style={{ color: "#9a9080" }}>{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ════ RIGHT — IMAGE with enhanced animations ════ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="flex justify-center relative"
            style={{ scale: imageScale, rotate: imageRotate }}
          >

            {/* Asymmetric frame with hover effect */}
            <div className="relative group">
              {/* Offset background cards */}
              <motion.div
                className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl"
                style={{
                  background: "rgba(207,255,71,0.07)",
                  border: "1px solid #cfff4720",
                  borderRadius: "2rem 2rem 4rem 2rem",
                }}
                whileHover={{ x: -4, y: -4 }}
                transition={{ duration: 0.3 }}
              />

              <motion.div
                className="absolute -bottom-8 -right-8 w-full h-full rounded-3xl"
                style={{
                  background: "rgba(207,255,71,0.03)",
                  border: "1px solid #cfff4710",
                  borderRadius: "2rem 2rem 4rem 2rem",
                }}
                whileHover={{ x: -8, y: -8 }}
                transition={{ duration: 0.3 }}
              />

              {/* Photo with shimmer effect */}
              <motion.div
                className="relative overflow-hidden shadow-2xl cursor-pointer"
                style={{
                  borderRadius: "2rem 2rem 4rem 2rem",
                  border: "1px solid #cfff4722",
                  width: "clamp(260px, 36vw, 380px)",
                  aspectRatio: "4/5",
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={me}
                  alt="Enitan Ajayi"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Shimmer overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8 }}
                />

                {/* Gradient vignette */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(12,12,12,0.6) 0%, transparent 50%)",
                  }}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Name tag at bottom with animation */}
                <motion.div
                  className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-4 py-2 rounded-full backdrop-blur-md"
                  style={{
                    background: "rgba(12,12,12,0.8)",
                    border: "1px solid #cfff4722",
                  }}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ background: "rgba(12,12,12,0.95)" }}
                >
                  <motion.span
                    className="text-sm font-bold"
                    style={{ color: "#f0ebe0", fontFamily: "'Syne', sans-serif" }}
                    whileHover={{ color: "#cfff47" }}
                  >
                    Enitan Ajayi
                  </motion.span>
                  <motion.span
                    className="text-xs font-mono"
                    style={{ color: "#cfff47" }}
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Dev ✦
                  </motion.span>
                </motion.div>

                {/* Decorative corner accent */}
                <motion.div
                  className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 rounded-tr-2xl"
                  style={{ borderColor: "#cfff4744" }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              {/* Floating acid badge */}
              <motion.div
                
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="absolute -top-5 -right-5 px-3 py-1.5 rounded-full text-xs font-mono font-bold shadow-xl cursor-pointer"
                style={{ background: "#cfff47", color: "#0c0c0c" }}
              >
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="inline-block mr-1"
                >
                  ✦
                </motion.span>
                Open to work
              </motion.div>

              {/* Floating link badge */}
              <motion.a
                href="https://github.com/Ennyola4"
                target="_blank"
                rel="noopener noreferrer"
                animate={{ 
                  y: [0, 8, 0],
                  x: [0, 3, 0],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                whileHover={{ scale: 1.1, x: 0 }}
                className="absolute -left-6 top-1/3 flex items-center gap-2 px-3 py-2 rounded-full text-xs font-mono shadow-xl backdrop-blur-sm"
                style={{
                  background: "rgba(17,17,17,0.9)",
                  border: "1px solid #2a2a2a",
                  color: "#f0ebe0",
                }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity }}
                >
                  <Github size={13} />
                </motion.div>
                GitHub
                <ArrowUpRight size={11} style={{ color: "#cfff47" }} />
              </motion.a>

              {/* Second floating badge */}
              <motion.div
                animate={{ 
                  y: [0, -6, 0],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 1.5 }}
                className="absolute -bottom-3 -left-3 px-2 py-1 rounded-full text-[10px] font-mono"
                style={{ background: "#111", border: "1px solid #cfff4730", color: "#cfff47" }}
              >
                <Sparkles size={10} className="inline mr-1" />
                5+ Projects
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Decorative floating elements */}
        <motion.div
          className="absolute bottom-20 right-20 w-2 h-2 rounded-full"
          style={{ background: "#cfff47" }}
          animate={{
            scale: [1, 2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-40 left-20 w-1 h-1 rounded-full"
          style={{ background: "#cfff47" }}
          animate={{
            scale: [1, 3, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
        />
      </section>

      <CurveDivider flip />
    </>
  );
};

export default About;