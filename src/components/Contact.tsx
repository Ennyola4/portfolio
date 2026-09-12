import { Mail, Github, Linkedin, ArrowUpRight, MapPin, Clock, Zap, Copy, Check } from "lucide-react";
import { motion, type Variants, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

// ── Variants ──────────────────────────────────────────────────────────────────

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const fade: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const lineReveal: Variants = {
  hidden: { y: "105%" },
  show: { y: "0%", transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

// ── Contact channels data ─────────────────────────────────────────────────────

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "ajayi.enitan45@gmail.com",
    href: "mailto:ajayi.enitan45@gmail.com",
    hint: "Best for project briefs",
    accent: "#4787ff",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "in/enitan-ajayi",
    href: "https://www.linkedin.com/in/enitan-ajayi-02829a3a7/",
    hint: "Let's connect professionally",
    accent: "#0A66C2",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Ennyola4",
    href: "https://github.com/Ennyola4",
    hint: "See what I've been building",
    accent: "#f0ebe0",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lagos, Nigeria",
    href: null,
    hint: "WAT · GMT+1",
    accent: "#0eb406",
  },
];

// ── Copy Button ───────────────────────────────────────────────────────────────

const CopyButton = ({ text, accent }: { text: string; accent: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard not available */
    }
  };

  return (
    <motion.button
      onClick={handleCopy}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="w-7 h-7 rounded-full cursor-pointer flex items-center justify-center shrink-0 transition-colors"
      style={{
        background: copied ? `${accent}22` : "#ffffff1b",
        border: `1px solid ${copied ? accent + "55" : "#ffffff10"}`,
      }}
      aria-label={copied ? "Copied" : "Copy"}
    >
      {copied ? (
        <Check size={12} style={{ color: accent }} />
      ) : (
        <Copy size={12} style={{ color: "#6b6b6b" }} />
      )}
    </motion.button>
  );
};

// ── Channel Row ───────────────────────────────────────────────────────────────

