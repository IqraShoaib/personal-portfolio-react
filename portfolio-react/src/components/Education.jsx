import { useState } from "react";
function Education() {
  const [selectedEducation, setSelectedEducation] = useState(null);
  const educationData = [
  {
    id: 1,
    degree: "(B.E) Bachelors of Engineering",
    title: "Computer System Engineering",
    short:
      "I have just completed my bachelor's degree from Dawood University of Engineering And Technology with 3.63 CGPA.",
    details: `
Completed Bachelor of Engineering in Computer System Engineering.

University:
Dawood University of Engineering & Technology

CGPA:
3.63 / 4.00

Major Subjects:
• Programming Fundamentals
• Object Oriented Programming
• Data Structures
• Database Systems
• Operating Systems
• Computer Networks
• Artificial Intelligence
• Software Engineering
• Web Development

Projects:
• Personal Portfolio Website
• Weather App
• Tic Tac Toe Game
• Stopwatch Application

Skills Gained:
✔ React
✔ JavaScript
✔ HTML
✔ CSS
✔ Git & GitHub
✔ Responsive Design
`
  },

  {
    id: 2,
    degree: "Intermediate",
    title: "F.Sc Pre-Engineering",
    short:
      "Completed Intermediate from E-Complex College of Arts and Science.",
    details: `
Completed F.Sc (Pre-Engineering).

College:
E-Complex College of Arts and Science

Subjects:
• Physics
• Chemistry
• Mathematics

Achievements:
• Strong mathematical foundation
• Developed analytical thinking
• Participated in science activities
`
  },

  {
    id: 3,
    degree: "Matriculation",
    title: "Computer Science",
    short:
      "Completed Matriculation from Islamia Girls High School.",
    details: `
Completed Secondary School Education.

School:
Islamia Girls High School

Subjects:
• Computer Science
• Mathematics
• Physics
• English

Achievements:
• Built strong computer fundamentals
• Learned Microsoft Office
• Improved problem-solving skills
`
  }
];
  return (
    <section id="education">
      <div tabIndex={-2} className="education" id="education">
      <div tabIndex={-3} className="container-centered">
        <h1 className="sub-title">My<span> Education</span></h1>
        <div className="education-list">

  {educationData.map((item) => (

    <div key={item.id}>

      <h2>{item.degree}</h2>

      <h3>{item.title}</h3>

      <p>{item.short}</p>

      <button
        className="read"
        onClick={() => setSelectedEducation(item)}
      >
        Learn More
      </button>

    </div>

  ))}

</div>
{selectedEducation && (

<div
  className="education-modal-overlay"
  onClick={() => setSelectedEducation(null)}
>

<div
  className="education-modal"
  onClick={(e) => e.stopPropagation()}
>

<button
className="close-btn"
onClick={() => setSelectedEducation(null)}
>
&times;
</button>

<h2>{selectedEducation.degree}</h2>

<h3>{selectedEducation.title}</h3>

<p style={{ whiteSpace: "pre-line" }}>
{selectedEducation.details}
</p>

</div>

</div>

)}
     
      </div>
    </div>
    </section>
  );
}

export default Education;