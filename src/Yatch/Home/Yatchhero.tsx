'use client';
import React, { useState, useEffect } from 'react';

const BG_IMAGES = [
  '/Hero Images/Ship -hero-6.jpeg',
  '/Hero Images/Ship -hero-1.jpeg',
];

const heroSlideStyle = `
  @keyframes heroFadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  .hero-slide {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 1.4s ease-in-out;
    pointer-events: none;
  }
  .hero-slide.active {
    opacity: 1;
  }
`;

export default function Yatchhero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % BG_IMAGES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-wrap" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px', overflow: 'hidden' }}>
      <style>{heroSlideStyle}</style>

      {/* Crossfading background images */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
        {BG_IMAGES.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Hero background ${i + 1}`}
            className={`hero-slide${i === activeIndex ? ' active' : ''}`}
          />
        ))}
      </div>

      {/* Dark gradient overlays */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to right, rgba(7, 11, 20, 0.9) 0%, rgba(7, 11, 20, 0.4) 50%, rgba(7, 11, 20, 0.1) 100%)', zIndex: 1 }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '180px', background: 'linear-gradient(to top, #070b14, transparent)', zIndex: 1 }} />

      {/* Content */}
      <div style={{ padding: '0 5%', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '600px' }}>
          <span className="subheading">LUXURY REDEFINED</span>
          <h1 className="heading" style={{ fontSize: '4.5rem', marginBottom: '1.5rem' }}>Experience Ocean Freedom Like Never Before</h1>
          <p className="paragraph" style={{ marginBottom: '2.5rem', fontSize: '1.1rem' }}>
            Discover handcrafted superyachts engineered for elegance, performance, and unforgettable journeys across the world's most breathtaking waters.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <button className="btn-ship" style={{ background: '#ffffff', color: '#0f172a', border: 'none' }}>
              <svg className="ship-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 21c3.333-2 6.667-2 10 0s6.667 2 10 0" />
                <path d="M4 18l1.5-6h13L20 18" />
                <path d="M9 12v-4h6v4" />
                <path d="M12 8V4" />
              </svg>
              EXPLORE FLEET ↗
            </button>
          </div>
        </div>

        {/* Right side specs card */}
        <div className="glass-panel" style={{ padding: '2rem', width: '280px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ color: 'var(--accent-color)', display: 'flex' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12h16m-16 0 4-4m-4 4 4 4m12-4-4-4m4 4-4 4" />
              </svg>
            </div>
            <div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>LENGTH</div>
              <div style={{ fontSize: '1.2rem', fontWeight: 600 }}>150 FT+</div>
            </div>
          </div>
          <div style={{ height: '1px', background: 'var(--border-color)' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ color: 'var(--accent-color)', display: 'flex' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><path d="m16 8-4 4" /><path d="M12 16h.01" />
              </svg>
            </div>
            <div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>TOP SPEED</div>
              <div style={{ fontSize: '1.2rem', fontWeight: 600 }}>28 KNOTS</div>
            </div>
          </div>
          <div style={{ height: '1px', background: 'var(--border-color)' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ color: 'var(--accent-color)', display: 'flex' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>GUESTS</div>
              <div style={{ fontSize: '1.2rem', fontWeight: 600 }}>36</div>
            </div>
          </div>
          <div style={{ height: '1px', background: 'var(--border-color)' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ color: 'var(--accent-color)', display: 'flex' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 4v16" /><path d="M2 8h18a2 2 0 0 1 2 2v10" /><path d="M2 17h20" /><path d="M6 8v9" />
              </svg>
            </div>
            <div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>SUITES</div>
              <div style={{ fontSize: '1.2rem', fontWeight: 600 }}>5</div>
            </div>
          </div>
          <button className="btn-ghost" style={{ padding: '0', marginTop: '1rem', color: 'var(--accent-color)', fontSize: '0.75rem' }}>VIEW SPECIFICATIONS →</button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: '20px', left: '5%', display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', zIndex: 10 }}>
        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '30px', height: '30px', border: '1px solid var(--border-color)', borderRadius: '50%' }}>↓</span>
        SCROLL TO EXPLORE
      </div>

      {/* Slide dots indicator */}
      <div style={{ position: 'absolute', bottom: '30px', right: '5%', display: 'flex', gap: '10px', zIndex: 10 }}>
        {BG_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            style={{
              width: i === activeIndex ? '36px' : '10px',
              height: '10px',
              borderRadius: '5px',
              background: i === activeIndex ? '#38bdf8' : 'rgba(255,255,255,0.4)',
              border: 'none',
              cursor: 'pointer',
              transition: 'width 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), background-color 0.4s ease',
              padding: 0,
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

