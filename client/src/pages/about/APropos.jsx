import React, { useEffect } from 'react';
import ContactForm from '../../components/ui/ContactForm';

export default function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-[#FCFAF6] min-h-screen pt-20 md:pt-40 pb-16 md:pb-32 relative overflow-hidden text-[#1A1A1A] antialiased">
      
      <div className="absolute top-0 left-1/2 w-[800px] h-[500px] bg-[#C9A227]/3 blur-[160px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none mix-blend-multiply" />

      {/* --- SECTION HEADER --- */}
      <section className="max-w-7xl mx-auto px-6 mb-16 md:mb-36 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="w-[1px] h-10 md:h-20 bg-gradient-to-b from-transparent to-[#C9A227] mb-6 md:mb-10" />
          <span className="text-[#C9A227] uppercase tracking-[0.2em] md:tracking-[0.5em] text-[8px] md:text-[10px] mb-3 md:mb-6 font-bold block">
            Hub de Communication
          </span>
          <h1 className="text-[#1A1A1A] font-sans font-black text-3xl sm:text-4xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-[0.85] mb-5 md:mb-10">
            Entrer en <br />
            <span className="text-gray-300 font-light font-serif italic lowercase">c</span>ontact
          </h1>
          <p className="text-[#525252] max-w-xl mx-auto text-xs md:text-base leading-relaxed font-light tracking-wide px-2">
            Vous avez une vision, nous avons l'expertise. Nos consultants sont prêts à transformer vos défis en opportunités.
          </p>
        </div>
      </section>

      {/* --- SECTION INFOS & FORMULAIRE --- */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 lg:gap-24 items-start mb-16 md:mb-40 relative z-10">
        
        {/* COLONNE GAUCHE */}
        <div className="lg:col-span-4 space-y-10 md:space-y-16 order-2 lg:order-1">
          
          <div className="space-y-3 md:space-y-6">
            <h3 className="text-[#1A1A1A] font-bold text-base md:text-xl uppercase tracking-widest relative inline-block">
              Nos Bureaux
              <span className="absolute -bottom-1 md:-bottom-3 left-0 w-8 h-[1px] bg-[#C9A227]" />
            </h3>
            <div className="space-y-4 pt-1">
              <div className="border-l border-[#1A1A1A]/10 pl-4">
                <h4 className="text-[#C9A227] uppercase tracking-[0.2em] text-[7px] md:text-[9px] font-bold mb-1">Siège Social — RCA</h4>
                <p className="text-gray-500 text-[11px] md:text-sm leading-relaxed font-light">
                  Bangui, Avenue des Grands Bureaux
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3 md:space-y-6">
            <h3 className="text-[#1A1A1A] font-bold text-base md:text-xl uppercase tracking-widest relative inline-block">
              Contact Direct
              <span className="absolute -bottom-1 md:-bottom-3 left-0 w-8 h-[1px] bg-[#C9A227]" />
            </h3>
            <div className="space-y-4 pt-1">
              <div className="flex flex-col border-l border-[#1A1A1A]/10 pl-4">
                <span className="text-[#C9A227] text-[7px] uppercase tracking-[0.3em] font-bold mb-1">Email</span>
                <a href="mailto:excellenciamabe@gmail.com" className="text-gray-500 hover:text-[#C9A227] transition-colors text-xs md:text-lg font-light break-all">
                  excellenciamabe@gmail.com
                </a>
              </div>
              <div className="flex flex-col border-l border-[#1A1A1A]/10 pl-4">
                <span className="text-[#C9A227] text-[7px] uppercase tracking-[0.3em] font-bold mb-1">Téléphone</span>
                <a href="tel:+23674386738" className="text-gray-500 hover:text-[#C9A227] transition-colors text-xs md:text-lg font-light">
                  +236 74 38 67 38
                </a>
              </div>
            </div>
          </div>

          <div className="flex gap-4 md:gap-6 pt-2 border-t border-[#1A1A1A]/5">
            {['LinkedIn', 'Twitter', 'Insta'].map((social) => (
              <a key={social} href="#" className="text-[7px] md:text-[9px] uppercase tracking-[0.2em] font-bold text-gray-400 hover:text-[#C9A227]">
                {social}
              </a>
            ))}
          </div>
        </div>

        {/* COLONNE DROITE */}
        <div className="lg:col-span-8 order-1 lg:order-2">
          <div className="bg-white border border-[#1A1A1A]/5 p-5 md:p-12 lg:p-20 shadow-sm relative overflow-hidden rounded-sm">
            <h2 className="text-[#1A1A1A] font-sans font-black text-xl md:text-4xl uppercase tracking-tighter mb-1">Envoyez un message</h2>
            <p className="text-[#C9A227] text-[7px] md:text-[9px] font-bold uppercase tracking-[0.3em] mb-8">
              Délai de réponse : 24h
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* --- SECTION FINALE --- */}
      <section className="w-full px-6 max-w-7xl mx-auto h-[250px] md:h-[450px] relative overflow-hidden border border-[#1A1A1A]/5 rounded-sm">
        <div className="absolute inset-0 bg-[#FCFAF6]/20 z-10" />
        <div 
          className="w-full h-full bg-cover bg-center grayscale brightness-95"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2033')" }}
        />
      </section>
    </div>
  );
}