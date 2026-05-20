import React, { useEffect } from 'react';

const VisionMission = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-[#FCFAF6] min-h-screen pt-24 md:pt-44 pb-20 md:pb-32 relative overflow-hidden text-[#1A1A1A] antialiased">
      
      <style>{`
        @keyframes fadeUpReveal {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up { animation: fadeUpReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>

      {/* --- SECTION TITRE --- */}
      <section className="max-w-7xl mx-auto px-6 mb-20 md:mb-40 text-center relative z-10 animate-fade-up">
        <div className="w-[1px] h-12 md:h-20 bg-gradient-to-b from-transparent to-[#C9A227] mx-auto mb-6 md:mb-10" />
        <span className="text-[#C9A227] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[8px] md:text-[10px] font-bold block mb-4 md:mb-6">
          Philosophie Institutionnelle
        </span>
        <h1 className="text-[#1A1A1A] font-black text-4xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-[0.9]">
          Ambition <span className="text-gray-300 font-light italic font-serif lowercase">&</span> Impact
        </h1>
      </section>

      {/* --- SECTION MISSION --- */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center mb-20 md:mb-48 relative z-10">
        
        <div className="relative group h-[350px] md:h-[600px] w-full">
          <div className="absolute inset-0 border border-[#1A1A1A]/10 translate-x-3 translate-y-3 rounded-sm" />
          <div className="relative h-full w-full overflow-hidden rounded-sm bg-gray-100 shadow-sm border border-white">
            <div className="absolute inset-0 bg-cover bg-center grayscale" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070')" }} />
            <div className="absolute top-4 left-4 md:top-8 md:left-8 bg-[#1A1A1A] text-white p-3 md:p-5 rounded-sm">
              <span className="text-[#C9A227] font-serif italic text-xl md:text-3xl font-light block">01</span>
              <span className="text-white/40 text-[7px] md:text-[8px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold">Le Point de Départ</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-6 md:space-y-10 lg:pr-6">
          <div className="space-y-2 md:space-y-4">
            <h2 className="text-[#1A1A1A] font-black text-3xl md:text-5xl uppercase tracking-tighter">
              Notre <span className="text-gray-300 font-light font-serif italic lowercase">Mission</span>
            </h2>
            <div className="h-[2px] w-12 md:w-16 bg-[#C9A227]" />
          </div>
          
          <p className="text-[#525252] text-base md:text-2xl leading-relaxed font-serif italic font-light border-l-2 border-[#C9A227] pl-4 md:pl-6 py-2 bg-white/40 shadow-sm rounded-r-sm">
            "Propulser nos partenaires vers de nouveaux sommets via des solutions de marketing digital, l'optimisation industrielle et le commerce haut de gamme."
          </p>
          
          <ul className="space-y-4 text-[#525252]/80 text-xs md:text-sm font-light tracking-wide">
            {["Accompagnement stratégique pour marques de prestige.", "Ingénierie de processus et efficacité industrielle.", "Expériences client mémorables dans le Retail."].map((text, i) => (
              <li key={i} className="flex items-start space-x-3">
                <span className="w-1 h-1 rounded-full bg-[#C9A227] mt-2 flex-shrink-0" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* --- SECTION VISION --- */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center mb-20 md:mb-40 relative z-10">
        <div className="order-2 lg:order-1 space-y-6 md:space-y-10 lg:pl-6">
          <div className="space-y-4">
            <div className="flex items-baseline gap-3">
              <span className="text-[#C9A227] font-serif italic text-xl">02</span>
              <span className="text-gray-400 text-[8px] uppercase tracking-[0.2em] font-bold">L'Objectif Global</span>
            </div>
            <h2 className="text-[#1A1A1A] font-black text-3xl md:text-5xl uppercase tracking-tighter">
              Notre <span className="text-gray-300 font-light font-serif italic lowercase">Vision</span>
            </h2>
          </div>
          
          <p className="text-[#525252] text-sm md:text-lg leading-relaxed font-light">
            Construire un groupe africain moderne capable de développer des marques fortes et innovantes, tout en valorisant les talents et opportunités locales.
          </p>
          
          <div className="pt-4 border-t border-[#1A1A1A]/5">
            <h4 className="text-[#1A1A1A] uppercase text-[9px] tracking-[0.2em] font-bold mb-4">Nos Valeurs</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {["Excellence", "Innovation", "Professionnalisme", "Créativité", "Impact", "Leadership"].map((valeur, i) => (
                <div key={i} className="flex items-center gap-2 text-[#525252] text-[10px] md:text-xs">
                  <span className="w-1 h-1 bg-[#C9A227]" /> {valeur}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="order-1 lg:order-2 relative h-[350px] md:h-[600px] p-3 bg-white shadow-sm border border-[#1A1A1A]/5 rounded-sm">
          <div className="w-full h-full bg-cover bg-center grayscale" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1449156003053-c3d8c5f2ad2a?q=80&w=2070')" }} />
        </div>
      </section>
    </div>
  );
};

export default VisionMission;