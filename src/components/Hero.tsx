import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  Clock,
  Users,
  CheckCircle2,
  Loader2,
  ArrowRight,
  FileText,
  Globe,
  AlertCircle,
  BookOpen,
  Mic,
} from 'lucide-react';
import { initiatePayment } from '../utils/payment';

// ─── Enquiry form ─────────────────────────────────────────────────────────────
type FormData = {
  name: string;
  email: string;
  mobile: string;
  institution: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const BENEFIT_BULLETS = [
  { Icon: BookOpen,      text: 'What international scientific conferences are & how they work' },
  { Icon: FileText,      text: 'How your research gets a Crossref DOI & is published globally' },
  { Icon: Globe,         text: 'How OneGrasp conferences are indexed in 10+ academic directories' },
  { Icon: Mic,           text: 'How to present, speak & grow as a researcher at global conferences' },
  { Icon: CheckCircle2,  text: 'The real career & visibility benefits conferences offer you' },
];

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = 'Full name is required';
  if (!data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Enter a valid email address';
  }
  if (!data.mobile.trim()) {
    errors.mobile = 'Phone number is required';
  } else if (!/^\d{10}$/.test(data.mobile.replace(/[\s\-+()]/g, ''))) {
    errors.mobile = 'Enter a valid 10-digit phone number';
  }
  if (!data.institution.trim()) errors.institution = 'Organization name is required';
  return errors;
}

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return (
    <p className="flex items-center gap-1 text-red-400 text-xs mt-1" role="alert">
      <AlertCircle size={11} />
      {msg}
    </p>
  );
}

