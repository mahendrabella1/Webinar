import { motion } from 'framer-motion';

import { Globe, Award, FileText, ArrowRight, Mic, Users, CheckCircle2 } from 'lucide-react';
import Collaborators from './Collaborators';

export default function OneGraspConferences() {
  return (
    <section id="where-to-attend" className="relative py-28 overflow-hidden bg-[#080808]">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center opacity-[0.18]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-[#080808]/70 to-[#080808]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/80 via-transparent to-[#080808]/80" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Curiosity Question Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#FF1F1F]/12 border border-[#FF1F1F]/30 rounded-full px-5 py-2 mb-5">
            <span className="text-[#FF1F1F] text-xs font-bold uppercase tracking-widest">
              After the Webinar
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mb-4">
            Where Can I Attend
            <br />
            <span className="text-[#FF1F1F]">These Conferences?</span>
          </h2>
          <p className="text-[#A0A0A0] max-w-2xl mx-auto text-sm leading-relaxed">
            Good question. After attending this webinar, you'll know exactly what international
            scientific conferences are and why they matter. The next step? Participate in one
            yourself.
          </p>
        </motion.div>

        {/* OneGrasp intro card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-gradient-to-br from-[#0D0D0D] to-[#0A0A0A] border border-white/[0.1] rounded-2xl p-8 lg:p-10 mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Left: Info */}
            <div className="flex-1 space-y-5">
              <div className="flex items-center gap-3">
                <img 
                  src="https://onegrasp.com/wp-content/uploads/2026/05/logo.png" 
                  alt="OneGrasp Logo"
                  className="h-12 w-auto"
                />
              </div>

              <p className="text-[#A0A0A0] text-sm leading-relaxed">
                OneGrasp organizes international scientific conferences across multiple disciplines —
                Engineering, Medical Sciences, Management, Social Sciences, and more. Every conference
                is designed to give researchers, academics, and professionals the platform to present
                their work, earn accredited certificates, and gain global visibility.
              </p>

              {/* 6 powerful benefits given by OneGrasp */}
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                {[
                  { Icon: Award, title: 'CPD Certificates', desc: 'Participant & presenter certificates accredited for CPD.' },
                  { Icon: FileText, title: 'Crossref DOI', desc: 'Permanent, globally citable Digital Object Identifier for every abstract.' },
                  { Icon: Globe, title: 'Global Indexing', desc: 'Indexed in Google Scholar and 10+ prestigious international directories.' },
                  { Icon: Mic, title: 'Keynote Pathway', desc: 'A clear roadmap to transition from attendee to invited keynote presenter.' },
                  { Icon: Users, title: 'Peer Networking', desc: 'Connect with senior researchers and scholars from 20+ countries.' },
                  { Icon: CheckCircle2, title: 'Fast Review', desc: 'Streamlined and transparent abstract evaluation by peer review boards.' },
                ].map(({ Icon, title, desc }) => (
                  <div key={title} className="flex gap-3 bg-white/[0.03] rounded-lg p-4">
                    <div className="w-9 h-9 rounded flex items-center justify-center bg-[#FF1F1F]/12 border border-[#FF1F1F]/30 flex-shrink-0">
                      <Icon size={14} className="text-[#FF1F1F]" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{title}</p>
                      <p className="text-[#A0A0A0] text-xs leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: CTA */}
            <div className="lg:w-72 flex-shrink-0 bg-[#050505] border border-white/[0.08] rounded-xl p-6 text-center">
              <p className="text-white/50 text-xs uppercase tracking-widest mb-3">Next Step</p>
              <p className="text-white font-bold text-lg mb-4">
                Attend an International Scientific Conference
              </p>
              <a
                href="https://onegrasp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-[#FF1F1F] hover:bg-[#C70000] text-white font-bold py-3 rounded-sm transition-all duration-200 shadow-lg shadow-red-900/40"
              >
                View Upcoming Conferences
                <ArrowRight size={14} />
              </a>
              <p className="text-white/30 text-xs mt-4">
                onegrasp.com/events
              </p>
            </div>
          </div>
        </motion.div>

        {/* Partners section - embedded here after OneGrasp intro */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Collaborators inline />
        </motion.div>
      </div>
    </section>
  );
}
