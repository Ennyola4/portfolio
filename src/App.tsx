import { useState } from "react";
import { motion } from "framer-motion";

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <Navbar open={open} setOpen={setOpen} />

      {/* PUSHING CONTENT */}
      <motion.div
        animate={{
          x: open ? "-300px" : "0px",
          scale: open ? 0.95 : 1,
          borderRadius: open ? "16px" : "0px",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="pt-20 bg-white min-h-screen"
      >
        <HomePage />

        <section id="projects">
          <Projects />

          <section id="about">
            <About />
          </section>
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <Footer />
      </motion.div>
    </>
  );
};

export default App;