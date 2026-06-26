import { motion } from 'framer-motion';
import { useRegistration } from '../context/RegistrationContext';
import { CTA_BUTTONS } from './RegistrationCTA';

const RESEARCH_CTA = CTA_BUTTONS[8];
const topics = [
  'Planning an abstract that reviewers notice',
  'How Crossref DOI registration works for conference papers',
  'Preparing content for Google Scholar visibility',
  'Earning and documenting CPD credits from attendance',
  'Selecting indexed conferences and submission timelines',
  'Structuring abstracts for academic indexing and citations',
  'Best practices for poster, oral and virtual presentations',
  'Using conference output to strengthen research profiles',
];

export default function ResearchAreas() {
  const { openForm } = useRegistration();
  return (
    <section id="research" className="relative overflow-hidden bg-[#050505] py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(255,31,31,0.16),transparent_40%)]" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-10 max-w-2xl text-center"
        >
          <p className="text-[#FF1F1F] text-xs font-bold uppercase tracking-[0.3em] mb-3">
            Topics We'll Cover
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
            Topics We Cover in this webinar.
          </h2>
          <p className="text-[#A0A0A0] text-sm sm:text-base leading-relaxed">
            Learn the practical steps for abstract preparation, DOI and Google Scholar indexing,
            CPD credit readiness, and building a conference strategy that supports your research goals.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {topics.map((topic) => (
            <div
              key={topic}
              className="rounded-3xl border border-white/[0.08] bg-[#0C0C0C]/90 p-5 text-sm text-white/90"
            >
              <p className="font-semibold leading-relaxed">{topic}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 text-center"
        >
          <button
            onClick={() => openForm(RESEARCH_CTA)}
            className="inline-flex items-center rounded-full bg-[#FF1F1F] px-10 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-[#C70000] shadow-lg shadow-red-900/30"
          >
            {RESEARCH_CTA}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
