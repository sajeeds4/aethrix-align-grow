-- ========================================
-- FIX RLS FOR JOB SYSTEM ONLY
-- ========================================
-- This script ONLY fixes job_listings and job_applications
-- Does NOT touch your other existing tables
-- Safe to run on existing database with data
-- ========================================

-- Step 1: Check if tables exist
-- ========================================

DO $$
BEGIN
    IF EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'job_listings') THEN
        RAISE NOTICE '✅ job_listings table exists';
    ELSE
        RAISE NOTICE '❌ job_listings table does NOT exist - creating it';
    END IF;
    
    IF EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'job_applications') THEN
        RAISE NOTICE '✅ job_applications table exists';
    ELSE
        RAISE NOTICE '❌ job_applications table does NOT exist - creating it';
    END IF;
END $$;

-- Step 2: Create tables ONLY if they don't exist
-- ========================================

CREATE TABLE IF NOT EXISTS public.job_listings (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    title text NOT NULL,
    department text NOT NULL,
    location text NOT NULL,
    employment_type text NOT NULL,
    description text NOT NULL,
    requirements text NOT NULL,
    responsibilities text NOT NULL,
    skills text[] DEFAULT ARRAY[]::text[],
    salary_range text,
    experience_level text NOT NULL,
    is_active boolean DEFAULT true,
    featured boolean DEFAULT false,
    application_deadline timestamp with time zone,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.job_applications (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    full_name text NOT NULL,
    email text NOT NULL,
    phone text NOT NULL,
    linkedin_url text,
    portfolio_url text,
    cover_letter text,
    resume_url text,
    years_of_experience integer DEFAULT 0,
    current_position text,
    status text DEFAULT 'pending',
    admin_notes text,
    rating integer DEFAULT 0,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Add job_id if it doesn't exist
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name='job_applications' AND column_name='job_id') THEN
        ALTER TABLE public.job_applications 
        ADD COLUMN job_id uuid REFERENCES public.job_listings(id) ON DELETE CASCADE;
        RAISE NOTICE '✅ Added job_id column to job_applications';
    END IF;
END $$;

-- Step 3: Enable RLS on job tables
-- ========================================

ALTER TABLE public.job_listings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.job_applications ENABLE ROW LEVEL SECURITY;

-- Step 4: Drop existing job-related policies
-- ========================================

DROP POLICY IF EXISTS "public_view_active_jobs" ON public.job_listings;
DROP POLICY IF EXISTS "authenticated_view_all_jobs" ON public.job_listings;
DROP POLICY IF EXISTS "authenticated_insert_jobs" ON public.job_listings;
DROP POLICY IF EXISTS "authenticated_update_jobs" ON public.job_listings;
DROP POLICY IF EXISTS "authenticated_delete_jobs" ON public.job_listings;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.job_listings;
DROP POLICY IF EXISTS "Enable all operations for authenticated users" ON public.job_listings;
DROP POLICY IF EXISTS "Public can view active jobs" ON public.job_listings;
DROP POLICY IF EXISTS "Allow public read access" ON public.job_listings;
DROP POLICY IF EXISTS "Allow authenticated full access" ON public.job_listings;

DROP POLICY IF EXISTS "public_insert_applications" ON public.job_applications;
DROP POLICY IF EXISTS "authenticated_view_all_applications" ON public.job_applications;
DROP POLICY IF EXISTS "authenticated_update_applications" ON public.job_applications;
DROP POLICY IF EXISTS "authenticated_delete_applications" ON public.job_applications;
DROP POLICY IF EXISTS "Enable insert for all users" ON public.job_applications;
DROP POLICY IF EXISTS "Enable all operations for authenticated users" ON public.job_applications;
DROP POLICY IF EXISTS "Anyone can submit applications" ON public.job_applications;
DROP POLICY IF EXISTS "Allow public insert" ON public.job_applications;
DROP POLICY IF EXISTS "Allow authenticated full access" ON public.job_applications;

-- Step 5: Create correct RLS policies
-- ========================================

-- PUBLIC: Can view active jobs
CREATE POLICY "public_view_active_jobs"
ON public.job_listings
FOR SELECT
TO anon, authenticated
USING (is_active = true);

-- AUTHENTICATED: Can view ALL jobs
CREATE POLICY "authenticated_view_all_jobs"
ON public.job_listings
FOR SELECT
TO authenticated
USING (true);

-- AUTHENTICATED: Can insert jobs
CREATE POLICY "authenticated_insert_jobs"
ON public.job_listings
FOR INSERT
TO authenticated
WITH CHECK (true);

-- AUTHENTICATED: Can update jobs
CREATE POLICY "authenticated_update_jobs"
ON public.job_listings
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

-- AUTHENTICATED: Can delete jobs
CREATE POLICY "authenticated_delete_jobs"
ON public.job_listings
FOR DELETE
TO authenticated
USING (true);

-- EVERYONE: Can submit applications
CREATE POLICY "public_insert_applications"
ON public.job_applications
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- AUTHENTICATED: Can view all applications
CREATE POLICY "authenticated_view_all_applications"
ON public.job_applications
FOR SELECT
TO authenticated
USING (true);

-- AUTHENTICATED: Can update applications
CREATE POLICY "authenticated_update_applications"
ON public.job_applications
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

-- AUTHENTICATED: Can delete applications
CREATE POLICY "authenticated_delete_applications"
ON public.job_applications
FOR DELETE
TO authenticated
USING (true);

-- Step 6: Grant permissions
-- ========================================

GRANT SELECT ON public.job_listings TO anon, authenticated;
GRANT INSERT ON public.job_applications TO anon, authenticated;
GRANT ALL ON public.job_listings TO authenticated;
GRANT ALL ON public.job_applications TO authenticated;
GRANT USAGE ON SCHEMA public TO anon, authenticated;

-- Step 7: Verify
-- ========================================

SELECT 
    '✅ RLS POLICIES FIXED!' as status,
    'Public can now view active jobs' as public_access,
    'Authenticated users can manage all jobs' as admin_access,
    'Anyone can submit applications' as applications;

-- Show policies
SELECT 
    tablename,
    policyname,
    permissive,
    roles::text,
    cmd
FROM pg_policies 
WHERE tablename IN ('job_listings', 'job_applications')
ORDER BY tablename, policyname;
