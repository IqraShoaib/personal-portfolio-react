import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Contact() {

  const [contact, setContact] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

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
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message should contain at least 10 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit clicked");
    console.log(formData);

    setSuccessMessage("");
    setErrorMessage("");

    if (!validateForm()) return;

    setLoading(true);

    setTimeout(() => {
      try {
        setSuccessMessage("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      } catch {
        setErrorMessage("Something went wrong.");
      }

      setLoading(false);
    }, 2000);
  };

  return (
    <motion.section
  className="contact-section"
  id="contact"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>

  <motion.h2
    className="contact-heading"
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    Contact <span>Me</span>
  </motion.h2>

  <div className="contact">
    <motion.div
      className="contact-text"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >

        <h3>Let's Work Together</h3>

        <p>
          Hello everyone, I'm here and you can contact me through social
          media. I am always available to respond.
        </p>

        < ul className="contact-list">
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
      
      </ul>
      

        <div className="contact-icons">
          <a
  href="https://facebook.com"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Visit my Facebook profile"
  title="Facebook"
>
  <i className="bx bxl-facebook" aria-hidden="true"></i>
</a>

          <a
  href="https://instagram.com"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Visit my Instagram profile"
  title="Instagram"
>
  <i className="bx bxl-instagram" aria-hidden="true"></i>
</a>

          <motion.a
            whileHover={{
              scale: 1.2,
              rotate: 10
            }}
            whileTap={{ scale: 0.9 }}
            href="https://wa.me/923181388294?text=Hello%20Iqra,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
            target="_blank"
            rel="noopener noreferrer"
             title="WhatsApp"
          >
            <i className="bx bxl-whatsapp" aria-hidden="true"></i>
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.2,
              rotate: 10
            }}
            whileTap={{ scale: 0.9 }}
            href="https://mail.google.com/mail/?view=cm&fs=1&to=iqranisar096@gmail.com&su=Portfolio%20Inquiry&body=Hello%20Iqra,%0A%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity."
            target="_blank"
            rel="noopener noreferrer"
             aria-label="Send me an email"
  title="Email"
          >
            <i className="bx bxl-gmail" aria-hidden="true"></i>
          </motion.a>
        </div>
      </motion.div>


      <motion.div
        className="contact-form"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
          />

          {errors.name && <small className="error">{errors.name}</small>}
          <label htmlFor="email">Email</label>

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
          />

          {errors.email && <small className="error">{errors.email}</small>}
          <label htmlFor="subject">Subject</label>  
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Enter Your Subject"
            value={formData.subject}
            onChange={handleChange}
          />

          {errors.subject && <small className="error">{errors.subject}</small>}
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            cols="40"
            rows="10"
            placeholder="Enter Your Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          {errors.message && (
            <small className="error">{errors.message}</small>
          )}
          <motion.button
            type="submit"
            className="send"
            disabled={loading}
            animate={
              loading
                ? { scale: [1, 1.05, 1] }
                : {}
            }
            transition={{
              duration: 0.8,
              repeat: loading ? Infinity : 0
            }}
          >
            {loading ? "Sending..." : "Submit"}
          </motion.button>

          {successMessage && (
            <motion.p
              className="success"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {successMessage}
            </motion.p>
          )}

          {errorMessage && (
            <motion.p
              className="error"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {errorMessage}
            </motion.p>
          )}
        </form>
      </motion.div>
      </div>
    </motion.section>
  );
}

export default Contact;