import { lazy, Suspense } from 'react';
import { RegistrationProvider } from './context/RegistrationContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Below-fold components loaded lazily — JS only fetched when user scrolls
const Countdown = lazy(() => import('./components/Countdown'));
const Speakers = lazy(() => import('./components/Speakers'));
const Highlights = lazy(() => import('./components/Highlights'));
const Agenda = lazy(() => import('./components/Agenda'));
const ResearchAreas = lazy(() => import('./components/ResearchAreas'));
const FAQ = lazy(() => import('./components/FAQ'));
const OneGraspConferences = lazy(() => import('./components/OneGraspConferences'));
const Footer = lazy(() => import('./components/Footer'));

// Minimal skeleton shown while below-fold chunks load
function SectionLoader() {
  return (
    <div
      style={{
        height: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      aria-hidden="true"
    />
  );
}

function AppContent() {
  return (
    <div className="bg-[#050505] min-h-screen font-sans antialiased">
      {/* Above-fold — eagerly loaded */}
      <Navbar />
      <Hero />

      {/* Below-fold — lazy loaded */}
      <Suspense fallback={<SectionLoader />}>
        <Countdown />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Speakers />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Highlights />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Agenda />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <ResearchAreas />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <FAQ />
      </Suspense>
      {/* After Webinar: OneGrasp Conferences */}
      <Suspense fallback={<SectionLoader />}>
        <OneGraspConferences />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
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
