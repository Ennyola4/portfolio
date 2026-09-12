import { Github, Linkedin, Twitter, ArrowUpRight, Mail } from "lucide-react";
import { motion, type Variants } from "framer-motion";

// ── Variants ──────────────────────────────────────────────────────────────────

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const lineReveal: Variants = {
  hidden: { y: "105%" },
  show: { y: "0%", transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

// ── Data ──────────────────────────────────────────────────────────────────────

const navLinks = [
  { label: "About",    href: "#about",    index: "01" },
  { label: "Skills",   href: "#skills",   index: "02" },
  { label: "Projects", href: "#projects", index: "03" },
  { label: "Contact",  href: "#contact",  index: "04" },
];

const socialLinks = [
  { icon: Github,   url: "https://github.com/Ennyola4",                              label: "GitHub"   },
  { icon: Linkedin, url: "https://www.linkedin.com/in/enitan-ajayi-02829a3a7/",        label: "LinkedIn" },
  { icon: Twitter,  url: "https://x.com/realennyitan",                                 label: "Twitter"  },
];

// ── Component ─────────────────────────────────────────────────────────────────

const Footer = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');
        ::selection { background: #4787ff; color: #0c0c0c; }
      `}</style>

      <footer
        className="relative overflow-hidden px-5 sm:px-8 py-20 sm:py-28"
        style={{ background: "#0c0c0c", borderTop: "1px solid #1a1a1a" }}
      >
        {/* ── Background ── */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Dot grid */}
          <div
            className="absolute inset-0 opacity-[0.028]"
            style={{
              backgroundImage: "radial-gradient(circle, #f0ebe0 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          {/* Single soft glow */}
          <div
            className="absolute top-0 -right-40 w-[520px] h-[520px] rounded-full blur-3xl"
            style={{ background: "#4787ff", opacity: 0.05 }}
          />
          {/* Huge "04" watermark */}
          <div className="absolute -left-10 bottom-0 select-none pointer-events-none">
            <span
              className="font-extrabold leading-none"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(12rem, 26vw, 24rem)",
                color: "#4787ff08",
                letterSpacing: "-0.05em",
              }}
            >
              04
            </span>
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">

          {/* ── Top row: eyebrow + meta ── */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between mb-16 flex-wrap gap-4"
          >
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#4787ff" }} />
              <span
                className="text-[10px] font-mono tracking-[0.3em] uppercase"
                style={{ color: "#6b6b6b" }}
              >
                Contact / Sign-off
              </span>
            </div>
            <span
              className="text-[10px] font-mono tracking-[0.3em] uppercase"
              style={{ color: "#4a4a4a" }}
            >
              Portfolio / 2026
            </span>
          </motion.div>

          {/* ══ Big sign-off + CTA ══ */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-20"
          >
            {/* Left: big heading */}
            <div className="lg:col-span-8">
              <h2
                className="font-extrabold leading-[0.92] mb-8"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "clamp(2.4rem, 6.5vw, 5rem)",
                  color: "#f0ebe0",
                  letterSpacing: "-0.02em",
                }}
              >
                <div className="overflow-hidden">
                  <motion.span variants={lineReveal} className="block">
                    Have a project
                  </motion.span>
                </div>
                <div className="overflow-hidden">
                  <motion.span
                    variants={lineReveal}
                    className="block"
                    transition={{ delay: 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  >
                    in{" "}
                    <span
                      className="italic font-light"
                      style={{ color: "#4787ff", fontFamily: "'DM Sans', sans-serif" }}
                    >
                      mind?
                    </span>
                  </motion.span>
                </div>
              </h2>

              <motion.p
                variants={fadeUp}
                className="text-base leading-relaxed max-w-lg mb-10"
                style={{ color: "#9a9080", fontFamily: "'DM Sans', sans-serif" }}
              >
                I create modern, responsive, and production-ready web
                experiences with performance and aesthetics in mind.
              </motion.p>

              {/* CTA — text + arrow chip */}
              <motion.a
                variants={fadeUp}
                href="#contact"
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="inline-flex items-center gap-3 group"
              >
                <span
                  className="text-sm font-mono tracking-[0.2em] uppercase"
                  style={{ color: "#f0ebe0" }}
                >
                  Start a project
                </span>
                <motion.span
                  className="w-11 h-11 rounded-full flex items-center justify-center"
                  style={{ background: "#4787ff" }}
                  whileHover={{ rotate: 45 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowUpRight className="w-4 h-4" style={{ color: "#0c0c0c" }} />
                </motion.span>
              </motion.a>
            </div>

            {/* Right: contact card */}
            <motion.div
              variants={fadeUp}
              className="lg:col-span-4 lg:pt-4"
            >
              <div
                className="rounded-2xl p-6"
                style={{ background: "#111", border: "1px solid #1f1f1f" }}
              >
                <div
                  className="text-[10px] font-mono tracking-[0.25em] uppercase mb-5"
                  style={{ color: "#4a4a4a" }}
                >
                  Direct line
                </div>

                <a
                  href="mailto:ajayi.enitan45@gmail.com"
                  className="group flex items-start gap-3 mb-4 transition-colors duration-300"
                >
                  <span
                    className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 border transition-colors duration-300 group-hover:border-[#4787ff55] group-hover:bg-[#4787ff12]"
                    style={{ borderColor: "#1f1f1f" }}
                  >
                    <Mail
                      size={14}
                      className="transition-colors duration-300 group-hover:text-[#4787ff]"
                      style={{ color: "#6b6b6b" }}
                    />
                  </span>
                  <div className="min-w-0">
                    <div
                      className="text-[10px] font-mono tracking-widest uppercase mb-1"
                      style={{ color: "#4a4a4a" }}
                    >
                      Email
                    </div>
                    <div
                      className="text-sm break-all transition-colors duration-300 group-hover:text-[#f0ebe0]"
                      style={{ color: "#9a9080", fontFamily: "'DM Sans', sans-serif" }}
                    >
                      ajayi.enitan45@gmail.com
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-2 mt-6 pt-5 border-t" style={{ borderColor: "#1a1a1a" }}>
                  <motion.span
                    animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: "#0eb406" }}
                  />
                  <span
                    className="text-[11px] font-mono tracking-wider"
                    style={{ color: "#6b6b6b" }}
                  >
                    Available for work
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ══ Nav + Socials ══ */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-16 pt-14 border-t"
            style={{ borderColor: "#1a1a1a" }}
          >
            {/* Navigation */}
            <motion.div variants={fadeUp}>
              <div
                className="text-[10px] font-mono tracking-[0.25em] uppercase mb-6"
                style={{ color: "#4a4a4a" }}
              >
                Navigate
              </div>

              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <motion.a
                      href={link.href}
                      className="group flex items-center gap-4 py-2 transition-colors duration-300"
                    >
                      <span
                        className="text-[10px] font-mono tracking-widest shrink-0 w-5 transition-colors duration-300 group-hover:text-[#4787ff]"
                        style={{ color: "#4a4a4a" }}
                      >
                        {link.index}
                      </span>
                      <span
                        className="text-lg font-bold transition-colors duration-300 group-hover:text-[#4787ff]"
                        style={{
                          fontFamily: "'Syne', sans-serif",
                          color: "#f0ebe0",
                        }}
                      >
                        {link.label}
                      </span>
                      <ArrowUpRight
                        size={13}
                        className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ color: "#4787ff" }}
                      />
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Socials */}
            <motion.div variants={fadeUp}>
              <div
                className="text-[10px] font-mono tracking-[0.25em] uppercase mb-6"
                style={{ color: "#4a4a4a" }}
              >
                Connect
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                {socialLinks.map(({ icon: Icon, url, label }) => (
                  <motion.a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ y: -3 }}
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-full text-sm border transition-colors duration-300 group"
                    style={{
                      color: "#f0ebe0",
                      borderColor: "#1f1f1f",
                      background: "rgba(255,255,255,0.02)",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#4787ff55";
                      e.currentTarget.style.background = "#4787ff12";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#1f1f1f";
                      e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                    }}
                  >
                    <Icon size={14} />
                    <span>{label}</span>
                    <ArrowUpRight
                      size={11}
                      className="opacity-40 transition-opacity duration-300 group-hover:opacity-100"
                      style={{ color: "#4787ff" }}
                    />
                  </motion.a>
                ))}
              </div>

              {/* Quote */}
              <p
                className="text-sm italic leading-relaxed max-w-xs"
                style={{ color: "#6b6b6b", fontFamily: "'DM Sans', sans-serif" }}
              >
                "Design is how it works — and how it feels."
              </p>
            </motion.div>
          </motion.div>

          {/* ══ Bottom bar ══ */}
          <div
            className="mt-20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ borderTop: "1px solid #1a1a1a" }}
          >
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#4787ff" }} />
              <span
                className="text-[10px] font-mono tracking-[0.25em] uppercase"
                style={{ color: "#4a4a4a" }}
              >
                © {new Date().getFullYear()} Enitan Ajayi — All rights reserved
              </span>
            </div>

            <motion.a
              href="#top"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="inline-flex items-center gap-2 group"
            >
              <span
                className="text-[10px] font-mono tracking-[0.25em] uppercase transition-colors duration-300 group-hover:text-[#f0ebe0]"
                style={{ color: "#6b6b6b" }}
              >
                Back to top
              </span>
              <span
                className="w-8 h-8 rounded-full flex items-center justify-center border transition-colors duration-300 group-hover:border-[#4787ff] group-hover:bg-[#4787ff]"
                style={{ borderColor: "#1f1f1f" }}
              >
                <ArrowUpRight
                  size={12}
                  className="transition-colors duration-300 group-hover:text-[#0c0c0c]"
                  style={{ color: "#6b6b6b" }}
                />
              </span>
            </motion.a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;