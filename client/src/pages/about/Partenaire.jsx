import React, { useEffect, useState } from 'react';

export default function Partenaire() {
  const [formData, setFormData] = useState({
    nom: '', entreprise: '', email: '', telephone: '', typePartenariat: '', message: ''
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Demande envoyée :", formData);
    alert("Votre proposition a été transmise à la Direction Générale.");
  };

  return (
    <div className="bg-[#FCFAF6] min-h-screen pt-24 md:pt-40 pb-20 md:pb-32 relative overflow-hidden text-[#1A1A1A] antialiased">
      
      {/* --- SECTION INTRO --- */}
      <section className="relative px-6 max-w-7xl mx-auto mb-20 md:mb-36 z-10">
        <div className="flex flex-col items-start relative pl-6">
          <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#C9A227] to-transparent" />
          
          <span className="text-[#C9A227] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[8px] md:text-[10px] mb-4 font-bold block">
            Alliances Stratégiques
          </span>
          <h1 className="text-[#1A1A1A] font-black text-4xl md:text-8xl uppercase tracking-tighter leading-[0.9] mb-6 md:mb-10">
            Bâtir <br />
            <span className="text-gray-300 font-light font-serif italic lowercase">l'</span>avenir
          </h1>
          <p className="text-[#525252] max-w-xl text-sm md:text-lg leading-relaxed font-light tracking-wide">
            EXCELENCIA MABE GROUP cultive des collaborations avec des investisseurs visionnaires pour transformer des opportunités sectorielles en succès d'envergure.
          </p>
        </div>
      </section>

      {/* --- OPPORTUNITÉS --- */}
      <section className="max-w-7xl mx-auto px-6 mb-20 md:mb-44 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { num: "01", title: "Investissement", text: "Accédez à des projets industriels à forte rentabilité avec gestion rigoureuse." },
            { num: "02", title: "Expertise Tech", text: "Devenez partenaire technologique pour nos plateformes de logistique urbaine." },
            { num: "03", title: "Distribution", text: "Rejoignez notre réseau pour distribuer des marques de prestige." }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-white border border-[#1A1A1A]/5 shadow-sm">
              <span className="text-[#C9A227] font-black text-2xl block mb-6 opacity-30">{item.num}</span>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4">{item.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed font-light">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- FORMULAIRE --- */}
      <section className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="bg-white border border-[#1A1A1A]/5 p-8 md:p-20 shadow-sm">
          <div className="mb-12 md:mb-20 text-center">
            <h2 className="text-[#1A1A1A] font-black text-xl md:text-3xl uppercase tracking-tighter mb-2">Dossier de Partenariat</h2>
            <p className="text-[#C9A227] text-[8px] font-bold uppercase tracking-[0.2em]">Étude Prioritaire</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-10 md:space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <input type="text" name="nom" onChange={handleChange} placeholder="Nom" required className="w-full bg-transparent border-b border-[#1A1A1A]/10 py-2 text-sm focus:border-[#C9A227] outline-none" />
              <input type="text" name="entreprise" onChange={handleChange} placeholder="Organisation" required className="w-full bg-transparent border-b border-[#1A1A1A]/10 py-2 text-sm focus:border-[#C9A227] outline-none" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <input type="email" name="email" onChange={handleChange} placeholder="Email" required className="w-full bg-transparent border-b border-[#1A1A1A]/10 py-2 text-sm focus:border-[#C9A227] outline-none" />
              <select name="typePartenariat" onChange={handleChange} required className="w-full bg-transparent border-b border-[#1A1A1A]/10 py-2 text-sm text-gray-400 outline-none">
                <option value="">Pôle d'Intérêt...</option>
                <option value="invest">Investissement</option>
                <option value="tech">Technologie</option>
                <option value="industriel">Industriel</option>
              </select>
            </div>

            <textarea name="message" rows="3" onChange={handleChange} placeholder="Votre vision..." required className="w-full bg-transparent border-b border-[#1A1A1A]/10 py-2 text-sm focus:border-[#C9A227] outline-none resize-none" />

            <div className="flex justify-center pt-4">
              <button type="submit" className="px-10 py-4 bg-[#1A1A1A] text-white font-bold uppercase text-[10px] tracking-[0.3em] hover:bg-[#C9A227] transition-all">
                Soumettre le Projet
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}