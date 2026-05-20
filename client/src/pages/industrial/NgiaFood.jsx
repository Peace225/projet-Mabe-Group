import React, { useEffect } from 'react';

const NgiaFood = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-[#fcfaf6] min-h-screen text-[#1a1a1a] font-sans">
      
      {/* --- HEADER --- */}
      <section className="px-6 md:px-20 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto border-l-4 border-[#C9A227] pl-6 md:pl-10">
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-4 md:mb-6">NGIA FOOD</h1>
          <p className="text-lg md:text-xl italic text-[#C9A227]">"L'excellence au cœur de votre alimentation."</p>
        </div>
      </section>

      {/* --- HERO IMAGE --- */}
      <div className="w-full h-[30vh] md:h-[50vh] px-6 md:px-20 mb-16 md:mb-24">
        <img src="/images/food.jpg" alt="NGIA Food" className="w-full h-full object-cover shadow-2xl" />
      </div>

      {/* --- MISSION --- */}
      <section className="max-w-4xl mx-auto px-6 mb-20 md:mb-32 text-center">
        <h3 className="text-[9px] uppercase tracking-[0.3em] text-[#C9A227] font-bold mb-6 md:mb-8">Notre Vision</h3>
        <p className="text-lg md:text-2xl leading-relaxed font-light text-[#525252]">
          NGIA FOOD redéfinit les standards de la consommation locale en offrant des solutions alimentaires modernes, pratiques et saines. Nous transformons les produits du terroir avec une rigueur industrielle pour garantir qualité et sécurité à chaque étape.
        </p>
      </section>

      {/* --- SERVICES / PRODUITS --- */}
      <section className="bg-[#f4f2ee] py-16 md:py-24 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-3xl md:text-4xl font-black uppercase">Expertise & Services</h2>
            <ul className="space-y-4 md:space-y-6 text-sm md:text-lg">
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 bg-[#C9A227] flex-shrink-0" /> Transformation alimentaire et surgelés
              </li>
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 bg-[#C9A227] flex-shrink-0" /> Produits prêts à cuisiner (Convenience food)
              </li>
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 bg-[#C9A227] flex-shrink-0" /> Distribution stratégique locale
              </li>
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 bg-[#C9A227] flex-shrink-0" /> Solutions de conservation moderne
              </li>
            </ul>
          </div>
          <div className="border border-[#e0e0e0] p-6 md:p-10 bg-white">
            <h4 className="font-bold mb-4 uppercase tracking-widest text-xs md:text-sm">Engagement Qualité</h4>
            <p className="text-[#525252] leading-relaxed text-sm md:text-base">
              La sécurité alimentaire est notre priorité absolue. Nos processus de transformation respectent les normes d'hygiène les plus strictes pour offrir des produits sains, nutritifs et adaptés au rythme de vie urbain.
            </p>
          </div>
        </div>
      </section>

      {/* --- CONTACT & FOOTER --- */}
      <section className="py-16 md:py-24 px-6 md:px-20 text-center">
        <h2 className="text-2xl md:text-3xl font-black uppercase mb-8 md:mb-12">Contactez notre pôle</h2>
        <div className="flex flex-col gap-4 md:flex-row justify-center md:gap-12 text-[#525252] text-sm md:text-base">
          <p>📍 Bangui, RCA</p>
          <p>📞 +236 74 38 67 38</p>
          <p>✉️ excellenciamabe@gmail.com</p>
        </div>
      </section>
    </div>
  );
};

export default NgiaFood;