const ChannelRow = ({
  channel,
  index,
}: {
  channel: (typeof channels)[number];
  index: number;
}) => {
  const [hovered, setHovered] = useState(false);
  const Icon = channel.icon;
  const isLink = !!channel.href;

  const Content = (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex items-center gap-5 py-6 border-b cursor-pointer"
      style={{ borderColor: "#1a1a1a" }}
    >
      {/* Left accent line that grows */}
      <motion.span
        className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5"
        style={{ background: channel.accent }}
        initial={false}
        animate={{ height: hovered ? "60%" : "0%" }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Index */}
      <span
        className="text-[10px] font-mono tracking-widest shrink-0 w-6 transition-colors duration-300"
        style={{ color: hovered ? channel.accent : "#4a4a4a" }}
      >
        0{index + 1}
      </span>

      {/* Icon */}
      <motion.div
        className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 border"
        animate={{
          borderColor: hovered ? `${channel.accent}66` : "#1f1f1f",
          background: hovered ? `${channel.accent}12` : "transparent",
        }}
        transition={{ duration: 0.3 }}
      >
        <Icon
          size={16}
          style={{ color: hovered ? channel.accent : "#6b6b6b" }}
          className="transition-colors duration-300"
        />
      </motion.div>

      {/* Label + value */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span
            className="text-[10px] font-mono tracking-[0.25em] uppercase transition-colors duration-300"
            style={{ color: hovered ? channel.accent : "#6b6b6b" }}
          >
            {channel.label}
          </span>
        </div>
        <div
          className="text-base sm:text-lg font-semibold truncate transition-colors duration-300"
          style={{
            fontFamily: "'Syne', sans-serif",
            color: hovered ? "#f4f2f0" : "#ede9e9",
          }}
        >
          {channel.value}
        </div>
        <motion.div
          className="text-[11px] mt-0.5 hidden sm:block"
          style={{ color: "#cccaca", fontFamily: "'DM Sans', sans-serif" }}
          animate={{ opacity: hovered ? 1 : 0.6 }}
          transition={{ duration: 0.3 }}
        >
          {channel.hint}
        </motion.div>
      </div>

      {/* Right side: arrow + copy */}
      <div className="flex items-center gap-2 shrink-0">
        {isLink && (
          <CopyButton text={channel.value} accent={channel.accent} />
        )}
        {isLink ? (
          <motion.div
            className="w-9 h-9 rounded-full flex items-center justify-center"
            animate={{
              background: hovered ? channel.accent : "transparent",
              borderColor: hovered ? channel.accent : "#1f1f1f",
            }}
            style={{ border: "1px solid #1f1f1f" }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              animate={{ x: hovered ? 1 : 0, y: hovered ? -1 : 0 }}
              transition={{ duration: 0.25 }}
            >
              <ArrowUpRight
                size={14}
                className="transition-colors duration-300"
                style={{ color: hovered ? "#0c0c0c" : "#6b6b6b" }}
              />
            </motion.div>
          </motion.div>
        ) : (
          <div className="w-9 h-9" />
        )}
      </div>
    </motion.div>
  );

  if (isLink) {
    return (
      <motion.a
        variants={fade}
        href={channel.href!}
        target={channel.href!.startsWith("http") ? "_blank" : undefined}
        rel="noopener noreferrer"
        className="block"
      >
        {Content}
      </motion.a>
    );
  }

  return <motion.div variants={fade}>{Content}</motion.div>;
};

// ── Main ──────────────────────────────────────────────────────────────────────

const Contact = () => {
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
        id="contact"
        ref={sectionRef}
        className="relative py-24 sm:py-32 px-5 sm:px-8 overflow-hidden"
        style={{ background: "#0c0c0c" }}
      >
        {/* ── Atmosphere ── */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Dot grid */}
          <motion.div
            className="absolute inset-0 opacity-[0.028]"
            style={{
              backgroundImage: "radial-gradient(circle, #f0ebe0 1px, transparent 1px)",
              backgroundSize: "32px 32px",
              y: bgY,
            }}
          />
          {/* Single soft glow */}
          <div
            className="absolute -bottom-40 -right-32 w-[500px] h-[500px] rounded-full blur-3xl"
            style={{ background: "#4787ff", opacity: 0.06 }}
          />
          {/* Huge "03" watermark */}
          <motion.div
            style={{ y: useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]) }}
            className="absolute -left-10 bottom-0 select-none pointer-events-none"
          >
            <span
              className="font-extrabold leading-none"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(12rem, 26vw, 24rem)",
                color: "#4787ff08",
                letterSpacing: "-0.05em",
              }}
            >
              03
            </span>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">

          {/* ── Header row ── */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between mb-16 sm:mb-24 flex-wrap gap-4"
          >
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#4787ff" }} />
              <span
                className="text-[10px] font-mono tracking-[0.3em] uppercase"
                style={{ color: "#6b6b6b" }}
              >
                Contact — Let's Talk
              </span>
            </div>
            <div className="flex items-center gap-2">
              <motion.span
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
                transition={{ duration: 1.6, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#0eb406" }}
              />
              <span
                className="text-[10px] font-mono tracking-[0.25em] uppercase"
                style={{ color: "#0eb406" }}
              >
                Available for work
              </span>
            </div>
          </motion.div>

          {/* ── Two-column layout ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            {/* ══ LEFT: Big heading + intro + CTA ══ */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start"
            >
              {/* Big editorial heading */}
              <h2
                className="font-extrabold leading-[0.92] mb-10"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "clamp(2.6rem, 7vw, 5rem)",
                  color: "#f0ebe0",
                  letterSpacing: "-0.02em",
                }}
              >
                <div className="overflow-hidden">
                  <motion.span variants={lineReveal} className="block">
                    Let's build
                  </motion.span>
                </div>
                <div className="overflow-hidden">
                  <motion.span
                    variants={lineReveal}
                    className="block"
                    transition={{ delay: 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  >
                    something{" "}
                    <span
                      className="italic font-light"
                      style={{ color: "#4787ff", fontFamily: "'DM Sans', sans-serif" }}
                    >
                      good
                    </span>
                    .
                  </motion.span>
                </div>
              </h2>

              {/* Intro */}
              <motion.p
                variants={fade}
                className="text-base leading-relaxed mb-8 max-w-md"
                style={{ color: "#9a9080", fontFamily: "'DM Sans', sans-serif" }}
              >
                I'm currently open to new opportunities and always happy to
                connect. Whether you have a question, a project idea, or just
                want to say hi — my inbox is always open.
              </motion.p>

              {/* Primary CTA */}
              <motion.div variants={fade} className="mb-10">
                <motion.a
                  href="mailto:ajayi.enitan45@gmail.com"
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="inline-flex items-center gap-3 group"
                >
                  <span
                    className="text-sm font-mono tracking-[0.2em] uppercase"
                    style={{ color: "#f0ebe0" }}
                  >
                    Say Hello
                  </span>
                  <motion.span
                    className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{ background: "#4787ff" }}
                    whileHover={{ rotate: 45 }}
                  >
                    <ArrowUpRight className="w-4 h-4" style={{ color: "#0c0c0c" }} />
                  </motion.span>
                </motion.a>
              </motion.div>

              {/* Response time hint */}
              <motion.div
                variants={fade}
                className="flex items-center gap-4 pt-6 border-t"
                style={{ borderColor: "#1a1a1a" }}
              >
                <div className="flex items-center gap-2">
                  <Clock size={13} style={{ color: "#4787ff" }} />
                  <span
                    className="text-[11px] font-mono"
                    style={{ color: "#6b6b6b" }}
                  >
                    Replies within 24h
                  </span>
                </div>
                <span style={{ color: "#1a1a1a" }}>·</span>
                <div className="flex items-center gap-2">
                  <Zap size={13} style={{ color: "#0eb406" }} />
                  <span
                    className="text-[11px] font-mono"
                    style={{ color: "#6b6b6b" }}
                  >
                    Freelance friendly
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* ══ RIGHT: Channel list ══ */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="lg:col-span-7"
            >
              {/* Column header */}
              <div
                className="flex items-center justify-between pb-5 mb-2 border-b"
                style={{ borderColor: "#1a1a1a" }}
              >
                <span
                  className="text-[10px] font-mono tracking-[0.25em] uppercase"
                  style={{ color: "#4a4a4a" }}
                >
                  Channels
                </span>
                <span
                  className="text-[10px] font-mono tracking-[0.25em] uppercase"
                  style={{ color: "#4a4a4a" }}
                >
                  Open
                </span>
              </div>

              {/* Rows */}
              {channels.map((channel, i) => (
                <ChannelRow key={channel.label} channel={channel} index={i} />
              ))}

              {/* Bottom hint */}
              <motion.div
                variants={fade}
                className="mt-8 flex items-center gap-3"
              >
                <span
                  className="w-1 h-1 rounded-full"
                  style={{ background: "#4787ff" }}
                />
                <span
                  className="text-[11px] italic"
                  style={{ color: "#6b6b6b", fontFamily: "'DM Sans', sans-serif" }}
                >
                  Prefer a call? Send an email and we'll set up a time.
                </span>
              </motion.div>
            </motion.div>
          </div>

          {/* ── Footer strip ── */}
          <div
            className="mt-20 sm:mt-28 pt-8 flex flex-col sm:flex-row items-center justify-between gap-5"
            style={{ borderTop: "1px solid #1a1a1a" }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-lg font-bold"
              style={{ fontFamily: "'Syne', sans-serif", color: "#f0ebe0" }}
            >
              Enitan<span style={{ color: "#4787ff" }}>.</span>
            </motion.span>

            <span
              className="text-[11px] font-mono tracking-wider text-center order-3 sm:order-2"
              style={{ color: "#4a4a4a" }}
            >
              © {new Date().getFullYear()} Ajayi Kolade Enitan — All rights reserved
            </span>

            <div className="flex items-center gap-4 order-2 sm:order-3">
              {[
                { href: "https://github.com/Ennyola4", icon: Github, label: "GitHub" },
                { href: "https://www.linkedin.com/in/enitan-ajayi-02829a3a7/", icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:ajayi.enitan45@gmail.com", icon: Mail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3 }}
                  className="w-8 h-8 rounded-full flex items-center justify-center border transition-colors duration-300"
                  style={{ borderColor: "#1f1f1f", color: "#6b6b6b" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#4787ff55";
                    e.currentTarget.style.color = "#4787ff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#1f1f1f";
                    e.currentTarget.style.color = "#6b6b6b";
                  }}
                >
                  <Icon size={14} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;