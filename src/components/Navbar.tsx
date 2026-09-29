import { Download, Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { label: "About",    href: "#about",    index: "01" },
  { label: "Skills",   href: "#skills",   index: "02" },
  { label: "Projects", href: "#projects", index: "03" },
  { label: "Contact",  href: "#contact",  index: "04" },
];




const buildResumeHTML = () => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Ajayi Kolade Enitan — Resume</title>

  <style>
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    :root {
      --bg: #08090b;
      --sidebar: #0d0f12;
      --card: #111418;
      --card-2: #15191e;
      --line: #252a30;

      --white: #f5f7fa;
      --text: #d3d7dc;
      --muted: #8d949d;
      --dim: #626a74;

      --accent: #5b8cff;
      --accent-soft: rgba(91, 140, 255, 0.10);
      --accent-border: rgba(91, 140, 255, 0.25);
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      font-family: 'DM Sans', sans-serif;
      background:
        radial-gradient(
          circle at 85% 0%,
          rgba(91, 140, 255, 0.08),
          transparent 28%
        ),
        var(--bg);
      color: var(--text);
      line-height: 1.6;
      font-size: 13px;
      -webkit-font-smoothing: antialiased;
    }

    .resume {
      width: 100%;
      max-width: 1120px;
      margin: 50px auto;
      padding: 0 28px;
    }

    /*
    ============================================================
    MAIN GRID
    ============================================================
    */

    .resume-grid {
      display: grid;
      grid-template-columns: 280px minmax(0, 1fr);
      min-height: 1100px;
      border: 1px solid var(--line);
      background: var(--card);
      box-shadow: 0 30px 80px rgba(0, 0, 0, 0.35);
    }

    /*
    ============================================================
    SIDEBAR
    ============================================================
    */

    .sidebar {
      background:
        linear-gradient(
          180deg,
          rgba(91, 140, 255, 0.05),
          transparent 35%
        ),
        var(--sidebar);

      border-right: 1px solid var(--line);
      padding: 38px 28px;
      display: flex;
      flex-direction: column;
    }

    .profile-mark {
      width: 58px;
      height: 58px;
      border-radius: 16px;

      display: flex;
      align-items: center;
      justify-content: center;

      background: var(--accent-soft);
      border: 1px solid var(--accent-border);

      color: var(--accent);

      font-family: 'Manrope', sans-serif;
      font-size: 20px;
      font-weight: 800;

      margin-bottom: 24px;
    }

    .sidebar-name {
      font-family: 'Manrope', sans-serif;
      color: var(--white);
      font-size: 23px;
      font-weight: 800;
      line-height: 1.12;
      letter-spacing: -0.04em;
    }

    .sidebar-name span {
      color: var(--accent);
    }

    .sidebar-role {
      margin-top: 10px;

      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      line-height: 1.7;
      letter-spacing: 0.13em;
      text-transform: uppercase;

      color: var(--muted);
    }

    .sidebar-divider {
      height: 1px;
      background: var(--line);
      margin: 30px 0;
    }

    .sidebar-section {
      margin-bottom: 30px;
    }

    .sidebar-title {
      display: flex;
      align-items: center;
      gap: 8px;

      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      letter-spacing: 0.18em;
      text-transform: uppercase;

      color: var(--white);

      margin-bottom: 15px;
    }

    .sidebar-title::before {
      content: '';
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: var(--accent);
      box-shadow: 0 0 0 4px var(--accent-soft);
    }

    .contact-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .contact-item {
      color: var(--muted);
      font-size: 11px;
      line-height: 1.5;
      word-break: break-word;
    }

    .contact-label {
      display: block;

      font-family: 'JetBrains Mono', monospace;
      font-size: 8px;
      text-transform: uppercase;
      letter-spacing: 0.13em;

      color: var(--dim);
      margin-bottom: 3px;
    }

    .skill-list {
      display: flex;
      flex-wrap: wrap;
      gap: 7px;
    }

    .skill {
      padding: 6px 9px;

      border: 1px solid var(--line);
      border-radius: 7px;

      background: rgba(255, 255, 255, 0.015);

      color: var(--text);

      font-size: 9.5px;
      font-family: 'JetBrains Mono', monospace;
    }

    .simple-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .simple-list li {
      position: relative;
      padding-left: 13px;

      color: var(--muted);
      font-size: 11px;
    }

    .simple-list li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 9px;

      width: 4px;
      height: 4px;
      border-radius: 50%;

      background: var(--accent);
    }

    .sidebar-bottom {
      margin-top: auto;
      padding-top: 30px;
    }

    .availability {
      padding: 14px;

      border: 1px solid var(--line);
      background: var(--card);

      border-radius: 10px;
    }

    .availability-top {
      display: flex;
      align-items: center;
      gap: 8px;

      color: var(--white);

      font-size: 10px;
      font-weight: 600;
    }

    .status-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #57d68d;
      box-shadow: 0 0 0 4px rgba(87, 214, 141, 0.08);
    }

    .availability p {
      margin-top: 7px;

      color: var(--dim);
      font-size: 9.5px;
      line-height: 1.6;
    }

    /*
    ============================================================
    MAIN CONTENT
    ============================================================
    */

    .main {
      padding: 42px 44px;
    }

    .hero {
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: end;
      gap: 30px;

      padding-bottom: 34px;
      border-bottom: 1px solid var(--line);

      margin-bottom: 34px;
    }

    .eyebrow {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--accent);
      margin-bottom: 11px;
    }

    .hero-title {
      font-family: 'Manrope', sans-serif;

      color: var(--white);
      font-size: 35px;
      line-height: 1.1;
      letter-spacing: -0.045em;
      font-weight: 800;
    }

    .hero-description {
      max-width: 600px;

      margin-top: 15px;

      color: var(--muted);
      font-size: 12.5px;
      line-height: 1.75;
    }

    .hero-number {
      text-align: right;

      font-family: 'Manrope', sans-serif;
      font-size: 52px;
      line-height: 1;

      color: rgba(255, 255, 255, 0.045);
      font-weight: 800;
      letter-spacing: -0.06em;
    }

    /*
    ============================================================
    SECTION
    ============================================================
    */

    .section {
      margin-bottom: 38px;
    }

    .section-heading {
      display: flex;
      align-items: center;
      gap: 13px;

      margin-bottom: 18px;
    }

    .section-number {
      font-family: 'JetBrains Mono', monospace;

      color: var(--accent);
      font-size: 9px;
      letter-spacing: 0.08em;
    }

    .section-heading h2 {
      font-family: 'Manrope', sans-serif;

      color: var(--white);
      font-size: 15px;
      font-weight: 700;
      letter-spacing: -0.02em;
    }

    .section-heading-line {
      flex: 1;
      height: 1px;
      background: var(--line);
    }

    .summary {
      color: var(--muted);
      font-size: 12.5px;
      line-height: 1.8;
      max-width: 850px;
    }

    /*
    ============================================================
    EXPERIENCE
    ============================================================
    */

    .experience {
      display: flex;
      flex-direction: column;
      gap: 14px;
    }

    .experience-card {
      position: relative;

      padding: 20px 21px;

      border: 1px solid var(--line);
      background: rgba(255, 255, 255, 0.012);

      border-radius: 11px;
    }

    .experience-card::before {
      content: '';

      position: absolute;
      left: -1px;
      top: 18px;
      bottom: 18px;

      width: 2px;

      background: var(--accent);
      border-radius: 10px;
      opacity: 0.8;
    }

    .experience-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 20px;

      margin-bottom: 13px;
    }

    .experience-role {
      color: var(--white);

      font-family: 'Manrope', sans-serif;
      font-size: 14px;
      font-weight: 700;

      line-height: 1.35;
    }

    .experience-company {
      display: block;

      color: var(--accent);

      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      letter-spacing: 0.08em;
      text-transform: uppercase;

      margin-top: 5px;
    }

    .experience-index {
      flex-shrink: 0;

      width: 30px;
      height: 30px;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 8px;

      border: 1px solid var(--line);

      color: var(--dim);

      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
    }

    .experience-list {
      list-style: none;
      display: grid;
      gap: 7px;
    }

    .experience-list li {
      position: relative;
      padding-left: 16px;

      color: var(--muted);
      font-size: 11.5px;
      line-height: 1.65;
    }

    .experience-list li::before {
      content: '→';

      position: absolute;
      left: 0;
      top: 0;

      color: var(--accent);
      font-size: 10px;
    }

    /*
    ============================================================
    EXPERTISE GRID
    ============================================================
    */

    .expertise-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }

    .expertise-card {
      padding: 15px 16px;

      background: var(--card-2);
      border: 1px solid var(--line);
      border-radius: 9px;
    }

    .expertise-number {
      color: var(--accent);

      font-family: 'JetBrains Mono', monospace;
      font-size: 8px;
    }

    .expertise-card h3 {
      margin-top: 7px;

      color: var(--white);

      font-family: 'Manrope', sans-serif;
      font-size: 11px;
      font-weight: 600;
    }

    /*
    ============================================================
    BOTTOM GRID
    ============================================================
    */

    .bottom-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 34px;
    }

    .compact-list {
      list-style: none;
      display: grid;
      gap: 8px;
    }

    .compact-list li {
      color: var(--muted);
      font-size: 11px;

      display: flex;
      align-items: center;
      gap: 9px;
    }

    .compact-list li::before {
      content: '';

      width: 5px;
      height: 5px;

      border-radius: 50%;
      background: var(--accent);
      flex-shrink: 0;
    }

    /*
    ============================================================
    FOOTER
    ============================================================
    */

    .footer {
      margin-top: 42px;
      padding-top: 18px;

      border-top: 1px solid var(--line);

      display: flex;
      justify-content: space-between;
      gap: 15px;

      font-family: 'JetBrains Mono', monospace;
      font-size: 8px;
      letter-spacing: 0.08em;
      text-transform: uppercase;

      color: var(--dim);
    }

    /*
    ============================================================
    PRINT
    ============================================================
    */

    @media print {

      body {
        background: #fff;
        color: #222;
        font-size: 11px;
      }

      .resume {
        margin: 0;
        max-width: none;
        padding: 0;
      }

      .resume-grid {
        border: none;
        box-shadow: none;
        min-height: auto;
      }

      .sidebar {
        background: #f5f6f8;
        border-right: 1px solid #ddd;
      }

      .main {
        background: #fff;
      }

      .sidebar-name,
      .hero-title,
      .section-heading h2,
      .experience-role,
      .expertise-card h3,
      .availability-top {
        color: #111;
      }

      .sidebar-role,
      .contact-item,
      .simple-list li,
      .hero-description,
      .summary,
      .experience-list li,
      .compact-list li {
        color: #444;
      }

      .skill,
      .experience-card,
      .expertise-card,
      .availability {
        background: #fafafa;
        border-color: #ddd;
      }

      .hero-number {
        color: #eee;
      }

      .section,
      .experience-card {
        page-break-inside: avoid;
      }
    }

    /*
    ============================================================
    RESPONSIVE
    ============================================================
    */

    @media (max-width: 820px) {

      .resume {
        margin: 25px auto;
        padding: 0 16px;
      }

      .resume-grid {
        grid-template-columns: 1fr;
      }

      .sidebar {
        border-right: none;
        border-bottom: 1px solid var(--line);
      }

      .sidebar-bottom {
        margin-top: 20px;
      }

      .main {
        padding: 32px 25px;
      }

      .hero {
        grid-template-columns: 1fr;
      }

      .hero-number {
        display: none;
      }
    }

    @media (max-width: 560px) {

      .resume {
        padding: 0 10px;
        margin: 15px auto;
      }

      .sidebar {
        padding: 28px 22px;
      }

      .main {
        padding: 28px 20px;
      }

      .hero-title {
        font-size: 29px;
      }

      .expertise-grid,
      .bottom-grid {
        grid-template-columns: 1fr;
      }

      .experience-header {
        gap: 10px;
      }

      .experience-role {
        font-size: 13px;
      }

      .footer {
        flex-direction: column;
      }
    }
  </style>
