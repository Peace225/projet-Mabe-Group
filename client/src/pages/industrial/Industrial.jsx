import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Industrial = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-[#fcfaf6] min-h-screen text-[#1a1a1a] font-sans overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative px-6 md:px-20 pt-32 pb-20 md:pt-40 md:pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-7xl mx-auto border-l-0 md:border-l-2 border-[#C9A227] pl-0 md:pl-10 flex flex-col items-center md:items-start text-center md:text-left"
        >
          <motion.h4 
            initial={{ opacity: 0, letterSpacing: '0.2em' }}
            animate={{ opacity: 1, letterSpacing: '0.4em' }}
            transition={{ duration: 1 }}
            className="text-[#C9A227] uppercase tracking-[0.4em] text-[9px] md:text-[10px] mb-4 md:mb-6 font-bold font-sans"
          >
            Pôle Industriel
          </motion.h4>
          
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-6 md:mb-8 text-[#1a1a1a] font-sans">
            RUPAC & <br />
            <span className="text-[#C9A227] italic font-light">NGIA FOOD</span>
          </h1>

          <p className="text-lg md:text-xl font-serif italic text-gray-500 mb-6 md:mb-8 leading-relaxed">
            "L'ingénierie au service d'un écosystème africain durable."
          </p>

          <p className="max-w-xl text-base md:text-lg leading-relaxed font-light text-[#525252] font-sans">
            L'innovation industrielle au service du développement durable. Nous transformons les ressources locales en solutions durables, alliant rigueur et excellence.
          </p>
        </motion.div>
      </section>

      {/* --- RUPAC --- */}
      <section className="px-6 md:px-20 py-16 md:py-24 bg-[#f4f2ee]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-[#1a1a1a] font-sans">RUPAC</h2>
            <p className="italic text-[#C9A227] text-lg md:text-xl mb-6 font-serif">
              "Du plastique à la pierre pour un monde plus vert."
            </p>
            <p className="text-[#525252] mb-8 md:mb-10 leading-relaxed text-sm md:text-base font-sans">
              Le pôle industriel spécialisé dans la valorisation des déchets plastiques transformés en matériaux de construction (pavés écologiques).
            </p>
            <div className="grid grid-cols-2 gap-3 md:gap-4 w-full">
              {['Recyclage Plastique', 'Pavés Écologiques', 'Solutions Env.', 'Valorisation'].map((item) => (
                <div key={item} className="border border-[#e0e0e0] p-3 md:p-4 text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-[#525252] bg-white text-center font-sans font-bold">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Conteneur image RUPAC corrigé avec object-contain et du padding */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-auto md:h-[500px] overflow-hidden border border-[#e0e0e0] flex justify-center items-center bg-white p-8 md:p-12 group"
          >
            <img 
              src="/images/rupac.png" 
              alt="RUPAC Production" 
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" 
            />
          </motion.div>
        </div>
      </section>

      {/* --- BANDEAU --- */}
      <div className="w-full h-[30vh] md:h-[50vh] overflow-hidden relative">
        <motion.img 
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          src="/images/food.jpg" 
          alt="Industrial Excellence" 
          className="w-full h-full object-cover grayscale opacity-80" 
        />
      </div>

      {/* --- NGIA FOOD --- */}
      <section className="px-6 md:px-20 py-16 md:py-24 bg-[#fcfaf6]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          
          {/* Conteneur image NGIA FOOD optimisé de la même manière */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1 w-full h-auto md:h-[500px] overflow-hidden border border-[#e0e0e0] flex justify-center items-center bg-white p-8 md:p-12 group"
          >
            <img 
              src="/images/ngia.png" 
              alt="NGIA Food Transformation" 
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" 
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 flex flex-col items-center md:items-start text-center md:text-left"
          >
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-[#1a1a1a] font-sans">NGIA FOOD</h2>
            <p className="italic text-[#C9A227] text-lg md:text-xl mb-6 font-serif">
              "L'innovation alimentaire moderne."
            </p>
            <p className="text-[#525252] mb-8 md:mb-10 leading-relaxed text-sm md:text-base font-sans">
              Solutions alimentaires pratiques et qualitatives. Nous transformons et distribuons des produits locaux avec une exigence absolue en matière d'hygiène.
            </p>
            <ul className="space-y-3 md:space-y-4 text-[#525252] text-xs md:text-sm uppercase tracking-[0.2em] font-sans font-medium text-left">
              <li>Produits prêts à cuisiner</li>
              <li>Transformation & surgelés</li>
              <li>Distribution intégrée</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* --- INFOS CONTACT --- */}
      <section className="px-6 md:px-20 py-20 md:py-32 border-t border-[#e0e0e0] bg-[#f4f2ee]">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 text-center md:text-left"
        >
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-[#C9A227] text-[9px] md:text-[10px] uppercase tracking-[0.3em] mb-4 font-bold font-sans">Localisation</h4>
            <p className="text-xl md:text-2xl font-light text-[#1a1a1a] font-sans">Bangui, RCA</p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-[#C9A227] text-[9px] md:text-[10px] uppercase tracking-[0.3em] mb-4 font-bold font-sans">Contact Direct</h4>
            <p className="text-xl md:text-2xl font-light text-[#1a1a1a] font-sans">+236 74 38 67 38</p>
            <p className="text-[#525252] text-sm md:text-base font-sans mt-2">contact@excelenciamabe.org</p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-[#C9A227] text-[9px] md:text-[10px] uppercase tracking-[0.3em] mb-4 font-bold font-sans">Informations Légales</h4>
            <p className="text-[#525252] text-xs md:text-sm font-sans mb-2">RCCM: RCBG2025B2905</p>
            <p className="text-[#525252] text-xs md:text-sm font-sans">NIU: 2362025M38832R</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Industrial;