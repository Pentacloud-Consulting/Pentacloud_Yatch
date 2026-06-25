'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <Link href="/" className="nav-logo">YACHTA</Link>
      <div className="nav-links">
        <Link href="/">HOME</Link>
        <Link href="/memberships">MEMBERSHIPS</Link>
        <Link href="#">DESTINATIONS</Link>
        <Link href="#">EXPERIENCE</Link>
        <Link href="#">ABOUT US</Link>
        <Link href="#">CONTACT</Link>
      </div>
      <div>
        <button className="btn-outline">BOOK VIEWING</button>
      </div>
    </nav>
  );
}
