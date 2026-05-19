import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  CalendarDays, Megaphone, Factory, 
  Building, Users, Mail, X, Menu, ChevronDown, Landmark,
  History, Target, MessageSquare
} from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const location = useLocation();
  const gold = '#C9A227';

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileDropdownOpen(false);
  }, [location]);

  const navLinks = [
    { to: "/news/event", label: "Événements", icon: CalendarDays },
    { to: "/marketing", label: "Marketing", icon: Megaphone },
    { to: "/industrial", label: "Industrie", icon: Factory },
    { to: "/immobilier", label: "Immobilier", icon: Building },
    { to: "/equipe", label: "Équipe", icon: Users },
    { to: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <nav className="fixed w-full z-50 bg-black py-6 border-b border-white/10">
      <div className="max-w-[90rem] mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO */}
        <Link to="/" className="flex flex-col group z-50 flex-shrink-0 mr-8">
          <div className="text-white text-xl md:text-2xl tracking-[0.2em] font-bold uppercase leading-tight">
            EXCELENCIA <span style={{ color: gold }}>MABE</span>
          </div>
          <span className="text-[0.65rem] text-white/50 tracking-[0.5em] mt-0.5 group-hover:text-[#C9A227] transition-colors">
            GROUPE
          </span>
        </Link>

        {/* NAVIGATION DESKTOP */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 flex-wrap justify-end">
          {/* Menu Groupe Desktop */}
          <div className="relative group">
            <button className="flex items-center gap-2 text-white/70 hover:text-white uppercase tracking-[0.1em] text-[11px] xl:text-xs font-medium transition-all hover:text-[#C9A227]">
              <Landmark size={13} /> Le Groupe <ChevronDown size={11} />
            </button>
            <div className="absolute top-full left-0 mt-2 w-56 bg-black border border-white/10 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
              <Link to="/a-propos" className="flex items-center gap-3 px-4 py-2 text-[10px] xl:text-xs text-white/70 hover:text-[#C9A227] uppercase tracking-widest">
                <History size={14} /> L'Histoire Mabe
              </Link>
              <Link to="/vision-mission" className="flex items-center gap-3 px-4 py-2 text-[10px] xl:text-xs text-white/70 hover:text-[#C9A227] uppercase tracking-widest">
                <Target size={14} /> Vision & Impact
              </Link>
              <Link to="/mot-directeur" className="flex items-center gap-3 px-4 py-2 text-[10px] xl:text-xs text-white/70 hover:text-[#C9A227] uppercase tracking-widest">
                <MessageSquare size={14} /> Le Mot du CEO
              </Link>
            </div>
          </div>

          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link 
                key={link.to} 
                to={link.to} 
                className="flex items-center gap-1.5 text-white/70 hover:text-white uppercase tracking-[0.1em] text-[11px] xl:text-xs font-medium transition-all hover:text-[#C9A227] whitespace-nowrap"
              >
                <Icon size={13} />
                {link.label}
              </Link>
            );
          })}
          
          <Link 
            to="/partenaire" 
            className="px-4 py-2 border border-[#C9A227] text-[#C9A227] text-[11px] xl:text-xs uppercase tracking-widest hover:bg-[#C9A227] hover:text-black transition-all whitespace-nowrap"
          >
            Partenaire
          </Link>
        </div>

        {/* BURGER MOBILE */}
        <button className="lg:hidden text-white z-50" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

     {/* MENU MOBILE */}
      <div className={`fixed inset-0 bg-black z-40 lg:hidden overflow-y-auto transition-opacity duration-300 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}>
        <div className="flex flex-col items-start pt-24 pb-10 px-8 gap-6">
          
          <div className="w-full">
            <button 
              onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
              className="flex justify-between w-full items-center text-sm text-white/80 uppercase tracking-widest hover:text-[#C9A227]"
            >
              <span className="flex items-center gap-3"><Landmark size={16} /> Le Groupe</span>
              <ChevronDown size={16} className={`transition-transform ${isMobileDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {isMobileDropdownOpen && (
              <div className="flex flex-col gap-4 mt-4 pl-8 border-l border-[#C9A227]/30">
                <Link to="/a-propos" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 text-xs text-white/60 hover:text-white"><History size={16} /> L'Histoire Mabe</Link>
                <Link to="/vision-mission" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 text-xs text-white/60 hover:text-white"><Target size={16} /> Vision & Impact</Link>
                <Link to="/mot-directeur" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 text-xs text-white/60 hover:text-white"><MessageSquare size={16} /> Le Mot du CEO</Link>
              </div>
            )}
          </div>

          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link 
                key={link.to} 
                to={link.to} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 text-sm text-white/80 uppercase tracking-widest hover:text-[#C9A227] transition-colors"
              >
                <Icon size={16} />
                {link.label}
              </Link>
            );
          })}

          <Link 
            to="/partenaire" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-2 w-full text-center px-6 py-2 border border-[#C9A227] text-[#C9A227] uppercase tracking-widest text-xs hover:bg-[#C9A227] hover:text-black transition-all"
          >
            Devenir Partenaire
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;