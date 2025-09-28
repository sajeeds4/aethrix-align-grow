// Example API route for Vercel (put in /api/contact.ts)
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, company, phone, industry, service, budget, timeline, message } = req.body;

    // Validate required fields
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    // Here you could:
    // 1. Save to database
    // 2. Send email notifications
    // 3. Integrate with CRM
    // 4. Send to Slack/Discord webhook

    // Example: Send to a webhook (Slack, Discord, Zapier, etc.)
    if (process.env.WEBHOOK_URL) {
      await fetch(process.env.WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: `New contact form submission from ${name} (${email})`,
          attachments: [{
            color: 'good',
            fields: [
              { title: 'Name', value: name, short: true },
              { title: 'Email', value: email, short: true },
              { title: 'Company', value: company || 'Not provided', short: true },
              { title: 'Phone', value: phone || 'Not provided', short: true },
              { title: 'Industry', value: industry || 'Not provided', short: true },
              { title: 'Service', value: service || 'Not provided', short: true },
              { title: 'Budget', value: budget || 'Not provided', short: true },
              { title: 'Timeline', value: timeline || 'Not provided', short: true },
              { title: 'Message', value: message || 'Not provided', short: false }
            ]
          }]
        })
      });
    }

    res.status(200).json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
