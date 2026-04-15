import React, { useRef, useEffect, useState } from 'react';

// Icône de guillemet premium personnalisée
const QuoteIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

// Icônes pour les flèches du slider
const ArrowLeft = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
  </svg>
);

const ArrowRight = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
  </svg>
);

// Ajout des images (avatars) pour chaque témoin
const testimonialsData = [
  {
    id: 1,
    quote: "L'approche stratégique de Mabe Group a complètement redéfini notre positionnement sur le marché ouest-africain. Leur niveau d'exigence est incomparable.",
    author: "Jean-Marc Kouamé",
    role: "Directeur Général, TechAfrica",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    id: 2,
    quote: "Une synergie parfaite entre le pôle industriel et marketing. Ils n'ont pas seulement exécuté un projet, ils ont élevé la vision globale de notre entreprise.",
    author: "Sarah El-Hajj",
    role: "CEO, Horizon Logistics",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    id: 3,
    quote: "Leur maîtrise des rouages du négoce international et leur réactivité en font un partenaire stratégique de premier plan. L'excellence n'est pas qu'un mot pour eux.",
    author: "Philippe Laurent",
    role: "VP Opérations, Global Trade Corp",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    id: 4,
    quote: "Des solutions digitales d'une élégance rare, couplées à une exécution technique sans faille. Un véritable catalyseur de croissance.",
    author: "Amina Diallo",
    role: "Directrice Marketing, Innova Bank",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    id: 5,
    quote: "L'équipe de Mabe a su capturer l'essence de notre marque et la traduire en une identité forte et pérenne. Du grand art.",
    author: "Thomas Dubois",
    role: "Fondateur, Premium Retail",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200&h=200"
  }
];

export default function Testimonials() {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Fonction de scroll manuel
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = current.firstElementChild.clientWidth + 32; // 32px pour le gap
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // EFFET : Défilement automatique
  useEffect(() => {
    // Si la souris est sur le slider, on met en pause l'auto-play
    if (isHovered) return;

    const interval = setInterval(() => {
      const { current } = scrollRef;
      if (current) {
        const maxScroll = current.scrollWidth - current.clientWidth;
        const scrollAmount = current.firstElementChild.clientWidth + 32;

        // Si on a atteint la fin, on retourne au début doucement
        if (current.scrollLeft >= maxScroll - 10) {
          current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Sinon, on avance d'une carte
          current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }, 3500); // Défilement toutes les 3.5 secondes

    // Nettoyage de l'intervalle
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="py-32 relative overflow-hidden border-t border-white/5">
      
      {/* 1. IMAGE DE FOND */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')" 
        }}
      />

      {/* 2. OVERLAY */}
      <div className="absolute inset-0 bg-[#050505]/90 pointer-events-none" />

      {/* Lumières d'ambiance */}
      <div className="absolute top-0 left-1/2 w-[800px] h-[500px] bg-mabe-gold/10 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* En-tête de Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 border-b border-white/10 pb-8">
          <div className="relative pl-6">
            <div className="absolute left-0 top-1 bottom-1 w-[2px] bg-gradient-to-b from-mabe-gold to-transparent" />
            <h4 className="text-mabe-gold text-[10px] font-sans font-semibold uppercase tracking-[0.4em] mb-4">
              Confiance & Réputation
            </h4>
            <h2 className="text-4xl md:text-5xl font-sans font-black text-white tracking-tighter uppercase leading-none drop-shadow-lg">
              L'Excellence <br/>
              <span className="text-white/60 font-light">Reconnue</span>
            </h2>
          </div>

          {/* Boutons de navigation manuelle */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-white/20 bg-black/20 backdrop-blur-md flex items-center justify-center text-white/70 hover:text-mabe-dark hover:bg-mabe-gold hover:border-mabe-gold transition-all duration-300 focus:outline-none"
              aria-label="Témoignage précédent"
            >
              <ArrowLeft />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-white/20 bg-black/20 backdrop-blur-md flex items-center justify-center text-white/70 hover:text-mabe-dark hover:bg-mabe-gold hover:border-mabe-gold transition-all duration-300 focus:outline-none"
              aria-label="Témoignage suivant"
            >
              <ArrowRight />
            </button>
          </div>
        </div>

        {/* PISTE DU SLIDER avec événements Hover pour la pause auto-play */}
        <div 
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {testimonialsData.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="min-w-full sm:min-w-[calc(50%-16px)] lg:min-w-[calc(33.333%-21px)] snap-start group relative p-10 md:p-12 bg-white/[0.03] border border-white/10 backdrop-blur-md rounded-sm transition-all duration-700 hover:-translate-y-2 hover:bg-white/[0.06] hover:border-mabe-gold/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] flex flex-col"
            >
              {/* Grand guillemet en filigrane */}
              <QuoteIcon className="absolute top-8 right-8 w-16 h-16 text-white/10 group-hover:text-mabe-gold/20 transition-colors duration-700 pointer-events-none transform group-hover:scale-110 group-hover:rotate-6" />
              
              {/* Texte du témoignage */}
              <p className="text-white/80 font-sans font-light text-lg leading-relaxed mb-10 relative z-10 flex-grow italic drop-shadow-md">
                "{testimonial.quote}"
              </p>
              
              {/* Auteur, Image et Ligne décorative */}
              <div className="relative z-10 mt-auto pt-6 border-t border-white/10 group-hover:border-mabe-gold/40 transition-colors duration-500 flex items-center gap-4">
                
                {/* Photo de profil (Avatar) */}
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full object-cover border border-white/20 group-hover:border-mabe-gold transition-colors duration-300 shrink-0"
                />
                
                {/* Identité */}
                <div>
                  <h4 className="text-white font-sans font-bold text-base mb-1 group-hover:text-mabe-gold transition-colors duration-300 drop-shadow-md leading-tight">
                    {testimonial.author}
                  </h4>
                  <p className="text-white/50 font-sans text-[10px] uppercase tracking-widest font-semibold drop-shadow-md">
                    {testimonial.role}
                  </p>
                </div>
                
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}