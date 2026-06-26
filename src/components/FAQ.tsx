import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'What exactly is this webinar about?',
    a: 'This is a paid 2-hour live educational masterclass titled "International Scientific Conferences: Importance & Awareness." It is designed to educate researchers, academics, students, and professionals about what scientific conferences are, why they matter, and how to participate and benefit from them.',
  },
  {
    q: 'Who should attend this webinar?',
    a: 'Anyone who wants to understand international scientific conferences — PhD scholars, postgraduate students, faculty members, independent researchers, industry professionals, and anyone curious about publishing research or growing their academic profile. No prior knowledge is required.',
  },
  {
    q: 'Is this webinar free to attend?',
    a: 'No. This is a paid webinar with a registration fee of ₹299. Secure your access via the registration button to join the live session.',
  },
  {
    q: 'Will I receive a certificate for attending?',
    a: 'Yes. Every registered attendee who joins the live session receives a Certificate of Participation from OneGrasp. This certificate confirms your attendance and learning participation.',
  },
  {
    q: 'How will I receive the joining link?',
    a: 'The webinar joining link and instructions will be sent to your registered email address 24 hours before the session. Please ensure you register with a valid email you check regularly.',
  },
  {
    q: 'What is a DOI and will I learn about it in this webinar?',
    a: 'A DOI (Digital Object Identifier) is a permanent, globally recognized reference to a research document. During the webinar, you will learn exactly what a Crossref DOI is, why it matters for your research, and how OneGrasp helps participants get a DOI for their submitted abstracts.',
  },
  {
    q: 'What happens after this webinar — are there real conferences I can join?',
    a: 'Absolutely. This webinar is your starting point. After attending, you will know exactly how to participate in OneGrasp\'s international scientific conferences as an attendee, abstract presenter, or even keynote speaker. Upcoming conferences will be announced at the close of this session.',
  },
];

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className={`border-b border-white/[0.07] transition-colors duration-200 ${isOpen ? 'border-[#FF1F1F]/20' : ''}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span
          className={`text-sm sm:text-base font-semibold leading-snug transition-colors duration-200 ${
            isOpen ? 'text-white' : 'text-white/80 group-hover:text-white'
          }`}
        >
          {q}
        </span>
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-200 ${
            isOpen
              ? 'border-[#FF1F1F] bg-[#FF1F1F]/10 text-[#FF1F1F]'
              : 'border-white/20 text-[#A0A0A0] group-hover:border-white/40'
          }`}
        >
          {isOpen ? <Minus size={13} /> : <Plus size={13} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-[#A0A0A0] text-sm leading-relaxed pb-5">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#050505] py-24 relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-[radial-gradient(ellipse_at_bottom_right,rgba(199,0,0,0.05),transparent_70%)] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#FF1F1F] text-xs font-bold uppercase tracking-[0.3em] mb-3">
            Questions
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mb-4">
            Frequently Asked
          </h2>
          <p className="text-[#A0A0A0] max-w-md mx-auto text-sm leading-relaxed">
            Still unsure? Everything you need to know about this paid educational masterclass.
            For anything else, reach us at{' '}
            <a href="mailto:support@onegrasp.com" className="text-[#FF1F1F] hover:underline">
              support@onegrasp.com
            </a>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-[#0D0D0D] border border-white/[0.08] rounded-xl px-6 sm:px-8"
        >
          {faqs.map((item, i) => (
            <FAQItem
              key={i}
              q={item.q}
              a={item.a}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
