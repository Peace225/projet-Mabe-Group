import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, ShieldCheck } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] pt-16 pb-8 px-6 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Grille Principale */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Marque */}
          <div>
            <h4 className="text-white font-black text-xl uppercase tracking-tighter mb-4">
              Excellencia <span className="text-mabe-gold">Mabe</span>
            </h4>
            <p className="text-white/40 text-[10px] leading-relaxed font-light">
              Conglomérat dédié à l'excellence opérationnelle. Fusion stratégique pour les standards de demain.
            </p>
          </div>

          {/* Écosystème */}
          <div>
            <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-4 border-l-2 border-mabe-gold pl-3">Écosystème</h4>
            <ul className="space-y-2 text-white/50 text-[10px] font-light">
              {['Marketing & Com', 'Pôle Industriel', 'Immobilier', 'Digital Consulting'].map((item) => (
                <li key={item}><Link to="#" className="hover:text-mabe-gold transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-4 border-l-2 border-mabe-gold pl-3">Contact & Légalité</h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <ul className="space-y-3 text-white/50 text-[10px] font-light">
                <li className="flex items-center gap-2"><MapPin size={12} className="text-mabe-gold shrink-0" /> Bangui, RCA</li>
                <li className="flex items-center gap-2"><Phone size={12} className="text-mabe-gold shrink-0" /> +236 74 38 67 38</li>
                <li className="flex items-center gap-2"><Mail size={12} className="text-mabe-gold shrink-0" /> excellenciamabe@gmail.com</li>
              </ul>
              
              <div className="bg-white/[0.03] p-3 border border-white/5">
                <p className="text-white/30 text-[9px] uppercase tracking-widest mb-1 flex items-center gap-1">
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
        <div className="pt-6 border-t border-white/10 flex flex-col items-center justify-center gap-4 text-[9px] text-white/30 uppercase tracking-widest">
          <p>&copy; {currentYear} Excellencia Mabe Group.</p>
          <div className="flex gap-6">
            <Link to="/mentions-legales" className="hover:text-mabe-gold transition-colors">Mentions Légales</Link>
            <Link to="/confidentialite" className="hover:text-mabe-gold transition-colors">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;