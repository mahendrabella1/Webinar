import { Mail, Phone, Globe, ArrowRight } from 'lucide-react';
import { useRegistration } from '../context/RegistrationContext';

export default function Footer() {
  const { openForm } = useRegistration();
  return (
    <footer className="bg-[#080808] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-2">
              <img 
                src="https://onegrasp.com/wp-content/uploads/2026/05/logo.png" 
                alt="OneGrasp Logo"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-[#A0A0A0] text-xs uppercase tracking-[0.25em] font-medium">
              Learn &nbsp;·&nbsp; Connect &nbsp;·&nbsp; Grow
            </p>
            <p className="text-[#A0A0A0] text-sm leading-relaxed max-w-xs">
              OneGrasp organizes international scientific conferences and educational webinars,
              helping researchers and professionals build global academic visibility.
            </p>

            {/* Webinar detail card */}
            <div className="bg-[#0D0D0D] border border-[#FF1F1F]/20 rounded-lg p-4">
              <p className="text-[#FF1F1F] text-[10px] font-bold uppercase tracking-widest mb-2">
                Upcoming Webinar
              </p>
              <p className="text-white font-bold text-sm">
                International Scientific Conferences: Importance & Awareness
              </p>
              <p className="text-[#A0A0A0] text-xs mt-1">23 July 2026 · 06:00–08:00 PM IST · Online</p>
              <button
                onClick={() => openForm('Footer - Register Today')}
                className="mt-3 inline-flex items-center gap-1.5 text-[#FF1F1F] text-xs font-bold hover:gap-2.5 transition-all duration-200 cursor-pointer bg-none border-none p-0"
              >
                Secure My Seat
                <ArrowRight size={11} />
              </button>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-5">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'About the Webinar', href: '#about' },
                { label: 'What You\'ll Learn', href: '#benefits' },
                { label: 'Webinar Agenda', href: '#agenda' },
                { label: 'Expert Speakers', href: '#speakers' },
                { label: 'Topics Covered', href: '#research' },
                { label: 'FAQ', href: '#faq' },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[#A0A0A0] hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-[#FF1F1F]/40 group-hover:w-6 group-hover:bg-[#FF1F1F] transition-all duration-200" />
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={() => openForm('Footer Quick Links - Register')}
                  className="text-[#A0A0A0] hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group cursor-pointer bg-none border-none p-0"
                >
                  <span className="w-4 h-px bg-[#FF1F1F]/40 group-hover:w-6 group-hover:bg-[#FF1F1F] transition-all duration-200" />
                  Register Free
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:support@onegrasp.com" className="flex items-start gap-3 group">
                  <Mail size={15} className="text-[#FF1F1F] mt-0.5 flex-shrink-0" />
                  <span className="text-[#A0A0A0] group-hover:text-white text-sm transition-colors duration-200">
                    support@onegrasp.com
                  </span>
                </a>
              </li>
              <li>
                <a href="tel:+918077760442" className="flex items-start gap-3 group">
                  <Phone size={15} className="text-[#FF1F1F] mt-0.5 flex-shrink-0" />
                  <span className="text-[#A0A0A0] group-hover:text-white text-sm transition-colors duration-200">
                    +91 8077760442
                    <br />
                    +91 8077760443
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://onegrasp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <Globe size={15} className="text-[#FF1F1F] flex-shrink-0" />
                  <span className="text-[#A0A0A0] group-hover:text-white text-sm transition-colors duration-200">
                    onegrasp.com
                  </span>
                </a>
              </li>
            </ul>

            {/* Partners logos strip */}
            <div className="pt-2">
              <p className="text-white/30 text-[10px] uppercase tracking-widest mb-3">Indexed Through</p>
              <div className="flex flex-wrap gap-2">
                {[
                  'https://onegrasp.com/wp-content/uploads/2026/01/crossref.png',
                  'https://onegrasp.com/wp-content/uploads/2026/01/doi.png',
                  'https://onegrasp.com/wp-content/uploads/2026/01/cpd1.png',
                ].map((src, i) => (
                  <div key={i} className="w-14 h-8 bg-[#0D0D0D] border border-white/[0.06] rounded flex items-center justify-center p-1.5">
                    <img src={src} alt="Partner logo" className="max-h-full max-w-full object-contain filter brightness-50" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#A0A0A0]/60 text-xs">
            &copy; 2026 OneGrasp. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {[
              { label: 'Privacy Policy', href: '#' },
              { label: 'Terms of Service', href: '#' },
              { label: 'Contact', href: 'mailto:support@onegrasp.com' },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-[#A0A0A0]/60 hover:text-white/80 text-xs transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
