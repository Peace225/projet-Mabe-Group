import React, { useEffect } from 'react';

const Commerce = () => {
  // Remonter en haut de la page au chargement
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAFAFA] min-h-screen pt-32 pb-0 relative overflow-hidden">
      
      {/* --- HEADER SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 text-center mb-32 relative z-10">
        <h4 className="text-mabe-gold uppercase tracking-[0.4em] text-[10px] mb-6 font-sans font-semibold">
          Pôle Commerce & Retail
        </h4>
        <h1 className="text-[#050505] font-sans font-black text-6xl md:text-8xl lg:text-9xl uppercase mb-6 tracking-tighter leading-[0.8]">
          Boutiques <br />
          <span className="text-gray-300 font-light italic">de Luxe</span>
        </h1>
        <p className="text-[#050505]/40 uppercase tracking-[0.4em] text-[10px] md:text-xs mb-12 font-sans font-bold">
          — Curated Collections —
        </p>
        <div className="w-16 h-[1px] bg-mabe-gold mx-auto" />
      </section>

      {/* --- BOUTIQUES / COLLECTIONS GRID --- */}
      <section className="max-w-[95rem] mx-auto px-6 mb-40 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
          
          {/* MARQUE 1 : NGIA Collection */}
          <div className="group cursor-pointer">
            <div className="relative aspect-[4/5] bg-gray-200 mb-10 overflow-hidden rounded-sm shadow-sm">
              <div className="absolute inset-0 bg-[#050505]/10 group-hover:bg-transparent transition-colors duration-1000 z-10" />
              <img 
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80" 
                alt="NGIA Collection" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transform scale-105 group-hover:scale-110 transition-all duration-[2000ms] ease-out"
              />
              {/* Badge discret au hover */}
              <div className="absolute bottom-8 right-8 z-20 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                <span className="bg-white px-6 py-3 text-[9px] font-sans font-black uppercase tracking-widest text-[#050505]">
                  Découvrir
                </span>
              </div>
            </div>
            <div className="text-left pl-2">
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-3xl lg:text-4xl font-sans font-black uppercase tracking-tighter text-[#050505]">
                  NGIA Collection
                </h3>
                <div className="h-[1px] flex-grow bg-gray-100" />
              </div>
              <p className="text-gray-500 font-sans font-light text-sm md:text-base max-w-md leading-relaxed">
                Une ligne de prêt-à-porter et d'accessoires fusionnant l'élégance contemporaine aux inspirations culturelles fortes. L'expression ultime du raffinement Mabe.
              </p>
            </div>
          </div>

          {/* MARQUE 2 : Intimisma (Décalage asymétrique pour le style) */}
          <div className="group cursor-pointer mt-0 md:mt-32">
            <div className="relative aspect-[4/5] bg-gray-200 mb-10 overflow-hidden rounded-sm shadow-sm">
              <div className="absolute inset-0 bg-[#050505]/10 group-hover:bg-transparent transition-colors duration-1000 z-10" />
              <img 
                src="https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80" 
                alt="Intimisma" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transform scale-105 group-hover:scale-110 transition-all duration-[2000ms] ease-out"
              />
              <div className="absolute bottom-8 right-8 z-20 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                <span className="bg-white px-6 py-3 text-[9px] font-sans font-black uppercase tracking-widest text-[#050505]">
                  Découvrir
                </span>
              </div>
            </div>
            <div className="text-left pl-2">
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-3xl lg:text-4xl font-sans font-black uppercase tracking-tighter text-[#050505]">
                  Intimisma
                </h3>
                <div className="h-[1px] flex-grow bg-gray-100" />
              </div>
              <p className="text-gray-500 font-sans font-light text-sm md:text-base max-w-md leading-relaxed">
                Des pièces conçues pour sublimer la silhouette avec des matières nobles et un confort absolu. L'intimité redéfinie par le luxe et la discrétion.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* --- SECTION MARKETPLACE E-COMMERCE (Le switch vers le noir profond) --- */}
      <section className="bg-[#050505] text-white py-40 px-6 text-center relative overflow-hidden">
        
        {/* Décoration de fond immersive */}
        <div 
          className="absolute inset-0 opacity-20 grayscale pointer-events-none"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }} 
        />
        
        {/* Glow central */}
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[400px] bg-mabe-gold/10 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent to-mabe-gold mx-auto mb-10" />
          
          <h4 className="text-mabe-gold uppercase tracking-[0.5em] text-[10px] mb-8 font-sans font-bold">
            Expérience Digitale
          </h4>
          <h2 className="font-sans font-black text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter mb-10 leading-[0.9]">
            Accédez à notre <br /> <span className="text-white/40 font-light italic">Marketplace</span>
          </h2>
          <p className="text-white/50 mb-16 font-sans font-light text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
            Découvrez l'intégralité de nos collections exclusives et profitez d'une expérience d'achat sécurisée directement sur notre plateforme e-commerce dédiée.
          </p>
          
          {/* LE BOUTON VERS LA MARKETPLACE */}
          <a 
            href="LIEN_DE_TA_MARKETPLACE_ICI" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-6 px-14 py-6 bg-mabe-gold text-mabe-dark font-sans font-black uppercase text-[10px] md:text-xs tracking-[0.4em] overflow-hidden transition-all duration-500 shadow-2xl"
          >
            <span className="relative z-10">Visiter la Boutique</span>
            <svg className="w-5 h-5 relative z-10 transform group-hover:translate-x-2 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </a>
        </div>
      </section>

    </div>
  );
};

export default Commerce;