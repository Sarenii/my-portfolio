// src/components/Contact.js
import React from 'react';
import '../styles/Contact.css'; // Ensure path is correct
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'; // Importing specific icons

function Contact() {
  const email = "sarahmueni5235@gmail.com";
  const linkedinLink = "https://www.linkedin.com/in/sarah-mutambu";
  const githubLink = "https://github.com/Sarenii";

  return (
    <section id="contact" className="contact-section">
      <div className="contact-content-wrapper">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-intro">
          I'm always open to discussing new projects, creative ideas, or opportunities.
          Feel free to reach out!
        </p>
        <div className="contact-links-container">
          <a href={`mailto:${email}`} className="contact-link">
            <FaEnvelope className="contact-icon" /> Email Me
          </a>
          <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="contact-link">
            <FaLinkedin className="contact-icon" /> LinkedIn
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="contact-link">
            <FaGithub className="contact-icon" /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;