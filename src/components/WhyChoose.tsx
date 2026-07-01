import { motion } from 'framer-motion';
import {
  Globe,
  FileText,
  BookOpen,
  Mic,
  Users,
  Zap,
  Award,
  ArrowRight,
} from 'lucide-react';

const features = [
  {
    Icon: Globe,
    title: 'International Recognition',
    desc: 'Your research and participation are recognized by academic institutions worldwide, boosting your global academic standing.',
  },
  {
    Icon: FileText,
    title: 'DOI Publications',
    desc: 'Every accepted abstract receives a Crossref DOI — a permanent, globally citable identifier for your research.',
  },
  {
    Icon: BookOpen,
    title: 'Indexed Proceedings',
    desc: 'Conference proceedings are indexed in Google Scholar and 10+ international academic directories for maximum visibility.',
  },
  {
    Icon: Mic,
    title: 'Expert Speakers',
    desc: 'Learn from experienced academics and conference chairs who have published, presented, and organized international events.',
  },
  {
    Icon: Users,
    title: 'Global Networking',
    desc: 'Connect with researchers, faculty, and professionals from 20+ countries all sharing the same academic goals.',
  },
  {
    Icon: Zap,
    title: 'Fast Review Process',
    desc: 'OneGrasp\'s streamlined abstract review process gives you timely feedback and quick confirmation for upcoming conferences.',
  },
  {
    Icon: Award,
    title: 'Accredited Certificate',
    desc: 'Receive an accredited Certificate of Participation (CPD-recognized) upon attending this live webinar session.',
  },
];

function scrollToForm() {
  const el = document.getElementById('enquiry-form');
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

export default function WhyChoose() {
  return (
    <section id="why-onegrasp" className="relative py-24 bg-[#080808] overflow-hidden">
      {/* Subtle red radial glow top-right */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(ellipse_at_top_right,rgba(199,0,0,0.07),transparent_70%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#FF1F1F] text-xs font-black uppercase tracking-[0.3em] mb-3">
            Why OneGrasp
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mb-4">
            Why Choose OneGrasp Conferences
          </h2>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#FF1F1F]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#FF1F1F]" />
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#FF1F1F]" />
          </div>
          <p className="text-[#A0A0A0] max-w-xl mx-auto text-sm leading-relaxed">
            Every feature is designed to maximize your academic impact, research credibility,
            and career visibility on the global stage.
          </p>
        </motion.div>

        {/* Feature cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
          {features.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="group bg-[#0D0D0D] border border-white/[0.08] rounded-xl p-6
                         hover:border-[#FF1F1F]/40 hover:shadow-[0_4px_32px_rgba(255,31,31,0.1)]
                         transition-all duration-300 relative overflow-hidden"
            >
              {/* Top accent bar on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#FF1F1F] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div className="w-11 h-11 rounded-lg bg-[#FF1F1F]/12 border border-[#FF1F1F]/25 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon size={18} className="text-[#FF1F1F]" />
              </div>

              <h3 className="text-white font-bold text-sm mb-2 leading-snug">{title}</h3>
              <p className="text-[#A0A0A0] text-xs leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-5 bg-[#0D0D0D] border border-white/[0.1] rounded-xl px-7 py-5"
        >
          <p className="text-white/60 text-sm text-center sm:text-left">
            Join <span className="text-white font-bold">1000+ professionals</span> learning everything about international scientific conferences.
          </p>
          <button
            onClick={scrollToForm}
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#FF1F1F] hover:bg-[#C70000] text-white font-bold text-sm px-6 py-3 rounded-lg transition-all duration-200 shadow-lg shadow-red-900/30 group"
          >
            Register Now
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
