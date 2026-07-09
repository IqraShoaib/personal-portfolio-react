function Education() {
  return (
    <section id="education">
      <div tabIndex={-2} className="education" id="education">
      <div tabIndex={-3} className="container-centered">
        <h1 className="sub-title">My<span> Education</span></h1>
        <div tabIndex={-4} className="education-list">
          <div>
            <i className />
            <h2>(B.E)Bachelors of Engineering</h2>
            <h3>Computer System Engineering</h3>
            <p>
              I have just completed my bachelor's degree from
              Dawood University of Engineering And Technology
              with 3.63 CGPA.
            </p>
            <a href="#" className="read">Learn More</a>
          </div>
          <div tabIndex={-5}>
            <i className />
            <h2>Intermediate</h2><br />
            <h3>F.Sc<br />Pre-Engineering</h3>
            <p>
              done my Intermediate in pre-engineering from 
              E-Complex college of Arts And Science.
            </p>
            <a href="#" className="read">Learn More</a>
          </div>
          <div>
            <i className />
            <h2>Matriculations</h2>
            <h3>H.Sc <br />Computer Science</h3>
            <p>
              Completed my Matriculation from
              Islamia Girls High School.
            </p>
            <a href="#" className="read" aria-label="Learn More">Learn More</a>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Education;