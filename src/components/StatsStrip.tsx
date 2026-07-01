import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

// Global conference & research statistics — builds curiosity and authority
const stats = [
  {
    value: 170,
    suffix: 'M+',
    label: 'Metadata Records',
    sub: 'indexed by Crossref globally',
  },
  {
    value: 10000,
    suffix: '+',
    label: 'Conferences Annually',
    sub: 'held worldwide every year',
  },
  {
    value: 88,
    suffix: '%',
    label: 'Researchers Agree',
    sub: 'conferences accelerated their career',
  },
  {
    value: 1,
    suffix: 'M+',
    label: 'Papers Published',
    sub: 'via conferences per year globally',
  },
  {
    value: 20,
    suffix: '+',
    label: 'Countries',
    sub: 'represented in OneGrasp events',
  },
];

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const step = Math.max(1, Math.ceil(value / (duration / 16)));
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
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function StatsStrip() {
  return (
    <section className="bg-[#080808] border-y border-white/[0.05] overflow-hidden">
      {/* Top red accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#FF1F1F]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-white/25 text-[10px] uppercase tracking-[0.35em] font-bold mb-8"
        >
          Did you know? — Global Conference & Research Facts
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-0 lg:divide-x lg:divide-white/[0.06]">
          {stats.map(({ value, suffix, label, sub }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="flex flex-col items-center text-center px-4 py-3"
            >
              <p className="text-[#FF1F1F] font-black text-3xl sm:text-4xl leading-none mb-1.5">
                <CountUp value={value} suffix={suffix} />
              </p>
              <p className="text-white font-bold text-xs uppercase tracking-wider mb-0.5">
                {label}
              </p>
              <p className="text-white/35 text-[11px] leading-snug">{sub}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#FF1F1F]/20 to-transparent" />
    </section>
  );
}
