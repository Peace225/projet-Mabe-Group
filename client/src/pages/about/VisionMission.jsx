import React, { useEffect } from 'react';

const VisionMission = () => {
  // Remonter en haut de la page au chargement
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-[#FCFAF6] min-h-screen pt-44 pb-32 relative overflow-hidden text-[#1A1A1A] antialiased">
      
      {/* Styles d'animations injectés localement pour les effets fluides */}
      <style>{`
        @keyframes fadeUpReveal {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fadeUpReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* Lumières d'ambiance subtiles adaptées au fond clair */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#C9A227]/5 blur-[160px] rounded-full -translate-y-1/2 pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#C9A227]/4 blur-[140px] rounded-full pointer-events-none mix-blend-multiply" />

      {/* --- SECTION TITRE --- */}
      <section className="max-w-7xl mx-auto px-6 mb-40 text-center relative z-10 animate-fade-up">
        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent to-[#C9A227] mx-auto mb-10" />
        <span className="text-[#C9A227] uppercase tracking-[0.5em] text-[10px] font-bold block mb-6">
          Philosophie Institutionnelle
        </span>
        <h1 className="text-[#1A1A1A] font-black text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-none">
          Ambition <span className="text-gray-300 font-light italic font-serif lowercase">&</span> Impact
        </h1>
      </section>

      {/* --- SECTION MISSION --- */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-48 relative z-10">
        
        {/* Bloc Image Premium avec cadres décalés */}
        <div className="relative group h-[500px] md:h-[600px] w-full transform transition-transform duration-1000 hover:-translate-y-1">
          <div className="absolute inset-0 border border-[#1A1A1A]/10 translate-x-4 translate-y-4 transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2 rounded-sm" />
          <div className="relative h-full w-full overflow-hidden rounded-sm bg-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-white">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[2.5s] ease-out group-hover:scale-105 grayscale hover:grayscale-0" 
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            
            {/* Badge exclusif */}
            <div className="absolute top-8 left-8 bg-[#1A1A1A] text-white p-5 rounded-sm shadow-xl tracking-wide">
              <span className="text-[#C9A227] font-serif italic text-3xl font-light leading-none block mb-1">01</span>
              <span className="text-white/40 text-[8px] uppercase tracking-[0.3em] font-bold block">Le Point de Départ</span>
            </div>
          </div>
        </div>
        
        {/* Bloc Texte */}
        <div className="space-y-10 lg:pr-6">
          <div className="space-y-4">
            <h2 className="text-[#1A1A1A] font-black text-4xl md:text-5xl uppercase tracking-tighter">
              Notre <span className="text-gray-300 font-light font-serif italic lowercase">Mission</span>
            </h2>
            <div className="h-[2px] w-16 bg-[#C9A227] transition-all duration-500 hover:w-28" />
          </div>
          
          <p className="text-[#525252] text-xl md:text-2xl leading-relaxed font-serif italic font-light border-l-2 border-[#C9A227] pl-6 py-2 bg-white/40 shadow-sm rounded-r-sm">
            "Propulser nos partenaires vers de nouveaux sommets via des solutions de marketing digital d'influence, optimiser les processus industriels et redéfinir le commerce de détail haut de gamme."
          </p>
          
          <ul className="space-y-6 text-[#525252]/80 text-sm font-light tracking-wide">
            {[
              "Accompagnement stratégique sur mesure pour les marques de prestige.",
              "Ingénierie de processus pour une efficacité industrielle accrue.",
              "Création d'expériences client mémorables dans le Retail."
            ].map((text, i) => (
              <li key={i} className="flex items-start space-x-4 group cursor-default">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] mt-2 group-hover:scale-150 group-hover:bg-[#1A1A1A] transition-all duration-300 flex-shrink-0" />
                <span className="group-hover:text-[#1A1A1A] transition-colors duration-300 leading-relaxed">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* --- SECTION VISION (Éditorial & Épuré) --- */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-40 relative z-10">
        
        {/* Bloc Texte */}
        <div className="order-2 lg:order-1 space-y-10 lg:pl-6">
          <div className="space-y-4">
            <div className="flex items-baseline gap-3">
              <span className="text-[#C9A227] font-serif italic text-2xl">02</span>
              <span className="text-gray-400 text-[9px] uppercase tracking-[0.3em] font-bold">L'Objectif Global</span>
            </div>
            <h2 className="text-[#1A1A1A] font-black text-4xl md:text-5xl uppercase tracking-tighter">
              Notre <span className="text-gray-300 font-light font-serif italic lowercase">Vision</span>
            </h2>
            <div className="h-[2px] w-16 bg-[#C9A227]" />
          </div>
          
          <p className="text-[#525252] text-base md:text-lg leading-relaxed font-light tracking-wide">
            Construire un groupe africain moderne capable de développer des marques fortes, créatives et innovantes, tout en valorisant les talents, les entreprises et les opportunités locales.
          </p>
          
          {/* Grille des Valeurs Cœurs */}
          <div className="pt-8 border-t border-[#1A1A1A]/5">
            <h4 className="text-[#1A1A1A] uppercase text-[10px] tracking-[0.3em] font-bold mb-6 flex items-center gap-3">
              <span className="w-3 h-[1px] bg-[#C9A227]" />
              Nos Valeurs Fondamentales
            </h4>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-6">
              {[
                "Excellence",
                "Innovation",
                "Professionnalisme",
                "Créativité",
                "Impact",
                "Élégance",
                "Leadership"
              ].map((valeur, i) => (
                <div key={i} className="flex items-center gap-2.5 group cursor-default">
                  <span className="w-1 h-1 rounded-full bg-[#C9A227] group-hover:scale-150 transition-transform duration-300" />
                  <span className="text-[#525252] text-xs font-medium tracking-wide group-hover:text-[#1A1A1A] transition-colors duration-300">
                    {valeur}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bloc Image Style Galerie d'Art */}
        <div className="order-1 lg:order-2 relative h-[500px] md:h-[600px] p-4 bg-white shadow-[0_30px_70px_rgba(0,0,0,0.03)] border border-[#1A1A1A]/5 group rounded-sm">
          <div className="absolute inset-0 bg-[#C9A227]/0 group-hover:bg-[#C9A227]/5 z-10 transition-colors duration-700 pointer-events-none" />
          <div 
            className="w-full h-full bg-cover bg-center transition-transform duration-[2s] filter grayscale contrast-110 group-hover:scale-[1.01]" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1449156003053-c3d8c5f2ad2a?q=80&w=2070')" }}
          />
        </div>
      </section>

      {/* --- BANNIÈRE FINALE --- */}
      <section className="py-24 px-6 text-center max-w-5xl mx-auto relative z-10">
        <div className="p-12 md:p-24 bg-white border border-[#1A1A1A]/5 shadow-[0_20px_50px_rgba(0,0,0,0.02)] rounded-sm relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#C9A227]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
          
          <h3 className="text-[#1A1A1A] font-black text-3xl md:text-5xl uppercase tracking-tighter mb-8 leading-[1.1] relative z-10">
            Bâtir l'avenir de <br /> 
            <span className="text-[#C9A227] font-light font-serif italic lowercase">l'</span>économie africaine
          </h3>
          
          <div className="flex items-center justify-center gap-4 relative z-10">
            <div className="w-12 h-[1px] bg-[#1A1A1A]/10 transition-all duration-700 group-hover:w-20 group-hover:bg-[#C9A227]" />
            <p className="text-[#525252]/60 font-semibold tracking-[0.4em] uppercase text-[9px]">
              Excellencia Mabe Group — Horizon 2030
            </p>
            <div className="w-12 h-[1px] bg-[#1A1A1A]/10 transition-all duration-700 group-hover:w-20 group-hover:bg-[#C9A227]" />
          </div>
        </div>
      </section>

    </div>
  );
};

export default VisionMission;