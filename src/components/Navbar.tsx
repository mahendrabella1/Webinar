import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Only 3 nav links — fewer distractions = higher conversion
const navLinks = [
  { label: 'Webinar', href: '#about' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'FAQ', href: '#faq' },
];

function scrollToForm() {
  const el = document.getElementById('enquiry-form');
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050505]/95 backdrop-blur-md border-b border-white/10 shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 flex-shrink-0">
          <img
            src="/images/logo.png"
            alt="OneGrasp Logo"
            width={160}
            height={40}
            className="h-8 md:h-9 w-auto"
          />
        </a>

        {/* Desktop links — minimal, 3 only */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[#A0A0A0] hover:text-white text-sm font-medium tracking-wide transition-colors duration-200 relative group"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 group-hover:w-full h-px bg-[#FF1F1F] transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA — scrolls to the above-fold enquiry form */}
        <button
          id="navbar-cta"
          onClick={scrollToForm}
          className="hidden md:inline-flex items-center gap-2 bg-[#FF1F1F] hover:bg-[#C70000] text-white text-sm font-bold px-5 py-2.5 rounded-sm transition-all duration-200 shadow-lg shadow-red-900/30 hover:shadow-red-900/50"
        >
          Register Now
        </button>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="md:hidden overflow-hidden bg-[#0A0A0A] border-t border-white/10"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-[#A0A0A0] hover:text-white text-sm font-medium py-1"
                >
                  {l.label}
                </a>
              ))}
              <button
                onClick={() => {
                  scrollToForm();
                  setOpen(false);
                }}
                className="bg-[#FF1F1F] hover:bg-[#C70000] text-white text-sm font-bold px-5 py-3 rounded-sm text-center mt-2 transition-colors"
              >
                Register Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
