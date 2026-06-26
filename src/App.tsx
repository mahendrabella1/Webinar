import { RegistrationProvider } from './context/RegistrationContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Speakers from './components/Speakers';
import Highlights from './components/Highlights';
import Agenda from './components/Agenda';
import ResearchAreas from './components/ResearchAreas';
import FAQ from './components/FAQ';
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
      <Highlights />
      <Agenda />
      <ResearchAreas />
      <FAQ />
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
