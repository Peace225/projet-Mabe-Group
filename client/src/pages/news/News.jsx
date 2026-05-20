import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';

const News = () => {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen pt-20 md:pt-32 pb-20 md:pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* En-tête de la page */}
        <header className="mb-16 md:mb-24 text-center">
          <h4 className="text-mabe-gold uppercase tracking-[0.4em] text-[9px] md:text-[10px] mb-4 font-sans font-semibold">Press Room</h4>
          <h1 className="text-mabe-dark font-sans font-black text-4xl md:text-7xl uppercase tracking-tighter">
            Actualités & <span className="text-gray-400 font-light">Insights</span>
          </h1>
          <div className="h-[1px] w-16 bg-mabe-gold mx-auto mt-6 md:mt-10 opacity-50" />
        </header>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-8 h-8 border-2 border-mabe-gold/30 border-t-mabe-gold rounded-full animate-spin mb-4" />
          </div>
        ) : newsList.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32 bg-white border border-gray-100 shadow-sm rounded-sm">
            <div className="text-gray-400 font-sans font-light text-xs md:text-sm tracking-wide">
              Aucune actualité publiée pour le moment.
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 md:gap-y-16">
            {newsList.map((news, index) => (
              <article key={news.id} className="group cursor-pointer flex flex-col h-full">
                
                <div className="aspect-[4/3] bg-gray-100 mb-6 overflow-hidden relative rounded-sm">
                  <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 text-[7px] md:text-[8px] uppercase tracking-widest font-bold text-mabe-dark">
                    Mabe Group
                  </div>
                  <img
                    src={news.image_url || `/images/news-${(index % 3) + 1}.jpg`}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1500ms] ease-out"
                  />
                </div>
                
                <div className="flex-grow flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-mabe-gold text-[9px] uppercase tracking-widest font-bold block">
                      {formatDate(news.created_at)}
                    </span>
                  </div>
                  
                  <h3 className="text-mabe-dark font-sans font-bold text-xl md:text-2xl mb-3 leading-snug group-hover:text-mabe-gold transition-colors duration-300">
                    {news.title}
                  </h3>
                  
                  <p className="text-gray-500 font-sans font-light text-xs md:text-sm line-clamp-3 mb-6 leading-relaxed">
                    {news.content}
                  </p>
                  
                  <div className="mt-auto flex items-center gap-2 text-[9px] md:text-[10px] uppercase tracking-widest text-mabe-dark font-bold group-hover:translate-x-2 group-hover:text-mabe-gold transition-all duration-300">
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