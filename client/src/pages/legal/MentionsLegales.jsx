import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function MentionsLegales() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-[#fcfaf6] min-h-screen pt-32 pb-24 text-[#1a1a1a]">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* En-tête */}
        <div className="mb-16 border-b border-gray-200 pb-8">
          <span className="text-[#C9A227] text-[10px] font-bold uppercase tracking-[0.4em] mb-3 block font-sans">
            Cadre Juridique
          </span>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter font-sans">
            Mentions Légales
          </h1>
          <div className="w-16 h-[1px] bg-[#C9A227] mt-6" />
        </div>

        {/* Contenu juridique */}
        <div className="space-y-10 text-gray-700 font-sans font-light text-sm md:text-base leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-lg font-bold uppercase tracking-wide text-gray-900 font-sans">1. Présentation de l'entreprise</h2>
            <p>
              Le présent site web est édité par le conglomérat <strong>EXCELENCIA MABE GROUP</strong>, dédié à l'excellence opérationnelle et à la fusion stratégique multisectorielle.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li><strong>Siège social :</strong> Bangui, République Centrafricaine (RCA)</li>
              <li><strong>RCCM :</strong> RCBG2025B2905</li>
              <li><strong>NIU :</strong> 2362025M38832R</li>
              <li><strong>Contact direct :</strong> contact@excelenciamabe.org / +236 74 38 67 38</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold uppercase tracking-wide text-gray-900 font-sans">2. Hébergement</h2>
            <p>
              Le site est hébergé sur des infrastructures cloud sécurisées garantissant haute disponibilité et performance. Pour toute question relative à l'hébergement, veuillez contacter l'administrateur technique du site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold uppercase tracking-wide text-gray-900 font-sans">3. Propriété intellectuelle</h2>
            <p>
              L'ensemble des contenus figurant sur ce site (textes, images, graphismes, logos, vidéos, icônes, logiciels) est la propriété exclusive d'EXCELENCIA MABE GROUP ou de ses partenaires. Toute reproduction, représentation, modification ou adaptation, intégrale ou partielle, est strictement interdite sans autorisation écrite préalable.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold uppercase tracking-wide text-gray-900 font-sans">4. Limitation de responsabilité</h2>
            <p>
              EXCELENCIA MABE GROUP s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, la société décline toute responsabilité en cas d'erreurs, d'omissions ou d'indisponibilité temporaire des services.
            </p>
          </section>

        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <Link to="/" className="text-[10px] uppercase tracking-widest text-[#C9A227] font-bold hover:underline">
            ← Retour à l'accueil
          </Link>
        </div>

      </div>
    </div>
  );
}