-- ========================================
-- COMPLETE DATABASE FIX FOR JOB SYSTEM
-- ========================================
-- This script fixes ALL issues:
-- 1. RLS policies for public access
-- 2. Missing columns
-- 3. Grants proper permissions
-- ========================================

-- Step 1: Ensure tables exist with correct structure
-- ========================================

-- Create job_listings table if it doesn't exist
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

-- Add rating column if it doesn't exist
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name='job_listings' AND column_name='rating') THEN
        ALTER TABLE public.job_listings ADD COLUMN rating integer DEFAULT 0;
    END IF;
END $$;

-- Add tags column if it doesn't exist
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name='job_listings' AND column_name='tags') THEN
        ALTER TABLE public.job_listings ADD COLUMN tags text[] DEFAULT ARRAY[]::text[];
    END IF;
END $$;

-- Create job_applications table if it doesn't exist
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

-- Add job_id column if it doesn't exist (with foreign key)
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name='job_applications' AND column_name='job_id') THEN
        ALTER TABLE public.job_applications 
        ADD COLUMN job_id uuid REFERENCES public.job_listings(id) ON DELETE CASCADE;
    END IF;
END $$;

-- Add email_history column if it doesn't exist
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name='job_applications' AND column_name='email_history') THEN
        ALTER TABLE public.job_applications ADD COLUMN email_history jsonb DEFAULT '[]'::jsonb;
    END IF;
END $$;

-- Add created_at column to job_applications if it doesn't exist
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name='job_applications' AND column_name='created_at') THEN
        ALTER TABLE public.job_applications 
        ADD COLUMN created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL;
    END IF;
END $$;

-- Add updated_at column to job_applications if it doesn't exist
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name='job_applications' AND column_name='updated_at') THEN
        ALTER TABLE public.job_applications 
        ADD COLUMN updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL;
    END IF;
END $$;

-- Add created_at column to job_listings if it doesn't exist
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name='job_listings' AND column_name='created_at') THEN
        ALTER TABLE public.job_listings 
        ADD COLUMN created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL;
    END IF;
END $$;

-- Add updated_at column to job_listings if it doesn't exist
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name='job_listings' AND column_name='updated_at') THEN
        ALTER TABLE public.job_listings 
        ADD COLUMN updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL;
    END IF;
END $$;

-- Step 1.5: Create indexes for performance (after columns exist)
-- ========================================

