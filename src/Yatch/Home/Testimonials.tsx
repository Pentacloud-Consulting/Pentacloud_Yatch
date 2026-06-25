'use client';
import React from 'react';

const TESTIMONIALS = [
  {
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
    quote: '"The most extraordinary yacht charter experience we\'ve ever had. Every nautical mile was perfect."',
    name: 'James Anderson',
    title: 'Private Entrepreneur',
  },
  {
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop',
    quote: '"Luxury, comfort, and service beyond imagination. We can\'t wait to sail on this magnificent yacht again."',
    name: 'Sophia Martinez',
    title: 'Travel Journalist',
  },
  {
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop',
    quote: '"YACHTA redefines what it means to travel the seas in luxury. Absolutely breathtaking!"',
    name: 'Daniel Robert',
    title: 'CEO, Nexgen Capital',
  },
  {
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
    quote: '"From the moment we stepped aboard the superyacht, we knew this was unlike any other voyage. Pure magic on the water."',
    name: 'Elena Vasquez',
    title: 'Lifestyle Curator',
  },
  {
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop',
    quote: '"The crew, the oceanic destinations, and the attention to detail — a flawless luxury yachting experience."',
    name: 'Marcus Chen',
    title: 'Investment Banker',
  },
  {
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop',
    quote: '"We celebrated our anniversary on YACHTA and sailing the coast exceeded every expectation we had."',
    name: 'Isabelle Laurent',
    title: 'Art Director, Paris',
  },
  {
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&auto=format&fit=crop',
    quote: '"World-class service, stunning ocean views, and a vessel that truly feels like a floating palace."',
    name: 'Richard Thornton',
    title: 'Retired Admiral',
  },
];

const ARCH_IMAGES = [
  'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1540946485063-a40da27545f8?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1498084393753-b411b2d26b34?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=600&auto=format&fit=crop',
];

const styles = `
  .t-arch-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 4rem;
    height: 480px;
    overflow: hidden;
    padding: 20px 0;
  }
  .t-arch-col {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  /* Stagger columns to mimic Image 2's organic feel */
  .t-col-1 { transform: translateY(-40px); }
  .t-col-2 { transform: translateY(20px); }
  .t-col-3 { transform: translateY(-30px); }
  .t-col-4 { transform: translateY(-60px); }
  .t-col-5 { transform: translateY(10px); }
  .t-col-6 { transform: translateY(-40px); }
  .t-col-7 { transform: translateY(-10px); }
  
  .t-img-box {
    border-radius: 20px;
    overflow: hidden;
    background: #f0f0f0;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  }
  .t-img-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
  }
  .t-img-box:hover img {
    transform: scale(1.05);
  }

  .t-pill {
    display: inline-block;
    padding: 0.6rem 2rem;
    border-radius: 40px;
    border: 1px solid var(--border-color);
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
    color: var(--text-secondary);
  }

  .t-heading {
    font-size: 2.5rem;
    line-height: 1.25;
    font-weight: 600;
    max-width: 800px;
    margin: 0 auto 4rem auto;
  }
  .t-heading-light {
    color: var(--text-secondary);
  }

  /* Marquee container */
  .marquee-wrapper {
    width: 100%;
    overflow: hidden;
    position: relative;
    padding: 1rem 0;
  }
  .marquee-wrapper::before, .marquee-wrapper::after {
    content: "";
    position: absolute;
    top: 0; bottom: 0;
    width: 150px;
    z-index: 2;
    pointer-events: none;
  }
  .marquee-wrapper::before {
    left: 0;
    background: linear-gradient(to right, var(--bg-color) 0%, transparent 100%);
  }
  .marquee-wrapper::after {
    right: 0;
    background: linear-gradient(to left, var(--bg-color) 0%, transparent 100%);
  }

  /* Loop from left to right */
  @keyframes scrollLeftToRight {
    0% { transform: translateX(calc(-50% - 1.5rem)); }
    100% { transform: translateX(0); }
  }

  .marquee-track {
    display: flex;
    gap: 3rem;
    width: max-content;
    animation: scrollLeftToRight 40s linear infinite;
  }
  
  .marquee-track:hover {
    animation-play-state: paused;
  }

  .t-item {
    width: 350px;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    text-align: left;
  }

  @media (max-width: 900px) {
    .t-arch-container { height: 300px; gap: 0.8rem; }
    .t-heading { font-size: 1.8rem; margin-bottom: 2rem; }
    .t-item { width: 300px; }
  }
`;

