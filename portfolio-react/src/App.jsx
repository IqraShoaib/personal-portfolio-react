  import Navbar from "./components/Navbar";
  import Home from "./components/Home";
  import About from "./components/About";
  import Education from "./components/Education";
  import Skills from "./components/Skills";
  import Projects from "./components/Projects";
  import Articles from "./components/Articles";
  import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";


  function App() {
    return (  
    <>
     
    <Navbar />
    <Home />
    <About /> 
     <Education />
    <Skills />
   <Projects />
    <Testimonials />
   <Articles />
    <Contact />
  
    
    <div className="last-text">
      <p>Developed By Iqra Nisar</p>
    </div>
    <a href="#" className="top"><i className="bx bx-up-arrow-alt" /></a>
    </>
    );
    }
  

  export default App;