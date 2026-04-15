import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        
        {/* L'Histoire */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h4 className="text-mabe-gold uppercase tracking-[0.3em] text-xs mb-4 font-bold">Notre Héritage</h4>
            <h2 className="text-mabe-dark font-display text-5xl md:text-6xl uppercase tracking-tighter leading-none mb-8">
              Une quête perpétuelle <br/> de l'excellence
            </h2>
          </div>
          <div className="text-gray-600 font-light leading-relaxed space-y-4 text-lg">
            <p>
              Fondé sur une vision audacieuse, **Excellencia Mabe Group** a émergé comme un acteur clé de la transformation économique, alliant tradition et innovation technologique.
            </p>
            <p>
              Notre histoire est celle d'une ambition : créer un écosystème où le conseil stratégique rencontre l'expertise industrielle et le commerce de prestige.
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          <div className="bg-mabe-dark p-12 text-white">
            <span className="text-mabe-gold font-display text-4xl block mb-6">01.</span>
            <h3 className="text-2xl uppercase tracking-widest mb-6 font-display">Notre Mission</h3>
            <p className="text-mabe-silver font-light leading-relaxed text-sm">
              Propulser nos partenaires vers de nouveaux sommets via des solutions de marketing digital d'influence, 
              optimiser les processus industriels et redéfinir le commerce de détail haut de gamme.
            </p>
          </div>

          <div className="bg-[#f9f9f9] p-12 text-mabe-dark border border-gray-100">
            <span className="text-mabe-gold font-display text-4xl block mb-6">02.</span>
            <h3 className="text-2xl uppercase tracking-widest mb-6 font-display">Notre Vision</h3>
            <p className="text-gray-500 font-light leading-relaxed text-sm">
              Devenir le leader africain multisectoriel de référence d'ici 2030, en incarnant un modèle de réussite durable, 
              éthique et tourné vers l'excellence opérationnelle globale.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;