import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRegistration } from '../context/RegistrationContext';
import { CTA_BUTTONS } from './RegistrationCTA';

const stats = [
  { value: 4, suffix: '+', label: 'Expert Panelists', desc: 'Experienced academics & researchers' },
  { value: 18, suffix: '+', label: 'Topics Covered', desc: 'Across the 2-hour session' },
  { value: 1000, suffix: '+', label: 'Professionals Expected', desc: 'From diverse disciplines' },
  { value: 20, suffix: '+', label: 'Countries Represented', desc: 'Global online attendance' },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1400;
    const step = Math.ceil(value / (duration / 16));
    const id = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(id);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(id);
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

const HIGHLIGHTS_CTA = CTA_BUTTONS[14];

export default function Highlights() {
  const { openForm } = useRegistration();
  return (
    <section className="relative py-28 overflow-hidden bg-[#050505]">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/60 to-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-transparent to-[#050505]/80" />
      </div>
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,31,31,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,31,31,0.6) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#FF1F1F] text-xs font-bold uppercase tracking-[0.3em] mb-3">
            Webinar at a Glance
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mb-4">
            By the Numbers
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#FF1F1F]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#FF1F1F]" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#FF1F1F]" />
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-[#0D0D0D]/80 backdrop-blur-sm border border-white/[0.1] rounded-xl p-8 text-center hover:border-[#FF1F1F]/50 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,31,31,0.09),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-[#FF1F1F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="text-5xl font-black text-[#FF1F1F] mb-3 relative">
                <AnimatedNumber value={s.value} suffix={s.suffix} />
              </div>
              <p className="text-white font-bold text-sm mb-1">{s.label}</p>
              <p className="text-[#A0A0A0] text-xs">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-14 relative h-52 rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl"
        >
          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Professionals learning together globally"
            className="w-full h-full object-cover object-center"
            style={{ opacity: 0.55 }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/85 via-[#050505]/40 to-[#050505]/85" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 text-center">
            <span className="text-[#FF1F1F] text-xs font-bold uppercase tracking-[0.3em]">
              23 July 2026 · ₹299 Access
            </span>
            <p className="text-white font-black text-2xl sm:text-3xl uppercase tracking-wide">
              Educating Professionals Across the Globe
            </p>
            <p className="text-white/50 text-sm">Online Webinar · 06:00 PM – 08:00 PM IST</p>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-10 text-center"
        >
          <button
            onClick={() => openForm(HIGHLIGHTS_CTA)}
            className="inline-flex items-center gap-2 bg-[#FF1F1F] hover:bg-[#C70000] text-white font-bold px-8 py-3.5 rounded-sm transition-all duration-200 shadow-lg shadow-red-900/40 hover:gap-3"
          >
            {HIGHLIGHTS_CTA}
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
