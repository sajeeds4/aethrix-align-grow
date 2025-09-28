export interface EmailData {
  to: string;
  subject: string;
  html: string;
  from?: string;
}

export class EmailService {
  // Using a simple email service like Resend, SendGrid, or Nodemailer
  static async sendEmail(data: EmailData): Promise<{ success: boolean; error?: string }> {
    try {
      // Example using fetch to call your email API endpoint
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return { success: true };
    } catch (error) {
      console.error('Email sending failed:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      };
    }
  }

  static async sendContactFormNotification(formData: {
    name: string;
    email: string;
    company?: string;
    phone?: string;
    industry?: string;
    service?: string;
    budget?: string;
    timeline?: string;
    message?: string;
  }): Promise<{ success: boolean; error?: string }> {
    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; font-family: Arial, sans-serif;">
        <h3>Contact Information:</h3>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        ${formData.company ? `<p><strong>Company:</strong> ${formData.company}</p>` : ''}
        ${formData.phone ? `<p><strong>Phone:</strong> ${formData.phone}</p>` : ''}
        
        <h3>Project Details:</h3>
        ${formData.industry ? `<p><strong>Industry:</strong> ${formData.industry}</p>` : ''}
        ${formData.service ? `<p><strong>Service:</strong> ${formData.service}</p>` : ''}
        ${formData.budget ? `<p><strong>Budget:</strong> ${formData.budget}</p>` : ''}
        ${formData.timeline ? `<p><strong>Timeline:</strong> ${formData.timeline}</p>` : ''}
        
        ${formData.message ? `
        <h3>Message:</h3>
        <div style="background-color: white; padding: 15px; border-left: 4px solid #007bff; margin-top: 10px;">
          ${formData.message}
        </div>
        ` : ''}
        
        <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd;">
          <p style="color: #666; font-size: 12px;">
            Submitted at: ${new Date().toLocaleString()}
          </p>
        </div>
      </div>
    `;

    return this.sendEmail({
      to: 'info@aethrixsystems.com', // Your company email
      subject: `New Contact Form Submission - ${formData.name}`,
      html: emailHtml,
    });
  }

  static async sendAutoReply(userEmail: string, name: string): Promise<{ success: boolean; error?: string }> {
    const emailHtml = `
      <div style="background-color: #f8f9fa; padding: 30px; font-family: Arial, sans-serif; line-height: 1.6;">
        <div style="background-color: white; max-width: 600px; margin: 0 auto; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <img src="https://your-domain.com/aethrix-logo.png" alt="Aethrix Systems" style="height: 40px; margin-bottom: 20px;">
          
          <h2 style="color: #333; margin-bottom: 20px;">Thank you for your inquiry, ${name}!</h2>
          
          <p style="color: #555; margin-bottom: 15px;">
            We've received your contact form submission and appreciate your interest in Aethrix Systems.
          </p>
          
          <p style="color: #555; margin-bottom: 15px;">
            Our team will review your requirements and get back to you within 24 hours with:
          </p>
          
          <ul style="color: #555; margin-bottom: 20px; padding-left: 20px;">
            <li>A detailed analysis of your project requirements</li>
            <li>Recommended technology solutions</li>
            <li>Timeline and cost estimates</li>
            <li>Next steps for moving forward</li>
          </ul>
          
          <div style="background-color: #e3f2fd; padding: 20px; border-radius: 6px; margin: 20px 0;">
            <h3 style="color: #1976d2; margin-bottom: 10px; font-size: 18px;">In the meantime:</h3>
            <p style="color: #555; margin-bottom: 10px;">
              • Explore our <a href="https://your-domain.com/case-studies" style="color: #1976d2;">case studies</a> to see similar projects we've delivered
            </p>
            <p style="color: #555; margin-bottom: 10px;">
              • Check out our <a href="https://your-domain.com/services" style="color: #1976d2;">services page</a> for more details
            </p>
            <p style="color: #555;">
              • Follow us on LinkedIn for industry insights and updates
            </p>
          </div>
          
          <div style="border-top: 1px solid #eee; padding-top: 20px; margin-top: 30px;">
            <p style="color: #777; font-size: 14px; margin-bottom: 10px;">
              <strong>Aethrix Systems</strong><br>
              Email: info@aethrixsystems.com<br>
              Phone: +1 917 564 9475
            </p>
            <p style="color: #999; font-size: 12px;">
              This is an automated response. Please do not reply to this email.
            </p>
          </div>
        </div>
      </div>
    `;

    return this.sendEmail({
      to: userEmail,
      subject: 'Thank you for contacting Aethrix Systems - We\'ll be in touch soon!',
      html: emailHtml,
    });
  }
}
