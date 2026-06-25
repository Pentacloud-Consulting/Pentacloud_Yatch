import React from 'react';

export default function Level() {
  return (
    <div style={{ backgroundColor: '#ffffff', padding: '1.5rem 5%', fontFamily: 'sans-serif', color: '#333' }}>
      
      {/* Header Section */}
      <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 1.5rem auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '0.25rem' }}>
          <div style={{ width: '30px', height: '1px', backgroundColor: '#0284c7' }}></div>
          <span style={{ color: '#0284c7', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.7rem', fontWeight: 'bold' }}>
            PIER LEVEL & FLEET MANAGEMENT
          </span>
          <div style={{ width: '30px', height: '1px', backgroundColor: '#0284c7' }}></div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.5rem' }}>
          <svg width="16" height="4" viewBox="0 0 24 6" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M0 3 Q 3 0, 6 3 T 12 3 T 18 3 T 24 3"></path>
          </svg>
        </div>
        <h2 style={{ fontSize: '1.8rem', color: '#0f172a', margin: '0', fontFamily: '"Playfair Display", serif', fontWeight: '500' }}>
          Expert Management. Seamless Experience.
        </h2>
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        
        {/* Section 1: Pier Level */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center' }}>
          
          {/* Left Content */}
          <div style={{ flex: '1 1 400px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#f0f5fa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                   <path d="M2 15h20"></path><path d="M6 15V9a6 6 0 0 1 12 0v6"></path><path d="M9 15v5"></path><path d="M15 15v5"></path>
                 </svg>
              </div>
              <span style={{ color: '#0284c7', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                PIER LEVEL
              </span>
            </div>
            
            <h3 style={{ fontSize: '1.6rem', color: '#0f172a', marginBottom: '0.5rem', fontFamily: '"Playfair Display", serif', lineHeight: '1.2', fontWeight: '500' }}>
              Premium Locations.<br/>Unmatched Access.
            </h3>
            <div style={{ width: '30px', height: '2px', backgroundColor: '#0284c7', marginBottom: '0.75rem' }}></div>
            
            <p style={{ color: '#555', fontSize: '0.85rem', lineHeight: '1.5', marginBottom: '0.75rem', maxWidth: '450px' }}>
              Our private piers are strategically located for quick access to the water, 
              top destinations, and the best boating experiences.
            </p>
            <p style={{ color: '#555', fontSize: '0.85rem', lineHeight: '1.5', marginBottom: '1.5rem', maxWidth: '450px' }}>
              Members enjoy high-end facilities, secure parking, lounge areas, and 
              everything you need for a perfect day on the water.
            </p>

            {/* 4 Icons Row */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <div style={{ flex: '1', backgroundColor: '#fff', padding: '1rem 0.5rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.03)', border: '1px solid #f0f0f0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', textAlign: 'center' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                <span style={{ fontSize: '0.7rem', color: '#0f172a', fontWeight: 'bold', lineHeight: '1.3' }}>Secure &<br/>Well-Maintained</span>
              </div>
              <div style={{ flex: '1', backgroundColor: '#fff', padding: '1rem 0.5rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.03)', border: '1px solid #f0f0f0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', textAlign: 'center' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14h-2V7a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v7H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2z"></path><path d="M8 14h8"></path></svg>
                <span style={{ fontSize: '0.7rem', color: '#0f172a', fontWeight: 'bold', lineHeight: '1.3' }}>Member<br/>Lounge Access</span>
              </div>
              <div style={{ flex: '1', backgroundColor: '#fff', padding: '1rem 0.5rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.03)', border: '1px solid #f0f0f0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', textAlign: 'center' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg>
                <span style={{ fontSize: '0.7rem', color: '#0f172a', fontWeight: 'bold', lineHeight: '1.3' }}>Ample Parking<br/>& Easy Access</span>
              </div>
              <div style={{ flex: '1', backgroundColor: '#fff', padding: '1rem 0.5rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.03)', border: '1px solid #f0f0f0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', textAlign: 'center' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span style={{ fontSize: '0.7rem', color: '#0f172a', fontWeight: 'bold', lineHeight: '1.3' }}>Prime Locations<br/>Near Top</span>
              </div>
            </div>
          </div>

          {/* Right Image Block */}
          <div style={{ flex: '1.2 1 450px', position: 'relative', marginTop: '0.5rem', marginBottom: '1rem' }}>
            <img src="/Images/LEVEL -1.png" alt="Yacht Boat Club" style={{ width: '100%', height: 'auto', borderRadius: '12px', objectFit: 'cover', display: 'block' }} />
            
            {/* Overlapping Info Card */}
            <div style={{ 
              position: 'absolute', 
              bottom: '-2rem', 
              left: '50%', 
              transform: 'translateX(-50%)',
              width: '95%', 
              backgroundColor: '#fff', 
              borderRadius: '8px', 
              padding: '1rem', 
              display: 'flex', 
              justifyContent: 'space-between',
              alignItems: 'center',
              boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
              border: '1px solid #eaeaea'
            }}>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', flex: 1 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <path d="M2 12h4l2-2 4 4 4-4 4 4h2"></path>
                </svg>
                <div>
                  <h4 style={{ fontSize: '0.7rem', color: '#0f172a', fontWeight: 'bold', marginBottom: '0.1rem' }}>QUICK WATER ACCESS</h4>
                  <p style={{ fontSize: '0.65rem', color: '#666', margin: 0 }}>Be on the water in minutes</p>
                </div>
              </div>

              <div style={{ width: '1px', height: '20px', backgroundColor: '#eaeaea', margin: '0 0.5rem' }}></div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', flex: 1 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <div>
                  <h4 style={{ fontSize: '0.7rem', color: '#0f172a', fontWeight: 'bold', marginBottom: '0.1rem' }}>EXCLUSIVE AMENITIES</h4>
                  <p style={{ fontSize: '0.65rem', color: '#666', margin: 0 }}>Luxury facilities for members</p>
                </div>
              </div>

              <div style={{ width: '1px', height: '20px', backgroundColor: '#eaeaea', margin: '0 0.5rem' }}></div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', flex: 1 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <div>
                  <h4 style={{ fontSize: '0.7rem', color: '#0f172a', fontWeight: 'bold', marginBottom: '0.1rem' }}>UNMATCHED CONVENIENCE</h4>
                  <p style={{ fontSize: '0.65rem', color: '#666', margin: 0 }}>Everything you need, in one place</p>
                </div>
              </div>

            </div>
          </div>
        </div>


        {/* Section 2: Fleet Management */}
        <div style={{ 
          backgroundColor: '#f8fafc', 
          borderRadius: '16px', 
          display: 'flex', 
          flexWrap: 'wrap', 
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
          marginTop: '1rem' 
        }}>
          
          {/* Left Image */}
          <div style={{ flex: '1.2 1 400px', minHeight: '300px' }}>
            <img 
              src="/Images/LEVEL -2.png" 
              alt="Fleet Management Dashboard" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
            />
          </div>

          {/* Right Content */}
          <div style={{ flex: '1 1 450px', padding: '1.5rem 2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                 {/* Ship wheel icon */}
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                   <circle cx="12" cy="12" r="7"></circle>
                   <circle cx="12" cy="12" r="3"></circle>
                   <line x1="12" y1="2" x2="12" y2="22"></line>
                   <line x1="2" y1="12" x2="22" y2="12"></line>
                   <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
                   <line x1="4.93" y1="19.07" x2="19.07" y2="4.93"></line>
                 </svg>
              </div>
              <span style={{ color: '#0284c7', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.75rem', fontWeight: 'bold' }}>
                FLEET MANAGEMENT
              </span>
            </div>
            
            <h3 style={{ fontSize: '1.6rem', color: '#0f172a', marginBottom: '0.75rem', fontFamily: '"Playfair Display", serif', lineHeight: '1.2', fontWeight: '500' }}>
              Professionally Managed.<br/>Always Ready.
            </h3>
            <p style={{ color: '#555', fontSize: '0.85rem', lineHeight: '1.5', marginBottom: '0.5rem' }}>
              Our fleet is maintained to the highest standards so you can enjoy worry-free boating every time you go out.
            </p>
            <p style={{ color: '#555', fontSize: '0.85rem', lineHeight: '1.5', marginBottom: '1rem' }}>
              From regular maintenance and inspections to cleaning and upgrades, our team ensures every boat is in perfect condition.
            </p>

            {/* List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              
              <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '0.75rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid #eaeaea', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '6px', backgroundColor: '#f0f5fa', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0284c7' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  </div>
                  <div>
                    <h4 style={{ color: '#0f172a', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '0.1rem' }}>Routine Maintenance & Inspections</h4>
                    <p style={{ color: '#666', fontSize: '0.75rem', margin: 0 }}>Scheduled checks to ensure peak performance</p>
                  </div>
                </div>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>

              <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '0.75rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid #eaeaea', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '6px', backgroundColor: '#f0f5fa', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0284c7' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><polyline points="16 13 8 13"></polyline><polyline points="16 17 8 17"></polyline><polyline points="10 9 9 9 8 9"></polyline></svg>
                  </div>
                  <div>
                    <h4 style={{ color: '#0f172a', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '0.1rem' }}>Cleaning, Detailing & Upkeep</h4>
                    <p style={{ color: '#666', fontSize: '0.75rem', margin: 0 }}>Spotless boats, ready for your next adventure</p>
                  </div>
                </div>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>

              <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '0.75rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid #eaeaea', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '6px', backgroundColor: '#f0f5fa', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0284c7' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  </div>
                  <div>
                    <h4 style={{ color: '#0f172a', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '0.1rem' }}>Upgrades & Performance Optimization</h4>
                    <p style={{ color: '#666', fontSize: '0.75rem', margin: 0 }}>Continuous improvements for the best experience</p>
                  </div>
                </div>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>

              <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '0.75rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid #eaeaea', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '6px', backgroundColor: '#f0f5fa', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0284c7' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                  </div>
                  <div>
                    <h4 style={{ color: '#0f172a', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '0.1rem' }}>24/7 Fleet Monitoring & Support</h4>
                    <p style={{ color: '#666', fontSize: '0.75rem', margin: 0 }}>We're here whenever you need us</p>
                  </div>
                </div>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
