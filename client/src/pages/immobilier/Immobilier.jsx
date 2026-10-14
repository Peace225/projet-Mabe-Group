import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Building, Key, ShieldCheck, TrendingUp, X, Play } from 'lucide-react';

const expertiseItems = [
  { title: "Accompagnement d’investisseurs", desc: "Conseil sur-mesure pour particuliers & professionnels exigeants.", icon: <TrendingUp className="w-5 h-5 text-[#C9A227]" /> },
  { title: "Promotion immobilière digitale", desc: "Mise en valeur numérique et stratégie de commercialisation innovante.", icon: <Building className="w-5 h-5 text-[#C9A227]" /> },
  { title: "Biens premium & de prestige", desc: "Sélection rigoureuse d'actifs immobiliers d'exception.", icon: <Key className="w-5 h-5 text-[#C9A227]" /> },
  { title: "Stratégie & Valorisation", desc: "Expertise en communication immobilière et mise en relation sectorielle.", icon: <ShieldCheck className="w-5 h-5 text-[#C9A227]" /> }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const Immobilier = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  // État pour gérer l'ouverture/fermeture de la vidéo en grand écran (Lightbox)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const SUPABASE_VIDEO_URL = "https://ycvtejuiejotuwghmuoi.supabase.co/storage/v1/object/public/news-images/promo.mp4";

  return (
    <div className="bg-[#fcfaf6] min-h-screen pt-32 pb-24 text-[#1a1a1a] overflow-hidden relative">
      
      {/* --- HEADER --- */}
      <section className="max-w-7xl mx-auto px-6 text-center mb-28">
        <motion.span 
          initial={{ opacity: 0, letterSpacing: '0.2em' }}
          animate={{ opacity: 1, letterSpacing: '0.4em' }}
          transition={{ duration: 1 }}
          className="text-[#C9A227] text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block font-sans"
        >
          Pôle Immobilier
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-none font-sans"
        >
          Maison <br/><span className="text-gray-300 font-light italic">Excellencia</span>
        </motion.h1>

        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-[1px] bg-[#C9A227] mx-auto mb-8" 
        />

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-2xl mx-auto text-[#525252] font-light leading-relaxed font-serif italic text-lg"
        >
          "Le trait d'union entre l'investissement stratégique et le prestige immobilier en République centrafricaine."
        </motion.p>
      </section>

      {/* --- MISSION & VISION (Style Bento) --- */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Ambition Card */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 bg-white p-10 border border-[#e0e0e0] flex flex-col justify-between shadow-sm rounded-sm relative overflow-hidden group hover:border-[#C9A227] transition-colors"
          >
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C9A227] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C9A227] font-bold block mb-4">Vision</span>
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-6 font-sans">Notre Ambition</h3>
              <p className="text-[#525252] text-sm md:text-base leading-relaxed font-light">
                Maison Excellencia ambitionne de moderniser et valoriser l’image du secteur immobilier en Centrafrique. 
                À travers une communication moderne et une approche orientée image, nous mettons en lumière 
                le potentiel du pays pour attirer les investisseurs les plus exigeants.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-100 text-[10px] uppercase tracking-widest text-gray-400 font-semibold">
              Excellence & Prestige
            </div>
          </motion.div>

          {/* Expertise Grid Cards */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {expertiseItems.map((item, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5, borderColor: '#C9A227' }}
                className="p-6 bg-white border border-[#e0e0e0] rounded-sm transition-all duration-300 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-sm bg-[#fcfaf6] border border-[#e0e0e0] flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-sm uppercase tracking-wider mb-2 font-sans">{item.title}</h4>
                  <p className="text-xs text-gray-500 font-light leading-relaxed mb-4">{item.desc}</p>
                </div>

                {/* Vidéo cliquable pour agrandir */}
                {item.title === "Promotion immobilière digitale" && (
                  <div 
                    onClick={() => setIsModalOpen(true)}
                    className="mt-2 w-full aspect-video rounded-sm overflow-hidden border border-gray-200 bg-black relative group cursor-pointer shadow-inner"
                    title="Cliquez pour agrandir la vidéo"
                  >
                    <video 
                      src={SUPABASE_VIDEO_URL} 
                      poster="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80"
                      playsInline
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-[#C9A227] text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                        <Play className="w-4 h-4 fill-current ml-0.5" />
                      </div>
                    </div>
                    <span className="absolute bottom-2 right-2 bg-black/70 text-white text-[9px] px-2 py-0.5 rounded uppercase tracking-wider font-sans">
                      Agrandir
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* --- MODALE PLEIN ÉCRAN (LIGHTBOX) POUR LA VIDÉO --- */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl bg-black rounded-lg overflow-hidden shadow-2xl border border-[#C9A227]/30"
            >
              {/* Bouton de fermeture */}
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/70 border border-white/20 text-white flex items-center justify-center hover:bg-[#C9A227] hover:text-black transition-colors"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Vidéo en grand format avec contrôles activés */}
              <div className="w-full aspect-video bg-black flex items-center justify-center">
                <video 
                  src={SUPABASE_VIDEO_URL} 
                  controls 
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain"
                >
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
              </div>

              <div className="p-4 bg-[#1a1a1a] text-white flex justify-between items-center border-t border-white/10">
                <span className="text-xs uppercase tracking-[0.2em] text-[#C9A227] font-bold font-sans">
                  Promotion Immobilière Digitale - Maison Excellencia
                </span>
                <span className="text-xs text-gray-400 font-light">
                  Appuyez sur Échap ou cliquez en dehors pour fermer
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- VISUEL D'IMPACT --- */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-[90rem] mx-auto px-6 mb-36"
      >
        <div className="relative aspect-[21/9] bg-gray-900 overflow-hidden rounded-sm shadow-2xl group">
          <img 
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80" 
            alt="Immobilier Premium" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 filter contrast-105"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <h2 className="text-white text-3xl md:text-6xl font-black uppercase tracking-tighter text-center px-4 font-sans leading-none">
              Construire l’excellence, <br/>
              <span className="text-[#C9A227] italic font-light">créer l’impact.</span>
            </h2>
          </div>
        </div>
      </motion.section>

      {/* --- CTA INVESTISSEMENT --- */}
      <section className="bg-[#1a1a1a] text-[#fcfaf6] py-32 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#C9A227]/15 via-transparent to-transparent pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="max-w-3xl mx-auto relative z-10"
        >
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 font-sans">
            Investir en <span className="text-[#C9A227]">RCA</span>
          </h2>
          <p className="text-white/60 mb-12 leading-relaxed max-w-lg mx-auto font-light text-sm md:text-base">
            Vous souhaitez vous installer ou développer votre portefeuille immobilier ? 
            Maison Excellencia vous accompagne dans chaque étape avec rigueur et vision.
          </p>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-3 border border-[#C9A227] px-12 py-5 text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A227] hover:bg-[#C9A227] hover:text-[#1a1a1a] transition-all duration-300 rounded-sm group shadow-lg"
            >
              <span>Nous Contacter</span>
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Immobilier;