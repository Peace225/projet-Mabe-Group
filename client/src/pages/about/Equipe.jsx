import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// 1. IMPORTATION DES IMAGES LOCALES
// Ajuste les noms de fichiers selon ce que tu as dans ton dossier assets
import photoDirecteur from '../../assets/directeur.jpg'; 
// Si tu as d'autres photos, importe-les ici, sinon utilise le placeholder
// import photoDAF from '../../assets/daf.jpg';

const Equipe = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Mlle. Excellencia",
      role: "Directrice Générale",
      description: "Visionnaire stratégique, elle pilote l'expansion et l'excellence opérationnelle de l'ensemble du Groupe MABE à travers l'Afrique.",
      image: photoDirecteur 
    },
    {
      id: 2,
      name: "[Nom du DAF]",
      role: "Directeur Administratif et Financier",
      description: "Garant de la solidité financière du groupe, il assure la rentabilité et la transparence de nos investissements multisectoriels.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974" // À remplacer par import local
    },
    {
      id: 3,
      name: "[Nom du Dir. Marketing]",
      role: "Directeur Pôle Marketing",
      description: "Expert en stratégies d'influence et en branding de luxe, il redéfinit l'image de marque de nos partenaires.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976"
    },
    {
      id: 4,
      name: "[Nom du Dir. Industriel]",
      role: "Directeur Pôle Industriel",
      description: "Ingénieur de formation, il optimise les chaînes de valeur et implémente des solutions industrielles innovantes et durables.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974"
    },
    {
      id: 5,
      name: "[Nom du Dir. Commerce]",
      role: "Directeur Pôle Commerce",
      description: "Spécialiste du retail haut de gamme, il développe nos réseaux de distribution avec une exigence absolue sur l'expérience client.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961"
    },
    {
      id: 6,
      name: "[Nom]",
      role: "Responsable des Relations Publiques",
      description: "Voix du Groupe MABE, elle gère les relations avec les institutions, la presse et nos partenaires stratégiques.",
      image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=1968"
    }
  ];

  return (
    <div className="bg-[#050505] min-h-screen pt-32 pb-24 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-mabe-gold/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      {/* --- SECTION HEADER --- */}
      <section className="max-w-7xl mx-auto px-6 mb-32 text-center relative z-10">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent to-mabe-gold mx-auto mb-8" />
        <h4 className="text-mabe-gold uppercase tracking-[0.4em] text-[10px] mb-6 font-sans font-semibold">
          L'Excellence Humaine
        </h4>
        <h1 className="text-white font-sans font-black text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-none mb-10">
          Notre <span className="text-white/40 font-light">Équipe</span>
        </h1>
        <p className="text-white/50 max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-sans font-light tracking-wide">
          Le succès du Groupe MABE repose sur des femmes et des hommes d'exception. 
          Découvrez les esprits brillants qui transforment notre vision en réalité.
        </p>
      </section>

      {/* --- SECTION GRILLE DE L'ÉQUIPE --- */}
      <section className="max-w-7xl mx-auto px-6 mb-40 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {teamMembers.map((member) => (
            <div key={member.id} className="group flex flex-col bg-white/[0.02] border border-white/5 backdrop-blur-sm rounded-sm overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:bg-white/[0.04] hover:border-mabe-gold/30">
              
              {/* IMAGE MEMBER */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <div className="absolute inset-0 bg-[#050505]/20 group-hover:bg-transparent transition-all duration-700 z-10" />
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale brightness-90 contrast-110 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-[1.5s] ease-out"
                />
              </div>

              {/* INFOS MEMBER */}
              <div className="p-10 flex flex-col flex-grow relative">
                <div className="absolute top-0 left-10 right-10 h-[1px] bg-mabe-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                
                <h3 className="text-white font-sans font-bold text-2xl uppercase tracking-tighter mb-2 group-hover:text-mabe-gold transition-colors duration-300">
                  {member.name}
                </h3>
                <h4 className="text-mabe-gold uppercase tracking-[0.3em] text-[9px] font-sans font-black mb-6">
                  {member.role}
                </h4>
                <div className="w-8 h-[1px] bg-white/10 mb-6 group-hover:w-16 transition-all duration-500" />
                <p className="text-white/40 text-sm leading-relaxed font-sans font-light">
                  {member.description}
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <div className="p-12 md:p-20 bg-white/[0.02] border border-white/5 rounded-sm relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-t from-mabe-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <h3 className="text-white font-sans font-black text-3xl md:text-5xl uppercase tracking-tighter mb-8 leading-none relative z-10">
            Rejoindre <br/> <span className="text-mabe-gold font-light">l'Excellence</span>
          </h3>
          <p className="text-white/40 mb-12 font-sans font-light max-w-xl mx-auto italic relative z-10">
            Vous partagez notre vision de l'excellence opérationnelle ? Nous sommes toujours à la recherche de nouveaux talents pour accompagner notre croissance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
            <Link 
              to="/#contact" 
              className="inline-flex items-center justify-center bg-mabe-gold text-mabe-dark px-12 py-5 uppercase tracking-[0.2em] text-[10px] font-sans font-black hover:bg-white transition-all duration-300"
            >
              Candidature Spontanée
            </Link>
            <Link 
              to="/#partenaire" 
              className="inline-flex items-center justify-center border border-white/20 px-12 py-5 text-white uppercase tracking-[0.2em] text-[10px] font-sans font-bold hover:border-mabe-gold hover:text-mabe-gold transition-all duration-300"
            >
              Devenir Partenaire
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Equipe;