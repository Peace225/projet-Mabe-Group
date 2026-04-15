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
      <div className="text-center p-12 border border-mabe-gold/30 bg-mabe-dark animate-fade-in">
        <h3 className="text-mabe-gold font-display text-2xl mb-4 uppercase">Demande Transmise</h3>
        <p className="text-mabe-silver font-light">Nos équipes reviendront vers vous sous 24h.</p>
        <Button onClick={() => setSuccess(false)} variant="outline" className="mt-6">
          Envoyer un autre message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 p-8 border border-white/10 shadow-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input 
          label="Nom Complet" 
          value={formData.full_name} // Ajout du value pour le reset
          onChange={(e) => setFormData({...formData, full_name: e.target.value})}
          required 
        />
        <Input 
          label="Adresse Email" 
          type="email" 
          value={formData.email} // Ajout du value
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          required 
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input 
          label="Entreprise / Organisation" 
          value={formData.company} // Ajout du value
          onChange={(e) => setFormData({...formData, company: e.target.value})}
        />
        <div className="flex flex-col">
          <label className="text-gray-400 text-xs uppercase mb-2 ml-1">Pôle d'intérêt</label>
          <select 
            className="bg-mabe-dark border border-mabe-gold/10 p-3 text-mabe-silver outline-none focus:border-mabe-gold"
            value={formData.pole_interest} // Ajout du value
            onChange={(e) => setFormData({...formData, pole_interest: e.target.value})}
          >
            <option value="Marketing">Marketing Digital & Influence</option>
            <option value="Industriel">Transformation Industrielle</option>
            <option value="Commerce">Boutiques & Commerce</option>
          </select>
        </div>
      </div>

      <div>
        <label className="text-gray-400 text-xs uppercase mb-2 ml-1">Votre Message</label>
        <textarea 
          rows="4"
          className="w-full bg-mabe-dark border border-mabe-gold/10 p-3 text-mabe-silver focus:border-mabe-gold outline-none transition-all"
          value={formData.message} // Ajout du value
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          required
        ></textarea>
      </div>

      <Button type="submit" variant="primary" className="w-full">
        {loading ? "Traitement en cours..." : "Soumettre la demande"}
      </Button>
    </form>
  );
};

export default ContactForm;