function EnquiryForm() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    mobile: '',
    institution: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target as { name: keyof FormData; value: string };
    setForm((prev) => ({ ...prev, [name]: value }));
    if (touched[name as keyof FormData]) {
      const newErrors = validateForm({ ...form, [name]: value });
      setErrors((prev) => ({ ...prev, [name]: newErrors[name as keyof FormData] }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name as keyof FormData;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const newErrors = validateForm(form);
    setErrors((prev) => ({ ...prev, [name]: newErrors[name] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = Object.fromEntries(
      (Object.keys(form) as (keyof FormData)[]).map((k) => [k, true])
    );
    setTouched(allTouched);
    const newErrors = validateForm(form);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setStatus('loading');

    try {
      // 1. Send lead to backend so we capture it even if payment is abandoned
      await fetch('/api/send-registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          ctaName: 'Hero Enquiry Form',
          amount: '₹299',
        }),
      });

      localStorage.setItem(
        'enquiryData',
        JSON.stringify({ ...form, timestamp: new Date().toISOString() })
      );

      // 2. Open Razorpay (loads script on-demand)
      await initiatePayment('Hero Enquiry Form', { ...form }, {
        onSuccess: async (paymentId: string) => {
          try {
            await fetch('/api/send-registration', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                ...form,
                ctaName: 'Hero Enquiry Form',
                amount: '₹299',
                isPaymentConfirmed: true,
                paymentId,
              }),
            });
          } catch (err) {
            console.error('Failed to send payment confirmation:', err);
          }
          setStatus('success');
          setForm({ name: '', email: '', mobile: '', institution: '', message: '' });
          setTouched({});
          setErrors({});
        },
        onDismiss: () => {
          // Lead is already captured — just let them stay on page
          setStatus('idle');
        },
      });
    } catch {
      setStatus('error');
    }
  };

  const inputClass = (field: keyof FormData) =>
    `w-full bg-white/[0.06] border rounded-lg px-4 py-3 text-white text-sm placeholder-white/30 
     focus:outline-none focus:ring-2 transition-all duration-200 ${
       errors[field] && touched[field]
         ? 'border-red-500/60 focus:ring-red-500/25'
         : 'border-white/[0.12] focus:ring-[#FF1F1F]/30 focus:border-[#FF1F1F]/70'
     }`;

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center gap-5 py-12 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center">
          <CheckCircle2 size={32} className="text-green-400" />
        </div>
        <div>
          <h3 className="text-white font-black text-xl mb-1">You're Registered! 🎉</h3>
          <p className="text-[#A0A0A0] text-sm leading-relaxed">
            Your seat is secured. Check your inbox for the webinar link 24 hours before the event.
          </p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <p className="text-[#FF1F1F] font-bold text-sm">23 July 2026 · 06:00 – 08:00 PM IST</p>
          <p className="text-white/40 text-xs">Online Webinar · OneGrasp</p>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4" aria-label="Webinar Enquiry Form">
      {/* Name + Email row */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="hero-name" className="block text-xs font-semibold text-white/70 mb-1.5 uppercase tracking-wider">
            Full Name <span className="text-[#FF1F1F]">*</span>
          </label>
          <input
            id="hero-name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Your full name"
            disabled={status === 'loading'}
            className={inputClass('name')}
          />
          <FieldError msg={touched.name ? errors.name : undefined} />
        </div>
        <div>
          <label htmlFor="hero-email" className="block text-xs font-semibold text-white/70 mb-1.5 uppercase tracking-wider">
            Email <span className="text-[#FF1F1F]">*</span>
          </label>
          <input
            id="hero-email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="you@email.com"
            disabled={status === 'loading'}
            className={inputClass('email')}
          />
          <FieldError msg={touched.email ? errors.email : undefined} />
        </div>
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="hero-mobile" className="block text-xs font-semibold text-white/70 mb-1.5 uppercase tracking-wider">
          Phone Number <span className="text-[#FF1F1F]">*</span>
        </label>
        <input
          id="hero-mobile"
          name="mobile"
          type="tel"
          inputMode="numeric"
          autoComplete="tel"
          maxLength={12}
          value={form.mobile}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="+91 98765 43210"
          disabled={status === 'loading'}
          className={inputClass('mobile')}
        />
        <FieldError msg={touched.mobile ? errors.mobile : undefined} />
      </div>

      {/* Organization */}
      <div>
        <label htmlFor="hero-institution" className="block text-xs font-semibold text-white/70 mb-1.5 uppercase tracking-wider">
          Organization / University <span className="text-[#FF1F1F]">*</span>
        </label>
        <input
          id="hero-institution"
          name="institution"
          type="text"
          autoComplete="organization"
          value={form.institution}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Your university or organization"
          disabled={status === 'loading'}
          className={inputClass('institution')}
        />
        <FieldError msg={touched.institution ? errors.institution : undefined} />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="hero-message" className="block text-xs font-semibold text-white/70 mb-1.5 uppercase tracking-wider">
          Message <span className="text-white/30 font-normal">(Optional)</span>
        </label>
        <textarea
          id="hero-message"
          name="message"
          rows={3}
          value={form.message}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Any questions or topics you'd like covered?"
          disabled={status === 'loading'}
          className={`${inputClass('message')} resize-none`}
        />
      </div>

      {/* Error banner */}
      {status === 'error' && (
        <div className="rounded-lg bg-red-500/10 border border-red-500/30 px-4 py-3 text-red-400 text-sm" role="alert">
          Something went wrong. Please try again or email us at support@onegrasp.com
        </div>
      )}

      {/* CTA */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full flex items-center justify-center gap-2 bg-[#FF1F1F] hover:bg-[#C70000] disabled:opacity-70 disabled:cursor-not-allowed text-white font-black text-base py-4 rounded-lg transition-all duration-200 shadow-xl shadow-red-900/40 hover:shadow-red-900/60 group"
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Processing…
          </>
        ) : (
          <>
            Book Now
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </>

        )}
      </button>

      <p className="text-white/35 text-[10px] text-center leading-relaxed">
        Secure payment processed via Razorpay · Enquiry details emailed to support@onegrasp.com
      </p>
    </form>

  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
export default function Hero() {
  return (
    <main
      id="about"
      className="relative bg-[#050505] overflow-hidden pt-16 md:pt-18"
    >
      {/* Background image — low priority, decorative only */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <img
          src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1920"
          srcSet="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=640 640w, https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1280 1280w"
          sizes="100vw"
          alt=""
          role="presentation"
          width={1280}
          height={720}
          loading="lazy"
          fetchPriority="low"
          decoding="async"
          className="w-full h-full object-cover object-center opacity-[0.10]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/70 to-[#050505]/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-transparent to-[#050505]" />
        <div className="absolute top-0 left-0 w-[45%] h-[55%] bg-[radial-gradient(ellipse_at_top_left,rgba(199,0,0,0.13),transparent_65%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full py-8 lg:py-10">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-14 lg:items-center items-start">


          {/* ── LEFT: Enquiry Form (Desktop Left / Mobile Top) ──────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="w-full"
          >
            <div
              id="enquiry-form"
              className="bg-[#0D0D0D]/90 backdrop-blur-sm border border-white/[0.1] rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/60"
              style={{ scrollMarginTop: '5rem' }}
            >
              {/* Form header (What to do next?) */}
              <div className="mb-5">
                <p className="text-[#FF1F1F] text-[10px] font-black uppercase tracking-[0.25em] mb-1">
                  Enquiry Form
                </p>
                <h2 className="text-white font-black text-xl leading-tight">
                  Secure Your Seat
                </h2>
                <p className="text-[#A0A0A0] text-xs mt-1.5 leading-relaxed">
                  Submit the enquiry form below to secure your seat at this international webinar.
                </p>
              </div>

              <EnquiryForm />
            </div>
          </motion.div>

          {/* ── RIGHT: Copy ─────────────────────────────────────────────── */}
          <div className="space-y-6">
            {/* Pre-headline badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-2.5"
            >
              <span className="inline-flex items-center rounded bg-[#FF1F1F] px-2.5 py-0.5 text-[10px] font-black uppercase tracking-widest text-white shadow-sm">
                LIVE WEBINAR
              </span>
              <span className="text-white/40 text-xs font-semibold uppercase tracking-wider">
                Conducted by OneGrasp
              </span>
            </motion.div>

            {/* Headline (What is this?) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="space-y-1"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-[2.8rem] font-black uppercase leading-[1.1] tracking-tight text-white">
                International Scientific{' '}
                <span className="text-[#FF1F1F]">Conferences</span>
              </h1>
              <p className="text-lg sm:text-xl text-[#FF1F1F] font-extrabold uppercase tracking-wide">
                Importance &amp; Awareness Webinar
              </p>
            </motion.div>

            {/* Value/Care Statement (Why should I care?) */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="text-white/70 text-sm sm:text-base leading-relaxed max-w-lg"
            >
              Learn the exact steps to publish indexed abstracts, secure Crossref DOIs, 
              and build your international research profile to accelerate your academic career.
            </motion.p>

            {/* Trust credentials (Can I trust it?) */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-white/50 border-y border-white/10 py-3"
            >
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={12} className="text-[#FF1F1F]" />
                CPD Accredited
              </span>
              <span className="text-white/20">|</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={12} className="text-[#FF1F1F]" />
                Crossref DOI Verified
              </span>
              <span className="text-white/20">|</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={12} className="text-[#FF1F1F]" />
                Google Scholar Indexed
              </span>
            </motion.div>

            {/* Benefit bullets (Why should I care?) */}
            <motion.ul
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-2"
              aria-label="Webinar learning points"
            >
              {BENEFIT_BULLETS.map(({ Icon, text }, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/90">
                  <span className="w-5 h-5 rounded bg-[#FF1F1F]/15 border border-[#FF1F1F]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={11} className="text-[#FF1F1F]" />
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </motion.ul>

            {/* Event meta chips */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="flex flex-wrap gap-2 pt-1"
            >
              {[
                { Icon: Calendar, label: '23 July 2026' },
                { Icon: Clock,    label: '06:00 – 08:00 PM IST' },
                { Icon: Users,    label: '1000+ Expected' },
              ].map(({ Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 bg-[#0D0D0D] border border-white/[0.08] rounded px-2.5 py-1"
                >
                  <Icon size={11} className="text-[#FF1F1F]" />
                  <span className="text-white text-xs font-semibold">{label}</span>
                </div>
              ))}
            </motion.div>

            {/* Two Action Buttons (Book Now, Know More) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3"
            >
              <button
                onClick={() => {
                  const el = document.getElementById('enquiry-form');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
                className="flex-grow sm:flex-grow-0 inline-flex items-center justify-center gap-2 bg-[#FF1F1F] hover:bg-[#C70000] text-white font-black text-sm uppercase tracking-wider px-8 py-3.5 rounded-sm transition-all duration-200 shadow-lg shadow-red-900/30 group"
              >
                Book Now
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
              <a
                href="#speakers"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('speakers');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="flex-grow sm:flex-grow-0 inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/50 text-white/80 hover:text-white font-black text-sm uppercase tracking-wider px-8 py-3.5 rounded-sm transition-all duration-200"
              >
                Know More
              </a>

            </motion.div>
          </div>


        </div>
      </div>
    </main>
  );
}
