import React, { useState } from 'react';
import AdminLayout from '../AdminLayout';
import { supabase } from '../../../lib/supabase';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ServiceManager = () => {
  const [formData, setFormData] = useState({ title: '', description: '', pole: 'Marketing' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const { error } = await supabase.from('services').insert([formData]);
    
    if (error) alert(error.message);
    else {
      alert("Service ajouté au catalogue avec succès !");
      setFormData({ title: '', description: '', pole: 'Marketing' }); // On vide le formulaire
    }
    setLoading(false);
  };

  return (
    <AdminLayout>
      <div className="max-w-4xl bg-white p-12 shadow-xl">
        <h3 className="text-2xl font-display mb-10 border-b pb-4 uppercase">Ajouter un Service</h3>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          <Input 
            label="Nom du Service" 
            value={formData.title} 
            onChange={(e) => setFormData({...formData, title: e.target.value})} 
          />
          
          <div>
            <label className="text-gray-400 text-[10px] uppercase mb-2 block">Pôle de rattachement</label>
            <select 
              className="w-full border p-4 outline-none focus:border-mabe-gold bg-white"
              value={formData.pole}
              onChange={(e) => setFormData({...formData, pole: e.target.value})}
            >
              <option value="Marketing">Marketing Digital</option>
              <option value="Industriel">Pôle Industriel</option>
              <option value="Commerce">Pôle Commerce</option>
            </select>
          </div>

          <div>
            <label className="text-gray-400 text-[10px] uppercase mb-2 block">Description détaillée</label>
            <textarea 
              rows="5" 
              className="w-full border p-4 outline-none focus:border-mabe-gold"
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
            />
          </div>

          <Button type="submit" variant="primary" className="w-full">
            {loading ? 'Enregistrement...' : 'Ajouter le service'}
          </Button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default ServiceManager;