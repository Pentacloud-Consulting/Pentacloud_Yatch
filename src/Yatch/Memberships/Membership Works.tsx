import React from 'react';

export default function MembershipWorks() {
  return (
    <div style={{ fontFamily: 'sans-serif', color: '#333' }}>
      
      {/* Section 1: Hero-like block */}
      <section style={{ backgroundColor: '#f4f7f9', padding: '4rem 5%', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '2rem' }}>
        <div style={{ flex: '1 1 500px', maxWidth: '600px' }}>
          <span style={{ color: '#0284c7', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.85rem', fontWeight: 'bold' }}>
            HOW MEMBERSHIP WORKS
          </span>
          <h1 style={{ fontSize: '2.5rem', color: '#0f172a', marginTop: '0.5rem', marginBottom: '1.5rem', fontFamily: '"Playfair Display", serif', lineHeight: '1.1' }}>
            More Time on the Water.<br/>Less Time Worrying.
          </h1>
          <p style={{ color: '#555', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
            YACHTA Club Membership makes boating easy, affordable, and unforgettable. 
            With premium yachts, professional support, and flexible access, you'll enjoy the 
            best of the water—without the responsibilities of ownership.
          </p>
          <p style={{ color: '#555', fontSize: '1.1rem', lineHeight: '1.7' }}>
            Whether you're an experienced boater or brand new to the water, we make it simple.
          </p>
        </div>
        <div style={{ flex: '1 1 500px' }}>
          <img 
            src="/Images/Memories Work.png" 
            alt="Family on yacht" 
            style={{ width: '100%', height: 'auto', borderRadius: '16px 16px 16px 16px', objectFit: 'cover', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} 
          />
        </div>
      </section>

      {/* Section 2: Why Our Members Love Us */}
      <section style={{ padding: '2rem 5%', backgroundColor: '#ffffff' }}>
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <span style={{ color: '#0284c7', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.85rem', fontWeight: 'bold' }}>
            WHY OUR MEMBERS LOVE US
          </span>
        </div>

          <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          position: 'relative', 
          borderRadius: '16px',
          overflow: 'hidden',
          minHeight: '380px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          border: '1px solid #eaeaea'
        }}>
          {/* Background Image */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
             <img src="/Images/Memories Love.png" alt="Marina Background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          {/* Cards List */}
          <div style={{ position: 'relative', zIndex: 1, padding: '1.5rem', width: '100%', maxWidth: '450px', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            
            {[
              { icon: 'M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z M4 22v-7', color: '#0284c7', title: 'PREMIUM BOATS', desc: 'Ready when you are' },
              { icon: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z', color: '#0ea5e9', title: 'ACCESS TO FANTASTIC BOATING DESTINATIONS', desc: 'Across multiple states' },
              { icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75', color: '#0284c7', title: 'PROFESSIONAL, DEDICATED DOCK STAFF', desc: 'To assist with every adventure' },
              { icon: 'M12 2v4 M12 18v4 M4.93 4.93l2.83 2.83 M16.24 16.24l2.83 2.83 M2 12h4 M18 12h4 M4.93 19.07l2.83-2.83 M16.24 7.76l2.83-2.83', color: '#0ea5e9', title: 'NO MAINTENANCE, STORAGE, CLEANING OR FUELING HASSLES', desc: 'We take care of everything' },
              { icon: 'M3 4h18v18H3z M16 2v4 M8 2v4 M3 10h18 M8 14h.01 M12 14h.01 M16 14h.01 M8 18h.01 M12 18h.01 M16 18h.01', color: '#0284c7', title: 'GREAT BOAT AVAILABILITY', desc: 'Through proper planning & membership capacity' }
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '0.75rem 1rem', display: 'flex', alignItems: 'center', gap: '1rem', border: '1px solid #eaeaea', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                <div style={{ backgroundColor: item.color, width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ overflow: 'visible' }}>
                     <path d={item.icon}></path>
                   </svg>
                </div>
                <div>
                  <h4 style={{ color: '#0f172a', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '0.15rem', lineHeight: '1.2' }}>{item.title}</h4>
                  <p style={{ color: '#555', fontSize: '0.75rem', margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Banner */}
          <div style={{ position: 'relative', zIndex: 1, backgroundColor: '#0284c7', margin: '0 2rem 2rem 2rem', padding: '1.25rem', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
             <svg width="40" height="12" viewBox="0 0 40 12" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
               <path d="M0 6 Q 5 0, 10 6 T 20 6 T 30 6 T 40 6"></path>
             </svg>
             <h3 style={{ color: '#fff', fontSize: '1.1rem', margin: 0, fontWeight: '600', letterSpacing: '0.5px' }}>
               MORE TIME ON THE WATER. LESS WORRY. <span style={{ color: '#e0f2fe' }}>MORE MEMORIES.</span>
             </h3>
          </div>
        </div>
      </section>

      {/* Section 3: Two Simple Decisions */}
      <section style={{ padding: '4rem 5%', backgroundColor: '#ffffff', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
          
          {/* Left Col */}
          <div style={{ flex: '1 1 400px' }}>
            <span style={{ color: '#0284c7', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.85rem', fontWeight: 'bold', display: 'block', marginBottom: '2rem' }}>
              TWO SIMPLE DECISIONS
            </span>
            
            <div style={{ marginBottom: '3rem' }}>
              <h3 style={{ fontSize: '1.25rem', color: '#0f172a', fontWeight: 'bold', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                1. SELECT YOUR MEMBERSHIP TYPE
              </h3>
              <div style={{ width: '30px', height: '3px', backgroundColor: '#0284c7', marginBottom: '1rem' }}></div>
              <p style={{ color: '#555', fontSize: '1rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                We offer flexible membership options designed for the way you boat.
              </p>
              <p style={{ color: '#555', fontSize: '1rem', lineHeight: '1.6' }}>
                Choose the plan that fits your lifestyle, the number of boating days you need, and the level of flexibility you want.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1.25rem', color: '#0f172a', fontWeight: 'bold', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                2. CHOOSE YOUR PIER LEVEL
              </h3>
              <div style={{ width: '30px', height: '3px', backgroundColor: '#0284c7', marginBottom: '1rem' }}></div>
              <p style={{ color: '#555', fontSize: '1rem', lineHeight: '1.6' }}>
                Your Pier Level determines your home location and ensures you get the best access to the waterways and destinations you love.
              </p>
            </div>
          </div>

          {/* Right Col */}
          <div style={{ flex: '1.5 1 500px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              
              {/* Card 1 */}
              <div style={{ flex: '1 1 200px', border: '1px solid #cce0ff', backgroundColor: '#ffffff', borderRadius: '8px', padding: '2rem 1.5rem 1rem 1.5rem', position: 'relative', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.02)' }}>
                <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', width: '30px', height: '30px', backgroundColor: '#0284c7', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                  1
                </div>
                <div style={{ backgroundColor: '#f0f9ff', width: '50px', height: '50px', borderRadius: '50%', margin: '0 auto 1rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #bfdbfe' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                <p style={{ color: '#0f172a', fontSize: '0.85rem', marginBottom: '0.25rem' }}>Select Your</p>
                <h4 style={{ color: '#0f172a', fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>MEMBERSHIP TYPE</h4>
                <p style={{ color: '#0284c7', fontSize: '0.85rem', fontWeight: '600', marginBottom: '1.5rem' }}>Your Membership Plan</p>
                <div style={{ width: '100%', height: '1px', backgroundColor: '#eaeaea', marginBottom: '1.5rem' }}></div>
                <p style={{ color: '#555', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  Choose from a variety of membership options, each tailored to fit your boating needs, days on the water, and lifestyle.
                </p>
              </div>

              {/* Card 2 */}
              <div style={{ flex: '1 1 200px', border: '1px solid #cce0ff', backgroundColor: '#ffffff', borderRadius: '8px', padding: '2rem 1.5rem 1rem 1.5rem', position: 'relative', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.02)' }}>
                <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', width: '30px', height: '30px', backgroundColor: '#0284c7', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                  2
                </div>
                <div style={{ backgroundColor: '#f0f9ff', width: '50px', height: '50px', borderRadius: '50%', margin: '0 auto 1rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #bfdbfe' }}>
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z M4 22v-7"></path>
                   </svg>
                </div>
                <p style={{ color: '#0f172a', fontSize: '0.85rem', marginBottom: '0.25rem' }}>Choose Your</p>
                <h4 style={{ color: '#0f172a', fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>PIER LEVEL</h4>
                <p style={{ color: '#0284c7', fontSize: '0.85rem', fontWeight: '600', marginBottom: '1.5rem' }}>Your Boating Adventures Start at Your Home</p>
                <div style={{ width: '100%', height: '1px', backgroundColor: '#eaeaea', marginBottom: '1.5rem' }}></div>
                <p style={{ color: '#555', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  Higher Pier Levels unlock access to our best boats and most destinations.
                </p>
              </div>
            </div>

            {/* Banner */}
            <div style={{ backgroundColor: '#f0f9ff', border: '1px solid #bfdbfe', borderRadius: '8px', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem', marginTop: '1rem' }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
              </svg>
              <div>
                <h4 style={{ color: '#0f172a', fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>JUST TWO DECISIONS. ENDLESS MEMORIES ON THE WATER.</h4>
                <p style={{ color: '#555', fontSize: '0.85rem', margin: 0 }}>
                  It's never been this simple to <span style={{ color: '#0284c7' }}>maximize</span> your boating experience.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 4: Bottom Area */}
      <section style={{ backgroundColor: '#fafbfc', padding: '4rem 5%' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
          
          {/* Left Col */}
          <div style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
               <div style={{ backgroundColor: '#e6f0fa', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                 <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                   <circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>
                 </svg>
               </div>
               <div>
                 <h4 style={{ color: '#0f172a', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.75rem', textTransform: 'uppercase' }}>DESIGNED FOR GREAT BOAT AVAILABILITY</h4>
                 <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                   Unlike traditional boat clubs or shared access programs, YACHTA Club is carefully 
                   designed to ensure our members always have the boats they want, when they want. 
                   We manage our membership levels responsibly, so you never miss out on the 
                   spontaneous getaways and unforgettable moments.
                 </p>
               </div>
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
               <div style={{ backgroundColor: '#e6f0fa', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                 <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                   <circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                 </svg>
               </div>
               <div>
                 <h4 style={{ color: '#0f172a', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.75rem', textTransform: 'uppercase' }}>READY TO FIND YOUR PERFECT MEMBERSHIP?</h4>
                 <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                   Whether you're looking for weekend getaways, extended adventures, family vacations, 
                   or a retreat after retirement, we'll help you find the Membership that's perfect for you.
                 </p>
               </div>
            </div>

          </div>

          {/* Right Col */}
          <div style={{ flex: '1 1 500px' }}>
             <img src="/Images/Yacht at sea.png" alt="Yacht at sea" style={{ width: '100%', height: '100%', minHeight: '300px', objectFit: 'cover', borderRadius: '12px' }} />
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div style={{ maxWidth: '1200px', margin: '4rem auto 0 auto', backgroundColor: '#f0f9ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '2rem 3rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <svg width="60" height="20" viewBox="0 0 60 20" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
               <path d="M0 10 Q 7.5 0, 15 10 T 30 10 T 45 10 T 60 10"></path>
            </svg>
            <h3 style={{ color: '#0f172a', fontSize: '1.1rem', margin: 0, fontWeight: '500' }}>
              Ready to create unforgettable memories on the water?
            </h3>
          </div>
          <button className="btn-ship" style={{ background: '#0284c7', color: '#ffffff', border: '1px solid #0284c7', borderRadius: '4px', padding: '0.75rem 1.5rem', fontWeight: 'bold' }}>
            <svg className="ship-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 21c3.333-2 6.667-2 10 0s6.667 2 10 0" />
              <path d="M4 18l1.5-6h13L20 18" />
              <path d="M9 12v-4h6v4" />
              <path d="M12 8V4" />
            </svg>
            LEARN MORE ↗
          </button>
        </div>
      </section>

    </div>
  );
}
