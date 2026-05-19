import React, { useState, useEffect } from 'react';

const heroSlides = [
  { id: 0, img: "/images/hero.jpeg" },
];

const logos = [
  { id: 'ngia', src: '/images/digital.jpg', link: '/marketing' },
  { id: 'rupac', src: '/images/rupac.png', link: '/industrial' },
  { id: 'food', src: '/images/ngia.png', link: '/ngiafood' },
  { id: 'immobilier', src: '/images/logo.png', link: '/immobilier' },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Vérification de la taille d'écran pour mobile
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 6000);
    
    return () => {
      clearInterval(timer);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    if (isMobile) return; // Désactiver l'effet de souris sur mobile
    const handleMouse = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
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
            <div
              className="absolute inset-0 will-change-transform"
              style={{
                transform: isMobile ? 'none' : `translate(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px) scale(1.1)`,
              }}
            >
              <img
                src={slide.img}
                alt="Slide"
                className={`w-full h-full object-cover transition-transform duration-[15000ms] ease-out ${
                  isActive ? 'scale-110' : 'scale-100'
                }`}
                style={{ objectPosition: '50% 35%' }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
          </div>
        );
      })}

      <div className="relative z-20 h-full flex flex-col items-center justify-center text-white px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black mb-4 uppercase tracking-tight md:tracking-[0.12em]">
            <span className="inline-block animate-[slideUp_1s_cubic-bezier(0.16,1,0.3,1)_0.2s_both]">Excellencia</span>
            <span className="block md:inline-block md:ml-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-[#C9A227] to-white animate-[slideUp_1s_cubic-bezier(0.16,1,0.3,1)_0.4s_both,shimmer_3s_linear_infinite] bg-[length:200%_100%]">Mabe</span>
          </h1>

          <p className="text-[10px] md:text-sm font-light tracking-[0.2em] md:tracking-[0.5em] uppercase opacity-80 border-t border-white/20 pt-4 inline-block animate-[slideUp_1s_cubic-bezier(0.16,1,0.3,1)_0.6s_both]">
            Bienvenue dans notre écosystème
          </p>
        </div>

        {/* Grille responsive */}
        <div className="grid grid-cols-2 md:flex justify-center items-center gap-4 md:gap-10">
          {logos.map((logo, idx) => (
            <a key={logo.id} href={logo.link} className="group relative">
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl p-3 md:p-4 shadow-lg">
                <img
                  src={logo.src}
                  alt={logo.id}
                  className="h-10 md:h-20 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp { from { transform: translateY(100%); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
      `}</style>
    </section>
  );
}