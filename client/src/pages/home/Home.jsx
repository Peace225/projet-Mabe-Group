import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import ContactForm from '../../components/ui/ContactForm';

// Import des composants
import HeroCarousel from '../../components/sections/HeroCarousel'; 
import Stats from '../../components/sections/Stats';
import NewsSection from './NewsSection'; 
import MainOrgans from '../../components/sections/MainOrgans';
import Testimonials from '../../components/sections/Testimonials';
import Partners from '../../components/sections/Partners';

const Home = () => {
  // États pour les actualités
  const [latestNews, setLatestNews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Effet pour récupérer les actualités Supabase
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const { data, error } = await supabase
          .from('news')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(3);
        if (data) setLatestNews(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  return (
    <div className="bg-mabe-dark min-h-screen">
      
      {/* 1. HERO SECTION (Maintenant importée proprement) */}
      <HeroCarousel />

      {/* 2. SECTION STATISTIQUES */}
      <Stats />

      {/* 3. SECTION ACTUALITÉS */}
      <NewsSection newsList={latestNews} loading={loading} />

      {/* 4. SECTION ORGANES PRINCIPAUX */}
      <MainOrgans />
    {/* 5. TÉMOIGNAGES : Fond Sombre, maintient l'ambiance corporate avant les news */}
      <Testimonials />
      {/* 6. PARTENAIRES : Logos interactifs (niveaux de gris -> couleur au survol) */}
      <Partners />
     
      
    </div>
  );
};

export default Home;