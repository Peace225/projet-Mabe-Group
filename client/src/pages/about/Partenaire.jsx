import React, { useEffect, useState } from 'react';

export default function Partenaire() {
  const [formData, setFormData] = useState({
    nom: '',
    entreprise: '',
    email: '',
    telephone: '',
    typePartenariat: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Demande de partenariat envoyée :", formData);
    // Optionnel : Intégration d'un toast premium ou notification UI à la place de l'alert native
    alert("Votre proposition a été transmise à la Direction Générale.");
  };

  return (
    <div className="bg-[#FCFAF6] min-h-screen pt-40 pb-32 relative overflow-hidden text-[#1A1A1A] antialiased">
      
      {/* Halos d'ambiance organiques et discrets */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#C9A227]/3 blur-[160px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-[#C9A227]/2 blur-[140px] rounded-full translate-y-1/3 -translate-x-1/4 pointer-events-none mix-blend-multiply" />

      {/* --- SECTION INTRO (ÉDITORIAL) --- */}
      <section className="relative px-6 md:px-12 max-w-7xl mx-auto mb-36 z-10">
        <div className="flex flex-col items-start relative pl-6 md:pl-10">
          <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#C9A227] to-transparent" />
          
          <span className="text-[#C9A227] uppercase tracking-[0.5em] text-[10px] mb-6 font-bold block">
            Alliances Stratégiques
          </span>
          <h1 className="text-[#1A1A1A] font-black text-5xl md:text-8xl uppercase tracking-tighter leading-[0.85] mb-10">
            Bâtir <br />
            <span className="text-gray-300 font-light font-serif italic lowercase">l'</span>avenir
          </h1>
          <p className="text-[#525252] max-w-2xl text-base md:text-lg leading-relaxed font-light tracking-wide">
            EXCELENCIA MABE GROUP cultive des collaborations avec des institutions et des investisseurs visionnaires pour transformer des opportunités sectorielles en succès commerciaux d'envergure.
          </p>
        </div>
      </section>

      {/* --- OPPORTUNITÉS (CARTES DESIGN MINIMALISTE) --- */}
      <section className="max-w-7xl mx-auto px-6 mb-44 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            {
              num: "01",
              title: "Investissement",
              text: "Accédez à des projets industriels et e-commerce à forte rentabilité avec une gestion transparente et rigoureuse."
            },
            {
              num: "02",
              title: "Expertise Tech",
              text: "Devenez partenaire technologique pour nos solutions de marketing digital et nos plateformes de logistique urbaine."
            },
            {
              num: "03",
              title: "Distribution",
              text: "Rejoignez notre réseau de commerce de détail pour distribuer des marques de prestige sur les marchés émergents."
            }
          ].map((item, i) => (
            <div 
              key={i} 
              className="group relative p-10 bg-white border border-[#1A1A1A]/5 shadow-[0_15px_40px_rgba(0,0,0,0.01)] rounded-sm transition-all duration-700 hover:-translate-y-2 hover:border-[#C9A227]/30 hover:shadow-[0_30px_60px_rgba(0,0,0,0.02)]"
            >
              <span className="text-[#C9A227] font-black text-3xl block mb-8 opacity-20 group-hover:opacity-100 transition-all duration-500 tracking-tighter">
                {item.num}
              </span>
              <h3 className="text-[#1A1A1A] text-lg font-bold uppercase tracking-widest mb-5 group-hover:text-[#C9A227] transition-colors duration-300">
                {item.title}
              </h3>
              <div className="w-6 h-[1px] bg-[#1A1A1A]/10 mb-6 group-hover:w-12 group-hover:bg-[#C9A227] transition-all duration-500" />
              <p className="text-gray-400 text-sm leading-relaxed font-light group-hover:text-[#525252] transition-colors duration-500">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- FORMULAIRE BUSINESS (MONOLITHE BLANC ÉPURÉ) --- */}
      <section className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="bg-white border border-[#1A1A1A]/5 p-10 md:p-20 shadow-[0_30px_70px_rgba(0,0,0,0.02)] rounded-sm">
          
          <div className="mb-20 text-center">
            <h2 className="text-[#1A1A1A] font-black text-2xl md:text-3xl uppercase tracking-tighter mb-3">
              Dossier de Partenariat
            </h2>
            <p className="text-[#C9A227] text-[9px] font-bold uppercase tracking-[0.4em]">Étude Prioritaire de votre Proposition</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              
              {/* Nom */}
              <div className="relative group">
                <input 
                  type="text" 
                  name="nom" 
                  onChange={handleChange}
                  className="peer w-full bg-transparent border-b border-[#1A1A1A]/10 py-3 text-[#1A1A1A] font-light focus:outline-none focus:border-[#C9A227] transition-colors placeholder-transparent text-sm"
                  placeholder="Nom"
                  required
                />
                <label className="absolute left-0 -top-4 text-[9px] text-[#C9A227] uppercase tracking-[0.2em] font-bold transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-[#C9A227]">
                  Nom du Dirigeant
                </label>
              </div>

              {/* Organisation */}
              <div className="relative group">
                <input 
                  type="text" 
                  name="entreprise" 
                  onChange={handleChange}
                  className="peer w-full bg-transparent border-b border-[#1A1A1A]/10 py-3 text-[#1A1A1A] font-light focus:outline-none focus:border-[#C9A227] transition-colors placeholder-transparent text-sm"
                  placeholder="Organisation"
                  required
                />
                <label className="absolute left-0 -top-4 text-[9px] text-[#C9A227] uppercase tracking-[0.2em] font-bold transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-[#C9A227]">
                  Organisation / Structure
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              
              {/* Email */}
              <div className="relative group">
                <input 
                  type="email" 
                  name="email" 
                  onChange={handleChange}
                  className="peer w-full bg-transparent border-b border-[#1A1A1A]/10 py-3 text-[#1A1A1A] font-light focus:outline-none focus:border-[#C9A227] transition-colors placeholder-transparent text-sm"
                  placeholder="Email"
                  required
                />
                <label className="absolute left-0 -top-4 text-[9px] text-[#C9A227] uppercase tracking-[0.2em] font-bold transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-[#C9A227]">
                  Email Professionnel
                </label>
              </div>

              {/* Type de Partenariat */}
              <div className="relative group">
                <select 
                  name="typePartenariat"
                  onChange={handleChange}
                  className="peer w-full bg-transparent border-b border-[#1A1A1A]/10 py-3 text-[#1A1A1A]/70 font-light focus:outline-none focus:border-[#C9A227] cursor-pointer text-sm native-select"
                  required
                >
                  <option value="" className="bg-white text-[#1A1A1A]">Nature du Projet...</option>
                  <option value="invest" className="bg-white text-[#1A1A1A]">Investissement</option>
                  <option value="tech" className="bg-white text-[#1A1A1A]">Technologie & Digital</option>
                  <option value="industriel" className="bg-white text-[#1A1A1A]">Développement Industriel</option>
                  <option value="retail" className="bg-white text-[#1A1A1A]">Commerce & Distribution</option>
                </select>
                <label className="absolute left-0 -top-4 text-[9px] text-[#C9A227] uppercase tracking-[0.2em] font-bold">
                  Pôle d'Intérêt
                </label>
              </div>
            </div>

            {/* Message */}
            <div className="relative group">
              <textarea 
                name="message" 
                rows="3"
                onChange={handleChange}
                className="peer w-full bg-transparent border-b border-[#1A1A1A]/10 py-3 text-[#1A1A1A] font-light focus:outline-none focus:border-[#C9A227] transition-all resize-none placeholder-transparent text-sm"
                placeholder="Message"
                required
              />
              <label className="absolute left-0 -top-4 text-[9px] text-[#C9A227] uppercase tracking-[0.2em] font-bold transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-[#C9A227]">
                Vision de la Synergie
              </label>
            </div>

            {/* Bouton Premium avec Animation Inversée Épurée */}
            <div className="flex justify-center pt-8">
              <button 
                type="submit"
                className="group relative px-14 py-5 bg-[#1A1A1A] text-white font-bold uppercase text-[9px] tracking-[0.4em] overflow-hidden transition-all duration-400 rounded-sm shadow-sm hover:shadow-md"
              >
                <span className="relative z-10 group-hover:text-[#1A1A1A] transition-colors duration-400">Soumettre le Projet</span>
                <div className="absolute inset-0 bg-[#C9A227] translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FILIGRANE SOUVERAIN XXL BASE DE PAGE */}
      <div className="absolute -bottom-16 -left-16 text-[18rem] font-black text-[#1A1A1A]/[0.015] pointer-events-none select-none uppercase tracking-tighter font-sans">
        Mabe
      </div>

    </div>
  );
}