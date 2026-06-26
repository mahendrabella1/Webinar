import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { RAZORPAY_CONFIG, redirectToWhatsApp } from '../utils/payment';

interface RegistrationFormProps {
  isOpen: boolean;
  onClose: () => void;
  ctaName: string;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function RegistrationForm({ isOpen, onClose, ctaName }: RegistrationFormProps) {
  const [formData, setFormData] = useState({
    mobile: '',
    email: '',
    institution: '',
    pincode: '',
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.mobile || formData.mobile.length < 10) {
      newErrors.mobile = 'Valid mobile number required (10 digits)';
    }
    if (!formData.email || !formData.email.includes('@')) {
      newErrors.email = 'Valid email required';
    }
    if (!formData.institution.trim()) {
      newErrors.institution = 'Institution name required';
    }
    if (!formData.pincode || formData.pincode.length < 5) {
      newErrors.pincode = 'Valid pincode required (5 digits)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    // Store registration details in localStorage
    localStorage.setItem(
      'registrationData',
      JSON.stringify({
        ...formData,
        ctaName,
        timestamp: new Date().toISOString(),
      })
    );

    // Initiate Razorpay payment
    const options = {
      key: RAZORPAY_CONFIG.KEY_ID,
      amount: RAZORPAY_CONFIG.AMOUNT,
      currency: 'INR',
      name: 'OneGrasp Webinar',
      description: `International Scientific Conferences Webinar - ${ctaName}`,
      image: 'https://onegrasp.com/wp-content/uploads/2026/05/logo.png',
      prefill: {
        name: formData.institution,
        email: formData.email,
        contact: formData.mobile,
      },
      theme: {
        color: '#FF1F1F',
      },
      handler: function (response: any) {
        // Payment successful
        alert(
          `Payment successful! Registration details:\n\nMobile: ${formData.mobile}\nEmail: ${formData.email}\nInstitution: ${formData.institution}\nPincode: ${formData.pincode}`
        );

        // Redirect to WhatsApp group after successful payment
        redirectToWhatsApp();
        onClose();
        setFormData({ mobile: '', email: '', institution: '', pincode: '' });
        setLoading(false);
      },
      modal: {
        ondismiss: function () {
          setLoading(false);
          console.log('Payment modal closed');
        },
      },
    };

    try {
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Error initializing Razorpay:', error);
      alert('Failed to open payment. Please try again.');
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-50 bg-[#0D0D0D] border border-white/10 rounded-xl shadow-2xl p-6 md:p-8"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-black text-white">Quick Registration</h2>
                <p className="text-white/50 text-sm mt-1">Complete your details to proceed</p>
              </div>
              <button
                onClick={onClose}
                disabled={loading}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors disabled:opacity-50"
              >
                <X size={20} className="text-white/60" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Mobile */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  maxLength={10}
                  className={`w-full bg-white/5 border rounded-lg px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:ring-2 transition-all ${
                    errors.mobile
                      ? 'border-red-500/50 focus:ring-red-500/30'
                      : 'border-white/10 focus:ring-[#FF1F1F]/30 focus:border-[#FF1F1F]'
                  }`}
                  disabled={loading}
                />
                {errors.mobile && <p className="text-red-400 text-xs mt-1">{errors.mobile}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={`w-full bg-white/5 border rounded-lg px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:ring-2 transition-all ${
                    errors.email
                      ? 'border-red-500/50 focus:ring-red-500/30'
                      : 'border-white/10 focus:ring-[#FF1F1F]/30 focus:border-[#FF1F1F]'
                  }`}
                  disabled={loading}
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Institution */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Institution Name *
                </label>
                <input
                  type="text"
                  name="institution"
                  value={formData.institution}
                  onChange={handleChange}
                  placeholder="Your university/organization"
                  className={`w-full bg-white/5 border rounded-lg px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:ring-2 transition-all ${
                    errors.institution
                      ? 'border-red-500/50 focus:ring-red-500/30'
                      : 'border-white/10 focus:ring-[#FF1F1F]/30 focus:border-[#FF1F1F]'
                  }`}
                  disabled={loading}
                />
                {errors.institution && (
                  <p className="text-red-400 text-xs mt-1">{errors.institution}</p>
                )}
              </div>

              {/* Pincode */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Pincode *
                </label>
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  placeholder="5-6 digit pincode"
                  maxLength={6}
                  className={`w-full bg-white/5 border rounded-lg px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:ring-2 transition-all ${
                    errors.pincode
                      ? 'border-red-500/50 focus:ring-red-500/30'
                      : 'border-white/10 focus:ring-[#FF1F1F]/30 focus:border-[#FF1F1F]'
                  }`}
                  disabled={loading}
                />
                {errors.pincode && <p className="text-red-400 text-xs mt-1">{errors.pincode}</p>}
              </div>

              {/* Submit Button */}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  disabled={loading}
                  className="flex-1 px-4 py-2.5 border border-white/10 text-white font-semibold rounded-lg hover:bg-white/5 transition-colors disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 px-4 py-2.5 bg-[#FF1F1F] hover:bg-[#C70000] text-white font-semibold rounded-lg transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Processing...
                    </>
                  ) : (
                    'Proceed to Payment'
                  )}
                </button>
              </div>

              <p className="text-white/40 text-xs text-center mt-4">
                Your information is secure. We'll send confirmation to your email.
              </p>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
