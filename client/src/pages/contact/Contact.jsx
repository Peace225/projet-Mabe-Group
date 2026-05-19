import React, { useEffect } from 'react';
import ContactForm from '../../components/ui/ContactForm';

export default function Contact() {
  // Remonter en haut de la page au chargement
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-[#FCFAF6] min-h-screen pt-40 pb-32 relative overflow-hidden text-[#1A1A1A] antialiased">
      
      {/* Halo d'ambiance organique discret */}
      <div className="absolute top-0 left-1/2 w-[800px] h-[500px] bg-[#C9A227]/3 blur-[160px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none mix-blend-multiply" />

      {/* --- SECTION HEADER (STYLE ÉDITORIAL HAUT DE GAMME) --- */}
      <section className="max-w-7xl mx-auto px-6 mb-36 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="w-[1px] h-20 bg-gradient-to-b from-transparent to-[#C9A227] mb-10" />
          <span className="text-[#C9A227] uppercase tracking-[0.5em] text-[10px] mb-6 font-bold block">
            Hub de Communication
          </span>
          <h1 className="text-[#1A1A1A] font-sans font-black text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-[0.85] mb-10">
            Entrer en <br />
            <span className="text-gray-300 font-light font-serif italic lowercase">c</span>ontact
          </h1>
          <p className="text-[#525252] max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light tracking-wide">
            Vous avez une vision, nous avons l'expertise. Que vous soyez à Bangui ou à l'international, 
            nos consultants sont prêts à transformer vos défis en opportunités de croissance.
          </p>
        </div>
      </section>

      {/* --- SECTION INFOS & FORMULAIRE --- */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start mb-40 relative z-10">
        
        {/* COLONNE GAUCHE : Coordonnées Officielles Mabe */}
        <div className="lg:col-span-4 space-y-16 order-2 lg:order-1 lg:sticky lg:top-32">
          
          {/* Sièges Sociaux */}
          <div className="space-y-6">
            <h3 className="text-[#1A1A1A] font-bold text-xl uppercase tracking-widest relative inline-block">
              Nos Bureaux
              <span className="absolute -bottom-3 left-0 w-8 h-[1px] bg-[#C9A227]" />
            </h3>
            
            <div className="space-y-8 pt-4">
              <div className="group border-l border-[#1A1A1A]/5 pl-4 hover:border-[#C9A227]/50 transition-colors duration-500">
                <h4 className="text-[#C9A227] uppercase tracking-[0.3em] text-[9px] font-bold mb-2">
                  Siège Social — République Centrafricaine
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed font-light group-hover:text-[#1A1A1A] transition-colors duration-500">
                  Bangui, RCA <br />
                  Avenue des Grands Bureaux
                </p>
              </div>
            </div>
          </div>

          {/* Contact Direct */}
          <div className="space-y-6">
            <h3 className="text-[#1A1A1A] font-bold text-xl uppercase tracking-widest relative inline-block">
              Contact Direct
              <span className="absolute -bottom-3 left-0 w-8 h-[1px] bg-[#C9A227]" />
            </h3>
            <div className="space-y-6 pt-4">
              <div className="flex flex-col group border-l border-[#1A1A1A]/5 pl-4 hover:border-[#C9A227]/50 transition-colors duration-500">
                <span className="text-[#C9A227] text-[8px] uppercase tracking-[0.4em] font-bold mb-1">Email</span>
                <a href="mailto:excellenciamabe@gmail.com" className="text-gray-400 hover:text-[#C9A227] transition-colors text-lg font-light tracking-wide break-all">
                  excellenciamabe@gmail.com
                </a>
              </div>
              <div className="flex flex-col group border-l border-[#1A1A1A]/5 pl-4 hover:border-[#C9A227]/50 transition-colors duration-500">
                <span className="text-[#C9A227] text-[8px] uppercase tracking-[0.4em] font-bold mb-1">Téléphone</span>
                <a href="tel:+23674386738" className="text-gray-400 hover:text-[#C9A227] transition-colors text-lg font-light tracking-wide">
                  +236 74 38 67 38
                </a>
              </div>
            </div>
          </div>

          {/* Informations Juridiques & Réglementaires */}
          <div className="space-y-4 pt-2">
            <h3 className="text-[#1A1A1A] font-bold text-xs uppercase tracking-widest relative inline-block">
              Mentions Légales
              <span className="absolute -bottom-2 left-0 w-6 h-[1px] bg-[#C9A227]/50" />
            </h3>
            <div className="pt-2 text-[11px] text-gray-400/80 font-mono space-y-1.5 border-l border-[#1A1A1A]/5 pl-4">
              <p><span className="text-[#C9A227]/70 font-sans font-bold text-[9px] uppercase tracking-wider block mb-0.5">RCCM</span>RCBG2025B2905</p>
              <p><span className="text-[#C9A227]/70 font-sans font-bold text-[9px] uppercase tracking-wider block mt-2 mb-0.5">NIU</span>2362025M38832R</p>
            </div>
          </div>

          {/* Réseaux Sociaux Premium */}
          <div className="flex gap-8 pt-8 border-t border-[#1A1A1A]/5">
            {['LinkedIn', 'Twitter', 'Instagram'].map((social) => (
              <a 
                key={social}
                href="#" 
                className="text-[9px] uppercase tracking-[0.3em] font-bold text-gray-400 hover:text-[#C9A227] transition-all duration-300 hover:-translate-y-0.5"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        {/* COLONNE DROITE : Monolithe Blanc Minimaliste */}
        <div className="lg:col-span-8 order-1 lg:order-2">
          <div className="bg-white border border-[#1A1A1A]/5 p-10 md:p-16 lg:p-20 shadow-[0_25px_60px_rgba(0,0,0,0.015)] relative overflow-hidden group rounded-sm">
            
            {/* Diffusion de lumière interne au survol */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#C9A227]/2 blur-[100px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 mix-blend-multiply" />
            
            <div className="relative z-10">
              <h2 className="text-[#1A1A1A] font-sans font-black text-3xl md:text-4xl uppercase tracking-tighter mb-3">
                Envoyez un message
              </h2>
              <p className="text-[#C9A227] text-[9px] font-bold uppercase tracking-[0.4em] mb-16">
                Délai de réponse moyen : 24h
              </p>
              
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION FINALE : CROWNING IMMERSION --- */}
      <section className="w-full px-6 max-w-7xl mx-auto h-[450px] mb-12 relative group overflow-hidden border border-[#1A1A1A]/5 rounded-sm">
        <div className="absolute inset-0 bg-[#FCFAF6]/40 z-10 transition-colors duration-1000 group-hover:bg-[#FCFAF6]/10" />
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat grayscale contrast-[1.05] brightness-95 transition-transform duration-[4s] ease-out group-hover:scale-105"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2033')" }}
        />
        {/* Filigrane Institutionnel XXL */}
        <div className="absolute bottom-8 right-8 z-20 text-[#1A1A1A] font-black text-6xl md:text-9xl uppercase tracking-tighter opacity-[0.02] select-none pointer-events-none">
          Mabe
        </div>
      </section>

    </div>
  );
}