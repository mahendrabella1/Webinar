// Razorpay configuration
export const RAZORPAY_CONFIG = {
  KEY_ID: 'rzp_live_T4fgWI2uotntDG',
  KEY_SECRET: 'KQWPCNCW2sg63Xi4VMSqZXmN',
  AMOUNT: 299 * 100, // Amount in paise (299 INR)
};

// WhatsApp configuration
export const WHATSAPP_CONFIG = {
  INVITE_URL: 'https://chat.whatsapp.com/LcZg2zE0KrpJsFh8HjB9hP',
};

export interface PaymentDetails {
  name?: string;
  mobile: string;
  email: string;
  institution: string;
  message?: string;
  pincode?: string; // kept for backward-compat
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

// ─── On-demand Razorpay loader ───────────────────────────────────────────────
// The checkout.js script is NOT loaded in index.html.
// We load it dynamically here the first time payment is needed.
// This saves ~60 KB of blocking JS and improves FID/LCP scores.
let razorpayLoadPromise: Promise<void> | null = null;

function loadRazorpayScript(): Promise<void> {
  if (razorpayLoadPromise) return razorpayLoadPromise;

  razorpayLoadPromise = new Promise<void>((resolve, reject) => {
    if (window.Razorpay) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load Razorpay'));
    document.head.appendChild(script);
  });

  return razorpayLoadPromise;
}
// ─────────────────────────────────────────────────────────────────────────────

export const initiatePayment = async (
  cta: string = 'Register',
  registrationData?: PaymentDetails,
  callbacks?: {
    onSuccess?: () => void;
    onDismiss?: () => void;
  }
) => {
  // Load Razorpay on-demand (only when user actually submits)
  try {
    await loadRazorpayScript();
  } catch {
    alert('Unable to load payment gateway. Please check your connection and try again.');
    return;
  }

  const options = {
    key: RAZORPAY_CONFIG.KEY_ID,
    amount: RAZORPAY_CONFIG.AMOUNT,
    currency: 'INR',
    name: 'OneGrasp Webinar',
    description: `International Scientific Conferences Webinar - ${cta}`,
    image: 'https://onegrasp.com/wp-content/uploads/2026/05/logo.png',
    prefill: {
      name: registrationData?.name || registrationData?.institution || '',
      email: registrationData?.email || '',
      contact: registrationData?.mobile || '',
    },
    notes: {
      email: registrationData?.email || '',
      mobile: registrationData?.mobile || '',
      institution: registrationData?.institution || '',
      message: registrationData?.message || '',
    },
    theme: {
      color: '#FF1F1F',
    },
    handler: function (_response: any) {
      callbacks?.onSuccess?.();
      redirectToWhatsApp();
    },
    modal: {
      ondismiss: function () {
        callbacks?.onDismiss?.();
      },
    },
  };

  try {
    const rzp = new window.Razorpay(options);
    rzp.open();
  } catch (error) {
    console.error('Error initializing Razorpay:', error);
    alert('Failed to initialize payment. Please try again.');
  }
};

export const redirectToWhatsApp = () => {
  window.location.href = WHATSAPP_CONFIG.INVITE_URL;
};
