// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css'; // Corrected path
// To use icons, first install: npm install react-icons
// Then uncomment these lines:
// import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();
  const linkedinLink = "[https://www.linkedin.com/in/sarah-mutambu](https://www.linkedin.com/in/sarah-mutambu)";
  const githubLink = "[https://github.com/Sarenii](https://github.com/Sarenii)";

  return (
    <footer className="footer">
      <div className="footer-content-wrapper"> {/* Added wrapper */}
        <div className="footer-nav">
            <a href="#hero" className="footer-nav-link">Home</a>
            <a href="#about" className="footer-nav-link">About</a>
            <a href="#skills" className="footer-nav-link">Skills</a>
            <a href="#projects" className="footer-nav-link">Projects</a>
            <a href="#contact" className="footer-nav-link">Contact</a>
        </div>
        <div className="footer-social-links">
          <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="LinkedIn Profile">
            {/* <FaLinkedin size={24}/> */}
            LinkedIn
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="GitHub Profile">
            {/* <FaGithub size={24}/> */}
            GitHub
          </a>
        </div>
        <p className="footer-text">
          Let's connect and build something amazing together.
        </p>
        <p className="footer-copyright">
          &copy; {currentYear} Sarah Mueni Mutambu. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;