import { useEffect, useState, useRef } from "react";
import Typed from "typed.js";

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
    if (!designationRef.current) return;

    const typed = new Typed(designationRef.current, {
      strings: ["Web Developer!", "Frontend Developer!"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  if (!profile) {
    return <h2>Loading...</h2>;
  }

  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello, It's Me</h3>

        <h1>{profile.name}</h1>

        <h3>
          And I'm a <span ref={designationRef}></span>
        </h3>

        <p>{profile.bio}</p>

        <div tabIndex={0} className="home-sci">
          <a
            href="https://www.linkedin.com/in/iqra-nisar-93656b221"
            aria-label="Linkedin-profile"
            target="_blank"
            rel="noopener noreferrer"
            style={{ ["--i"]: 8 }}
          >
            <i className="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://github.com/IqraShoaib"
            aria-label="github-profile"
            target="_blank"
            rel="noopener noreferrer"
            style={{ ["--i"]: 9 }}
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>

        <a
          href="/resume.pdf"
          aria-label="MY Resume"
          className="btn-box1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV
        </a>
      </div>

      
     
    </section>
  );
}

export default Home;