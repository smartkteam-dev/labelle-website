const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const emailBody = `
New Contact Form Submission — La Belle SPA

NAME:    ${name}
EMAIL:   ${email}
PHONE:   ${phone || 'Not provided'}

MESSAGE:
${message}

---
Sent from labellespas.com contact form
`;

    const result = await resend.emails.send({
      from: 'contact@labellespas.com',
      to: 'labelle.shoreline@gmail.com',
      replyTo: email,
      subject: `New message from ${name} — La Belle SPA`,
      text: emailBody,
    });

    if (result.error) {
      return res.status(500).json({ error: 'Failed to send email', details: result.error });
    }

    return res.status(200).json({ success: true, id: result.data.id });

  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ error: 'Server error', details: error.message });
  }
};
