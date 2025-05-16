// src/components/About.js
import React from 'react';
import '../styles/About.css'; // Corrected path

function About() {
  return (
    <section id="about" className="about-section">
      {/* Added a content wrapper to allow section bg and content bg to differ */}
      <div className="about-content-wrapper">
        <h2 className="section-title">About Me</h2>
        <div className="about-text">
          <p>
            I'm a versatile Software Engineer skilled in full-stack web and mobile development,
            with experience in system optimization and IT operations. I thrive in Agile teams,
            delivering reliable, user-focused solutions.
          </p>
          <p>
            I aim to grow in emerging technologies while contributing innovation, collaboration,
            and efficiency to any team I join. My skills include developing and maintaining
            web applications, optimizing system performance, and ensuring smooth operational processes.
          </p>
          <p>
            I have hands-on experience working with Agile teams to deliver high-quality software solutions
            and I am committed to continuously expanding my knowledge in different technologies.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;