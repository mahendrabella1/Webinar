import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { initiatePayment } from '../utils/payment';

interface RegistrationFormProps {
  isOpen: boolean;
  onClose: () => void;
  ctaName: string;
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

    try {
      initiatePayment(ctaName, formData, {
        onSuccess: () => {
          onClose();
          setFormData({ mobile: '', email: '', institution: '', pincode: '' });
          setLoading(false);
        },
        onDismiss: () => {
          setLoading(false);
        },
      });
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
            className="fixed inset-0 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 w-full sm:w-[min(92vw,28rem)] max-h-[92vh] overflow-y-auto z-50 bg-[#0D0D0D] border border-white/10 rounded-none sm:rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-white">Quick Registration</h2>
                <p className="text-white/50 text-sm mt-1">Complete your details to proceed securely</p>
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
                  inputMode="numeric"
                  maxLength={10}
                  autoComplete="tel"
                  className={`w-full bg-white/5 border rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 transition-all ${
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
                  autoComplete="email"
                  className={`w-full bg-white/5 border rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 transition-all ${
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
                  autoComplete="organization"
                  className={`w-full bg-white/5 border rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 transition-all ${
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
                  inputMode="numeric"
                  maxLength={6}
                  autoComplete="postal-code"
                  className={`w-full bg-white/5 border rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 transition-all ${
                    errors.pincode
                      ? 'border-red-500/50 focus:ring-red-500/30'
                      : 'border-white/10 focus:ring-[#FF1F1F]/30 focus:border-[#FF1F1F]'
                  }`}
                  disabled={loading}
                />
                {errors.pincode && <p className="text-red-400 text-xs mt-1">{errors.pincode}</p>}
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  disabled={loading}
                  className="flex-1 px-4 py-3 border border-white/10 text-white font-semibold rounded-lg hover:bg-white/5 transition-colors disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 px-4 py-3 bg-[#FF1F1F] hover:bg-[#C70000] text-white font-semibold rounded-lg transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
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
