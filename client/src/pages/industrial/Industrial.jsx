import React, { useEffect } from 'react';

const Industrial = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-[#fcfaf6] min-h-screen text-[#1a1a1a] font-sans">
      
      {/* --- HERO SECTION --- */}
      <section className="relative px-6 md:px-20 pt-40 pb-32">
        <div className="max-w-7xl mx-auto border-l-2 border-[#C9A227] pl-10">
          <h4 className="text-[#C9A227] uppercase tracking-[0.4em] text-[10px] mb-6 font-bold">Pôle Industriel</h4>
          <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-12 text-[#1a1a1a]">
            RUPAC & <br />
            <span className="text-[#C9A227] italic font-light">NGIA FOOD</span>
          </h1>
          <p className="max-w-xl text-[#525252] text-lg leading-relaxed font-light">
            L'innovation industrielle au service du développement durable. Nous transformons les ressources locales en solutions durables, alliant rigueur et excellence.
          </p>
        </div>
      </section>

      {/* --- RUPAC (Design BTP/Écologie) --- */}
      <section className="px-6 md:px-20 py-24 bg-[#f4f2ee]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-6xl font-black uppercase tracking-tighter mb-4 text-[#1a1a1a]">RUPAC</h2>
            <p className="italic text-[#C9A227] text-xl mb-6">"Du plastique à la pierre pour un monde plus vert."</p>
            <p className="text-[#525252] mb-10 leading-relaxed">
              Le pôle industriel spécialisé dans la valorisation des déchets plastiques transformés en matériaux de construction (pavés écologiques).
            </p>
            <div className="grid grid-cols-2 gap-4">
              {['Recyclage Plastique', 'Pavés Écologiques', 'Solutions Env.', 'Valorisation'].map((item) => (
                <div key={item} className="border border-[#e0e0e0] p-4 text-[10px] uppercase tracking-[0.2em] text-[#525252] bg-white">{item}</div>
              ))}
            </div>
          </div>
          {/* Image RUPAC */}
          <div className="h-[500px] overflow-hidden border border-[#e0e0e0]">
            <img src="/images/rupac.png" alt="RUPAC Production" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </section>

      {/* --- BANDEAU IMAGE IMMERSIVE --- */}
      <div className="w-full h-[40vh] overflow-hidden">
        <img src="/images/food.jpg" alt="Industrial Excellence" className="w-full h-full object-cover grayscale opacity-80" />
      </div>

      {/* --- NGIA FOOD (Blanc épuré) --- */}
      <section className="px-6 md:px-20 py-24 bg-[#fcfaf6]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image NGIA FOOD */}
          <div className="order-2 lg:order-1 h-[500px] overflow-hidden border border-[#e0e0e0]">
            <img src="/images/ngia.png" alt="NGIA Food Transformation" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-6xl font-black uppercase tracking-tighter mb-4 text-[#1a1a1a]">NGIA FOOD</h2>
            <p className="italic text-[#C9A227] text-xl mb-6">"L'innovation alimentaire moderne."</p>
            <p className="text-[#525252] mb-10 leading-relaxed">
              Solutions alimentaires pratiques et qualitatives. Nous transformons et distribuons des produits locaux avec une exigence absolue en matière d'hygiène.
            </p>
            <ul className="space-y-4 text-[#525252] text-sm uppercase tracking-[0.2em]">
              <li>• Produits prêts à cuisiner</li>
              <li>• Transformation & surgelés</li>
              <li>• Distribution intégrée</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- INFOS CONTACT --- */}
      <section className="px-6 md:px-20 py-32 border-t border-[#e0e0e0] bg-[#f4f2ee]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <div>
            <h4 className="text-[#C9A227] text-[10px] uppercase tracking-[0.3em] mb-4 font-bold">Localisation</h4>
            <p className="text-2xl font-light text-[#1a1a1a]">Bangui, RCA</p>
          </div>
          <div>
            <h4 className="text-[#C9A227] text-[10px] uppercase tracking-[0.3em] mb-4 font-bold">Contact Direct</h4>
            <p className="text-2xl font-light text-[#1a1a1a]">+236 74 38 67 38</p>
            <p className="text-[#525252]">excellenciamabe@gmail.com</p>
          </div>
          <div>
            <h4 className="text-[#C9A227] text-[10px] uppercase tracking-[0.3em] mb-4 font-bold">Informations Légales</h4>
            <p className="text-[#525252] text-sm">RCCM: RCBG2025B2905</p>
            <p className="text-[#525252] text-sm">NIU: 2362025M38832R</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industrial;