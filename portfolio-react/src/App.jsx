  import Navbar from "./components/Navbar";
  import Home from "./components/Home";
  import About from "./components/About";
  import Education from "./components/Education";
  import Skills from "./components/Skills";
  import Projects from "./components/Projects";
  import Articles from "./components/Articles";
  import Contact from "./components/Contact";
  import Testimonials from "./components/Testimonials";
  import { motion, useScroll } from "framer-motion";


  function App() {
    const { scrollYProgress } = useScroll();
    return (  
    <>
     <motion.div
  className="progress-bar"
  style={{ scaleX: scrollYProgress }}
/>
    <Navbar />

    <main>
    <Home />
    <About /> 
     <Education />
    <Skills />
   <Projects />
    <Testimonials />
   <Articles />
    <Contact />
  </main>
    
    <div className="last-text">
      <p>Developed By Iqra Nisar</p>
    </div>
    <a
  href="#home"
  className="top"
  aria-label="Back to top"
  title="Back to top"
>
  <i className="bx bx-up-arrow-alt" aria-hidden="true"></i>
</a>
    </>
    );
    }
  

  export default App;