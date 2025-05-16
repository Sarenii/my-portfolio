// src/components/Contact.js
import React from 'react';
import '../styles/Contact.css'; // Corrected path
// To use icons, first install: npm install react-icons
// Then uncomment these lines:
// import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Contact() {
  const email = "sarahmueni5235@gmail.com";
  const linkedinLink = "https://www.linkedin.com/in/sarah-mutambu";
  const githubLink = "https://github.com/Sarenii";

  return (
    <section id="contact" className="contact-section">
      <div className="contact-content-wrapper"> {/* Added wrapper */}
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-intro">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          Feel free to reach out!
        </p>
        <div className="contact-links-container">
          <a href={`mailto:${email}`} className="contact-link">
            {/* <FaEnvelope />  */}
            Email Me
          </a>
          <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="contact-link">
            {/* <FaLinkedin /> */}
            LinkedIn
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="contact-link">
            {/* <FaGithub /> */}
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;