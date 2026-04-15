import React, { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    
    if (error) {
      alert("Accès refusé : " + error.message);
    } else {
      navigate('/admin/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-mabe-dark flex items-center justify-center p-6 font-body">
      <div className="max-w-md w-full bg-black/40 border border-mabe-gold/20 p-10 backdrop-blur-md shadow-2xl">
        
        <div className="text-center mb-10">
          <h2 className="text-mabe-gold font-display text-3xl uppercase tracking-[0.3em]">Admin</h2>
          <p className="text-gray-500 text-[10px] uppercase mt-2 tracking-widest">Accès Réservé - Excellencia Mabe</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <Input 
            label="Email Professionnel" 
            type="email" 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <Input 
            label="Mot de passe" 
            type="password" 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <Button type="submit" variant="primary" className="w-full">
            Entrer dans le Hub
          </Button>
        </form>

      </div>
    </div>
  );
};

export default Login;