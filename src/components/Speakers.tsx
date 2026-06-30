import { motion } from 'framer-motion';
import { useRegistration } from '../context/RegistrationContext';
import { CTA_BUTTONS } from './RegistrationCTA';

const speakers = [
  {
    photoWebp: '/images/Speaker1.webp',
    photo: '/images/Speaker1.png',
    fit: 'object-contain',
    name: 'Dr. Rudrarup Gupta',
    domain: 'Business & Economics Expert',
    role: 'Faculty, Founder & Guest Lecturer',
    org: 'Tagore School of Rural Development and Agricultural Management, Kalyani University, Nadia',
    location: 'Kolkata, India',
    topic: 'Interdisciplinary Research',
  },
  {
    photoWebp: '/images/speaker2.webp',
    photo: '/images/speaker2.png',
    name: 'Dr. G N Manjunath',
    domain: 'Professor of Pharmacology',
    role: 'Professor of Pharmacology',
    org: 'Sri Siddhartha Medical College, Tumkur',
    location: 'Karnataka, India',
    topic: 'Medical Research & Conferences',
  },
  {
    photoWebp: '/images/speaker3.webp',
    photo: '/images/speaker3.png',
    fit: 'object-contain',
    name: 'Dr. D K Chaturvedi',
    domain: 'Engineering & Technology',
    role: 'Dean, Faculty of Engineering',
    org: 'Dayalbagh Educational Institute, Agra',
    location: 'Agra, India',
    topic: 'Academic Publishing & Conferences',
  },
  {
    photoWebp: '/images/speaker4.webp',
    photo: '/images/speaker4.png',
    fit: 'object-contain',
    name: 'Dr. Bishnu Pada Bose',
    domain: 'Engineering & Technology',
    role: 'Professor, Partner & Advisor',
    org: 'Invosystems',
    location: 'Bangalore, India',
    topic: 'Conference Research Impact',
  },
];

const SPEAKERS_CTA = CTA_BUTTONS[2];

export default function Speakers() {
  const { openForm } = useRegistration();
  return (
    <section id="speakers" className="bg-[#080808] py-16 relative overflow-hidden">
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

        <div className="space-y-8">
          {speakers.map((s, index) => {
            const reversed = index % 2 === 1;
            return (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/[0.08] bg-[#090909]/80 shadow-xl shadow-black/20"
              >
                <div className={`grid gap-4 lg:grid-cols-[1.1fr_0.9fr] ${reversed ? 'lg:grid-cols-[0.9fr_1.1fr] text-right' : ''}`}>
                  <div className={`flex items-center justify-center p-6 sm:p-8 ${reversed ? 'lg:order-2' : ''}`}>
                    <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden bg-[#111] shadow-inner">
                      <picture>
                        <source srcSet={s.photoWebp} type="image/webp" />
                        <img
                          src={s.photo}
                          alt={s.name}
                          className={`w-full h-full ${s.fit || 'object-cover'} object-center bg-[#111] transition-transform duration-700 group-hover:scale-105`}
                          loading="lazy"
                          width={288}
                          height={288}
                          decoding="async"
                        />
                      </picture>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/20 via-transparent to-transparent" />
                    </div>
                  </div>

                  <div className={`p-6 flex flex-col justify-center ${reversed ? 'lg:text-left' : ''}`}>
                    <div className="mb-3">
                      <p className="text-[#FF1F1F] text-xs uppercase tracking-[0.3em] mb-2">{s.topic}</p>
                      <h3 className="text-white text-xl font-black tracking-tight mb-2">{s.name}</h3>
                      <p className="text-[#FF1F1F] text-sm font-semibold uppercase mb-3">{s.domain}</p>
                    </div>
                    <div className="space-y-3 text-sm text-[#A0A0A0] leading-relaxed">
                      <p>{s.role}</p>
                      <p>{s.org}</p>
                      {s.location ? <p className="text-white/60">{s.location}</p> : null}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
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
