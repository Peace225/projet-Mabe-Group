import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Marketing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#050505] min-h-screen pt-32 pb-24 relative overflow-hidden">
      
      {/* Background Glows Subtils */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-mabe-gold/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      {/* --- HEADER / HERO SECTION --- */}
      <section className="relative px-6 md:px-12 max-w-[90rem] mx-auto mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-end">
          <div className="flex flex-col items-start relative pl-6 md:pl-10">
            {/* Ligne verticale de signature */}
            <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-gradient-to-b from-mabe-gold to-transparent" />
            
            <h4 className="text-mabe-gold uppercase tracking-[0.4em] text-[10px] mb-6 font-sans font-semibold">
              Pôle d'Expertise
            </h4>
            <h1 className="text-white font-sans font-black text-6xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-[0.9] mb-4">
              Marketing <br />
              <span className="text-white/40 font-light italic">Digital</span>
            </h1>
          </div>
          
          <div className="flex flex-col lg:pb-4 space-y-10">
            <p className="text-white/50 text-base md:text-xl leading-relaxed font-sans font-light tracking-wide max-w-xl">
              Cabinet de conseil et stratégie. Nous orchestrons l'influence et sublimons les talents pour propulser votre image de marque vers les sommets de l'élégance numérique.
            </p>
            
            {/* DOUBLE CTA LUXE */}
            <div className="flex flex-col sm:flex-row gap-5">
              <Link 
                to="/#contact" 
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-mabe-gold text-mabe-dark font-sans font-black uppercase text-[10px] tracking-[0.2em] overflow-hidden transition-all duration-300"
              >
                <span className="relative z-10">Lancer une campagne</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </Link>
              
              <Link 
                to="/partenaire" 
                className="group inline-flex items-center justify-center px-10 py-5 border border-white/10 text-white font-sans font-bold uppercase text-[10px] tracking-[0.2em] hover:border-mabe-gold hover:text-mabe-gold transition-all duration-500"
              >
                Rejoindre le réseau
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- IMAGE IMMERSIVE (PARALLAX EFFECT) --- */}
      <section className="w-full h-[60vh] md:h-[70vh] mb-32 relative border-y border-white/5 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed brightness-50 contrast-125 grayscale hover:grayscale-0 transition-all duration-[2.5s] ease-out scale-105"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-transparent to-[#050505]/60" />
      </section>

      {/* --- LES AXES D'EXPERTISE --- */}
      <section className="max-w-[90rem] mx-auto px-6 mb-40">
        <div className="flex flex-col items-start mb-24">
          <h4 className="text-mabe-gold text-[10px] font-sans font-semibold uppercase tracking-[0.4em] mb-4">
            Ingénierie Créative
          </h4>
          <h3 className="text-white text-4xl md:text-5xl lg:text-6xl font-sans font-black uppercase tracking-tighter leading-none">
            Nos Domaines <br/>
            <span className="text-white/40 font-light">d'Intervention</span>
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          
          {/* AXE 1 : Conseil & Stratégie */}
          <div className="group relative pt-12 border-t border-white/10 hover:border-mabe-gold transition-colors duration-700">
            <span className="absolute top-8 right-0 text-6xl font-sans font-black text-white/[0.03] group-hover:text-mabe-gold/10 transition-colors duration-700">01</span>
            <h4 className="text-white font-sans font-bold text-xl uppercase tracking-widest mb-6 group-hover:text-mabe-gold transition-colors">
              Conseil & Stratégie
            </h4>
            <div className="w-8 h-[1px] bg-mabe-gold mb-6 group-hover:w-16 transition-all duration-500" />
            <p className="text-white/40 leading-relaxed text-sm font-sans font-light">
              Audit de positionnement et définition de KPIs haute performance. Nous élaborons des feuilles de route stratégiques pour dominer votre écosystème numérique.
            </p>
          </div>
          
          {/* AXE 2 : Gestion de Talents */}
          <div className="group relative pt-12 border-t border-white/10 hover:border-mabe-gold transition-colors duration-700">
            <span className="absolute top-8 right-0 text-6xl font-sans font-black text-white/[0.03] group-hover:text-mabe-gold/10 transition-colors duration-700">02</span>
            <h4 className="text-white font-sans font-bold text-xl uppercase tracking-widest mb-6 group-hover:text-mabe-gold transition-colors">
              Gestion de Talents
            </h4>
            <div className="w-8 h-[1px] bg-mabe-gold mb-6 group-hover:w-16 transition-all duration-500" />
            <p className="text-white/40 leading-relaxed text-sm font-sans font-light">
              Management d'influenceurs premium. Nous orchestrons des campagnes d'influence authentiques pour convertir la notoriété en impact transactionnel.
            </p>
          </div>

          {/* AXE 3 : Identité Visuelle & Branding */}
          <div className="group relative pt-12 border-t border-white/10 hover:border-mabe-gold transition-colors duration-700">
            <span className="absolute top-8 right-0 text-6xl font-sans font-black text-white/[0.03] group-hover:text-mabe-gold/10 transition-colors duration-700">03</span>
            <h4 className="text-white font-sans font-bold text-xl uppercase tracking-widest mb-6 group-hover:text-mabe-gold transition-colors">
              Branding & Identité
            </h4>
            <div className="w-8 h-[1px] bg-mabe-gold mb-6 group-hover:w-16 transition-all duration-500" />
            <p className="text-white/40 leading-relaxed text-sm font-sans font-light">
              Conception d'assets marketing "Haute Couture". Une sélection typographique et graphique exigeante pour une présence visuelle d'exception.
            </p>
          </div>

        </div>
      </section>

      {/* --- SECTION CTA FINALE (AMÉLIORÉE) --- */}
      <section className="max-w-[90rem] mx-auto px-6">
        <div className="relative p-12 md:p-24 bg-white/[0.02] border border-white/5 rounded-sm text-center overflow-hidden group">
          {/* Lueur de fond au survol */}
          <div className="absolute inset-0 bg-gradient-to-t from-mabe-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative z-10">
            <h2 className="text-white font-sans font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter mb-8 leading-[0.9]">
              Prêt à redéfinir <br/> <span className="text-mabe-gold font-light">votre image ?</span>
            </h2>
            <p className="text-white/50 mb-12 font-sans font-light max-w-2xl mx-auto italic text-base md:text-lg leading-relaxed">
              Confiez-nous l'architecture de votre stratégie et le déploiement de vos campagnes d'influence. Ensemble, bâtissons l'incontournable.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link 
                to="/#contact" 
                className="inline-flex items-center justify-center px-12 py-5 bg-mabe-gold text-mabe-dark font-sans font-black uppercase text-[10px] tracking-[0.3em] hover:bg-white transition-all duration-300 shadow-2xl"
              >
                Démarrer un projet
              </Link>
              <Link 
                to="/partenaire" 
                className="inline-flex items-center justify-center px-12 py-5 border border-white/10 text-white font-sans font-bold uppercase text-[10px] tracking-[0.3em] hover:border-mabe-gold hover:text-mabe-gold transition-all duration-500"
              >
                Devenir Partenaire
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Marketing;