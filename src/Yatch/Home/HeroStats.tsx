import React from 'react';

export default function HeroStats() {
  return (
    <section style={{
      background: '#ffffff',
      borderTop: '1px solid #f1f5f9',
      borderBottom: '1px solid #f1f5f9',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 5%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'stretch',
      }}>

        {/* LENGTH */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2.2rem 1rem' }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-color)', marginBottom: '0.9rem' }}>
            <path d="M4 12h16m-16 0 4-4m-4 4 4 4m12-4-4-4m4 4-4 4" />
          </svg>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', fontWeight: 600, color: '#0f172a', lineHeight: 1, marginBottom: '0.35rem' }}>150ft+</div>
          <div style={{ fontSize: '0.62rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>LENGTH</div>
        </div>

        {/* Divider */}
        <div style={{ width: '1px', background: '#e2e8f0', margin: '1rem 0' }} />

        {/* GUESTS */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2.2rem 1rem' }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-color)', marginBottom: '0.9rem' }}>
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', fontWeight: 600, color: '#0f172a', lineHeight: 1, marginBottom: '0.35rem' }}>36</div>
          <div style={{ fontSize: '0.62rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>GUESTS</div>
        </div>

        {/* Divider */}
        <div style={{ width: '1px', background: '#e2e8f0', margin: '1rem 0' }} />

        {/* TOP SPEED */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2.2rem 1rem' }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-color)', marginBottom: '0.9rem' }}>
            <circle cx="12" cy="12" r="10" /><path d="m16 8-4 4" /><path d="M12 16h.01" />
          </svg>
          <div style={{
            fontFamily: 'var(--font-serif)', fontSize: '2.2rem', fontWeight: 600, color: '#0f172a',
            lineHeight: 1, marginBottom: '0.35rem',
            display: 'flex', alignItems: 'baseline', gap: '5px'
          }}>
            28 <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', letterSpacing: '1.5px', color: '#0f172a', fontWeight: 600 }}>KNOTS</span>
          </div>
          <div style={{ fontSize: '0.62rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>TOP SPEED</div>
        </div>

        {/* Divider */}
        <div style={{ width: '1px', background: '#e2e8f0', margin: '1rem 0' }} />

        {/* LUXURY SUITES */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2.2rem 1rem' }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-color)', marginBottom: '0.9rem' }}>
            <path d="M2 4v16" /><path d="M2 8h18a2 2 0 0 1 2 2v10" /><path d="M2 17h20" /><path d="M6 8v9" />
          </svg>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', fontWeight: 600, color: '#0f172a', lineHeight: 1, marginBottom: '0.35rem' }}>5</div>
          <div style={{ fontSize: '0.62rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>LUXURY SUITES</div>
        </div>

      </div>
    </section>
  );
}
