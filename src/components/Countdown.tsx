import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, FileText, Zap, Mic, Globe, Database } from 'lucide-react';
import { useRegistration } from '../context/RegistrationContext';
import { CTA_BUTTONS } from './RegistrationCTA';

const EVENT_DATE = new Date('2026-07-23T18:00:00+05:30').getTime();

const COUNTDOWN_CTA = CTA_BUTTONS[12];

function getTimeLeft() {
  const now = Date.now();
  const diff = Math.max(0, EVENT_DATE - now);
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

function Segment({ value, label }: { value: number; label: string }) {
  const display = String(value).padStart(2, '0');
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative">
        <div className="bg-[#0D0D0D]/85 backdrop-blur-sm border border-white/[0.12] rounded-lg w-20 sm:w-28 md:w-32 h-20 sm:h-28 md:h-32 flex items-center justify-center shadow-2xl overflow-hidden hover:border-[#FF1F1F]/40 transition-colors duration-300">
          <div className="absolute inset-x-0 top-1/2 h-px bg-black/50 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />
          <span className="text-white text-4xl sm:text-5xl md:text-6xl font-black tabular-nums tracking-tighter relative z-20">
            {display}
          </span>
        </div>
        {/* Red corner accents */}
        <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-[#FF1F1F]/70 rounded-tl-lg" />
        <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-[#FF1F1F]/70 rounded-tr-lg" />
        <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-[#FF1F1F]/70 rounded-bl-lg" />
        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-[#FF1F1F]/70 rounded-br-lg" />
      </div>
      <span className="text-[#A0A0A0] text-xs sm:text-sm uppercase tracking-[0.2em] font-medium">
        {label}
      </span>
    </div>
  );
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const { openForm } = useRegistration();

  return (
    <section className="relative py-20 overflow-hidden bg-[#050505]">
      {/* Background image — subtle world/space feel */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(199,0,0,0.08),transparent_70%)]" />
      </div>

      {/* Top / bottom border lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF1F1F]/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#FF1F1F]/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center relative">
        {/* Benefits Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-[#FF1F1F] text-xs font-bold uppercase tracking-[0.3em] mb-2">
            When You Attend Conferences
          </p>
          <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
            You'll Get These <span className="text-[#FF1F1F]">6 Powerful Benefits</span>
          </h3>
        </motion.div>

        {/* Benefits Grid */}
        <div className="mb-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              type: 'icon',
              icon: Award,
              title: 'Certificate of Participation / Presentation',
              color: '#FF1F1F',
            },
            {
              type: 'image',
              image: '/images/DOI.png',
              title: 'Get DOI (Crossref) for your abstract',
            },
            {
              type: 'image',
              image: '/images/CPD.jpg',
              title: 'CPD Certificate',
            },
            {
              type: 'icon',
              icon: Mic,
              title: 'Opportunity to Become a Keynote Speaker',
              color: '#FF6B6B',
            },
            {
              type: 'icon',
              icon: Globe,
              title: 'Free Access to 170+ Millions of Metadata Records',
              color: '#FF1F1F',
            },
            {
              type: 'image',
              image: '/images/google%20scholor.png',
              title: 'Abstract Indexed in Google Scholar & 10+ Indexing Directories',
            },
          ].map((benefit, i) => {
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF1F1F]/20 to-[#FF6B6B]/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative bg-gradient-to-br from-[#0D0D0D]/95 to-[#0D0D0D]/80 backdrop-blur-sm border border-white/[0.12] rounded-xl p-6 hover:border-[#FF1F1F]/60 transition-all duration-300 group-hover:shadow-[0_8px_32px_rgba(255,31,31,0.15)] h-full flex flex-col items-center text-center">
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#FF1F1F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Icon or Image */}
                  {benefit.type === 'icon' ? (
                    <div className="mb-4 p-3 rounded-lg bg-gradient-to-br from-[#FF1F1F]/20 to-[#FF1F1F]/5 border border-[#FF1F1F]/30 group-hover:border-[#FF1F1F]/60 group-hover:shadow-[0_0_20px_rgba(255,31,31,0.3)] transition-all duration-300">
                      <benefit.icon size={28} style={{ color: benefit.color }} className="transition-transform group-hover:scale-110 duration-300" />
                    </div>
                  ) : (
                    <div className="mb-4 h-20 w-20 flex items-center justify-center rounded-full bg-white/5 overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
                      <img
                        src={benefit.image}
                        alt={benefit.title}
                        className="max-h-full max-w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  )}

                  {/* Benefit Title */}
                  <p className="text-white/90 text-sm font-bold leading-snug group-hover:text-white transition-colors duration-300">
                    {benefit.title}
                  </p>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent via-[#FF1F1F]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-[#FF1F1F] text-xs font-bold uppercase tracking-[0.3em] mb-3">
            Don't Miss It
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
            Webinar Starts In
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex items-end justify-center gap-4 sm:gap-6 md:gap-8"
        >
          <Segment value={time.days} label="Days" />
          <span className="text-[#FF1F1F] text-4xl sm:text-5xl font-black mb-10 sm:mb-14 leading-none select-none">:</span>
          <Segment value={time.hours} label="Hours" />
          <span className="text-[#FF1F1F] text-4xl sm:text-5xl font-black mb-10 sm:mb-14 leading-none select-none">:</span>
          <Segment value={time.minutes} label="Minutes" />
          <span className="text-[#FF1F1F] text-4xl sm:text-5xl font-black mb-10 sm:mb-14 leading-none select-none">:</span>
          <Segment value={time.seconds} label="Seconds" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-[#A0A0A0] text-sm"
        >
          23 July 2026 · 06:00 PM – 08:00 PM IST · Online Webinar
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8 flex justify-center"
        >
          <button
            onClick={() => openForm(COUNTDOWN_CTA)}
            className="inline-flex items-center gap-2 bg-[#FF1F1F] hover:bg-[#C70000] text-white font-semibold px-8 py-3 rounded-sm transition-all duration-200 shadow-lg shadow-red-900/40"
          >
            {COUNTDOWN_CTA}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
