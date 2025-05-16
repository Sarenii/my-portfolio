// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css'; // Ensure path is correct
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Importing icons

function Footer() {
  const currentYear = new Date().getFullYear();
  const linkedinLink = "https://www.linkedin.com/in/sarah-mutambu";
  const githubLink = "https://github.com/Sarenii";

  return (
    <footer className="footer">
      <div className="footer-content-wrapper">
        <div className="footer-nav">
            <a href="#hero" className="footer-nav-link">Home</a>
            <a href="#about" className="footer-nav-link">About</a>
            <a href="#skills" className="footer-nav-link">Skills</a>
            <a href="#projects" className="footer-nav-link">Projects</a>
            <a href="#contact" className="footer-nav-link">Contact</a>
        </div>
        <div className="footer-social-links">
          <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="LinkedIn Profile">
            <FaLinkedin />
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="GitHub Profile">
            <FaGithub />
          </a>
          {/* Add other social links with icons if you have them */}
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