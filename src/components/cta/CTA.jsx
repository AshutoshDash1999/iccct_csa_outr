import React from 'react';
import './cta.css';

function CTA() {
  return (
    <div className="gpt3__cta">
      <div className="gpt3__cta-content">
        <p>Request Early Access to Get Started</p>
        <h3>Submit your papers early</h3>
      </div>
      <div className="gpt3__cta-btn">
        <a href="https://easychair.org/my/conference?conf=icmib2021">
          <button type="button">Submit Now</button>
        </a>
      </div>
    </div>
  );
}
export default CTA;
