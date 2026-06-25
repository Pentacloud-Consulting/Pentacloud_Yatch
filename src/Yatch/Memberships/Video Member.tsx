import React from 'react';

export default function VideoMember() {
  return (
    <section style={{ position: 'relative', height: '450px', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      {/* Video Background Layer */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src="/Yacht/yacht Moving.mp4" type="video/mp4" />
        </video>

      </div>


    </section>
  );
}
