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
  <title>Ajayi Kolade Enitan - Full Stack Developer Resume</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 40px;
      color: #1f2937;
      line-height: 1.7;
      background: #f9fafb;
    }
    .resume-container {
      max-width: 850px;
      margin: auto;
      background: white;
      padding: 40px;
      border-radius: 14px;
      box-shadow: 0 15px 35px rgba(0,0,0,0.1);
    }
    .header {
      text-align: center;
      border-bottom: 3px solid #D8C99B;
      padding-bottom: 20px;
      margin-bottom: 30px;
    }
    .name {
      font-size: 34px;
      font-weight: bold;
    }
    .role {
      font-size: 18px;
      color: #6b7280;
      margin-top: 5px;
    }
    .contact {
      font-size: 14px;
      margin-top: 10px;
    }
    .section {
      margin-bottom: 28px;
    }
    .section-title {
      font-size: 20px;
      font-weight: bold;
      color: #D8C99B;
      margin-bottom: 10px;
      border-bottom: 1px solid #e5e7eb;
      padding-bottom: 6px;
    }
    ul {
      padding-left: 20px;
    }
    li {
      margin-bottom: 8px;
    }
    .skills span {
      display: inline-block;
      background: #f3f4f6;
      padding: 7px 14px;
      margin: 6px 6px 0 0;
      border-radius: 20px;
      font-size: 14px;
    }
    .two-column {
      display: flex;
      gap: 40px;
      flex-wrap: wrap;
    }
    .two-column div {
      flex: 1;
      min-width: 260px;
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
      <div class="name">AJAYI KOLADE ENITAN</div>
      <div class="role">Full Stack Developer | Frontend Engineer</div>
      <div class="contact">
         ajayi.enitan45@gmail.com * 08102656596 <br />
         4, Lola Fadeyibi Street, Yakoyo, Ojodu Berger
      </div>
    </div>

    <div class="section">
      <div class="section-title"> Professional Summary</div>
      <p>
        Highly dedicated and innovative Full Stack Developer with strong expertise in
        building user-centric web applications. Passionate about clean code,
        modern web technologies, and delivering scalable, high-performance solutions.
        Adept at working in fast-paced environments while continuously learning
        and improving.
      </p>
    </div>

    <div class="section">
      <div class="section-title">Career Objective</div>
      <p>
        To secure a challenging role as a Frontend or Full Stack Developer where I can
        leverage my technical expertise, creativity, and problem-solving skills to
        build impactful digital solutions while continuously growing professionally.
      </p>
    </div>

    <div class="section">
      <div class="section-title"> Area of Expertise</div>
      <ul>
        <li>Web Application Development</li>
        <li>Frontend Architecture & UI Engineering</li>
        <li>Web Development Frameworks</li>
        <li>Web Servers & Hosting</li>
        <li>Continuous Learning & Optimization</li>
        <li>Collaboration & Version Control (Git)</li>
      </ul>
    </div>

    <div class="section">
      <div class="section-title"> Technical Skills</div>
      <div class="skills">
        <span>HTML5</span>
        <span>Bootstrap</span>
        <span>CSS3</span>
        <span>JavaScript (ES6+)</span>
        <span>TypeScript</span>
        <span>React</span>
        <span>Redux toolkit</span>
        <span>Zustand</span> 
        <span>Tailwind CSS</span>
        <span>Bootstrap</span>
        <span>Node.js</span>
        <span>Express</span>
        <span>MongoDB</span>
        <span>WordPress</span>
        <span>Git & GitHub</span>
      </div>
    </div>

    <div class="section">
      <div class="section-title"> Professional Experience</div>
      <p><strong>Web Developer – Myt Travels</strong> (2023)</p>
      <ul>
        <li>Designed and developed a user-friendly and responsive interface for travel platforms.</li>
        <li>Improved user experience through clean UI design and optimized navigation.</li>
        <li>Worked with CMS tools to ensure scalability, content management, and maintainability.</li>
        <li>Handled website functionality, updates, and ongoing maintenance.</li>
      </ul>

       <p><strong>Frontend Engineer – Alert Microfinance Bank</strong> (2025)</p>
      <ul>
        <li>Designed and developed a user-friendly and responsive interface for Banking platform.</li>
        <li>Improved middleware through clean UI design and optimized navigation.</li>
         <li>Built a user-friendly and accessible interface for Alert Group Scholarship Platform.</li>
        <li>Worked with CMS tools to ensure scalability, content management, and maintainability.</li>
        <li>Handled website functionality, updates, and ongoing maintenance.</li>
      </ul>

      <p><strong>Full Stack Developer</strong> (may 2023 – jan 2026)</p>
      <ul>
        <li>Built and maintained modern web applications using React and Node.js.</li>
        <li>Optimized frontend performance and application scalability.</li>
        <li>Collaborated effectively in dynamic development environments.</li>
      </ul>
    </div>

    <div class="section">
      <div class="section-title"> Soft Skills</div>
      <ul>
        <li>Problem Solving</li>
        <li>Effective Communication</li>
        <li>Time Management</li>
        <li>Attention to Detail</li>
        <li>Team Collaboration</li>
      </ul>
    </div>

    <div class="section">
      <div class="section-title"> Hobbies & Interests</div>
      <div class="two-column">
        <div>
          <ul>
            <li> Music</li>
            <li> Sports</li>
            <li> Coding & Programming</li>
          </ul>
        </div>
        <div>
          <ul>
            <li> Robotics</li>
            <li> Artificial Intelligence</li>
            <li> Technology Innovation</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-title"> References</div>
      <p>Available on request</p>
    </div>

    <div class="footer">
      Resume downloaded on ${new Date().toLocaleDateString()}
    </div>

  </div>
</body>
</html>
  `;

  const blob = new Blob([resumeHTML], { type: "text/html" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "Ajayi-Kolade-Enitan-Full-Stack-Developer-Resume.html";

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
