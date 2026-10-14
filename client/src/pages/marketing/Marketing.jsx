import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles, Compass, Layers, Zap, Globe, Award, Play, X } from 'lucide-react';

const services = [
  { 
    title: "Consulting Stratégique", 
    desc: "Audit approfondi, architecture de marque et feuilles de route haute performance pour dompter votre marché.",
    tag: "Stratégie",
    icon: <Compass className="w-5 h-5 text-[#C9A227]" />
  },
  { 
    title: "Community Management", 
    desc: "Animation éditoriale d'élite et gestion d'image de marque avec une précision chirurgicale.",
    tag: "Social Media",
    icon: <Layers className="w-5 h-5 text-[#C9A227]" />
  },
  { 
    title: "Gestion d'Influence", 
    desc: "Connexions stratégiques et partenariats exclusifs entre talents de premier plan et marques visionnaires.",
    tag: "Influence",
    icon: <Sparkles className="w-5 h-5 text-[#C9A227]" />
  },
  { 
    title: "Production de Contenu", 
    desc: "Direction artistique globale, tournages cinématographiques et création visuelle haute couture.",
    tag: "Création",
    icon: <Zap className="w-5 h-5 text-[#C9A227]" />
  },
  { 
    title: "Coaching Digital", 
    desc: "Accompagnement sur-mesure pour dirigeants et talents souhaitant dominer leur écosystème numérique.",
    tag: "Accompagnement",
    icon: <Award className="w-5 h-5 text-[#C9A227]" />
  },
  { 
    title: "Couverture Média", 
    desc: "Orchestration de visibilité événementielle et relations publiques d'envergure internationale.",
    tag: "Relations Publiques",
    icon: <Globe className="w-5 h-5 text-[#C9A227]" />
  }
];

// Variantes pour les animations en cascade (stagger)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  },
};

