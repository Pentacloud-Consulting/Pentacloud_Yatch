'use client';
import React, { useState } from 'react';

const SLIDES = [
  { img: 'https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?q=80&w=800&auto=format&fit=crop', title: 'Ocean Lounge', desc: 'Relax in an atmosphere crafted for ultimate comfort with panoramic sea views.' },
  { img: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=800&auto=format&fit=crop', title: 'Sky Deck', desc: 'Enjoy breathtaking sunsets from the highest point of your yacht.' },
  { img: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=800&auto=format&fit=crop', title: 'Private Dining', desc: 'World-class dining experiences prepared by personal chefs.' },
  { img: 'https://images.unsplash.com/photo-1540946485063-a40da27545f8?q=80&w=800&auto=format&fit=crop', title: 'Helipad Access', desc: 'Arrive anywhere in the world in absolute style and luxury.' },
  { img: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800&auto=format&fit=crop', title: 'Master Suite', desc: 'Indulge in opulent bedrooms with panoramic ocean-view windows.' },
  { img: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=800&auto=format&fit=crop', title: 'Sundeck Retreat', desc: 'Bask in golden light on our expansive sun-drenched deck.' },
  { img: 'https://images.unsplash.com/photo-1559268808-14227f719363?q=80&w=800&auto=format&fit=crop', title: 'Infinity Pool', desc: 'Float above the horizon in your private onboard infinity pool.' },
];

const coverflowStyle = `
  .coverflow-container {
    position: relative;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    height: 430px;
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 1200px;
    overflow: visible;
  }
  .coverflow-track {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d;
  }
  .coverflow-card {
    position: absolute;
    width: 280px;
    height: 380px;
    border-radius: 16px;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
    box-shadow: 0 15px 35px rgba(0,0,0,0.3);
    cursor: pointer;
  }
  .coverflow-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .coverflow-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.5);
    transition: opacity 0.6s ease;
  }
  .coverflow-text {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    padding: 1.5rem 1.25rem;
    background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%);
    opacity: 0;
    transition: opacity 0.6s ease;
  }
  .coverflow-text h4 {
    font-family: var(--font-serif);
    font-size: 1.15rem;
    font-weight: 500;
    margin-bottom: 0.3rem;
    color: #fff;
  }
  .coverflow-text p {
    color: rgba(255,255,255,0.7);
    font-size: 0.75rem;
    line-height: 1.4;
  }
  .coverflow-card.active .coverflow-overlay {
    opacity: 0;
  }
  .coverflow-card.active .coverflow-text {
    opacity: 1;
  }
  .coverflow-card.active {
    transform: translateX(0) scale(1.1) translateZ(0);
    z-index: 10;
  }
  .coverflow-card.prev1 {
    transform: translateX(-85%) scale(0.9) translateZ(-100px);
    z-index: 9;
  }
  .coverflow-card.next1 {
    transform: translateX(85%) scale(0.9) translateZ(-100px);
    z-index: 9;
  }
  .coverflow-card.prev2 {
    transform: translateX(-155%) scale(0.75) translateZ(-200px);
    z-index: 8;
  }
  .coverflow-card.next2 {
    transform: translateX(155%) scale(0.75) translateZ(-200px);
    z-index: 8;
  }
  .coverflow-card.hidden {
    opacity: 0;
    pointer-events: none;
    transform: scale(0.5) translateZ(-300px);
    z-index: 1;
  }
  
  .carousel-nav {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-top: 1.5rem;
  }
  .carousel-nav button {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid var(--border-color);
    background: transparent;
    color: var(--text-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .carousel-nav button:hover {
    background: var(--text-primary);
    color: var(--bg-color);
  }
`;

export default function Yatchlifestyle() {
  const [activeIndex, setActiveIndex] = useState(2);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  const getCardClass = (index: number) => {
    if (index === activeIndex) return 'coverflow-card active';
    if (index === (activeIndex - 1 + SLIDES.length) % SLIDES.length) return 'coverflow-card prev1';
    if (index === (activeIndex + 1) % SLIDES.length) return 'coverflow-card next1';
    if (index === (activeIndex - 2 + SLIDES.length) % SLIDES.length) return 'coverflow-card prev2';
    if (index === (activeIndex + 2) % SLIDES.length) return 'coverflow-card next2';
    return 'coverflow-card hidden';
  };

  return (
    <section className="section" style={{ padding: '4rem 0', background: 'var(--bg-color)', overflow: 'hidden' }}>
      <style>{coverflowStyle}</style>
      
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <span className="subheading">THE YACHT LIFESTYLE</span>
        <h2 className="heading-sm" style={{ marginBottom: 0, fontSize: '2.5rem' }}>Every Moment Extraordinary</h2>
      </div>

      <div className="coverflow-container">
        <div className="coverflow-track">
          {SLIDES.map((slide, i) => (
            <div
              key={i}
              className={getCardClass(i)}
              onClick={() => setActiveIndex(i)}
            >
              <img src={slide.img} alt={slide.title} />
              <div className="coverflow-overlay"></div>
              <div className="coverflow-text">
                <h4>{slide.title}</h4>
                <p>{slide.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-nav">
        <button onClick={prevSlide} aria-label="Previous Slide">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <button onClick={nextSlide} aria-label="Next Slide">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>
    </section>
  );
}
