import React, { useState, useEffect } from 'react';

// --- CONFIGURATION ---
const statsData = [
  { id: 1, label: "Marketing", src: "/images/digital.jpg", link: "/marketing" },
  { id: 2, label: "Industriel", src: "/images/rupac.png", link: "/industrial" },
  { id: 3, label: "Food", src: "/images/ngia.png", link: "/ngiafood" },
  { id: 4, label: "Immobilier", src: "/images/logo.png", link: "/immobilier" }
];

export default function Stats() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const gold = '#C9A227';

  useEffect(() => {
    const move = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <section className="relative py-8 md:py-14 lg:py-20 bg-[#050505] overflow-hidden">
      {/* BACKGROUND & EFFETS */}
      <div className="absolute inset-0">
        <div className="absolute top-[-10%] left-[5%] w-64 h-64 md:w-96 md:h-96 rounded-full blur-3xl opacity-20 animate-[float1_12s_ease-in-out_infinite]" style={{ background: `radial-gradient(circle, ${gold}, transparent 70%)` }} />
        <div className="hidden md:block absolute w-80 h-80 rounded-full blur-3xl opacity-[0.06] pointer-events-none transition-transform duration-700" style={{ background: `radial-gradient(circle, ${gold}, transparent 60%)`, left: mouse.x - 200, top: mouse.y - 200 }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(${gold} 1px, transparent 1px), linear-gradient(90deg, ${gold} 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        
        {/* Particules */}
        {[...Array(4)].map((_, i) => (
          <div key={i} className="absolute w-1 h-1 rounded-full animate-[twinkle_4s_ease-in-out_infinite]" style={{ background: gold, left: `${20 + i * 22}%`, top: `${25 + (i % 2) * 40}%`, animationDelay: `${i * 0.7}s`, boxShadow: `0 0 8px ${gold}` }} />
        ))}
      </div>

      {/* BORDURES SCINTILLANTES */}
      <div className="absolute top-0 left-0 w-full h-[1px] overflow-hidden"><div className="w-full h-full animate-[shimmer_3s_linear_infinite]" style={{ background: `linear-gradient(90deg, transparent, ${gold}, transparent)` }} /></div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] overflow-hidden"><div className="w-full h-full animate-[shimmer_3s_linear_infinite_reverse]" style={{ background: `linear-gradient(90deg, transparent, ${gold}, transparent)` }} /></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-4 sm:gap-6">
          {statsData.map((item) => (
            <a key={item.id} href={item.link} className="flex flex-col items-center text-center px-2 group">
              
              {/* Conteneur du Logo Cliquable */}
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mb-6 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-105 bg-white/5 backdrop-blur-md border border-white/10 p-4">
                <img 
                    src={item.src} 
                    alt={item.label} 
                    className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300" 
                />
              </div>

              {/* Label */}
              <div className="relative">
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-white/50 group-hover:text-white/90 transition-colors">
                  {item.label}
                </span>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] transition-all duration-500 group-hover:w-8" style={{ background: gold }} />
              </div>
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float1 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(20px, -15px) scale(1.05); } }
        @keyframes twinkle { 0%,100% { opacity: 0.3; } 50% { opacity: 1; } }
        @keyframes shimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
      `}</style>
    </section>
  );
}