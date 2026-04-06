import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import HomePage from "./components/HomePage"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

const App = () => {
  return (
    <div>
      <Navbar />
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
    </div>
  )
}

export default App
