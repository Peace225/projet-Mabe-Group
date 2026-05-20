import React from 'react';

// Assurez-vous que ces fichiers existent bien dans : public/images/partners/
const partnersData = [
  { id: 1, fileName: "lightenergy.png", alt: "Light Energy" },
  { id: 2, fileName: "logo.png", alt: "Logo Groupe" },
  { id: 3, fileName: "ngia.png", alt: "NGIA" },
  { id: 4, fileName: "rupac.png", alt: "Rupac" },
  { id: 5, fileName: "digital.jpg", alt: "Digital Partner" },
  { id: 5, fileName: "invest.jpg", alt: "Invest In Bangui" },
  
];

export default function Partners() {
  // Duplication pour l'effet de boucle infinie
  const items = [...partnersData, ...partnersData, ...partnersData];

  return (
    <section className="py-24 bg-[#FCFAF6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-20">
        <span className="text-[#C9A227] text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">
          Réseau & Synergie
        </span>
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#1A1A1A]">
          Nos Partenaires
        </h2>
        <div className="w-20 h-[1px] bg-[#C9A227] mx-auto mt-8" />
      </div>

      <div 
        className="relative w-full overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
        }}
      >
        <div className="flex animate-[scroll_40s_linear_infinite] w-max">
          {items.map((partner, index) => (
            <div 
              key={`${partner.id}-${index}`}
              // Suppression des classes grayscale pour conserver les couleurs
              className="mx-12 w-40 flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-500"
            >
              <img 
                src={`/images/partners/${partner.fileName}`} 
                alt={partner.alt} 
                className="max-h-16 w-auto object-contain transition-transform duration-500 hover:scale-110"
                onError={(e) => {
                  e.target.style.display = 'none'; // Cache l'image si elle n'est pas trouvée
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Styles injectés pour l'animation de défilement */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </section>
  );
}