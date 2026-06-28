import { motion } from 'framer-motion';
import { HelpCircle, Hash, Award, Mic, Globe, Database } from 'lucide-react';
import { useRegistration } from '../context/RegistrationContext';
import { CTA_BUTTONS } from './RegistrationCTA';

const learnings = [
  {
    Icon: Hash,
    title: 'Get DOI (Crossref) for your abstract',
    subtitle: 'Digital Object Identifier',
    desc: 'Learn exactly how to get a Digital Object Identifier (DOI) via Crossref for your research abstract — making your work permanently citable worldwide.',
    accent: '#FF1F1F',
    num: '01',
  },
  {
    Icon: Award,
    title: 'Certificate of Participation / Presentation',
    subtitle: 'Official Recognition',
    desc: 'Every registered attendee receives an accredited participation certificate after joining the live webinar, recognized globally.',
    accent: '#C70000',
    num: '02',
  },
  {
    Icon: Database,
    title: 'CPD Certificate',
    subtitle: 'Continuing Professional Development',
    desc: 'Earn accredited CPD credits recognized by professional bodies worldwide for your participation in scientific conferences and webinars.',
    accent: '#FF1F1F',
    num: '03',
  },
  {
    Icon: Mic,
    title: 'Opportunity to Become a Keynote Speaker',
    subtitle: 'Platform & Support',
    desc: 'Discover the roadmap from first-time attendee to invited keynote speaker — what it takes, how to get selected, and how OneGrasp supports you at every stage.',
    accent: '#C70000',
    num: '04',
  },
  {
    Icon: Globe,
    title: 'Free Access to 170+ Millions of Metadata Records',
    subtitle: 'Global Research Database',
    desc: 'Gain access to one of the world\'s largest collections of research metadata, enabling discovery of relevant studies and collaboration opportunities worldwide.',
    accent: '#FF1F1F',
    num: '05',
  },
  {
    Icon: HelpCircle,
    title: 'Abstract Indexed in Google Scholar & 10+ Indexing Directories',
    subtitle: 'Maximum Visibility',
    desc: 'Get your abstract indexed across Google Scholar and 10+ international research directories — boosting your academic visibility and discoverability globally.',
    accent: '#C70000',
    num: '06',
  },
];

const WHY_ATTEND_CTA = CTA_BUTTONS[10];

export default function WhyAttend() {
  const { openForm } = useRegistration();
  return (
    <section id="benefits" className="relative py-28 overflow-hidden bg-[#050505]">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/55 to-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/90 via-transparent to-[#050505]/90" />
      </div>
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #FF1F1F 0, #FF1F1F 1px, transparent 0, transparent 50%)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#FF1F1F] text-xs font-bold uppercase tracking-[0.3em] mb-3">
            Webinar Curriculum
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mb-4">
            What You'll Learn
          </h2>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#FF1F1F]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#FF1F1F]" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#FF1F1F]" />
          </div>
          <p className="text-[#A0A0A0] max-w-xl mx-auto text-sm leading-relaxed">
            In just 2 hours, you'll go from knowing nothing about scientific conferences to
            understanding exactly how to leverage them for your research, career, and global visibility.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {learnings.map((l, i) => (
            <motion.div
              key={l.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative bg-[#0D0D0D]/85 backdrop-blur-sm border border-white/[0.1] rounded-xl p-7 hover:border-[#FF1F1F]/50 transition-all duration-300 hover:shadow-[0_4px_40px_rgba(255,31,31,0.12)] overflow-hidden"
            >
              {/* Number watermark */}
              <span className="absolute top-4 right-5 text-6xl font-black text-white/[0.03] select-none pointer-events-none leading-none">
                {l.num}
              </span>

              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${l.accent}, transparent)` }}
              />

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${l.accent}28, ${l.accent}0a)`,
                  border: `1px solid ${l.accent}40`,
                }}
              >
                <l.Icon size={22} style={{ color: l.accent }} />
              </div>

              <h3 className="text-white font-bold text-lg mb-1">{l.title}</h3>
              <p className="text-[#FF1F1F] text-xs font-semibold mb-3 uppercase tracking-wide">{l.subtitle}</p>
              <p className="text-[#A0A0A0] text-sm leading-relaxed">{l.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#0D0D0D]/85 backdrop-blur-sm border border-white/[0.1] rounded-xl px-8 py-5"
        >
          <p className="text-white/60 text-sm text-center sm:text-left">
            All of this in a single{' '}
            <span className="text-white font-semibold">2-hour live masterclass</span> — no prior knowledge required.
          </p>
          <button
            onClick={() => openForm(WHY_ATTEND_CTA)}
            className="flex-shrink-0 bg-[#FF1F1F] hover:bg-[#C70000] text-white text-sm font-bold px-6 py-2.5 rounded-sm transition-colors duration-200 shadow-lg shadow-red-900/30"
          >
            {WHY_ATTEND_CTA}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
