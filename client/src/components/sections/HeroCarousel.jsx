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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouse = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

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
            {/* Parallax Container */}
            <div
              className="absolute inset-0 will-change-transform"
              style={{
                transform: `translate(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px) scale(1.1)`,
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
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.8)_100%)]" />
          </div>
        );
      })}

      {/* CONTENU */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-white px-6">
        <div className="text-center mb-16">
          <div className="overflow-hidden">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 uppercase tracking-[0.12em]">
              <span className="inline-block animate-[slideUp_1s_cubic-bezier(0.16,1,0.3,1)_0.2s_both]">Excellencia</span>
              <span className="inline-block ml-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-[#C9A227] to-white animate-[slideUp_1s_cubic-bezier(0.16,1,0.3,1)_0.4s_both,shimmer_3s_linear_infinite] bg-[length:200%_100%]">Mabe</span>
            </h1>
          </div>

          <div className="overflow-hidden">
            <p className="text-sm md:text-base font-light tracking-[0.5em] uppercase opacity-80 border-t border-white/20 pt-4 inline-block animate-[slideUp_1s_cubic-bezier(0.16,1,0.3,1)_0.6s_both]">
              Bienvenue dans notre écosystème
            </p>
          </div>

          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#C9A227] to-transparent mx-auto mt-8 animate-[expand_1.5s_ease-out_0.8s_both]" />
        </div>

        {/* LOGOS */}
        <div className="flex flex-wrap justify-center items-center gap-5 md:gap-10">
          {logos.map((logo, idx) => (
            <a
              key={logo.id}
              href={logo.link}
              className="group relative"
            >
              <div className="absolute -inset-4 bg-[#C9A227]/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative transform-gpu transition-all duration-700 group-hover:-translate-y-3 group-hover:rotate-[-2deg] animate-[fadeInUp_0.8s_ease-out_both]"
                style={{ animationDelay: `${800 + idx * 120}ms` }}
              >
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </div>

                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 group-hover:border-[#C9A227]/50 rounded-2xl p-3 md:p-4 shadow-[0_8px_32px_rgba(0,0,0,0.4)] group-hover:shadow-[0_20px_60px_rgba(201,162,39,0.25)] transition-all duration-500">
                  <img
                    src={logo.src}
                    alt={logo.id}
                    className="h-14 md:h-20 w-auto object-contain transition-all duration-500 group-hover:scale-110 filter brightness-90 group-hover:brightness-110"
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeInUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes expand {
          from { width: 0; opacity: 0; }
          to { width: 6rem; opacity: 1; }
        }
      `}</style>
    </section>
  );
}