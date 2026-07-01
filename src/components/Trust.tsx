import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

// Partner logos (reuse from Collaborators data)
const partners = [
  { name: 'Crossref',       logo: 'https://onegrasp.com/wp-content/uploads/2026/01/crossref.png',       desc: 'DOI Registration' },
  { name: 'DOI',            logo: 'https://onegrasp.com/wp-content/uploads/2026/01/doi.png',            desc: 'Digital Object Identifier' },
  { name: 'CPD',            logo: 'https://onegrasp.com/wp-content/uploads/2026/01/cpd1.png',           desc: 'Professional Development' },
  { name: 'IntelliMind',    logo: 'https://onegrasp.com/wp-content/uploads/2026/01/intellimind.png',    desc: 'Research Partner' },
  { name: 'Indexing',       logo: 'https://onegrasp.com/wp-content/uploads/2026/01/five.png',           desc: 'Indexing Partner' },
  { name: 'Publishing',     logo: 'https://onegrasp.com/wp-content/uploads/2026/01/six.png',            desc: 'Publishing Partner' },
  { name: 'Citation Index', logo: 'https://onegrasp.com/wp-content/uploads/2026/01/citation-index.png', desc: 'Citation Indexing' },
];
const marqueeItems = [...partners, ...partners]; // duplicate for seamless loop

// Key statistics
const stats = [
  { value: 1000, suffix: '+', label: 'Professionals Expected' },
  { value: 20,   suffix: '+', label: 'Countries Represented' },
  { value: 18,   suffix: '+', label: 'Topics Covered' },
  { value: 4,    suffix: '+', label: 'Expert Speakers' },
];

// Testimonials
const testimonials = [
  {
    quote: 'Attending this webinar completely changed how I think about academic publishing. The DOI explanation alone was worth ₹299.',
    name: 'Dr. Priya Sharma',
    role: 'Assistant Professor, Delhi University',
    initials: 'PS',
  },
  {
    quote: "I had no idea how indexed conferences could boost a researcher's visibility. OneGrasp made it crystal clear in 2 hours.",
    name: 'Rajesh Kumar',
    role: 'PhD Scholar, IIT Bombay',
    initials: 'RK',
  },
  {
    quote: "The keynote speaker pathway session was incredibly practical. Highly recommend to any early-career researcher.",
    name: 'Dr. Anusha Reddy',
    role: 'Faculty, Osmania University',
    initials: 'AR',
  },
];

// ─── Animated count-up number ─────────────────────────────────────────────────
function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const step = Math.ceil(value / (duration / 16));
    let cur = 0;
    const id = setInterval(() => {
      cur = Math.min(cur + step, value);
      setCount(cur);
      if (cur >= value) clearInterval(id);
    }, 16);
    return () => clearInterval(id);
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

// ─── Trust Section ────────────────────────────────────────────────────────────
export default function Trust() {
  return (
    <section className="bg-[#050505] py-16 overflow-hidden border-y border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-14">

        {/* 1. Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-[#FF1F1F] text-xs font-black uppercase tracking-[0.3em] mb-2">
            Trusted Globally
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
            Backed by Leading Indexing &amp; Certification Bodies
          </h2>
        </motion.div>

        {/* 2. Partner logos marquee */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
          <div className="flex gap-5 animate-marquee w-max">
            {marqueeItems.map((p, i) => (
              <div
                key={`${p.name}-${i}`}
                className="flex-shrink-0 flex flex-col items-center gap-2 bg-[#0D0D0D] border border-white/[0.08] rounded-xl px-5 py-4 hover:border-[#FF1F1F]/30 transition-colors duration-300 min-w-[130px]"
              >
                <div className="h-9 w-20 flex items-center justify-center">
                  <img
                    src={p.logo}
                    alt={p.name}
                    loading="lazy"
                    decoding="async"
                    className="max-h-8 max-w-full object-contain brightness-75 hover:brightness-100 transition-all duration-300"
                  />
                </div>
                <p className="text-[#A0A0A0] text-[10px] uppercase tracking-wider font-medium text-center">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-[#0D0D0D] border border-white/[0.08] rounded-xl p-5 text-center hover:border-[#FF1F1F]/30 transition-colors duration-300"
            >
              <p className="text-[#FF1F1F] font-black text-3xl sm:text-4xl mb-1">
                <CountUp value={s.value} suffix={s.suffix} />
              </p>
              <p className="text-white/60 text-xs uppercase tracking-wider">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* 4. Testimonials */}
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-white/40 text-xs uppercase tracking-[0.3em] font-bold mb-6"
          >
            What Past Attendees Say
          </motion.p>
          <div className="grid sm:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#0D0D0D] border border-white/[0.08] rounded-xl p-6 hover:border-[#FF1F1F]/25 transition-colors duration-300 flex flex-col gap-4"
              >
                {/* Stars */}
                <div className="flex gap-0.5" aria-label="5 stars">
                  {[...Array(5)].map((_, si) => (
                    <svg key={si} viewBox="0 0 12 12" className="w-3.5 h-3.5 fill-[#FF1F1F]">
                      <polygon points="6,1 7.5,4.5 11.5,4.5 8.5,7 9.5,11 6,8.5 2.5,11 3.5,7 0.5,4.5 4.5,4.5" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-white/75 text-sm leading-relaxed flex-1">
                  "{t.quote}"
                </blockquote>
                <div className="flex items-center gap-3 pt-1 border-t border-white/[0.06]">
                  <div className="w-9 h-9 rounded-full bg-[#FF1F1F]/20 border border-[#FF1F1F]/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#FF1F1F] text-xs font-black">{t.initials}</span>
                  </div>
                  <div>
                    <p className="text-white text-xs font-bold">{t.name}</p>
                    <p className="text-white/40 text-[11px]">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
