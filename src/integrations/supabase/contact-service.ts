// Supabase removed: provide no-op service with same API surface

export interface ContactSubmission {
  [key: string]: string | null | undefined;
  id: string;
  name: string;
  email: string;
  company?: string | null;
  phone?: string | null;
  industry?: string | null;
  service?: string | null;
  budget?: string | null;
  timeline?: string | null;
  message?: string | null;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface ContactSubmissionInsert {
  name: string;
  email: string;
  company?: string | null;
  phone?: string | null;
  industry?: string | null;
  service?: string | null;
  budget?: string | null;
  timeline?: string | null;
  message?: string | null;
}

export class ContactService {
  private static readonly STORAGE_KEY = 'contact_submissions';

  // Store locally (frontend-only)
  static async submitContactForm(data: ContactSubmissionInsert): Promise<{ success: boolean; id?: string; error?: string }> {
    try {
      const id = (crypto?.randomUUID && crypto.randomUUID()) || Math.random().toString(36).slice(2);
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
      existing.unshift(submission);
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(existing));
      return { success: true, id };
    } catch (error) {
      const msg = error instanceof Error ? error.message : 'Failed to store locally';
      return { success: false, error: msg };
    }
  }

  static async getSubmissions(): Promise<{ success: boolean; data?: ContactSubmission[]; error?: string }> {
    try {
      const data = this.getStoredSubmissions();
      return { success: true, data };
    } catch (error) {
      const msg = error instanceof Error ? error.message : 'Failed to retrieve data';
      return { success: false, error: msg };
    }
  }

  static async updateSubmissionStatus(id: string, status: string): Promise<{ success: boolean; error?: string }> {
    try {
      const items = this.getStoredSubmissions();
      const idx = items.findIndex(s => s.id === id);
      if (idx === -1) return { success: false, error: 'Submission not found' };
      items[idx].status = status;
      items[idx].updated_at = new Date().toISOString();
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(items));
      return { success: true };
    } catch (error) {
      const msg = error instanceof Error ? error.message : 'Failed to update status';
      return { success: false, error: msg };
    }
  }

  private static getStoredSubmissions(): ContactSubmission[] {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    return stored ? (JSON.parse(stored) as ContactSubmission[]) : [];
  }
}
