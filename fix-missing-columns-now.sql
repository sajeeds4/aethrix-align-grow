-- ========================================
-- COMPLETE FIX FOR JOB APPLICATIONS TABLE
-- ========================================
-- This adds ALL missing columns your form needs
-- Run this NOW in Supabase SQL Editor
-- ========================================

-- Step 1: Add all missing columns
ALTER TABLE public.job_applications 
ADD COLUMN IF NOT EXISTS first_name text,
ADD COLUMN IF NOT EXISTS last_name text,
ADD COLUMN IF NOT EXISTS location text,
ADD COLUMN IF NOT EXISTS linkedin_url text,
ADD COLUMN IF NOT EXISTS portfolio_url text,
ADD COLUMN IF NOT EXISTS github_url text,
ADD COLUMN IF NOT EXISTS current_company text,
ADD COLUMN IF NOT EXISTS expected_salary text,
ADD COLUMN IF NOT EXISTS availability text,
ADD COLUMN IF NOT EXISTS willing_to_relocate boolean DEFAULT false,
ADD COLUMN IF NOT EXISTS resume_url text,
ADD COLUMN IF NOT EXISTS technical_skills text[] DEFAULT ARRAY[]::text[],
ADD COLUMN IF NOT EXISTS soft_skills text[] DEFAULT ARRAY[]::text[],
ADD COLUMN IF NOT EXISTS programming_languages text[] DEFAULT ARRAY[]::text[],
ADD COLUMN IF NOT EXISTS frameworks_tools text[] DEFAULT ARRAY[]::text[],
ADD COLUMN IF NOT EXISTS certifications text[] DEFAULT ARRAY[]::text[],
ADD COLUMN IF NOT EXISTS languages_spoken text[] DEFAULT ARRAY[]::text[],
ADD COLUMN IF NOT EXISTS work_experience text,
ADD COLUMN IF NOT EXISTS education_background text,
ADD COLUMN IF NOT EXISTS projects text,
ADD COLUMN IF NOT EXISTS achievements text,
ADD COLUMN IF NOT EXISTS why_interested text,
ADD COLUMN IF NOT EXISTS additional_info text;

SELECT '✅ All columns added!' as status;

-- Step 2: Verify columns exist
SELECT 
    column_name,
    data_type
FROM information_schema.columns
WHERE table_name = 'job_applications'
ORDER BY ordinal_position;

SELECT '✅ Column verification complete!' as status;
