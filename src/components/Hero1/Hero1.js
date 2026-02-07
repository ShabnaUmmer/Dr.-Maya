import React from 'react';
import './Hero1.css';

const Hero1 = () => {
  return (
    <section className="hero1" id="about">
      <div className="hero1-container">
        <div className="hero1-image-wrapper">
          <img 
            src="./Dr. Maya.png"
            alt="Dr. Maya" 
            className="hero1-main-img"
          />
        </div>

        <div className="hero1-text-content">
          <p className="hero1-subtitle">LICENSED CLINICAL PSYCHOLOGIST</p>
          <h1 className="hero1-title">
            Therapy for the <br /> 
            <span className="italic">high-achieving</span> mind.
          </h1>
          <p className="hero1-desc">
            Helping adults in Santa Monica and across California navigate anxiety, 
            professional burnout, and the lingering effects of trauma.
          </p>
          <button className="hero1-cta">BOOK A CONSULTATION</button>
        </div>
      </div>
    </section>
  );
};

export default Hero1;