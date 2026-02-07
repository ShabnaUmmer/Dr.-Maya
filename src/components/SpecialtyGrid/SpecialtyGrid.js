import React from 'react';
import './SpecialtyGrid.css';

const specialties = [
  {
    title: "Trauma & EMDR",
    desc: "A carefully paced approach to complex patterns, emphasizing safety, stabilization, and physiological regulation.",
    img: "./s1.jpg"
  },
  {
    title: "Anxiety & Panic",
    desc: "Tools for high-achievers struggling with overthinking, constant worry, and the physical tension of being on edge.",
    img: "./s2.jpg"
  },
  {
    title: "Burnout Recovery",
    desc: "Helping entrepreneurs and professionals reconnect with themselves after years of pushing through chronic stress.",
    img: "./s3.jpeg"
  }
];

const SpecialtyGrid = () => {
  return (
    <section className="specialty-section" id="specialties">
      <h2 className="speciality-heading">My Services</h2>
      <div className="specialty-grid">
        {specialties.map((item, index) => (
          <div key={index} className="specialty-card">
            <h3 className="specialty-card-title">{item.title}</h3>
            <p className="specialty-card-desc">{item.desc}</p>
            <div className="specialty-image-circle">
              <img src={item.img} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialtyGrid;