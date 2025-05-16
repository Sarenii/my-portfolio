// src/components/Education.js
import React from 'react';
import '../styles/Education.css'; // Corrected path

const educationData = [
  {
    degree: "Bachelor of Science in Software Engineering",
    university: "Murang'a University of Technology",
    dates: "2020 - 2024"
  }
];

function Education() {
  return (
    <section id="education" className="education-section">
      <div className="education-content-wrapper"> {/* Added wrapper */}
        <h2 className="section-title">Education</h2>
        {educationData.map((edu, index) => (
          <div key={index} className="education-entry">
            <h3 className="education-degree">{edu.degree}</h3>
            <p className="education-university">{edu.university}</p>
            <p className="education-dates">{edu.dates}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;