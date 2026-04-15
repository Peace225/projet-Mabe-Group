import React, { useState } from 'react';
import AdminLayout from '../AdminLayout';
import { supabase } from '../../../lib/supabase';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const NewsManager = () => {
  const [formData, setFormData] = useState({ title: '', content: '', image_url: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from('news').insert([formData]);
    if (error) alert(error.message);
    else {
      alert("Article publié avec succès !");
      setFormData({ title: '', content: '', image_url: '' });
    }
    setLoading(false);
  };

  return (
    <AdminLayout>
      <div className="max-w-4xl bg-white p-12 shadow-xl">
        <h3 className="text-2xl font-display mb-10 border-b pb-4">Nouvel Article</h3>
        <form onSubmit={handleSubmit} className="space-y-8">
          <Input label="Titre de l'Actualité" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} />
          <Input label="URL de l'image (Unsplash ou autre)" value={formData.image_url} onChange={(e) => setFormData({...formData, image_url: e.target.value})} />
          <div>
            <label className="text-gray-400 text-[10px] uppercase mb-2 block">Contenu de l'article</label>
            <textarea 
              rows="8" 
              className="w-full border p-4 outline-none focus:border-mabe-gold"
              value={formData.content}
              onChange={(e) => setFormData({...formData, content: e.target.value})}
            />
          </div>
          <Button type="submit" variant="primary" className="w-full">{loading ? 'Publication...' : 'Mettre en ligne'}</Button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default NewsManager;