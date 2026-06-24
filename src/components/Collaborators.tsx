import { motion } from 'framer-motion';

const partners = [
  { name: 'Crossref', logo: 'https://onegrasp.com/wp-content/uploads/2026/01/crossref.png', desc: 'DOI Registration' },
  { name: 'DOI', logo: 'https://onegrasp.com/wp-content/uploads/2026/01/doi.png', desc: 'Digital Object Identifier' },
  { name: 'CPD', logo: 'https://onegrasp.com/wp-content/uploads/2026/01/cpd1.png', desc: 'Professional Development' },
  { name: 'IntelliMind', logo: 'https://onegrasp.com/wp-content/uploads/2026/01/intellimind.png', desc: 'Research Partner' },
  { name: 'Partner', logo: 'https://onegrasp.com/wp-content/uploads/2026/01/five.png', desc: 'Indexing Partner' },
  { name: 'Partner', logo: 'https://onegrasp.com/wp-content/uploads/2026/01/six.png', desc: 'Publishing Partner' },
  { name: 'Citation Index', logo: 'https://onegrasp.com/wp-content/uploads/2026/01/citation-index.png', desc: 'Citation Indexing' },
];

const allPartners = [...partners, ...partners];

interface CollaboratorsProps {
  inline?: boolean;
}

export default function Collaborators({ inline = false }: CollaboratorsProps) {
  const content = (
    <>
      {/* Header */}
      <motion.div
        initial={inline ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <p className="text-[#FF1F1F] text-xs font-bold uppercase tracking-[0.3em] mb-2">
          Backed by Global Partners
        </p>
        <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-2">
          Indexing & Certification Bodies
        </h3>
        <p className="text-[#A0A0A0] text-sm leading-relaxed max-w-lg mx-auto">
          Every OneGrasp conference is indexed and recognised by leading academic databases
          and certification organisations worldwide.
        </p>
      </motion.div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />
        <div className="flex gap-6 animate-marquee w-max">
          {allPartners.map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="group flex-shrink-0 flex flex-col items-center gap-2.5 bg-[#0D0D0D] border border-white/[0.08] rounded-lg px-6 py-4 hover:border-[#FF1F1F]/30 transition-all duration-300 min-w-[130px]"
            >
              <div className="h-10 w-24 flex items-center justify-center">
                <img
                  src={p.logo}
                  alt={p.name}
                  className="max-h-9 max-w-full object-contain filter brightness-75 group-hover:brightness-110 transition-all duration-300"
                  loading="lazy"
                />
              </div>
              <p className="text-[#A0A0A0] text-[10px] uppercase tracking-wider font-medium text-center">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="flex flex-wrap justify-center gap-6 mt-10 pt-6 border-t border-white/[0.05]">
        {[
          { num: '170M+', label: 'Metadata Records' },
          { num: '10+', label: 'Indexing Directories' },
          { num: 'Crossref', label: 'DOI Registration' },
          { num: 'Global', label: 'Reach' },
        ].map((s) => (
          <div key={s.label} className="text-center px-4">
            <p className="text-white font-bold text-lg">{s.num}</p>
            <p className="text-[#A0A0A0] text-xs uppercase tracking-wider">{s.label}</p>
          </div>
        ))}
      </div>
    </>
  );

  if (inline) {
    return <div className="bg-[#0A0A0A] rounded-xl p-6 border border-white/[0.06]">{content}</div>;
  }

  return (
    <section className="bg-[#050505] py-20 relative overflow-hidden border-y border-white/[0.05]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,31,31,0.04),transparent_70%)]" />
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">{content}</div>
    </section>
  );
}
