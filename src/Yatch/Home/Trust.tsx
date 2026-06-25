import React from 'react';

export default function Trust() {
  return (
    <section id="trust" className="trust-section">
      <div className="trust-video-bg">
        <video autoPlay loop muted playsInline className="trust-video">
          <source src="/Yacht/yatch Ship.mp4" type="video/mp4" />
        </video>
        <div className="trust-overlay"></div>
      </div>
      <div className="trust-content">
        <h2 className="section-title">Trusted by the Elite</h2>
        <p className="section-text" style={{margin: '0 auto', color: '#f5f5f5'}}>
          Join an exclusive community of visionaries and pioneers who accept nothing but the absolute best. Our legacy is built on unyielding excellence.
        </p>
        <div className="trust-stats">
          <div className="stat">
            <h4>50+</h4>
            <p>Awards Won</p>
          </div>
          <div className="stat">
            <h4>1000+</h4>
            <p>Happy Clients</p>
          </div>
          <div className="stat">
            <h4>20+</h4>
            <p>Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
