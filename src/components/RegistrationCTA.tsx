import { motion } from 'framer-motion';
import { ArrowRight, Shield, Clock, Globe } from 'lucide-react';
import { useRegistration } from '../context/RegistrationContext';

export const CTA_BUTTONS = [
  'Secure My Seat',
  'Join the Webinar',
  'Get Access Now',
  'Register Today',
  'Claim Your Spot',
  'Start Learning',
  'Enroll Now',
  'Book Your Place',
  'Begin Your Journey',
  'Secure Your Seat',
  'Lock in Your Spot',
  'Get Instant Access',
  'Attend Live',
  'Sign Up Now',
  'Get All the Insights',
];

export default function RegistrationCTA() {
  const { openForm } = useRegistration();
  return (
    <section
      id="register"
      className="relative py-32 overflow-hidden bg-[#050505]"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://images.pexels.com/photos/1708912/pexels-photo-1708912.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#1a0000]/70 to-[#050505]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(199,0,0,0.35),transparent_70%)]" />
      </div>
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,31,31,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,31,31,0.6) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-12 text-center"
        >
          <div className="space-y-6">
            <p className="text-[#FF1F1F]/90 text-xs font-bold uppercase tracking-[0.3em]">
              Limited Spots Available
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase leading-tight">
              Ready to Join Our{' '}
              <span className="text-[#FF1F1F]">Webinar?</span>
            </h2>
            <p className="text-white/65 text-lg max-w-2xl mx-auto leading-relaxed">
              Join hundreds of researchers and professionals learning everything about international scientific conferences in one powerful 2-hour live session for just ₹299.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap justify-center gap-4 py-3">
              {[
                { Icon: Shield, text: 'Secure Your Seat' },
                { Icon: Clock, text: '2 Hours Live' },
                { Icon: Globe, text: 'Join Anywhere' },
              ].map(({ Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 bg-white/[0.06] border border-white/[0.1] rounded-full px-4 py-2 text-white/75 text-sm backdrop-blur-sm"
                >
                  <Icon size={13} className="text-[#FF1F1F]" />
                  {text}
                </div>
              ))}
            </div>

            {/* What you'll get block */}
            <div className="bg-white/[0.04] border border-white/[0.1] rounded-xl px-6 py-5 max-w-2xl mx-auto text-left">
              <p className="text-white/50 text-xs uppercase tracking-wider font-bold mb-3">You'll walk away knowing:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[
                  'What international scientific conferences are',
                  'How to submit research & get a Crossref DOI',
                  'How to earn CPD credits',
                  'How to become a keynote speaker',
                  'OneGrasp\'s upcoming conference calendar',
                  'Networking opportunities & career benefits',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/70">
                    <span className="text-[#FF1F1F] mt-0.5 flex-shrink-0">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <button
              onClick={() => openForm('Secure My Seat')}
              className="inline-flex items-center gap-2 bg-[#FF1F1F] hover:bg-[#C70000] text-white font-semibold text-base px-8 py-3 rounded-sm transition-all duration-200 shadow-lg shadow-red-900/40 hover:shadow-red-900/60"
            >
              Secure My Seat
              <ArrowRight size={16} />
            </button>
          </div>

          <p className="text-white/30 text-xs pt-8">
            🎯 23 July 2026 · 06:00 PM – 08:00 PM IST · Online Webinar · onegrasp.com/events
          </p>
        </motion.div>
      </div>
    </section>
  );
}
