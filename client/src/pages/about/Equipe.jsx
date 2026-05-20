import React, { useEffect } from 'react';

export default function Equipe() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const leadership = [
    { id: 1, name: "Mlle. Excellencia MABEKONDIASSON", role: "Directrice Générale", description: "Visionnaire stratégique, elle pilote l'expansion et l'excellence opérationnelle du Groupe MABE.", image: "/images/hero.jpeg", socials: { linkedin: "#", facebook: "#", twitter: "#" } },
    { id: 2, name: "[Nom du DAF]", role: "Directeur Financier", description: "Garant de la solidité et de la transparence financière de nos investissements.", image: "/images/daf.jpg", socials: { linkedin: "#", facebook: "#" } },
    { id: 3, name: "[Nom Dir. Marketing]", role: "Directeur Marketing", description: "Expert en stratégies d'influence et branding, il redéfinit l'image du Groupe.", image: "/images/marketing.jpg", socials: { linkedin: "#", facebook: "#", instagram: "#" } },
    { id: 4, name: "[Nom Dir. Industriel]", role: "Directeur Industriel", description: "Ingénieur de formation, il optimise nos chaînes de valeur et solutions durables.", image: "/images/industriel.jpg", socials: { linkedin: "#" } },
    { id: 5, name: "[Nom Dir. Commerce]", role: "Directeur Commerce", description: "Spécialiste du retail haut de gamme, il développe nos réseaux de distribution.", image: "/images/commerce.jpg", socials: { linkedin: "#", facebook: "#" } },
    { id: 6, name: "[Nom RP]", role: "Relations Publiques", description: "Voix du Groupe MABE, elle gère nos relations avec les institutions et partenaires.", image: "/images/pr.jpg", socials: { linkedin: "#", facebook: "#", twitter: "#" } }
  ];

  const consultants = [
    { id: 7, name: "Brad Serguei KOKOLIKO", role: "Consultant Innovation Tech", description: "Expert en architecture digitale, il conçoit les écosystèmes web de demain.", image: "/images/brad.jpg", socials: { linkedin: "#", facebook: "#", twitter: "#" } }
  ];

  const renderIcon = (platform) => {
    const iconClass = "w-4 h-4 md:w-5 md:h-5 fill-current";
    const icons = {
      linkedin: <svg className={iconClass} viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>,
      facebook: <svg className={iconClass} viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/></svg>,
      twitter: <svg className={iconClass} viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
      instagram: <svg className={iconClass} viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
    };
    return icons[platform] || null;
  };

  const renderCard = (member) => (
    <div key={member.id} className="bg-white p-6 border border-[#1A1A1A]/5 shadow-sm hover:border-[#C9A227]/30 transition-all duration-300">
      <img src={member.image} alt={member.name} className="w-full h-56 object-cover mb-6 grayscale hover:grayscale-0 transition-all duration-500" />
      <h3 className="text-lg font-bold uppercase tracking-tight">{member.name}</h3>
      <p className="text-[#C9A227] text-[9px] uppercase tracking-widest font-bold mb-4">{member.role}</p>
      <p className="text-gray-500 text-xs leading-relaxed mb-6 h-16">{member.description}</p>
      <div className="flex gap-4 border-t border-[#1A1A1A]/5 pt-4">
        {Object.entries(member.socials).map(([platform, url]) => (
          <a key={platform} href={url} className="text-[#1A1A1A]/30 hover:text-[#C9A227] transition-colors">{renderIcon(platform)}</a>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-[#FCFAF6] min-h-screen pt-24 md:pt-40 pb-20 md:pb-32 px-6">
      {/* Section Leadership */}
      <section className="max-w-7xl mx-auto mb-20">
        <h2 className="text-[#1A1A1A] font-bold text-xs uppercase tracking-[0.3em] mb-12 border-l-2 border-[#C9A227] pl-4">Direction & Exécutif</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {leadership.map(renderCard)}
        </div>
      </section>

      {/* Section Consultants */}
      <section className="max-w-7xl mx-auto">
        <h2 className="text-[#C9A227] font-bold text-xs uppercase tracking-[0.3em] mb-12 border-l-2 border-[#C9A227] pl-4">Écosystème & Consultants</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {consultants.map(renderCard)}
        </div>
      </section>
    </div>
  );
}