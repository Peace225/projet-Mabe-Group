import React from 'react';
import { motion } from 'framer-motion';

// Assurez-vous que ces fichiers existent bien dans : public/images/partners/
const partnersData = [
  { id: 1, fileName: "lightenergy.png", alt: "Light Energy" },
  { id: 2, fileName: "logo.png", alt: "Logo Groupe" },
  { id: 3, fileName: "ngia.png", alt: "NGIA" },
  { id: 4, fileName: "rupac.png", alt: "Rupac" },
  { id: 5, fileName: "digital.jpg", alt: "Digital Partner" },
  { id: 6, fileName: "invest.jpg", alt: "Invest In Bangui" },
];

export default function Partners() {
  // Duplication pour l'effet de boucle infinie fluide
  const items = [...partnersData, ...partnersData, ...partnersData];

  return (
    <section className="py-32 bg-[#FCFAF6] overflow-hidden relative border-t border-[#1A1A1A]/5">
      
      {/* Halo lumineux diffus d'arrière-plan */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C9A227]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* En-tête avec animation d'entrée */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-20 relative z-10">
        <motion.span 
          initial={{ opacity: 0, letterSpacing: '0.2em' }}
          whileInView={{ opacity: 1, letterSpacing: '0.4em' }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-[#C9A227] text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block font-sans"
        >
          Réseau & Synergie
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#1A1A1A] font-sans"
        >
          Nos Partenaires <span className="text-[#C9A227] font-light italic">& Alliances</span>
        </motion.h2>

        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-[1px] bg-[#C9A227] mx-auto mt-8" 
        />
      </div>

      {/* Piste de défilement infini avec effet de fondu sur les bords */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative w-full overflow-hidden py-4"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
        }}
      >
        {/* Le défilement se met en pause élégamment au survol (hover:[animation-play-state:paused]) */}
        <div className="flex animate-[scroll_45s_linear_infinite] w-max hover:[animation-play-state:paused]">
          {items.map((partner, index) => (
            <div 
              key={`${partner.id}-${index}`}
              className="mx-6 w-48 h-28 bg-white border border-[#1A1A1A]/5 rounded-sm shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex items-center justify-center p-6 opacity-60 hover:opacity-100 hover:border-[#C9A227]/40 hover:shadow-[0_10px_30px_rgba(201,162,39,0.1)] transition-all duration-500 transform hover:-translate-y-1 cursor-pointer group"
            >
              <img 
                src={`/images/partners/${partner.fileName}`} 
                alt={partner.alt} 
                className="max-h-12 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                onError={(e) => {
                  e.target.style.display = 'none'; // Cache l'image si le fichier est absent
                }}
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Styles injectés pour l'animation de défilement fluide */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </section>
  );
}