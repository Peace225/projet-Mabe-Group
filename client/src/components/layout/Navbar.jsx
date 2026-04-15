import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileDropdownOpen(false);
    setIsDropdownOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-700 ease-in-out ${
        isScrolled || isMobileMenuOpen 
          ? 'bg-[#050505]/95 py-3 shadow-2xl border-b border-mabe-gold/20 backdrop-blur-xl' 
          : 'bg-[#050505] py-8' 
      }`}>
        <div className="max-w-[95rem] mx-auto px-6 md:px-10 flex justify-between items-center relative z-50">
          
          <Link to="/" className="group flex flex-col z-50 whitespace-nowrap mr-4 transition-transform duration-300 hover:scale-105">
            <span className="text-mabe-gold font-sans text-xl md:text-2xl tracking-[0.3em] font-black leading-none uppercase">MABE GROUP</span>
            <span className="text-[7px] md:text-[8px] text-white/40 uppercase tracking-[0.5em] mt-1 group-hover:text-white transition-colors font-bold">Excellencia SARL</span>
          </Link>

          <button 
            className="lg:hidden text-white/70 hover:text-mabe-gold focus:outline-none z-50 p-2 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 flex flex-col gap-1.5 items-end">
              <span className={`block h-[1px] bg-current transition-all duration-500 ${isMobileMenuOpen ? 'w-6 rotate-45 translate-y-[7px]' : 'w-6'}`}></span>
              <span className={`block h-[1px] bg-current transition-all duration-500 ${isMobileMenuOpen ? 'opacity-0 translate-x-4' : 'w-5'}`}></span>
              <span className={`block h-[1px] bg-current transition-all duration-500 ${isMobileMenuOpen ? 'w-6 -rotate-45 -translate-y-[7px]' : 'w-4'}`}></span>
            </div>
          </button>
          
          <div className="hidden lg:flex lg:gap-2 xl:gap-4 items-center">
            
            <div 
              className="relative py-2" 
              ref={dropdownRef}
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button 
                className={`flex items-center gap-1 px-3 py-2 whitespace-nowrap rounded-sm text-[10px] uppercase tracking-[0.2em] transition-all duration-300 font-black ${
                  isDropdownOpen ? 'text-mabe-gold bg-white/5' : 'text-white/60 hover:text-mabe-gold hover:bg-white/5'
                }`}
              >
                Le Groupe
                <svg className={`w-3 h-3 transition-transform duration-500 ${isDropdownOpen ? 'rotate-180 text-mabe-gold' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className={`absolute top-full left-0 w-64 bg-[#050505] backdrop-blur-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] rounded-sm flex flex-col py-3 transition-all duration-500 ease-out ${
                isDropdownOpen 
                  ? 'opacity-100 translate-y-2 visible scale-100' 
                  : 'opacity-0 translate-y-8 invisible scale-95 pointer-events-none'
              }`}>
                <Link to="/a-propos" className="block px-6 py-3 text-[9px] uppercase tracking-[0.2em] text-white/50 hover:bg-mabe-gold/10 hover:text-mabe-gold border-l-2 border-transparent hover:border-mabe-gold transition-all duration-300 font-bold">L'Histoire Mabe</Link>
                <Link to="/vision-mission" className="block px-6 py-3 text-[9px] uppercase tracking-[0.2em] text-white/50 hover:bg-mabe-gold/10 hover:text-mabe-gold border-l-2 border-transparent hover:border-mabe-gold transition-all duration-300 font-bold">Vision & Impact</Link>
                {/* CORRECTION DU LIEN CI-DESSOUS */}
                <Link to="/mot-directeur" className="block px-6 py-3 text-[9px] uppercase tracking-[0.2em] text-white/50 hover:bg-mabe-gold/10 hover:text-mabe-gold border-l-2 border-transparent hover:border-mabe-gold transition-all duration-300 font-bold">Le Mot du CEO</Link>
              </div>
            </div>
            
            {[
              { to: "/news/event", label: "Événements" }, // CORRECTION DU LIEN
              { to: "/marketing", label: "Marketing" },
              { to: "/industrial", label: "Industrie" },
              { to: "/commerce", label: "Commerce" },
              { to: "/equipe", label: "Notre Équipe" },
              { to: "/contact", label: "Contact" }
            ].map((link) => (
              <Link 
                key={link.to}
                to={link.to} 
                className="relative group whitespace-nowrap px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-white/60 hover:text-white transition-all duration-300 font-black"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-mabe-gold transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
            ))}
            
            <Link 
              to="/partenaire" 
              className="whitespace-nowrap ml-4 px-6 py-3 bg-mabe-gold text-[10px] uppercase tracking-[0.3em] text-mabe-dark hover:bg-white transition-all duration-500 font-black shadow-2xl"
            >
              Devenir Partenaire
            </Link>
          </div>
        </div>
      </nav>

      {/* MENU MOBILE CORRIGÉ */}
      <div className={`fixed inset-0 bg-[#050505]/98 backdrop-blur-3xl z-40 lg:hidden transition-all duration-700 ease-in-out ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}>
        <div className={`flex flex-col pt-32 px-10 h-full transition-transform duration-700 delay-100 ${
          isMobileMenuOpen ? 'translate-y-0' : 'translate-y-10'
        }`}>
          <div className="flex flex-col border-b border-white/5 pb-8 mb-8">
            <button 
              onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
              className="flex justify-between items-center text-xs uppercase tracking-[0.3em] text-white/40 focus:outline-none w-full font-black"
            >
              <span className={isMobileDropdownOpen ? 'text-mabe-gold' : ''}>Le Groupe</span>
              <svg className={`w-4 h-4 transition-transform duration-500 ${isMobileDropdownOpen ? 'rotate-180 text-mabe-gold' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`flex flex-col gap-6 pl-4 transition-all duration-500 overflow-hidden ${isMobileDropdownOpen ? 'max-h-60 mt-8 opacity-100' : 'max-h-0 opacity-0'}`}>
              <Link to="/a-propos" className="text-[10px] uppercase tracking-[0.3em] text-white/60 hover:text-mabe-gold transition-colors font-bold">À propos</Link>
              <Link to="/vision-mission" className="text-[10px] uppercase tracking-[0.3em] text-white/60 hover:text-mabe-gold transition-colors font-bold">Vision & Impact</Link>
              <Link to="/mot-directeur" className="text-[10px] uppercase tracking-[0.3em] text-white/60 hover:text-mabe-gold transition-colors font-bold">Le Mot du CEO</Link>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <Link to="/news/event" className="text-xs uppercase tracking-[0.3em] text-white font-black hover:text-mabe-gold transition-all">Événements</Link>
            <Link to="/marketing" className="text-xs uppercase tracking-[0.3em] text-white font-black hover:text-mabe-gold transition-all">Marketing</Link>
            <Link to="/industrial" className="text-xs uppercase tracking-[0.3em] text-white font-black hover:text-mabe-gold transition-all">Industrie</Link>
            <Link to="/commerce" className="text-xs uppercase tracking-[0.3em] text-white font-black hover:text-mabe-gold transition-all">Commerce</Link>
            <Link to="/equipe" className="text-xs uppercase tracking-[0.3em] text-white font-black hover:text-mabe-gold transition-all">Notre Équipe</Link>
            
            <div className="flex flex-col gap-4 mt-10">
              <Link to="/contact" className="block px-6 py-5 border border-white/10 text-[10px] uppercase tracking-[0.4em] text-white text-center font-black hover:bg-white/5 transition-all">Contact</Link>
              <Link to="/partenaire" className="block px-6 py-5 bg-mabe-gold text-[10px] uppercase tracking-[0.4em] text-mabe-dark hover:bg-white transition-all text-center font-black shadow-2xl">Devenir Partenaire</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;