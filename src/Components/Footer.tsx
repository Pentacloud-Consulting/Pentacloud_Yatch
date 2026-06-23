import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ padding: '6rem 5% 2rem', position: 'relative', overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      >
        <source src="/Yacht/yacht Moving.mp4" type="video/mp4" />
      </video>
      {/* Dark overlay */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'linear-gradient(to bottom, rgba(5,8,15,0.92) 0%, rgba(5,8,15,0.85) 60%, rgba(5,8,15,0.97) 100%)',
        zIndex: 1,
      }} />
      {/* Content above video */}
      <div style={{ position: 'relative', zIndex: 2, color: '#ffffff' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6rem' }}>
        
        <div style={{ width: '25%' }}>
          <Link href="/" style={{ textDecoration: 'none', color: '#fff', fontSize: '1.5rem', fontWeight: 700, letterSpacing: '2px', fontFamily: 'var(--font-sans)', display: 'block', marginBottom: '1.5rem' }}>YACHTA</Link>
          <p className="paragraph" style={{ fontSize: '0.85rem', marginBottom: '2rem' }}>
            Redefining luxury at sea. Discover unparalleled experiences with YACHTA superyachts.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#" style={{ color: '#fff', textDecoration: 'none', opacity: 0.7 }}>Fb</a>
            <a href="#" style={{ color: '#fff', textDecoration: 'none', opacity: 0.7 }}>Ig</a>
            <a href="#" style={{ color: '#fff', textDecoration: 'none', opacity: 0.7 }}>In</a>
            <a href="#" style={{ color: '#fff', textDecoration: 'none', opacity: 0.7 }}>Yt</a>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '4rem' }}>
          <div>
            <h4 style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1.5rem' }}>FLEET</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <Link href="#" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', textDecoration: 'none' }}>All Yachts</Link>
              <Link href="#" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', textDecoration: 'none' }}>New Arrivals</Link>
              <Link href="#" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', textDecoration: 'none' }}>Featured Yachts</Link>
              <Link href="#" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', textDecoration: 'none' }}>Compare</Link>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1.5rem' }}>DESTINATIONS</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <Link href="#" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', textDecoration: 'none' }}>Popular Destinations</Link>
              <Link href="#" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', textDecoration: 'none' }}>Travel Guide</Link>
              <Link href="#" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', textDecoration: 'none' }}>Charter Experiences</Link>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1.5rem' }}>EXPERIENCE</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <Link href="#" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', textDecoration: 'none' }}>Onboard Lifestyle</Link>
              <Link href="#" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', textDecoration: 'none' }}>Gallery</Link>
              <Link href="#" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', textDecoration: 'none' }}>Events</Link>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1.5rem' }}>COMPANY</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <Link href="#" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', textDecoration: 'none' }}>About Us</Link>
              <Link href="#" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', textDecoration: 'none' }}>Our Story</Link>
              <Link href="#" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', textDecoration: 'none' }}>Careers</Link>
              <Link href="#" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', textDecoration: 'none' }}>News</Link>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1.5rem' }}>CONTACT</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>+1 234 567 890</span>
              <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>info@yachta.com</span>
              <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>Monaco, MC 98000</span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem' }}>
        © {new Date().getFullYear()} YACHTA. All Rights Reserved.
      </div>
      </div>{/* end z-index wrapper */}
    </footer>
  );
}