export default function Marketing() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  // État pour gérer l'ouverture/fermeture de la modale vidéo (Lightbox)
  const [isModalOpen, setIsModalOpen] = useState(false);

  // URL publique de votre vidéo media.mp4 sur Supabase Storage
  const SUPABASE_MEDIA_VIDEO_URL = "https://ycvtejuiejotuwghmuoi.supabase.co/storage/v1/object/public/news-images/media.mp4";

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white selection:bg-[#C9A227] selection:text-black overflow-hidden relative">
      
      {/* Lueurs d'arrière-plan animées et flottantes */}
      <motion.div 
        animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#C9A227]/15 rounded-full blur-[140px] pointer-events-none" 
      />
      <motion.div 
        animate={{ y: [0, 30, 0], scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-[#C9A227]/10 rounded-full blur-[120px] pointer-events-none" 
      />

      {/* --- HERO SECTION ANIMÉE --- */}
      <section className="px-6 md:px-20 pt-32 md:pt-44 pb-24 max-w-[1600px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-20">
          
          <motion.div 
            initial={{ opacity: 0, y: 60 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 mb-8 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-[#C9A227] animate-pulse" />
              <span className="text-[#C9A227] uppercase tracking-[0.3em] text-[9px] md:text-[10px] font-bold font-sans">
                Pôle Stratégie & Influence — NGIA Digital
              </span>
            </motion.div>

            <h1 className="font-black text-5xl sm:text-7xl md:text-[9rem] uppercase tracking-tighter leading-[0.85] text-white font-sans">
              NGIA <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] via-[#E6CA65] to-white italic font-light">
                Digital.
              </span>
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 lg:pb-4"
          >
            <p className="text-base md:text-lg font-light italic text-gray-400 font-serif leading-relaxed mb-6">
              "L'art d'orchestrer l'influence et de sculpter une empreinte numérique inoubliable."
            </p>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.6 }}
              className="h-[1px] bg-gradient-to-r from-[#C9A227] to-transparent" 
            />
          </motion.div>
        </div>
        
        {/* Visuel principal avec effet de zoom au chargement */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.94, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-[50vh] md:h-[70vh] bg-[#121212] overflow-hidden rounded-sm relative group border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.8)]"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80 z-10" />
          <img 
            src="/images/digital.png" 
            alt="NGIA Digital" 
            className="w-full h-full object-cover object-center opacity-80 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105 filter contrast-105" 
          />
          <div className="absolute bottom-8 left-8 right-8 z-20 flex justify-between items-end pointer-events-none">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#C9A227] font-bold">
              [ Édition 2026 / 2027 ]
            </span>
            <span className="text-xs uppercase tracking-[0.3em] text-gray-400 font-light">
              Abidjan — Paris
            </span>
          </div>
        </motion.div>
      </section>

      {/* --- MANIFESTO SECTION --- */}
      <section className="px-6 md:px-20 py-28 relative z-10 border-t border-white/10 bg-gradient-to-b from-[#0A0A0A] to-[#121212]">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="text-[#C9A227] text-[10px] uppercase tracking-[0.4em] font-bold block mb-6">
            Manifesto
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-8 font-sans leading-tight">
            Cabinet de stratégie & marketing digital d'élite
          </h2>
          <p className="text-base md:text-xl text-gray-400 font-light leading-relaxed font-sans max-w-3xl mx-auto">
            Nous ne faisons pas simplement de la communication. Nous fusionnons rigueur analytique et fulgurance créative pour transformer votre e-réputation en un actif hautement stratégique et rentable.
          </p>
        </motion.div>
      </section>

      {/* --- BENTO GRID EXPERTISES AVEC ANIMATION EN CASCADE --- */}
      <section className="px-6 md:px-20 py-32 max-w-[1600px] mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20"
        >
          <div>
            <span className="text-[#C9A227] text-[10px] uppercase tracking-[0.4em] font-bold mb-3 block">
              Expertises
            </span>
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white font-sans">
              Domaines <span className="text-gray-600 font-light">d'Excellence</span>
            </h3>
          </div>
          <p className="text-gray-400 text-sm max-w-sm mt-4 md:mt-0 font-light">
            Une approche sur-mesure conçue pour les marques et personnalités exigeantes.
          </p>
        </motion.div>

        {/* Grille Bento animée en cascade */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((s, i) => {
            const isMediaCard = s.title === "Couverture Média";

            return (
              <motion.div 
                key={i} 
                variants={itemVariants}
                whileHover={{ y: -8, borderColor: 'rgba(201, 162, 39, 0.5)', scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="group p-10 bg-white/[0.02] border border-white/10 rounded-sm relative overflow-hidden flex flex-col justify-between backdrop-blur-sm"
              >
                {/* Lueur dorée dynamique au survol */}
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-[#C9A227]/10 rounded-full blur-3xl group-hover:bg-[#C9A227]/25 transition-all duration-500 pointer-events-none" />

                <div>
                  <div className="flex justify-between items-center mb-10">
                    <motion.div 
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#C9A227] transition-colors"
                    >
                      {s.icon}
                    </motion.div>
                    <span className="text-[9px] uppercase tracking-widest text-[#C9A227] font-bold px-3 py-1 rounded-full bg-[#C9A227]/10">
                      {s.tag}
                    </span>
                  </div>

                  <h4 className="text-xl md:text-2xl font-bold uppercase mb-4 text-white group-hover:text-[#C9A227] transition-colors font-sans">
                    {s.title}
                  </h4>
                  
                  <p className="text-xs md:text-sm font-light text-gray-400 leading-relaxed font-sans mb-8">
                    {s.desc}
                  </p>
                </div>

                {/* Miniature cliquable avec Bouton Play visible pour Couverture Média */}
                {isMediaCard && (
                  <div 
                    onClick={() => setIsModalOpen(true)}
                    className="mt-2 w-full aspect-video rounded-sm overflow-hidden border border-white/10 bg-black relative group/vid cursor-pointer shadow-inner"
                    title="Cliquez pour lancer la vidéo"
                  >
                    <video 
                      src={SUPABASE_MEDIA_VIDEO_URL} 
                      poster="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80"
                      playsInline
                      className="w-full h-full object-cover group-hover/vid:scale-105 transition-transform duration-500 opacity-90 group-hover/vid:opacity-100"
                    />
                    {/* Overlay sombre avec bouton Play central proéminent */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover/vid:bg-black/25 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-[#C9A227] text-black flex items-center justify-center shadow-xl transform group-hover/vid:scale-110 transition-transform">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    </div>
                    <span className="absolute bottom-2 right-2 bg-black/80 text-[#C9A227] text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider font-sans border border-[#C9A227]/30">
                      ▶ Regarder
                    </span>
                  </div>
                )}

                <div className="pt-6 border-t border-white/5 flex items-center justify-between text-[10px] uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors mt-6">
                  <span>En savoir plus</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C9A227] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
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
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/70 border border-white/20 text-white flex items-center justify-center hover:bg-[#C9A227] hover:text-black transition-colors cursor-pointer"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Vidéo en grand format avec contrôles activés */}
              <div className="w-full aspect-video bg-black flex items-center justify-center">
                <video 
                  src={SUPABASE_MEDIA_VIDEO_URL} 
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
                  Couverture Média — NGIA Digital
                </span>
                <span className="text-xs text-gray-400 font-light">
                  Appuyez sur Échap ou cliquez en dehors pour fermer
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- CALL TO ACTION ANIMÉ --- */}
      <section className="px-6 md:px-20 py-36 text-center relative overflow-hidden bg-gradient-to-t from-[#0A0A0A] to-[#121212] border-t border-white/10">
        <motion.div 
          animate={{ scale: [1, 1.05, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#C9A227] via-transparent to-transparent pointer-events-none" 
        />
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto flex flex-col items-center relative z-10"
        >
          <span className="text-[#C9A227] text-[10px] uppercase tracking-[0.4em] font-bold mb-6 block">
            Prêt à franchir le cap ?
          </span>

          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase mb-10 text-white tracking-tighter font-sans leading-none">
            Propulsons <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] to-[#E6CA65] italic font-light">
              votre image.
            </span>
          </h2>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-4 px-12 py-7 bg-[#C9A227] text-black hover:bg-white transition-all duration-300 font-bold uppercase tracking-[0.2em] text-xs md:text-sm shadow-[0_0_50px_rgba(201,162,39,0.4)] rounded-sm group"
            >
              <span>Démarrer un projet</span>
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

    </div>
  );
}