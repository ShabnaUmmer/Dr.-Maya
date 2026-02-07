import React from 'react';
import './Office.css';

const Office = () => {
  return (
    <section id="office" className="office-section">
        <h2 className="my-office">My Office</h2>
      <div className="office-container">
        
        <div className="office-visuals">
          <div className="office-img-primary">
            <img 
              src="./office1.jpeg" 
              alt="Dr. Maya Reynolds Santa Monica Office - Main Consulting Space" 
            />
          </div>
          <div className="office-img-secondary">
            <img 
              src="./office2.jpeg" 
              alt="Office detail showcasing calm, neutral atmosphere" 
            />
          </div>
        </div>

        <div className="office-text-content">
          <span className="office-label">THE PRACTICE</span>
          <h2 className="office-heading">A Sanctuary in Santa Monica</h2>
          <p className="office-body">
            Healing begins with your environment. My office is intentionally designed 
            to be a warm, neutral space where you can feel grounded and secure. 
            From soft lighting to curated textures, every detail supports the 
            confidential and restorative nature of our work together.
          </p>
          <div className="office-meta">
            <div className="meta-item">
              <strong>Location</strong>
              <span>Santa Monica, CA (Hybrid Available)</span>
            </div>
            <div className="meta-item">
              <strong>Atmosphere</strong>
              <span>Private, Calm, and Intentional</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Office;