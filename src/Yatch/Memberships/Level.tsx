import React from 'react';

export default function Level() {
  return (
    <div style={{ backgroundColor: '#ffffff', padding: '4rem 5%', fontFamily: 'sans-serif', color: '#333' }}>
      
      {/* Header Section */}
      <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 5rem auto' }}>
        <span style={{ textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.85rem', fontWeight: 'bold', display: 'block', marginBottom: '1rem' }}>
          <span style={{ color: '#0284c7' }}>PIER LEVEL</span> <span style={{ color: '#0f172a' }}>& FLEET MANAGEMENT</span>
        </span>
        <h2 style={{ fontSize: '2.5rem', color: '#0f172a', marginBottom: '1rem', fontFamily: '"Playfair Display", serif', fontWeight: '500' }}>
          Expert Management. Seamless Experience.
        </h2>
        {/* Decorative Wave/Line */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
          <div style={{ width: '40px', height: '1px', backgroundColor: '#eaeaea' }}></div>
          <svg width="24" height="6" viewBox="0 0 24 6" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M0 3 Q 3 0, 6 3 T 12 3 T 18 3 T 24 3"></path>
          </svg>
          <div style={{ width: '40px', height: '1px', backgroundColor: '#eaeaea' }}></div>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        
        {/* Section 1: Pier Level (Content Left, Image Right) */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
          
          {/* Left Content */}
          <div style={{ flex: '1 1 450px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#f0f7fd', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                 {/* Pier/Bridge Icon Approximation */}
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                   <path d="M2 15h20"></path><path d="M6 15V9a6 6 0 0 1 12 0v6"></path><path d="M9 15v5"></path><path d="M15 15v5"></path>
                 </svg>
              </div>
              <span style={{ color: '#0284c7', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem', fontWeight: 'bold' }}>
                PIER LEVEL
              </span>
            </div>
            
            <h3 style={{ fontSize: '2.25rem', color: '#0f172a', marginBottom: '1rem', fontFamily: '"Playfair Display", serif', lineHeight: '1.2' }}>
              Premium Locations.<br/>Unmatched Access.
            </h3>
            <p style={{ color: '#555', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              Our private piers are strategically located for quick access to the water, 
              top destinations, and the best boating experiences.
            </p>
            <p style={{ color: '#555', fontSize: '1rem', lineHeight: '1.7', marginBottom: '3rem' }}>
              Members enjoy high-end facilities, secure parking, lounge areas, and 
              everything you need for a perfect day on the water.
            </p>

            {/* 4 Icons Row */}
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 100px', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                <span style={{ fontSize: '0.8rem', color: '#0f172a', fontWeight: '600', lineHeight: '1.4' }}>Secure &<br/>Well-Maintained</span>
              </div>
              <div style={{ width: '1px', backgroundColor: '#eaeaea' }}></div>
              <div style={{ flex: '1 1 100px', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14h-2V7a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v7H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2z"></path><path d="M8 14h8"></path></svg>
                <span style={{ fontSize: '0.8rem', color: '#0f172a', fontWeight: '600', lineHeight: '1.4' }}>Member<br/>Lounge Access</span>
              </div>
              <div style={{ flex: '1 1 100px', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg>
                <span style={{ fontSize: '0.8rem', color: '#0f172a', fontWeight: '600', lineHeight: '1.4' }}>Ample Parking<br/>& Easy Access</span>
              </div>
              <div style={{ flex: '1 1 100px', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span style={{ fontSize: '0.8rem', color: '#0f172a', fontWeight: '600', lineHeight: '1.4' }}>Prime Locations<br/>Near Top Destinations</span>
              </div>
            </div>
          </div>

          {/* Image Block */}
          <div style={{ flex: '1 1 450px' }}>
            <img src="/Yacht/yatch2.jpg" alt="Yacht Boat Club" style={{ width: '100%', height: 'auto', borderRadius: '16px', objectFit: 'cover', minHeight: '280px', maxHeight: '350px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
          </div>
        </div>


        {/* Section 2: Fleet Management (Image Left, Content Right) */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', flexDirection: 'row-reverse' }}>
          
          {/* Right Content */}
          <div style={{ flex: '1 1 450px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#f0f7fd', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                 {/* Monitor/Chart Icon Approximation */}
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                   <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line><polyline points="6 12 10 8 14 11 18 7"></polyline>
                 </svg>
              </div>
              <span style={{ color: '#0284c7', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem', fontWeight: 'bold' }}>
                FLEET MANAGEMENT
              </span>
            </div>
            
            <h3 style={{ fontSize: '2.25rem', color: '#0f172a', marginBottom: '1rem', fontFamily: '"Playfair Display", serif', lineHeight: '1.2' }}>
              Professionally Managed.<br/>Always Ready.
            </h3>
            <p style={{ color: '#555', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              Our fleet is maintained to the highest standards so you can enjoy 
              worry-free boating every time you go out.
            </p>
            <p style={{ color: '#555', fontSize: '1rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>
              From regular maintenance and inspections to cleaning and upgrades, 
              our team ensures every boat is in perfect condition.
            </p>

            {/* Checkmark List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                'Routine Maintenance & Inspections',
                'Cleaning, Detailing & Upkeep',
                'Upgrades & Performance Optimization',
                '24/7 Fleet Monitoring & Support'
              ].map((item, index) => (
                <div key={index} style={{ border: '1px solid #eaeaea', backgroundColor: '#fdfdfd', borderRadius: '8px', padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  <span style={{ color: '#0f172a', fontSize: '0.9rem', fontWeight: '600' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Left Image */}
          <div style={{ flex: '1 1 450px' }}>
            <img src="/Yacht/yatch3.jpg" alt="Fleet Management Dashboard" style={{ width: '100%', height: 'auto', borderRadius: '16px', objectFit: 'cover', minHeight: '350px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
          </div>
        </div>

      </div>
    </div>
  );
}
