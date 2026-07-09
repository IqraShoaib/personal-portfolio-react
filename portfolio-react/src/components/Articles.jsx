function Articles() {
  return (
    <section className="articles" id="blog">
    <h2>Technical<span> Articles</span></h2>
    <p>"Good engineering is worth writing about. Here you'll find thoughtful articles on the problems, patterns, and decisions that shape well-built software."</p>
    <div className="article-container">
      <div className="article-card">
        <img src="images/article image.webp" alt="Article Image 1" loading="lazy"/>
        <h3>Responsive Web Design</h3>
        <p>Building Websites for Every Device. <br />
          Responsive web design ensures websites adapt to different screen sizes and devices..</p>
        <span id="moreText" style={{display: 'none'}}>
          Using flexible layouts, CSS media queries, and responsive images helps create a seamless experience for users on desktops, tablets, and smartphones.
          <h3>Key Topics</h3>
          <ul>CSS Media Queries</ul>
          <ul>Mobile-First Device</ul>
          <ul>Flexible Grid Systems</ul>
          <ul>Responsive Images</ul>
        </span>   
        <button className="btn" id="toggleBtn" onClick="toggleText('moreText' , this)">
          Read More
        </button>
      </div>
      <div className="article-card">
        <img src="images/article image1.webp" alt="Article Image 2" loading="lazy" />
        <h3>Web Accessibility</h3>
        <p>Creating Inclusive Websites.<br />
          Accessibility ensures that websites can be used by everyone, including people with disabilities.</p>
        <span id="moreText2" style={{display: 'none'}}>
          Proper semantic HTML, ARIA labels, keyboard navigation, and sufficient color contrast improve usability and inclusivity.
          <h3>Key Topics</h3>
          <ul>Semantic HTML</ul>
          <ul>ARIA Labels</ul>
          <ul>Keyboard Navigation</ul>
          <ul>Color Contrast</ul>
          <ul>Screen Reader Compatibility</ul>
        </span>   
        <button className="btn" id="toggleBtn" onClick="toggleText('moreText2' , this)">
          Read More
        </button>
      </div>
      <div className="article-card">
        <img src="images/article image2.webp" alt="Article Image 3" loading="lazy" />
        <h3>Website Performance Optimization Techniques</h3>
        <p>Website performance directly affects user satisfaction and search engine rankings.</p>
        <span id="moreText1" style={{display: 'none'}}>
          Optimizing images, minifying CSS and JavaScript, enabling lazy loading, and reducing server requests can significantly improve loading times.
          <h3>Key Topics</h3>
          <ul>Image Optimization (WebP)</ul>
          <ul>CSS And JavaScript Minification</ul>
          <ul>Lazy Loading</ul>
          <ul>Browser Caching</ul>
          <ul>Core Web Vitals</ul>
        </span>   
        <button className="btn" id="toggleBtn" onClick="toggleText('moreText1',this)" aria-label="Read More">
          Read More
        </button>
      </div>
    </div>
  </section>
  );
}

export default Articles;