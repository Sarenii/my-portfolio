// src/components/Projects.js
import React, { useState } from 'react';
import '../styles/Projects.css'; // Assuming this path is correct for your setup

// Data for Software Development Projects
const softwareProjectsData = [
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
    id: "harmosoft-web",
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

// Data for UI/UX Design Projects
const uiuxProjectsData = [
  {
    id: "pawlsar",
    type: "uiux",
    name: "Pawlsar Mobile UI",
    role: "UI/UX Designer", // Please confirm if this role is still accurate
    summary: "Designed a comprehensive mobile application for dog owners, featuring a dedicated social platform for dogs and their owners, an integrated marketplace for pet products and services, alongside intuitive pet care management tools.",
    projectGoal: "To create an all-in-one mobile hub for dog enthusiasts that combines social networking, e-commerce for pet needs, and pet management into a seamless, engaging, and user-friendly experience.",
    designHighlights: [
      "Intuitive design for a 'social feed' tailored for pets, including profile creation for dogs and activity sharing features.",
      "User-friendly interface and navigation for an in-app marketplace allowing users to browse and purchase pet-related goods and services.",
      "User flow mapping and wireframing for core features including social interactions, marketplace transactions, and pet care functionalities.",
      "High-fidelity mockups and interactive prototypes showcasing the integrated social, marketplace, and pet management sections.",
      "Development of a consistent design system and branding to foster a vibrant and trustworthy community platform.",
      "User testing sessions to refine usability across all major app sections (social, marketplace, pet care)."
    ],
    toolsUsed: "Figma, Adobe Illustrator", 
    showcaseImage: "/images/Pawlsar UI.png", 
    designLink: null // 
  },
  { 
    id: "harmosoft-books",
    type: "uiux",
    name: "Harmosoft Books Web UI",
    role: "UI/UX Designer", // Please confirm if this role is still accurate
    summary: "Led the UI/UX design for an e-commerce web platform specifically for selling school books to students. The design focused on creating an intuitive, engaging, and easy-to-navigate purchasing experience for students, parents, and educators.",
    projectGoal: "To design a user-friendly e-commerce platform that simplifies the discovery and purchase of school books, making educational resources more accessible to children and their families.",
    designHighlights: [
      "Age-appropriate and visually engaging interface design tailored for school children.",
      "Clear book categorization by grade, subject, and curriculum for easy Browse.",
      "Intuitive search functionality to quickly find specific titles or authors.",
      "Streamlined and secure checkout process for parents or guardians.",
      "Responsive design ensuring accessibility across desktops, tablets, and mobile devices.",
      "Accessibility features considered to support diverse user needs."
    ],
    toolsUsed: "Figma, Canva",
    showcaseImage: "/images/Harmosoft Books UI.png",
    designLink: null 
  }
];


function Projects() {
  const [expandedProjectId, setExpandedProjectId] = useState(null);
  const [activeTab, setActiveTab] = useState('software'); 
  const toggleProjectDetails = (projectId) => {
    if (expandedProjectId === projectId) {
      setExpandedProjectId(null);
    } else {
      setExpandedProjectId(projectId);
    }
  };

  const projectsToDisplay = activeTab === 'software' ? softwareProjectsData : uiuxProjectsData;

  return (
    <section id="projects" className="projects-section">
      <div className="projects-content-wrapper">
        <h2 className="section-title">My Projects</h2>

        <div className="project-tabs">
          <button
            className={`tab-button ${activeTab === 'software' ? 'active' : ''}`}
            onClick={() => { setActiveTab('software'); setExpandedProjectId(null); }}
          >
            Software Development
          </button>
          <button
            className={`tab-button ${activeTab === 'uiux' ? 'active' : ''}`}
            onClick={() => { setActiveTab('uiux'); setExpandedProjectId(null); }}
          >
            UI/UX Design
          </button>
        </div>

        <div className="projects-grid">
          {projectsToDisplay.map((project) => {
            const isExpanded = expandedProjectId === project.id;
            return (
              <div key={project.id} className={`project-card ${isExpanded ? 'expanded' : ''}`}>
                <div className="project-card-summary">
                  <h3 className="project-name">{project.name}</h3>
                  {project.role && <p className="project-role">{project.role}</p>}
                  <p className="project-summary-text">{project.summary}</p>
                  
                  {project.type === 'uiux' ? (
                    <div className="project-links-minimal">
                      {project.designLink && (
                        <a href={project.designLink} target="_blank" rel="noopener noreferrer" className="project-link-minimal live">
                          View Design
                        </a>
                      )}
                    </div>
                  ) : (
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
                  )}
                  
                  <button onClick={() => toggleProjectDetails(project.id)} className="learn-more-button">
                    {isExpanded ? 'Show Less' : 'Learn More'}
                  </button>
                </div>

                {isExpanded && (
                  <div className="project-card-details">
                    {project.type === 'uiux' && (
                      <>
                        {project.showcaseImage && (
                          <div className="project-showcase-image-container">
                            <img src={process.env.PUBLIC_URL + project.showcaseImage} alt={`${project.name} Showcase`} className="project-showcase-image" />
                          </div>
                        )}
                        {project.projectGoal && (
                          <>
                           <h4 className="project-subtitle">Project Goal</h4>
                           <p className="project-overview-detail-text">{project.projectGoal}</p>
                          </>
                        )}
                        {project.designHighlights && project.designHighlights.length > 0 && (
                          <>
                            <h4 className="project-subtitle">Key Design Contributions</h4>
                            <ul className="project-details-list">
                              {project.designHighlights.map((highlight, i) => (<li key={i}>{highlight}</li>))}
                            </ul>
                          </>
                        )}
                        {project.toolsUsed && (
                           <p className="project-tech-details"><strong>Tools Used:</strong> {project.toolsUsed}</p>
                        )}
                      </>
                    )}

                    {!project.type && ( 
                      <>
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
                        {project.technologies && (
                           <p className="project-tech-details"><strong>Technologies Used:</strong> {project.technologies}</p>
                        )}
                      </>
                    )}
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