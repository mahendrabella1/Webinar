import { RegistrationProvider } from './context/RegistrationContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Process from './components/Process';
import StatsStrip from './components/StatsStrip';
import Speakers from './components/Speakers';
import Agenda from './components/Agenda';
import Testimonials from './components/Testimonials';
import Countdown from './components/Countdown';
import ResearchAreas from './components/ResearchAreas';
import OneGraspConferences from './components/OneGraspConferences';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function AppContent() {
  return (
    <div className="bg-[#050505] min-h-screen font-sans antialiased">

      {/* ── ABOVE FOLD — eager loaded ──────────────────────────────────── */}
      <Navbar />
      <Hero />

      {/* ── BELOW FOLD ──────────────── */}

      {/* 2. Process: 4-stage journey */}
      <Process />

      {/* 3. StatsStrip: global conference facts — builds curiosity before speakers */}
      <StatsStrip />

      {/* 4. Speakers: the 4 educators */}
      <Speakers />

      {/* 5. Agenda: webinar agenda */}
      <Agenda />

      {/* Reviews between Agenda and Benefits */}
      <Testimonials />

      {/* 6+7. Countdown: 6 Powerful Benefits grid → countdown timer */}
      <Countdown />

      {/* 8. Topics We Cover in this webinar */}
      <ResearchAreas />

      {/* ── Remaining sections ─────────────────────────────────────────── */}

      <OneGraspConferences />

      <FAQ />

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
