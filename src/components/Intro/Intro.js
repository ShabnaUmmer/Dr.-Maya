import React from 'react';
import './Intro.css';

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro-container">
        <div className="intro-text-content">
          <h2 className="intro-greeting">Hi, I'm Maya.</h2>
          <p className="intro-body">
            I’m committed to providing a safe and supportive environment where 
            we can explore your thoughts, feelings, and behaviors. With 
            empathy and guidance, we'll work together to navigate the 
            challenges life throws your way.
          </p>
          <button className="intro-btn">
            LET'S CHAT <span className="arrow">→</span>
          </button>
        </div>

        <div className="intro-image-wrapper">
          <img 
            src="./Dr. Maya Reynolds.png"
            alt="Dr. Maya Reynolds" 
            className="intro-main-img"
          />
        </div>

      </div>
    </section>
  );
};

export default Intro;