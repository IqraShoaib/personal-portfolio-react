import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [technology, setTechnology] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setProjects(data.projects))
      .catch((err) => console.error(err));
  }, []);

  const technologies = useMemo(() => {
    const techs = new Set();

    projects.forEach((project) => {
      project.technology.forEach((tech) => techs.add(tech));
    });

    return ["All", ...techs];
  }, [projects]);

  const filteredProjects = projects.filter((project) => {
    const matchSearch = project.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" ||
      project.category === category;

    const matchTechnology =
      technology === "All" ||
      project.technology.includes(technology);

    return matchSearch && matchCategory && matchTechnology;
  });

  return (
    
   <motion.section
  id="project"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
    
      <motion.h2
  initial={{ opacity: 0, y: -20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
        Latest <span>Projects</span>
      </motion.h2 >
      

      {/* Search */}
{/* Search + Technology Filter */}

<div className="search-container">

  <input
    type="text"
    placeholder="Search Project..."
    aria-label="Search-Box"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="search-box"
  />

  <motion.select
    className="tech-select"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay: 0.4 }}
    value={technology}
    onChange={(e) => setTechnology(e.target.value)}
  >
    {technologies.map((tech) => (
      <option key={tech} value={tech}>
        {tech}
      </option>
    ))}
  </motion.select>

</div>

      {/* Category Filter */}

      <motion.div
  className="filters"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.3 }}
>

        <button
          className={`filter-btn ${category === "All" ? "active" : ""}`}
          onClick={() => setCategory("All")}
          aria-label="All"
        >
          All
        </button>

        <button
         className={`filter-btn ${category === "Web Development" ? "active" : ""}`}
          onClick={() => setCategory("Web Development")}
          aria-label="Web Development"
        >
          Web Development
        </button>

        <button
          className={`filter-btn ${category === "Mobile Development" ? "active" : ""}`}
          onClick={() => setCategory("Mobile Development")}
          aria-label="Mobile development"
        >
          Mobile Development
        </button>

        <button
          className={`filter-btn ${category === "UI/UX" ? "active" : ""}`}
          onClick={() => setCategory("UI/UX")}
          aria-label="UI/UX"
        >
          UI/UX
        </button>

        <button
          className={`filter-btn ${category === "Data Analyst" ? "active" : ""}`}
          onClick={() => setCategory("Data Analyst")}
          aria-label="Data Analyst"
        >
          Data Analyst
        </button>

        <button
         className={`filter-btn ${category === "Other" ? "active" : ""}`}
          onClick={() => setCategory("Other")}
          aria-label="Other"
        >
          Other
        </button>

      </motion.div>

      {/* Technology Filter */}

    

     <div className="projects-container">
  {filteredProjects.length > 0 ? (
    filteredProjects.map((project) => (
      <motion.div
  key={project.id}
  className="project-card"
  onClick={() => setSelectedProject(project)}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  whileHover={{
    scale: 1.03,
    y: -8
  }}
>
        <img
          src={project.image}
          alt={project.name}
          loading="lazy"
        />

        <div className="project-content">
          <h3>{project.name}</h3>

          <p>{project.description}</p>

          <p>
            <strong>Category:</strong> {project.category}
          </p>

          <p>
            <strong>Technology:</strong>{" "}
            {project.technology.join(", ")}
          </p>

          <div className="buttons">
            <motion.a
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.95 }}
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="demo-btn"
              onClick={(e) => e.stopPropagation()}
            >
              Live Demo
            </motion.a>

            <motion.a
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.95 }}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn"
              onClick={(e) => e.stopPropagation()}
            >
              GitHub
            </motion.a>
          </div>
        </div>
      </motion.div>
    ))
  ) : (
    <h2>No Projects Found</h2>
  )}
</div>

{/* Modal */}

{selectedProject && (
  <motion.div
    className="modal"
    onClick={() => setSelectedProject(null)}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <motion.div
      className="modal-content"
      onClick={(e) => e.stopPropagation()}
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <button
        className="close"
        onClick={() => setSelectedProject(null)}
      >
        ×
      </button>

      <h2>{selectedProject.name}</h2>

      <img
        src={selectedProject.image}
        alt={selectedProject.name}
      />

      <p>{selectedProject.description}</p>

      <p>
        <strong>Category:</strong> {selectedProject.category}
      </p>

      <h3>Technologies</h3>
      <ul>
        {(selectedProject.technology || []).map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>

      <h3>Features</h3>
      <ul>
        {(selectedProject.features || []).map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </motion.div>
  </motion.div>
)}
    </motion.section>
  );
}

export default Projects;