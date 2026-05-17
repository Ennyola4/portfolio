import {
  Github,
  Linkedin,
  Twitter,
  ArrowUpRight,
  Mail,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";

// ── Variants ──────────────────────────────────────────────────────────────────

const footerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const linkVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45 },
  },
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

// ── Data ──────────────────────────────────────────────────────────────────────

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

// ── Component ─────────────────────────────────────────────────────────────────

const Footer = () => {
  return (
    <>
      <CurveDivider />

      <footer
        className="relative overflow-hidden px-6 py-24"
        style={{ background: "#0c0c0c" }}
      >
        {/* ── Atmosphere ── */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.05]"
            style={{ background: "#cfff47" }}
          />

          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #f0ebe0 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />
        </div>

        <motion.div
          variants={footerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto relative z-10"
        >
          {/* ── Top CTA ── */}
          <div
            className="relative overflow-hidden p-8 sm:p-10 mb-16"
            style={{
              borderRadius: "2rem 2rem 3rem 2rem",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(207,255,71,0.12)",
            }}
          >
            {/* Glow */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at top left, rgba(207,255,71,0.08), transparent 55%)",
              }}
            />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
              <div className="max-w-2xl">
                {/* Eyebrow */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="h-px w-10"
                    style={{ background: "#cfff4755" }}
                  />
                  <span
                    className="text-xs font-mono tracking-[0.22em] uppercase"
                    style={{
                      color: "#cfff47",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    Let’s Build Something
                  </span>
                </div>

                <h2
                  className="font-extrabold leading-[0.95]"
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                    color: "#f0ebe0",
                  }}
                >
                  Have a project in{" "}
                  <span style={{ color: "#cfff47" }}>mind?</span>
                </h2>

                <p
                  className="mt-5 max-w-xl text-base"
                  style={{
                    color: "#8b857c",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  I create modern, responsive, and production-ready web
                  experiences with performance and aesthetics in mind.
                </p>
              </div>

              {/* CTA button */}
              <motion.a
                href="#contact"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full w-fit"
                style={{
                  background: "#cfff47",
                  color: "#0c0c0c",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                }}
              >
                Start a Project
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </motion.a>
            </div>
          </div>

          {/* ── Bottom area ── */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
            {/* Brand */}
            <motion.div variants={linkVariants}>
              <h3
                className="text-3xl font-extrabold"
                style={{
                  color: "#f0ebe0",
                  fontFamily: "'Syne', sans-serif",
                }}
              >
                Enitan<span style={{ color: "#cfff47" }}>.</span>
              </h3>

              <p
                className="mt-5 text-sm leading-relaxed max-w-sm"
                style={{
                  color: "#8b857c",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Frontend-focused developer crafting immersive digital products
                with clean code, motion, and modern UI systems.
              </p>

              {/* Email */}
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-2 mt-6 text-sm transition-colors duration-300"
                style={{
                  color: "#cfff47",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                <Mail size={15} />
                ajayi.enitan45@gmail.com
              </a>
            </motion.div>

            {/* Navigation */}
            <motion.div variants={linkVariants}>
              <h4
                className="mb-5 text-sm uppercase tracking-[0.2em]"
                style={{
                  color: "#cfff47",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Navigation
              </h4>

              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <motion.a
                      whileHover={{ x: 4 }}
                      href={link.href}
                      className="inline-flex items-center gap-2 group"
                      style={{
                        color: "#f0ebe0",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      <span>{link.label}</span>

                      <ArrowUpRight
                        size={14}
                        className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                      />
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Socials */}
            <motion.div variants={linkVariants}>
              <h4
                className="mb-5 text-sm uppercase tracking-[0.2em]"
                style={{
                  color: "#cfff47",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Connect
              </h4>

              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "#f0ebe0",
                    }}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>

              {/* Mini quote */}
              <p
                className="mt-8 text-sm italic leading-relaxed max-w-xs"
                style={{
                  color: "#6f695f",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                “Design is how it works — and how it feels.”
              </p>
            </motion.div>
          </div>

          {/* ── Bottom bar ── */}
          <div
            className="mt-16 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <p
              className="text-sm"
              style={{
                color: "#6f695f",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              © {new Date().getFullYear()} Enitan Ajayi. All rights reserved.
            </p>

            <motion.a
              whileHover={{ y: -2 }}
              href="#top"
              className="inline-flex items-center gap-2 text-sm"
              style={{
                color: "#cfff47",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Back to top
              <ArrowUpRight size={14} />
            </motion.a>
          </div>
        </motion.div>
      </footer>

      <CurveDivider flip />
    </>
  );
};

export default Footer;