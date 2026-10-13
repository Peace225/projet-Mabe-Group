import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, ShieldCheck } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] pt-16 pb-8 px-4 sm:px-6 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Grille Principale */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 mb-12 text-center md:text-left">
          
          {/* Marque & Logo Image (Optimisé SEO avec BASE_URL) */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <Link to="/" className="inline-block p-2.5 bg-white rounded-sm shadow-md">
              <img 
                src={`${import.meta.env.BASE_URL}images/logo.jpg`} 
                alt="Excellencia Mabe Group" 
                className="h-8 w-auto object-contain block" 
                onError={(e) => {
                  console.error("Impossible de charger le logo à l'adresse :", e.target.src);
                  e.target.style.display = 'none';
                }}
              />
            </Link>
            <h4 className="text-white font-black text-xl uppercase tracking-tighter pt-2">
              Excellencia <span className="text-mabe-gold">Mabe</span>
            </h4>
            <p className="text-white/40 text-[10px] leading-relaxed font-light max-w-xs md:max-w-none">
              Conglomérat dédié à l'excellence opérationnelle. Fusion stratégique pour les standards de demain.
            </p>
          </div>

          {/* Écosystème */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-4 border-l-0 md:border-l-2 border-mabe-gold pl-0 md:pl-3">
              Écosystème
            </h4>
            <ul className="space-y-2 text-white/50 text-[10px] font-light">
              <li><Link to="/marketing" className="hover:text-mabe-gold transition-colors">Marketing & Com</Link></li>
              <li><Link to="/industrial" className="hover:text-mabe-gold transition-colors">Pôle Industriel</Link></li>
              <li><Link to="/immobilier" className="hover:text-mabe-gold transition-colors">Immobilier</Link></li>
              <li><Link to="/marketing" className="hover:text-mabe-gold transition-colors">Digital Consulting</Link></li>
            </ul>
          </div>

          {/* Contact & Légalité */}
          <div className="lg:col-span-2 space-y-6 flex flex-col items-center md:items-start">
            <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-4 border-l-0 md:border-l-2 border-mabe-gold pl-0 md:pl-3">
              Contact & Légalité
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full text-center sm:text-left">
              <ul className="space-y-3 text-white/50 text-[10px] font-light flex flex-col items-center sm:items-start">
                <li className="flex items-center justify-center sm:justify-start gap-2">
                  <MapPin size={12} className="text-mabe-gold shrink-0" /> Bangui, RCA
                </li>
                <li className="flex items-center justify-center sm:justify-start gap-2">
                  <Phone size={12} className="text-mabe-gold shrink-0" /> +236 74 38 67 38
                </li>
                <li className="flex items-center justify-center sm:justify-start gap-2">
                  <Mail size={12} className="text-mabe-gold shrink-0" /> contact@excelenciamabe.org
                </li>
              </ul>
              
              <div className="bg-white/[0.03] p-3 border border-white/5 text-center sm:text-left">
                <p className="text-white/30 text-[9px] uppercase tracking-widest mb-1 flex items-center justify-center sm:justify-start gap-1">
                  <ShieldCheck size={10} /> Informations légales
                </p>
                <p className="text-white/60 text-[9px] leading-relaxed">
                  RCCM : RCBG2025B2905 <br/>
                  NIU : 2362025M38832R
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Barre Basse */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[9px] text-white/30 uppercase tracking-widest text-center">
          <p>&copy; {currentYear} Excellencia Mabe Group. Tous droits réservés.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/mentions-legales" className="hover:text-mabe-gold transition-colors">Mentions Légales</Link>
            <Link to="/confidentialite" className="hover:text-mabe-gold transition-colors">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;