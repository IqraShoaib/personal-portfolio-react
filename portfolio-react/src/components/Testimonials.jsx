import { motion } from "framer-motion";
function Testimonials() {
  return (
    <motion.section
  id="testimonials"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
   <motion.h2
  initial={{ opacity: 0, y: -20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  My <span>Testimonials</span>
</motion.h2>
    <div className="testimonial-container">
     <motion.div
  className="testimonial-card"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  whileHover={{
    scale: 1.05,
    y: -8
  }}
>
        <img src="./images/Codiora Software House.logo.webp" alt="Codiora Logo" loading="lazy" />
        <h3>Codiora Software House</h3>
      </motion.div>
     <motion.div
  className="testimonial-card"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  whileHover={{
    scale: 1.05,
    y: -8
  }}
>
      <img
  src="./images/Pakistan-International-Airlines.Logo.webp"
  alt="PIA Logo"
  loading="lazy"
/>
        <h3>Pakistan International Airlines</h3>
      </motion.div>
      <motion.div
  className="testimonial-card"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  whileHover={{
    scale: 1.05,
    y: -8
  }}
>
        <img src="./images/prodigy Infotech.webp" alt="Prodigy Logo" loading="lazy" />
        <h3>Prodigy InfoTech</h3>
      </motion.div>
    </div>
  </motion.section>
  );
}

export default Testimonials;