import React from 'react';
import Button from '../../components/ui/Button';

const CEOFeatured = () => {
  return (
    <section id="leadership" className="py-16 md:py-24 bg-mabe-dark px-6 border-b border-mabe-gold/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          
          {/* Bloc Image */}
          <div className="md:col-span-5 group relative overflow-hidden">
            <div className="absolute inset-0 bg-mabe-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 md:w-32 md:h-32 border-l-2 border-b-2 border-mabe-gold/30 z-0" />
            
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000"
              alt="Excellencia Mabekondiasson - CEO MABE Group" 
              className="w-full h-[400px] md:h-[600px] object-cover grayscale group-hover:grayscale-0 transition-all duration-[1500ms] relative z-10 shadow-2xl"
            />
          </div>

          {/* Bloc Texte */}
          <div className="md:col-span-7 space-y-6 md:space-y-10 md:pl-8">
            
            <header>
              <h4 className="text-mabe-gold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-3 md:mb-4 font-bold">Le Mot de la Fondatrice</h4>
              <h2 className="text-white font-display text-4xl md:text-6xl uppercase tracking-tighter leading-none mb-2">
                Excellencia <br/> Mabekondiasson
              </h2>
              <p className="text-mabe-gold font-body text-xs md:text-sm uppercase tracking-[0.3em] md:tracking-[0.4em] italic">
                Fondatrice & Chief Executive Officer
              </p>
            </header>

            {/* La Citation Puissante */}
            <div className="relative pl-8 md:pl-12">
              <span className="absolute left-0 top-0 text-mabe-gold text-5xl md:text-7xl font-display leading-none opacity-40">“</span>
              <p className="text-white font-body text-xl md:text-2xl font-light leading-snug italic pt-2 md:pt-4">
                L'excellence n'est pas un acte, c'est une habitude. Chez MABE Group, nous transformons cette conviction en levier opérationnel pour dessiner l'avenir de l'économie africaine.
              </p>
            </div>

            {/* Le Résumé de Vision */}
            <div className="text-mabe-silver font-light leading-relaxed text-sm md:text-lg max-w-2xl space-y-3">
              <p>
                Visionnaire émérite et architecte de la croissance du groupe, Excellencia Mabekondiasson incarne un leadership audacieux fondé sur l'éthique et l'innovation transversale.
              </p>
              <p>
                Sous son impulsion, MABE Group déploie une stratégie d'impact où le marketing digital de prestige, l'excellence agro-industrielle (NGIA) et la transformation technique (RUPAC) convergent vers un objectif unique : la création de valeur durable pour nos nations.
              </p>
            </div>

            {/* Action */}
            <div className="pt-2 md:pt-6">
              <Button variant="outline">Découvrir son parcours</Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOFeatured;