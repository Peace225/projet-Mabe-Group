import React, { useState, useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { supabase } from '../../lib/supabase';// Ajustez le chemin '../lib/supabase' si besoin selon l'emplacement de votre fichier

const NewsletterPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmited, setIsSubmited] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!localStorage.getItem('mabe_newsletter_joined')) {
        setIsOpen(true);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Insertion de l'e-mail dans la table 'subscribers' de Supabase
      const { error } = await supabase
        .from('subscribers')
        .insert([{ email }]);

      if (error) {
        // Si l'e-mail existe déjà (code d'erreur 23505), on valide quand même l'expérience utilisateur pour ne pas le frustrer
        if (error.code !== '23505') throw error;
      }

      setIsSubmited(true);
      localStorage.setItem('mabe_newsletter_joined', 'true');
      setTimeout(() => setIsOpen(false), 2000);
    } catch (err) {
      console.error('Erreur lors de l’inscription à la newsletter :', err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-neutral-900/20 backdrop-blur-sm">
      <div className="relative w-full max-w-[300px] aspect-square md:aspect-auto md:max-w-sm bg-[#FCFAF6] border border-neutral-200 p-6 md:p-10 shadow-2xl animate-in fade-in zoom-in duration-700 flex flex-col justify-center">
        
        <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-900 transition-colors">
          <X className="w-3 h-3 md:w-4 md:h-4" />
        </button>

        {!isSubmited ? (
          <form onSubmit={handleSubmit} className="flex flex-col text-center">
            <span className="text-[7px] md:text-[9px] uppercase tracking-[0.2em] text-neutral-400 mb-4 font-sans font-bold">Excellencia Mabe Group</span>
            
            <h2 className="text-lg md:text-2xl font-light text-neutral-900 uppercase mb-3 leading-tight font-sans">
              L'Excellence <span className="font-bold text-[#C9A227] block">en avant-première</span>
            </h2>
            
            <p className="text-[10px] md:text-xs font-serif italic text-gray-500 mb-6 leading-relaxed">
              "Rejoignez un cercle exclusif et restez informé de nos perspectives stratégiques."
            </p>
            
            <input 
              required 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre email..." 
              className="bg-transparent border-b border-neutral-300 py-1.5 text-center text-[11px] md:text-sm mb-6 focus:outline-none focus:border-[#C9A227] font-sans transition-colors" 
            />
            
            <button 
              type="submit" 
              disabled={loading}
              className="flex items-center justify-center gap-1.5 text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-bold hover:text-[#C9A227] transition-all font-sans disabled:opacity-50"
            >
              {loading ? "Patientez..." : <>S'inscrire <ArrowRight className="w-2.5 h-2.5" /></>}
            </button>
          </form>
        ) : (
          <div className="py-6 text-center text-sm md:text-xl uppercase tracking-[0.2em] font-light font-sans text-neutral-900">
            Confirmé
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsletterPopup;