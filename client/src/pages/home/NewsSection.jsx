import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NewsSection = ({ newsList, loading }) => {
  // État pour gérer l'image principale affichée pour chaque article
  const [mainImages, setMainImages] = useState({});

  if (loading) {
    return (
      <section className="py-16 md:py-24 bg-[#FAFAFA] text-center border-t border-gray-200/50">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="w-8 h-8 border-2 border-mabe-gold/30 border-t-mabe-gold rounded-full animate-spin" />
          <p className="text-gray-400 animate-pulse uppercase tracking-[0.3em] text-[9px] md:text-[10px] font-sans font-medium">Synchronisation du flux...</p>
        </div>
      </section>
    );
  }

  // Fonction pour changer l'image principale d'un article spécifique
  const handleImageClick = (articleId, imageUrl) => {
    setMainImages((prev) => ({
      ...prev,
      [articleId]: imageUrl,
    }));
  };

  return (
    <section id="news" className="py-16 md:py-24 px-6 bg-[#FAFAFA] border-t border-gray-200/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        
        {/* En-tête de section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 border-b border-gray-200 pb-8 gap-6 md:gap-0">
          <div className="relative pl-6">
            <div className="absolute left-0 top-1 bottom-1 w-[2px] bg-mabe-gold" />
            <h4 className="text-mabe-gold uppercase tracking-[0.4em] text-[9px] md:text-[10px] mb-3 font-sans font-semibold">Corporate Insights</h4>
            <h2 className="text-mabe-dark font-sans font-black text-3xl md:text-5xl uppercase tracking-tighter leading-none">Actualités &<br/><span className="text-gray-400 font-light">Perspectives</span></h2>
          </div>
          
          <Link 
            to="/news" 
            className="group flex items-center gap-3 text-mabe-dark text-[9px] md:text-[10px] uppercase tracking-[0.2em] hover:text-mabe-gold font-sans font-bold transition-all"
          >
            <span className="border-b border-transparent group-hover:border-mabe-gold pb-1 transition-all duration-300">Explorer les publications</span>
            <span className="w-8 h-[1px] bg-mabe-dark group-hover:bg-mabe-gold group-hover:w-12 transition-all duration-300" />
          </Link>
        </div>

        {newsList.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 md:gap-y-16">
            {newsList.map((news, index) => {
              const currentMainImage = mainImages[news.id] || news.image_url || (news.images && news.images[0]) || `/images/news-${(index % 3) + 1}.jpg`;
              const articleDate = news.created_at 
                ? new Date(news.created_at).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' }) 
                : 'Octobre 2026';

              return (
                <div key={news.id} className="group flex flex-col bg-white border border-gray-200/60 p-5 rounded-sm shadow-sm">
                  
                  {/* Lecteur vidéo natif (sans image de fond poster) ou Image principale interactive */}
                  {news.video_url ? (
                    <div className="relative aspect-[4/3] bg-black mb-4 overflow-hidden rounded-sm">
                      <video 
                        src={news.video_url} 
                        controls 
                        className="w-full h-full object-cover"
                      >
                        Votre navigateur ne supporte pas la lecture de vidéos.
                      </video>
                      <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 text-[7px] md:text-[8px] uppercase tracking-widest font-bold text-mabe-dark pointer-events-none">
                        Vidéo Officielle
                      </div>
                    </div>
                  ) : (
                    /* Image principale */
                    <div className="relative aspect-[4/3] bg-gray-100 mb-4 overflow-hidden rounded-sm">
                      <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 text-[7px] md:text-[8px] uppercase tracking-widest font-bold text-mabe-dark">
                        EXCELENCIA MABE Group
                      </div>
                      <img 
                        src={currentMainImage} 
                        alt={news.title} 
                        className="w-full h-full object-cover transition-all duration-500 ease-out" 
                      />
                    </div>
                  )}

                  {/* Affichage des miniatures cliquables (uniquement pour les images) */}
                  {(!news.video_url && news.images && news.images.length > 1) && (
                    <div className="flex gap-2 mb-4">
                      {news.images.map((imgUrl, imgIndex) => (
                        <button 
                          key={imgIndex} 
                          onClick={() => handleImageClick(news.id, imgUrl)} 
                          className={`focus:outline-none ring-offset-2 transition-all ${currentMainImage === imgUrl ? 'ring-2 ring-mabe-gold' : 'hover:ring-1 hover:ring-mabe-gold/50'}`}
                        >
                          <img 
                            src={imgUrl} 
                            alt={`Vignette ${imgIndex + 1}`} 
                            className="w-16 h-12 object-cover border border-gray-200 rounded-sm shadow-sm"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                  
                  {/* Vraie date de l'article */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[9px] md:text-[10px] font-sans text-gray-400 uppercase tracking-widest font-medium capitalize">
                      {articleDate}
                    </span>
                    <span className="w-4 h-[1px] bg-mabe-gold/50" />
                  </div>

                  <h3 className="text-mabe-dark font-sans font-bold text-lg md:text-xl leading-snug mb-4 group-hover:text-mabe-gold transition-colors duration-300">
                    {news.title}
                  </h3>
                  
                  <p className="text-gray-500 font-sans text-xs md:text-sm line-clamp-3 leading-relaxed mb-6 font-light flex-grow">
                    {news.content}
                  </p>
                  
                  {/* Lien dynamique pointant vers l'ID de l'article */}
                  <Link to={`/news/${news.id}`} className="mt-auto flex items-center gap-2 text-[9px] md:text-[10px] uppercase tracking-widest text-mabe-gold font-bold group-hover:translate-x-2 transition-transform duration-300">
                    Lire l'article
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>

                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 bg-white border border-gray-100 shadow-sm rounded-sm">
            <p className="text-gray-400 font-sans text-xs md:text-sm font-light tracking-wide">Le centre d'actualités est en cours d'actualisation.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsSection;