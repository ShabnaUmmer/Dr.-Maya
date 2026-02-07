import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* LEFT SIDE: Identity details */}
        <div className="footer-identity-group">
          <h2 className="footer-logo">Dr. Maya Reynolds, PsyD</h2>
          
          <div className="footer-info">
            <p>Santa Monica Office</p>
            <p>Santa Monica, CA 90401</p>
          </div>

          <div className="footer-contact">
            <a href="mailto:hello@drmayareynolds.com">hello@drmayareynolds.com</a>
            <p>(310) 555-0123</p>
          </div>
        </div>

        {/* RIGHT SIDE: Hours and Find columns */}
        <div className="footer-links-group">
          <div className="footer-hours">
            <h3>Hours</h3>
            <p>Monday – Friday</p>
            <p>9am – 5pm</p>
          </div>

          <div className="footer-nav">
            <h3>Find</h3>
            <nav>
              <a href="/">Home</a>
              <a href="/contact">Contact</a>
              <a href="/blog">Blog</a>
            </nav>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;