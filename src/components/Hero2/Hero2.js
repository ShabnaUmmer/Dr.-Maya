import React from 'react';
import './Hero2.css';

const Hero2 = () => {
  return (
    <section className="hero2">
      <div className="hero2-container">
        <div className="hero2-text-container">
          <h2 className="hero2-headline">Functional on the outside, struggling within.</h2>
          <p className="hero2-body">
            Many of my clients in Santa Monica are thoughtful and self-aware—but internally feel exhausted, stuck in overthinking, or emotionally on edge. 
          </p>
          <p className="hero2-body">
            I integrate evidence-based methods like CBT and EMDR to address both the emotional and physiological sides of your experience, helping you move from surviving to thriving.
          </p>
          <button className="hero2-btn">GET IN TOUCH →</button>
        </div>

        <div className="hero2-image-container">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c" 
            alt="Dr. Maya Reynolds Therapy Space" 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero2;