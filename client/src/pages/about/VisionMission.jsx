import React, { useEffect } from 'react';

const VisionMission = () => {
  // Remonter en haut de la page au chargement
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#050505] min-h-screen pt-32 pb-24 relative overflow-hidden">
      
      {/* Lumière d'ambiance globale */}
      <div className="absolute top-0 right-1/2 w-[600px] h-[600px] bg-mabe-gold/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      {/* --- SECTION TITRE --- */}
      <section className="max-w-7xl mx-auto px-6 mb-32 text-center relative z-10">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent to-mabe-gold mx-auto mb-8" />
        <h4 className="text-mabe-gold uppercase tracking-[0.4em] text-[10px] mb-6 font-sans font-semibold">
          Philosophie Institutionnelle
        </h4>
        <h1 className="text-white font-sans font-black text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-none drop-shadow-lg">
          Ambition <span className="text-white/40 font-light">&</span> Impact
        </h1>
      </section>

      {/* --- SECTION MISSION (Dark Mode) --- */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-40 relative z-10">
        
        {/* Bloc Image avec effet de profondeur */}
        <div className="relative group overflow-hidden h-[500px] md:h-[600px] rounded-sm border border-white/5">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] ease-out group-hover:scale-105" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070')" }}
          />
          {/* Voile assombri */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-700" />
          
          {/* Badge élégant sur l'image */}
          <div className="absolute top-8 left-8 bg-[#050505]/80 backdrop-blur-md border border-white/10 p-4 rounded-sm">
            <span className="text-mabe-gold font-sans font-black text-4xl leading-none block mb-1">01</span>
            <span className="text-white/50 text-[8px] uppercase tracking-[0.3em] font-semibold">Le Point de Départ</span>
          </div>
        </div>
        
        {/* Bloc Texte */}
        <div className="space-y-10">
          <div>
            <h2 className="text-white font-sans font-black text-4xl md:text-5xl uppercase tracking-tighter mb-6">
              Notre <span className="text-white/40 font-light">Mission</span>
            </h2>
            <div className="h-[1px] w-24 bg-mabe-gold" />
          </div>
          
          <p className="text-white/80 font-sans text-lg md:text-xl leading-relaxed italic font-light drop-shadow-md border-l-2 border-white/10 pl-6">
            "Propulser nos partenaires vers de nouveaux sommets via des solutions de marketing digital d'influence, optimiser les processus industriels et redéfinir le commerce de détail haut de gamme."
          </p>
          
          <ul className="space-y-6 text-white/50 font-sans text-sm font-light tracking-wide">
            <li className="flex items-start space-x-4 group">
              <span className="w-1.5 h-1.5 rounded-full bg-mabe-gold mt-1.5 group-hover:scale-150 transition-transform duration-300" />
              <span className="group-hover:text-white transition-colors duration-300">Accompagnement stratégique sur mesure pour les marques de prestige.</span>
            </li>
            <li className="flex items-start space-x-4 group">
              <span className="w-1.5 h-1.5 rounded-full bg-mabe-gold mt-1.5 group-hover:scale-150 transition-transform duration-300" />
              <span className="group-hover:text-white transition-colors duration-300">Ingénierie de processus pour une efficacité industrielle accrue.</span>
            </li>
            <li className="flex items-start space-x-4 group">
              <span className="w-1.5 h-1.5 rounded-full bg-mabe-gold mt-1.5 group-hover:scale-150 transition-transform duration-300" />
              <span className="group-hover:text-white transition-colors duration-300">Création d'expériences client mémorables dans le Retail.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* --- SECTION VISION (Light Mode / Contraste Éditorial) --- */}
      <section className="bg-[#FAFAFA] py-32 px-6 border-y border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Bloc Texte */}
          <div className="order-2 lg:order-1 space-y-10">
            <div>
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-mabe-gold font-sans font-black text-3xl">02</span>
                <span className="text-gray-400 text-[10px] uppercase tracking-[0.3em] font-semibold">L'Objectif Global</span>
              </div>
              <h2 className="text-[#050505] font-sans font-black text-4xl md:text-5xl uppercase tracking-tighter mb-6">
                Notre <span className="text-gray-400 font-light">Vision</span>
              </h2>
              <div className="h-[1px] w-24 bg-mabe-gold" />
            </div>
            
            <p className="text-gray-600 font-sans text-lg md:text-xl leading-relaxed font-light">
              Devenir le leader africain multisectoriel de référence d'ici <strong className="font-bold text-[#050505]">2030</strong>, en incarnant un modèle de réussite durable, éthique et tourné vers l'excellence opérationnelle globale.
            </p>
            
            <div className="grid grid-cols-2 gap-10 pt-6 border-t border-gray-200">
              <div>
                <h5 className="text-[#050505] font-sans uppercase text-[10px] tracking-[0.2em] font-bold mb-3 flex items-center gap-2">
                  <span className="w-2 h-[1px] bg-mabe-gold" />
                  Expansion
                </h5>
                <p className="text-gray-500 font-sans text-xs font-light leading-relaxed">
                  Un rayonnement d'excellence sur l'ensemble du continent africain.
                </p>
              </div>
              <div>
                <h5 className="text-[#050505] font-sans uppercase text-[10px] tracking-[0.2em] font-bold mb-3 flex items-center gap-2">
                  <span className="w-2 h-[1px] bg-mabe-gold" />
                  Éthique
                </h5>
                <p className="text-gray-500 font-sans text-xs font-light leading-relaxed">
                  Une croissance responsable, rigoureuse et totalement transparente.
                </p>
              </div>
            </div>
          </div>
          
          {/* Bloc Image Style Éditorial */}
          <div className="order-1 lg:order-2 relative h-[500px] md:h-[600px] p-4 md:p-6 bg-white shadow-xl">
             <div 
              className="absolute inset-4 md:inset-6 bg-cover bg-center" 
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1449156003053-c3d8c5f2ad2a?q=80&w=2070')" }}
            />
          </div>
        </div>
      </section>

      {/* --- BANNIÈRE FINALE --- */}
      <section className="py-32 px-6 text-center max-w-4xl mx-auto relative z-10">
        <div className="p-12 md:p-20 bg-white/[0.02] border border-white/5 rounded-sm relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-t from-mabe-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <h3 className="text-white font-sans font-black text-3xl md:text-5xl uppercase tracking-tighter mb-8 leading-[1.1] relative z-10">
            Bâtir l'avenir de <br /> 
            <span className="text-mabe-gold font-light">l'économie africaine</span>
          </h3>
          
          <div className="flex items-center justify-center gap-4 relative z-10">
            <div className="w-8 h-[1px] bg-white/20" />
            <p className="text-white/40 font-sans font-semibold tracking-[0.3em] uppercase text-[10px]">
              Excellencia Mabe Group — Horizon 2030
            </p>
            <div className="w-8 h-[1px] bg-white/20" />
          </div>
        </div>
      </section>

    </div>
  );
};

export default VisionMission;