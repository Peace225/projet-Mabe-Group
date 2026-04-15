import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] pt-24 pb-10 px-6 border-t border-white/5 relative overflow-hidden">
      
      {/* Effet de lumière subtil au centre du footer */}
      <div className="absolute bottom-0 left-1/2 w-[600px] h-[300px] bg-mabe-gold/5 blur-[150px] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Grille Principale */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Colonne 1 : Marque & Description (Prend 2 colonnes sur Desktop) */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6 group">
              <h4 className="text-white font-sans font-black text-3xl uppercase tracking-tighter flex items-center gap-2">
                Excellencia <span className="text-mabe-gold group-hover:text-white transition-colors duration-500">Mabe</span>
              </h4>
            </Link>
            <p className="text-white/50 font-sans text-sm font-light leading-relaxed max-w-sm">
              Un conglomérat dédié à l'excellence opérationnelle. Nous fusionnons stratégie digitale, puissance industrielle et force commerciale pour redéfinir les standards de demain.
            </p>
          </div>

          {/* Colonne 2 : Écosystème (Liens rapides) */}
          <div>
            <h4 className="text-mabe-gold font-sans text-[10px] font-bold uppercase tracking-[0.3em] mb-6 relative inline-block">
              Notre Écosystème
              <span className="absolute -bottom-2 left-0 w-4 h-[1px] bg-mabe-gold" />
            </h4>
            <ul className="space-y-4">
              {['Marketing & Com', 'Pôle Industriel', 'Commerce & Négoce', 'Digital Consulting'].map((item) => (
                <li key={item}>
                  <Link 
                    to="#" 
                    className="text-white/50 font-sans text-sm font-light hover:text-mabe-gold hover:translate-x-2 transition-all duration-300 inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 : Contact & Localisation */}
          <div>
            <h4 className="text-mabe-gold font-sans text-[10px] font-bold uppercase tracking-[0.3em] mb-6 relative inline-block">
              Contact
              <span className="absolute -bottom-2 left-0 w-4 h-[1px] bg-mabe-gold" />
            </h4>
            <ul className="space-y-5 text-white/50 font-sans text-sm font-light">
              <li className="flex items-start gap-4 group">
                <svg className="w-5 h-5 mt-0.5 text-white/30 group-hover:text-mabe-gold transition-colors duration-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="leading-relaxed">
                  Siège Social<br />
                  <span className="text-white/70">Abidjan, Côte d'Ivoire</span>
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <svg className="w-5 h-5 text-white/30 group-hover:text-mabe-gold transition-colors duration-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:contact@excellenciamabe.com" className="hover:text-mabe-gold transition-colors duration-300 relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-mabe-gold hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
                  contact@excellenciamabe.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Barre de Copyright Finale */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/30 font-sans text-xs font-light tracking-wide">
            &copy; {currentYear} Excellencia Mabe Group. Tous droits réservés.
          </p>
          
          <div className="flex items-center gap-8 text-white/30 font-sans text-[10px] uppercase tracking-[0.2em] font-semibold">
            <Link to="/mentions-legales" className="hover:text-mabe-gold transition-colors duration-300">
              Mentions Légales
            </Link>
            <Link to="/confidentialite" className="hover:text-mabe-gold transition-colors duration-300">
              Confidentialité
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;