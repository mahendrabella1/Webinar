import { motion } from 'framer-motion';
import { BookOpen, Globe, Award, Mic, Link } from 'lucide-react';
import { useRegistration } from '../context/RegistrationContext';
import { CTA_BUTTONS } from './RegistrationCTA';

const topics = [
  'What Is a Scientific Conference?',
  'Types of Conferences',
  'Abstract Submission Process',
  'Peer Review Explained',
  'How DOI (Crossref) Works',
  'CPD Certification',
  'Google Scholar Indexing',
  'Research Networking',
  'Keynote vs Invited Speaker',
  'Participation Certificate',
  'International Indexing Directories',
  'Conference Publishing Ethics',
  'Virtual vs In-Person Conferences',
  'OneGrasp Conference Process',
  'How to Write an Abstract',
  'Conference Registration Fees',
  'Career Benefits for Academics',
];

const RESEARCH_CTA = CTA_BUTTONS[8];

const highlightCards = [
  {
    Icon: BookOpen,
    title: 'Conference Fundamentals',
    subtitle: 'Know the why and how of global scientific meetings.',
  },
  {
    Icon: Globe,
    title: 'Publication & Indexing',
    subtitle: 'Crossref DOI, Google Scholar, and international visibility.',
  },
  {
    Icon: Award,
    title: 'Certificates & Credits',
    subtitle: 'CPD, participation, presentation, and speaker credentials.',
  },
  {
    Icon: Mic,
    title: 'Speaker Pathways',
    subtitle: 'From attendee to keynote speaker with proven conference tactics.',
  },
  {
    Icon: Link,
    title: 'Networking Outcomes',
    subtitle: 'Build collaborations, partnerships, and global research links.',
  },
];

export default function ResearchAreas() {
  const { openForm } = useRegistration();
  return (
    <section id="research" className="relative overflow-hidden bg-[#050505] py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(255,31,31,0.16),transparent_40%)]" />
      <div className="absolute bottom-0 left-0 w-full h-72 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="text-[#FF1F1F] text-xs font-bold uppercase tracking-[0.3em] mb-3">
            Topics We'll Cover
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Everything you need to know about international scientific conferences.
          </h2>
          <p className="text-[#A0A0A0] text-sm sm:text-base leading-relaxed">
            This session breaks down the full conference experience — from choosing the right event,
            writing a compelling abstract, earning DOI and CPD credits, to building your academic network.
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-3 mb-14">
          {highlightCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group rounded-3xl border border-white/[0.08] bg-[#0D0D0D]/85 p-6 shadow-2xl shadow-black/30 hover:border-[#FF1F1F]/50 hover:bg-[#111111] transition-all duration-300"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF1F1F]/10 text-[#FF1F1F] shadow-inner">
                <card.Icon size={20} />
              </div>
              <h3 className="text-white font-bold text-xl mb-2">{card.title}</h3>
              <p className="text-[#A0A0A0] text-sm leading-relaxed">{card.subtitle}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {topics.map((topic, index) => (
            <div
              key={topic}
              className="rounded-3xl border border-white/[0.08] bg-[#0C0C0C]/85 p-4 text-sm text-white/80 hover:border-[#FF1F1F]/50 hover:bg-[#111111] transition-all duration-200"
            >
              <span className="block mb-3 text-[#FF1F1F] text-xs uppercase tracking-[0.25em] font-bold">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="font-semibold text-white leading-snug">{topic}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 flex flex-col items-center gap-4 text-center"
        >
          <p className="max-w-2xl text-sm text-[#A0A0A0]">
            Every topic is crafted to make the webinar actionable, clear, and immediately valuable for researchers, faculty, and conference-ready presenters.
          </p>
          <button
            onClick={() => openForm(RESEARCH_CTA)}
            className="inline-flex items-center gap-2 rounded-full bg-[#FF1F1F] px-10 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-[#C70000] shadow-lg shadow-red-900/40"
          >
            {RESEARCH_CTA}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
