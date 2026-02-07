import React from 'react';
import './Hero3.css';

const Hero3 = () => {
  return (
    <section className="hero3-section" id="office">
      <div className="hero3-container">
        <div className="hero3-image-box">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c" 
            alt="Dr. Maya Reynolds Office" 
          />
        </div>

        <div className="hero3-content">
          <h2 className="hero3-title">Live a fulfilling life.</h2>
          <div className="hero3-text">
            <p>
              Life can be challenging—especially when you're trying to balance 
              your personal and professional life.
            </p>
            <p>
              It's easy to feel like you're alone in facing these challenges, 
              but I want you to know that I'm here to help.
            </p>
          </div>
          <button className="hero3-button">
            GET IN TOUCH <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero3;