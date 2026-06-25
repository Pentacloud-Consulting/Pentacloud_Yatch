import React from 'react';

export default function Outfleet() {
  return (
    <section className="section" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div className="flex-between" style={{ marginBottom: '3rem' }}>
        <div>
          <span className="subheading">OUR FLEET</span>
          <h2 className="heading-sm" style={{ marginBottom: 0, fontSize: '2.2rem' }}>Choose Your Perfect Yacht</h2>
        </div>
        <div>
          <button className="btn-ghost" style={{ padding: '0', display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '0.75rem', letterSpacing: '1px' }}>
            VIEW FULL FLEET
            <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(56, 189, 248, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </button>
        </div>
      </div>

      <div className="grid-3" style={{ gap: '1.5rem' }}>
        
        {/* Card 1 */}
        <div className="card-img" style={{ aspectRatio: '16/10', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '2rem', overflow: 'hidden', position: 'relative' }}>
          <img src="/Hero Images/OurFleet -2.jpeg" alt="Aquila" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          {/* Gradient Overlay for Text Readability */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.7) 100%)', zIndex: 0 }}></div>
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h3 style={{ fontSize: '1.6rem', fontFamily: 'var(--font-serif)', marginBottom: '0.3rem', color: '#fff' }}>Aquila</h3>
            <span style={{ fontSize: '0.65rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>120 FT SUPERYACHT</span>
          </div>
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)' }}>Starting from</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 600, color: '#fff', marginBottom: '1.5rem' }}>$12,500,000</div>
            <button className="btn-ghost" style={{ padding: 0, fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff' }}>
              VIEW DETAILS 
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.3)' }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </button>
          </div>
        </div>
        
        {/* Card 2 */}
        <div className="card-img" style={{ aspectRatio: '16/10', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '2rem', overflow: 'hidden', position: 'relative' }}>
          <img src="/Hero Images/OurFleet -1.jpeg" alt="Aurora" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.7) 100%)', zIndex: 0 }}></div>
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h3 style={{ fontSize: '1.6rem', fontFamily: 'var(--font-serif)', marginBottom: '0.3rem', color: '#fff' }}>Aurora</h3>
            <span style={{ fontSize: '0.65rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>150 FT SUPERYACHT</span>
          </div>
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)' }}>Starting from</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 600, color: '#fff', marginBottom: '1.5rem' }}>$18,750,000</div>
            <button className="btn-ghost" style={{ padding: 0, fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff' }}>
              VIEW DETAILS 
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.3)' }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card-img" style={{ aspectRatio: '16/10', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '2rem', overflow: 'hidden', position: 'relative' }}>
          <img src="/Hero Images/OurFleet -3.jpeg" alt="Eclipse" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.7) 100%)', zIndex: 0 }}></div>
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h3 style={{ fontSize: '1.6rem', fontFamily: 'var(--font-serif)', marginBottom: '0.3rem', color: '#fff' }}>Eclipse</h3>
            <span style={{ fontSize: '0.65rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>180 FT SUPERYACHT</span>
          </div>
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)' }}>Starting from</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 600, color: '#fff', marginBottom: '1.5rem' }}>$25,900,000</div>
            <button className="btn-ghost" style={{ padding: 0, fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff' }}>
              VIEW DETAILS 
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.3)' }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
