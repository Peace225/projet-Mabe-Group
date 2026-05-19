import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const APropos = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const pillars = [
    {
      num: "01",
      title: "Intégrité",
      desc: "La transparence et l'éthique gouvernent chacune de nos actions. Nous bâtissons des relations fondées sur une confiance absolue et durable."
    },
    {
      num: "02",
      title: "Innovation",
      desc: "Nous devançons les dynamiques de marché pour insuffler à nos partenaires des visions avant-gardistes et pérennes."
    },
    {
      num: "03",
      title: "Performance",
      desc: "L'excellence opérationnelle guide nos méthodologies. Nous mesurons notre succès au travers de votre expansion."
    }
  ];

  return (
    <div className="bg-[#FCFAF6] min-h-screen pt-40 pb-32 text-[#1A1A1A] overflow-hidden selection:bg-[#C9A227] selection:text-white antialiased">
      
      {/* Styles d'animations injectés localement pour garantir les effets sans dépendance externe */}
      <style>{`
        @keyframes subtleFadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slowScale {
          from { transform: scale(1.02); opacity: 0.15; }
          to { transform: scale(1); opacity: 0.25; }
        }
        .animate-fade-up {
          animation: subtleFadeUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* Lueur immersive d'arrière-plan adaptée pour fond clair */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C9A227]/5 blur-[150px] rounded-full pointer-events-none translate-x-1/4 -translate-y-1/4 mix-blend-multiply" />

      {/* --- HERO HEADER & PRÉSENTATION --- */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-12 mb-40 z-10 animate-fade-up">
        <div className="max-w-4xl">
          <span className="text-[#C9A227] uppercase tracking-[0.5em] text-[10px] font-bold block mb-8 opacity-90">
            Présentation du Groupe
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.95] mb-12 text-[#1A1A1A]">
            L'incarnation de <br />
            <span className="text-gray-300 font-light italic font-serif lowercase">l'</span>excellence
          </h1>
          <div className="w-16 h-[2px] bg-[#C9A227] mb-12 transition-all duration-700 hover:w-24" />
          
          {/* Bloc de texte principal */}
          <div className="space-y-6 text-[#525252] text-sm md:text-base lg:text-lg leading-relaxed font-light tracking-wide">
            <p className="transition-colors duration-300 hover:text-[#1A1A1A]">
              <strong className="text-[#1A1A1A] font-semibold">EXCELLENCIA MABE</strong> est un groupe entrepreneurial basé en République centrafricaine, fondé par <span className="text-[#C9A227] font-medium">Excellencia Mabekondiasson</span>, avec une vision ambitieuse : développer des entreprises modernes, innovantes et à fort impact dans différents secteurs d’activité.
            </p>
            <p className="transition-colors duration-300 hover:text-[#1A1A1A]">
              Le groupe a été pensé comme un écosystème structuré réunissant plusieurs pôles complémentaires autour d’une même philosophie : l’excellence, l’élégance, la créativité et le développement durable.
            </p>
            <p className="text-[#525252]/70 text-xs md:text-sm border-l-2 border-[#C9A227] pl-5 mt-10 italic bg-white/40 py-3 pr-4 rounded-r-sm shadow-sm">
              À travers ses différentes activités, EXCELLENCIA MABE ambitionne de participer activement à la modernisation des secteurs du digital, de la mode, de la communication et de l’industrie en Afrique centrale.
            </p>
          </div>
        </div>
      </section>

      {/* --- VISION STATEMENT SECTION --- */}
      <section className="relative w-full h-[55vh] md:h-[65vh] mb-40 flex items-center justify-center bg-[#1A1A1A] overflow-hidden group shadow-inner">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale scale-105 group-hover:scale-100 transition-transform duration-[2s] cubic-bezier(0.16, 1, 0.3, 1)"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069')",
            animation: "slowScale 2s ease-out forwards"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/80 to-[#1A1A1A]" />
        
        <div className="relative z-10 max-w-3xl mx-auto text-center px-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-1000">
          <span className="text-[#C9A227] text-[9px] uppercase tracking-[0.6em] font-bold block mb-6">Philosophie</span>
          <p className="text-xl md:text-3xl font-light leading-relaxed text-white/90 font-serif italic drop-shadow-sm">
            « Allier la rigueur analytique à la haute créativité pour façonner des écosystèmes d'affaires pérennes et à fort impact continental. »
          </p>
        </div>
      </section>

      {/* --- BRAND DNA (PILLARS) --- */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-40 relative z-10">
        <div className="text-center mb-24">
          <span className="text-[#C9A227] text-[10px] uppercase tracking-[0.5em] font-bold block mb-4">L'ADN Mabe</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-[#1A1A1A]">
            Piliers <span className="text-gray-300 font-light font-serif italic lowercase">fondamentaux</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className="group relative p-8 md:p-10 bg-white border border-[#1A1A1A]/5 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_60px_rgba(201,162,39,0.08)] hover:border-[#C9A227]/40 transition-all duration-700 ease-out flex flex-col justify-between min-h-[320px] rounded-sm transform hover:-translate-y-2"
            >
              {/* Effet d'apparition du chiffre filigrane */}
              <div className="absolute top-6 right-8 text-6xl font-black text-[#1A1A1A]/[0.03] group-hover:text-[#C9A227]/15 group-hover:scale-110 transition-all duration-700 select-none font-sans">
                {pillar.num}
              </div>
              
              <div className="relative z-10">
                <h3 className="text-[#1A1A1A] font-bold text-lg uppercase tracking-widest mb-4 group-hover:text-[#C9A227] transition-colors duration-500">
                  {pillar.title}
                </h3>
                <div className="w-8 h-[2px] bg-[#1A1A1A]/10 mb-6 group-hover:bg-[#C9A227] group-hover:w-16 transition-all duration-500" />
                <p className="text-[#525252] text-xs md:text-sm leading-relaxed font-light group-hover:text-[#1A1A1A] transition-colors duration-500">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- PREMIUM CALL TO ACTION --- */}
      <section className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="border border-[#1A1A1A]/5 bg-white px-8 py-16 md:py-24 text-center relative overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.03)] rounded-sm">
          <div className="absolute -bottom-1/2 left-1/2 w-[400px] h-[200px] bg-[#C9A227]/5 blur-[80px] rounded-full -translate-x-1/2 pointer-events-none group-hover:bg-[#C9A227]/10 transition-colors duration-1000" />
          
          <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-4 text-[#1A1A1A]">
            Bâtissons l'avenir ensemble
          </h3>
          <p className="text-[#525252] text-xs md:text-sm max-w-lg mx-auto mb-10 font-light leading-relaxed">
            Découvrez comment l'écosystème du Groupe MABE peut catalyser votre vision pour la transformer en réussite d'ingénierie stratégique.
          </p>
          
          <Link 
            to="/#contact" 
            className="inline-flex items-center gap-4 bg-[#1A1A1A] text-white px-10 py-4 uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-[#C9A227] hover:text-white transition-all duration-500 shadow-md hover:shadow-xl rounded-sm group-hover:scale-102"
          >
            Initier la synergie
            <svg className="w-3 h-3 transition-transform duration-500 transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default APropos;