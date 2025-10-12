-- ========================================
-- FIX JOB SYSTEM - FINAL SIMPLE VERSION
-- ========================================
-- This completely resets the system with SIMPLE fields
-- Run this ONE TIME to fix everything
-- ========================================

-- Step 1: Drop and recreate job_applications with COMPREHENSIVE schema for international hiring
DROP TABLE IF EXISTS public.job_applications CASCADE;

CREATE TABLE public.job_applications (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    job_listing_id uuid REFERENCES public.job_listings(id) ON DELETE CASCADE,
    
    -- Basic Information
    full_name text NOT NULL,
    email text NOT NULL,
    phone text NOT NULL,
    whatsapp_number text,
    date_of_birth date,
    gender text,
    
    -- Location Details (Important for India/Asia positions)
    current_address text NOT NULL,
    city text NOT NULL,
    state text NOT NULL,
    country text NOT NULL,
    postal_code text,
    willing_to_relocate boolean DEFAULT false,
    preferred_work_location text,
    
    -- Professional Information
    current_position text NOT NULL,
    current_company text,
    current_company_industry text,
    years_of_experience integer NOT NULL,
    months_of_experience integer DEFAULT 0,
    highest_education text NOT NULL,
    university_name text,
    graduation_year integer,
    major_field text,
    
    -- Sales-Specific Experience
    sales_experience_years integer,
    previous_sales_roles text,
    sales_tools_used text[],
    crm_experience text,
    monthly_sales_achieved text,
    key_achievements text,
    
    -- Skills & Certifications
    technical_skills text[],
    soft_skills text[],
    certifications text[],
    sales_certifications text,
    
    -- Availability & Compensation
    notice_period text NOT NULL,
    earliest_join_date date,
    current_salary text,
    expected_salary text NOT NULL,
    salary_negotiable boolean DEFAULT true,
    
    -- Language Skills (Important for sales role)
    english_proficiency text NOT NULL,
    hindi_proficiency text,
    other_languages text,
    comfortable_with_cold_calling boolean DEFAULT false,
    
    -- Work Preferences
    preferred_shift text,
    work_from_home_preference text,
    comfortable_with_targets boolean DEFAULT false,
    travel_willingness text,
    
    -- Social & Professional Links
    linkedin_url text,
    portfolio_url text,
    github_url text,
    other_profile_url text,
    
    -- References
    reference_name text,
    reference_company text,
    reference_phone text,
    reference_email text,
    
    -- Motivation & Fit
    why_interested text NOT NULL,
    why_sales text,
    career_goals text NOT NULL,
    strengths text NOT NULL,
    weaknesses text,
    cover_letter text NOT NULL,
    additional_info text,
    
    -- Resume
    resume_filename text,
    resume_data text,
    
    -- Consent & Legal
    data_consent boolean DEFAULT false,
    background_check_consent boolean DEFAULT false,
    
    -- Admin fields
    status text DEFAULT 'pending',
    admin_notes text,
    rating integer DEFAULT 0,
    interview_date timestamp with time zone,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Step 2: Enable RLS
ALTER TABLE public.job_applications ENABLE ROW LEVEL SECURITY;

-- Step 3: Drop any existing policies (to avoid conflicts)
DROP POLICY IF EXISTS "Anyone can submit applications" ON public.job_applications;
DROP POLICY IF EXISTS "Authenticated users can view applications" ON public.job_applications;
DROP POLICY IF EXISTS "Authenticated users can update applications" ON public.job_applications;
DROP POLICY IF EXISTS "Authenticated users can delete applications" ON public.job_applications;

-- Step 4: Create RLS policies
CREATE POLICY "Anyone can submit applications"
ON public.job_applications
FOR INSERT
WITH CHECK (true);

CREATE POLICY "Anyone can view applications"
ON public.job_applications
FOR SELECT
USING (true);

CREATE POLICY "Authenticated users can update applications"
ON public.job_applications
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

CREATE POLICY "Authenticated users can delete applications"
ON public.job_applications
FOR DELETE
TO authenticated
USING (true);

-- Step 5: Grant permissions
GRANT INSERT ON public.job_applications TO anon, authenticated, public;
GRANT ALL ON public.job_applications TO authenticated;
GRANT USAGE ON SCHEMA public TO anon, authenticated, public;

-- Step 6: Enable Realtime for job_listings table (for auto-updates on careers page)
-- First, check if the publication exists, if not create it
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_publication WHERE pubname = 'supabase_realtime'
    ) THEN
        CREATE PUBLICATION supabase_realtime;
    END IF;
END $$;

-- Add job_listings table to realtime publication
ALTER PUBLICATION supabase_realtime ADD TABLE IF NOT EXISTS public.job_listings;

-- Also enable realtime for job_applications (for admin dashboard updates)
ALTER PUBLICATION supabase_realtime ADD TABLE IF NOT EXISTS public.job_applications;

SELECT '✅ Simple job_applications table created!' as status;

-- Show table structure
SELECT 
    column_name,
    data_type,
    is_nullable
FROM information_schema.columns
WHERE table_name = 'job_applications'
ORDER BY ordinal_position;

SELECT '🎉 Application form will now work!' as final_message;