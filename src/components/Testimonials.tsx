import { motion } from 'framer-motion';

const reviews = [
  {
    quote:
      'I had been submitting papers to local journals for years with no visibility. After attending an international conference organised by OneGrasp, my abstract got a DOI and appeared in Google Scholar within weeks. My citation count jumped in 3 months.',
    name: 'Dr. Priya Menon',
    role: 'Assistant Professor — Biotechnology',
    org: 'Amrita Vishwa Vidyapeetham',
    initials: 'PM',
    rating: 5,
  },
  {
    quote:
      'What surprised me most was how structured the conference process was — from abstract submission to indexed proceedings. OneGrasp handled everything professionally. This webinar would have saved me months of confusion when I first started.',
    name: 'Rajesh Kumar',
    role: 'PhD Scholar — Computer Science',
    org: 'IIT Bombay',
    initials: 'RK',
    rating: 5,
  },
  {
    quote:
      'The webinar explained concepts I had been guessing at for years — what indexed conferences actually mean, why a DOI matters, and how to use conferences to become a keynote speaker. Two hours, but worth a year of learning.',
    name: 'Dr. Anusha Reddy',
    role: 'Senior Researcher',
    org: 'Osmania University',
    initials: 'AR',
    rating: 5,
  },
];

// ─── Pull-quote / stat callout ────────────────────────────────────────────────
const pullQuote = {
  stat: '92%',
  text: 'of researchers say attending international conferences significantly improved their academic credibility and peer visibility.',
  source: 'Elsevier Researcher Report 2023',
};

export default function Testimonials() {
  return (
    <section className="bg-[#050505] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-[#FF1F1F] text-xs font-black uppercase tracking-[0.3em] mb-3">
            Real Results
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
            What Researchers Say After Attending
          </h2>
        </motion.div>

        {/* Pull-quote stat */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative bg-gradient-to-r from-[#FF1F1F]/10 to-[#0D0D0D] border border-[#FF1F1F]/20 rounded-2xl px-8 py-8 sm:px-12 flex flex-col sm:flex-row items-center gap-6 sm:gap-10 overflow-hidden"
        >
          {/* Decorative quote mark */}
          <div
            className="absolute -top-4 -left-2 text-[10rem] font-black text-[#FF1F1F]/5 leading-none select-none pointer-events-none"
            aria-hidden="true"
          >
            "
          </div>

          <div className="flex-shrink-0 text-center">
            <p className="text-[#FF1F1F] font-black text-5xl sm:text-6xl leading-none">
              {pullQuote.stat}
            </p>
          </div>
          <div>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed font-medium mb-2">
              {pullQuote.text}
            </p>
            <p className="text-white/30 text-xs italic">— {pullQuote.source}</p>
          </div>
        </motion.div>

        {/* Review cards */}
        <div className="grid sm:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#0D0D0D] border border-white/[0.08] rounded-xl p-6 hover:border-[#FF1F1F]/25 transition-colors duration-300 flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex gap-0.5" aria-label={`${r.rating} stars`}>
                {[...Array(r.rating)].map((_, si) => (
                  <svg key={si} viewBox="0 0 12 12" className="w-3.5 h-3.5 fill-[#FF1F1F]">
                    <polygon points="6,1 7.5,4.5 11.5,4.5 8.5,7 9.5,11 6,8.5 2.5,11 3.5,7 0.5,4.5 4.5,4.5" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-white/75 text-sm leading-relaxed flex-1">
                "{r.quote}"
              </blockquote>

              <div className="flex items-center gap-3 pt-2 border-t border-white/[0.06]">
                <div className="w-9 h-9 rounded-full bg-[#FF1F1F]/15 border border-[#FF1F1F]/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#FF1F1F] text-xs font-black">{r.initials}</span>
                </div>
                <div>
                  <p className="text-white text-xs font-bold">{r.name}</p>
                  <p className="text-white/40 text-[11px]">{r.role}</p>
                  <p className="text-white/25 text-[10px]">{r.org}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
