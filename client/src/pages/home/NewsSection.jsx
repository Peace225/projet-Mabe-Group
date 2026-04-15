import React from 'react';
import { Link } from 'react-router-dom';

const NewsSection = ({ newsList, loading }) => {
  if (loading) {
    return (
      <section className="py-24 bg-[#FAFAFA] text-center border-t border-gray-200/50">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="w-8 h-8 border-2 border-mabe-gold/30 border-t-mabe-gold rounded-full animate-spin" />
          <p className="text-gray-400 animate-pulse uppercase tracking-[0.3em] text-[10px] font-sans font-medium">Synchronisation du flux...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="news" className="py-24 px-6 bg-[#FAFAFA] border-t border-gray-200/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        
        {/* En-tête de section Premium */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-gray-200 pb-8 gap-6 md:gap-0">
          <div className="relative pl-6">
            {/* Ligne décorative verticale */}
            <div className="absolute left-0 top-1 bottom-1 w-[2px] bg-mabe-gold" />
            <h4 className="text-mabe-gold uppercase tracking-[0.4em] text-[10px] mb-3 font-sans font-semibold">Corporate Insights</h4>
            <h2 className="text-mabe-dark font-sans font-black text-4xl md:text-5xl uppercase tracking-tighter leading-none">Actualités &<br/><span className="text-gray-400 font-light">Perspectives</span></h2>
          </div>
          
          <Link 
            to="/news" 
            className="group flex items-center gap-3 text-mabe-dark text-[10px] uppercase tracking-[0.2em] hover:text-mabe-gold font-sans font-bold transition-all"
          >
            <span className="border-b border-transparent group-hover:border-mabe-gold pb-1 transition-all duration-300">Explorer les publications</span>
            <span className="w-8 h-[1px] bg-mabe-dark group-hover:bg-mabe-gold group-hover:w-12 transition-all duration-300" />
          </Link>
        </div>

        {newsList.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-16">
            {newsList.map((news, index) => (
              <Link to="/news" key={news.id} className="group flex flex-col cursor-pointer">
                
                {/* Conteneur d'image avec effet Parallaxe subtil au survol */}
                <div className="relative aspect-[4/3] bg-gray-100 mb-6 overflow-hidden rounded-sm">
                  {/* Badge de catégorie */}
                  <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 text-[8px] uppercase tracking-widest font-bold text-mabe-dark">
                    Mabe Group
                  </div>
                  
                  {/* MODIFICATION ICI : Utilisation d'images locales avec alternance automatique */}
                  <img 
                    src={news.image_url || `/images/news-${(index % 3) + 1}.jpg`} 
                    alt={news.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[800ms] ease-out" 
                  />
                  {/* Voile sombre léger pour le contraste */}
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                
                {/* Métadonnées */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] font-sans text-gray-400 uppercase tracking-widest font-medium">
                    {new Date().toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
                  </span>
                  <span className="w-4 h-[1px] bg-mabe-gold/50" />
                </div>

                {/* Titre */}
                <h3 className="text-mabe-dark font-sans font-bold text-xl leading-snug mb-4 group-hover:text-mabe-gold transition-colors duration-300">
                  {news.title}
                </h3>
                
                {/* Extrait */}
                <p className="text-gray-500 font-sans text-sm line-clamp-3 leading-relaxed mb-6 font-light flex-grow">
                  {news.content}
                </p>
                
                {/* Lien Lire la suite */}
                <div className="mt-auto flex items-center gap-2 text-[10px] uppercase tracking-widest text-mabe-gold font-bold group-hover:translate-x-2 transition-transform duration-300">
                  Lire l'article
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>

              </Link>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 bg-white border border-gray-100 shadow-sm rounded-sm">
            <svg className="w-12 h-12 text-gray-200 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H14" />
            </svg>
            <p className="text-gray-400 font-sans text-sm font-light tracking-wide">Le centre d'actualités est en cours d'actualisation.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsSection;