import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const APropos = () => {
  // Remonter en haut de la page au chargement
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#050505] min-h-screen pt-32 pb-24 relative overflow-hidden">
      
      {/* Lumières d'ambiance globales */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-mabe-gold/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      {/* --- HEADER SECTION --- */}
      <section className="relative px-6 md:px-12 max-w-7xl mx-auto mb-32 z-10">
        <div className="flex flex-col items-start relative pl-6 md:pl-10">
          {/* Ligne décorative verticale Premium */}
          <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-gradient-to-b from-mabe-gold to-transparent" />
          
          <h4 className="text-mabe-gold uppercase tracking-[0.4em] text-[10px] mb-6 font-sans font-semibold">
            Notre Histoire
          </h4>
          <h1 className="text-white font-sans font-black text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-[0.9] mb-8">
            L'Incarnation de <br />
            <span className="text-white/40 font-light">l'Excellence</span>
          </h1>
          <p className="text-white/50 max-w-2xl text-sm md:text-base leading-relaxed font-sans font-light tracking-wide">
            Depuis notre création, le Groupe MABE (Excellencia SARL) s'est imposé comme un acteur incontournable dans la transformation stratégique, industrielle et commerciale. Nous ne nous contentons pas de suivre les standards, nous les redéfinissons.
          </p>
        </div>
      </section>

      {/* --- IMAGE / VISION SECTION (Parallax) --- */}
      <section className="relative w-full h-[60vh] md:h-[70vh] mb-32 border-y border-white/5">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069')" }}
        />
        {/* Overlay assombri pour le côté luxe */}
        <div className="absolute inset-0 bg-[#050505]/80" />
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl text-white font-sans font-black uppercase tracking-tighter mb-8 drop-shadow-lg">
            Notre Philosophie
          </h2>
          <div className="w-16 h-[1px] bg-mabe-gold mb-10" />
          <p className="text-white/80 font-sans md:text-xl leading-loose font-light italic drop-shadow-md">
            "Allier la rigueur analytique à la créativité stratégique pour bâtir des écosystèmes pérennes, rentables et à fort impact pour nos partenaires d'affaires."
          </p>
        </div>
      </section>

      {/* --- VALEURS GRID --- */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-32 relative z-10">
        
        <div className="flex flex-col items-center text-center mb-20">
          <h4 className="text-mabe-gold text-[10px] font-sans font-semibold uppercase tracking-[0.4em] mb-4">
            L'ADN Mabe
          </h4>
          <h3 className="text-white text-4xl md:text-5xl font-sans font-black uppercase tracking-tighter leading-none">
            Nos Piliers <br/>
            <span className="text-white/40 font-light">Fondamentaux</span>
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Carte 1 */}
          <div className="group relative p-10 md:p-12 bg-white/[0.02] border border-white/5 backdrop-blur-sm rounded-sm transition-all duration-700 hover:-translate-y-2 hover:bg-white/[0.04] hover:border-mabe-gold/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col">
            {/* Chiffre filigrane géant */}
            <div className="absolute -top-6 -right-4 text-8xl font-sans font-black text-white/5 group-hover:text-mabe-gold/10 transition-colors duration-700 pointer-events-none select-none">
              01
            </div>
            <h4 className="relative z-10 text-white font-sans text-lg uppercase tracking-[0.2em] font-bold mb-6 group-hover:text-mabe-gold transition-colors duration-300">
              Intégrité
            </h4>
            <div className="w-8 h-[1px] bg-white/20 mb-6 group-hover:bg-mabe-gold transition-colors duration-300" />
            <p className="relative z-10 text-white/50 text-sm leading-relaxed font-sans font-light">
              La transparence et l'éthique sont au cœur de chacune de nos transactions. Nous bâtissons des relations basées sur une confiance absolue et durable.
            </p>
          </div>
          
          {/* Carte 2 */}
          <div className="group relative p-10 md:p-12 bg-white/[0.02] border border-white/5 backdrop-blur-sm rounded-sm transition-all duration-700 hover:-translate-y-2 hover:bg-white/[0.04] hover:border-mabe-gold/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col">
            <div className="absolute -top-6 -right-4 text-8xl font-sans font-black text-white/5 group-hover:text-mabe-gold/10 transition-colors duration-700 pointer-events-none select-none">
              02
            </div>
            <h4 className="relative z-10 text-white font-sans text-lg uppercase tracking-[0.2em] font-bold mb-6 group-hover:text-mabe-gold transition-colors duration-300">
              Innovation
            </h4>
            <div className="w-8 h-[1px] bg-white/20 mb-6 group-hover:bg-mabe-gold transition-colors duration-300" />
            <p className="relative z-10 text-white/50 text-sm leading-relaxed font-sans font-light">
              Nous anticipons les tendances du marché pour offrir à nos clients des solutions avant-gardistes en matière de marketing, d'industrie et de commerce.
            </p>
          </div>

          {/* Carte 3 */}
          <div className="group relative p-10 md:p-12 bg-white/[0.02] border border-white/5 backdrop-blur-sm rounded-sm transition-all duration-700 hover:-translate-y-2 hover:bg-white/[0.04] hover:border-mabe-gold/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col">
            <div className="absolute -top-6 -right-4 text-8xl font-sans font-black text-white/5 group-hover:text-mabe-gold/10 transition-colors duration-700 pointer-events-none select-none">
              03
            </div>
            <h4 className="relative z-10 text-white font-sans text-lg uppercase tracking-[0.2em] font-bold mb-6 group-hover:text-mabe-gold transition-colors duration-300">
              Performance
            </h4>
            <div className="w-8 h-[1px] bg-white/20 mb-6 group-hover:bg-mabe-gold transition-colors duration-300" />
            <p className="relative z-10 text-white/50 text-sm leading-relaxed font-sans font-light">
              L'excellence opérationnelle n'est pas une option. Nous sommes orientés vers les résultats et mesurons notre succès à travers la croissance de nos partenaires.
            </p>
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="p-12 md:p-20 bg-white/[0.02] border border-white/5 rounded-sm relative overflow-hidden group">
          {/* Lueur de fond au survol */}
          <div className="absolute inset-0 bg-gradient-to-t from-mabe-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <h3 className="text-white font-sans font-black text-3xl md:text-4xl uppercase tracking-tighter mb-6 relative z-10">
            Prêt à collaborer ?
          </h3>
          <p className="text-white/50 mb-10 font-sans font-light max-w-xl mx-auto relative z-10">
            Découvrez comment le Groupe MABE peut propulser votre structure vers de nouveaux sommets stratégiques et commerciaux.
          </p>
          <Link 
            to="/#contact" 
            className="relative z-10 inline-flex items-center justify-center gap-4 bg-mabe-gold text-mabe-dark px-10 py-4 uppercase tracking-[0.2em] text-[10px] font-sans font-bold hover:bg-white transition-colors duration-300"
          >
            Nous Contacter
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default APropos;