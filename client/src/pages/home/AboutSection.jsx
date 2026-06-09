import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-36 bg-white px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        
        {/* L'Histoire */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mb-20 md:mb-32">
          <div>
            {/* Petit surtitre : très espacé (tracking-[0.4em]) et régulier */}
            <h4 className="text-mabe-gold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-5 font-sans font-medium">
              Notre Héritage
            </h4>
            
            {/* Titre principal : Fin (font-light), sans empattement, élégant */}
            <h2 className="text-mabe-dark font-sans font-light text-3xl md:text-5xl uppercase tracking-wider leading-tight mb-6">
              Une quête perpétuelle <br/> de l'excellence
            </h2>

            {/* Le Slug / Sous-titre ajouté ici */}
            <p className="text-lg md:text-xl font-serif italic text-gray-400 mb-6 md:mb-8 leading-relaxed">
              "L'alliance de l'audace stratégique et de la rigueur opérationnelle."
            </p>
          </div>
          
          {/* Paragraphes : Aérés (leading-loose) et légers (font-light) */}
          <div className="text-gray-500 font-sans font-light leading-loose space-y-6 text-sm md:text-base">
            <p>
              Fondé sur une vision audacieuse, <strong className="font-medium text-mabe-dark">EXCELLENCIA MABE SARL</strong> a émergé comme un acteur clé de la transformation économique, alliant tradition et innovation technologique.
            </p>
            <p>
              Notre histoire est celle d'une ambition : créer un écosystème où le conseil stratégique rencontre l'expertise industrielle et le commerce de prestige.
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-4">
          
          <div className="bg-mabe-dark p-12 md:p-20 text-white flex flex-col justify-center shadow-sm">
            {/* Numéros : Très fins et grands */}
            <span className="text-mabe-gold font-sans font-extralight text-4xl md:text-5xl block mb-8 tracking-tighter">
              01.
            </span>
            <h3 className="text-lg md:text-xl uppercase tracking-[0.3em] mb-6 font-sans font-light text-gray-100">
              Notre Mission
            </h3>
            <p className="text-gray-400 font-sans font-light leading-loose text-xs md:text-sm">
              Propulser nos partenaires vers de nouveaux sommets via des solutions de marketing digital d'influence, 
              optimiser les processus industriels et redéfinir le commerce de détail haut de gamme.
            </p>
          </div>

          <div className="bg-[#FAFAFA] p-12 md:p-20 text-mabe-dark border border-gray-100 flex flex-col justify-center">
            <span className="text-mabe-gold font-sans font-extralight text-4xl md:text-5xl block mb-8 tracking-tighter">
              02.
            </span>
            <h3 className="text-lg md:text-xl uppercase tracking-[0.3em] mb-6 font-sans font-light">
              Notre Vision
            </h3>
            <p className="text-gray-500 font-sans font-light leading-loose text-xs md:text-sm">
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