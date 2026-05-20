import React, { useState, useEffect } from 'react';

const heroSlides = [
  { id: 0, img: "/images/hero.jpeg" },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const handleMouse = (e) => {
      // Calcul du mouvement inverse pour un effet parallaxe naturel
      const x = (e.clientX / window.innerWidth - 0.5) * 40; 
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, [isMobile]);

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-[#0a0a0a]">
      {heroSlides.map((slide, index) => {
        const isActive = currentSlide === index;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Conteneur avec mouvement dynamique */}
            <div
              className="absolute inset-0 transition-transform duration-[4000ms] ease-out"
              style={{
                // Applique le mouvement de souris + un léger zoom constant
                transform: isMobile 
                  ? 'scale(1.15)' 
                  : `translate(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px) scale(1.15)`,
              }}
            >
              <img
                src={slide.img}
                alt="Slide"
                className="w-full h-full object-cover animate-[slowZoom_20s_ease-in-out_infinite]"
                style={{ objectPosition: '50% 35%' }}
              />
            </div>
            
            {/* Overlay pour assurer la lisibilité du texte */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
          </div>
        );
      })}

      {/* Contenu textuel */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-white px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black mb-4 uppercase tracking-tight md:tracking-[0.12em]">
            <span className="inline-block animate-[slideUp_1s_cubic-bezier(0.16,1,0.3,1)_0.2s_both]">Excellencia</span>
            <span className="block md:inline-block md:ml-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-[#C9A227] to-white animate-[slideUp_1s_cubic-bezier(0.16,1,0.3,1)_0.4s_both,shimmer_3s_linear_infinite] bg-[length:200%_100%]">Mabe</span>
          </h1>
          <p className="text-[10px] md:text-sm font-light tracking-[0.2em] md:tracking-[0.5em] uppercase opacity-80 border-t border-white/20 pt-4 inline-block animate-[slideUp_1s_cubic-bezier(0.16,1,0.3,1)_0.6s_both]">
            Bienvenue dans notre écosystème
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp { from { transform: translateY(100%); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        @keyframes slowZoom { 0% { transform: scale(1); } 50% { transform: scale(1.05); } 100% { transform: scale(1); } }
      `}</style>
    </section>
  );
}