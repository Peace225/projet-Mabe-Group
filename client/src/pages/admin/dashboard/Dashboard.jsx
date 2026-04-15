import React, { useEffect, useState } from 'react';
import AdminLayout from '../AdminLayout';
import { supabase } from '../../../lib/supabase';

const Dashboard = () => {
  const [stats, setStats] = useState({ news: 0, leads: 0, services: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      const { count: newsCount } = await supabase.from('news').select('*', { count: 'exact', head: true });
      const { count: leadsCount } = await supabase.from('leads').select('*', { count: 'exact', head: true });
      const { count: servicesCount } = await supabase.from('services').select('*', { count: 'exact', head: true });
      setStats({ news: newsCount || 0, leads: leadsCount || 0, services: servicesCount || 0 });
    };
    fetchStats();
  }, []);

  return (
    <AdminLayout>
      <header className="mb-12">
        <h2 className="text-mabe-dark font-display text-4xl uppercase tracking-tighter">Tableau de bord</h2>
        <p className="text-gray-400 text-sm mt-2">Bienvenue, Excellencia Mabekondiasson.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { label: 'Leads Reçus', value: stats.leads, color: 'text-mabe-gold' },
          { label: 'Articles Publiés', value: stats.news, color: 'text-mabe-dark' },
          { label: 'Services Actifs', value: stats.services, color: 'text-mabe-dark' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-10 shadow-sm border-b-4 border-mabe-gold">
            <p className="text-gray-400 text-[10px] uppercase tracking-widest mb-4">{stat.label}</p>
            <h3 className={`text-6xl font-display ${stat.color}`}>{stat.value}</h3>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
};

export default Dashboard;