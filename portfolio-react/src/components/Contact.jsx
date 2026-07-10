import { useEffect, useState } from "react";

function Contact() {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
  setContact(data.contact);
})
      .catch((error) => console.error("Error:", error));
  }, []);

  if (!contact) {
    return <h2>Loading...</h2>;
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-text">
        <h2>
          Contact <span>Me</span>
        </h2>

        <h4>Let's Work Together</h4>

        <p>
          Hello everyone, I'm here and you can contact me through social
          media. I am always available to respond.
        </p>

        <div className="contact-list">
          <li>
            <i className="bx bx-send"></i>
            {contact.email}
          </li>

          <li>
            <i className="bx bxs-phone"></i>
            {contact.phone}
          </li>

          <li>
            <i className="bx bx-map"></i>
            {contact.location}
          </li>
        </div>

        <div className="contact-icons">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-facebook-circle"></i>
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-instagram"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/iqra-nisar-93656b221"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://wa.me/923181388294"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-whatsapp"></i>
          </a>
        </div>
      </div>

      <div className="contact-form">
        <form>
          <input
            type="text"
            placeholder="Enter Your Name"
            required
          />

          <input
            type="email"
            placeholder="Enter Your Email"
            required
          />

          <input
            type="text"
            placeholder="Enter Your Subject"
            required
          />

          <textarea
            cols="40"
            rows="10"
            placeholder="Enter Your Message"
            required
          ></textarea>

          <input
            type="submit"
            value="Submit"
            className="send"
          />

          <p id="successMessage"></p>
        </form>
      </div>
    </section>
  );
}

export default Contact;