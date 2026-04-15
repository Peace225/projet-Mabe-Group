import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';

// --- CONFIGURATION PREMIUM DES SLIDES ---
const heroSlides = [
  {
    id: 0,
    subtitle: "L'Excellence sans compromis",
    title1: "Excellencia",
    title2: "Mabe Group",
    img: "/images/hero1.jpg", 
    cta1: { text: "Découvrir notre Vision", link: "#about" },
    cta2: { text: "Nos Pôles d'Expertise", link: "#poles" },
    cta3: { text: "Devenir Partenaire", link: "/#partenaire" }
  },
  {
    id: 1,
    subtitle: "Influence & Rayonnement",
    title1: "Marketing",
    title2: "Digital",
    img: "/images/hero2.jpg", 
    cta1: { text: "Explorer l'Agence", link: "/marketing" },
    cta2: { text: "Initier un Projet", link: "/#contact" },
    cta3: { text: "Voir nos Réalisations", link: "/marketing#portfolio" }
  },
  {
    id: 2,
    subtitle: "Synergie & Déploiement Global",
    title1: "Industrie &",
    title2: "Commerce",
    img: "/images/hero-3.jpg", 
    cta1: { text: "Solutions Industrielles", link: "/industrial" },
    cta2: { text: "Négoce International", link: "/commerce" },
    cta3: { text: "Nous Consulter", link: "/#contact" }
  },
  {
    id: 3,
    subtitle: "Réseau B2B & B2C Connecté",
    title1: "Mabe",
    title2: "Marketplace",
    img: "/images/hero-marketplace.jpg", 
    cta1: { text: "Vendre vos Produits", link: "/marketplace/vendre" },
    cta2: { text: "Acheter en Gros", link: "/marketplace/acheter" },
    cta3: { text: "Visiter la Plateforme", link: "/marketplace" }
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Temps allongé à 6 secondes pour un effet plus contemplatif et luxueux
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 6000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-[#0a0a0a]">
      {heroSlides.map((slide, index) => {
        const isActive = currentSlide === index;

        return (
          <div 
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img 
              src={slide.img}
              alt={slide.title1}
              className={`absolute inset-0 w-full h-full object-contain md:object-cover object-center transition-transform duration-[10000ms] ease-out ${
                isActive ? 'scale-100 md:scale-105' : 'scale-100'
              }`}
            />
            
            {/* CORRECTION : OPACITÉ RÉDUITE
              1. Le dégradé principal passe de opacity-90 à opacity-50 (beaucoup plus transparent)
              2. Le fond noir plat (backdrop) passe de bg-black/10 à bg-black/0 (totalement transparent, on garde juste le léger flou)
              Si le texte devient illisible sur certaines photos claires, tu pourras remonter 'opacity-50' à 'opacity-60'.
            */}
            <div className="absolute inset-0 bg-gradient-to-t from-mabe-dark via-mabe-dark/30 to-transparent opacity-50" />
            <div className="absolute inset-0 bg-black/0 backdrop-blur-[1px]" />
            
            {/* --- CONTENU & ANIMATIONS EN CASCADE --- */}
            <div className="absolute inset-0 flex items-center justify-center text-center px-6">
              <div className="relative z-20 max-w-5xl w-full flex flex-col items-center">
                
                {/* Ligne & Sous-titre */}
                <div className={`flex flex-col items-center gap-4 mb-6 transition-all duration-1000 delay-300 ${
                  isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}>
                  <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-mabe-gold" />
                  <h2 className="text-mabe-gold tracking-[0.4em] md:tracking-[0.6em] uppercase text-[9px] md:text-xs font-medium font-sans drop-shadow-md">
                    {slide.subtitle}
                  </h2>
                </div>

                {/* Titre Principal XXL */}
                <h1 className={`text-white font-sans font-black text-5xl sm:text-6xl md:text-8xl lg:text-[7.5rem] mb-12 tracking-tighter uppercase leading-[0.9] drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] transition-all duration-1000 delay-500 ${
                  isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}>
                  {slide.title1} <br className="hidden sm:block" /> 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-mabe-gold via-yellow-300 to-mabe-gold italic font-light pr-4 drop-shadow-none">
                    {slide.title2}
                  </span>
                </h1>
                
                {/* Actions (Boutons) */}
                <div className={`flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6 justify-center items-center w-full transition-all duration-1000 delay-700 ${
                  isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}>
                  <a href={slide.cta1.link} className="w-full sm:w-auto">
                    <Button variant="primary" className="w-full px-10 py-4 font-sans shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-shadow">
                      {slide.cta1.text}
                    </Button>
                  </a>
                  
                  <a href={slide.cta2.link} className="w-full sm:w-auto">
                    <Button variant="outline" className="w-full px-10 py-4 font-sans backdrop-blur-md border-white/40 hover:border-mabe-gold bg-black/10">
                      {slide.cta2.text}
                    </Button>
                  </a>

                  {/* Lien tertiaire */}
                  <a 
                    href={slide.cta3.link} 
                    className="group flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white hover:text-mabe-gold transition-colors duration-300 mt-4 sm:mt-0 sm:ml-4 font-sans font-medium drop-shadow-md"
                  >
                    <span className="border-b border-transparent group-hover:border-mabe-gold pb-1 transition-all duration-300">
                      {slide.cta3.text}
                    </span>
                    <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>

              </div>
            </div>
          </div>
        );
      })}

      {/* --- INDICATEURS DE NAVIGATION PREMIUM --- */}
      <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center items-center gap-4">
        {heroSlides.map((_, index) => {
          const isActive = currentSlide === index;
          return (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Aller au slide ${index + 1}`}
              className="py-4 px-1 focus:outline-none group flex items-center"
            >
              <div className={`relative h-[2px] transition-all duration-700 ease-in-out ${
                isActive ? 'w-16 bg-white/40' : 'w-6 bg-white/20 group-hover:bg-white/50 group-hover:w-8'
              }`}>
                {/* Barre de progression interne fluide */}
                {isActive && (
                  <div 
                    className="absolute top-0 left-0 h-full bg-mabe-gold transition-all duration-[6000ms] ease-linear"
                    style={{ width: '100%' }}
                  />
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* --- FILIGRANE ARRIÈRE-PLAN --- */}
      <div className="absolute bottom-0 right-4 z-20 hidden md:block select-none pointer-events-none">
        <span className="text-white/[0.03] font-sans text-[12rem] leading-none tracking-tighter uppercase font-black">
          Mabe
        </span>
      </div>
    </section>
  );
}