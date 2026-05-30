import About from "../components/about/About"
import Certificate from "../components/Certificate/Certificate"
import Contact from "../components/contact/Contact"
import Education from "../components/Education/Education"
import Hero from "../components/hero/Hero"
import Footer from "../components/layout/Footer"
import Navbar from "../components/layout/Navbar"
import Projects from "../components/projects/Projects"

import Skills from "../components/skills/Skills"


const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education/>
      <Projects />
      <Certificate/>
       
      <Contact />
      <Footer />
    </>
  )
}

export default Home