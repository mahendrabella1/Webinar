import { Mail, Phone, Globe } from 'lucide-react';

function scrollToForm() {
  const el = document.getElementById('enquiry-form');
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Brand */}
          <div className="space-y-5 lg:col-span-1">
            <img
              src="https://onegrasp.com/wp-content/uploads/2026/05/logo.png"
              alt="OneGrasp Logo"
              width={150}
              height={38}
              loading="lazy"
              decoding="async"
              className="h-9 w-auto"
            />
            <p className="text-[#A0A0A0] text-sm leading-relaxed max-w-xs">
              OneGrasp organizes international scientific conferences and educational webinars for researchers and academics worldwide.
            </p>
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 bg-[#FF1F1F] hover:bg-[#C70000] text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-all duration-200 shadow-lg shadow-red-900/30"
            >
              Register Now — ₹299
            </button>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'About the Webinar', href: '#about' },
                { label: 'Expert Speakers',   href: '#speakers' },
                { label: 'Why OneGrasp',      href: '#why-onegrasp' },
                { label: 'FAQ',               href: '#faq' },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[#A0A0A0] hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-3 h-px bg-[#FF1F1F]/40 group-hover:w-5 group-hover:bg-[#FF1F1F] transition-all duration-200" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:support@onegrasp.com" className="flex items-start gap-3 group">
                  <Mail size={14} className="text-[#FF1F1F] mt-0.5 flex-shrink-0" />
                  <span className="text-[#A0A0A0] group-hover:text-white text-sm transition-colors duration-200">
                    support@onegrasp.com
                  </span>
                </a>
              </li>
              <li>
                <a href="tel:+918077760442" className="flex items-start gap-3 group">
                  <Phone size={14} className="text-[#FF1F1F] mt-0.5 flex-shrink-0" />
                  <span className="text-[#A0A0A0] group-hover:text-white text-sm transition-colors duration-200">
                    +91 80777 60442
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
                  <Globe size={14} className="text-[#FF1F1F] flex-shrink-0" />
                  <span className="text-[#A0A0A0] group-hover:text-white text-sm transition-colors duration-200">
                    onegrasp.com
                  </span>
                </a>
              </li>
            </ul>

            {/* Upcoming webinar callout */}
            <div className="bg-[#0D0D0D] border border-[#FF1F1F]/15 rounded-lg p-3 mt-4">
              <p className="text-[#FF1F1F] text-[10px] font-black uppercase tracking-widest mb-1">
                Upcoming Webinar
              </p>
              <p className="text-white text-xs font-semibold leading-snug">
                International Scientific Conferences: Importance &amp; Awareness
              </p>
              <p className="text-[#A0A0A0] text-[11px] mt-0.5">
                23 July 2026 · 06:00–08:00 PM IST · Online
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[#A0A0A0]/50 text-xs">
            &copy; 2026 OneGrasp. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {[
              { label: 'Privacy Policy', href: '#' },
              { label: 'Terms of Service', href: '#' },
              { label: 'Contact', href: 'mailto:support@onegrasp.com' },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-[#A0A0A0]/50 hover:text-white/70 text-xs transition-colors duration-200"
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
