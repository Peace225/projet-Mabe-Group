import React from 'react';

// --- LOGOS FICTIFS ---
const LogoTech = () => (
  <svg className="h-8 md:h-10 w-auto" viewBox="0 0 100 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 15L20 5H30L20 15L30 25H20L10 15ZM35 5H45V25H35V5ZM50 5H70V10H60V25H50V5ZM75 5H95V10H85V25H75V5Z" />
  </svg>
);

const LogoFinance = () => (
  <svg className="h-8 md:h-10 w-auto" viewBox="0 0 120 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <circle cx="15" cy="15" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
    <circle cx="35" cy="15" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
    <text x="55" y="22" fontFamily="sans-serif" fontSize="20" fontWeight="bold" letterSpacing="2">CAPITAL</text>
  </svg>
);

const LogoLogistics = () => (
  <svg className="h-8 md:h-10 w-auto" viewBox="0 0 110 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 25V5H25L35 15V25H5Z" stroke="currentColor" strokeWidth="4" fill="none"/>
    <text x="45" y="22" fontFamily="sans-serif" fontSize="18" fontWeight="bold" letterSpacing="1">NEXUS</text>
  </svg>
);

const LogoIndustry = () => (
  <svg className="h-8 md:h-10 w-auto" viewBox="0 0 130 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="20" height="20" stroke="currentColor" strokeWidth="4" fill="none" />
    <rect x="12" y="12" width="20" height="20" stroke="currentColor" strokeWidth="4" fill="none" />
    <text x="45" y="22" fontFamily="sans-serif" fontSize="18" fontWeight="bold" letterSpacing="3">INDUSTRIES</text>
  </svg>
);

const LogoGlobal = () => (
  <svg className="h-8 md:h-10 w-auto" viewBox="0 0 110 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 5L25 25H5L15 5Z" stroke="currentColor" strokeWidth="4" fill="none"/>
    <text x="35" y="22" fontFamily="sans-serif" fontSize="18" fontWeight="bold" letterSpacing="2">GLOBAL</text>
  </svg>
);

// --- DONNÉES DES PARTENAIRES ---
const partnersData = [
  { id: 1, name: "Tech Partner", component: <LogoTech /> },
  { id: 2, name: "Finance Partner", component: <LogoFinance /> },
  { id: 3, name: "Logistics Partner", component: <LogoLogistics /> },
  { id: 4, name: "Industry Partner", component: <LogoIndustry /> },
  { id: 5, name: "Global Partner", component: <LogoGlobal /> },
];

export default function Partners() {
  // On duplique le tableau plusieurs fois pour s'assurer que le défilement couvre même les très grands écrans (4K)
  const duplicatedPartners = [...partnersData, ...partnersData, ...partnersData, ...partnersData];

  return (
    <section className="py-24 md:py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
      
      {/* --- STYLE INJECTÉ POUR L'ANIMATION INFINIE --- */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          /* On décale de la moitié exacte du conteneur pour créer une boucle parfaite */
          100% { transform: translateX(-50%); } 
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        /* Pause l'animation quand on passe la souris dessus */
        .pause-on-hover:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>

      {/* Lumières d'ambiance */}
      <div className="absolute top-1/2 left-1/2 w-[1000px] h-[300px] bg-mabe-gold/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* En-tête de Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="relative pl-6">
            <div className="absolute left-0 top-1 bottom-1 w-[2px] bg-gradient-to-b from-mabe-gold to-transparent" />
            <h4 className="text-mabe-gold text-[10px] font-sans font-semibold uppercase tracking-[0.4em] mb-4">
              Réseau & Synergie
            </h4>
            <h2 className="text-4xl md:text-5xl font-sans font-black text-white tracking-tighter uppercase leading-none">
              Ils nous font <br/>
              <span className="text-white/40 font-light">Confiance</span>
            </h2>
          </div>

          {/* Lien "Devenir Partenaire" */}
          <a 
            href="/#contact" 
            className="group flex items-center gap-3 text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-white/50 hover:text-mabe-gold transition-colors duration-300"
          >
            <span className="border-b border-transparent group-hover:border-mabe-gold pb-1 transition-all duration-300">
              Devenir Partenaire
            </span>
            <span className="w-8 h-[1px] bg-white/20 group-hover:bg-mabe-gold group-hover:w-12 transition-all duration-300" />
          </a>
        </div>
      </div>

      {/* --- BANDEAU DE DÉFILEMENT (MARQUEE) --- */}
      {/* Le conteneur principal avec le masque de dégradé sur les bords */}
      <div 
        className="relative w-full max-w-[100vw] overflow-hidden pause-on-hover mt-10"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
        }}
      >
        {/* La piste qui défile */}
        <div className="flex w-max animate-scroll">
          {duplicatedPartners.map((partner, index) => (
            <div 
              key={`${partner.id}-${index}`}
              className="group mx-4 w-60 h-32 md:h-40 bg-white/[0.02] border border-white/5 backdrop-blur-sm rounded-sm flex items-center justify-center p-6 transition-all duration-500 hover:bg-white/[0.04] hover:border-mabe-gold/30 hover:shadow-[0_10px_30px_rgba(212,175,55,0.05)] cursor-pointer"
            >
              {/* Le Logo */}
              <div className="text-white/30 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:text-mabe-gold transition-all duration-500 transform group-hover:scale-110">
                {/* POUR METTRE TES PROPRES IMAGES :
                  <img src={`/images/partner-${partner.id}.png`} alt={partner.name} className="max-h-12 w-auto object-contain" />
                */}
                {partner.component}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}