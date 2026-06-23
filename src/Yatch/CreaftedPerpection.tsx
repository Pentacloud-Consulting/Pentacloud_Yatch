import React from 'react';

const zoomStyle = `
  @keyframes zoomPulse {
    0%   { transform: scale(1); }
    50%  { transform: scale(1.08); }
    100% { transform: scale(1); }
  }
  .card-zoom-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    animation: zoomPulse 8s ease-in-out infinite;
    transform-origin: center center;
  }
  .card-zoom-img:nth-child(odd) {
    animation-delay: -4s;
  }
  .card-img {
    position: relative;
    overflow: hidden;
  }
  .card-overlay {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    padding: 3rem 1.2rem 1.2rem;
    background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 50%, transparent 100%);
    color: #ffffff;
    z-index: 2;
  }
  .card-overlay h4 {
    margin: 0 0 0.3rem 0;
    font-size: 1.15rem;
    font-weight: 600;
    font-family: var(--font-sans);
  }
  .card-overlay p {
    margin: 0;
    font-size: 0.8rem;
    color: rgba(255,255,255,0.85);
    line-height: 1.4;
  }
`;

export default function CreaftedPerpection() {
  return (
    <section className="section" style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
      <style>{zoomStyle}</style>
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'stretch' }}>
        
        {/* Left Text Content */}
        <div style={{ width: '25%', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingRight: '1rem' }}>
          <span className="subheading">CRAFTED TO PERFECTION</span>
          <h2 className="heading-sm" style={{ marginBottom: '1.5rem', fontSize: '2.2rem' }}>Not Just a Yacht.<br/>A Floating Masterpiece.</h2>
          <p className="paragraph" style={{ marginBottom: '2.5rem', fontSize: '0.9rem' }}>
            Every detail is designed to deliver unmatched comfort, cutting-edge technology, and limitless sophistication.
          </p>
          <div>
            <button className="btn-ship">
              <svg className="ship-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 21c3.333-2 6.667-2 10 0s6.667 2 10 0" />
                <path d="M4 18l1.5-6h13L20 18" />
                <path d="M9 12v-4h6v4" />
                <path d="M12 8V4" />
              </svg>
              DISCOVER MORE
            </button>
          </div>
        </div>

        {/* Right Cards */}
        <div style={{ width: '75%', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
          
          <div className="card-img" style={{ aspectRatio: '3/4', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <img className="card-zoom-img" src="https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?q=80&w=600&auto=format&fit=crop" alt="Infinity Pool" />
            <div style={{ position: 'absolute', top: '1rem', left: '1rem', width: '40px', height: '40px', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20M2 16h20M6 12v-4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4"/></svg>
            </div>
            <div className="card-overlay">
              <h4>Infinity Pool</h4>
              <p>Relax in your own oceanfront infinity pool.</p>
            </div>
          </div>

          <div className="card-img" style={{ aspectRatio: '3/4', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <img className="card-zoom-img" src="https://images.unsplash.com/photo-1540946485063-a40da27545f8?q=80&w=600&auto=format&fit=crop" alt="Private Helipad" style={{ animationDelay: '-2s' }} />
            <div style={{ position: 'absolute', top: '1rem', left: '1rem', width: '40px', height: '40px', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg>
            </div>
            <div className="card-overlay">
              <h4>Private Helipad</h4>
              <p>Arrive in style. Anytime, anywhere.</p>
            </div>
          </div>

          <div className="card-img" style={{ aspectRatio: '3/4', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <img className="card-zoom-img" src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=600&auto=format&fit=crop" alt="Master Suites" style={{ animationDelay: '-4s' }} />
            <div style={{ position: 'absolute', top: '1rem', left: '1rem', width: '40px', height: '40px', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9"/></svg>
            </div>
            <div className="card-overlay">
              <h4>Master Suites</h4>
              <p>Unparalleled luxury and absolute comfort.</p>
            </div>
          </div>

          <div className="card-img" style={{ aspectRatio: '3/4', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <img className="card-zoom-img" src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=600&auto=format&fit=crop" alt="Sky Lounge" style={{ animationDelay: '-6s' }} />
            <div style={{ position: 'absolute', top: '1rem', left: '1rem', width: '40px', height: '40px', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 18v-4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4M12 12v-4M8 8h8M6 18h12"/></svg>
            </div>
            <div className="card-overlay">
              <h4>Sky Lounge</h4>
              <p>Breathtaking views. Extraordinary experiences.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
