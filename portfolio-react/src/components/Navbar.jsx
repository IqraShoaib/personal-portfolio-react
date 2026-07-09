import { useState, useEffect } from "react";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, []);

  const handleThemeChange = () => {
    setDarkMode((prev) => {
      const newMode = !prev;

      if (newMode) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
      } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
      }

      return newMode;
    });
  };

  return (
    <header>
      <a href="#" className="logo">Iqra Nisar</a>

      <nav aria-label="Main Navigation">
        <a href="#home">Home</a>
        <a href="#about">About Me</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#project">Projects</a>
        <a href="#testimonials">Testimonial</a>
        <a href="#blog">Blogs/Articles</a>
        <a href="#contact">Contact</a>

        <label className="toggle">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={handleThemeChange}  
          />
          <div className="slider">
            <div className="text">
              <span className="on">ON</span>
              <span className="off">OFF</span>
            </div>
          </div>
        </label>
      </nav>
    </header>
  );
}

export default Navbar;