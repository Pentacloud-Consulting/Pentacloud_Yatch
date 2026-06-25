import React from 'react';

export default function Memories() {
  return (
    <section className="memories-section" style={{ padding: '3rem 5%', paddingTop: '6rem', backgroundColor: '#fdfdfd', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span style={{ 
            color: '#0284c7', 
            textTransform: 'uppercase', 
            letterSpacing: '1.5px', 
            fontSize: '0.8rem', 
            fontWeight: '600' 
          }}>
            THE YACHT EXPERIENCE
          </span>
          <h2 style={{ 
            fontSize: '2.5rem', 
            color: '#0f172a', 
            marginTop: '0.75rem', 
            marginBottom: '0.75rem', 
            fontFamily: '"Playfair Display", serif',
            fontWeight: '500'
          }}>
            Create Unforgettable<br/>Memories At Sea
          </h2>
          <p style={{ 
            color: '#666', 
            maxWidth: '650px', 
            margin: '0 auto', 
            fontSize: '0.95rem', 
            lineHeight: '1.6' 
          }}>
            Whether you're enjoying a private getaway, celebrating with loved ones,<br/>
            or exploring breathtaking coastlines, every voyage is crafted to deliver<br/>
            luxury, comfort, and unforgettable experiences.
          </p>
        </div>

        {/* Top Feature Row */}
        <div style={{ position: 'relative', marginBottom: '3rem' }}>
          {/* Main Image */}
          <div style={{ paddingRight: '120px' }}>
            <img 
              src="/Images/Memories Hero.png" 
              alt="People enjoying a yacht experience" 
              style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '12px', display: 'block', minHeight: '300px', maxHeight: '380px' }} 
            />
          </div>
          
          {/* Right Card */}
          <div style={{ 
            position: 'absolute',
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            width: '320px',
            backgroundColor: '#ffffff', 
            padding: '2rem', 
            borderRadius: '12px', 
            boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
            border: '1px solid #eaeaea',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            zIndex: 10
          }}>
            <div style={{ marginBottom: '0.75rem' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 21c.6.5 1.2 1 2.5 1 1.3 0 2.5-.5 3.5-1.2C9 20 10.2 19.5 11.5 19.5c1.3 0 2.5.5 3.5 1.2 1 .7 2.2 1.2 3.5 1.2 1.3 0 1.9-.5 2.5-1"></path>
                <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76"></path>
                <path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"></path>
                <path d="M12 10v4"></path>
                <path d="M12 2v3"></path>
              </svg>
            </div>
            <h3 style={{ 
              fontSize: '1.5rem', 
              color: '#0f172a', 
              marginBottom: '0.75rem', 
              fontFamily: '"Playfair Display", serif',
              fontWeight: '500',
              lineHeight: '1.2'
            }}>
              Experience Luxury<br/>Beyond Sailing
            </h3>
            <p style={{ color: '#666', fontSize: '0.85rem', lineHeight: '1.5', marginBottom: '1.5rem' }}>
              Every journey is carefully designed to combine world-class service, breathtaking destinations, and unmatched comfort — allowing you to focus entirely on making unforgettable memories.
            </p>
            <div>
              <button className="btn-ship" style={{ background: '#ffffff', color: '#0f172a', border: '1px solid #ccc', borderRadius: '4px', padding: '0.5rem 1rem', fontWeight: 'bold', fontSize: '0.75rem' }}>
                <svg className="ship-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem' }}>
                  <path d="M2 21c3.333-2 6.667-2 10 0s6.667 2 10 0" />
                  <path d="M4 18l1.5-6h13L20 18" />
                  <path d="M9 12v-4h6v4" />
                  <path d="M12 8V4" />
                </svg>
                DISCOVER MORE ↗
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', maxWidth: '700px', margin: '0 auto 2rem auto' }}>
          <div style={{ height: '1px', backgroundColor: '#eaeaea', flex: 1 }}></div>
          <span style={{ 
            padding: '0 1rem', 
            color: '#0284c7', 
            textTransform: 'uppercase', 
            letterSpacing: '1.5px', 
            fontSize: '0.8rem', 
            fontWeight: '600' 
          }}>
            THE YACHT EXPERIENCE
          </span>
          <div style={{ height: '1px', backgroundColor: '#eaeaea', flex: 1 }}></div>
        </div>

        {/* Bottom Feature Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
          
          {/* Card 1 */}
          <div style={{ 
            position: 'relative',
            backgroundColor: '#ffffff', 
            borderRadius: '12px', 
            boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
            border: '1px solid #eaeaea',
            overflow: 'hidden',
            minHeight: '160px',
            display: 'flex',
            alignItems: 'center'
          }}>
            <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '45%', zIndex: 0 }}>
              <img src="/Images/Yacht at sea.png" alt="Private Charter" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0.95) 15%, transparent 100%)' }}></div>
            </div>
            <div style={{ position: 'relative', zIndex: 1, padding: '2rem', width: '65%', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ 
                backgroundColor: '#f0f5fa', 
                borderRadius: '50%', 
                width: '50px', 
                height: '50px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 21c.6.5 1.2 1 2.5 1 1.3 0 2.5-.5 3.5-1.2C9 20 10.2 19.5 11.5 19.5c1.3 0 2.5.5 3.5 1.2 1 .7 2.2 1.2 3.5 1.2 1.3 0 1.9-.5 2.5-1"></path>
                  <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76"></path>
                  <path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"></path>
                </svg>
              </div>
              <div>
                <h4 style={{ fontSize: '1.25rem', color: '#0f172a', marginBottom: '0.4rem', fontFamily: '"Playfair Display", serif', fontWeight: '600' }}>Private Charter</h4>
                <p style={{ color: '#555', fontSize: '0.85rem', lineHeight: '1.5', margin: 0 }}>
                  Enjoy complete privacy with fully customized itineraries tailored exclusively for your journey.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div style={{ 
            position: 'relative',
            backgroundColor: '#ffffff', 
            borderRadius: '12px', 
            boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
            border: '1px solid #eaeaea',
            overflow: 'hidden',
            minHeight: '160px',
            display: 'flex',
            alignItems: 'center'
          }}>
            <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '45%', zIndex: 0 }}>
              <img src="/Images/Memories Work.png" alt="Personalized Service" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0.95) 15%, transparent 100%)' }}></div>
            </div>
            <div style={{ position: 'relative', zIndex: 1, padding: '2rem', width: '65%', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ 
                backgroundColor: '#f0f5fa', 
                borderRadius: '50%', 
                width: '50px', 
                height: '50px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20"></path>
                  <path d="M18.5 7.5c-3-2-7-2-10 0"></path>
                  <path d="M5.5 12.5c3 2 7 2 10 0"></path>
                  <path d="M18.5 17.5c-3 2-7 2-10 0"></path>
                </svg>
              </div>
              <div>
                <h4 style={{ fontSize: '1.25rem', color: '#0f172a', marginBottom: '0.4rem', fontFamily: '"Playfair Display", serif', fontWeight: '600' }}>Personalized Service</h4>
                <p style={{ color: '#555', fontSize: '0.85rem', lineHeight: '1.5', margin: 0 }}>
                  Professional crew, private chefs, concierge assistance, and five-star hospitality throughout your voyage.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div style={{ 
            position: 'relative',
            backgroundColor: '#ffffff', 
            borderRadius: '12px', 
            boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
            border: '1px solid #eaeaea',
            overflow: 'hidden',
            minHeight: '160px',
            display: 'flex',
            alignItems: 'center'
          }}>
            <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '45%', zIndex: 0 }}>
              <img src="/Images/LEVEL -1.png" alt="World-Class Fleet" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0.95) 15%, transparent 100%)' }}></div>
            </div>
            <div style={{ position: 'relative', zIndex: 1, padding: '2rem', width: '65%', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ 
                backgroundColor: '#f0f5fa', 
                borderRadius: '50%', 
                width: '50px', 
                height: '50px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="5" r="3"></circle>
                  <line x1="12" y1="22" x2="12" y2="8"></line>
                  <path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>
                </svg>
              </div>
              <div>
                <h4 style={{ fontSize: '1.25rem', color: '#0f172a', marginBottom: '0.4rem', fontFamily: '"Playfair Display", serif', fontWeight: '600' }}>World-Class Fleet</h4>
                <p style={{ color: '#555', fontSize: '0.85rem', lineHeight: '1.5', margin: 0 }}>
                  Choose from a carefully curated collection of award-winning luxury yachts for every occasion.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div style={{ 
            position: 'relative',
            backgroundColor: '#ffffff', 
            borderRadius: '12px', 
            boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
            border: '1px solid #eaeaea',
            overflow: 'hidden',
            minHeight: '160px',
            display: 'flex',
            alignItems: 'center'
          }}>
            <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '45%', zIndex: 0 }}>
              <img src="/Images/Memories Love.png" alt="Iconic Destinations" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0.95) 15%, transparent 100%)' }}></div>
            </div>
            <div style={{ position: 'relative', zIndex: 1, padding: '2rem', width: '65%', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ 
                backgroundColor: '#f0f5fa', 
                borderRadius: '50%', 
                width: '50px', 
                height: '50px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                </svg>
              </div>
              <div>
                <h4 style={{ fontSize: '1.25rem', color: '#0f172a', marginBottom: '0.4rem', fontFamily: '"Playfair Display", serif', fontWeight: '600' }}>Iconic Destinations</h4>
                <p style={{ color: '#555', fontSize: '0.85rem', lineHeight: '1.5', margin: 0 }}>
                  Cruise through the Mediterranean, Maldives, Dubai, Monaco, and countless breathtaking coastlines.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
