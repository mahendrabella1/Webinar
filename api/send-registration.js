import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 587,
  secure: false,
  auth: {
    user: 'support@onegrasp.com',
    pass: 'OneGrasp@3070',
  },
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const {
      name,
      mobile,
      email,
      institution,
      pincode,
      message,
      ctaName,
      amount,
      isPaymentConfirmed,
      paymentId,
    } = req.body || {};

    const subject = isPaymentConfirmed
      ? `[PAID] Webinar Registration Confirmed - ${name || 'Attendee'}`
      : `New Webinar Enquiry (Unpaid Lead) - ${name || 'Attendee'}`;

    const html = `
      <h2>${isPaymentConfirmed ? 'Webinar Registration Confirmed (Paid)' : 'New Webinar Enquiry (Lead Captured)'}</h2>
      ${
        isPaymentConfirmed
          ? `<p style="color: #2e7d32; font-weight: bold; font-size: 16px;">✓ Payment Confirmed: ${amount || '₹299'}</p>
             <p><strong>Razorpay Payment ID:</strong> ${paymentId || '-'}</p>`
          : `<p style="color: #666; font-style: italic;">Note: This is an unpaid lead captured before payment initialization.</p>`
      }
      <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
      <p><strong>Name:</strong> ${name || '-'}</p>
      <p><strong>Email:</strong> ${email || '-'}</p>
      <p><strong>Phone:</strong> ${mobile || '-'}</p>
      <p><strong>Institution:</strong> ${institution || '-'}</p>
      ${pincode ? `<p><strong>Pincode:</strong> ${pincode}</p>` : ''}
      ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
      <p><strong>CTA Location:</strong> ${ctaName || '-'}</p>
    `;

    const mailOptions = {
      from: 'support@onegrasp.com',
      to: 'support@onegrasp.com',
      subject,
      html,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Registration email error:', error);
    return res.status(500).json({ success: false, message: 'Failed to send registration email' });
  }
}
