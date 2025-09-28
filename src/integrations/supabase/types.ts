export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      contact_submissions: {
        Row: {
          id: string
          name: string
          email: string
          company: string | null
          phone: string | null
          industry: string | null
          service: string | null
          budget: string | null
          timeline: string | null
          message: string | null
          status: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          company?: string | null
          phone?: string | null
          industry?: string | null
          service?: string | null
          budget?: string | null
          timeline?: string | null
          message?: string | null
          status?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          company?: string | null
          phone?: string | null
          industry?: string | null
          service?: string | null
          budget?: string | null
          timeline?: string | null
          message?: string | null
          status?: string
          created_at?: string
          updated_at?: string
        }
      }
      job_listings: {
        Row: {
          id: string
          title: string
          department: string | null
          location: string | null
          employment_type: string | null
          description: string | null
          requirements: string | null
          responsibilities: string | null
          skills: string[] | null
          salary_range: string | null
          experience_level: string | null
          is_active: boolean
          featured: boolean
          application_deadline: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          department?: string | null
          location?: string | null
          employment_type?: string | null
          description?: string | null
          requirements?: string | null
          responsibilities?: string | null
          skills?: string[] | null
          salary_range?: string | null
          experience_level?: string | null
          is_active?: boolean
          featured?: boolean
          application_deadline?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          department?: string | null
          location?: string | null
          employment_type?: string | null
          description?: string | null
          requirements?: string | null
          responsibilities?: string | null
          skills?: string[] | null
          salary_range?: string | null
          experience_level?: string | null
          is_active?: boolean
          featured?: boolean
          application_deadline?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      job_applications: {
        Row: {
          id: string
          job_listing_id: string
          first_name: string
          last_name: string
          email: string
          phone: string | null
          location: string | null
          linkedin_url: string | null
          portfolio_url: string | null
          github_url: string | null
          current_position: string | null
          current_company: string | null
          years_of_experience: number | null
          expected_salary: string | null
          availability: string | null
          willing_to_relocate: boolean
          work_authorization: string | null
          technical_skills: string[] | null
          soft_skills: string[] | null
          programming_languages: string[] | null
          frameworks_tools: string[] | null
          certifications: string[] | null
          languages_spoken: string[] | null
          work_experience: string | null
          education_background: string | null
          projects: string | null
          achievements: string | null
          cover_letter: string | null
          why_interested: string | null
          additional_info: string | null
          status: string
          application_date: string
          last_updated: string
          admin_notes: string | null
          interview_scheduled: string | null
        }
        Insert: {
          id?: string
          job_listing_id: string
          first_name: string
          last_name: string
          email: string
          phone?: string | null
          location?: string | null
          linkedin_url?: string | null
          portfolio_url?: string | null
          github_url?: string | null
          current_position?: string | null
          current_company?: string | null
          years_of_experience?: number | null
          expected_salary?: string | null
          availability?: string | null
          willing_to_relocate?: boolean
          work_authorization?: string | null
          technical_skills?: string[] | null
          soft_skills?: string[] | null
          programming_languages?: string[] | null
          frameworks_tools?: string[] | null
          certifications?: string[] | null
          languages_spoken?: string[] | null
          work_experience?: string | null
          education_background?: string | null
          projects?: string | null
          achievements?: string | null
          cover_letter?: string | null
          why_interested?: string | null
          additional_info?: string | null
          status?: string
          application_date?: string
          last_updated?: string
          admin_notes?: string | null
          interview_scheduled?: string | null
        }
        Update: {
          id?: string
          job_listing_id?: string
          first_name?: string
          last_name?: string
          email?: string
          phone?: string | null
          location?: string | null
          linkedin_url?: string | null
          portfolio_url?: string | null
          github_url?: string | null
          current_position?: string | null
          current_company?: string | null
          years_of_experience?: number | null
          expected_salary?: string | null
          availability?: string | null
          willing_to_relocate?: boolean
          work_authorization?: string | null
          technical_skills?: string[] | null
          soft_skills?: string[] | null
          programming_languages?: string[] | null
          frameworks_tools?: string[] | null
          certifications?: string[] | null
          languages_spoken?: string[] | null
          work_experience?: string | null
          education_background?: string | null
          projects?: string | null
          achievements?: string | null
          cover_letter?: string | null
          why_interested?: string | null
          additional_info?: string | null
          status?: string
          application_date?: string
          last_updated?: string
          admin_notes?: string | null
          interview_scheduled?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
