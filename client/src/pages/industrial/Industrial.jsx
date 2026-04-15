import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Industrial = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#050505] min-h-screen pt-32 pb-24 relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-mabe-gold/5 blur-[150px] rounded-full -translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      {/* --- HEADER / HERO SECTION --- */}
      <section className="relative px-6 md:px-12 max-w-[90rem] mx-auto mb-32 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-end">
          
          {/* Colonne Gauche : Titres */}
          <div className="flex flex-col items-start relative pl-6 md:pl-10">
            <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-gradient-to-b from-mabe-gold to-transparent" />
            
            <h4 className="text-mabe-gold uppercase tracking-[0.4em] text-[10px] mb-6 font-sans font-semibold">
              Pôle d'Expertise
            </h4>
            <h1 className="text-white font-sans font-black text-6xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-[0.9] mb-4">
              Transformation <br />
              <span className="text-white/40 font-light">Industrielle</span>
            </h1>
          </div>
          
          {/* Colonne Droite : Paragraphe (Descendu avec lg:pt-12) */}
          <div className="flex flex-col lg:pb-4 lg:pt-12 space-y-10">
            <p className="text-white/50 text-base md:text-xl leading-relaxed font-sans font-light tracking-wide max-w-xl">
              L'ingénierie de pointe au service du développement souverain. Nous concevons et déployons des écosystèmes de production où la performance technologique rencontre l'excellence opérationnelle.
            </p>
            
            {/* DOUBLE CTA LUXE */}
            <div className="flex flex-col sm:flex-row gap-5">
              <Link 
                to="/#contact" 
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-mabe-gold text-mabe-dark font-sans font-black uppercase text-[10px] tracking-[0.2em] overflow-hidden transition-all duration-300"
              >
                <span className="relative z-10">Consulter nos experts</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </Link>
              
              <Link 
                to="/partenaire" 
                className="group inline-flex items-center justify-center px-10 py-5 border border-white/10 text-white font-sans font-bold uppercase text-[10px] tracking-[0.2em] hover:border-mabe-gold hover:text-mabe-gold transition-all duration-500"
              >
                Devenir Fournisseur
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* --- RESTE DU COMPOSANT (IDENTIQUE) --- */}
      <section className="w-full h-[60vh] md:h-[70vh] mb-32 relative border-y border-white/5 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed brightness-50 contrast-125 grayscale hover:grayscale-0 transition-all duration-[2.5s] ease-out scale-105"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-transparent to-[#050505]/60" />
      </section>

      <section className="max-w-[90rem] mx-auto px-6 mb-40 relative z-10">
        <div className="flex flex-col items-start mb-24">
          <h4 className="text-mabe-gold text-[10px] font-sans font-semibold uppercase tracking-[0.4em] mb-4">
            Puissance Opérationnelle
          </h4>
          <h3 className="text-white text-4xl md:text-5xl lg:text-6xl font-sans font-black uppercase tracking-tighter leading-none">
            Nos Entités <br/>
            <span className="text-white/40 font-light">de Production</span>
          </h3>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="group relative p-12 md:p-16 bg-white/[0.02] border border-white/5 backdrop-blur-sm rounded-sm overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:bg-white/[0.04] hover:border-mabe-gold/30 hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
            <div className="absolute -top-10 -right-4 text-[12rem] font-sans font-black text-white/[0.02] group-hover:text-mabe-gold/5 transition-colors duration-700 pointer-events-none select-none">
              01
            </div>
            <div className="relative z-10">
              <h2 className="text-white text-4xl md:text-5xl font-sans font-black mb-6 tracking-tighter uppercase leading-none">
                RUPAC
              </h2>
              <div className="h-[1px] w-16 bg-mabe-gold mb-10 group-hover:w-32 transition-all duration-500 ease-out" />
              <p className="text-white/50 text-base md:text-xl leading-relaxed font-sans font-light mb-12">
                L'avant-garde de la transformation industrielle. Nous intégrons des technologies disruptives pour moderniser les infrastructures et garantir une efficacité énergétique et productive de classe mondiale.
              </p>
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 text-mabe-gold text-[9px] font-sans font-bold uppercase tracking-[0.3em] rounded-full group-hover:bg-mabe-gold group-hover:text-mabe-dark transition-colors duration-500">
                <span className="w-1.5 h-1.5 rounded-full bg-mabe-gold group-hover:bg-mabe-dark animate-pulse" />
                Ingénierie Industrielle
              </div>
            </div>
          </div>

          <div className="group relative p-12 md:p-16 bg-white/[0.02] border border-white/5 backdrop-blur-sm rounded-sm overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:bg-white/[0.04] hover:border-mabe-gold/30 hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
            <div className="absolute -top-10 -right-4 text-[12rem] font-sans font-black text-white/[0.02] group-hover:text-mabe-gold/5 transition-colors duration-700 pointer-events-none select-none">
              02
            </div>
            <div className="relative z-10">
              <h2 className="text-white text-4xl md:text-5xl font-sans font-black mb-6 tracking-tighter uppercase leading-none">
                NGIA FOOD
              </h2>
              <div className="h-[1px] w-16 bg-mabe-gold mb-10 group-hover:w-32 transition-all duration-500 ease-out" />
              <p className="text-white/50 text-base md:text-xl leading-relaxed font-sans font-light mb-12">
                La valorisation souveraine des ressources agro-alimentaires. À travers des standards de traçabilité et de sécurité alimentaire inflexibles, nous bâtissons l'indépendance nutritionnelle de demain.
              </p>
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 text-mabe-gold text-[9px] font-sans font-bold uppercase tracking-[0.3em] rounded-full group-hover:bg-mabe-gold group-hover:text-mabe-dark transition-colors duration-500">
                <span className="w-1.5 h-1.5 rounded-full bg-mabe-gold group-hover:bg-mabe-dark animate-pulse" />
                Agro-Industrie Premium
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[90rem] mx-auto px-6 relative z-10">
        <div className="relative p-12 md:p-24 bg-white/[0.02] border border-white/5 rounded-sm text-center overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-t from-mabe-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative z-10">
            <h2 className="text-white font-sans font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter mb-8 leading-[0.9]">
              L'Industrie de demain <br/> <span className="text-mabe-gold font-light italic">s'écrit ici.</span>
            </h2>
            <p className="text-white/50 mb-12 font-sans font-light max-w-2xl mx-auto italic text-base md:text-lg leading-relaxed">
              Propulsez vos capacités de production ou rejoignez notre réseau de distribution stratégique. L'excellence n'attend pas.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/#contact" className="inline-flex items-center justify-center px-12 py-5 bg-mabe-gold text-mabe-dark font-sans font-black uppercase text-[10px] tracking-[0.3em] hover:bg-white transition-all duration-300 shadow-2xl">
                Évaluer votre projet
              </Link>
              <Link to="/partenaire" className="inline-flex items-center justify-center px-12 py-5 border border-white/10 text-white font-sans font-bold uppercase text-[10px] tracking-[0.3em] hover:border-mabe-gold hover:text-mabe-gold transition-all duration-500">
                Opportunités d'Affaires
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Industrial;