import React, { useState, useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';

const NewsletterPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmited, setIsSubmited] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasJoined = localStorage.getItem('mabe_newsletter_joined');
      if (!hasJoined) setIsOpen(true);
    }, 5000);
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-neutral-900/20 backdrop-blur-sm transition-all duration-700">
      
      {/* Conteneur Lumineux */}
      <div className="relative w-full max-w-lg bg-[#FCFAF6] border border-neutral-200 p-12 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.1)] animate-in fade-in zoom-in duration-700">
        
        {/* Bouton Fermer */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-8 text-neutral-400 hover:text-neutral-900 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {!isSubmited ? (
          <div className="flex flex-col text-center">
            <span className="text-[9px] uppercase tracking-[0.4em] text-neutral-400 mb-6 font-medium">
              EXCELENCIA MABE Group
            </span>
            
            <h2 className="text-3xl font-light text-neutral-900 uppercase tracking-tight mb-4">
              L'Excellence <br/>
              <span className="font-bold text-[#C9A227]">en avant-première</span>
            </h2>

            <p className="text-neutral-500 text-sm font-light leading-relaxed mb-10 max-w-sm mx-auto">
              Recevez nos perspectives stratégiques et accédez à nos opportunités exclusives.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre.adresse@email.com"
                className="w-full bg-transparent border-b border-neutral-300 py-3 text-center text-neutral-900 text-sm font-light focus:outline-none focus:border-[#C9A227] transition-colors placeholder:text-neutral-400"
              />
              <button 
                type="submit"
                className="group flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-900 hover:text-[#C9A227] transition-all duration-500"
              >
                S'inscrire <ArrowRight className="w-3 h-3 group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </div>
        ) : (
          <div className="py-10 text-center animate-in fade-in duration-500">
            <h3 className="text-xl font-light text-neutral-900 uppercase tracking-[0.2em]">Confirmé</h3>
            <div className="w-12 h-[1px] bg-[#C9A227] mx-auto mt-6" />
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsletterPopup;