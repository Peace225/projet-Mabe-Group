import React, { useEffect } from 'react';

const Immobilier = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-[#fcfaf6] min-h-screen pt-32 pb-20 text-[#1a1a1a]">
      
      {/* --- HEADER --- */}
      <section className="max-w-7xl mx-auto px-6 text-center mb-32">
        <span className="text-[#C9A227] text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">
          Pôle Immobilier
        </span>
        <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-10 leading-none">
          Maison <br/><span className="text-gray-300 font-light italic">Excellencia</span>
        </h1>
        <div className="w-24 h-[1px] bg-[#C9A227] mx-auto mb-10" />
        <p className="max-w-2xl mx-auto text-[#525252] font-light leading-relaxed">
          Le trait d'union entre l'investissement stratégique et le prestige immobilier en République centrafricaine.
        </p>
      </section>

      {/* --- MISSION & VISION --- */}
      <section className="max-w-5xl mx-auto px-6 mb-32 grid md:grid-cols-2 gap-16">
        <div>
          <h3 className="text-xl font-bold uppercase tracking-widest mb-6">Ambition</h3>
          <p className="text-[#525252] text-sm leading-relaxed">
            Maison Excellencia ambitionne de moderniser et valoriser l’image du secteur immobilier en Centrafrique. 
            À travers une communication moderne et une approche orientée image, nous mettons en lumière 
            le potentiel du pays pour attirer les investisseurs les plus exigeants.
          </p>
        </div>
        <div className="border-l border-[#e0e0e0] pl-8">
          <h3 className="text-xl font-bold uppercase tracking-widest mb-6">Expertise</h3>
          <ul className="text-[#525252] text-sm space-y-3 font-light">
            <li>• Accompagnement d’investisseurs (particuliers & pros)</li>
            <li>• Promotion immobilière digitale</li>
            <li>• Mise en valeur de biens premium & de prestige</li>
            <li>• Stratégie de communication immobilière</li>
            <li>• Mise en relation & valorisation sectorielle</li>
          </ul>
        </div>
      </section>

      {/* --- VISUEL D'IMPACT --- */}
      <section className="max-w-[90rem] mx-auto px-6 mb-40">
        <div className="relative aspect-[21/9] bg-gray-200 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80" 
            alt="Immobilier Premium" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <h2 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter text-center px-4">
              Construire l’excellence, <br/> créer l’impact.
            </h2>
          </div>
        </div>
      </section>

      {/* --- CTA INVESTISSEMENT --- */}
      <section className="bg-[#1a1a1a] text-[#fcfaf6] py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-8">
            Investir en <span className="text-[#C9A227]">RCA</span>
          </h2>
          <p className="text-white/60 mb-12 leading-relaxed max-w-lg mx-auto">
            Vous souhaitez vous installer ou développer votre portefeuille immobilier ? 
            Maison Excellencia vous accompagne dans chaque étape avec rigueur et vision.
          </p>
          <a href="#contact" className="inline-block border border-[#C9A227] px-12 py-4 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[#C9A227] hover:text-[#1a1a1a] transition-all">
            Nous Contacter
          </a>
        </div>
      </section>
    </div>
  );
};

export default Immobilier;