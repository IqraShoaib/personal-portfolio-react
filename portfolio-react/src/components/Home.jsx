import { useEffect, useState, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
function Home() {
  const [profile, setProfile] = useState(null);
  const designationRef = useRef(null);

  // Fetch profile from backend
  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProfile(data.profile);
      })
      .catch((error) => console.error( error));
  }, []);

  // Typed.js animation
  useEffect(() => {
  console.log("Typed effect started");
  console.log("Profile:", profile);
  console.log("Span:", designationRef.current);

  if (!profile || !designationRef.current) return;

  const typed = new Typed(designationRef.current, {
    strings: ["Web Developer!", "Frontend Developer!"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });

  console.log("Typed initialized");

  return () => typed.destroy();
}, [profile]);

  if (!profile) {
  return (
    <div className="loader-container">
      <motion.div
        className="loader"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
      />
      <p>Loading...</p>
    </div>
  );
}

  return (
   <motion.section
  className="home"
  id="home"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
>
      <div className="home-content">
        <h3>Hello, It's Me</h3>

        <h1>{profile.name}</h1>

        <h3>
          And I'm a <span ref={designationRef}></span>
        </h3>

        <p>{profile.bio}</p>

        <div tabIndex={0} className="home-sci">
          <motion.a
          whileHover={{
        scale: 1.08
    }}
    whileTap={{
        scale: 0.95
    }}
            href="https://www.linkedin.com/in/iqra-nisar-93656b221"
            aria-label="Linkedin-profile"
            target="_blank"
            rel="noopener noreferrer"
            style={{ ["--i"]: 8 }}
          >
            <i className="bx bxl-linkedin"></i>
          </motion.a>

          <motion.a
          whileHover={{
        scale: 1.08
    }}
    whileTap={{
        scale: 0.95
    }}
            href="https://github.com/IqraShoaib"
            aria-label="github-profile"
            target="_blank"
            rel="noopener noreferrer"
            style={{ ["--i"]: 9 }}
          >
            <i className="bx bxl-github"></i>
          </motion.a>
        </div>

        <motion.a
        whileHover={{
        scale: 1.08
    }}
    whileTap={{
        scale: 0.95
    }}
          href="/resume.pdf"
          aria-label="MY Resume"
          className="btn-box1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV
        </motion.a>
      </div>
    </motion.section>
  );
}

export default Home;