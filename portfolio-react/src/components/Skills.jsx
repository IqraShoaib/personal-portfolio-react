import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Skills() {
  const [technicalSkills, setTechnicalSkills] = useState([]);
  const [professionalSkills, setProfessionalSkills] = useState([]);
  useEffect(() => {
  fetch("/data.json")
    .then((response) => response.json())
    .then((data) => {
      setTechnicalSkills(data.skills.technical);
      setProfessionalSkills(data.skills.professional);
    })
    .catch((error) => console.error(error));
}, []);

  return (
    <>
      <h1 className="sub-title">
        My <span>Skills</span>
      </h1>

      <motion.section
       className="skills-container"
       initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
        {/* Technical Skills */}

       <motion.div
        className="container1" 
        id="skills"
  initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
      >
  <h1 className="heading1">Technical Skills</h1>

  <motion.div 
  className="Technical-bars"
  initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  >
   {technicalSkills.map((skill) => (
      <div className="bar" key={skill.id}>
        <i
          style={{ color: skill.color }}
          className={`bx ${skill.icon}`}
        ></i>

        <div className="info">
          <span>{skill.name}</span>
        </div>

        <div className={`progress-line ${skill.class}`}>
          <motion.span
  initial={{ width: 0 }}
  whileInView={{ width: `${skill.percentage}%` }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
/>
        </div>

        <div>{skill.percentage}%</div>
      </div>
    ))}
  </motion.div>
</motion.div>

        {/* Professional Skills */}

        <div className="container1">
          <h1 className="heading1">Professional Skills</h1>

          <motion.div 
          className="radial-bars"
          
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}>
            {professionalSkills.map((skill) => (
              <motion.div
    className="radial-bar"
    key={skill.id}
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}

export default Skills;