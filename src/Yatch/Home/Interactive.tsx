'use client';
import React, { useState, useEffect } from 'react';

export default function Interactive() {
  const [activeShip, setActiveShip] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveShip((prev) => (prev === 1 ? 2 : 1));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section" style={{ borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ width: '25%' }}>
          <span className="subheading">INTERACTIVE EXPERIENCE</span>
          <h2 className="heading-sm" style={{ marginBottom: '1rem' }}>Explore Every Corner</h2>
          <p className="paragraph" style={{ marginBottom: '2rem' }}>
            Click on any part of the yacht to discover more.
          </p>
          <button className="btn-ship">
            <svg className="ship-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 21c3.333-2 6.667-2 10 0s6.667 2 10 0" />
              <path d="M4 18l1.5-6h13L20 18" />
              <path d="M9 12v-4h6v4" />
              <path d="M12 8V4" />
            </svg>
            EXPLORE NOW
          </button>
        </div>
        
        <div style={{ width: '50%', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '350px' }}>
          <style>{`
            @keyframes shipFloat {
              0% { transform: translateY(0px); }
              50% { transform: translateY(-15px); }
              100% { transform: translateY(0px); }
            }
            .ship-dynamic {
              position: absolute;
              width: 100%;
              max-width: 800px;
              object-fit: contain;
              animation: shipFloat 6s ease-in-out infinite;
              transition: opacity 1.5s ease-in-out;
            }
          `}</style>
          
          <img 
            src="/Yacht/Ship 1.png" 
            alt="Yacht View 1" 
            className="ship-dynamic"
            style={{ opacity: activeShip === 1 ? 1 : 0 }} 
          />
          <img 
            src="/Yacht/Ship 2.png" 
            alt="Yacht View 2" 
            className="ship-dynamic"
            style={{ opacity: activeShip === 2 ? 1 : 0 }} 
          />
        </div>

        <div style={{ width: '22%' }}>
          <div style={{ borderRadius: '12px', position: 'relative', overflow: 'hidden', height: '350px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '1.5rem', border: '1px solid rgba(0,0,0,0.05)' }}>
            <img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=400&auto=format&fit=crop" alt="Master Suite" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)', zIndex: 1 }} />
            <button style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(4px)', border: 'none', color: '#fff', borderRadius: '50%', width: '28px', height: '28px', cursor: 'pointer', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>×</button>
            <div style={{ position: 'relative', zIndex: 2, color: '#ffffff' }}>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontFamily: 'var(--font-sans)', fontWeight: 600, color: '#ffffff' }}>Master Suite</h4>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.8rem', lineHeight: 1.5, marginBottom: '1rem' }}>
                Experience the pinnacle of luxury with panoramic views, premium materials, and unmatched comfort.
              </p>
              <button className="btn-ghost" style={{ padding: 0, color: '#ffffff', fontSize: '0.75rem' }}>EXPLORE SUITE →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
