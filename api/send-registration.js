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
    const { name, mobile, email, institution, pincode, ctaName, amount } = req.body || {};

    const mailOptions = {
      from: 'support@onegrasp.com',
      to: 'support@onegrasp.com',
      subject: `New Webinar Registration - ${ctaName || 'CTA'}`,
      html: `
        <h2>New webinar registration</h2>
        <p><strong>Name:</strong> ${name || '-'}</p>
        <p><strong>Email:</strong> ${email || '-'}</p>
        <p><strong>Phone:</strong> ${mobile || '-'}</p>
        <p><strong>Institution:</strong> ${institution || '-'}</p>
        <p><strong>Pincode:</strong> ${pincode || '-'}</p>
        <p><strong>Amount:</strong> ${amount || '₹299'}</p>
        <p><strong>CTA:</strong> ${ctaName || '-'}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Registration email error:', error);
    return res.status(500).json({ success: false, message: 'Failed to send registration email' });
  }
}
