import React, { useState, useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';

const NewsletterPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => !localStorage.getItem('mabe_newsletter_joined') && setIsOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmited(true);
    localStorage.setItem('mabe_newsletter_joined', 'true');
    setTimeout(() => setIsOpen(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-neutral-900/20 backdrop-blur-sm">
      {/* 
         - aspect-square : force le carré sur mobile
         - md:aspect-auto : annule le carré sur desktop
         - flex flex-col justify-center : permet de centrer le contenu verticalement dans le carré
      */}
      <div className="relative w-full max-w-[300px] aspect-square md:aspect-auto md:max-w-sm bg-[#FCFAF6] border border-neutral-200 p-6 md:p-10 shadow-2xl animate-in fade-in zoom-in duration-700 flex flex-col justify-center">
        
        <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-900">
          <X className="w-3 h-3 md:w-4 md:h-4" />
        </button>

        {!isSubmited ? (
          <form onSubmit={handleSubmit} className="flex flex-col text-center">
            <span className="text-[7px] md:text-[9px] uppercase tracking-[0.2em] text-neutral-400 mb-4">Excellencia Mabe Group</span>
            
            <h2 className="text-lg md:text-2xl font-light text-neutral-900 uppercase mb-5 leading-tight">
              L'Excellence <span className="font-bold text-[#C9A227] block">en avant-première</span>
            </h2>
            
            <input 
              required 
              type="email" 
              placeholder="votre email..." 
              className="bg-transparent border-b border-neutral-300 py-1.5 text-center text-[11px] md:text-sm mb-6 focus:outline-none focus:border-[#C9A227]" 
            />
            
            <button 
              type="submit" 
              className="flex items-center justify-center gap-1.5 text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-bold hover:text-[#C9A227] transition-all"
            >
              S'inscrire <ArrowRight className="w-2.5 h-2.5" />
            </button>
          </form>
        ) : (
          <div className="py-6 text-center text-sm md:text-xl uppercase tracking-[0.2em] font-light">Confirmé</div>
        )}
      </div>
    </div>
  );
};

export default NewsletterPopup;