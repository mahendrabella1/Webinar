import { lazy, Suspense } from 'react';
import { RegistrationProvider } from './context/RegistrationContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// ─── Below-fold components — lazily loaded ────────────────────────────────────
// JS for these components is only downloaded when they are about to be rendered,
// keeping the initial bundle small and improving LCP & FID.

// Trust section (immediately after Hero — loaded eagerly-ish via Suspense)
const Trust           = lazy(() => import('./components/Trust'));
const WhyChoose       = lazy(() => import('./components/WhyChoose'));
const Process         = lazy(() => import('./components/Process'));
const Countdown       = lazy(() => import('./components/Countdown'));
const Speakers        = lazy(() => import('./components/Speakers'));
const WhyAttend       = lazy(() => import('./components/WhyAttend'));
const Agenda          = lazy(() => import('./components/Agenda'));
const ResearchAreas   = lazy(() => import('./components/ResearchAreas'));
const FAQ             = lazy(() => import('./components/FAQ'));
const RegistrationCTA = lazy(() => import('./components/RegistrationCTA'));
const OneGraspConferences = lazy(() => import('./components/OneGraspConferences'));
const Footer          = lazy(() => import('./components/Footer'));

// ─── Minimal skeleton shown while lazy chunks load ────────────────────────────
function SectionLoader() {
  return (
    <div
      style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      aria-hidden="true"
    />
  );
}

// ─── Page layout ──────────────────────────────────────────────────────────────
function AppContent() {
  return (
    <div className="bg-[#050505] min-h-screen font-sans antialiased">

      {/* ── ABOVE FOLD ──────────────────────────────────────────────────────── */}
      {/* Navbar & Hero are eagerly loaded — they are always the first paint */}
      <Navbar />
      <Hero />

      {/* ── BELOW FOLD — lazy loaded in order of visual importance ─────────── */}

      {/* 3. Trust: logos, stats, testimonials — immediate social proof */}
      <Suspense fallback={<SectionLoader />}>
        <Trust />
      </Suspense>

      {/* 4. Why Choose OneGrasp — 7 value proposition cards */}
      <Suspense fallback={<SectionLoader />}>
        <WhyChoose />
      </Suspense>

      {/* 5. Process — 4-step visual journey */}
      <Suspense fallback={<SectionLoader />}>
        <Process />
      </Suspense>

      {/* Countdown timer — urgency driver */}
      <Suspense fallback={<SectionLoader />}>
        <Countdown />
      </Suspense>

      {/* Expert Speakers */}
      <Suspense fallback={<SectionLoader />}>
        <Speakers />
      </Suspense>

      {/* 6. Benefits — What You'll Learn (WhyAttend) */}
      <Suspense fallback={<SectionLoader />}>
        <WhyAttend />
      </Suspense>

      {/* Agenda */}
      <Suspense fallback={<SectionLoader />}>
        <Agenda />
      </Suspense>

      {/* Topics / Research Areas */}
      <Suspense fallback={<SectionLoader />}>
        <ResearchAreas />
      </Suspense>

      {/* 7. FAQ */}
      <Suspense fallback={<SectionLoader />}>
        <FAQ />
      </Suspense>

      {/* 8. Final CTA — scrolls back to form */}
      <Suspense fallback={<SectionLoader />}>
        <RegistrationCTA />
      </Suspense>

      {/* After-webinar: OneGrasp Conferences */}
      <Suspense fallback={<SectionLoader />}>
        <OneGraspConferences />
      </Suspense>

      {/* 9. Footer */}
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