export default function Testimonials() {
  // We duplicate the testimonials to create a seamless loop
  const LOOPED_TESTIMONIALS = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="section" style={{ textAlign: 'center', padding: '6rem 0', background: 'transparent' }}>
      <style>{styles}</style>

      {/* Top Image Collage */}
      <div className="t-arch-container">
        <div className="t-arch-col t-col-1" style={{ width: '130px' }}>
          <div className="t-img-box" style={{ height: '180px' }}><img src={ARCH_IMAGES[0]} alt="" /></div>
          <div className="t-img-box" style={{ height: '140px' }}><img src={ARCH_IMAGES[1]} alt="" /></div>
        </div>
        <div className="t-arch-col t-col-2" style={{ width: '140px' }}>
          <div className="t-img-box" style={{ height: '120px' }}><img src={ARCH_IMAGES[2]} alt="" /></div>
          <div className="t-img-box" style={{ height: '180px' }}><img src={ARCH_IMAGES[3]} alt="" /></div>
          <div className="t-img-box" style={{ height: '130px' }}><img src={ARCH_IMAGES[4]} alt="" /></div>
        </div>
        <div className="t-arch-col t-col-3" style={{ width: '160px' }}>
          <div className="t-img-box" style={{ height: '240px' }}><img src={ARCH_IMAGES[5]} alt="" /></div>
          <div className="t-img-box" style={{ height: '180px' }}><img src={ARCH_IMAGES[6]} alt="" /></div>
        </div>
        <div className="t-arch-col t-col-4" style={{ width: '180px' }}>
          <div className="t-img-box" style={{ height: '380px' }}><img src={ARCH_IMAGES[7]} alt="" /></div>
        </div>
        <div className="t-arch-col t-col-5" style={{ width: '150px' }}>
          <div className="t-img-box" style={{ height: '220px' }}><img src={ARCH_IMAGES[8]} alt="" /></div>
          <div className="t-img-box" style={{ height: '160px' }}><img src={ARCH_IMAGES[9]} alt="" /></div>
        </div>
        <div className="t-arch-col t-col-6" style={{ width: '140px' }}>
          <div className="t-img-box" style={{ height: '140px' }}><img src={ARCH_IMAGES[10]} alt="" /></div>
          <div className="t-img-box" style={{ height: '180px' }}><img src={ARCH_IMAGES[11]} alt="" /></div>
        </div>
        <div className="t-arch-col t-col-7" style={{ width: '130px' }}>
          <div className="t-img-box" style={{ height: '160px' }}><img src={ARCH_IMAGES[12]} alt="" /></div>
          <div className="t-img-box" style={{ height: '150px' }}><img src={ARCH_IMAGES[13]} alt="" /></div>
        </div>
      </div>

      <div className="t-pill">Testimonials</div>
      <h2 className="t-heading">
        Trusted by Elite Sailors <br/>
        <span className="t-heading-light">and Yachting Enthusiasts</span>
      </h2>

      {/* Marquee Testimonials */}
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {LOOPED_TESTIMONIALS.map((t, i) => (
            <div key={i} className="t-item">
              <div style={{ color: '#fbbf24', letterSpacing: '2px', fontSize: '1.1rem' }}>★★★★★</div>
              <p className="paragraph" style={{ fontSize: '0.95rem', lineHeight: 1.6, flex: 1 }}>{t.quote}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem' }}>
                <img src={t.img} alt={t.name} style={{ width: '45px', height: '45px', borderRadius: '50%', objectFit: 'cover' }} />
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-primary)' }}>{t.name}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{t.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
