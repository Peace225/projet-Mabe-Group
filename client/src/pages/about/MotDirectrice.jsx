import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// Importation de l'image locale
import photoDirecteur from '../../assets/directeur.jpg'; 

const MotDirecteur = () => {
  // Remonter en haut de la page au chargement
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#050505] min-h-screen pt-32 pb-24 relative overflow-hidden">
      
      {/* Lumière d'ambiance en arrière-plan */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-mabe-gold/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      {/* --- SECTION HEADER & PORTRAIT --- */}
      <section className="max-w-7xl mx-auto px-6 mb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        
        <div className="order-2 lg:order-1 space-y-10">
          <div className="relative pl-6">
            {/* Ligne décorative verticale */}
            <div className="absolute left-0 top-1 bottom-1 w-[2px] bg-gradient-to-b from-mabe-gold to-transparent" />
            <h4 className="text-mabe-gold uppercase tracking-[0.4em] text-[10px] mb-4 font-sans font-semibold">
              Gouvernance & Vision
            </h4>
            <h1 className="text-white font-sans font-black text-5xl md:text-7xl uppercase tracking-tighter leading-[0.9] mb-8">
              Le Mot du <br /> <span className="text-white/40 font-light italic">CEO</span>
            </h1>
          </div>
          
          <div className="space-y-8">
            <p className="text-white/90 text-2xl md:text-3xl leading-snug font-sans font-light italic tracking-tight border-l border-white/10 pl-8">
              "Notre ambition n'est pas simplement de suivre les évolutions du marché, mais d'en être les principaux architectes. L'excellence n'est pas un acte, c'est une habitude."
            </p>
            
            <div className="flex flex-col pl-8">
              <span className="text-mabe-gold uppercase tracking-[0.3em] text-xs font-black mb-1">Mlle. Excellencia</span>
              <span className="text-white/40 text-[9px] uppercase tracking-[0.2em] font-sans">Directrice Générale, Excellencia Mabe Group</span>
            </div>
          </div>
        </div>
        
        {/* IMAGE PORTRAIT LOCALE - STYLE HAUTE COUTURE */}
        <div className="order-1 lg:order-2 relative group w-full max-w-md mx-auto lg:ml-auto">
          {/* Double cadre décoratif */}
          <div className="absolute -inset-6 border border-mabe-gold/10 translate-x-3 translate-y-3 transition-transform duration-700 group-hover:translate-x-0 group-hover:translate-y-0" />
          <div className="absolute -inset-3 border border-mabe-gold/20 -translate-x-3 -translate-y-3 transition-transform duration-700 group-hover:translate-x-0 group-hover:translate-y-0" />
          
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-[0_30px_60px_rgba(0,0,0,0.8)] z-10">
            <img 
              src={photoDirecteur} 
              alt="CEO MABE" 
              className="w-full h-full object-cover grayscale brightness-90 contrast-110 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-[1.5s] ease-out"
            />
            {/* Overlay subtil */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 to-transparent opacity-60" />
          </div>
        </div>
      </section>

      {/* --- SECTION DISCOURS / LETTRE - STYLE ÉDITORIAL --- */}
      <section className="bg-[#FAFAFA] py-32 px-6 relative border-y border-white/5">
        <div className="max-w-3xl mx-auto">
          
          {/* Filigrane discret */}
          <div className="absolute top-10 left-10 text-[15rem] font-sans font-black text-black/[0.02] pointer-events-none select-none">
            Mabe
          </div>

          <div className="relative z-10 space-y-10 text-gray-700 font-sans font-light leading-relaxed text-base md:text-xl text-justify">
            
            <p className="font-bold text-[#050505] text-2xl tracking-tight mb-12">
              Chers partenaires, chers clients,
            </p>
            
            <p>
              Lorsque nous avons fondé <strong className="font-bold text-[#050505]">Excellencia Mabe Group</strong>, nous avions une conviction profonde : le potentiel de l'Afrique est immense, mais il nécessite une structuration rigoureuse, une vision stratégique à long terme et une exécution irréprochable.
            </p>
            
            <p>
              Aujourd'hui, alors que les défis économiques mondiaux se multiplient, notre mission prend tout son sens. Que ce soit à travers notre pôle <span className="text-mabe-gold font-semibold uppercase text-xs tracking-widest px-1">Marketing Digital</span>, notre expertise <span className="text-mabe-gold font-semibold uppercase text-xs tracking-widest px-1">Industrielle</span> ou notre réseau <span className="text-mabe-gold font-semibold uppercase text-xs tracking-widest px-1">Commercial</span>, notre objectif reste invariant : créer de la valeur tangible et pérenne pour nos partenaires d'affaires.
            </p>

            <blockquote className="my-20 py-12 border-y border-gray-200 text-center relative">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FAFAFA] px-4">
                  <svg className="w-8 h-8 text-mabe-gold/20" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
               </div>
              <p className="text-[#050505] font-sans font-black text-3xl md:text-4xl uppercase tracking-tighter leading-tight">
                "L'innovation est notre moteur, <br className="hidden md:block"/> l'intégrité notre boussole."
              </p>
            </blockquote>
            
            <p>
              Nous vivons une époque de transformation accélérée. Les entreprises qui prospéreront demain sont celles qui sauront allier agilité opérationnelle et solidité structurelle. C'est exactement l'équilibre que nous apportons. Nous ne sommes pas de simples prestataires ; nous sommes des partenaires de croissance.
            </p>

            <p>
              Je tiens à remercier nos équipes, dont le dévouement fait de MABE une référence, ainsi que nos clients pour leur confiance. Ensemble, continuons à bâtir l'avenir.
            </p>

            <div className="pt-20 flex flex-col items-end">
              <span className="font-sans text-3xl text-[#050505] font-black italic tracking-tighter uppercase">Excellencia</span>
              <div className="h-[2px] w-16 bg-mabe-gold mt-2 mb-2" />
              <span className="text-gray-400 text-[10px] uppercase tracking-[0.4em] font-bold">Directrice Générale</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION CONTACT CTA --- */}
      <section className="py-32 px-6 text-center max-w-4xl mx-auto relative z-10">
        <div className="p-12 md:p-20 bg-white/[0.02] border border-white/5 rounded-sm overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-t from-mabe-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <h3 className="text-white font-sans font-black text-3xl md:text-5xl uppercase tracking-tighter mb-8 leading-none">
            Collaborons pour <br/> <span className="text-mabe-gold font-light">l'Excellence</span>
          </h3>
          <p className="text-white/40 mb-12 font-sans font-light max-w-xl mx-auto italic text-sm md:text-base leading-relaxed">
            Rejoignez le cercle des entreprises qui ont choisi la performance durable avec MABE Group.
          </p>
          <Link 
            to="/#contact" 
            className="inline-flex items-center gap-4 bg-mabe-gold text-mabe-dark px-12 py-5 uppercase tracking-[0.2em] text-[10px] font-sans font-black hover:bg-white transition-all duration-300"
          >
            Initier un projet
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MotDirecteur;