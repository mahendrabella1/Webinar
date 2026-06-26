import { motion } from 'framer-motion';
import { useRegistration } from '../context/RegistrationContext';
import { CTA_BUTTONS } from './RegistrationCTA';

const speakers = [
  {
    photo: 'https://onegrasp.com/wp-content/uploads/2026/06/Dr.-Rudrarup-Gupta-1.jpg',
    name: 'Dr. Rudrarup Gupta',
    domain: 'Rural Development & Engineering',
    role: 'Faculty, Founder & Guest Lecturer',
    org: 'Tagore School · JIS Group · Skill Dev Interface',
    topic: 'Interdisciplinary Research',
  },
  {
    photo: 'https://onegrasp.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-10-at-3.32.36-PM.jpeg',
    name: 'Dr. G N Manjunath',
    domain: 'Professor of Pharmacology',
    role: 'Faculty',
    org: 'Sri Siddhartha Medical College, Tumkur',
    topic: 'Medical Research & Conferences',
  },
  {
    photo: 'https://onegrasp.com/wp-content/uploads/2026/06/chatrvedi.jpg',
    name: 'Dr. D K Chaturvedi',
    domain: 'Engineering Education',
    role: 'Dean, Faculty of Engineering',
    org: 'Dayalbagh Educational Institute, Agra',
    topic: 'Academic Publishing & Conferences',
  },
  {
    photo: 'https://onegrasp.com/wp-content/uploads/2026/06/2-Dr-Bishnu.jpg',
    name: 'Dr. Bishnu Pada Bose',
    domain: 'Engineering & Technology',
    role: 'Professor, Partner & Advisor',
    org: 'Invosystems',
    topic: 'Conference Research Impact',
  },
];

const SPEAKERS_CTA = CTA_BUTTONS[2];

export default function Speakers() {
  const { openForm } = useRegistration();
  return (
    <section id="speakers" className="bg-[#080808] py-24 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-[#FF1F1F]/40 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#FF1F1F] text-xs font-bold uppercase tracking-[0.3em] mb-3">
            Expert Panelists
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mb-4">
            Your Webinar Educators
          </h2>
          <p className="text-[#A0A0A0] max-w-xl mx-auto text-sm leading-relaxed">
            Experienced academics and researchers who have participated in, chaired, and
            organized international scientific conferences — here to share what they know.
          </p>
          <button
            onClick={() => openForm(SPEAKERS_CTA)}
            className="mt-8 inline-flex items-center gap-2 bg-[#FF1F1F] hover:bg-[#C70000] text-white font-semibold px-8 py-3 rounded-sm transition-all duration-200 shadow-lg shadow-red-900/40"
          >
            {SPEAKERS_CTA}
          </button>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {speakers.map((s) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#090909]/80 shadow-2xl shadow-black/30"
            >
              <div className="relative h-80 sm:h-72">
                <img
                  src={s.photo}
                  alt={s.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FF1F1F]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                <div className="absolute top-3 left-3">
                  <span className="bg-[#FF1F1F] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm">
                    {s.topic}
                  </span>
                </div>
              </div>

              <div className="p-5 pt-4">
                <h3 className="text-white font-bold text-base leading-snug mb-1">{s.name}</h3>
                <p className="text-[#FF1F1F] text-xs font-semibold mb-2 leading-snug">{s.domain}</p>
                <p className="text-[#A0A0A0] text-xs leading-relaxed">
                  {s.role}
                  <br />
                  <span className="text-white/40">{s.org}</span>
                </p>
              </div>

              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#FF1F1F]/0 group-hover:border-[#FF1F1F]/60 transition-colors duration-300 rounded-tl-xl" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#FF1F1F]/0 group-hover:border-[#FF1F1F]/60 transition-colors duration-300 rounded-tr-xl" />
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-[#A0A0A0]/50 text-xs mt-10"
        >
          More panelists to be announced · Webinar: 23 July 2026
        </motion.p>
      </div>
    </section>
  );
}
