import React, { useState } from 'react';
import './Faq.css';

const Faq = () => {
  // stores the index of the open FAQ. If null, all are closed.
  const [openIndex, setOpenIndex] = useState(null); 

  const faqData = [
    {
      question: "Do you take insurance?",
      answer: "I am an out-of-network provider. I can provide you with a monthly superbill that you may submit to your insurance company for potential PPO reimbursement."
    },
    {
      question: "What are your rates?",
      answer: "Rates vary by session type (Individual vs. EMDR intensive). Please contact me directly for a copy of my current fee schedule."
    },
    {
      question: "Do you have any openings?",
      answer: "I currently have limited availability for new clients in my Santa Monica office and via telehealth for California residents."
    }
  ];

  const handleToggle = (index) => {
    // If you click the one that's already open, it closes.
    // If you click a different one, it opens and the previous one closes automatically.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id ="faq">
      <div className="faq-arch-container">
        <img 
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b" 
          alt="Dr. Maya Reynolds Office Decor" 
          className="faq-arch-img"
        />
      </div>

      <h2 className="faq-title">FAQs</h2>

      <div className="faq-list">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div 
              className="faq-header" 
              onClick={() => handleToggle(index)}
            >
              <span className="faq-icon">
                {openIndex === index ? '—' : '+'}
              </span>
              <h3 className="faq-question">{item.question}</h3>
            </div>
            
            {/* The answer only renders if its index matches the openIndex */}
            {openIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;