import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Factory, Megaphone, Globe } from 'lucide-react';

const organs = [
  {
    id: 'marketing',
    title: 'Marketing & Com',
    desc: 'Stratégies digitales et identité de marque haute couture pour booster votre visibilité.',
    icon: <Megaphone className="w-6 h-6 stroke-[1.5]" />, // Icône plus fine
    link: '/marketing',
    color: 'from-mabe-gold/10' // Opacité réduite pour plus d'élégance
  },
  {
    id: 'industrial',
    title: 'Pôle Industriel',
    desc: 'Solutions de production innovantes et gestion de projets industriels complexes.',
    icon: <Factory className="w-6 h-6 stroke-[1.5]" />,
    link: '/industrial',
    color: 'from-mabe-silver/10'
  },
  {
    id: 'commerce',
    title: 'Commerce & Négoce',
    desc: 'Import-export et distribution internationale de produits de haute qualité.',
    icon: <ShoppingCart className="w-6 h-6 stroke-[1.5]" />,
    link: '/commerce',
    color: 'from-mabe-gold/10'
  },
  {
    id: 'consulting',
    title: 'Digital Consultant',
    desc: 'Accompagnement stratégique pour la transformation numérique des entreprises.',
    icon: <Globe className="w-6 h-6 stroke-[1.5]" />,
    link: '/a-propos',
    color: 'from-mabe-silver/10'
  }
];

export default function MainOrgans() {
  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
      
      {/* Background Glows (Plus subtils et mieux placés) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-mabe-gold/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-mabe-silver/5 blur-[150px] rounded-full translate-y-1/3 -translate-x-1/3 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Titre Section - Style Éditorial */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-10">
          <div className="relative pl-6">
            <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-gradient-to-b from-mabe-gold to-transparent" />
            <span className="text-mabe-gold text-[10px] font-sans font-semibold uppercase tracking-[0.4em] mb-4 block">
              Écosystème Mabe
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-black text-white tracking-tighter uppercase leading-[0.9]">
              Nos Pôles <br /> 
              <span className="text-white/40 font-light">Stratégiques</span>
            </h2>
          </div>
          
          <div className="md:max-w-xs">
            <p className="text-white/50 text-sm font-sans font-light leading-relaxed">
              Une synergie d'expertises conçue pour propulser votre entreprise vers l'excellence opérationnelle et commerciale.
            </p>
          </div>
        </div>

        {/* Grille des Organes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {organs.map((organ) => (
            <Link 
              key={organ.id} 
              to={organ.link}
              className="group relative p-8 md:p-10 bg-white/[0.02] border border-white/5 backdrop-blur-sm rounded-sm overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:bg-white/[0.04] hover:border-mabe-gold/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
            >
              {/* Gradient de fond dynamique au hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${organ.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out pointer-events-none`} />

              <div className="relative z-10 flex flex-col h-full">
                
                {/* En-tête de la carte (Icône + Petite ligne) */}
                <div className="flex items-start justify-between mb-12">
                  <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white/70 group-hover:text-mabe-dark group-hover:bg-mabe-gold group-hover:border-mabe-gold transition-all duration-500 ease-out">
                    {organ.icon}
                  </div>
                  <div className="w-8 h-[1px] bg-white/20 group-hover:bg-mabe-gold group-hover:w-12 transition-all duration-500 mt-7" />
                </div>

                {/* Textes */}
                <h3 className="text-xl font-sans font-bold text-white mb-4 tracking-wide uppercase">
                  {organ.title}
                </h3>
                
                <p className="text-white/50 font-sans font-light text-sm leading-relaxed mb-12 flex-grow">
                  {organ.desc}
                </p>

                {/* Lien interactif en bas */}
                <div className="mt-auto flex items-center gap-3 text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-white/50 group-hover:text-mabe-gold transition-colors duration-300">
                  <span className="border-b border-transparent group-hover:border-mabe-gold pb-1 transition-all duration-300">
                    Découvrir
                  </span>
                  <svg className="w-3.5 h-3.5 transform -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                
              </div>
            </Link>
          ))}
        </div>
        
      </div>
    </section>
  );
}