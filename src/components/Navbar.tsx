import { Download, Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { label: "About",    href: "#about",    index: "01" },
  { label: "Skills",   href: "#skills",   index: "02" },
  { label: "Projects", href: "#projects", index: "03" },
  { label: "Contact",  href: "#contact",  index: "04" },
];

// ── Resume HTML (restyled to match editorial theme — CONTENT UNCHANGED) ─────

const buildResumeHTML = () => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Ajayi Kolade Enitan — Resume</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --ink:    #0c0c0c;
      --ink-2:  #111;
      --cream:  #f0ebe0;
      --acid:   #4787ff;
      --muted:  #9a9080;
      --dim:    #6b6b6b;
      --faint:  #4a4a4a;
      --rule:   #1a1a1a;
    }

    html, body {
      font-family: 'DM Sans', sans-serif;
      background: var(--ink);
      color: var(--cream);
      line-height: 1.65;
      -webkit-font-smoothing: antialiased;
    }

    body { padding: 56px 32px; }

    .page {
      max-width: 860px;
      margin: auto;
    }

    /* ── Header ── */
    header {
      padding-bottom: 32px;
      margin-bottom: 40px;
      border-bottom: 1px solid var(--rule);
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      flex-wrap: wrap;
      gap: 24px;
    }

    .name {
      font-family: 'Syne', sans-serif;
      font-size: 40px;
      font-weight: 800;
      line-height: 1;
      letter-spacing: -0.02em;
      color: var(--cream);
    }

    .name span { color: var(--acid); }

    .role {
      font-family: 'DM Sans', monospace;
      font-size: 11px;
      letter-spacing: 0.28em;
      text-transform: uppercase;
      color: var(--dim);
      margin-top: 12px;
    }

    .contact-block {
      text-align: right;
      font-family: 'DM Sans', monospace;
      font-size: 11px;
      letter-spacing: 0.05em;
      color: var(--dim);
      line-height: 1.9;
    }

    /* ── Sections ── */
    .section { margin-bottom: 40px; }

    .section-title {
      font-family: 'DM Sans', monospace;
      font-size: 10px;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      color: var(--acid);
      margin-bottom: 18px;
      padding-bottom: 10px;
      border-bottom: 1px solid var(--rule);
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .section-title::before {
      content: '';
      display: inline-block;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--acid);
      flex-shrink: 0;
    }

    p { color: var(--muted); font-size: 14px; margin-bottom: 10px; }

    ul { padding-left: 18px; }
    ul li {
      font-size: 14px;
      color: var(--muted);
      margin-bottom: 8px;
      position: relative;
      list-style: none;
      padding-left: 14px;
    }
    ul li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 9px;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: var(--acid);
      opacity: 0.55;
    }
    ul li strong { color: var(--cream); font-weight: 500; }

    /* ── Skills pills ── */
    .skills { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 6px; }
    .skill {
      background: #151515;
      border: 1px solid #222;
      color: var(--cream);
      font-family: 'DM Sans', monospace;
      font-size: 11px;
      letter-spacing: 0.03em;
      padding: 6px 14px;
      border-radius: 100px;
      transition: border-color 0.2s ease;
    }

    /* ── Experience entries ── */
    .exp-entry {
      margin-bottom: 28px;
      padding-bottom: 22px;
      border-bottom: 1px solid var(--rule);
    }
    .exp-entry:last-child { border-bottom: none; padding-bottom: 0; }

    .exp-head {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 10px;
    }

    .exp-title {
      font-family: 'Syne', sans-serif;
      font-size: 15px;
      font-weight: 700;
      color: var(--cream);
      letter-spacing: -0.005em;
    }

    .exp-meta {
      font-family: 'DM Sans', monospace;
      font-size: 11px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--acid);
      padding: 3px 10px;
      border: 1px solid #4787ff33;
      border-radius: 100px;
    }

    /* ── Two column ── */
    .two-col { display: flex; gap: 48px; flex-wrap: wrap; }
    .two-col > div { flex: 1; min-width: 220px; }

    /* ── Footer ── */
    footer {
      margin-top: 56px;
      padding-top: 20px;
      border-top: 1px solid var(--rule);
      font-family: 'DM Sans', monospace;
      font-size: 11px;
      letter-spacing: 0.08em;
      color: var(--faint);
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 12px;
    }

    @media print {
      body { padding: 24px; }
      .skill { border-color: #ccc; }
    }
  </style>
</head>
<body>
<div class="page">

  <header>
    <div>
      <div class="name">AJAYI KOLADE <span>ENITAN</span></div>
      <div class="role">Full Stack Developer &nbsp;·&nbsp; Frontend Engineer</div>
    </div>
    <div class="contact-block">
      ajayi.enitan45@gmail.com<br/>
      08102656596<br/>
      4, Lola Fadeyibi St, Yakoyo, Ojodu Berger
    </div>
  </header>

  <div class="section">
    <div class="section-title">Professional Summary</div>
    <p>Highly dedicated and innovative Full Stack Developer with strong expertise in building user-centric web applications. Passionate about clean code, modern web technologies, and delivering scalable, high-performance solutions. Adept at working in fast-paced environments while continuously learning and improving.</p>
  </div>

  <div class="section">
    <div class="section-title">Career Objective</div>
    <p>To secure a challenging role as a Frontend or Full Stack Developer where I can leverage my technical expertise, creativity, and problem-solving skills to build impactful digital solutions while continuously growing professionally.</p>
  </div>

  <div class="section">
    <div class="section-title">Area of Expertise</div>
    <ul>
      <li>Web Application Development</li>
      <li>Frontend Architecture &amp; UI Engineering</li>
      <li>Web Development Frameworks</li>
      <li>Web Servers &amp; Hosting</li>
      <li>Continuous Learning &amp; Optimization</li>
      <li>Collaboration &amp; Version Control (Git)</li>
    </ul>
  </div>

  <div class="section">
    <div class="section-title">Technical Skills</div>
    <div class="skills">
      ${["HTML5","CSS3","JavaScript (ES6+)","TypeScript","React","Redux Toolkit","Zustand","Tailwind CSS", "Strapi", "Bootstrap","Node.js", "NestJs","Express","MongoDB","Git & GitHub"]
        .map(s => `<span class="skill">${s}</span>`).join("")}
    </div>
  </div>

  <div class="section">
    <div class="section-title">Professional Experience</div>

    <div class="exp-entry">
      <div class="exp-head">
        <div class="exp-title">Frontend Engineer — Alert Microfinance Bank</div>
        <div class="exp-meta">2025 – Present</div>
      </div>
      <ul>
        <li>Designed and developed a user-friendly, responsive interface for a Banking platform.</li>
        <li>Built an accessible interface for the Alert Group Scholarship Platform.</li>
        <li>Worked with CMS tools to ensure scalability, content management, and maintainability.</li>
        <li>Improved middleware through clean UI design and optimised navigation.</li>
        <li>Designed a Solar Energy website GreenBucks</li>
        <li>Designed a landing page for a savings App GoldBucks</li>
      </ul>
    </div>

    <div class="exp-entry">
      <div class="exp-head">
        <div class="exp-title">Full Stack Developer — Elanci Travels</div>
        <div class="exp-meta">May 2023 – Jan 2026</div>
      </div>
      <ul>
        <li>Built and maintained modern web applications using React and Node.js.</li>
        <li>Optimised frontend performance and application scalability.</li>
        <li>Collaborated effectively in dynamic development environments.</li>
      </ul>
    </div>

    <div class="exp-entry">
      <div class="exp-head">
        <div class="exp-title">Web Developer — Myt Travels</div>
        <div class="exp-meta">2023</div>
      </div>
      <ul>
        <li>Designed and developed a responsive interface for a travel booking platform.</li>
        <li>Improved UX through clean UI design and optimised navigation.</li>
        <li>Handled ongoing website functionality, updates, and maintenance.</li>
      </ul>
    </div>
  </div>

  <div class="section">
    <div class="section-title">Soft Skills</div>
    <div class="two-col">
      <div><ul><li>Problem Solving</li><li>Effective Communication</li><li>Time Management</li></ul></div>
      <div><ul><li>Attention to Detail</li><li>Team Collaboration</li></ul></div>
    </div>
  </div>

  <div class="section">
    <div class="section-title">Hobbies &amp; Interests</div>
    <div class="two-col">
      <div><ul><li>Music</li><li>Sports</li><li>Coding &amp; Programming</li></ul></div>
      <div><ul><li>Robotics</li><li>Artificial Intelligence</li><li>Technology Innovation</li></ul></div>
    </div>
  </div>

  <div class="section">
    <div class="section-title">References</div>
    <p>Available on request.</p>
  </div>

  <footer>
    <span>Ajayi Kolade Enitan</span>
    <span>Downloaded ${new Date().toLocaleDateString("en-GB", { day:"numeric", month:"long", year:"numeric" })}</span>
  </footer>

</div>
</body>
</html>`;

// ── Component ────────────────────────────────────────────────────────────────

const Navbar = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (val: boolean) => void;
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [open]);

  // Track scroll for subtle navbar shrink
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleDownloadResume = () => {
    const blob = new Blob([buildResumeHTML()], { type: "text/html" });
    const url  = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href     = url;
    link.download = "Ajayi-Kolade-Enitan-Resume.html";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');
        ::selection { background: #4787ff; color: #0c0c0c; }
        .nav-font  { font-family: 'Syne', sans-serif; }
        .body-font { font-family: 'DM Sans', sans-serif; }
        .mono-font { font-family: 'DM Sans', monospace; }
      `}</style>

      {/* ── Navbar ── */}
      <motion.div
        className="body-font fixed top-0 left-0 w-full z-50 border-b"
        style={{
          background: "rgba(12,12,12,0.82)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderColor: "#1a1a1a",
        }}
        initial={false}
        animate={{
          paddingTop: scrolled ? 0 : 4,
          paddingBottom: scrolled ? 0 : 4,
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">

          {/* ── Logo ── */}
          <motion.a
            href="/"
            className="flex items-center gap-2.5 group"
            whileHover={{ x: 2 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {/* Small accent dot */}
            <span
              className="w-1.5 h-1.5 rounded-full transition-transform duration-300 group-hover:scale-150"
              style={{ background: "#4787ff" }}
            />
            <span
              className="nav-font text-base sm:text-lg font-bold tracking-tight"
              style={{ color: "#f0ebe0" }}
            >
              Enitan
              <span style={{ color: "#4787ff" }}>.</span>
            </span>
          </motion.a>

          {/* ── Desktop links ── */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="relative px-4 py-2 text-sm transition-colors duration-200 group"
                style={{ color: "#9a9080" }}
                whileHover={{ y: -1 }}
              >
                <span
                  className="mono-font text-[9px] tracking-widest mr-2 transition-colors duration-200 group-hover:text-[#4787ff]"
                  style={{ color: "#4a4a4a" }}
                >
                  {item.index}
                </span>
                <span className="transition-colors duration-200 group-hover:text-[#f0ebe0]">
                  {item.label}
                </span>

                {/* Hover underline */}
                <motion.span
                  className="absolute left-4 right-4 bottom-1 h-px"
                  style={{ background: "#4787ff" }}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                />
              </motion.a>
            ))}

            {/* Divider */}
            <span
              className="w-px h-5 mx-2"
              style={{ background: "#1f1f1f" }}
            />

            {/* Resume button */}
            <motion.button
              onClick={handleDownloadResume}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="inline-flex items-center cursor-pointer gap-3 group"
            >
              <span
                className="mono-font text-[10px] tracking-[0.2em] uppercase transition-colors duration-200 group-hover:text-[#f0ebe0]"
                style={{ color: "#6b6b6b" }}
              >
                Resume
              </span>
              <motion.span
                className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: "#4787ff" }}
                whileHover={{ rotate: 45 }}
                transition={{ duration: 0.3 }}
              >
                <Download className="w-3.5 h-3.5" style={{ color: "#0c0c0c" }} />
              </motion.span>
            </motion.button>
          </nav>

          {/* ── Mobile toggle ── */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center transition-colors"
            style={{ color: "#f0ebe0" }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={22} />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={22} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.div>

      {/* ── Mobile backdrop ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-30 md:hidden"
            style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(6px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          />
        )}
      </AnimatePresence>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed top-0 right-0 h-screen w-[85vw] max-w-sm z-40 md:hidden flex flex-col"
            style={{ background: "#0c0c0c", borderLeft: "1px solid #1a1a1a" }}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 32 }}
          >
            {/* Drawer header */}
            <div
              className="flex items-center justify-between px-6 py-5 border-b"
              style={{ borderColor: "#1a1a1a" }}
            >
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#4787ff" }} />
                <span
                  className="mono-font text-[10px] tracking-[0.3em] uppercase"
                  style={{ color: "#6b6b6b" }}
                >
                  Menu
                </span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200"
                style={{ color: "#6b6b6b", border: "1px solid #1f1f1f" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#f0ebe0";
                  e.currentTarget.style.borderColor = "#4787ff55";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#6b6b6b";
                  e.currentTarget.style.borderColor = "#1f1f1f";
                }}
                aria-label="Close menu"
              >
                <X size={16} />
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col px-6 py-8 gap-1 flex-1">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex items-center justify-between py-4 border-b"
                  style={{ borderColor: "#1a1a1a" }}
                >
                  <div className="flex items-baseline gap-3">
                    <span
                      className="mono-font text-[10px] tracking-widest transition-colors duration-200 group-hover:text-[#4787ff]"
                      style={{ color: "#4a4a4a" }}
                    >
                      {item.index}
                    </span>
                    <span
                      className="nav-font text-xl font-bold transition-colors duration-200 group-hover:text-[#4787ff]"
                      style={{ color: "#f0ebe0" }}
                    >
                      {item.label}
                    </span>
                  </div>

                  <motion.div
                    className="w-7 h-7 rounded-full flex items-center justify-center opacity-40 transition-opacity duration-200 group-hover:opacity-100"
                    style={{ border: "1px solid #1f1f1f" }}
                  >
                    <ArrowUpRight size={12} style={{ color: "#4787ff" }} />
                  </motion.div>
                </motion.a>
              ))}
            </nav>

            {/* Resume button at bottom */}
            <div className="px-6 pb-10">
              <motion.button
                onClick={() => {
                  handleDownloadResume();
                  setOpen(false);
                }}
                whileTap={{ scale: 0.97 }}
                className="w-full inline-flex items-center justify-between gap-3 py-4 px-5 rounded-full font-semibold text-sm group"
                style={{
                  background: "#4787ff",
                  color: "#0c0c0c",
                  fontFamily: "'Syne', sans-serif",
                }}
              >
                <span className="flex items-center gap-2.5">
                  <Download className="w-4 h-4" />
                  Download Resume
                </span>
                <motion.span
                  className="w-7 h-7 rounded-full flex items-center justify-center"
                  style={{ background: "#0c0c0c" }}
                  whileHover={{ rotate: 45 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowUpRight className="w-3 h-3" style={{ color: "#4787ff" }} />
                </motion.span>
              </motion.button>

              <p
                className="mono-font text-[10px] tracking-widest uppercase text-center mt-5"
                style={{ color: "#4a4a4a" }}
              >
                © {new Date().getFullYear()} Enitan Ajayi
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;