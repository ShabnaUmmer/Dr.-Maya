import React, { useState } from 'react';
import './Background.css';

const Background = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const backgroundData = [
    {
      title: "Education",
      content: "Doctor of Psychology (Psy.D.) in Clinical Psychology — Pepperdine University. Bachelor of Arts in Psychology — University of California, Los Angeles (UCLA)."
    },
    {
      title: "Licensure",
      content: "Licensed Clinical Psychologist in the State of California (PSY 12345). Providing telehealth services to residents across California and in-person sessions in Santa Monica."
    },
    {
      title: "Certifications",
      content: "Certified EMDR Therapist through EMDRIA. Specialized training in Mindfulness-Based Stress Reduction (MBSR) and Trauma-Focused Cognitive Behavioral Therapy."
    }
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="background-section">
      <h2 className="background-title">My Professional Background</h2>
      
      <div className="background-list">
        {backgroundData.map((item, index) => (
          <div key={index} className="background-item">
            <div 
              className="background-header" 
              onClick={() => handleToggle(index)}
            >
              <h3 className="background-label">{item.title}</h3>
              <span className="background-icon">
                {openIndex === index ? '—' : '+'}
              </span>
            </div>
            
            {openIndex === index && (
              <div className="background-content">
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Background;