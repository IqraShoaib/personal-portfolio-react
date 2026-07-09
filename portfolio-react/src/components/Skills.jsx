import { useEffect, useState } from "react";

function Skills() {
  const [skills, setSkills] = useState({
  technical: [],
  professional: [],
});

  useEffect(() => {
    fetch("http://localhost:3000/api/skills")
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <h1 className="sub-title">
        My <span>Skills</span>
      </h1>

      <section className="skills-container">
        {/* Technical Skills */}

       <div className="container1" id="skills">
  <h1 className="heading1">Technical Skills</h1>

  <div className="Technical-bars">
    {skills.technical.map((skill) => (
      <div className="bar" key={skill.id}>
        <i
          style={{ color: skill.color }}
          className={`bx ${skill.icon}`}
        ></i>

        <div className="info">
          <span>{skill.name}</span>
        </div>

        <div className={`progress-line ${skill.class}`}>
          <span style={{ width: `${skill.percentage}%` }}></span>
        </div>

        <div>{skill.percentage}%</div>
      </div>
    ))}
  </div>
</div>

        {/* Professional Skills */}

        <div className="container1">
          <h1 className="heading1">Professional Skills</h1>

          <div className="radial-bars">
            {skills.professional.map((skill) => (
              <div className="radial-bar" key={skill.id}>
                <svg viewBox="0 0 200 200">
                  <circle
                    className="progress-bar"
                    cx="100"
                    cy="100"
                    r="80"
                  />

                  <circle
                    className={`path ${skill.pathClass}`}
                    cx="100"
                    cy="100"
                    r="80"
                  />
                </svg>

                <div className="percentage">
                  {skill.percentage}%
                </div>

                <div className="text">
                  {skill.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;