</head>

<body>

<div class="resume">

  <div class="resume-grid">

    <!-- =====================================================
         SIDEBAR
         ===================================================== -->

    <aside class="sidebar">

      <div class="profile-mark">
        AE
      </div>

      <div class="sidebar-name">
        AJAYI KOLADE<br />
        <span>ENITAN</span>
      </div>

      <div class="sidebar-role">
        Full Stack Developer<br />
        Frontend Engineer
      </div>

      <div class="sidebar-divider"></div>

      <!-- CONTACT -->

      <div class="sidebar-section">

        <div class="sidebar-title">
          Contact
        </div>

        <div class="contact-list">

          <div class="contact-item">
            <span class="contact-label">Email</span>
            ajayi.enitan45@gmail.com
          </div>

          <div class="contact-item">
            <span class="contact-label">Phone</span>
            08102656596
          </div>

          <div class="contact-item">
            <span class="contact-label">Location</span>
            4, Lola Fadeyibi St,<br />
            Yakoyo, Ojodu Berger Lagos State.Nigeria
          </div>

        </div>

      </div>

      <!-- TECHNOLOGY -->

      <div class="sidebar-section">

        <div class="sidebar-title">
          Technologies
        </div>

        <div class="skill-list">

          ${[
            "HTML5",
            "CSS3",
            "JavaScript",
            "TypeScript",
            "React",
            "Redux Toolkit",
            "Zustand",
            "Tailwind CSS",
            "Strapi",
            "Bootstrap",
            "Node.js",
            "NestJS",
            "Express",
            "MongoDB",
            "Git",
            "GitHub"
          ].map(skill => `
            <span class="skill">${skill}</span>
          `).join("")}

        </div>

      </div>

      <!-- SOFT SKILLS -->

      <div class="sidebar-section">

        <div class="sidebar-title">
          Strengths
        </div>

        <ul class="simple-list">
          <li>Problem Solving</li>
          <li>Effective Communication</li>
          <li>Time Management</li>
          <li>Attention to Detail</li>
          <li>Team Collaboration</li>
        </ul>

      </div>

      <!-- INTERESTS -->

      <div class="sidebar-section">

        <div class="sidebar-title">
          Interests
        </div>

        <ul class="simple-list">
          <li>Technology Innovation</li>
          <li>Artificial Intelligence</li>
          <li>Coding & Programming</li>
          <li>Robotics</li>
          <li>Sports</li>
          <li>Music</li>
        </ul>

      </div>

      <div class="sidebar-bottom">

        <div class="availability">

          <div class="availability-top">
            <span class="status-dot"></span>
            Developer Profile
          </div>

          <p>
            Focused on building scalable, performant
            and user-centered digital products.
          </p>

        </div>

      </div>

    </aside>


    <!-- =====================================================
         MAIN CONTENT
         ===================================================== -->

    <main class="main">

      <!-- HERO -->

      <section class="hero">

        <div>

          <div class="eyebrow">
            Professional Profile
          </div>

          <h1 class="hero-title">
            Building modern digital
            experiences that work.
          </h1>

          <p class="hero-description">
            Dedicated Full Stack Developer and Frontend Engineer
            focused on creating responsive, scalable and
            user-centered web applications using modern
            JavaScript technologies.
          </p>

        </div>

        <div class="hero-number">
          01
        </div>

      </section>


      <!-- SUMMARY -->

      <section class="section">

        <div class="section-heading">
          <span class="section-number">01</span>
          <h2>Professional Summary</h2>
          <span class="section-heading-line"></span>
        </div>

        <p class="summary">
          Highly dedicated and innovative Full Stack Developer
          with strong expertise in building user-centric web
          applications. Passionate about clean code, modern
          web technologies and delivering scalable,
          high-performance solutions. Experienced in working
          within fast-paced development environments while
          continuously learning, improving and adapting to
          emerging technologies.
        </p>

      </section>


      <!-- EXPERTISE -->

      <section class="section">

        <div class="section-heading">
          <span class="section-number">02</span>
          <h2>Core Expertise</h2>
          <span class="section-heading-line"></span>
        </div>

        <div class="expertise-grid">

          <div class="expertise-card">
            <span class="expertise-number">01</span>
            <h3>Web Application Development</h3>
          </div>

          <div class="expertise-card">
            <span class="expertise-number">02</span>
            <h3>Frontend Architecture & UI Engineering</h3>
          </div>

          <div class="expertise-card">
            <span class="expertise-number">03</span>
            <h3>Modern Web Frameworks</h3>
          </div>

          <div class="expertise-card">
            <span class="expertise-number">04</span>
            <h3>Web Servers & Hosting</h3>
          </div>

          <div class="expertise-card">
            <span class="expertise-number">05</span>
            <h3>Performance & Optimization</h3>
          </div>

          <div class="expertise-card">
            <span class="expertise-number">06</span>
            <h3>Git, GitHub & Team Collaboration</h3>
          </div>

        </div>

      </section>


      <!-- EXPERIENCE -->

      <section class="section">

        <div class="section-heading">
          <span class="section-number">03</span>
          <h2>Professional Experience</h2>
          <span class="section-heading-line"></span>
        </div>

        <div class="experience">

          <!-- ALERT -->

          <article class="experience-card">

            <div class="experience-header">

              <div>

                <div class="experience-role">
                  Frontend Engineer
                </div>

                <span class="experience-company">
                  Alert Microfinance Bank
                </span>

              </div>

              <div class="experience-index">
                01
              </div>

            </div>

            <ul class="experience-list">

              <li>
                Designed and developed responsive user interfaces
                for a modern banking platform.
              </li>

              <li>
                Built an accessible and user-friendly interface
                for the Alert Group Scholarship Platform.
              </li>

              <li>
                Integrated CMS-driven content to improve
                scalability, maintainability and content management.
              </li>

              <li>
                Improved navigation, usability and frontend
                architecture through clean UI implementation.
              </li>

              <li>
                Designed and developed the GreenBucks Solar
                Energy website.
              </li>

              <li>
                Designed and developed the GoldBucks savings
                application landing experience.
              </li>

            </ul>

          </article>


          <!-- ELANCI -->

          <article class="experience-card">

            <div class="experience-header">

              <div>

                <div class="experience-role">
                  Full Stack Developer
                </div>

                <span class="experience-company">
                  Elanci Travels
                </span>

              </div>

              <div class="experience-index">
                02
              </div>

            </div>

            <ul class="experience-list">

              <li>
                Built and maintained modern web applications
                using React and Node.js.
              </li>

              <li>
                Optimized frontend performance and improved
                application scalability.
              </li>

              <li>
                Collaborated within dynamic development
                environments to deliver functional digital products.
              </li>

            </ul>

          </article>


          <!-- MYT -->

          <article class="experience-card">

            <div class="experience-header">

              <div>

                <div class="experience-role">
                  Web Developer
                </div>

                <span class="experience-company">
                  Myt Travels
                </span>

              </div>

              <div class="experience-index">
                03
              </div>

            </div>

            <ul class="experience-list">

              <li>
                Designed and developed a responsive interface
                for a travel booking platform.
              </li>

              <li>
                Improved user experience through clean UI,
                responsive layouts and optimized navigation.
              </li>

              <li>
                Managed ongoing website functionality,
                maintenance and content updates.
              </li>

            </ul>

          </article>

        </div>

      </section>


      <!-- CAREER OBJECTIVE -->

      <section class="section">

        <div class="section-heading">
          <span class="section-number">04</span>
          <h2>Career Objective</h2>
          <span class="section-heading-line"></span>
        </div>

        <p class="summary">
          To contribute as a Frontend or Full Stack Developer
          in an environment where I can apply my technical
          expertise, creativity and problem-solving skills to
          build impactful digital products while continuing
          to grow professionally and technically.
        </p>

      </section>


      <!-- BOTTOM -->

      <div class="bottom-grid">

        <section>

          <div class="section-heading">
            <span class="section-number">05</span>
            <h2>Professional Strengths</h2>
            <span class="section-heading-line"></span>
          </div>

          <ul class="compact-list">
            <li>Problem Solving</li>
            <li>Communication</li>
            <li>Time Management</li>
            <li>Attention to Detail</li>
            <li>Team Collaboration</li>
          </ul>

        </section>


        <section>

          <div class="section-heading">
            <span class="section-number">06</span>
            <h2>References</h2>
            <span class="section-heading-line"></span>
          </div>

          <p class="summary">
            Professional references are available upon request.
          </p>

        </section>

      </div>


      <!-- FOOTER -->

      <footer class="footer">

        <span>
          Ajayi Kolade Enitan
        </span>

        <span>
          ${new Date().toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric"
          })}
        </span>

      </footer>

    </main>

  </div>

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