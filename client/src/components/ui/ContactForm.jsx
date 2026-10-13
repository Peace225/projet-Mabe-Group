import React, { useState } from 'react';
import { supabase } from '../../lib/supabase';
import Button from './Button';
import Input from './Input';

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    company: '',
    pole_interest: 'Marketing',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Tentative d'insertion dans Supabase
    const { error } = await supabase
      .from('leads')
      .insert([formData]);

    if (error) {
      console.error("Erreur Supabase:", error);
      alert("Erreur lors de l'envoi : " + error.message);
    } else {
      setSuccess(true);
      // Reset du formulaire
      setFormData({ 
        full_name: '', 
        email: '', 
        company: '', 
        pole_interest: 'Marketing', 
        message: '' 
      });
    }
    setLoading(false);
  };

  if (success) {
    return (
      <div className="text-center py-12">
        <h3 className="text-[#C9A227] font-sans font-black text-2xl mb-4 uppercase tracking-tight">Demande Transmise</h3>
        <p className="text-gray-600 font-light text-sm mb-8 leading-relaxed">
          Nos équipes de direction reviendront vers vous sous 24h.
        </p>
        <button 
          onClick={() => setSuccess(false)} 
          className="px-8 py-4 border border-[#C9A227] text-[#C9A227] hover:bg-[#C9A227] hover:text-black transition-all duration-300 font-bold uppercase tracking-[0.2em] text-[10px] rounded-sm cursor-pointer"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input 
          label="Nom Complet" 
          value={formData.full_name} 
          onChange={(e) => setFormData({...formData, full_name: e.target.value})}
          required 
        />
        <Input 
          label="Adresse Email" 
          type="email" 
          value={formData.email} 
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          required 
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input 
          label="Entreprise / Organisation" 
          value={formData.company} 
          onChange={(e) => setFormData({...formData, company: e.target.value})}
        />
        <div className="flex flex-col">
          <label className="text-gray-400 text-[10px] uppercase tracking-[0.2em] mb-2 font-bold font-sans ml-1">Pôle d'intérêt</label>
          <select 
            className="w-full bg-[#FCFAF6] border border-gray-200 p-3.5 text-sm text-[#1A1A1A] focus:border-[#C9A227] outline-none transition-all rounded-sm font-sans"
            value={formData.pole_interest}
            onChange={(e) => setFormData({...formData, pole_interest: e.target.value})}
          >
            <option value="Marketing">Marketing Digital & Influence</option>
            <option value="Industriel">Transformation Industrielle</option>
            <option value="Immobilier">Immobilier & Prestige</option>
            <option value="Consulting">Digital Consulting</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-gray-400 text-[10px] uppercase tracking-[0.2em] mb-2 font-bold font-sans ml-1">Votre Message</label>
        <textarea 
          rows="5"
          className="w-full bg-[#FCFAF6] border border-gray-200 p-4 text-sm text-[#1A1A1A] focus:border-[#C9A227] outline-none transition-all rounded-sm font-sans resize-none"
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          required
        ></textarea>
      </div>

      <button 
        type="submit" 
        disabled={loading}
        className="w-full py-5 bg-[#C9A227] text-black font-bold uppercase tracking-[0.2em] text-xs hover:bg-[#1A1A1A] hover:text-[#C9A227] transition-all duration-300 rounded-sm shadow-sm cursor-pointer disabled:opacity-50 font-sans"
      >
        {loading ? "Traitement en cours..." : "Soumettre la demande"}
      </button>
    </form>
  );
};

export default ContactForm;