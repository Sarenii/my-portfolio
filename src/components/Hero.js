import React from 'react';
import '../styles/Hero.css'; // Path to your Hero.css in src/styles/

function Hero() {
  // **IMPORTANT ACTION FOR YOU:**
  // 1. Create a folder named 'images' inside your 'public' folder (public/images/).
  // 2. Place your photo in that 'public/images/' folder (e.g., 'sarah-photo.jpg').
  // 3. Update the 'photoUrl' below to point to your image:
  //    const photoUrl = "/images/your-photo-filename.jpg"; 
  //
  // Using a placeholder for now:
  const photoUrl = "/images/sarah-photo.jpeg";

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content-grid"> {/* Grid container for text and image */}
        <div className="hero-text-content">
          <h1 className="hero-name">Sarah Mueni Mutambu</h1>
          <h2 className="hero-title">Software Engineer</h2>
          <p className="hero-intro">
            I'm a versatile Software Engineer skilled in full-stack web and mobile development,
            with experience in system optimization and IT operations.
            I thrive in Agile teams, delivering reliable, user-focused solutions.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="hero-button primary">View My Work</a>
            <a href="#contact" className="hero-button secondary">Get In Touch</a>
          </div>
        </div>
        <div className="hero-image-container">
          <img
            src={photoUrl}
            alt="Sarah Mueni Mutambu"
            className="hero-photo"
            onError={(e) => {
              // Fallback if the primary photoUrl fails
              e.target.onerror = null; 
              e.target.src="https://placehold.co/400x400/2E4033/F5F5F0?text=Photo+Here"; 
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;