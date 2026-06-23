import React from 'react';

export default function Destination() {
  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-color)', overflow: 'hidden' }}>
      <div style={{ display: 'flex', gap: '5rem', alignItems: 'center' }}>
        
        {/* Left Side: Masonry Video Grid */}
        <div style={{ width: '55%', position: 'relative', display: 'flex', gap: '1.5rem', height: '650px' }}>
          <style>{`
            @keyframes floatSlow {
              0% { transform: translateY(0px); }
              50% { transform: translateY(-10px); }
              100% { transform: translateY(0px); }
            }
          `}</style>
          
          {/* Left Column (2 stacked videos) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '50%' }}>
            
            {/* Top Video + Stat Card */}
            <div style={{ position: 'relative', flex: 1.3, borderRadius: '8px', overflow: 'hidden' }}>
              <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }}>
                <source src="/Yacht/Front yacht.mp4" type="video/mp4" />
              </video>
              {/* Stat Card 1 */}
              <div style={{ 
                position: 'absolute', 
                top: '20px', left: '-20px', 
                background: '#fff', 
                padding: '1.5rem 2rem', 
                borderRadius: '4px', 
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)', 
                border: '1px solid #e2e8f0',
                zIndex: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.2rem',
                animation: 'floatSlow 6s ease-in-out infinite'
              }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0f172a', lineHeight: 1 }}>100+</div>
                <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>MOTOR BOATS</div>
              </div>
            </div>

            {/* Bottom Video */}
            <div style={{ position: 'relative', flex: 1, borderRadius: '8px', overflow: 'hidden' }}>
              <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }}>
                <source src="/Yacht/yacht Moving.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Right Column (1 tall video) */}
          <div style={{ width: '50%', position: 'relative', paddingTop: '4rem' }}>
            <div style={{ position: 'relative', width: '100%', height: 'calc(100% - 4rem)', borderRadius: '8px', overflow: 'hidden' }}>
              <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }}>
                <source src="/Yacht/forward yacht 2.mp4" type="video/mp4" />
              </video>
            </div>
            
            {/* Stat Card 2 */}
            <div style={{ 
              position: 'absolute', 
              bottom: '50px', left: '-50px', 
              background: '#fff', 
              padding: '1.5rem 2rem', 
              borderRadius: '4px', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)', 
              border: '1px solid #e2e8f0',
              zIndex: 2,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.2rem',
              animation: 'floatSlow 6s ease-in-out infinite',
              animationDelay: '1.5s'
            }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0f172a', lineHeight: 1 }}>300+</div>
              <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>SUPERYACHTS</div>
            </div>
          </div>
        </div>

        {/* Right Side: Text & CTA Content */}
        <div style={{ width: '45%', paddingLeft: '2rem' }}>
          
          <div style={{ 
            display: 'inline-block', 
            border: '1px solid var(--border-color)', 
            padding: '0.5rem 1.5rem', 
            borderRadius: '30px', 
            fontSize: '0.75rem', 
            fontWeight: 600, 
            color: 'var(--text-secondary)', 
            marginBottom: '2rem', 
            textTransform: 'uppercase', 
            letterSpacing: '1px' 
          }}>
            ABOUT US
          </div>

          <h2 className="heading-sm" style={{ marginBottom: '2rem', color: 'var(--text-primary)', lineHeight: 1.2 }}>
            WE WILL SELECT AND BOOK THE YACHT OF YOUR DREAMS
          </h2>

          <p className="paragraph" style={{ marginBottom: '2.5rem', fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
            We offer luxury yacht rentals for relaxation and entertainment, providing you with unforgettable marine adventures and a high level of service.
          </p>

          <ul style={{ listStyle: 'none', marginBottom: '3rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {[
              'Stunning cruises to iconic destinations', 
              'Premium class boats and luxury yachts', 
              'Guaranteed highest quality of service'
            ].map((item, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-primary)', fontSize: '1rem', fontWeight: 500 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                {item}
              </li>
            ))}
          </ul>

          <button className="btn-ship">
            <svg className="ship-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 21c3.333-2 6.667-2 10 0s6.667 2 10 0" />
              <path d="M4 18l1.5-6h13L20 18" />
              <path d="M9 12v-4h6v4" />
              <path d="M12 8V4" />
            </svg>
            START NOW →
          </button>
        </div>

      </div>
    </section>
  );
}
