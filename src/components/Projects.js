// src/components/Projects.js
import React, { useState } from 'react';
import '../styles/Projects.css'; // Corrected path

// Full projectData from previous successful version (response #17 or #20)
const projectData = [
  {
    id: "lms",
    name: "Matakiri Learning Management System",
    role: "Full-Stack Developer",
    summary: "Engineered a comprehensive Learning Management System from scratch, empowering instructors with course creation tools and offering students a seamless platform for enrollment and progress tracking.",
    achievements: [
      "Independently designed and implemented the entire LMS platform, from initial concept to successful deployment.",
      "Crafted a user-friendly and accessible interface using React.js, ensuring intuitive navigation.",
      "Built robust backend APIs with Django REST Framework for efficient management of course content, user data, and assessments.",
      "Integrated secure dj-rest-auth for user registration and login.",
      "Established CI/CD pipelines using GitHub Actions and deployed on Vercel for high availability."
    ],
    mainFunctionalities: [
        "User registration, login, and role-based access (admin, instructor, student).",
        "Intuitive course creation and management tools for instructors.",
        "Organized module and lesson structure within courses.",
        "Support for diverse content types: text, video, images, and documents.",
        "Efficient assignment uploading and submission tracking.",
        "Streamlined student enrollment system.",
        "Real-time progress tracking for students.",
        "Comprehensive admin dashboard for user management and platform monitoring.",
        "Fully responsive design for optimal viewing on all devices."
    ],
    technologies: "React.js, CSS, Django REST Framework (DRF), PostgreSQL, Dj-rest-auth, Supabase, Vercel, GitHub Actions",
    liveLink: "https://matakiri-Ims-vercel.vercel.app/",
    repoLink: "https://github.com/Sarenii/matakiri-Ims-vercel.git"
  },
  {
    id: "harmosoft",
    name: "Harmosoft Company Website",
    role: "Full-Stack Developer",
    summary: "Co-developed the official Harmosoft company website, translating Figma designs into a responsive and performant React application with a Django backend to effectively showcase their services and projects.",
    achievements: [
      "Collaborated effectively in a two-person team to deliver the complete website from design to deployment.",
      "Translated intricate Figma UI designs into a modern, pixel-perfect frontend.",
      "Developed scalable REST APIs, ensuring seamless integration with frontend components.",
      "Implemented secure user authentication using dj-rest-auth.",
      "Configured CI/CD workflows via GitHub Actions for efficient and reliable deployments.",
      "Optimized the website for speed, responsiveness, and SEO best practices."
    ],
    mainFunctionalities: [
        "Engaging home page with company overview and featured services.",
        "Detailed section outlining available services.",
        "Portfolio showcase of completed projects.",
        "Comprehensive 'About Us' section detailing mission, vision, and core values.",
        "User-friendly contact page with inquiry form.",
        "Intuitive sticky navigation and informative footer.",
        "Responsive design ensuring optimal experience across all devices.",
        "Smooth scrolling and modern animations for enhanced user engagement."
    ],
    technologies: "React.js, CSS, Django REST Framework (DRF), PostgreSQL, Dj-rest-auth, Supabase, Vercel, GitHub Actions",
    liveLink: "https://www.harmosoft.co.ke/",
    repoLink: null
  },
  {
    id: "stamping",
    name: "Digital Stamping System",
    role: "Full-Stack Developer",
    summary: "Developed an innovative Digital Stamping System to modernize document authentication. This full-stack solution features custom stamp creation, secure document handling via a Django backend, and dynamic canvas-based interactions using React and Konva.js.",
    projectOverview: "A full-stack web application designed to replace traditional physical stamps for document authentication. It allows users to upload documents, create and customize digital stamps, apply them to documents, and download the stamped documents. The system ensures efficiency, security, and traceability.",
    features: [
      "Versatile Document Handling: Upload and display for PDF, JPEG, PNG formats with interactive zoom, pan, and pagination.",
      "Customizable Digital Stamps: Create unique stamps with various shapes, colors, text, logos, and real-time timestamps. Stamps are saved for reuse.",
      "Intuitive Stamp Placement: Easy drag-and-drop or click-to-place functionality with a real-time preview.",
      "Secure Document Management: Robust storage with metadata for auditing, direct download options, and document version control."
    ],
    technologies: "React.js, Tailwind CSS (listed as skill), Konva.js, Django & Django REST Framework, PostgreSQL, JWT Authentication",
    liveLink: null,
    repoLink: null
  }
];

function Projects() {
  const [expandedProjectId, setExpandedProjectId] = useState(null);

  const toggleProjectDetails = (projectId) => {
    if (expandedProjectId === projectId) {
      setExpandedProjectId(null);
    } else {
      setExpandedProjectId(projectId);
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-content-wrapper">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projectData.map((project) => {
            const isExpanded = expandedProjectId === project.id;
            return (
              <div key={project.id} className={`project-card ${isExpanded ? 'expanded' : ''}`}>
                <div className="project-card-summary">
                  <h3 className="project-name">{project.name}</h3>
                  {project.role && <p className="project-role">{project.role}</p>}
                  <p className="project-summary-text">{project.summary}</p>
                  <div className="project-links-minimal">
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link-minimal live">
                        Live Site
                      </a>
                    )}
                    {project.repoLink && (
                      <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="project-link-minimal repo">
                        View Code
                      </a>
                    )}
                  </div>
                  <button onClick={() => toggleProjectDetails(project.id)} className="learn-more-button">
                    {isExpanded ? 'Show Less' : 'Learn More'}
                  </button>
                </div>

                {isExpanded && (
                  <div className="project-card-details">
                    {project.projectOverview && !project.achievements && (
                      <>
                        <h4 className="project-subtitle">Project Overview</h4>
                        <p className="project-overview-detail-text">{project.projectOverview}</p>
                      </>
                    )}
                    {project.achievements && (
                      <>
                        <h4 className="project-subtitle">Key Achievements</h4>
                        <ul className="project-details-list">
                          {project.achievements.map((ach, i) => (<li key={i}>{ach}</li>))}
                        </ul>
                      </>
                    )}
                    {project.features ? (
                      <>
                        <h4 className="project-subtitle">Features</h4>
                        <ul className="project-details-list">
                          {project.features.map((feature, i) => (<li key={i}>{feature}</li>))}
                        </ul>
                      </>
                    ) : (
                      project.mainFunctionalities && (
                        <>
                          <h4 className="project-subtitle">Main Functionalities</h4>
                          <ul className="project-details-list">
                            {project.mainFunctionalities.map((func, i) => (<li key={i}>{func}</li>))}
                          </ul>
                        </>
                      )
                    )}
                    <p className="project-tech-details"><strong>Technologies Used:</strong> {project.technologies}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;