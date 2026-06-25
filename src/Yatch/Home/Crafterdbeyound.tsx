import React from 'react';

export default function Crafterdbeyound() {
  return (
    <section style={{ position: 'relative', padding: '10rem 5%', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      {/* Video Background Layer */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src="/Yacht/Hero Yacht.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay from the left to make text readable */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 45%, transparent 100%)' }}></div>
      </div>

      {/* Content Layer */}
      <div style={{ display: 'flex', width: '100%', alignItems: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ width: '45%' }}>
          <h2 className="heading-sm" style={{ marginBottom: '1.5rem', color: '#ffffff' }}>Crafted Beyond Expectations</h2>
          <p className="paragraph" style={{ marginBottom: '0', color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem' }}>
            Take a closer look at the craftsmanship, performance, and luxury that define the YACHTA experience.
          </p>
        </div>
        <div style={{ width: '55%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <button style={{ 
            width: '80px', height: '80px', borderRadius: '50%', 
            border: '2px solid #ffffff', 
            background: 'rgba(255,255,255,0.1)', 
            backdropFilter: 'blur(8px)', 
            color: '#ffffff', 
            fontSize: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', 
            cursor: 'pointer', marginBottom: '1rem', transition: 'all 0.3s' 
          }}>
            <span style={{ marginLeft: '4px' }}>►</span>
          </button>
          <span style={{ fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600, color: '#ffffff' }}>WATCH FULL EXPERIENCE</span>
        </div>
      </div>
    </section>
  );
}
