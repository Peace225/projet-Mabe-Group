import React, { useState, useEffect } from 'react';
import { X, Mail, ArrowRight } from 'lucide-react';

const NewsletterPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmited, setIsSubmited] = useState(false);

  // Déclenchement automatique après 5 secondes ou au scroll
  useEffect(() => {
    const timer = setTimeout(() => {
      const hasJoined = localStorage.getItem('mabe_newsletter_joined');
      if (!hasJoined) setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique Supabase ici
    console.log("Email enregistré :", email);
    setIsSubmited(true);
    localStorage.setItem('mabe_newsletter_joined', 'true');
    
    // Fermeture automatique après succès
    setTimeout(() => setIsOpen(false), 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
      {/* Overlay sombre avec flou artistique */}
      <div 
        className="absolute inset-0 bg-[#050505]/80 backdrop-blur-md transition-opacity duration-700"
        onClick={() => setIsOpen(false)}
      />

      {/* Conteneur de la Popup */}
      <div className="relative w-full max-w-2xl bg-[#050505] border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.9)] overflow-hidden rounded-sm animate-in fade-in zoom-in duration-500">
        
        {/* Lueur dorée interne */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-mabe-gold/10 blur-[80px] rounded-full pointer-events-none" />

        {/* Bouton Fermer */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-white/30 hover:text-mabe-gold transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-5">
          
          {/* Partie Image (Optionnelle mais très Premium) */}
          <div className="hidden md:block md:col-span-2 relative overflow-hidden border-r border-white/5">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069" 
              alt="Mabe Excellence"
              className="w-full h-full object-cover grayscale brightness-50"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#050505]" />
          </div>

          {/* Partie Contenu */}
          <div className="md:col-span-3 p-10 md:p-14 relative z-10 flex flex-col justify-center">
            {!isSubmited ? (
              <>
                <h4 className="text-mabe-gold uppercase tracking-[0.4em] text-[8px] font-sans font-black mb-4">
                  Privilège & Vision
                </h4>
                <h2 className="text-white font-sans font-black text-3xl uppercase tracking-tighter leading-none mb-6">
                  Rejoignez <br/> <span className="text-white/40 font-light italic">l'Incontournable</span>
                </h2>
                <p className="text-white/50 font-sans font-light text-sm leading-relaxed mb-8">
                  Recevez nos analyses stratégiques et nos opportunités d'investissement en priorité.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative group">
                    <Mail className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-mabe-gold/50 group-focus-within:text-mabe-gold transition-colors" />
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Votre adresse email"
                      className="w-full bg-transparent border-b border-white/10 py-3 pl-8 text-white text-sm font-sans font-light focus:outline-none focus:border-mabe-gold transition-all"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full mt-4 flex items-center justify-center gap-3 bg-mabe-gold text-mabe-dark py-4 text-[10px] font-sans font-black uppercase tracking-[0.3em] hover:bg-white transition-all duration-500"
                  >
                    S'abonner <ArrowRight className="w-3 h-3" />
                  </button>
                </form>
                <p className="text-[8px] text-white/20 mt-6 uppercase tracking-widest font-sans">
                  Respect total de votre confidentialité.
                </p>
              </>
            ) : (
              <div className="text-center py-10 animate-in fade-in zoom-in duration-700">
                <div className="w-16 h-16 bg-mabe-gold/10 border border-mabe-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <ArrowRight className="text-mabe-gold rotate-[-45deg]" />
                </div>
                <h3 className="text-white font-sans font-black text-2xl uppercase tracking-tighter mb-2">Bienvenue</h3>
                <p className="text-mabe-gold text-[10px] font-sans font-bold uppercase tracking-[0.4em]">Votre accès exclusif est activé.</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default NewsletterPopup;