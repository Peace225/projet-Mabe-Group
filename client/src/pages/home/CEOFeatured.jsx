import React from 'react';
import Button from '../../components/ui/Button';

const CEOFeatured = () => {
  return (
    <section id="leadership" className="py-24 bg-mabe-dark px-6 border-b border-mabe-gold/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          
          {/* Bloc Image (Prend 5 colonnes sur 12) */}
          <div className="md:col-span-5 group relative overflow-hidden">
            {/* Overlay doré discret au survol */}
            <div className="absolute inset-0 bg-mabe-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
            
            {/* Cadre décoratif doré */}
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border-l-2 border-b-2 border-mabe-gold/30 z-0" />
            
            {/* L'image de la CEO (Portrait Corporate Premium) */}
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000" // Image temporaire de qualité
              alt="Excellencia Mabekondiasson - CEO MABE Group" 
              className="w-full h-[600px] object-cover grayscale group-hover:grayscale-0 transition-all duration-[1500ms] relative z-10 shadow-2xl"
            />
          </div>

          {/* Bloc Texte (Prend 7 colonnes sur 12) */}
          <div className="md:col-span-7 space-y-10 pl-8">
            
            <header>
              <h4 className="text-mabe-gold uppercase tracking-[0.3em] text-xs mb-4 font-bold">Le Mot de la Fondatrice</h4>
              <h2 className="text-white font-display text-5xl md:text-6xl uppercase tracking-tighter leading-none mb-2">
                Excellencia <br/> Mabekondiasson
              </h2>
              <p className="text-mabe-gold font-body text-sm uppercase tracking-[0.4em] italic">
                Fondatrice & Chief Executive Officer
              </p>
            </header>

            {/* La Citation Puissante */}
            <div className="relative pl-12">
              <span className="absolute left-0 top-0 text-mabe-gold text-7xl font-display leading-none opacity-40">“</span>
              <p className="text-white font-body text-2xl font-light leading-snug italic pt-4">
                L'excellence n'est pas un acte, c'est une habitude. Chez MABE Group, nous transformons cette conviction en levier opérationnel pour dessiner l'avenir de l'économie africaine.
              </p>
            </div>

            {/* Le Résumé de Vision */}
            <div className="text-mabe-silver font-light leading-relaxed text-lg max-w-2xl space-y-3">
              <p>
                Visionnaire émérite et architecte de la croissance du groupe, Excellencia Mabekondiasson incarne un leadership audacieux fondé sur l'éthique et l'innovation transversale.
              </p>
              <p>
                Sous son impulsion, MABE Group déploie une stratégie d'impact où le marketing digital de prestige, l'excellence agro-industrielle (NGIA) et la transformation technique (RUPAC) convergent vers un objectif unique : la création de valeur durable pour nos nations.
              </p>
            </div>

            {/* Action dispo */}
            <div className="pt-6">
              <Button variant="outline">Découvrir son parcours</Button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CEOFeatured;