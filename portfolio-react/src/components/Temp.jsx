import { useEffect, useMemo, useState } from "react";

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
    <section id="project">

      <h2>
        Latest <span>Projects</span>
      </h2>

      {/* Search */}

      <input
        type="text"
        placeholder="Search Project..."
        aria-label="Search-Box"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />

      {/* Category Filter */}

      <div className="filters">

        <button
          className={category === "All" ? "active" : ""}
          onClick={() => setCategory("All")}
          aria-label="All"
        >
          All
        </button>

        <button
          className={category === "Web Development" ? "active" : ""}
          onClick={() => setCategory("Web Development")}
          aria-label="Web Development"
        >
          Web Development
        </button>

        <button
          className={category === "Mobile Development" ? "active" : ""}
          onClick={() => setCategory("Mobile Development")}
          aria-label="Mobile development"
        >
          Mobile Development
        </button>

        <button
          className={category === "UI/UX" ? "active" : ""}
          onClick={() => setCategory("UI/UX")}
          aria-label="UI/UX"
        >
          UI/UX
        </button>

        <button
          className={category === "Data Analyst" ? "active" : ""}
          onClick={() => setCategory("Data Analyst")}
          aria-label="Data Analyst"
        >
          Data Analyst
        </button>

        <button
          className={category === "Other" ? "active" : ""}
          onClick={() => setCategory("Other")}
          aria-label="Other"
        >
          Other
        </button>

      </div>

      {/* Technology Filter */}

      <select
        value={technology}
        onChange={(e) => setTechnology(e.target.value)}
      >
        {technologies.map((tech) => (
          <option key={tech} value={tech}>
            {tech}
          </option>
        ))}
      </select>

     <div className="projects-container">
  {filteredProjects.length > 0 ? (
    filteredProjects.map((project) => (
      <div
        key={project.id}
        className="project-card"
        onClick={() => setSelectedProject(project)}
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
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="demo-btn"
              onClick={(e) => e.stopPropagation()}
            >
              Live Demo
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn"
              onClick={(e) => e.stopPropagation()}
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    ))
  ) : (
    <h2>No Projects Found</h2>
  )}
</div>

{/* Modal */}

{selectedProject && (
  <div
    className="modal"
    onClick={() => setSelectedProject(null)}
  >
    <div
      className="modal-content"
      onClick={(e) => e.stopPropagation()}
    >
      <span
        className="close"
        onClick={() => setSelectedProject(null)}
      >
        ×
      </span>

      <h2>{selectedProject.name}</h2>

      <div className="project-details">

        <img
          src={selectedProject.image}
          alt={selectedProject.name}
        />

        <div className="project-info">

          <h3>Description</h3>

          <p>{selectedProject.description}</p>

          <h3>Category</h3>

          <p>{selectedProject.category}</p>

          <h3>Technologies</h3>

<ul>
  {selectedProject.technology.map((tech,index)=>(
    <li key={index}>{tech}</li>
  ))}
</ul>

<h3>Features</h3>

<ul>
  {selectedProject.features.map((feature,index)=>(
    <li key={index}>{feature}</li>
  ))}
</ul>

          <div className="buttons">

            <a
              href={selectedProject.demo}
              aria-label="Live Demo"
              target="_blank"
              rel="noopener noreferrer"
              className="demo-btn"
            >
              Live Demo
            </a>

            <a
              href={selectedProject.github}
              aria-label="github"
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn"
            >
              GitHub
            </a>

          </div>

        </div>

      </div>
    </div>
  </div>
)}

    

    </section>
  );
}

export default Projects;