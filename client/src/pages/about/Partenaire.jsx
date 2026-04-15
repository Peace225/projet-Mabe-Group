import React, { useEffect, useState } from 'react';

const Partenaire = () => {
  const [formData, setFormData] = useState({
    nom: '',
    entreprise: '',
    email: '',
    telephone: '',
    typePartenariat: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Demande de partenariat envoyée :", formData);
    alert("Votre proposition a été transmise à la Direction Générale.");
  };

  return (
    <div className="bg-[#050505] min-h-screen pt-32 pb-24 relative overflow-hidden">
      
      {/* Background Glows (Ambiance Luxe) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-mabe-gold/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-mabe-gold/5 blur-[150px] rounded-full translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      {/* --- SECTION INTRO --- */}
      <section className="relative px-6 md:px-12 max-w-7xl mx-auto mb-32 z-10">
        <div className="flex flex-col items-start relative pl-6 md:pl-10">
          <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-gradient-to-b from-mabe-gold to-transparent" />
          
          <h4 className="text-mabe-gold uppercase tracking-[0.4em] text-[10px] mb-6 font-sans font-semibold">
            Alliances Stratégiques
          </h4>
          <h1 className="text-white font-sans font-black text-5xl md:text-8xl uppercase tracking-tighter leading-[0.9] mb-8">
            Bâtir <br />
            <span className="text-white/40 font-light italic">L'Avenir</span>
          </h1>
          <p className="text-white/50 max-w-2xl text-base md:text-lg leading-relaxed font-sans font-light tracking-wide italic">
            MABE GROUP cultive des collaborations avec des institutions et des investisseurs visionnaires pour transformer des opportunités sectorielles en succès commerciaux d'envergure.
          </p>
        </div>
      </section>

      {/* --- OPPORTUNITÉS (CARTES ÉPURÉES) --- */}
      <section className="max-w-7xl mx-auto px-6 mb-40 relative z-10">
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
            <div key={i} className="group relative p-10 bg-white/[0.02] border border-white/5 backdrop-blur-sm rounded-sm transition-all duration-700 hover:-translate-y-2 hover:border-mabe-gold/30">
              <span className="text-mabe-gold font-sans font-black text-4xl block mb-8 opacity-40 group-hover:opacity-100 transition-opacity">
                {item.num}
              </span>
              <h3 className="text-white text-xl font-sans font-bold uppercase tracking-widest mb-6">
                {item.title}
              </h3>
              <div className="w-8 h-[1px] bg-white/10 mb-6 group-hover:w-16 group-hover:bg-mabe-gold transition-all duration-500" />
              <p className="text-white/40 text-sm leading-relaxed font-sans font-light group-hover:text-white/60 transition-colors">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- FORMULAIRE BUSINESS (STYLE ÉDITORIAL) --- */}
      <section className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="bg-white/[0.02] border border-white/5 p-10 md:p-20 shadow-[0_40px_100px_rgba(0,0,0,0.5)] rounded-sm">
          
          <div className="mb-20 text-center">
            <h2 className="text-white font-sans font-black text-3xl md:text-4xl uppercase tracking-tighter mb-4">
              Dossier de Partenariat
            </h2>
            <p className="text-mabe-gold text-[10px] font-sans font-bold uppercase tracking-[0.4em]">Étude Prioritaire de votre Proposition</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Nom */}
              <div className="relative group">
                <input 
                  type="text" 
                  name="nom" 
                  onChange={handleChange}
                  className="peer w-full bg-transparent border-b border-white/10 py-4 text-white font-sans font-light focus:outline-none focus:border-mabe-gold transition-colors placeholder-transparent"
                  placeholder="Nom"
                  required
                />
                <label className="absolute left-0 -top-4 text-[9px] text-mabe-gold uppercase tracking-[0.2em] font-black transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:text-white/20 peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-mabe-gold">
                  Nom du Dirigeant
                </label>
              </div>

              {/* Organisation */}
              <div className="relative group">
                <input 
                  type="text" 
                  name="entreprise" 
                  onChange={handleChange}
                  className="peer w-full bg-transparent border-b border-white/10 py-4 text-white font-sans font-light focus:outline-none focus:border-mabe-gold transition-colors placeholder-transparent"
                  placeholder="Organisation"
                  required
                />
                <label className="absolute left-0 -top-4 text-[9px] text-mabe-gold uppercase tracking-[0.2em] font-black transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:text-white/20 peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-mabe-gold">
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
                  className="peer w-full bg-transparent border-b border-white/10 py-4 text-white font-sans font-light focus:outline-none focus:border-mabe-gold transition-colors placeholder-transparent"
                  placeholder="Email"
                  required
                />
                <label className="absolute left-0 -top-4 text-[9px] text-mabe-gold uppercase tracking-[0.2em] font-black transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:text-white/20 peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-mabe-gold">
                  Email Professionnel
                </label>
              </div>

              {/* Type de Partenariat */}
              <div className="relative group">
                <select 
                  name="typePartenariat"
                  onChange={handleChange}
                  className="peer w-full bg-transparent border-b border-white/10 py-4 text-white/50 font-sans font-light focus:outline-none focus:border-mabe-gold cursor-pointer"
                  required
                >
                  <option value="" className="bg-black">Nature du Projet...</option>
                  <option value="invest" className="bg-black">Investissement</option>
                  <option value="tech" className="bg-black">Technologie & Digital</option>
                  <option value="industriel" className="bg-black">Développement Industriel</option>
                  <option value="retail" className="bg-black">Commerce & Distribution</option>
                </select>
                <label className="absolute left-0 -top-4 text-[9px] text-mabe-gold uppercase tracking-[0.2em] font-black">
                  Pôle d'Intérêt
                </label>
              </div>
            </div>

            {/* Message */}
            <div className="relative group">
              <textarea 
                name="message" 
                rows="4"
                onChange={handleChange}
                className="peer w-full bg-transparent border-b border-white/10 py-4 text-white font-sans font-light focus:outline-none focus:border-mabe-gold transition-all resize-none placeholder-transparent"
                placeholder="Message"
                required
              />
              <label className="absolute left-0 -top-4 text-[9px] text-mabe-gold uppercase tracking-[0.2em] font-black transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:text-white/20 peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-mabe-gold">
                Vision de la Synergie
              </label>
            </div>

            <div className="flex justify-center pt-10">
              <button 
                type="submit"
                className="group relative px-16 py-6 bg-mabe-gold text-mabe-dark font-sans font-black uppercase text-[10px] tracking-[0.4em] overflow-hidden transition-all duration-300 shadow-2xl"
              >
                <span className="relative z-10">Soumettre le Projet</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FILIGRANE DESIGN XXL */}
      <div className="absolute -bottom-20 -left-20 text-[20rem] font-sans font-black text-white/[0.01] pointer-events-none select-none uppercase tracking-tighter">
        Mabe
      </div>

    </div>
  );
};

export default Partenaire;