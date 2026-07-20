import { useState, useEffect } from "react";


function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
      document.body.classList.add("dark-mode");
    }
  }, []);

  const handleThemeChange = () => {
    setDarkMode(prev => {
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
      <a href="#" className="logo">
        Iqra Nisar
      </a>

      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <nav className={menuOpen ? "nav-links active" : "nav-links"}>
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
        <a href="#project" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a>
        <a href="#blog" onClick={() => setMenuOpen(false)}>Blogs</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

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