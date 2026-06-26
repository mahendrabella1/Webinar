import { RegistrationProvider } from './context/RegistrationContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Speakers from './components/Speakers';
import Agenda from './components/Agenda';
import ResearchAreas from './components/ResearchAreas';
import Highlights from './components/Highlights';
import FAQ from './components/FAQ';
import RegistrationCTA from './components/RegistrationCTA';
import OneGraspConferences from './components/OneGraspConferences';
import Footer from './components/Footer';

function AppContent() {
  return (
    <div className="bg-[#050505] min-h-screen font-sans antialiased">
      <Navbar />
      {/* Webinar Landing */}
      <Hero />
      <Countdown />
      <Speakers />
      <Agenda />
      <ResearchAreas />
      <Highlights />
      <FAQ />
      <RegistrationCTA />
      {/* After Webinar: OneGrasp Conferences */}
      <OneGraspConferences />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <RegistrationProvider>
      <AppContent />
    </RegistrationProvider>
  );
}
