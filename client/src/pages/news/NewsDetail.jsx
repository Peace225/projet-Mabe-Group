import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../../lib/supabase';

export default function NewsDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState('');

  useEffect(() => {
    async function fetchArticle() {
      const { data, error } = await supabase
        .from('news')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Erreur lors du chargement de l’article :', error);
      } else {
        setArticle(data);
        if (data?.image_url) setActiveImage(data.image_url);
        else if (data?.images?.[0]) setActiveImage(data.images[0]);
      }
      setLoading(false);
    }

    if (id) {
      fetchArticle();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA]">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-10 h-10 border-2 border-[#C9A227]/30 border-t-[#C9A227] rounded-full animate-spin" />
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-sans">Chargement de l'édition...</p>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAFAFA] text-center px-6">
        <h2 className="text-3xl font-sans font-bold text-gray-900 mb-4">Article introuvable</h2>
        <p className="text-gray-500 text-sm mb-8 font-light">La publication que vous recherchez n'existe pas ou a été déplacée.</p>
        <Link to="/news" className="px-6 py-3 bg-[#C9A227] text-black text-[10px] uppercase tracking-widest font-bold rounded-sm hover:opacity-90 transition-opacity">
          Retour au centre d'actualités
        </Link>
      </div>
    );
  }

  const articleDate = article.created_at 
    ? new Date(article.created_at).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }) 
    : 'Date récente';

  return (
    <article className="min-h-screen bg-[#FAFAFA] py-28 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Bouton de retour chic */}
        <Link to="/news" className="group inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-gray-400 hover:text-[#C9A227] font-bold mb-12 transition-colors">
          <span className="w-6 h-[1px] bg-gray-300 group-hover:w-10 group-hover:bg-[#C9A227] transition-all duration-300" />
          Retour aux actualités
        </Link>

        {/* MISE EN PAGE PREMIUM EN DEUX COLONNES */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* COLONNE DE GAUCHE : Visuels (Sticky pour un effet magazine) */}
          <div className="lg:col-span-7 lg:sticky lg:top-32 space-y-6">
            {article.video_url ? (
              <div className="relative aspect-video bg-black overflow-hidden rounded-sm shadow-xl border border-gray-200/50 w-full group">
                <video 
                  src={article.video_url} 
                  controls 
                  poster={activeImage}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 z-10 bg-black/70 backdrop-blur-md px-3 py-1 text-[8px] uppercase tracking-widest font-bold text-white border border-white/10 pointer-events-none">
                  Média Officiel
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="relative aspect-[4/3] bg-white p-2 overflow-hidden rounded-sm shadow-xl border border-gray-200/60 w-full">
                  <div className="absolute top-5 left-5 z-10 bg-black/75 backdrop-blur-md px-3.5 py-1.5 text-[8px] uppercase tracking-widest font-bold text-[#C9A227] border border-white/10 shadow-lg">
                    EXCELENCIA MABE Group
                  </div>
                  <img 
                    src={activeImage} 
                    alt={article.title} 
                    className="w-full h-full object-cover rounded-sm transition-transform duration-700 hover:scale-[1.02]" 
                  />
                </div>
                
                {/* Galerie de miniatures cliquables style portfolio */}
                {article.images && article.images.length > 1 && (
                  <div className="flex gap-3 overflow-x-auto pb-2">
                    {article.images.map((imgUrl, idx) => (
                      <button 
                        key={idx} 
                        onClick={() => setActiveImage(imgUrl)}
                        className={`relative rounded-sm overflow-hidden transition-all duration-300 focus:outline-none flex-shrink-0 ${activeImage === imgUrl ? 'ring-2 ring-[#C9A227] scale-105 opacity-100 shadow-md' : 'opacity-60 hover:opacity-100 border border-gray-200'}`}
                      >
                        <img src={imgUrl} alt={`Vignette ${idx + 1}`} className="w-24.5 w-24 h-16 object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* COLONNE DE DROITE : Éditorial & Texte */}
          <div className="lg:col-span-5 bg-white p-8 md:p-10 border border-gray-200/60 shadow-sm rounded-sm">
            
            {/* Meta info : Catégorie & Date */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] font-sans text-[#C9A227] uppercase tracking-[0.2em] font-bold">
                {article.category || 'Corporate Insights'}
              </span>
              <span className="w-6 h-[1px] bg-[#C9A227]/40" />
              <span className="text-[10px] font-sans text-gray-400 uppercase tracking-widest">
                {articleDate}
              </span>
            </div>

            {/* Titre principal raffiné */}
            <h1 className="text-2xl md:text-3xl font-sans font-black text-gray-900 leading-[1.2] mb-8 tracking-tight">
              {article.title}
            </h1>

            {/* Liseré décoratif élégant */}
            <div className="w-12 h-[2px] bg-[#C9A227] mb-8" />

            {/* Corps du texte complet */}
            <div className="text-gray-600 font-sans text-sm md:text-base leading-relaxed space-y-6 whitespace-pre-line font-light">
              {article.content}
            </div>

            {/* Pied de l'article / Partage ou Action */}
            <div className="mt-12 pt-6 border-t border-gray-100 flex items-center justify-between">
              <span className="text-[9px] uppercase tracking-[0.2em] text-gray-400 font-semibold">
                Publication officielle certifiée
              </span>
              <Link 
                to="/news" 
                className="text-[10px] uppercase tracking-widest text-[#C9A227] font-bold hover:underline"
              >
                ← Toutes les actualités
              </Link>
            </div>
            
          </div>
        </div>

      </div>
    </article>
  );
}