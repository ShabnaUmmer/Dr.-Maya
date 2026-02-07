import React from 'react';
import './BottomFooter.css';

const BottomFooter = () => {
  return (
    <section className="bottom-footer">
      <div className="legal-links">
        <a href="/privacy">Privacy & Cookies Policy</a>
        <a href="/estimate">Good Faith Estimate</a>
      </div>
      
      <div className="legal-links secondary">
        <a href="/terms">Website Terms & Conditions</a>
        <a href="/disclaimer">Disclaimer</a>
      </div>

      <div className="credits">
        <p>Website Template Credits:</p>
        <a href="https://gobloomcreative.com" target="_blank" rel="noreferrer">
          Go Bloom Creative
        </a>
      </div>

      <div className="copyright">
        <p>All Rights Reserved © 2026 Maya Reynolds, PsyD, LLC.</p>
      </div>
    </section>
  );
};

export default BottomFooter;