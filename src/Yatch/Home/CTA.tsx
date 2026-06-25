import React from 'react';

export default function CTA() {
  return (
    <section style={{ padding: '4rem 5%' }}>
      <div style={{
        position: 'relative',
        borderRadius: '16px',
        overflow: 'hidden',
        minHeight: '220px',
        display: 'flex',
        alignItems: 'center',
        border: '1px solid rgba(255,255,255,0.08)'
      }}>
        {/* Background yacht video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center right', zIndex: 0 }}
        >
          <source src="/Yacht/yacht Floating.mp4" type="video/mp4" />
        </video>
        {/* Decreased left-to-right dark shade so text stays readable but less heavy */}
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          background: 'linear-gradient(to right, rgba(5,9,18,0.9) 0%, rgba(5,9,18,0.5) 40%, transparent 100%)',
          zIndex: 1
        }}></div>

        {/* Text Content */}
        <div style={{ position: 'relative', zIndex: 2, padding: '3rem 4rem', maxWidth: '480px' }}>
          <h2 className="heading-sm" style={{ fontSize: '2rem', marginBottom: '1rem', lineHeight: 1.25, color: '#ffffff' }}>
            Ready To Begin Your Journey?
          </h2>
          <p className="paragraph" style={{ marginBottom: '2rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7 }}>
            Whether you're exploring private ownership or charter experiences, our team is ready to create your perfect voyage.
          </p>
          <button className="btn-ship" style={{ background: '#ffffff', color: '#0f172a', border: 'none' }}>
            <svg className="ship-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 21c3.333-2 6.667-2 10 0s6.667 2 10 0" />
              <path d="M4 18l1.5-6h13L20 18" />
              <path d="M9 12v-4h6v4" />
              <path d="M12 8V4" />
            </svg>
            SCHEDULE PRIVATE VIEWING ↗
          </button>
        </div>
      </div>
    </section>
  );
}
