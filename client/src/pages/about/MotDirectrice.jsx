import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const MotDirecteur = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-[#FCFAF6] min-h-screen pt-24 md:pt-44 pb-20 md:pb-32 relative overflow-hidden text-[#1A1A1A] antialiased">
      
      <style>{`
        @keyframes subtleFadeReveal {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-reveal { animation: subtleFadeReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>

      {/* --- SECTION HEADER & PORTRAIT --- */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-20 md:mb-40 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10 animate-fade-reveal">
        
        <div className="order-2 lg:order-1 space-y-6 md:space-y-10">
          <div className="relative pl-6">
            <div className="absolute left-0 top-1 bottom-1 w-[2px] bg-gradient-to-b from-[#C9A227] to-transparent" />
            <span className="text-[#C9A227] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[8px] md:text-[10px] mb-2 md:mb-4 font-bold block">
              Gouvernance & Vision
            </span>
            <h1 className="text-[#1A1A1A] font-black text-4xl md:text-7xl uppercase tracking-tighter leading-[0.9] mb-6 md:mb-8">
              Le Mot du <br /> <span className="text-gray-300 font-light italic font-serif lowercase">ceo</span>
            </h1>
          </div>
          
          <div className="space-y-6 md:space-y-8">
            <p className="text-[#525252] text-lg md:text-3xl leading-relaxed font-serif italic font-light tracking-tight border-l-2 border-[#C9A227]/30 pl-4 md:pl-8 bg-white/40 py-4 pr-4 rounded-r-sm shadow-sm">
              "Notre ambition n'est pas simplement de suivre les évolutions du marché, mais d'en être les principaux architectes."
            </p>
            
            <div className="flex flex-col pl-4 md:pl-8">
              <span className="text-[#C9A227] uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs font-bold mb-1">Mlle. Excellencia</span>
              <span className="text-gray-400 text-[8px] md:text-[9px] uppercase tracking-[0.1em] md:tracking-[0.2em] font-medium">Directrice Générale, Excellencia Mabe Group</span>
            </div>
          </div>
        </div>
        
        <div className="order-1 lg:order-2 relative group w-full max-w-[300px] md:max-w-md mx-auto lg:ml-auto">
          <div className="absolute -inset-4 border border-[#1A1A1A]/5 translate-x-2 translate-y-2 rounded-sm" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-gray-100 border border-white z-10">
            <img src="/images/hero.jpeg" alt="Mlle. Excellencia" className="w-full h-full object-cover object-top filter grayscale" />
          </div>
        </div>
      </section>

      {/* --- SECTION LETTRE --- */}
      <section className="bg-white py-20 md:py-36 px-6 relative border-y border-[#1A1A1A]/5">
        <div className="max-w-3xl mx-auto relative z-10 space-y-6 md:space-y-10 text-[#525252] font-light leading-relaxed text-sm md:text-lg tracking-wide text-justify">
          <p className="font-bold text-[#1A1A1A] text-xl md:text-2xl tracking-tight mb-8 md:mb-12 font-serif italic">Chers partenaires, chers clients,</p>
          <p>Lorsque nous avons fondé <strong className="font-semibold text-[#1A1A1A]">Excellencia Mabe Group</strong>, nous avions une conviction : le potentiel de l'Afrique nécessite une structuration rigoureuse.</p>
          
          <blockquote className="my-12 md:my-20 py-8 md:py-12 border-y border-[#1A1A1A]/10 text-center">
            <p className="text-[#1A1A1A] font-black text-xl md:text-4xl uppercase tracking-tighter leading-tight">
              "L'innovation est notre moteur, l'intégrité notre boussole."
            </p>
          </blockquote>
          
          <div className="pt-8 md:pt-16 flex flex-col items-end">
            <span className="text-xl md:text-3xl text-[#1A1A1A] font-black italic tracking-tighter uppercase font-serif">Excellencia</span>
            <div className="h-[2px] w-8 md:w-12 bg-[#C9A227] mt-2 mb-2" />
            <span className="text-gray-400 text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.4em] font-bold">Directrice Générale</span>
          </div>
        </div>
      </section>

      {/* --- SECTION CONTACT CTA --- */}
      <section className="py-20 md:py-24 px-6 text-center max-w-5xl mx-auto">
        <div className="p-8 md:p-24 bg-white border border-[#1A1A1A]/5 shadow-sm rounded-sm">
          <h3 className="text-[#1A1A1A] font-black text-2xl md:text-5xl uppercase tracking-tighter mb-4 md:mb-6 leading-none">
            Collaborons pour <br/> <span className="text-[#C9A227] font-light font-serif italic lowercase">l'</span>Excellence
          </h3>
          <p className="text-[#525252]/80 mb-8 md:mb-12 font-light text-xs md:text-base leading-relaxed">
            Rejoignez le cercle des entreprises qui ont choisi la performance durable.
          </p>
          <Link to="/#contact" className="inline-flex items-center gap-3 bg-[#1A1A1A] text-white px-8 py-3 uppercase tracking-[0.2em] text-[9px] md:text-[10px] font-bold hover:bg-[#C9A227] transition-all">
            Initier un projet
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MotDirecteur;