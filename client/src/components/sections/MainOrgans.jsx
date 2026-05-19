import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Factory, Megaphone, Globe, Building2 } from 'lucide-react';

const organs = [
  { id: 'marketing', title: 'Marketing & Com', desc: 'Stratégies digitales et identité de marque haute couture.', icon: <Megaphone className="w-6 h-6 stroke-[1.5]" />, link: '/marketing' },
  { id: 'industrial', title: 'Pôle Industriel', desc: 'Orchestration de projets industriels complexes.', icon: <Factory className="w-6 h-6 stroke-[1.5]" />, link: '/industrial' },
  { id: 'immobilier', title: 'Immobilier', desc: 'Développement d’actifs stratégiques et prestige.', icon: <Building2 className="w-6 h-6 stroke-[1.5]" />, link: '/immobilier' },
  { id: 'consulting', title: 'Digital Consulting', desc: 'Accompagnement stratégique et transformation.', icon: <Globe className="w-6 h-6 stroke-[1.5]" />, link: '/a-propos' }
];

// Configuration des animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

export default function MainOrgans() {
  return (
    <section className="py-32 bg-[#fcfaf6] text-[#1a1a1a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Titre avec animation d'entrée */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <span className="text-[#C9A227] text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">
            Écosystème Mabe
          </span>
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter">
            Nos Pôles Stratégiques
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            className="h-[1px] bg-[#C9A227] mx-auto mt-8" 
          />
        </motion.div>

        {/* Grille avec animation en cascade */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {organs.map((organ) => (
            <motion.div key={organ.id} variants={itemVariants}>
              <Link 
                to={organ.link}
                className="group p-10 bg-white border border-[#e0e0e0] hover:border-[#C9A227] transition-all duration-500 flex flex-col items-center text-center h-full hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
              >
                <div className="mb-8 w-16 h-16 flex items-center justify-center border border-[#e0e0e0] text-[#1a1a1a] group-hover:bg-[#C9A227] group-hover:text-white transition-all duration-500">
                  {organ.icon}
                </div>

                <h3 className="text-sm font-bold uppercase tracking-widest mb-4">
                  {organ.title}
                </h3>
                
                <p className="text-[#525252] text-xs leading-relaxed font-light mb-8 max-w-[200px]">
                  {organ.desc}
                </p>

                <div className="mt-auto text-[9px] font-bold uppercase tracking-[0.3em] text-[#C9A227] border-b border-transparent group-hover:border-[#C9A227] transition-all duration-300">
                  DÉCOUVRIR
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}