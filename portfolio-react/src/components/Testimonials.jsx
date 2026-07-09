function Testimonials() {
  return (
    <section id="testimonials">
    <h2> My <span>Testimonials</span> </h2>
    <div className="testimonial-container">
      <div className="testimonial-card">
        <img src="./images/Codiora Software House.logo.webp" alt="Codiora Logo" loading="lazy" />
        <h3>Codiora Software House</h3>
      </div>
      <div className="testimonial-card">
      <img
  src="./images/Pakistan-International-Airlines.Logo.webp"
  alt="PIA Logo"
  loading="lazy"
/>
        <h3>Pakistan International Airlines</h3>
      </div>
      <div className="testimonial-card">
        <img src="./images/prodigy Infotech.webp" alt="Prodigy Logo" loading="lazy" />
        <h3>Prodigy InfoTech</h3>
      </div>
    </div>
  </section>
  );
}

export default Testimonials;