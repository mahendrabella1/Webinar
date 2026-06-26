import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRegistration } from '../context/RegistrationContext';

const navLinks = [
  { label: 'Webinar', href: '#about' },
  { label: "What You'll Learn", href: '#benefits' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Agenda', href: '#agenda' },
  { label: 'Topics', href: '#research' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { openForm } = useRegistration();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#050505]/95 backdrop-blur-md border-b border-white/10 shadow-2xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <img 
            src="https://onegrasp.com/wp-content/uploads/2026/05/logo.png" 
            alt="OneGrasp Logo"
            className="h-8 md:h-10 w-auto"
          />
        </a>

        {/* Desktop links */}
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

        {/* CTA */}
        <button
          onClick={() => openForm('Navbar Register')}
          className="hidden md:inline-flex items-center gap-2 bg-[#FF1F1F] hover:bg-[#C70000] text-white text-sm font-semibold px-5 py-2.5 rounded-sm transition-all duration-200 shadow-lg shadow-red-900/30 hover:shadow-red-900/50"
        >
          Register Now
        </button>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
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
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-[#0D0D0D] border-t border-white/10"
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
                  openForm('Mobile Menu - Register Now');
                  setOpen(false);
                }}
                className="bg-[#FF1F1F] hover:bg-[#C70000] text-white text-sm font-semibold px-5 py-2.5 rounded-sm text-center mt-2 transition-colors cursor-pointer"
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
