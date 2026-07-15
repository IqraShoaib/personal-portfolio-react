import { useState } from "react";
import { motion } from "framer-motion";
function Articles() {
   const [expanded, setExpanded] = useState(null);
   const toggleArticle = (id) => {
  setExpanded(expanded === id ? null : id);
};
  return (
    <motion.section
  className="articles"
  id="blog"
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
  Technical <span>Articles</span>
</motion.h2>
    <motion.p
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ delay: 0.2 }}
>
  "Good engineering is worth writing about. Here you'll find thoughtful articles on the problems, patterns, and decisions that shape well-built software."
</motion.p>
    <div className="article-container">
      <motion.div
  className="article-card"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  whileHover={{
    scale: 1.03,
    y: -8
  }}
>
        <img src="images/article image.webp" alt="Article Image 1" loading="lazy"/>
        <h3>Responsive Web Design</h3>
        <p>Building Websites for Every Device. <br />
          Responsive web design ensures websites adapt to different screen sizes and devices..</p>
       {expanded === 1 && (
  <div>
          Using flexible layouts, CSS media queries, and responsive images helps create a seamless experience for users on desktops, tablets, and smartphones.
          <h3>Key Topics</h3>
          <ul>CSS Media Queries</ul>
          <ul>Mobile-First Device</ul>
          <ul>Flexible Grid Systems</ul>
          <ul>Responsive Images</ul>
        </div>
        )}
       <motion.button
  className="btn"
  onClick={() => toggleArticle(1)}
>
  {expanded === 1 ? "Read Less" : "Read More"}
</motion.button>
      </motion.div>
      <motion.div
  className="article-card"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  whileHover={{
    scale: 1.03,
    y: -8
  }}
>
        <img src="images/article image1.webp" alt="Article Image 2" loading="lazy" />
        <h3>Web Accessibility</h3>
        <p>Creating Inclusive Websites.<br />
          Accessibility ensures that websites can be used by everyone, including people with disabilities.</p>
       {expanded === 2 && (
  <div>
          Proper semantic HTML, ARIA labels, keyboard navigation, and sufficient color contrast improve usability and inclusivity.
          <h3>Key Topics</h3>
          <ul>Semantic HTML</ul>
          <ul>ARIA Labels</ul>
          <ul>Keyboard Navigation</ul>
          <ul>Color Contrast</ul>
          <ul>Screen Reader Compatibility</ul>
        </div>
        )}
       <motion.button
  className="btn"
  onClick={() => toggleArticle(2)}
>
  {expanded === 2 ? "Read Less" : "Read More"}
</motion.button>
      </motion.div>
      <motion.div
  className="article-card"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  whileHover={{
    scale: 1.03,
    y: -8
  }}
>
        <img src="images/article image2.webp" alt="Article Image 3" loading="lazy" />
        <h3>Website Performance Optimization Techniques</h3>
        <p>Website performance directly affects user satisfaction and search engine rankings.</p>
        {expanded === 3 && (
  <div>
          Optimizing images, minifying CSS and JavaScript, enabling lazy loading, and reducing server requests can significantly improve loading times.
          <h3>Key Topics</h3>
          <ul>Image Optimization (WebP)</ul>
          <ul>CSS And JavaScript Minification</ul>
          <ul>Lazy Loading</ul>
          <ul>Browser Caching</ul>
          <ul>Core Web Vitals</ul>
        </div>
        )}
       <motion.button
  className="btn"
  onClick={() => toggleArticle(3)}
>
  {expanded === 3 ? "Read Less" : "Read More"}
</motion.button>
      </motion.div>
    </div>
  </motion.section>
  );
}

export default Articles;