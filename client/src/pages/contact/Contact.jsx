import React, { useEffect } from 'react';
import ContactForm from '../../components/ui/ContactForm';

const Contact = () => {
  // Remonter en haut de la page au chargement
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#050505] min-h-screen pt-32 pb-24 relative overflow-hidden">
      
      {/* Background Glows (Ambiance Signature Mabe) */}
      <div className="absolute top-0 left-1/2 w-[800px] h-[400px] bg-mabe-gold/5 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      {/* --- SECTION HEADER --- */}
      <section className="max-w-7xl mx-auto px-6 mb-32 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent to-mabe-gold mb-8" />
          <h4 className="text-mabe-gold uppercase tracking-[0.4em] text-[10px] mb-6 font-sans font-semibold">
            Hub de Communication
          </h4>
          <h1 className="text-white font-sans font-black text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-none mb-10">
            Entrer en <span className="text-white/40 font-light italic">Contact</span>
          </h1>
          <p className="text-white/50 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed font-sans font-light tracking-wide">
            Vous avez une vision, nous avons l'expertise. Que vous soyez à Abidjan ou à l'international, 
            nos consultants sont prêts à transformer vos défis en opportunités de croissance.
          </p>
        </div>
      </section>

      {/* --- SECTION INFOS & FORMULAIRE --- */}
      <section className="max-w-[90rem] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start mb-32 relative z-10">
        
        {/* COLONNE GAUCHE : Coordonnées (Style Éditorial) */}
        <div className="lg:col-span-4 space-y-16 order-2 lg:order-1">
          
          {/* Sièges Sociaux */}
          <div className="space-y-10">
            <h3 className="text-white font-sans font-bold text-2xl uppercase tracking-widest relative inline-block">
              Nos Bureaux
              <span className="absolute -bottom-4 left-0 w-12 h-[1px] bg-mabe-gold" />
            </h3>
            
            <div className="space-y-12 pt-4">
              <div className="group">
                <h4 className="text-mabe-gold uppercase tracking-[0.3em] text-[10px] font-sans font-black mb-4 group-hover:text-white transition-colors">Bangui, République Centrafricaine</h4>
                <p className="text-white/40 text-sm md:text-base leading-relaxed font-sans font-light">
                  Siège Social — Bangui, <br />
                  Avenue des Grands Bureaux, <br />
                
                </p>
              </div>

              <div className="group">
                <h4 className="text-mabe-gold uppercase tracking-[0.3em] text-[10px] font-sans font-black mb-4 group-hover:text-white transition-colors">Bangui, République Centrafricaine</h4>
                <p className="text-white/40 text-sm md:text-base leading-relaxed font-sans font-light">
                  Direction Régionale — Quartier Commerce, <br />
                  Bangui - RCA
                </p>
              </div>
            </div>
          </div>

          {/* Contact Direct */}
          <div className="space-y-10 pt-4">
            <h3 className="text-white font-sans font-bold text-2xl uppercase tracking-widest relative inline-block">
              Contact Direct
              <span className="absolute -bottom-4 left-0 w-12 h-[1px] bg-mabe-gold" />
            </h3>
            <div className="space-y-6 pt-4">
              <div className="flex flex-col group">
                <span className="text-mabe-gold text-[9px] uppercase tracking-[0.4em] font-black mb-1">Email</span>
                <a href="mailto:contact@mabegroup.com" className="text-white/70 hover:text-white transition-colors text-xl font-sans font-light">
                  contact@mabegroup.com
                </a>
              </div>
              <div className="flex flex-col group">
                <span className="text-mabe-gold text-[9px] uppercase tracking-[0.4em] font-black mb-1">Téléphone</span>
                <a href="tel:+2250000000000" className="text-white/70 hover:text-white transition-colors text-xl font-sans font-light">
                  +225 00 00 00 00 00
                </a>
              </div>
            </div>
          </div>

          {/* Social Presence */}
          <div className="flex gap-8 pt-8 border-t border-white/5">
            {['LinkedIn', 'Twitter', 'Instagram'].map((social) => (
              <a 
                key={social}
                href="#" 
                className="text-[10px] uppercase tracking-[0.3em] font-sans font-bold text-white/30 hover:text-mabe-gold transition-all duration-300 hover:-translate-y-1"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        {/* COLONNE DROITE : Formulaire Interactif (Glassmorphism) */}
        <div className="lg:col-span-8 order-1 lg:order-2">
          <div className="bg-white/[0.02] border border-white/5 p-10 md:p-16 lg:p-20 backdrop-blur-sm shadow-[0_40px_100px_rgba(0,0,0,0.5)] relative overflow-hidden group">
            
            {/* Décoration interne subtile */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-mabe-gold/5 blur-[100px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className="relative z-10">
              <h2 className="text-white font-sans font-black text-3xl md:text-4xl uppercase tracking-tighter mb-4">
                Envoyez un message
              </h2>
              <p className="text-mabe-gold text-[10px] font-sans font-bold uppercase tracking-[0.4em] mb-12 italic">Délai de réponse moyen : 24h</p>
              
              {/* Intégration de ton formulaire existant */}
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION FINALE : VISUAL IMPRINT --- */}
      <section className="w-full px-6 max-w-[90rem] mx-auto h-[400px] mb-24 relative group overflow-hidden border border-white/5">
        <div className="absolute inset-0 bg-[#050505]/60 z-10 transition-colors duration-1000 group-hover:bg-[#050505]/20" />
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat grayscale contrast-125 transition-transform duration-[3s] group-hover:scale-110"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2033')" }}
        />
        {/* Filigrane XXL */}
        <div className="absolute bottom-10 right-10 z-20 text-white font-sans font-black text-6xl md:text-9xl uppercase tracking-tighter opacity-10 select-none">
          Mabe
        </div>
      </section>

    </div>
  );
};

export default Contact;