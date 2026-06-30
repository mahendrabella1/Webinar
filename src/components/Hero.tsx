import { motion } from 'framer-motion';
import { Calendar, Clock, Users, ArrowRight } from 'lucide-react';
import { useRegistration } from '../context/RegistrationContext';
import { initiatePayment } from '../utils/payment';

// Responsive WebP variants — browser picks the right size automatically
const POSTER_SRCSET = [
  '/images/hero%20poster-480w.webp 480w',
  '/images/hero%20poster-768w.webp 768w',
  '/images/hero%20poster-1040w.webp 1040w',
].join(', ');
const POSTER_SIZES  = '(max-width: 640px) 480px, (max-width: 1024px) 768px, 1040px';
const POSTER_PNG    = '/images/hero%20poster.png'; // fallback for no-WebP browsers


export default function Hero() {
  const { openForm } = useRegistration();
  return (
    <main
      id="about"
      className="relative min-h-screen flex items-center bg-[#050505] overflow-hidden pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1920"
          srcSet="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=640 640w, https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1280 1280w, https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1920 1920w"
          sizes="100vw"
          alt=""
          aria-hidden="true"
          role="presentation"
          width={1920}
          height={1080}
          loading="lazy"
          fetchPriority="low"
          className="w-full h-full object-cover object-center opacity-[0.12]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/60 to-[#050505]/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/90 via-transparent to-[#050505]" />
      </div>
      {/* Red accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[40%] h-[50%] bg-[radial-gradient(ellipse_at_top_left,rgba(199,0,0,0.14),transparent_65%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full py-16 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Left: Webinar info */}
          <div className="space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-3"
            >
              <span className="text-white/40 text-xs font-medium">2 Hours · Online</span>
              <span className="inline-flex items-center rounded-full bg-[#FF1F1F] px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg shadow-red-900/30">
                ₹299
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-[1.05] tracking-tight text-white">
                International Scientific{' '}
                <span className="text-[#FF1F1F]">Conferences</span>
              </h1>
              <h2 className="text-lg sm:text-xl text-white/50 font-bold uppercase tracking-widest mt-2">
                Importance & Awareness Webinar
              </h2>
            </motion.div>

            {/* Meta info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              <div className="flex items-center gap-2 bg-[#0D0D0D] border border-white/[0.12] rounded px-4 py-2">
                <Calendar size={14} className="text-[#FF1F1F]" />
                <span className="text-white text-sm font-medium">23 July 2026</span>
              </div>
              <div className="flex items-center gap-2 bg-[#0D0D0D] border border-white/[0.12] rounded px-4 py-2">
                <Clock size={14} className="text-[#FF1F1F]" />
                <span className="text-white text-sm font-medium">06:00 – 08:00 PM IST</span>
              </div>
              <div className="flex items-center gap-2 bg-[#0D0D0D] border border-white/[0.12] rounded px-4 py-2">
                <Users size={14} className="text-[#FF1F1F]" />
                <span className="text-white text-sm font-medium">1000+ Expected</span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[#A0A0A0] text-base leading-relaxed max-w-xl pt-1"
            >
              What actually happens at an international scientific conference? How do researchers
              get a DOI? How do you become a keynote speaker? If you've ever asked these questions,
              this 2-hour webinar costs ₹299.
            </motion.p>

            {/* What you'll learn */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="space-y-2 pt-1"
            >
              <p className="text-white/60 text-xs uppercase tracking-widest font-semibold mb-2">You'll learn:</p>
              {[
                'What are scientific conferences & why they exist',
                'How to submit research & get a Crossref DOI',
                'Certificate of participation for attendees',
                'CPD credits & academic indexing explained',
                'Career & research visibility benefits',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-white/80">
                  <span className="text-[#FF1F1F] mt-0.5 flex-shrink-0">›</span>
                  {item}
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-3"
            >
              <button
                onClick={() => openForm('Secure My Seat')}
                className="group inline-flex items-center gap-2 bg-[#FF1F1F] hover:bg-[#C70000] text-white font-bold text-base px-8 py-3.5 rounded-sm transition-all duration-200 shadow-lg shadow-red-900/40 hover:gap-3"
              >
                Secure My Seat
                <ArrowRight size={16} />
              </button>

              <div className="flex items-center gap-3 pt-2">
                <p className="text-white/40 text-sm">
                  Conducted by{' '}
                  <span className="text-white font-bold">
                    One<span className="text-[#FF1F1F]">Grasp</span>
                  </span>{' '}
                  — International Scientific Conferences
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: Single webinar poster - large, covering half width */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-end lg:justify-center"
          >
            <motion.button
              type="button"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              onClick={() => initiatePayment('Hero Poster')}
              className="group relative w-full max-w-[520px] text-left"
              style={{ aspectRatio: '4 / 5' }}
            >
              <picture>
                {/* Responsive WebP — browser picks smallest that fits */}
                <source
                  srcSet={POSTER_SRCSET}
                  sizes={POSTER_SIZES}
                  type="image/webp"
                />
                {/* PNG fallback for legacy browsers */}
                <img
                  src={POSTER_PNG}
                  alt="Webinar flyer — OneGrasp International Scientific Conferences Webinar, 23 July 2026"
                  className="w-full h-full object-contain object-center transition-transform duration-700 group-hover:scale-105"
                  width={520}
                  height={650}
                  fetchPriority="high"
                />
              </picture>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-white/20 text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-px h-6 bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>
    </main>
  );
}
