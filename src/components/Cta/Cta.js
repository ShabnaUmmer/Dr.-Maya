import React from 'react';
import './Cta.css';

const Cta = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2 className="cta-title">Get started today.</h2>
        <p className="cta-text">
          Ready to take the first step towards a happier, healthier you? 
          Contact me to book your first session. I look forward to starting 
          this therapeutic journey with you.
        </p>
        <button className="cta-outline-btn">
          GET IN TOUCH <span className="arrow">→</span>
        </button>
      </div>
    </section>
  );
};

export default Cta;