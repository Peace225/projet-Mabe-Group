import React, { useState, useEffect, useRef } from 'react';

// --- COMPTEUR ---
const AnimatedNumber = ({ value }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const target = parseInt(value, 10);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let start = null;
        const step = (timestamp) => {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / 2000, 1);
          const easeOut = 1 - Math.pow(1 - progress, 4);
          setCount(Math.floor(easeOut * target));
          if (progress < 1) requestAnimationFrame(step);
          else setCount(target);
        };
        requestAnimationFrame(step);
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={nodeRef}>{count}</span>;
};

// --- ICÔNES (plus petites mobile) ---
const ShieldIcon = () => (<svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 0 0112 2.944a11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>);
const RocketIcon = () => (<svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>);
const GlobeIcon = () => (<svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>);
const CrownIcon = () => (<svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>);

const statsData = [
  { id: 1, value: '15', suffix: '+', label: "Années d'Expertise", icon: <ShieldIcon /> },
  { id: 2, value: '500', suffix: '+', label: "Projets Déployés", icon: <RocketIcon /> },
  { id: 3, value: '3', suffix: '', label: "Continents Couverts", icon: <GlobeIcon /> },
  { id: 4, value: '98', suffix: '%', label: "Clients Satisfaits", icon: <CrownIcon /> }
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
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        {/* Orbes - beaucoup plus petits mobile */}
        <div className="absolute top-[-10%] left-[5%] w- h- md:w- md:h- lg:w- lg:h- rounded-full blur- md:blur- animate-[float1_12s_ease-in-out_infinite]" style={{ background: `radial-gradient(circle, ${gold}15, transparent 70%)` }} />
        <div className="absolute bottom-[-20%] right-[5%] w- h- md:w- md:h- lg:w- lg:h- rounded-full blur- md:blur- animate-[float2_15s_ease-in-out_infinite]" style={{ background: `radial-gradient(circle, ${gold}12, transparent 70%)` }} />

        {/* Halo souris - désactivé mobile */}
        <div className="hidden md:block absolute w- h- lg:w- lg:h- rounded-full blur- lg:blur- opacity-[0.06] pointer-events-none transition-transform duration-700" style={{
          background: `radial-gradient(circle, ${gold}, transparent 60%)`,
          left: mouse.x - 200,
          top: mouse.y - 200,
        }} />

        {/* Grille */}
        <div className="absolute inset-0 opacity-[0.02] md:opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(${gold} 1px, transparent 1px), linear-gradient(90deg, ${gold} 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }} />

        {/* Particules - moins nombreuses mobile */}
        <div className="hidden sm:block">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="absolute w-0.5 h-0.5 md:w-1 md:h-1 rounded-full animate-[twinkle_4s_ease-in-out_infinite]" style={{
              background: gold,
              left: `${20 + i * 22}%`,
              top: `${25 + (i % 2) * 40}%`,
              animationDelay: `${i * 0.7}s`,
              boxShadow: `0 0 8px ${gold}`
            }} />
          ))}
        </div>
      </div>

      {/* Bordures */}
      <div className="absolute top-0 left-0 w-full h- overflow-hidden">
        <div className="w-full h-full animate-[shimmer_3s_linear_infinite]" style={{ background: `linear-gradient(90deg, transparent, ${gold}, transparent)` }} />
      </div>
      <div className="absolute bottom-0 left-0 w-full h- overflow-hidden">
        <div className="w-full h-full animate-[shimmer_3s_linear_infinite_reverse]" style={{ background: `linear-gradient(90deg, transparent, ${gold}, transparent)` }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Grille : 2 colonnes mobile, 4 desktop - gaps réduits */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4 sm:gap-6 lg:gap-0 lg:divide-x" style={{ borderColor: `${gold}15` }}>

          {statsData.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center text-center px-2 sm:px-4 py-2 group">

              {/* Médaillon - taille réduite mobile */}
              <div className="relative w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-4 transition-all duration-500 group-hover:scale-110" style={{
                background: `linear-gradient(135deg, rgba(255,255,255,0.06), transparent)`,
                border: `1px solid ${gold}25`,
              }}>
                <div className="text-[#C9A227] group-hover:text-[#FFD700] transition-colors">
                  {stat.icon}
                </div>
              </div>

              {/* Chiffres - beaucoup plus petits mobile */}
              <div className="flex items-baseline justify-center mb-1.5 md:mb-2">
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text tracking-tight" style={{ backgroundImage: `linear-gradient(to bottom, white, ${gold}, #8B6914)` }}>
                  <AnimatedNumber value={stat.value} />
                </span>
                <span className="text-lg sm:text-xl md:text-2xl font-bold ml-0.5 md:ml-1" style={{ color: `${gold}CC` }}>{stat.suffix}</span>
              </div>

              {/* Label - compact mobile */}
              <div className="relative">
                <span className="text- sm:text- md:text- font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.35em] text-white/50 group-hover:text-white/80 transition-colors leading-tight block px-1">
                  {stat.label}
                </span>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1.5px] md:h- transition-all duration-500 group-hover:w-6 md:group-hover:w-8" style={{ background: gold }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float1 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(20px, -15px) scale(1.05); } }
        @keyframes float2 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-15px, 20px) scale(0.95); } }
        @keyframes twinkle { 0%,100% { opacity: 0.3; } 50% { opacity: 1; } }
        @keyframes shimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
      `}</style>
    </section>
  );
}