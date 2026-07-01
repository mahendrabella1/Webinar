import { motion } from 'framer-motion';
import { ArrowRight, Shield, Clock, Globe } from 'lucide-react';

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

function scrollToForm() {
  const el = document.getElementById('enquiry-form');
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

export default function RegistrationCTA() {
  return (
    <section
      id="register"
      className="relative py-28 overflow-hidden bg-[#050505]"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://images.pexels.com/photos/1708912/pexels-photo-1708912.jpeg?auto=compress&cs=tinysrgb&w=1920"
          srcSet="https://images.pexels.com/photos/1708912/pexels-photo-1708912.jpeg?auto=compress&cs=tinysrgb&w=640 640w, https://images.pexels.com/photos/1708912/pexels-photo-1708912.jpeg?auto=compress&cs=tinysrgb&w=1280 1280w"
          sizes="100vw"
          alt=""
          aria-hidden="true"
          width={1280}
          height={720}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#1a0000]/65 to-[#050505]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(199,0,0,0.30),transparent_70%)]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-10 text-center"
        >
          <div className="space-y-5">
            <p className="text-[#FF1F1F]/90 text-xs font-black uppercase tracking-[0.3em]">
              Limited Spots Available
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-white uppercase leading-tight">
              Ready to Join Our{' '}
              <span className="text-[#FF1F1F]">Webinar?</span>
            </h2>
            <p className="text-white/60 text-base max-w-xl mx-auto leading-relaxed">
              Join hundreds of researchers and professionals learning everything about international
              scientific conferences in one powerful 2-hour live session for just ₹299.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap justify-center gap-3 pt-1">
              {[
                { Icon: Shield, text: 'Secure Your Seat' },
                { Icon: Clock,  text: '2 Hours Live' },
                { Icon: Globe,  text: 'Join Anywhere' },
              ].map(({ Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 bg-white/[0.06] border border-white/[0.1] rounded-full px-4 py-2 text-white/70 text-sm backdrop-blur-sm"
                >
                  <Icon size={12} className="text-[#FF1F1F]" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Primary CTA — scrolls to above-fold form */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 bg-[#FF1F1F] hover:bg-[#C70000] text-white font-black text-base px-10 py-4 rounded-lg transition-all duration-200 shadow-xl shadow-red-900/40 hover:shadow-red-900/60 group"
            >
              Secure My Seat — ₹299
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <p className="text-white/25 text-xs pt-2">
            🎯 23 July 2026 · 06:00 PM – 08:00 PM IST · Online Webinar · onegrasp.com
          </p>
        </motion.div>
      </div>
    </section>
  );
}