CREATE INDEX IF NOT EXISTS idx_job_listings_is_active ON public.job_listings(is_active);
CREATE INDEX IF NOT EXISTS idx_job_listings_featured ON public.job_listings(featured);
CREATE INDEX IF NOT EXISTS idx_job_listings_created_at ON public.job_listings(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_job_applications_job_id ON public.job_applications(job_id);
CREATE INDEX IF NOT EXISTS idx_job_applications_status ON public.job_applications(status);
CREATE INDEX IF NOT EXISTS idx_job_applications_created_at ON public.job_applications(created_at DESC);

-- Step 2: Enable Row Level Security
-- ========================================

ALTER TABLE public.job_listings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.job_applications ENABLE ROW LEVEL SECURITY;

-- Step 3: Drop ALL existing policies
-- ========================================

-- Drop job_listings policies
DROP POLICY IF EXISTS "Enable read access for all users" ON public.job_listings;
DROP POLICY IF EXISTS "Enable all operations for authenticated users" ON public.job_listings;
DROP POLICY IF EXISTS "Public can view active jobs" ON public.job_listings;
DROP POLICY IF EXISTS "Authenticated users can view all jobs" ON public.job_listings;
DROP POLICY IF EXISTS "Authenticated users can insert jobs" ON public.job_listings;
DROP POLICY IF EXISTS "Authenticated users can update jobs" ON public.job_listings;
DROP POLICY IF EXISTS "Authenticated users can delete jobs" ON public.job_listings;
DROP POLICY IF EXISTS "Allow public read access" ON public.job_listings;
DROP POLICY IF EXISTS "Allow authenticated full access" ON public.job_listings;

-- Drop job_applications policies
DROP POLICY IF EXISTS "Enable insert for all users" ON public.job_applications;
DROP POLICY IF EXISTS "Enable read for own applications" ON public.job_applications;
DROP POLICY IF EXISTS "Enable all operations for authenticated users" ON public.job_applications;
DROP POLICY IF EXISTS "Anyone can submit applications" ON public.job_applications;
DROP POLICY IF EXISTS "Users can view own applications" ON public.job_applications;
DROP POLICY IF EXISTS "Authenticated users can update applications" ON public.job_applications;
DROP POLICY IF EXISTS "Authenticated users can delete applications" ON public.job_applications;
DROP POLICY IF EXISTS "Authenticated users can view all applications" ON public.job_applications;
DROP POLICY IF EXISTS "Allow public insert" ON public.job_applications;
DROP POLICY IF EXISTS "Allow authenticated full access" ON public.job_applications;

-- Step 4: Create SIMPLE and CORRECT policies
-- ========================================

-- JOB LISTINGS POLICIES
-- ---------------------

-- 1. PUBLIC: Can view active jobs (for careers page)
CREATE POLICY "public_view_active_jobs"
ON public.job_listings
FOR SELECT
TO anon
USING (is_active = true);

-- 2. AUTHENTICATED: Can view ALL jobs (for admin panel)
CREATE POLICY "authenticated_view_all_jobs"
ON public.job_listings
FOR SELECT
TO authenticated
USING (true);

-- 3. AUTHENTICATED: Can insert jobs
CREATE POLICY "authenticated_insert_jobs"
ON public.job_listings
FOR INSERT
TO authenticated
WITH CHECK (true);

-- 4. AUTHENTICATED: Can update jobs
CREATE POLICY "authenticated_update_jobs"
ON public.job_listings
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

-- 5. AUTHENTICATED: Can delete jobs
CREATE POLICY "authenticated_delete_jobs"
ON public.job_listings
FOR DELETE
TO authenticated
USING (true);

-- JOB APPLICATIONS POLICIES
-- -------------------------

-- 1. EVERYONE: Can submit applications (including anonymous users)
CREATE POLICY "public_insert_applications"
ON public.job_applications
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- 2. AUTHENTICATED: Can view all applications (for admin panel)
CREATE POLICY "authenticated_view_all_applications"
ON public.job_applications
FOR SELECT
TO authenticated
USING (true);

-- 3. AUTHENTICATED: Can update applications
CREATE POLICY "authenticated_update_applications"
ON public.job_applications
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

-- 4. AUTHENTICATED: Can delete applications
CREATE POLICY "authenticated_delete_applications"
ON public.job_applications
FOR DELETE
TO authenticated
USING (true);

-- Step 5: Grant proper permissions
-- ========================================

-- Grant permissions to anon users (public access)
GRANT SELECT ON public.job_listings TO anon;
GRANT INSERT ON public.job_applications TO anon;
GRANT USAGE ON SCHEMA public TO anon;

-- Grant permissions to authenticated users (admin access)
GRANT ALL ON public.job_listings TO authenticated;
GRANT ALL ON public.job_applications TO authenticated;
GRANT USAGE ON SCHEMA public TO authenticated;

-- Grant sequence usage if they exist
GRANT USAGE ON ALL SEQUENCES IN SCHEMA public TO anon;
GRANT USAGE ON ALL SEQUENCES IN SCHEMA public TO authenticated;

-- Step 6: Create updated_at trigger
-- ========================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ language 'plpgsql';

DROP TRIGGER IF EXISTS update_job_listings_updated_at ON public.job_listings;
CREATE TRIGGER update_job_listings_updated_at
    BEFORE UPDATE ON public.job_listings
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_job_applications_updated_at ON public.job_applications;
CREATE TRIGGER update_job_applications_updated_at
    BEFORE UPDATE ON public.job_applications
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Step 7: Insert sample job if table is empty
-- ========================================

INSERT INTO public.job_listings (
    title,
    department,
    location,
    employment_type,
    description,
    requirements,
    responsibilities,
    skills,
    salary_range,
    experience_level,
    is_active,
    featured
)
SELECT 
    'Senior Full Stack Developer',
    'Engineering',
    'Remote',
    'Full-time',
    'We are looking for an experienced Full Stack Developer to join our growing team.',
    '- 5+ years of experience with React and Node.js
- Strong TypeScript skills
- Experience with cloud platforms (AWS/GCP)
- Knowledge of database design and optimization',
    '- Design and develop scalable web applications
- Collaborate with cross-functional teams
- Write clean, maintainable code
- Participate in code reviews',
    ARRAY['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
    '$120,000 - $160,000',
    'Senior',
    true,
    true
WHERE NOT EXISTS (SELECT 1 FROM public.job_listings LIMIT 1);

-- Step 8: Verify everything
-- ========================================

-- Show all policies
DO $$
DECLARE
    policy_count int;
BEGIN
    SELECT COUNT(*) INTO policy_count 
    FROM pg_policies 
    WHERE tablename IN ('job_listings', 'job_applications');
    
    RAISE NOTICE '✅ Total policies created: %', policy_count;
END $$;

-- Show job_listings policies
SELECT 
    '📋 job_listings policies:' as info,
    policyname,
    permissive,
    roles::text,
    cmd
FROM pg_policies 
WHERE tablename = 'job_listings'
ORDER BY policyname;

-- Show job_applications policies
SELECT 
    '📋 job_applications policies:' as info,
    policyname,
    permissive,
    roles::text,
    cmd
FROM pg_policies 
WHERE tablename = 'job_applications'
ORDER BY policyname;

-- Test queries
SELECT 
    '✅ Test: Active jobs visible to public' as test,
    COUNT(*) as job_count
FROM public.job_listings
WHERE is_active = true;

-- Final success message
SELECT 
    '🎉 DATABASE SETUP COMPLETE!' as status,
    'Jobs should now be visible on /careers page' as careers_page,
    'Admin panel should show all jobs at /admin' as admin_panel,
    'You can now post new jobs from admin panel' as posting,
    'Try refreshing your browser!' as next_step;
