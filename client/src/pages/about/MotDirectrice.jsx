import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const MotDirecteur = () => {
  // Remonter en haut de la page au chargement
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-[#FCFAF6] min-h-screen pt-44 pb-32 relative overflow-hidden text-[#1A1A1A] antialiased">
      
      {/* Styles d'animations fluides en CSS natif */}
      <style>{`
        @keyframes subtleFadeReveal {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-reveal {
          animation: subtleFadeReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* Lumière d'ambiance en arrière-plan adaptée au fond clair */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C9A227]/5 blur-[160px] rounded-full -translate-y-1/4 translate-x-1/4 pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-[#C9A227]/4 blur-[140px] rounded-full pointer-events-none mix-blend-multiply" />

      {/* --- SECTION HEADER & PORTRAIT --- */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-40 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10 animate-fade-reveal">
        
        {/* Descriptif et Citation liminaire */}
        <div className="order-2 lg:order-1 space-y-10">
          <div className="relative pl-6">
            {/* Ligne décorative verticale haut de gamme */}
            <div className="absolute left-0 top-1 bottom-1 w-[2px] bg-gradient-to-b from-[#C9A227] to-transparent" />
            <span className="text-[#C9A227] uppercase tracking-[0.5em] text-[10px] mb-4 font-bold block">
              Gouvernance & Vision
            </span>
            <h1 className="text-[#1A1A1A] font-black text-5xl md:text-7xl uppercase tracking-tighter leading-[0.95] mb-8">
              Le Mot du <br /> <span className="text-gray-300 font-light italic font-serif lowercase">ceo</span>
            </h1>
          </div>
          
          <div className="space-y-8">
            <p className="text-[#525252] text-2xl md:text-3xl leading-relaxed font-serif italic font-light tracking-tight border-l-2 border-[#C9A227]/30 pl-8 bg-white/40 py-4 pr-4 rounded-r-sm shadow-sm">
              "Notre ambition n'est pas simplement de suivre les évolutions du marché, mais d'en être les principaux architectes. L'excellence n'est pas un acte, c'est une habitude."
            </p>
            
            <div className="flex flex-col pl-8">
              <span className="text-[#C9A227] uppercase tracking-[0.3em] text-xs font-bold mb-1">Mlle. Excellencia</span>
              <span className="text-gray-400 text-[9px] uppercase tracking-[0.2em] font-medium">Directrice Générale, Excellencia Mabe Group</span>
            </div>
          </div>
        </div>
        
        {/* IMAGE PORTRAIT - SOURCE DOSSIER PUBLIC */}
        <div className="order-1 lg:order-2 relative group w-full max-w-md mx-auto lg:ml-auto transform transition-transform duration-1000 hover:-translate-y-1">
          {/* Double cadre décoratif épuré */}
          <div className="absolute -inset-6 border border-[#1A1A1A]/5 translate-x-4 translate-y-4 transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2 rounded-sm" />
          <div className="absolute -inset-3 border border-[#C9A227]/20 -translate-x-4 -translate-y-4 transition-transform duration-700 group-hover:translate-x-0 group-hover:translate-y-0 rounded-sm" />
          
          {/* Conteneur d'image avec ajustement strict du positionnement pour éviter les têtes coupées */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-gray-100 shadow-[0_25px_60px_rgba(0,0,0,0.04)] border border-white z-10">
            <img 
              src="/images/hero.jpeg" 
              alt="Mlle. Excellencia - CEO MABE" 
              className="w-full h-full object-cover object-top filter grayscale hover:grayscale-0 contrast-[1.05] brightness-95 group-hover:brightness-100 group-hover:scale-102 transition-all duration-[2s] cubic-bezier(0.16, 1, 0.3, 1)"
            />
            {/* Dégradé subtil de finition */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/20 via-transparent to-transparent opacity-60 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* --- SECTION DISCOURS / LETTRE - STYLE ÉDITORIAL --- */}
      <section className="bg-white py-36 px-6 relative border-y border-[#1A1A1A]/5 shadow-[0_10px_40px_rgba(0,0,0,0.01)]">
        <div className="max-w-3xl mx-auto relative">
          
          {/* Filigrane discret d'arrière-plan */}
          <div className="absolute -top-16 -left-16 text-[12rem] md:text-[16rem] font-black text-[#1A1A1A]/[0.01] pointer-events-none select-none tracking-tighter">
            Mabe
          </div>

          <div className="relative z-10 space-y-10 text-[#525252] font-light leading-relaxed text-base md:text-lg tracking-wide text-justify">
            
            <p className="font-bold text-[#1A1A1A] text-2xl tracking-tight mb-12 font-serif italic">
              Chers partenaires, chers clients,
            </p>
            
            <p>
              Lorsque nous avons fondé <strong className="font-semibold text-[#1A1A1A]">Excellencia Mabe Group</strong>, nous avions une conviction profonde : le potentiel de l'Afrique est immense, mais il nécessite une structuration rigoureuse, une vision stratégique à long terme et une exécution irréprochable.
            </p>
            
            <p>
              Aujourd'hui, alors que les défis économiques mondiaux se multiplient, notre mission prend tout son sens. Que ce soit à travers notre pôle <span className="text-[#C9A227] font-semibold uppercase text-xs tracking-widest px-1">Marketing Digital</span>, notre expertise <span className="text-[#C9A227] font-semibold uppercase text-xs tracking-widest px-1">Industrielle</span> ou notre réseau <span className="text-[#C9A227] font-semibold uppercase text-xs tracking-widest px-1">Commercial</span>, notre objectif reste invariant : créer de la valeur tangible et pérenne pour nos partenaires d'affaires.
            </p>

            <blockquote className="my-20 py-12 border-y border-[#1A1A1A]/10 text-center relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4">
                <svg className="w-8 h-8 text-[#C9A227]/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-[#1A1A1A] font-black text-2xl md:text-4xl uppercase tracking-tighter leading-tight">
                "L'innovation est notre moteur, <br className="hidden md:block"/> l'intégrité notre boussole."
              </p>
            </blockquote>
            
            <p>
              Nous vivons une époque de transformation accélérée. Les entreprises qui prospéreront demain sont celles qui sauront allier agilité opérationnelle et solidité structurelle. C'est exactement l'équilibre que nous apportons. Nous ne sommes pas de simples prestataires ; nous sommes des partenaires de croissance.
            </p>

            <p>
              Je tiens à remercier nos équipes, dont le dévouement fait de MABE une référence, ainsi que nos clients pour leur confiance. Ensemble, continuons à bâtir l'avenir.
            </p>

            <div className="pt-16 flex flex-col items-end">
              <span className="text-3xl text-[#1A1A1A] font-black italic tracking-tighter uppercase font-serif">Excellencia</span>
              <div className="h-[2px] w-12 bg-[#C9A227] mt-2 mb-2" />
              <span className="text-gray-400 text-[10px] uppercase tracking-[0.4em] font-bold">Directrice Générale</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION CONTACT CTA --- */}
      <section className="py-24 px-6 text-center max-w-5xl mx-auto relative z-10">
        <div className="p-12 md:p-24 bg-white border border-[#1A1A1A]/5 shadow-[0_20px_50px_rgba(0,0,0,0.02)] rounded-sm relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#C9A227]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
          
          <h3 className="text-[#1A1A1A] font-black text-3xl md:text-5xl uppercase tracking-tighter mb-6 leading-none">
            Collaborons pour <br/> <span className="text-[#C9A227] font-light font-serif italic lowercase">l'</span>Excellence
          </h3>
          <p className="text-[#525252]/80 mb-12 font-light max-w-xl mx-auto text-sm md:text-base leading-relaxed tracking-wide">
            Rejoignez le cercle des entreprises qui ont choisi la performance durable avec MABE Group.
          </p>
          
          <Link 
            to="/#contact" 
            className="inline-flex items-center gap-4 bg-[#1A1A1A] text-white px-10 py-4 uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-[#C9A227] hover:text-white transition-all duration-500 shadow-md hover:shadow-xl rounded-sm"
          >
            Initier un projet
            <svg className="w-3 h-3 transition-transform duration-500 transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MotDirecteur;