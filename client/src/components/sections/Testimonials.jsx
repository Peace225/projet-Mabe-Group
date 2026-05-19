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

// Données avec les chemins d'images relocalisés dans public/images/
const testimonialsData = [
  {
    id: 1,
    quote: "L'approche stratégique de Mabe Group a complètement redéfini notre positionnement sur le marché ouest-africain. Leur niveau d'exigence est incomparable.",
    author: "Jean-Marc Kouamé",
    role: "Directeur Général, TechAfrica",
    image: "/images/avatar1.jpg"
  },
  {
    id: 2,
    quote: "Une synergie parfaite entre le pôle industriel et marketing. Ils n'ont pas seulement exécuté un projet, ils ont élevé la vision globale de notre entreprise.",
    author: "Sarah El-Hajj",
    role: "CEO, Horizon Logistics",
    image: "/images/avatar2.jpg"
  },
  {
    id: 3,
    quote: "Leur maîtrise des rouages du négoce international et leur réactivité en font un partenaire stratégique de premier plan. L'excellence n'est pas qu'un mot pour eux.",
    author: "Philippe Laurent",
    role: "VP Opérations, Global Trade Corp",
    image: "/images/avatar3.jpg"
  },
  {
    id: 4,
    quote: "Des solutions digitales d'une élégance rare, couplées à une exécution technique sans faille. Un véritable catalyseur de croissance.",
    author: "Amina Diallo",
    role: "Directrice Marketing, Innova Bank",
    image: "/images/avatar4.jpg"
  },
  {
    id: 5,
    quote: "L'équipe de Mabe a su capturer l'essence de notre marque et la traduire en une identité forte et pérenne. Du grand art.",
    author: "Thomas Dubois",
    role: "Fondateur, Premium Retail",
    image: "/images/avatar5.jpg"
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

  // Défilement automatique
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      const { current } = scrollRef;
      if (current) {
        const maxScroll = current.scrollWidth - current.clientWidth;
        const scrollAmount = current.firstElementChild.clientWidth + 32;

        if (current.scrollLeft >= maxScroll - 10) {
          current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="py-36 bg-[#FCFAF6] relative overflow-hidden border-t border-[#1A1A1A]/5 text-[#1A1A1A] antialiased">
      
      {/* Lumières d'ambiance organiques et diffuses */}
      <div className="absolute top-0 left-1/2 w-[800px] h-[500px] bg-[#C9A227]/4 blur-[160px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none mix-blend-multiply" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* En-tête de Section épuré */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8 border-b border-[#1A1A1A]/5 pb-8">
          <div className="relative pl-6">
            <div className="absolute left-0 top-1 bottom-1 w-[2px] bg-gradient-to-b from-[#C9A227] to-transparent" />
            <span className="text-[#C9A227] text-[10px] font-bold uppercase tracking-[0.5em] mb-4 block">
              Confiance & Réputation
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] tracking-tighter uppercase leading-none">
              L'Excellence <br/>
              <span className="text-gray-300 font-light font-serif italic lowercase">r</span>econnue
            </h2>
          </div>

          {/* Boutons de navigation stylisés */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-[#1A1A1A]/10 bg-white shadow-sm flex items-center justify-center text-[#1A1A1A]/60 hover:text-white hover:bg-[#1A1A1A] hover:border-[#1A1A1A] transition-all duration-400 focus:outline-none"
              aria-label="Témoignage précédent"
            >
              <ArrowLeft />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-[#1A1A1A]/10 bg-white shadow-sm flex items-center justify-center text-[#1A1A1A]/60 hover:text-white hover:bg-[#1A1A1A] hover:border-[#1A1A1A] transition-all duration-400 focus:outline-none"
              aria-label="Témoignage suivant"
            >
              <ArrowRight />
            </button>
          </div>
        </div>

        {/* PISTE DU SLIDER */}
        <div 
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {testimonialsData.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="min-w-full sm:min-w-[calc(50%-16px)] lg:min-w-[calc(33.333%-22px)] snap-start group relative p-10 md:p-12 bg-white border border-[#1A1A1A]/5 shadow-[0_15px_40px_rgba(0,0,0,0.015)] rounded-sm transition-all duration-700 hover:-translate-y-2 hover:border-[#C9A227]/30 hover:shadow-[0_25px_60px_rgba(0,0,0,0.03)] flex flex-col"
            >
              {/* Grand guillemet d'arrière-plan minimaliste */}
              <QuoteIcon className="absolute top-8 right-8 w-14 h-14 text-gray-100 group-hover:text-[#C9A227]/10 transition-colors duration-700 pointer-events-none transform group-hover:scale-105 group-hover:rotate-3" />
              
              {/* Texte du témoignage (Éditorial & Aéré) */}
              <p className="text-[#525252] font-light text-base md:text-lg leading-relaxed mb-12 relative z-10 flex-grow tracking-wide">
                "{testimonial.quote}"
              </p>
              
              {/* Profil & Signature */}
              <div className="relative z-10 mt-auto pt-6 border-t border-[#1A1A1A]/5 group-hover:border-[#C9A227]/20 transition-colors duration-500 flex items-center gap-4">
                
                {/* Avatar avec focus strict en haut pour préserver les visages */}
                <div className="w-12 h-12 rounded-full overflow-hidden border border-[#1A1A1A]/5 bg-gray-50 flex-shrink-0 group-hover:border-[#C9A227] transition-colors duration-300">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-full h-full object-cover object-top filter grayscale contrast-105"
                  />
                </div>
                
                {/* Identité */}
                <div>
                  <h4 className="text-[#1A1A1A] font-bold text-sm mb-0.5 group-hover:text-[#C9A227] transition-colors duration-300 tracking-wide leading-tight">
                    {testimonial.author}
                  </h4>
                  <p className="text-gray-400 font-medium text-[9px] uppercase tracking-widest">
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