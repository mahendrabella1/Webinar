import { motion } from 'framer-motion';
import { Radio, BookOpen, TrendingUp, FileText, Award, HelpCircle, Mic } from 'lucide-react';
import { useRegistration } from '../context/RegistrationContext';
import { CTA_BUTTONS } from './RegistrationCTA';

const sessions = [
  {
    time: '06:00 PM',
    title: 'Welcome & Session Overview',
    desc: 'Introduction to the webinar, meet your expert speakers, and understand what you will walk away knowing about international scientific conferences.',
    Icon: Radio,
    tag: 'Opening',
  },
  {
    time: '06:10 PM',
    title: 'What Are International Scientific Conferences?',
    desc: 'A clear, structured explanation of scientific conferences — their purpose, who organizes them, how they differ from seminars, and why they are globally important.',
    Icon: BookOpen,
    tag: 'Education',
  },
  {
    time: '06:30 PM',
    title: 'Why Should YOU Attend? Career & Research Impact',
    desc: 'Real-world examples of how attending or presenting at a conference transformed careers, opened research collaborations, and built global academic reputations.',
    Icon: TrendingUp,
    tag: 'Impact',
  },
  {
    time: '07:00 PM',
    title: 'How to Participate: Submission to Presentation',
    desc: 'Step-by-step walkthrough of the entire process — writing an abstract, submitting it, getting reviewed, presenting your work, and what happens after the conference.',
    Icon: FileText,
    tag: 'How-To',
  },
  {
    time: '07:20 PM',
    title: 'Deep Dive: DOI, CPD Certificates & Indexing',
    desc: 'Expert explanation of Crossref DOI, CPD certification, and how your abstract gets indexed in Google Scholar and 10+ international research directories.',
    Icon: Award,
    tag: 'Benefits',
  },
  {
    time: '07:45 PM',
    title: 'Live Q&A with Expert Speakers',
    desc: "Open floor for your questions — ask our panelists anything about scientific conferences, publishing, career growth, or OneGrasp's upcoming conference opportunities.",
    Icon: HelpCircle,
    tag: 'Q&A',
  },
  {
    time: '08:00 PM',
    title: 'Closing & Upcoming Opportunities',
    desc: "A look at OneGrasp's upcoming international scientific conferences, how to register as a presenter or attendee, and how to take the next step in your academic journey.",
    Icon: Mic,
    tag: 'Next Steps',
  },
];

const tagColors: Record<string, string> = {
  Opening: '#555',
  Education: '#1a6ecc',
  Impact: '#1a8c4e',
  'How-To': '#9c5c00',
  Benefits: '#8b1a1a',
  'Q&A': '#5c1a8c',
  'Next Steps': '#FF1F1F',
};

const AGENDA_CTA = CTA_BUTTONS[5];

export default function Agenda() {
  const { openForm } = useRegistration();
  return (
    <section id="agenda" className="relative py-24 overflow-hidden bg-[#050505]">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/60 to-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/70 via-transparent to-[#050505]/70" />
      </div>
      <div className="absolute right-0 top-0 w-96 h-full bg-[radial-gradient(ellipse_at_top_right,rgba(199,0,0,0.08),transparent_65%)] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#FF1F1F] text-xs font-bold uppercase tracking-[0.3em] mb-3">
            Session Rundown
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mb-4">
            Webinar Agenda
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#FF1F1F]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#FF1F1F]" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#FF1F1F]" />
          </div>
          <p className="text-[#A0A0A0] max-w-xl mx-auto text-sm leading-relaxed">
            A tightly structured 2-hour programme — from zero knowledge to complete clarity on
            international scientific conferences.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-[calc(theme(spacing.20)+0.5px)] top-0 bottom-0 w-px bg-gradient-to-b from-[#FF1F1F]/50 via-[#FF1F1F]/25 to-transparent hidden sm:block" />

          <div className="flex flex-col gap-0">
            {sessions.map((s, i) => (
              <motion.div
                key={s.time}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group flex gap-6 sm:gap-8 items-start py-6 border-b border-white/[0.06] last:border-0 hover:bg-white/[0.02] rounded-xl px-4 -mx-4 transition-all duration-200"
              >
                {/* Time */}
                <div className="w-20 flex-shrink-0 text-right hidden sm:block">
                  <span className="text-[#FF1F1F] text-sm font-bold tabular-nums">{s.time}</span>
                </div>

                {/* Dot */}
                <div className="hidden sm:flex flex-shrink-0 mt-1.5 relative z-10">
                  <div className="w-3 h-3 rounded-full bg-[#FF1F1F] border-2 border-[#FF1F1F] shadow-[0_0_10px_rgba(255,31,31,0.7)] group-hover:scale-125 transition-transform duration-200" />
                </div>

                {/* Icon + content */}
                <div className="flex items-start gap-4 flex-1 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-[#0D0D0D]/80 backdrop-blur-sm border border-white/[0.1] flex items-center justify-center flex-shrink-0 group-hover:border-[#FF1F1F]/40 transition-colors duration-200">
                    <s.Icon size={17} className="text-[#FF1F1F]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center flex-wrap gap-2 mb-1">
                      <div className="sm:hidden text-[#FF1F1F] text-xs font-bold">{s.time}</div>
                      <h3 className="text-white font-bold text-base">{s.title}</h3>
                      <span
                        className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border"
                        style={{
                          color: tagColors[s.tag] ?? '#A0A0A0',
                          borderColor: `${tagColors[s.tag] ?? '#555'}44`,
                          backgroundColor: `${tagColors[s.tag] ?? '#555'}12`,
                        }}
                      >
                        {s.tag}
                      </span>
                    </div>
                    <p className="text-[#A0A0A0] text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-12 flex justify-center"
          >
            <button
              onClick={() => openForm(AGENDA_CTA)}
              className="inline-flex items-center gap-2 bg-[#FF1F1F] hover:bg-[#C70000] text-white font-semibold px-8 py-3 rounded-sm transition-all duration-200 shadow-lg shadow-red-900/40"
            >
              {AGENDA_CTA}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
