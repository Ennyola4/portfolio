import { Mail, Github, Linkedin, ArrowUpRight, MapPin } from "lucide-react";
import { motion, type Variants } from "framer-motion";

// ── Variants ──────────────────────────────────────────────────────────────────

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
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
      <path
        d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,60 L0,60 Z"
        fill="#0c0c0c"
      />
    </svg>
  </div>
);

// ── Component ─────────────────────────────────────────────────────────────────

const Contact = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:ital,wght@0,300;0,400;1,300&display=swap');
      `}</style>

      <CurveDivider />

      <section
        id="contact"
        style={{ background: "#0c0c0c" }}
        className="relative py-28 px-6 overflow-hidden"
      >
        {/* ── Atmosphere ── */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Central acid glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.06] blur-3xl"
            style={{ background: "#cfff47" }}
          />
          <div
            className="absolute -bottom-40 -right-32 w-[380px] h-[380px] rounded-full opacity-[0.05] blur-3xl"
            style={{ background: "#3b82f6" }}
          />
          {/* Dot grid */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: "radial-gradient(circle, #f0ebe0 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />
        </div>

        <div className="max-w-3xl mx-auto relative z-10 text-center">

          {/* ── Header ── */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {/* Eyebrow */}
            <motion.div
              variants={fadeUp}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <div className="h-px w-10" style={{ background: "#cfff4755" }} />
              <span
                className="text-xs font-mono tracking-[0.22em] uppercase"
                style={{ color: "#cfff47", fontFamily: "'DM Sans', sans-serif" }}
              >
                Let's Talk
              </span>
              <div className="h-px w-10" style={{ background: "#cfff4755" }} />
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              className="font-extrabold leading-[0.95] mb-6"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(2.8rem, 8vw, 6rem)",
                color: "#f0ebe0",
              }}
            >
              Get In{" "}
              <span style={{ color: "#cfff47" }}>Touch</span>
            </motion.h2>

            {/* Animated squiggle */}
            <motion.div variants={fadeUp} className="flex justify-center mb-8">
              <svg
                viewBox="0 0 200 12"
                className="w-40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M2 8 Q25 4 50 8 Q75 12 100 8 Q125 4 150 8 Q175 12 198 8"
                  stroke="#cfff47"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
              </svg>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-base leading-relaxed max-w-xl mx-auto mb-12"
              style={{
                color: "#9a9080",
                fontFamily: "'DM Sans', sans-serif",
                fontStyle: "italic",
              }}
            >
              I'm currently open to new opportunities and always happy to connect.
              Whether you have a question, a project idea, or just want to say hi —
              my inbox is always open.
            </motion.p>

            {/* Primary CTA */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4 mb-16">
              <motion.a
                href="mailto:ajayi.enitan45@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-semibold text-base"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  background: "#cfff47",
                  color: "#0c0c0c",
                }}
              >
                <Mail size={17} />
                Say Hello
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.4, repeat: Infinity }}
                >
                  <ArrowUpRight size={16} />
                </motion.span>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/enitan-ajayi-02829a3a7/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-semibold text-base border transition-colors duration-200"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  color: "#f0ebe0",
                  borderColor: "#ffffff18",
                  background: "rgba(255,255,255,0.04)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#cfff4744";
                  e.currentTarget.style.color = "#cfff47";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#ffffff18";
                  e.currentTarget.style.color = "#f0ebe0";
                }}
              >
                <Linkedin size={17} />
                LinkedIn
              </motion.a>
            </motion.div>

            {/* ── Info cards row ── */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16"
            >
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "ajayi.enitan45@gmail.com",
                  href: "mailto:ajayi.enitan45@gmail.com",
                },
                {
                  icon: Github,
                  label: "GitHub",
                  value: "github.com/Ennyola4",
                  href: "https://github.com/Ennyola4",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Lagos, Nigeria",
                  href: null,
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <motion.div
                  key={label}
                  whileHover={{ y: -4 }}
                  className="flex flex-col items-center gap-2 p-5 rounded-2xl"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid #cfff4718",
                    borderRadius: "1.5rem 1.5rem 2.5rem 1.5rem",
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center mb-1"
                    style={{ background: "#cfff4715", border: "1px solid #cfff4730" }}
                  >
                    <Icon size={16} style={{ color: "#cfff47" }} />
                  </div>
                  <span
                    className="text-xs font-mono tracking-widest uppercase"
                    style={{ color: "#cfff47" }}
                  >
                    {label}
                  </span>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-xs text-center transition-colors duration-200 hover:text-[#f0ebe0] break-all"
                      style={{ color: "#6b6b6b", fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {value}
                    </a>
                  ) : (
                    <span
                      className="text-xs text-center"
                      style={{ color: "#6b6b6b", fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {value}
                    </span>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* ── Footer strip ── */}
        <div
          className="max-w-6xl mx-auto relative z-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid #1e1e1e" }}
        >
          <span
            className="text-sm font-bold"
            style={{ fontFamily: "'Syne', sans-serif", color: "#f0ebe0" }}
          >
            Enitan<span style={{ color: "#cfff47" }}>.</span>
          </span>

          <span
            className="text-xs"
            style={{ color: "#444", fontFamily: "'DM Sans', sans-serif" }}
          >
            © {new Date().getFullYear()} Ajayi Kolade Enitan. All rights reserved.
          </span>

          <div className="flex items-center gap-4">
            {[
              { href: "https://github.com/Ennyola4", icon: Github },
              { href: "https://www.linkedin.com/in/enitan-ajayi-02829a3a7/", icon: Linkedin },
              { href: "mailto:ajayi.enitan45@gmail.com", icon: Mail },
            ].map(({ href, icon: Icon }) => (
              <motion.a
                key={href}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                whileHover={{ y: -3, color: "#cfff47" }}
                style={{ color: "#444" }}
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;