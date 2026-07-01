import { lazy, Suspense } from 'react';
import { RegistrationProvider } from './context/RegistrationContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// ─── Lazy-loaded below-fold sections ─────────────────────────────────────────
// Ordered exactly per the approved flow:
// 1  Hero (eager)
// 2  Process — 4 stages
// 3  StatsStrip — global conference facts (curiosity builder)
// 4  Speakers — 4 educators
// 5  Agenda — webinar agenda
// 6  Testimonials — reviews + pull-quote stat
// 7  Countdown — 6 powerful benefits grid → timer
// 8  ResearchAreas — Topics We Cover
// ── divider ──
// 9  WhyChoose
// 10 WhyAttend
// 11 FAQ
// 12 RegistrationCTA
// 13 OneGraspConferences
// 14 Footer

const Process            = lazy(() => import('./components/Process'));
const StatsStrip         = lazy(() => import('./components/StatsStrip'));
const Speakers           = lazy(() => import('./components/Speakers'));
const Agenda             = lazy(() => import('./components/Agenda'));
const Testimonials       = lazy(() => import('./components/Testimonials'));
const Countdown          = lazy(() => import('./components/Countdown'));
const ResearchAreas      = lazy(() => import('./components/ResearchAreas'));
const WhyChoose          = lazy(() => import('./components/WhyChoose'));
const WhyAttend          = lazy(() => import('./components/WhyAttend'));
const FAQ                = lazy(() => import('./components/FAQ'));
const RegistrationCTA    = lazy(() => import('./components/RegistrationCTA'));
const OneGraspConferences = lazy(() => import('./components/OneGraspConferences'));
const Footer             = lazy(() => import('./components/Footer'));

function SectionLoader() {
  return (
    <div
      style={{ minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      aria-hidden="true"
    />
  );
}

function AppContent() {
  return (
    <div className="bg-[#050505] min-h-screen font-sans antialiased">

      {/* ── ABOVE FOLD — eager loaded ──────────────────────────────────── */}
      <Navbar />
      <Hero />

      {/* ── BELOW FOLD — lazy loaded in conversion order ──────────────── */}

      {/* 2. Process: 4-stage journey */}
      <Suspense fallback={<SectionLoader />}>
        <Process />
      </Suspense>

      {/* 3. StatsStrip: global conference facts — builds curiosity before speakers */}
      <Suspense fallback={<SectionLoader />}>
        <StatsStrip />
      </Suspense>

      {/* 4. Speakers: the 4 educators */}
      <Suspense fallback={<SectionLoader />}>
        <Speakers />
      </Suspense>

      {/* 5. Agenda: webinar agenda */}
      <Suspense fallback={<SectionLoader />}>
        <Agenda />
      </Suspense>

      {/* Reviews between Agenda and Benefits */}
      <Suspense fallback={<SectionLoader />}>
        <Testimonials />
      </Suspense>

      {/* 6+7. Countdown: 6 Powerful Benefits grid → countdown timer */}
      <Suspense fallback={<SectionLoader />}>
        <Countdown />
      </Suspense>

      {/* 8. Topics We Cover in this webinar */}
      <Suspense fallback={<SectionLoader />}>
        <ResearchAreas />
      </Suspense>

      {/* ── Remaining sections ─────────────────────────────────────────── */}

      <Suspense fallback={<SectionLoader />}>
        <WhyChoose />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <WhyAttend />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <FAQ />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <RegistrationCTA />
      </Suspense>

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
