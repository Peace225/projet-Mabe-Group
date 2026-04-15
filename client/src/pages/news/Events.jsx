import React, { useEffect } from 'react';
import { Calendar, MapPin, Clock, Ticket } from 'lucide-react';

const eventsData = [
  {
    id: 1,
    title: "Masterclass Fiscale & Juridique 2026",
    date: "25 Avril 2026",
    time: "09:00 - 17:00",
    location: "Azalaï Hotel, Abidjan",
    category: "Formation",
    status: "Inscriptions Ouvertes",
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
    status: "Bientôt",
    price: "Sur Invitation",
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

const EventCard = ({ event }) => {
  const isSoldOut = event.status === "Complet";
  const isComingSoon = event.status === "Bientôt";

  return (
    <div className="group relative bg-white/[0.02] border border-white/5 rounded-sm overflow-hidden transition-all duration-500 hover:border-mabe-gold/30">
      {/* Image de l'événement */}
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
        
        {/* Badge de Statut */}
        <div className={`absolute top-4 right-4 px-3 py-1 text-[8px] font-sans font-black uppercase tracking-widest backdrop-blur-md border ${
          isSoldOut ? 'bg-red-500/20 border-red-500/50 text-red-500' : 
          isComingSoon ? 'bg-blue-500/20 border-blue-500/50 text-blue-500' : 
          'bg-mabe-gold/20 border-mabe-gold/50 text-mabe-gold'
        }`}>
          {event.status}
        </div>
      </div>

      {/* Détails */}
      <div className="p-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-mabe-gold text-[10px] font-sans font-bold uppercase tracking-widest">{event.category}</span>
          <span className="w-4 h-[1px] bg-white/20" />
          <span className="text-white/40 text-[10px] font-sans uppercase tracking-widest">{event.date}</span>
        </div>

        <h3 className="text-white font-sans font-bold text-xl mb-6 group-hover:text-mabe-gold transition-colors duration-300 uppercase leading-tight">
          {event.title}
        </h3>

        <div className="space-y-3 mb-8">
          <div className="flex items-center gap-3 text-white/50 text-xs font-sans">
            <MapPin className="w-4 h-4 text-mabe-gold" />
            {event.location}
          </div>
          <div className="flex items-center gap-3 text-white/50 text-xs font-sans">
            <Clock className="w-4 h-4 text-mabe-gold" />
            {event.time}
          </div>
          <div className="flex items-center gap-3 text-white font-sans font-bold text-sm pt-2">
            <Ticket className="w-4 h-4 text-mabe-gold" />
            {event.price}
          </div>
        </div>

        <button 
          disabled={isSoldOut || isComingSoon}
          className={`w-full py-4 text-[10px] font-sans font-black uppercase tracking-[0.2em] transition-all duration-300 border ${
            isSoldOut ? 'border-white/10 text-white/20 cursor-not-allowed' :
            isComingSoon ? 'border-white/10 text-white/40 cursor-wait' :
            'border-mabe-gold text-mabe-gold hover:bg-mabe-gold hover:text-mabe-dark'
          }`}
        >
          {isSoldOut ? 'Guichets Fermés' : isComingSoon ? 'Bientôt Disponible' : 'Réserver ma place'}
        </button>
      </div>
    </div>
  );
};

export default function Events() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#050505] min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-mabe-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <header className="mb-24 flex flex-col items-center text-center">
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent to-mabe-gold mb-8" />
          <h4 className="text-mabe-gold uppercase tracking-[0.4em] text-[10px] mb-4 font-sans font-semibold">
            Agenda Corporate
          </h4>
          <h1 className="text-white font-sans font-black text-5xl md:text-7xl uppercase tracking-tighter leading-none mb-10">
            Événements <br/> <span className="text-white/40 font-light">& Masterclass</span>
          </h1>
          <p className="max-w-2xl text-white/50 font-sans font-light leading-relaxed">
            Rejoignez l'élite décisionnelle lors de nos sessions exclusives. Network, expertise et vision stratégique au cœur d'Abidjan.
          </p>
        </header>

        {/* Prochains Événements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {eventsData.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* Bannière d'Organisation Privée */}
        <div className="relative p-12 md:p-20 bg-white/[0.02] border border-white/5 rounded-sm overflow-hidden group text-center">
          <div className="absolute inset-0 bg-gradient-to-t from-mabe-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <h3 className="text-white font-sans font-black text-3xl md:text-4xl uppercase tracking-tighter mb-6 relative z-10">
            Un événement sur mesure ?
          </h3>
          <p className="text-white/50 mb-10 font-sans font-light max-w-xl mx-auto relative z-10">
            Nous organisons vos lancements de produits, galas et séminaires d'entreprise avec la signature d'excellence de Mabe Group.
          </p>
          <button className="relative z-10 bg-white text-mabe-dark px-10 py-4 uppercase tracking-[0.2em] text-[10px] font-sans font-black hover:bg-mabe-gold transition-colors duration-300">
            Privatiser nos services
          </button>
        </div>

      </div>
    </div>
  );
}