import React, { useEffect, useState } from 'react';
import AdminLayout from '../AdminLayout';
import { supabase } from '../../../lib/supabase';

const LeadsList = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    const fetchLeads = async () => {
      const { data } = await supabase.from('leads').select('*').order('created_at', { ascending: false });
      if (data) setLeads(data);
    };
    fetchLeads();
  }, []);

  return (
    <AdminLayout>
      <h2 className="text-3xl font-display mb-10 uppercase">Contacts Partenaires</h2>
      <div className="bg-white overflow-hidden shadow-sm">
        <table className="w-full text-left">
          <thead className="bg-mabe-dark text-white text-[10px] uppercase tracking-widest">
            <tr>
              <th className="p-4">Nom</th>
              <th className="p-4">Email</th>
              <th className="p-4">Pôle</th>
              <th className="p-4">Message</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {leads.map((lead) => (
              <tr key={lead.id} className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-4 font-bold">{lead.full_name}</td>
                <td className="p-4 text-gray-500">{lead.email}</td>
                <td className="p-4"><span className="bg-mabe-gold/10 text-mabe-gold px-2 py-1 text-[10px] uppercase font-bold">{lead.pole_interest}</span></td>
                <td className="p-4 text-gray-400 italic">{lead.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default LeadsList;