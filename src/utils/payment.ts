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
  name: string;
  email: string;
  phone: string;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

export const initiatePayment = (cta: string = 'Register') => {
  const options = {
    key: RAZORPAY_CONFIG.KEY_ID,
    amount: RAZORPAY_CONFIG.AMOUNT,
    currency: 'INR',
    name: 'OneGrasp Webinar',
    description: `International Scientific Conferences Webinar - ${cta}`,
    image: 'https://onegrasp.com/wp-content/uploads/2026/05/logo.png',
    prefill: {
      name: '',
      email: '',
      contact: '',
    },
    theme: {
      color: '#FF1F1F',
    },
    handler: function (response: any) {
      // Payment successful - collect email and phone from Razorpay response
      const userEmail = response.email || '';
      const userPhone = response.contact || '';

      // Redirect to WhatsApp
      if (userPhone) {
        redirectToWhatsApp(userPhone);
      } else {
        alert('Thank you for registering! Check your email for more details.');
        redirectToWhatsApp();
      }
    },
    modal: {
      ondismiss: function () {
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
  window.location.href = WHATSAPP_CONFIG.INVITE_URL;
};
