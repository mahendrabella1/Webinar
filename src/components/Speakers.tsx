import { motion } from 'framer-motion';
import { Linkedin, ExternalLink } from 'lucide-react';

const speakers = [
  {
    photo: 'https://onegrasp.com/wp-content/uploads/2026/06/2-Dr-Bishnu.jpg',
    name: 'Dr. Bishnu Pada Bose',
    domain: 'Engineering & Technology',
    role: 'Professor, Partner & Advisor',
    org: 'Invosystems',
    topic: 'Conference Research Impact',
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
    photo: 'https://onegrasp.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-10-at-3.32.36-PM.jpeg',
    name: 'Dr. G N Manjunath',
    domain: 'Professor of Pharmacology',
    role: 'Faculty',
    org: 'Sri Siddhartha Medical College, Tumkur',
    topic: 'Medical Research & Conferences',
  },
  {
    photo: 'https://onegrasp.com/wp-content/uploads/2026/06/Dr.-Rudrarup-Gupta-1.jpg',
    name: 'Dr. Rudrarup Gupta',
    domain: 'Rural Development & Engineering',
    role: 'Faculty, Founder & Guest Lecturer',
    org: 'Tagore School · JIS Group · Skill Dev Interface',
    topic: 'Interdisciplinary Research',
  },
];

export default function Speakers() {
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
        </motion.div>

        {/* Speaker grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {speakers.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group relative bg-[#0D0D0D] border border-white/[0.08] rounded-xl overflow-hidden hover:border-[#FF1F1F]/50 transition-all duration-400 hover:shadow-[0_8px_48px_rgba(255,31,31,0.18)]"
            >
              {/* Photo */}
              <div className="relative h-64 overflow-hidden bg-[#111]">
                <img
                  src={s.photo}
                  alt={s.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FF1F1F]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                {/* Topic badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-[#FF1F1F] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm">
                    {s.topic}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5 pt-4">
                <h3 className="text-white font-bold text-base leading-snug mb-1">{s.name}</h3>
                <p className="text-[#FF1F1F] text-xs font-semibold mb-2 leading-snug">{s.domain}</p>
                <p className="text-[#A0A0A0] text-xs leading-relaxed">
                  {s.role}
                  <br />
                  <span className="text-white/40">{s.org}</span>
                </p>
              </div>

              {/* Footer */}
              <div className="px-5 pb-5 flex items-center justify-between border-t border-white/[0.05] pt-3 mt-1">
                <button className="text-[#FF1F1F] text-xs font-semibold flex items-center gap-1.5 hover:gap-2.5 transition-all duration-200">
                  <ExternalLink size={11} />
                  View Profile
                </button>
                <button className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-[#A0A0A0] hover:border-[#0A66C2] hover:text-[#0A66C2] transition-all duration-200">
                  <Linkedin size={12} />
                </button>
              </div>

              {/* Corner accents */}
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
