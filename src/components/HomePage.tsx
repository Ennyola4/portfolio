import { motion, type Variants, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Twitter, Sparkles, Code, Briefcase, Users } from "lucide-react";
import { useEffect, useRef } from "react";
import pic1 from "/pic1.jpeg";
import pic2 from "/pic2.jpeg";
import coding from "/coding.jpg";
import coding2 from "/coding2.jpg";

// ── Variants ────────────────────────────────────────────────────────────────

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};



const imageVariant = (rotate: number): Variants => ({
  hidden: { opacity: 0, scale: 0.88, rotate: rotate - 3, filter: "blur(10px)" },
  show: {
    opacity: 1,
    scale: 1,
    rotate,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
  },
});





// ── Component ────────────────────────────────────────────────────────────────

const HomePage = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  // Mouse following effect for cards
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 20, stiffness: 300 });
  const smoothY = useSpring(mouseY, { damping: 20, stiffness: 300 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Google Font — Syne for display, DM Sans for body */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:ital,wght@0,300;0,400;1,300&display=swap');
        :root {
          --ink:   #0c0c0c;
          --cream: #f0ebe0;
          --acid:  #cfff47;
          --muted: #6b6b6b;
        }
        .font-display { font-family: 'Syne', sans-serif; }
        .font-body    { font-family: 'DM Sans', sans-serif; }
        
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes ripple {
          0% { transform: scale(0); opacity: 0.6; }
          100% { transform: scale(4); opacity: 0; }
        }
        
        @keyframes floatText {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(2deg); }
          66% { transform: translateY(10px) rotate(-2deg); }
        }
        
        @keyframes shine {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }
        
        .ripple-effect::before {
          content: '';
          position: absolute;
          inset: -100%;
          background: radial-gradient(circle, var(--acid) 0%, transparent 70%);
          animation: ripple 2s ease-out infinite;
          pointer-events: none;
          opacity: 0;
        }
        
        .ripple-effect:hover::before {
          opacity: 0.1;
        }
      `}</style>

      <section
        ref={containerRef}
        className="font-body min-h-screen flex items-center overflow-hidden relative"
        style={{ background: "var(--ink)" }}
      >
        {/* ── Animated Background Elements ── */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Noise grain overlay */}
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
              backgroundSize: "200px 200px",
            }}
          />

          {/* Animated Gradient Orbs */}
          <motion.div
            animate={{
              x: ["-20%", "20%", "-20%"],
              y: ["-10%", "10%", "-10%"],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-20 -left-40 w-96 h-96 rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, #cfff47, transparent)" }}
          />
          
          <motion.div
            animate={{
              x: ["20%", "-20%", "20%"],
              y: ["10%", "-10%", "10%"],
              scale: [1.2, 1, 1.2],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-20 -right-40 w-96 h-96 rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, #ff6b6b, transparent)" }}
          />

          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{ background: `hsl(${Math.random() * 60 + 40}, 100%, 60%)` }}
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: 0,
              }}
              animate={{
                y: [null, -100, -200],
                x: [null, Math.random() * 200 - 100, Math.random() * 200 - 100],
                scale: [0, Math.random() * 1.5 + 0.5, 0],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* ── Subtle top rule with animation ── */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background: "linear-gradient(90deg, transparent, #cfff47, transparent)",
            scaleX: useSpring(useTransform(scrollYProgress, [0, 0.5], [0, 1]), { damping: 10 }),
          }}
        />

        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 w-full grid md:grid-cols-[1fr_1fr] gap-16 items-center relative z-10">
          {/* ════ LEFT — TEXT ════ */}
          <motion.div 
            variants={container} 
            initial="hidden" 
            animate="show"
            style={{ y, opacity, scale }}
          >
            {/* Eyebrow with enhanced animation */}
            <motion.div variants={fadeUp} className="flex items-center gap-1.5 mb-8">
              <motion.span
                animate={{ scale: [1, 1.6, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-2 h-2 rounded-full"
                style={{ background: "var(--acid)" }}
              />
              <span
                className="text-xs tracking-[0.22em] uppercase font-mono"
                style={{ color: "var(--muted)" }}
              >
                Available for work
              </span>
            </motion.div>

            {/* Headline with enhanced animation */}
            <motion.h1
              variants={fadeUp}
              className="font-display text-[clamp(2.6rem,6vw,5.5rem)] leading-[0.95] font-bold mb-8 relative"
              style={{ color: "var(--cream)" }}
            >
              <motion.span
                animate={{ opacity: [1, 0.3, 1], x: [-2, 2, -2] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-block"
              >
                Building
              </motion.span>
              <br />
              Digital{" "}
              <motion.span
                className="relative inline-block"
                style={{ color: "var(--acid)" }}
                whileHover={{ scale: 1.05 }}
              >
                Products
                {/* Animated underline squiggle */}
                <motion.svg
                  viewBox="0 0 220 10"
                  className="absolute -bottom-2 left-0 w-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                >
                  <motion.path
                    d="M2 6 Q30 2 55 6 Q80 10 110 6 Q140 2 165 6 Q190 10 218 6"
                    stroke="#cfff47"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeDasharray="300"
                    strokeDashoffset="0"
                  />
                </motion.svg>
              </motion.span>
              <br />
              <motion.span
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  backgroundSize: ["200% auto", "200% auto", "200% auto"]
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="bg-gradient-to-r from-var(--cream) via-var(--acid) to-var(--cream) bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(90deg, #f0ebe0, #cfff47, #f0ebe0)" }}
              >
                That Stand Out
              </motion.span>
            </motion.h1>

            {/* Bio with typewriter effect */}
            <motion.p
              variants={fadeUp}
              className="text-base leading-relaxed max-w-md mb-10"
              style={{ color: "var(--muted)", fontStyle: "italic" }}
            >
              I'm{" "}
              <motion.strong
                whileHover={{ scale: 1.05, color: "#cfff47" }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ color: "var(--cream)", fontStyle: "normal", fontWeight: 400, display: "inline-block" }}
              >
                Enitan Ajayi
              </motion.strong>{" "}
              — a software developer focused on crafting high-quality web
              applications with modern technologies and exceptional user
              experiences.
            </motion.p>

            {/* CTAs with enhanced animations */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(207, 255, 71, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm relative overflow-hidden group"
                style={{ background: "var(--acid)", color: "var(--ink)" }}
              >
                <span className="relative z-10">View Work</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="relative z-10"
                >
                  <ArrowUpRight size={16} />
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: "left" }}
                />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, borderColor: "#cfff47" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm border transition-all duration-300 relative overflow-hidden group"
                style={{
                  color: "var(--cream)",
                  borderColor: "#ffffff22",
                  background: "transparent",
                }}
              >
                <span className="relative z-10">Contact Me</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-var(--acid)/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.5 }}
                />
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeUp} className="flex gap-4 mt-8">
              {[Github, Linkedin, Twitter].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="p-2 rounded-full transition-colors duration-300 hover:bg-white/10"
                  style={{ color: "var(--muted)" }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>

            {/* Stats strip with counter animation */}
            <motion.div
              variants={fadeUp}
              className="flex gap-8 mt-14 pt-8 border-t"
              style={{ borderColor: "#ffffff0f" }}
            >
              {[
                { n: 3, label: "Years exp.", icon: Code },
                { n: 13, label: "Projects shipped", icon: Briefcase },
                { n: 96, label: "Client satisfaction", icon: Users },
              ].map(({ n, label, icon: Icon }) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative group"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Icon size={16} style={{ color: "var(--acid)" }} />
                    <motion.p
                      className="font-display text-2xl font-bold"
                      style={{ color: "var(--acid)" }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 1 }}
                    >
                      {n}+
                    </motion.p>
                  </div>
                  <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>
                    {label}
                  </p>
                  <motion.div
                    className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-var(--acid) to-transparent"
                    initial={{ width: "0%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ════ RIGHT — IMAGE COLLAGE ════ */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="relative h-[520px] hidden md:block"
            style={{ perspective: "1000px" }}
          >
            {/* Card 1 — top-left, slight tilt left */}
            <motion.div
              variants={imageVariant(-2)}
              className="absolute top-0 left-0 w-[52%] rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
              style={{ boxShadow: "0 24px 60px rgba(0,0,0,0.55)" }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 20 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
            >
              <div className="relative overflow-hidden">
                <img src={pic1} alt="" className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                  style={{ transform: "skewX(-15deg)" }}
                />
              </div>
             
             
            </motion.div>

            {/* Card 2 — top-right, tilt right */}
            <motion.div
              variants={imageVariant(2.5)}
              className="absolute top-6 right-0 w-[44%] rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
              style={{ boxShadow: "0 24px 60px rgba(0,0,0,0.55)" }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 20 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
            >
              <div className="relative overflow-hidden">
                <img src={coding} alt="" className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110" />
                <motion.div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                  style={{ transform: "skewX(-15deg)" }}
                />
              </div>
            </motion.div>

            {/* Card 3 — bottom-left, tilt right */}
            <motion.div
              variants={imageVariant(1.5)}
              className="absolute bottom-0 left-8 w-[44%] rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
              style={{ boxShadow: "0 24px 60px rgba(0,0,0,0.55)" }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 20 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
            >
              <div className="relative overflow-hidden">
                <img src={coding2} alt="" className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110" />
                <motion.div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>

            {/* Card 4 — bottom-right, tilt left */}
            <motion.div
              variants={imageVariant(-1.5)}
              className="absolute bottom-4 right-2 w-[46%] rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
              style={{ boxShadow: "0 24px 60px rgba(0,0,0,0.55)" }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 20 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
            >
              <div className="relative overflow-hidden">
                <img src={pic2} alt="" className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110" />
                <motion.div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>

            {/* Floating acid dot accent with enhanced animation */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[38%] left-[44%] w-12 h-12 rounded-full flex items-center justify-center text-sm font-mono font-bold z-20 cursor-pointer"
              style={{ background: "var(--acid)", color: "var(--ink)" }}
              whileHover={{ scale: 1.3, rotate: 90 }}
            >
              <Sparkles size={20} />
            </motion.div>

            {/* Rotating ring effect */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-full border-2 border-dashed border-var(--acid)/20"
              style={{ borderColor: "#cfff4733" }}
            />
          </motion.div>

          {/* Mobile image with enhanced animation */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            className="md:hidden rounded-2xl overflow-hidden relative group"
          >
            <img src={pic1} alt="Enitan Ajayi" className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.div>

          {/* Mouse following glow effect */}
          <motion.div
            className="fixed pointer-events-none z-50 w-32 h-32 rounded-full"
            style={{
              x: smoothX,
              y: smoothY,
              background: "radial-gradient(circle, #cfff4733 0%, transparent 70%)",
              translateX: "-50%",
              translateY: "-50%",
              opacity: 0.3,
            }}
          />
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-var(--acid)/50 flex justify-center">
            <motion.div
              className="w-1 h-2 rounded-full"
              style={{ background: "var(--acid)" }}
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <span className="text-xs font-mono" style={{ color: "var(--muted)" }}>
            Scroll
          </span>
        </motion.div>
      </section>
    </>
  );
};

export default HomePage;