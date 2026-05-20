import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, ArrowUpRight } from 'lucide-react';

const eventsData = [
  {
    id: 1,
    title: "Masterclass Fiscale & Juridique 2026",
    date: "25 Avril 2026",
    time: "09:00 - 17:00",
    location: "Azalaï Hotel, Abidjan",
    category: "Formation",
    status: "Ouvert",
    price: "75.000 FCFA",
    image: "https://images.unsplash.com/photo-1591115765373-520b7a217294?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Forum de l'Investissement Industriel",
    date: "12 Mai 2026",
    time: "10:00 - 18:00",
    location: "Siège Mabe Group",
    category: "Business",
    status: "À venir",
    price: "Sur invitation",
    image: "https://images.unsplash.com/photo-1475721027187-4024733924f3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Workshop Digital : IA & Marketing",
    date: "05 Juin 2026",
    time: "14:00 - 19:00",
    location: "Mabe Hub Digital",
    category: "Workshop",
    status: "Complet",
    price: "45.000 FCFA",
    image: "https://images.unsplash.com/photo-1540575861501-7ad05823c23d?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Events() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-[#FCFAF6] min-h-screen pt-24 md:pt-40 pb-20 md:pb-32 text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 md:mb-32 text-center">
          <span className="text-[#C9A227] text-[9px] md:text-[10px] uppercase tracking-[0.5em] font-bold block mb-4 md:mb-6">Agenda Corporate</span>
          <h1 className="text-4xl md:text-8xl font-black uppercase tracking-tighter mb-6 md:mb-8 italic">Événements</h1>
          <p className="text-gray-500 text-sm md:text-base font-light max-w-lg mx-auto leading-relaxed">
            L'excellence est une question de présence. Découvrez nos prochains rendez-vous stratégiques et intellectuels au cœur de Bangui.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-20 md:mb-32">
          {eventsData.map((event) => (
            <div key={event.id} className="group bg-white border border-[#1A1A1A]/5 p-2 transition-all duration-700 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
              <div className="relative aspect-[4/3] overflow-hidden mb-6">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover grayscale transition-transform duration-[1.5s] group-hover:scale-105 group-hover:grayscale-0" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 border border-[#1A1A1A]/10 text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-bold">
                  {event.status}
                </div>
              </div>
              <div className="px-4 pb-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] text-[#C9A227] font-bold">{event.category}</span>
                  <span className="text-[8px] md:text-[9px] uppercase text-gray-400">{event.date}</span>
                </div>
                <h3 className="text-base md:text-lg font-bold uppercase tracking-tight mb-6 leading-tight group-hover:text-[#C9A227] transition-colors">
                  {event.title}
                </h3>
                <div className="space-y-2 mb-8">
                  <div className="flex items-center gap-3 text-gray-500 text-[9px] md:text-[10px]">
                    <MapPin className="w-3 h-3" /> {event.location}
                  </div>
                  <div className="flex items-center gap-3 text-gray-500 text-[9px] md:text-[10px]">
                    <Clock className="w-3 h-3" /> {event.time}
                  </div>
                </div>
                <div className="border-t border-[#1A1A1A]/5 pt-6 flex justify-between items-center">
                  <span className="text-xs font-bold">{event.price}</span>
                  <div className="p-2 border border-[#1A1A1A]/10 hover:border-[#C9A227] hover:text-[#C9A227] transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border border-[#1A1A1A]/10 p-8 md:p-16 text-center hover:border-[#C9A227]/30 transition-all duration-500 bg-white">
          <h3 className="text-lg md:text-xl uppercase tracking-[0.3em] font-bold mb-4 md:mb-6">Service sur-mesure</h3>
          <p className="text-gray-500 text-xs md:text-sm max-w-md mx-auto mb-8 md:mb-10 leading-relaxed">
            Pour toute demande de privatisation de nos espaces ou pour l'organisation d'événements privés.
          </p>
          <Link to="/contact" className="px-8 md:px-12 py-3 md:py-4 border border-[#1A1A1A] text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#1A1A1A] hover:text-white transition-all">
            Nous consulter
          </Link>
        </div>
      </div>
    </div>
  );
}