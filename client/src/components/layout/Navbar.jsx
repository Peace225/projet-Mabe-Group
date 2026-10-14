import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  CalendarDays, Megaphone, Factory, 
  Building, Users, Mail, X, Menu, ChevronDown, Landmark,
  History, Target, MessageSquare
} from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGroupDropdownOpen, setIsGroupDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    setIsGroupDropdownOpen(false);
  }, [location]);

  const navLinks = [
    { to: "/news/event", label: "Événements", icon: CalendarDays },
    { to: "/marketing", label: "Marketing", icon: Megaphone },
    { to: "/industrial", label: "Industrie", icon: Factory },
    { to: "/immobilier", label: "Immobilier", icon: Building },
    { to: "/equipe", label: "Équipe", icon: Users },
    { to: "/contact", label: "Contact", icon: Mail },
  ];

  const textAndLogoClasses = "text-white mix-blend-difference filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]";

  return (
    <nav className="fixed w-full z-50 py-4">
      <div className="max-w-[90rem] mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO IMAGE */}
        <Link to="/" className={`flex items-center group z-50 flex-shrink-0 mr-4 ${textAndLogoClasses}`}>
          <img 
            src="/images/logos.png" 
            alt="Excellencia Mabe Groupe" 
            className="h-12 md:h-14 w-auto object-contain transition-transform group-hover:scale-105" 
          />
        </Link>

        {/* LIENS CENTRÉS ENTRE LE LOGO ET LES BOUTONS */}
        <div className={`flex items-center justify-center gap-3 lg:gap-4 xl:gap-5 transition-all duration-300 overflow-hidden whitespace-nowrap ${
          isMenuOpen ? 'opacity-100 flex-1 visible mx-4' : 'opacity-0 max-w-0 invisible pointer-events-none'
        } ${textAndLogoClasses}`}>
          
          {/* Menu Le Groupe */}
          <div className="relative group flex-shrink-0">
            <button 
              onClick={() => setIsGroupDropdownOpen(!isGroupDropdownOpen)}
              className="flex items-center gap-1 hover:text-[#C9A227] uppercase tracking-[0.08em] text-[10px] xl:text-[11px] font-medium transition-all py-2 cursor-pointer"
            >
              <Landmark size={12} /> Le Groupe <ChevronDown size={10} className={`transition-transform duration-300 ${isGroupDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isGroupDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-black border border-white/10 py-2 shadow-2xl z-50 text-white">
                <Link to="/a-propos" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2.5 px-3 py-2 text-[10px] text-white/70 hover:text-[#C9A227] hover:bg-white/[0.03] uppercase tracking-widest transition-colors"><History size={13} /> L'Histoire Mabe</Link>
                <Link to="/vision-mission" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2.5 px-3 py-2 text-[10px] text-white/70 hover:text-[#C9A227] hover:bg-white/[0.03] uppercase tracking-widest transition-colors"><Target size={13} /> Vision & Impact</Link>
                <Link to="/mot-directeur" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2.5 px-3 py-2 text-[10px] text-white/70 hover:text-[#C9A227] hover:bg-white/[0.03] uppercase tracking-widest transition-colors"><MessageSquare size={13} /> Le Mot du CEO</Link>
              </div>
            )}
          </div>

          {/* Autres liens */}
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link 
                key={link.to} 
                to={link.to} 
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-1 hover:text-[#C9A227] uppercase tracking-[0.08em] text-[10px] xl:text-[11px] font-medium transition-all py-2 flex-shrink-0"
              >
                <Icon size={12} />
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* BOUTONS DROITE */}
        <div className={`flex items-center gap-3 flex-shrink-0 ml-auto ${textAndLogoClasses}`}>
          <button 
            className="flex items-center gap-1.5 bg-white/20 hover:bg-white/30 px-3.5 py-2 rounded-sm border border-white/10 transition-all text-[10px] xl:text-[11px] uppercase tracking-widest font-bold z-50 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <>
                <X size={16} className="text-[#C9A227]" /> 
                <span>Fermer</span>
              </>
            ) : (
              <>
                <Menu size={16} className="text-[#C9A227]" /> 
                <span>Menu</span>
              </>
            )}
          </button>

          <Link 
            to="/partenaire" 
            className="px-3.5 py-2 border border-white/20 hover:bg-white/10 text-[10px] xl:text-[11px] uppercase tracking-widest transition-all whitespace-nowrap rounded-sm"
          >
            Partenaire
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;