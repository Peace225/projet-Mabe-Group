import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// --- IMPORT DES COMPOSANTS PUBLICS ---
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/home/Home';
import Marketing from './pages/marketing/Marketing';
import Industrial from './pages/industrial/Industrial';
import NgiaFood from './pages/industrial/NgiaFood';
import Immobilier from './pages/immobilier/Immobilier';
import APropos from './pages/about/APropos';
import VisionMission from './pages/about/VisionMission';
import MotDirecteur from "./pages/about/MotDirectrice";
import Equipe from './pages/about/Equipe';
import Partenaire from './pages/about/Partenaire';
import EventPage from './pages/news/Events';
import Contact from "./pages/contact/Contact";
import NewsletterPopup from './components/ui/NewsletterPopup';

// --- IMPORT DES COMPOSANTS ADMIN ---
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/dashboard/Dashboard';
import NewsManager from './pages/admin/news/NewsManager';
import ServiceManager from './pages/admin/services/ServiceManager';
import LeadsList from './pages/admin/leads/LeadsList';

/**
 * Ce composant "Wrapper" permet de masquer la Navbar et le Footer 
 * lorsqu'on se trouve dans la zone d'administration (qui a son propre menu).
 */
const AppLayout = ({ children }) => {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <div className="flex flex-col min-h-screen bg-mabe-dark">
      {/* On affiche la Navbar uniquement si on n'est pas dans l'admin */}
      {!isAdmin && <Navbar />}

      <main className="flex-grow">
        {children}
      </main>

      {/* On affiche le Footer uniquement si on n'est pas dans l'admin */}
      {!isAdmin && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppLayout>
        <NewsletterPopup />
        <Routes>
          {/* ======================= */}
          {/* VITRINE PUBLIQUE     */}
          {/* ======================= */}
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/vision-mission" element={<VisionMission />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/industrial" element={<Industrial />} />
          <Route path="/ngiafood" element={<NgiaFood />} />
          <Route path="/immobilier" element={<Immobilier />} />
          <Route path="/mot-directeur" element={<MotDirecteur />} />
          <Route path="/news/event" element={<EventPage />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/partenaire" element={<Partenaire />} />
          <Route path="/contact" element={<Contact />} />

          {/* ======================= */}
          {/* ZONE D'ADMINISTRATION */}
          {/* ======================= */}
          <Route path="/admin" element={<Login />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/news" element={<NewsManager />} />
          <Route path="/admin/services" element={<ServiceManager />} />
          <Route path="/admin/leads" element={<LeadsList />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;