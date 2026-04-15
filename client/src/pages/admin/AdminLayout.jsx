import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { supabase } from '../../lib/supabase';

const AdminLayout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  const navLinks = [
    { name: 'Dashboard', path: '/admin/dashboard' },
    { name: 'Actualités', path: '/admin/news' },
    { name: 'Services', path: '/admin/services' },
    { name: 'Leads B2B', path: '/admin/leads' },
  ];

  return (
    <div className="flex min-h-screen bg-[#F4F4F4] font-body">
      
      {/* Sidebar de Gauche */}
      <aside className="w-72 bg-mabe-dark text-white p-8 flex flex-col shadow-2xl shrink-0">
        <div className="mb-16">
          <span className="text-mabe-gold font-display text-2xl font-bold tracking-tighter">MABE</span>
          <span className="text-white font-display text-2xl font-light">SYSTEM</span>
        </div>

        <nav className="flex-1 space-y-3">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`block px-4 py-3 text-xs uppercase tracking-widest transition-all ${
                location.pathname === link.path 
                  ? 'bg-mabe-gold text-mabe-dark font-bold' 
                  : 'text-gray-500 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <button 
          onClick={handleLogout} 
          className="text-left text-[10px] uppercase tracking-widest text-red-500 hover:text-red-400 py-4 border-t border-white/10 transition-colors mt-auto"
        >
          Quitter la session
        </button>
      </aside>

      {/* Contenu Principal (La page active s'affiche ici) */}
      <main className="flex-1 p-12 overflow-y-auto">
        {children}
      </main>
      
    </div>
  );
};

export default AdminLayout;