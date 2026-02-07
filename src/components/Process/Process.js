import React from 'react';
import './Process.css';

const Process = () => {
  return (
    <section className="process-section" id ="process">
      <div className="process-header">
        <h2>How We Begin</h2>
        <p>A structured approach to your mental well-being.</p>
      </div>
      <div className="process-grid">
        <div className="process-item">
          <span>01</span>
          <h3>Initial Consultation</h3>
          <p>A 15-minute phone call to ensure we are a good fit for your specific goals.</p>
        </div>
        <div className="process-item">
          <span>02</span>
          <h3>Deep Assessment</h3>
          <p>We explore your history and current challenges in a safe, confidential space.</p>
        </div>
        <div className="process-item">
          <span>03</span>
          <h3>Collaborative Growth</h3>
          <p>Developing a personalized treatment plan using evidence-based modalities.</p>
        </div>
      </div>
    </section>
  );
};

export default Process;