import { Download, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

const navItems = [
  { label: "About",    href: "#about"    },
  { label: "Skills",   href: "#skills"   },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact"  },
];

// ── Resume HTML (restyled to match editorial theme) ──────────────────────────
const buildResumeHTML = () => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Ajayi Kolade Enitan — Resume</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:ital,wght@0,300;0,400;1,300&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --ink:   #0c0c0c;
      --cream: #f0ebe0;
      --acid:  #cfff47;
      --muted: #888;
      --rule:  #2a2a2a;
    }

    body {
      font-family: 'DM Sans', sans-serif;
      background: var(--ink);
      color: var(--cream);
      padding: 48px 24px;
      line-height: 1.7;
    }

    .page {
      max-width: 820px;
      margin: auto;
    }

    /* ── Header ── */
    header {
      border-bottom: 1px solid var(--rule);
      padding-bottom: 28px;
      margin-bottom: 40px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      flex-wrap: wrap;
      gap: 16px;
    }

    .name {
      font-family: 'Syne', sans-serif;
      font-size: 42px;
      font-weight: 800;
      line-height: 1;
      color: var(--cream);
    }

    .name span { color: var(--acid); }

    .role {
      font-size: 13px;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--muted);
      margin-top: 8px;
    }

    .contact-block {
      text-align: right;
      font-size: 13px;
      color: var(--muted);
      line-height: 1.9;
    }

    /* ── Sections ── */
    .section { margin-bottom: 36px; }

    .section-title {
      font-family: 'Syne', sans-serif;
      font-size: 11px;
      letter-spacing: 0.28em;
      text-transform: uppercase;
      color: var(--acid);
      margin-bottom: 14px;
      padding-bottom: 8px;
      border-bottom: 1px solid var(--rule);
    }

    p { color: #b0a89a; font-size: 14px; margin-bottom: 8px; }

    ul { padding-left: 18px; }
    ul li { font-size: 14px; color: #b0a89a; margin-bottom: 6px; }

    /* ── Skills pills ── */
    .skills { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 4px; }
    .skill {
      background: #1a1a1a;
      border: 1px solid #2e2e2e;
      color: var(--cream);
      font-size: 12px;
      padding: 5px 14px;
      border-radius: 100px;
      font-family: 'DM Sans', monospace;
    }

    /* ── Experience entries ── */
    .exp-entry { margin-bottom: 22px; }
    .exp-title {
      font-family: 'Syne', sans-serif;
      font-size: 15px;
      font-weight: 700;
      color: var(--cream);
    }
    .exp-meta {
      font-size: 12px;
      color: var(--acid);
      margin-bottom: 8px;
      letter-spacing: 0.05em;
    }

    /* ── Two column ── */
    .two-col { display: flex; gap: 48px; flex-wrap: wrap; }
    .two-col > div { flex: 1; min-width: 220px; }

    /* ── Footer ── */
    footer {
      margin-top: 48px;
      padding-top: 16px;
      border-top: 1px solid var(--rule);
      font-size: 12px;
      color: var(--muted);
      display: flex;
      justify-content: space-between;
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
      ${["HTML5","CSS3","JavaScript (ES6+)","TypeScript","React","Redux Toolkit","Zustand","Tailwind CSS","Bootstrap","Node.js","Express","MongoDB","WordPress","Git & GitHub"]
        .map(s => `<span class="skill">${s}</span>`).join("")}
    </div>
  </div>

  <div class="section">
    <div class="section-title">Professional Experience</div>

    <div class="exp-entry">
      <div class="exp-title">Frontend Engineer — Alert Microfinance Bank</div>
      <div class="exp-meta">2025 – Present</div>
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
      <div class="exp-title">Full Stack Developer — Elanci Travels</div>
      <div class="exp-meta">May 2023 – Jan 2026</div>
      <ul>
        <li>Built and maintained modern web applications using React and Node.js.</li>
        <li>Optimised frontend performance and application scalability.</li>
        <li>Collaborated effectively in dynamic development environments.</li>
      </ul>
    </div>

    <div class="exp-entry">
      <div class="exp-title">Web Developer — Myt Travels</div>
      <div class="exp-meta">2023</div>
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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [open]);

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
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400&display=swap');
        .nav-font { font-family: 'Syne', sans-serif; }
        .body-font { font-family: 'DM Sans', sans-serif; }
      `}</style>

      {/* ── Desktop / scrolled navbar ── */}
      <div
        className="body-font fixed top-0 left-0 w-full z-50 border-b"
        style={{
          background: "rgba(12,12,12,0.88)",
          backdropFilter: "blur(14px)",
          borderColor: "#1e1e1e",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <a
            href="/"
            className="nav-font text-xl font-bold tracking-tight"
            style={{ color: "#f0ebe0" }}
          >
            Enitan
            <span style={{ color: "#4787ff" }}>.</span>
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm transition-colors duration-200"
                style={{ color: "#888" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#f0ebe0")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
              >
                {item.label}
              </a>
            ))}

            <motion.button
              onClick={handleDownloadResume}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center cursor-pointer gap-2 px-4 py-2 rounded-full text-sm font-semibold"
              style={{ background: "#4787ff", color: "#ffffff" }}
            >
              <Download className="w-3.5 h-3.5" />
              Resume
            </motion.button>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-1 transition-colors"
            style={{ color: "#f0ebe0" }}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ── Mobile backdrop ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-30 md:hidden"
            style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed top-0 right-0 h-screen w-72 z-40 md:hidden flex flex-col"
            style={{ background: "#111", borderLeft: "1px solid #1e1e1e" }}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring" as const, stiffness: 300, damping: 30 }}
          >
            {/* Drawer header */}
            <div
              className="flex items-center justify-between px-6 py-5 border-b"
              style={{ borderColor: "#1e1e1e" }}
            >
              <span className="nav-font font-bold" style={{ color: "#f0ebe0" }}>
                Menu
              </span>
              <button onClick={() => setOpen(false)} style={{ color: "#888" }}>
                <X size={20} />
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
                  transition={{ delay: i * 0.07 }}
                  className="py-3 text-lg border-b flex items-center justify-between group"
                  style={{ color: "#888", borderColor: "#1a1a1a" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#f0ebe0")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
                >
                  {item.label}
                  <span
                    className="text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: "#4787ff" }}
                  >
                    →
                  </span>
                </motion.a>
              ))}
            </nav>

            {/* Resume button at bottom */}
            <div className="px-6 pb-10">
              <motion.button
                onClick={handleDownloadResume}
                whileTap={{ scale: 0.97 }}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full font-semibold text-sm"
                style={{ background: "#4787ff", color: "#0c0c0c" }}
              >
                <Download className="w-4 h-4" />
                Download Resume
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;