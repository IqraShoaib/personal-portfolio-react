import { useState } from "react";
import { motion } from "framer-motion";

function About() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
   <motion.section

  className="about"
  id="about"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
>
    <div className="about" img>
      <img 
      src="images/profile.webp" alt="Iqra's profile" loading="lazy" width={500} height={500} />
    </div>
    <div tabIndex={-1} className="about-text">
      <h2>About<span> Me</span></h2>
      <h4>Frontend Developer!</h4>
      <p>Front-end Development is all about designing
        and developing the user-end or the end-user 
        experience.Front-end development includes 
        everything which comes under the user experience
        including the UI/UX.Front-end development is simply
        a process of converting imaginations into high-end
        graphics and web pages for a great user experience
        by  mixing and matching the essentiall front-end 
        development tools like HTML(Hypertext Markup Language),
        CSS(Cascading Style Sheets), JS(JavaScript).I am a
        skilled Web Developer.My Passion lies in creating 
        captivating Web designs and implementing them
        through front-end developmentI take pride in
        staying up-to-date with current design trends
        and leveraging my creativity to produce visually appealing.
      </p>
      <button
  className="btn-box"
  onClick={() => setShowModal(true)}
>
  More About Me
</button>
    </div>
  </motion.section>
  {showModal && (
  <div className="modal-overlay" onClick={() => setShowModal(false)}>
    <motion.div
  className="about-modal"
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  exit={{ scale: 0.8, opacity: 0 }}
  transition={{ duration: 0.3 }}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="close-btn"
        onClick={() => setShowModal(false)}
      >
        ×
      </button>

      <h2>More About Me</h2>

      <p>
        Hi! I'm <strong>Iqra Nisar</strong>, a passionate Frontend Developer who
        enjoys creating responsive, modern, and user-friendly web applications.
        I love transforming ideas into beautiful digital experiences using
        React, JavaScript, HTML, and CSS.
      </p>

      <h3>Education:</h3>
      <p>
        Bachelor's in Computer System Engineering with a strong interest in web
        technologies and user interface design.
      </p>

      <h3>Technical Skills:</h3>

      <ul>
        <li>HTML5 & CSS3</li>
        <li>JavaScript (ES6+)</li>
        <li>React.js</li>
        <li>Responsive Web Design</li>
        <li>Bootstrap</li>
        <li>Git & GitHub</li>
        <li>REST APIs</li>
      </ul>
      <h3>Courses:</h3>
      <ul><li><h5>Pakistan Engineering Council
       <h6>(In Collaboration with PakAngels, iCode guru and Aspire Pakistan)</h6> </h5></li>
     

<ul><li><p> I have successfully completed the course on Generative Artificial Intelligence. This program has enhanced my understanding of AI models, prompt engineering, and real-world applications of generative technologies. Through hands-on exercises and projects, I gained practical experience in leveraging AI tools for creative problem-solving, content generation, and automation. This learning journey has strengthened my technical and analytical skills, and I look forward to applying this knowledge in future innovative projects.</p></li></ul>
</ul>

      <h3>Experience:</h3>

     <h4>Internships:</h4>
     <ul>
     <li> <h5>Pakistan International Airlines</h5></li>
      <p>Worked on ASP .Net C# HTML CSS Bootstrap and SQL server. </p>
<li><h5>Prodigy Info Tech </h5></li>
      <p>
        Completed a Web Development internship where I developed modern
        Applications:<ul><li>Responsive Landing Page </li>
        <li>Stopwatch </li>
        <li>Tic-Tac-Toe Game </li>
        <li>weather application </li>
        <li>Personal Portfolio </li> </ul>
      </p>
      
</ul>
      <h3>What I Enjoy:</h3>

      <p>
        ✔ Building responsive websites<br />
        ✔ Learning new technologies<br />
        ✔ Creating clean UI/UX<br />
        ✔ Solving real-world problems with code
      </p>

      <h3>Career Goal:</h3>

      <p>
        My goal is to become a professional Frontend Engineer and contribute to
        innovative software projects while continuously improving my skills.
      </p>
    </motion.div>
  </div>
)}
  </>
  );
}

export default About;