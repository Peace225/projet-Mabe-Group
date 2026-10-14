import React, { useState, useEffect } from 'react';

// --- CONFIGURATION ---
const activiteData = [
  { id: 1, label: "Marketing", src: "/images/digital.png", link: "/marketing" }
];

const developpementData = [
  { id: 2, label: "Industriel", src: "/images/rupac.png", link: "/industrial" },
  { id: 3, label: "Agroalimentaire", src: "/images/ngiafood.png", link: "/ngiafood" }
];

export default function StatsPage() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const gold = '#C9A227';

  useEffect(() => {
    const move = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  // Fonction pour générer les cartes de façon réutilisable
  const renderCards = (data, delayOffset = 0) => (
    <div className="flex justify-center items-center flex-wrap gap-4 sm:gap-6 perspective-container w-full">
      {data.map((item, index) => (
        <a 
          key={item.id} 
          href={item.link} 
          className="flex flex-col items-center text-center px-1 sm:px-2 group motion-card"
          style={{ animationDelay: `${delayOffset + index * 0.2}s` }}
        >
          {/* Cartes aux angles vifs avec dimensions adaptées mobile / desktop */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mb-2 sm:mb-3 flex items-center justify-center bg-white/5 backdrop-blur-md border border-white/10 p-3 sm:p-4 card-inner-motion">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ boxShadow: `inset 0 0 20px ${gold}20` }} />
            <img 
                src={item.src} 
                alt={item.label} 
                className="w-full h-full object-contain opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110 logo-motion" 
            />
          </div>
          <div className="relative label-container">
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-white/50 group-hover:text-white/90 transition-all duration-500 inline-block group-hover:-translate-y-1">
              {item.label}
            </span>
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-[1px] transition-all duration-700 ease-out group-hover:w-8" style={{ background: gold }} />
          </div>
        </a>
      ))}
    </div>
  );

  return (
    <section className="relative py-8 md:py-12 bg-[#050505] overflow-hidden">
      
      {/* BACKGROUND & EFFETS */}
      <div className="absolute inset-0">
        <div className="absolute top-[-10%] left-[5%] w-48 h-48 md:w-80 md:h-80 rounded-full blur-3xl opacity-20 animate-[float1_12s_ease-in-out_infinite]" style={{ background: `radial-gradient(circle, ${gold}, transparent 70%)` }} />
        <div className="hidden md:block absolute w-64 h-64 rounded-full blur-3xl opacity-[0.06] pointer-events-none transition-transform duration-700" style={{ background: `radial-gradient(circle, ${gold}, transparent 60%)`, left: mouse.x - 150, top: mouse.y - 150 }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(${gold} 1px, transparent 1px), linear-gradient(90deg, ${gold} 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
      </div>

      <div className="absolute top-0 left-0 w-full h-[1px] overflow-hidden"><div className="w-full h-full animate-[shimmer_3s_linear_infinite]" style={{ background: `linear-gradient(90deg, transparent, ${gold}, transparent)` }} /></div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] overflow-hidden"><div className="w-full h-full animate-[shimmer_3s_linear_infinite_reverse]" style={{ background: `linear-gradient(90deg, transparent, ${gold}, transparent)` }} /></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* MISE EN PAGE RESPONSIVE (Empilé sur mobile, côte à côte sur Desktop) */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 md:gap-16 lg:gap-24">
          
          {/* BLOC 1 : Notre Activité */}
          <div className="flex flex-col items-center w-full md:w-auto">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-4 sm:w-8 md:w-10 h-[1px] bg-gradient-to-r from-transparent to-[#C9A227]"></div>
              <h2 className="text-[#C9A227] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] opacity-90 whitespace-nowrap">
                Notre Activité
              </h2>
              <div className="w-4 sm:w-8 md:w-10 h-[1px] bg-gradient-to-l from-transparent to-[#C9A227]"></div>
            </div>
            {renderCards(activiteData, 0)}
          </div>

          {/* SÉPARATEUR VISUEL RESPONSIVE */}
          <div className="hidden md:block w-[1px] h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent self-center mt-6"></div>
          <div className="block md:hidden w-24 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent my-2"></div>

          {/* BLOC 2 : Projets en Développement */}
          <div className="flex flex-col items-center w-full md:w-auto">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-4 sm:w-8 md:w-10 h-[1px] bg-gradient-to-r from-transparent to-[#C9A227]"></div>
              <h2 className="text-[#C9A227] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] opacity-90 whitespace-nowrap">
                Projets en Développement
              </h2>
              <div className="w-4 sm:w-8 md:w-10 h-[1px] bg-gradient-to-l from-transparent to-[#C9A227]"></div>
            </div>
            {renderCards(developpementData, 0.3)}
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes float1 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(20px, -15px) scale(1.05); } }
        @keyframes shimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }

        .perspective-container { perspective: 1000px; }
        
        .motion-card { 
          opacity: 0; 
          transform: translateY(30px) rotateX(10deg); 
          animation: cardEntrance 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; 
        }
        
        @keyframes cardEntrance { 
          0% { opacity: 0; transform: translateY(30px) rotateX(10deg); } 
          100% { opacity: 1; transform: translateY(0) rotateX(0deg); } 
        }
        
        .card-inner-motion { 
          transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.6s ease; 
          transform-style: preserve-3d; 
        }
        
        .motion-card:hover .card-inner-motion { 
          transform: translateY(-6px) scale(1.02); 
          box-shadow: 0 15px 30px rgba(0,0,0,0.4), 0 0 15px rgba(201, 162, 39, 0.1); 
          border-color: rgba(255,255,255,0.2); 
        }
        
        .logo-motion { filter: grayscale(80%) contrast(1.2); }
        .motion-card:hover .logo-motion { filter: grayscale(0%) contrast(1); }
      `}</style>
    </section>
  );
}