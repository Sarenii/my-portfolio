// src/components/Navbar.js
import React from 'react';
import '../styles/Navbar.css'; // Corrected path

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#hero" className="navbar-logo"> {/* Changed href to #hero */}
          Sarah M.
        </a>
        <ul className="navbar-menu">
          <li><a href="#about" className="navbar-link">About</a></li>
          <li><a href="#skills" className="navbar-link">Skills</a></li>
          <li><a href="#projects" className="navbar-link">Projects</a></li>
          <li><a href="#education" className="navbar-link">Education</a></li>
          <li><a href="#contact" className="navbar-link">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;