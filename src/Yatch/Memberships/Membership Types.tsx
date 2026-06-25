import React from 'react';

export default function MembershipTypes() {
  return (
    <div style={{ backgroundColor: '#ffffff', padding: '2rem 5%', fontFamily: 'sans-serif', color: '#333' }}>
      
      {/* Header Section */}
      <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 2rem auto' }}>
        <span style={{ color: '#0284c7', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem', fontWeight: 'bold', display: 'block', marginBottom: '1rem' }}>
          MEMBERSHIP TYPES
        </span>
        <h2 style={{ fontSize: '2.5rem', color: '#0f172a', marginBottom: '1rem', fontFamily: '"Playfair Display", serif', fontWeight: '500' }}>
          Two Memberships. One Unmatched Experience.
        </h2>
        <p style={{ color: '#555', fontSize: '1.05rem', lineHeight: '1.6', margin: '0 auto 1.5rem auto' }}>
          People value different time slots and on-water activities differently, so we have<br/>
          two main membership types: Explorer and Executive. <strong>What kind of Member are you?</strong>
        </p>
        <svg width="40" height="10" viewBox="0 0 40 10" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 auto' }}>
          <path d="M0 5 Q 5 0, 10 5 T 20 5 T 30 5 T 40 5"></path>
        </svg>
      </div>

      {/* Main Container for Cards & VS */}
      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
        
        {/* VS Divider */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 10 }}>
           <div style={{ width: '1px', height: '280px', backgroundColor: '#e0e0e0', position: 'absolute', top: '-280px', left: '50%', transform: 'translateX(-50%)' }}></div>
           <div style={{ width: '40px', height: '40px', backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.85rem', color: '#0f172a', zIndex: 2, boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
             VS
           </div>
           <div style={{ width: '1px', height: '280px', backgroundColor: '#e0e0e0', position: 'absolute', bottom: '-280px', left: '50%', transform: 'translateX(-50%)' }}></div>
        </div>

        {/* Card 1: EXECUTIVE */}
        <div style={{ flex: '1 1 350px', maxWidth: '400px', backgroundColor: '#ffffff', borderRadius: '16px', overflow: 'hidden', border: '1px solid #eaeaea', boxShadow: '0 10px 30px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column' }}>
          
          {/* Top Image Area */}
          <div style={{ position: 'relative', height: '120px' }}>
            <img src="/Yacht/yatch2.jpg" alt="Executive Membership" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: '-25px', left: '50%', transform: 'translateX(-50%)', width: '50px', height: '50px', backgroundColor: '#0284c7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '3px solid #fff' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>
              </svg>
            </div>
          </div>

          {/* Card Content */}
          <div style={{ padding: '1.25rem 1.25rem 0 1.25rem', textAlign: 'center', flex: 1 }}>
            <h3 style={{ fontSize: '1.4rem', color: '#0284c7', fontWeight: 'bold', marginBottom: '0.5rem', letterSpacing: '1px', marginTop: '1rem' }}>EXECUTIVE</h3>
            
            <div style={{ position: 'relative', display: 'inline-block', marginBottom: '1rem' }}>
              <div style={{ backgroundColor: '#0284c7', color: '#fff', padding: '0.3rem 1rem', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', position: 'relative', zIndex: 1 }}>
                WEEKDAY ACCESS
              </div>
              {/* Ribbon tails */}
              <div style={{ position: 'absolute', top: 0, bottom: 0, left: '-8px', width: '16px', backgroundColor: '#0284c7', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 50% 50%)', zIndex: 0 }}></div>
              <div style={{ position: 'absolute', top: 0, bottom: 0, right: '-8px', width: '16px', backgroundColor: '#0284c7', clipPath: 'polygon(0 0, 100% 0, 50% 50%, 100% 100%, 0 100%)', zIndex: 0 }}></div>
            </div>

            <p style={{ color: '#555', fontSize: '0.85rem', marginBottom: '1.5rem', padding: '0 1rem' }}>
              Perfect for families and professionals<br/>who boat during the week.
            </p>

            {/* List Details */}
            <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '1.5rem' }}>
              
              {/* Access */}
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#f0f9ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.8rem', color: '#0f172a', fontWeight: 'bold', marginBottom: '0.25rem', letterSpacing: '1px' }}>ACCESS</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.85rem' }}>
                    <li style={{ color: '#0284c7', marginBottom: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>✓ <span style={{ color: '#555' }}>Mon-Thu Mornings</span></li>
                    <li style={{ color: '#0284c7', marginBottom: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>✓ <span style={{ color: '#555' }}>Mon-Thu Evenings</span></li>
                    <li style={{ color: '#aaa', marginBottom: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>✕ <span style={{ color: '#aaa' }}>Fridays & Weekends</span></li>
                    <li style={{ color: '#aaa', marginBottom: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>✕ <span style={{ color: '#aaa' }}>Holidays</span></li>
                  </ul>
                </div>
              </div>

              {/* Advanced Reservations */}
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#f0f9ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.8rem', color: '#0f172a', fontWeight: 'bold', marginBottom: '0.25rem', letterSpacing: '1px' }}>ADVANCED RESERVATIONS</h4>
                  <p style={{ color: '#0284c7', fontSize: '0.85rem', fontWeight: 'bold', margin: 0 }}>2 Advanced Reservations</p>
                </div>
              </div>

              {/* Ideal For */}
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#f0f9ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.8rem', color: '#0f172a', fontWeight: 'bold', marginBottom: '0.25rem', letterSpacing: '1px' }}>IDEAL FOR</h4>
                  <ul style={{ paddingLeft: '1.2rem', margin: 0, fontSize: '0.85rem', color: '#555', lineHeight: '1.5' }}>
                    <li style={{ marginBottom: '0.2rem' }}>After-work cruises</li>
                    <li style={{ marginBottom: '0.2rem' }}>Family outings</li>
                    <li style={{ marginBottom: '0.2rem' }}>Regular weekday boating</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Card Footer */}
          <div style={{ backgroundColor: '#f0f9ff', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginTop: 'auto' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            <span style={{ color: '#0284c7', fontWeight: 'bold', fontSize: '0.8rem', letterSpacing: '0.5px' }}>GREAT BALANCE OF ACCESS & VALUE</span>
          </div>
        </div>

        {/* Card 2: EXPLORER */}
        <div style={{ flex: '1 1 350px', maxWidth: '400px', backgroundColor: '#ffffff', borderRadius: '16px', overflow: 'hidden', border: '1px solid #eaeaea', boxShadow: '0 10px 30px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column' }}>
          
          {/* Top Image Area */}
          <div style={{ position: 'relative', height: '120px' }}>
            <img src="/Yacht/yatch3.jpg" alt="Explorer Membership" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: '-25px', left: '50%', transform: 'translateX(-50%)', width: '50px', height: '50px', backgroundColor: '#0ea5e9', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '3px solid #fff' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
              </svg>
            </div>
          </div>

          {/* Card Content */}
          <div style={{ padding: '1.25rem 1.25rem 0 1.25rem', textAlign: 'center', flex: 1 }}>
            <h3 style={{ fontSize: '1.4rem', color: '#0ea5e9', fontWeight: 'bold', marginBottom: '0.5rem', letterSpacing: '1px', marginTop: '1rem' }}>EXPLORER</h3>
            
            <div style={{ position: 'relative', display: 'inline-block', marginBottom: '1rem' }}>
              <div style={{ backgroundColor: '#0ea5e9', color: '#fff', padding: '0.3rem 1rem', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', position: 'relative', zIndex: 1 }}>
                UNLIMITED ACCESS
              </div>
              {/* Ribbon tails */}
              <div style={{ position: 'absolute', top: 0, bottom: 0, left: '-8px', width: '16px', backgroundColor: '#0ea5e9', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 50% 50%)', zIndex: 0 }}></div>
              <div style={{ position: 'absolute', top: 0, bottom: 0, right: '-8px', width: '16px', backgroundColor: '#0ea5e9', clipPath: 'polygon(0 0, 100% 0, 50% 50%, 100% 100%, 0 100%)', zIndex: 0 }}></div>
            </div>

            <p style={{ color: '#555', fontSize: '0.85rem', marginBottom: '1.5rem', padding: '0 1rem' }}>
              Perfect for boaters who want<br/>maximum flexibility.
            </p>

            {/* List Details */}
            <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '1.5rem' }}>
              
              {/* Access */}
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.8rem', color: '#0f172a', fontWeight: 'bold', marginBottom: '0.25rem', letterSpacing: '1px' }}>ACCESS</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.85rem' }}>
                    <li style={{ color: '#0ea5e9', marginBottom: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>✓ <span style={{ color: '#555' }}>7 Days a Week</span></li>
                    <li style={{ color: '#0ea5e9', marginBottom: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>✓ <span style={{ color: '#555' }}>Mornings & Evenings</span></li>
                    <li style={{ color: '#0ea5e9', marginBottom: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>✓ <span style={{ color: '#555' }}>Weekends</span></li>
                    <li style={{ color: '#0ea5e9', marginBottom: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>✓ <span style={{ color: '#555' }}>Holidays</span></li>
                  </ul>
                </div>
              </div>

              {/* Advanced Reservations */}
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.8rem', color: '#0f172a', fontWeight: 'bold', marginBottom: '0.25rem', letterSpacing: '1px' }}>ADVANCED RESERVATIONS</h4>
                  <p style={{ color: '#0ea5e9', fontSize: '0.85rem', fontWeight: 'bold', margin: 0 }}>2 Advanced Reservations</p>
                </div>
              </div>

              {/* Ideal For */}
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.8rem', color: '#0f172a', fontWeight: 'bold', marginBottom: '0.25rem', letterSpacing: '1px' }}>IDEAL FOR</h4>
                  <ul style={{ paddingLeft: '1.2rem', margin: 0, fontSize: '0.85rem', color: '#555', lineHeight: '1.5' }}>
                    <li style={{ marginBottom: '0.2rem' }}>Weekend adventures</li>
                    <li style={{ marginBottom: '0.2rem' }}>Family vacations</li>
                    <li style={{ marginBottom: '0.2rem' }}>Frequent boaters</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Card Footer */}
          <div style={{ backgroundColor: '#e0f2fe', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginTop: 'auto' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 8v10M16 8v10M4 12h16"></path><circle cx="12" cy="12" r="10"></circle></svg>
            <span style={{ color: '#0ea5e9', fontWeight: 'bold', fontSize: '0.8rem', letterSpacing: '0.5px' }}>UNLIMITED BOATING ACCESS</span>
          </div>
        </div>

      </div>

      {/* Bottom Info Banner */}
      <div style={{ maxWidth: '900px', margin: '2rem auto 0 auto', border: '1px solid #eaeaea', borderRadius: '12px', padding: '1.25rem 1.5rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', backgroundColor: '#fff', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
        
        {/* Left Side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: '1 1 300px' }}>
          <div style={{ width: '45px', height: '45px', borderRadius: '50%', backgroundColor: '#f0f9ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
               <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z M4 22v-7"></path>
             </svg>
          </div>
          <p style={{ color: '#555', fontSize: '0.9rem', lineHeight: '1.5', margin: 0, fontWeight: '500' }}>
            Both memberships include access to our premium fleet,<br/>professional dock staff, and member-only benefits.
          </p>
        </div>

        {/* Right Side Icons */}
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
           <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', textAlign: 'center', maxWidth: '70px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z M4 22v-7"></path></svg>
              <span style={{ fontSize: '0.75rem', color: '#555', fontWeight: 'bold', lineHeight: '1.2' }}>Premium Fleet</span>
           </div>
           <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', textAlign: 'center', maxWidth: '70px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              <span style={{ fontSize: '0.75rem', color: '#555', fontWeight: 'bold', lineHeight: '1.2' }}>Pro Dock Staff</span>
           </div>
           <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', textAlign: 'center', maxWidth: '70px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="m14 14-4-4"></path><path d="M9 14h.01"></path><path d="M15 9h.01"></path></svg>
              <span style={{ fontSize: '0.75rem', color: '#555', fontWeight: 'bold', lineHeight: '1.2' }}>Member Benefits</span>
           </div>
           <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', textAlign: 'center', maxWidth: '70px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              <span style={{ fontSize: '0.75rem', color: '#555', fontWeight: 'bold', lineHeight: '1.2' }}>Secure Experience</span>
           </div>
        </div>

      </div>
    </div>
  );
}
