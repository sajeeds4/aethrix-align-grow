import type { ContactSubmissionInsert, ContactSubmission } from './contact-service';

export class LocalContactService {
  private static readonly STORAGE_KEY = 'contact_submissions';

  static async submitContactForm(data: ContactSubmissionInsert): Promise<{ success: boolean; id?: string; error?: string }> {
    try {
      const id = crypto.randomUUID();
      const submission: ContactSubmission = {
        id,
        name: data.name,
        email: data.email,
        company: data.company || null,
        phone: data.phone || null,
        industry: data.industry || null,
        service: data.service || null,
        budget: data.budget || null,
        timeline: data.timeline || null,
        message: data.message || null,
        status: 'new',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };

      const existing = this.getStoredSubmissions();
      existing.push(submission);
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(existing));

      console.log('Form submitted locally:', submission);
      return { success: true, id };
    } catch (error) {
      console.error('Local storage error:', error);
      return { success: false, error: 'Failed to save locally' };
    }
  }

  static async getSubmissions(): Promise<{ success: boolean; data?: ContactSubmission[]; error?: string }> {
    try {
      const data = this.getStoredSubmissions();
      return { success: true, data };
    } catch (error) {
      console.error('Local storage retrieval error:', error);
      return { success: false, error: 'Failed to retrieve data' };
    }
  }

  static async updateSubmissionStatus(id: string, status: string): Promise<{ success: boolean; error?: string }> {
    try {
      const submissions = this.getStoredSubmissions();
      const index = submissions.findIndex(s => s.id === id);
      
      if (index === -1) {
        return { success: false, error: 'Submission not found' };
      }

      submissions[index].status = status;
      submissions[index].updated_at = new Date().toISOString();
      
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(submissions));
      return { success: true };
    } catch (error) {
      console.error('Local storage update error:', error);
      return { success: false, error: 'Failed to update status' };
    }
  }

  private static getStoredSubmissions(): ContactSubmission[] {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  }

  static clearAll(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }
}
