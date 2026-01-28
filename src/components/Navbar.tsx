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
            <span className="bg-[#D8C99B] animate-pulse p-2 rounded-full font-bold hover:bg-[#D8C99B]/80">EA</span>
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
              href="/resume.pdf"
              target="_blank"
              className="px-4 py-2 text-sm text-[#D8C99B] font-medium border border-[#D8C99B] rounded-lg hover:bg-gray-900 transition"
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
                href="/resume.pdf"
                target="_blank"
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
