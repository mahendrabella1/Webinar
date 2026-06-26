// Razorpay configuration
export const RAZORPAY_CONFIG = {
  KEY_ID: 'rzp_live_T4fgWI2uotntDG',
  KEY_SECRET: 'KQWPCNCW2sg63Xi4VMSqZXmN',
  AMOUNT: 1 * 100, // Amount in paise (1 INR)
};

// WhatsApp configuration
export const WHATSAPP_CONFIG = {
  MESSAGE: 'Join the OneGrasp webinar group: https://chat.whatsapp.com/LcZg2zE0KrpJsFh8HjB9hP',
  WEB_FALLBACK: 'https://api.whatsapp.com/send?text=Join%20the%20OneGrasp%20webinar%20group%3A%20https%3A%2F%2Fchat.whatsapp.com%2FLcZg2zE0KrpJsFh8HjB9hP',
};

export interface PaymentDetails {
  name?: string;
  mobile: string;
  email: string;
  institution: string;
  pincode: string;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

export const initiatePayment = (
  cta: string = 'Register',
  registrationData?: PaymentDetails,
  callbacks?: {
    onSuccess?: () => void;
    onDismiss?: () => void;
  }
) => {
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
      pincode: registrationData?.pincode || '',
    },
    theme: {
      color: '#FF1F1F',
    },
    handler: function (response: any) {
      callbacks?.onSuccess?.();
      redirectToWhatsApp();
    },
    modal: {
      ondismiss: function () {
        callbacks?.onDismiss?.();
        console.log('Payment modal closed');
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
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
  const whatsappIntent = `whatsapp://send?text=${encodeURIComponent(WHATSAPP_CONFIG.MESSAGE)}`;

  if (isMobile) {
    window.location.href = whatsappIntent;
    setTimeout(() => {
      window.location.href = WHATSAPP_CONFIG.WEB_FALLBACK;
    }, 1500);
  } else {
    window.location.href = WHATSAPP_CONFIG.WEB_FALLBACK;
  }
};
