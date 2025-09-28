import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://faoiscbbfjtvpywmddpn.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhb2lzY2JiZmp0dnB5d21kZHBuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg5NDgyNzUsImV4cCI6MjA3NDUyNDI3NX0.crp_UbafreGGA_9H9berxsNYzUSijPzOuAQtC6jT044";

// Create a simple client without complex types
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);

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
  static async submitContactForm(data: ContactSubmissionInsert): Promise<{ success: boolean; id?: string; error?: string }> {
    try {
      console.log('Submitting to Supabase directly...', data);
      
      // Only include fields that exist in the database
      const submissionData = {
        name: data.name,
        email: data.email,
        company: data.company || null,
        phone: data.phone || null,
        message: data.message || null,
      };
      
      console.log('Cleaned submission data:', submissionData);
      
      const { data: result, error } = await supabaseClient
        .from('contact_submissions')
        .insert(submissionData)
        .select('id')
        .single();

      if (error) {
        console.error('Supabase error details:', error);
        
        // Handle specific RLS error
        if (error.message.includes('row-level security policy')) {
          return { 
            success: false, 
            error: 'Database permission error. Please run the RLS fix script in Supabase SQL Editor: fix-rls-policies.sql' 
          };
        }
        
        return { success: false, error: error.message };
      }

      if (!result) {
        return { success: false, error: 'No data returned from insert' };
      }

      console.log('Supabase submission successful:', result);
      return { success: true, id: result?.id };
    } catch (error) {
      console.error('Supabase connection error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      return { success: false, error: errorMessage };
    }
  }

  static async getSubmissions(): Promise<{ success: boolean; data?: ContactSubmission[]; error?: string }> {
    try {
      console.log('Fetching submissions from Supabase...');
      
      const { data, error } = await supabaseClient
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Supabase fetch error:', error);
        return { success: false, error: error.message };
      }

      console.log('Fetched submissions:', data);
      return { success: true, data: (data as ContactSubmission[]) || [] };
    } catch (error) {
      console.error('Supabase connection error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      return { success: false, error: errorMessage };
    }
  }

  static async updateSubmissionStatus(id: string, status: string): Promise<{ success: boolean; error?: string }> {
    try {
      console.log(`Updating submission ${id} status to ${status}...`);
      
      const { error } = await supabaseClient
        .from('contact_submissions')
        .update({ 
          status, 
          updated_at: new Date().toISOString() 
        })
        .eq('id', id);

      if (error) {
        console.error('Supabase update error:', error);
        return { success: false, error: error.message };
      }

      console.log('Status update successful');
      return { success: true };
    } catch (error) {
      console.error('Supabase connection error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      return { success: false, error: errorMessage };
    }
  }
}
