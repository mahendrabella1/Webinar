import { motion } from 'framer-motion';
import { ClipboardEdit, SendHorizonal, Monitor, Award, ArrowRight } from 'lucide-react';

const steps = [
  {
    num: '01',
    Icon: ClipboardEdit,
    title: 'Register',
    desc: 'Fill in the enquiry form with your name, email, phone, and organization. Pay ₹299 to confirm your seat.',
  },
  {
    num: '02',
    Icon: SendHorizonal,
    title: 'Submit Details',
    desc: 'Your registration details are sent to support@onegrasp.com. You\'ll receive a confirmation and the webinar link.',
  },
  {
    num: '03',
    Icon: Monitor,
    title: 'Attend Live',
    desc: 'Join the 2-hour live session on 23 July 2026 from anywhere in the world. Interact with expert panelists in real time.',
  },
  {
    num: '04',
    Icon: Award,
    title: 'Receive Certificate',
    desc: 'Get your CPD-accredited Certificate of Participation delivered to your email after the webinar concludes.',
  },
];

function scrollToForm() {
  const el = document.getElementById('enquiry-form');
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

export default function Process() {
  return (
    <section id="process" className="bg-[#050505] py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#FF1F1F] text-xs font-black uppercase tracking-[0.3em] mb-3">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mb-4">
            Your Simple 4-Step Journey
          </h2>
          <p className="text-[#A0A0A0] max-w-md mx-auto text-sm leading-relaxed">
            From registration to certificate — the entire process is seamless and takes less than 5 minutes to start.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line — desktop only */}
          <div
            className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-px"
            style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,31,31,0.3) 20%, rgba(255,31,31,0.3) 80%, transparent 100%)' }}
            aria-hidden="true"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(({ num, Icon, title, desc }, i) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col items-center text-center gap-4"
              >
                {/* Step circle */}
                <div className="relative flex-shrink-0">
                  <div className="w-[104px] h-[104px] rounded-full bg-[#0D0D0D] border-2 border-[#FF1F1F]/30 group-hover:border-[#FF1F1F]/70 flex flex-col items-center justify-center gap-1 transition-all duration-300 group-hover:shadow-[0_0_24px_rgba(255,31,31,0.25)] z-10 relative">
                    <Icon size={24} className="text-[#FF1F1F]" />
                    <span className="text-[#FF1F1F]/50 text-[10px] font-black uppercase tracking-widest">{num}</span>
                  </div>
                  {/* Arrow connector between steps (mobile hidden, for readability lg hidden handled by grid) */}
                  {i < steps.length - 1 && (
                    <div className="hidden sm:block lg:hidden absolute -right-7 top-1/2 -translate-y-1/2 text-[#FF1F1F]/30" aria-hidden="true">
                      <ArrowRight size={18} />
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="text-white font-black text-base mb-1.5">{title}</h3>
                  <p className="text-[#A0A0A0] text-xs leading-relaxed max-w-[200px] mx-auto">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA below steps */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-14 text-center"
        >
          <button
            onClick={scrollToForm}
            className="inline-flex items-center gap-2 bg-[#FF1F1F] hover:bg-[#C70000] text-white font-black px-9 py-4 rounded-lg transition-all duration-200 shadow-xl shadow-red-900/40 group"
          >
            Start Step 1 — Register Now
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
