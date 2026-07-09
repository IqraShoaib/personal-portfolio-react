function About() {
  return (
    <section className="about" id="about">
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
      <a href="#" className="btn-box">More About Me</a>
    </div>
  </section>
  );
}

export default About;