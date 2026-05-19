import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const services = [
  { title: "Consulting Stratégique", desc: "Audit et feuilles de route haute performance." },
  { title: "Community Management", desc: "Animation et gestion d'image de marque." },
  { title: "Gestion d'Influence", desc: "Partenariats exclusifs entre talents et marques." },
  { title: "Production de Contenu", desc: "Direction artistique et création visuelle." },
  { title: "Coaching Digital", desc: "Accompagnement personnalisé pour talents." },
  { title: "Couverture Média", desc: "Gestion de visibilité événementielle." }
];

const Marketing = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-[#fcfaf6] min-h-screen text-[#171717]">
      
      {/* --- HERO SECTION --- */}
      <section className="px-6 md:px-20 pt-32 pb-20 max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <h4 className="text-[#C9A227] uppercase tracking-[0.4em] text-xs mb-8 font-bold">Pôle Stratégie & Influence</h4>
            <h1 className="font-black text-8xl md:text-[10rem] uppercase tracking-tighter leading-[0.8] mb-12 text-[#171717]">
              NGIA <br /> 
              <span className="text-[#C9A227] italic font-light">Digital</span>
            </h1>
          </motion.div>
          <div className="mt-auto max-w-sm">
            <p className="text-xl font-light italic text-[#525252] mb-8">"L'art d'orchestrer l'influence et de sublimer votre identité."</p>
            <div className="h-[2px] w-20 bg-[#C9A227] mb-8" />
          </div>
        </div>
        
        <div className="w-full h-[60vh] bg-[#171717] overflow-hidden">
          <img src="/images/digital.jpg" alt="NGIA Digital" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-all duration-[2s] hover:scale-105" />
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section className="px-6 md:px-20 py-20 bg-[#171717] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-10 text-[#C9A227]">Cabinet de stratégie & marketing digital</h2>
          <p className="text-lg text-gray-300 font-light leading-relaxed">
            NGIA DIGITAL accompagne les marques et talents dans leur conquête numérique. 
            Nous transformons votre visibilité en actif transactionnel avec une précision chirurgicale.
          </p>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="px-6 md:px-20 py-32 max-w-[1600px] mx-auto">
        <h3 className="text-xs uppercase tracking-[0.3em] mb-20 text-[#a3a3a3]">Nos expertises</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-[#e5e5e5]">
          {services.map((s, i) => (
            <motion.div 
              key={i} 
              whileHover={{ backgroundColor: "#C9A227", color: "#000" }} 
              className="p-12 border-r border-b border-[#e5e5e5] transition-colors duration-500 group"
            >
              <span className="text-[#C9A227] text-xs mb-8 block group-hover:text-[#000]">0{i + 1}</span>
              <h4 className="text-2xl font-bold uppercase mb-6">{s.title}</h4>
              <p className="font-light opacity-70 group-hover:opacity-100">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="px-6 md:px-20 py-32 text-center border-t border-[#e5e5e5]">
        <h2 className="text-6xl md:text-8xl font-black uppercase mb-16 text-[#171717]">Propulsons votre image</h2>
        <Link to="/#contact" className="inline-block px-16 py-8 bg-[#C9A227] text-[#000] hover:bg-[#171717] hover:text-[#C9A227] transition-all duration-300 font-bold uppercase tracking-[0.2em] text-lg">
          Démarrer un projet
        </Link>
      </section>
    </div>
  );
};

export default Marketing;