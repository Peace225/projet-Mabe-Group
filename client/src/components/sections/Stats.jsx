import React, { useState, useEffect, useRef } from 'react';

// --- SOUS-COMPOSANT : COMPTEUR ANIMÉ ---
const AnimatedNumber = ({ value }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const target = parseInt(value, 10);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startTimestamp = null;
          const duration = 2000; // Durée de l'animation en millisecondes (2 secondes)

          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            // Fonction d'assouplissement (Ease-out) pour un ralentissement luxueux à la fin
            const easeOut = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOut * target));

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(target);
            }
          };
          
          window.requestAnimationFrame(step);
          observer.disconnect(); // L'animation ne se joue qu'une seule fois
        }
      },
      { threshold: 0.5 } // Se déclenche quand la moitié du composant est visible
    );

    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }

    return () => observer.disconnect();
  }, [target]);

  return <span ref={nodeRef}>{count}</span>;
};


// --- ICÔNES SVG PREMIUM ---
const ShieldIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const RocketIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const GlobeIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CrownIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

// --- DONNÉES DES STATISTIQUES ---
const statsData = [
  { 
    id: 1, 
    value: '15', 
    suffix: '+', 
    label: "Années d'Expertise",
    icon: <ShieldIcon />
  },
  { 
    id: 2, 
    value: '500', 
    suffix: '+', 
    label: "Projets Déployés",
    icon: <RocketIcon />
  },
  { 
    id: 3, 
    value: '3', 
    suffix: '', 
    label: "Continents Couverts",
    icon: <GlobeIcon />
  },
  { 
    id: 4, 
    value: '98', 
    suffix: '%', 
    label: "Clients Satisfaits",
    icon: <CrownIcon />
  }
];

export default function Stats() {
  return (
    // Hauteur réduite : py-24 devient py-12 md:py-16
    <section className="relative py-12 md:py-16 bg-[#050505] overflow-hidden">
      
      {/* Lignes de bordure premium (haut et bas) avec dégradé */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-mabe-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-mabe-gold/30 to-transparent" />

      {/* Effets de lumière ambiante */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-mabe-gold/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Grille adaptative avec séparateurs subtils - Gap réduit de 12 à 8 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-mabe-gold/10">
          
          {statsData.map((stat) => (
            <div 
              key={stat.id} 
              className="flex flex-col items-center text-center px-4 group cursor-default"
            >
              {/* Médaillon d'icône réduit (w-12 h-12 au lieu de 16) */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 shadow-[0_0_20px_rgba(212,175,55,0.05)] flex items-center justify-center mb-4 text-mabe-gold group-hover:bg-mabe-gold/10 group-hover:border-mabe-gold/30 group-hover:scale-110 transition-all duration-500 ease-out">
                {stat.icon}
              </div>

              <div className="flex items-baseline justify-center mb-2">
                {/* Le Chiffre animé avec dégradé - Taille réduite de text-7xl à text-5xl/6xl */}
                <span className="text-5xl md:text-6xl font-sans font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-mabe-gold to-yellow-700 tracking-tight group-hover:scale-105 transition-transform duration-500 ease-out">
                  <AnimatedNumber value={stat.value} />
                </span>
                {/* Le Suffixe (+ ou %) */}
                <span className="text-2xl font-sans font-bold text-mabe-gold/70 ml-1">
                  {stat.suffix}
                </span>
              </div>
              
              {/* Le Label */}
              <div className="relative">
                <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.3em] md:tracking-[0.4em] text-white/50 group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </span>
                {/* Petit trait de soulignement animé */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-mabe-gold transition-all duration-500 group-hover:w-8 opacity-0 group-hover:opacity-100" />
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}