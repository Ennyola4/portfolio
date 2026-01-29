import { useState } from "react";
import { ArrowBigDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const navItems = [
  { label: "01. About", href: "#about" },
  { label: "02. Skills", href: "#skills" },
  { label: "03. Projects", href: "#projects" },
  { label: "04. Contact", href: "#contact" },
];

const navVariants: Variants = {
  hidden: {
    x: "100%",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};
const mobileMenuVariants: Variants = {
  hidden: {
    x: "100%",
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
  exit: {
    x: "100%",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleDownloadResume = () => {
  const resumeHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Enitan Ajayi - Frontend Engineer Resume</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          margin: 40px;
          color: #1f2937;
          line-height: 1.6;
          background: #f9fafb;
        }
        .resume-container {
          max-width: 800px;
          margin: auto;
          background: white;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        .header {
          text-align: center;
          border-bottom: 2px solid #D8C99B;
          padding-bottom: 20px;
          margin-bottom: 30px;
        }
        .name {
          font-size: 32px;
          font-weight: bold;
        }
        .role {
          font-size: 18px;
          color: #6b7280;
        }
        .section {
          margin-bottom: 30px;
        }
        .section-title {
          font-size: 20px;
          font-weight: bold;
          color: #D8C99B;
          margin-bottom: 10px;
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 5px;
        }
        ul {
          padding-left: 20px;
        }
        li {
          margin-bottom: 6px;
        }
        .skills span {
          display: inline-block;
          background: #f3f4f6;
          padding: 6px 12px;
          margin: 6px 6px 0 0;
          border-radius: 20px;
          font-size: 14px;
        }
        .footer {
          text-align: center;
          font-size: 13px;
          color: #6b7280;
          margin-top: 40px;
        }
      </style>
    </head>

    <body>
      <div class="resume-container">

        <div class="header">
          <div class="name">Ajayi Enitan</div>
          <div class="role">Frontend Engineer</div>
          <p>08102656596 • ajayi.enitan45@gmail.com</p>
        </div>

        <div class="section">
          <div class="section-title">Professional Summary</div>
          <p>
            Frontend Engineer with three years experience with strong experience building modern, responsive,
            and user-focused web applications. Proficient in JavaScript, TypeScript,
            React, and modern CSS frameworks, with backend knowledge using Node.js
            and MongoDB.
          </p>
        </div>

        <div class="section">
          <div class="section-title">Technical Skills</div>
          <div class="skills">
            <span>HTML5</span>
            <span>CSS3</span>
            <span>JavaScript (ES6+)</span>
            <span>TypeScript</span>
            <span>React</span>
            <span>Tailwind CSS</span>
            <span>Bootstrap</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Projects</div>
          <ul>
            <li>
              Built a responsive developer portfolio using React, Tailwind CSS,
              and Framer Motion.
            </li>
            <li>
              Developed reusable UI components and integrated REST APIs at AlertMFB.
            </li>
            <li>
              Implemented clean, scalable frontend architecture with modern
              JavaScript practices.
            </li>
          </ul>
        </div>

        <div class="section">
          <div class="section-title">Experience</div>
          <p><strong>Frontend Engineer – Personal & Freelance Projects</strong></p>
          <ul>
            <li>Developed and maintained React-based web applications (Business Banking)</li>
            <li>Collaborated with backend services using NextJs, Prisma Tailwind CSS and TypeScript</li>
            <li>Ensured responsive, accessible, and cross-browser UI</li>
          </ul>
        </div>

        <div class="section">
          <div class="section-title">Education</div>
          <p>New Horizon IT institution</p>
        </div>

        <div class="footer">
          Resume downloaded on ${new Date().toLocaleDateString()}
        </div>

      </div>
    </body>
    </html>
  `;

  // Create blob and download
  const blob = new Blob([resumeHTML], { type: "text/html" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "Enitan-Ajayi-Frontend-Engineer-Resume.html";

  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};


  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        className="fixed top-0 left-0 w-full z-50 bg-main backdrop-blur border-b shadow-lg"
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-xl font-semibold tracking-tight "
          >
            <span className="bg-[#D8C99B] animate-pulse p-2 rounded-full font-bold hover:bg-[#D8C99B]/80">AE</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-[#D8C99B] hover:text-gray-200 transition"
              >
                {item.label}
              </a>
            ))}

            <a
            onClick={handleDownloadResume}
              className="px-4 py-2 cursor-pointer text-sm text-[#D8C99B] font-medium border border-[#D8C99B] rounded-lg hover:bg-gray-900 transition"
            >
              <ArrowBigDown className="w-4 h-4 inline mr-1 animate-bounce" />
              Resume
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[#D8C99B]"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed top-0 right-0 h-screen w-3/4 max-w-sm bg-[#0a192f] z-40 shadow-xl md:hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex flex-col px-6 py-10 gap-6 mt-16">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-[#D8C99B]"
                >
                  {item.label}
                </a>
              ))}

              <a
               onClick={handleDownloadResume}
                className="mt-6 w-fit px-5 py-2 border border-[#64ffda] rounded text-[#64ffda]"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
