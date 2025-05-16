// src/components/Skills.js
import React from 'react';
import '../styles/Skills.css'; // Corrected path

const skillsData = [
  {
    category: "Frontend",
    items: [
      { name: "React.js" }, { name: "React Native" }, { name: "HTML/CSS" },
      { name: "Typescript" }, { name: "Tailwind CSS" }, { name: "Flutter" }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Python (Django/DRF)" }, { name: "Node.js/Express" }, { name: "Fast API" }
    ]
  },
  {
    category: "Mobile",
    items: [
      { name: "React Native (Cross-platform)" }, { name: "Flutter" }, { name: "Java(Kotlin)" }
    ]
  },
  {
    category: "Database",
    items: [
      { name: "PostgreSQL" }, { name: "MySQL" }, { name: "Supabase" }
    ]
  },
  {
    category: "DevOps / Cloud",
    items: [
      { name: "Docker/Docker Compose" }, { name: "Vercel" }, { name: "Github for CI-CD" }
    ]
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Postman" }, { name: "Figma" }, { name: "Git/Github" }
    ]
  }
]; // Simplified data for brevity, removed experience/proficiency for cleaner look

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-content">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          {skillsData.map((skillCategory) => (
            <div key={skillCategory.category} className="skill-category">
              <h3 className="category-title">{skillCategory.category}</h3>
              <ul className="skills-list">
                {skillCategory.items.map((skill) => (
                  <li key={skill.name} className="skill-item">
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;