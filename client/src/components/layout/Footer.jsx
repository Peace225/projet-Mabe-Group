import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, ShieldCheck } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] pt-24 pb-10 px-6 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Grille Principale */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Marque */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-black text-2xl uppercase tracking-tighter mb-6">
              Excellencia <span className="text-mabe-gold">Mabe</span>
            </h4>
            <p className="text-white/40 text-xs leading-relaxed font-light">
              Conglomérat dédié à l'excellence opérationnelle. Fusion stratégique de solutions pour les standards de demain.
            </p>
          </div>

          {/* Écosystème */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-8 border-l-2 border-mabe-gold pl-4">Écosystème</h4>
            <ul className="space-y-4 text-white/50 text-xs font-light">
              {['Marketing & Com', 'Pôle Industriel', 'Immobilier', 'Digital Consulting'].map((item) => (
                <li key={item}><Link to="#" className="hover:text-mabe-gold transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact (Mis à jour) */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-8 border-l-2 border-mabe-gold pl-4">Contact & Légalité</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ul className="space-y-4 text-white/50 text-xs font-light">
                <li className="flex items-center gap-3"><MapPin size={14} className="text-mabe-gold" /> Bangui, RCA</li>
                <li className="flex items-center gap-3"><Phone size={14} className="text-mabe-gold" /> +236 74 38 67 38</li>
                <li className="flex items-center gap-3"><Mail size={14} className="text-mabe-gold" /> excellenciamabe@gmail.com</li>
              </ul>
              
              <div className="bg-white/[0.03] p-4 border border-white/5">
                <p className="text-white/30 text-[10px] uppercase tracking-widest mb-2 flex items-center gap-2">
                  <ShieldCheck size={12} /> Informations légales
                </p>
                <p className="text-white/60 text-[11px] leading-relaxed">
                  RCCM : RCBG2025B2905 <br/>
                  NIU : 2362025M38832R
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Barre Basse */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] text-white/30 uppercase tracking-widest">
          <p>&copy; {currentYear} Excellencia Mabe Group.</p>
          <div className="flex gap-8">
            <Link to="/mentions-legales" className="hover:text-mabe-gold transition-colors">Mentions Légales</Link>
            <Link to="/confidentialite" className="hover:text-mabe-gold transition-colors">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;