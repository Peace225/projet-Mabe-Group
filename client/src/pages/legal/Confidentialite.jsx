import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Confidentialite() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-[#fcfaf6] min-h-screen pt-32 pb-24 text-[#1a1a1a]">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* En-tête */}
        <div className="mb-16 border-b border-gray-200 pb-8">
          <span className="text-[#C9A227] text-[10px] font-bold uppercase tracking-[0.4em] mb-3 block font-sans">
            Protection des Données & Privacy
          </span>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter font-sans">
            Politique de Confidentialité
          </h1>
          <div className="w-16 h-[1px] bg-[#C9A227] mt-6" />
        </div>

        {/* Contenu */}
        <div className="space-y-10 text-gray-700 font-sans font-light text-sm md:text-base leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-lg font-bold uppercase tracking-wide text-gray-900 font-sans">1. Collecte des données personnelles</h2>
            <p>
              Dans le cadre de ses activités et de ses formulaires de contact ou d'inscription à la newsletter, EXCELENCIA MABE GROUP est amené à collecter des informations strictement nécessaires (nom, e-mail, téléphone). Ces données sont traitées dans le respect des standards de sécurité et de confidentialité les plus stricts.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold uppercase tracking-wide text-gray-900 font-sans">2. Finalité du traitement</h2>
            <p>
              Les informations recueillies font l'objet d'un traitement informatique destiné à :
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>Répondre aux demandes formulées via le formulaire de contact.</li>
              <li>Transmettre des actualités institutionnelles et des insights du groupe (si consenti).</li>
              <li>Améliorer l'expérience utilisateur et la sécurité des services web.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold uppercase tracking-wide text-gray-900 font-sans">3. Confidentialité et Sécurité (Privacy-by-Design)</h2>
            <p>
              Conformément à notre exigence d'excellence opérationnelle, nous intégrons la sécurité dès la conception de nos architectures logicielles. Vos données ne sont ni cédées, ni vendues, ni louées à des tiers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold uppercase tracking-wide text-gray-900 font-sans">4. Droits des utilisateurs</h2>
            <p>
              Vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant. Pour exercer ce droit, vous pouvez nous contacter directement par e-mail à l'adresse : <strong>contact@excelenciamabe.org</strong>.
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