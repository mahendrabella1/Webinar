import { motion } from 'framer-motion';

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
  'Presentation Certificate',
  'International Indexing Directories',
  'Conference Publishing Ethics',
  'Virtual vs In-Person Conferences',
  'OneGrasp Conference Process',
  'How to Write an Abstract',
  'Conference Registration Fees',
  'Career Benefits for Academics',
];

export default function ResearchAreas() {
  return (
    <section id="research" className="bg-[#080808] py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(199,0,0,0.06),transparent_60%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#FF1F1F] text-xs font-bold uppercase tracking-[0.3em] mb-3">
            Session Topics
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mb-4">
            Topics We'll Cover
          </h2>
          <p className="text-[#A0A0A0] max-w-xl mx-auto text-sm leading-relaxed">
            Every question you've ever had about scientific conferences — answered in one session.
          </p>
        </motion.div>

        {/* Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {topics.map((topic, i) => (
            <motion.span
              key={topic}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.03 }}
              className="px-5 py-2.5 rounded-full border border-white/[0.1] bg-[#0D0D0D] text-[#A0A0A0] text-sm font-medium hover:border-[#FF1F1F]/60 hover:text-white transition-all duration-200 cursor-default"
            >
              {topic}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
