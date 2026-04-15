import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';

const News = () => {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Récupération de toutes les actualités depuis Supabase
  useEffect(() => {
    const fetchAllNews = async () => {
      const { data, error } = await supabase
        .from('news')
        .select('*')
        .order('created_at', { ascending: false });

      if (data) setNewsList(data);
      if (error) console.error("Erreur de chargement des news:", error);
      
      setLoading(false);
    };
    fetchAllNews();
  }, []);

  // Fonction pour formater la date de manière élégante (ex: 13 Avril 2026)
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* En-tête de la page Premium */}
        <header className="mb-24 text-center">
          <h4 className="text-mabe-gold uppercase tracking-[0.4em] text-[10px] mb-4 font-sans font-semibold">Press Room</h4>
          <h1 className="text-mabe-dark font-sans font-black text-5xl md:text-7xl uppercase tracking-tighter">
            Actualités & <span className="text-gray-400 font-light">Insights</span>
          </h1>
          <div className="h-[1px] w-16 bg-mabe-gold mx-auto mt-10 opacity-50" />
        </header>

        {/* Gestion du chargement et de l'affichage */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-8 h-8 border-2 border-mabe-gold/30 border-t-mabe-gold rounded-full animate-spin mb-4" />
            <div className="text-gray-400 uppercase tracking-[0.3em] text-[10px] font-sans font-medium animate-pulse">
              Chargement des publications...
            </div>
          </div>
        ) : newsList.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32 bg-white border border-gray-100 shadow-sm rounded-sm">
            <svg className="w-12 h-12 text-gray-200 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H14" />
            </svg>
            <div className="text-gray-400 font-sans font-light text-sm tracking-wide">
              Aucune actualité publiée pour le moment.
            </div>
          </div>
        ) : (
          /* Grille des actualités */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
            {/* MODIFICATION ICI : Ajout de (news, index) pour faire l'alternance */}
            {newsList.map((news, index) => (
              <article key={news.id} className="group cursor-pointer flex flex-col h-full">
                
                {/* Bloc Image avec effet de zoom */}
                <div className="aspect-[4/3] bg-gray-100 mb-6 overflow-hidden relative rounded-sm">
                  {/* Badge Mabe */}
                  <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 text-[8px] uppercase tracking-widest font-bold text-mabe-dark">
                    Mabe Group
                  </div>

                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10 duration-500" />
                  
                  {/* MODIFICATION ICI : Les images locales alternées */}
                  <img
                    src={news.image_url || `/images/news-${(index % 3) + 1}.jpg`}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1500ms] ease-out"
                    onError={(e) => {
                      // Sécurité : si l'image locale est introuvable, on met un placeholder externe
                      e.target.src = 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80';
                    }}
                  />
                </div>
                
                {/* Contenu de l'article */}
                <div className="flex-grow flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-mabe-gold text-[10px] uppercase tracking-widest font-bold block">
                      {formatDate(news.created_at)}
                    </span>
                    <span className="w-4 h-[1px] bg-mabe-gold/50" />
                  </div>
                  
                  {/* Typographie Premium : font-sans */}
                  <h3 className="text-mabe-dark font-sans font-bold text-2xl mb-4 leading-snug group-hover:text-mabe-gold transition-colors duration-300">
                    {news.title}
                  </h3>
                  
                  <p className="text-gray-500 font-sans font-light text-sm line-clamp-3 mb-8 leading-relaxed">
                    {news.content}
                  </p>
                  
                  {/* Bouton de lecture avec flèche */}
                  <div className="mt-auto flex items-center gap-2 text-[10px] uppercase tracking-widest text-mabe-dark font-bold group-hover:translate-x-2 group-hover:text-mabe-gold transition-all duration-300">
                    Lire l'article
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

              </article>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default News;