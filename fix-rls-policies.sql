-- Fix RLS Policies for Job Management System
-- Run this script to fix the "failed to fetch jobs" issue

-- ============================================
-- Fix job_listings policies
-- ============================================

-- Drop existing policies
DROP POLICY IF EXISTS "Enable read access for all users" ON job_listings;
DROP POLICY IF EXISTS "Enable all operations for authenticated users" ON job_listings;
DROP POLICY IF EXISTS "Public can view active jobs" ON job_listings;
DROP POLICY IF EXISTS "Authenticated users can view all jobs" ON job_listings;
DROP POLICY IF EXISTS "Authenticated users can insert jobs" ON job_listings;
DROP POLICY IF EXISTS "Authenticated users can update jobs" ON job_listings;
DROP POLICY IF EXISTS "Authenticated users can delete jobs" ON job_listings;

-- Create new policies with correct permissions

-- 1. Allow ANYONE (including anonymous users) to read active jobs
CREATE POLICY "Public can view active jobs"
ON job_listings
FOR SELECT
USING (is_active = true);

-- 2. Allow authenticated users to view ALL jobs (including inactive ones)
CREATE POLICY "Authenticated users can view all jobs"
ON job_listings
FOR SELECT
TO authenticated
USING (true);

-- 3. Allow authenticated users to insert jobs
CREATE POLICY "Authenticated users can insert jobs"
ON job_listings
FOR INSERT
TO authenticated
WITH CHECK (true);

-- 4. Allow authenticated users to update jobs
CREATE POLICY "Authenticated users can update jobs"
ON job_listings
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

-- 5. Allow authenticated users to delete jobs
CREATE POLICY "Authenticated users can delete jobs"
ON job_listings
FOR DELETE
TO authenticated
USING (true);

-- ============================================
-- Fix job_applications policies
-- ============================================

-- Drop existing policies
DROP POLICY IF EXISTS "Enable insert for all users" ON job_applications;
DROP POLICY IF EXISTS "Enable read for own applications" ON job_applications;
DROP POLICY IF EXISTS "Enable all operations for authenticated users" ON job_applications;
DROP POLICY IF EXISTS "Anyone can submit applications" ON job_applications;
DROP POLICY IF EXISTS "Users can view own applications" ON job_applications;
DROP POLICY IF EXISTS "Authenticated users can update applications" ON job_applications;
DROP POLICY IF EXISTS "Authenticated users can delete applications" ON job_applications;

-- Create new policies

-- 1. Allow ANYONE to submit applications
CREATE POLICY "Anyone can submit applications"
ON job_applications
FOR INSERT
WITH CHECK (true);

-- 2. Allow users to view their own applications OR allow authenticated users to view all
CREATE POLICY "Users can view own applications"
ON job_applications
FOR SELECT
USING (
  auth.email() = email 
  OR 
  auth.role() = 'authenticated'
);

-- 3. Allow authenticated users (admins) to update applications
CREATE POLICY "Authenticated users can update applications"
ON job_applications
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

-- 4. Allow authenticated users (admins) to delete applications
CREATE POLICY "Authenticated users can delete applications"
ON job_applications
FOR DELETE
TO authenticated
USING (true);

-- ============================================
-- Verify the policies
-- ============================================

-- Check job_listings policies
SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd
FROM pg_policies 
WHERE tablename = 'job_listings'
ORDER BY policyname;

-- Check job_applications policies
SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd
FROM pg_policies 
WHERE tablename = 'job_applications'
ORDER BY policyname;

-- Test query that should work for anonymous users
SELECT 
    id,
    title,
    department,
    location,
    employment_type,
    is_active
FROM job_listings
WHERE is_active = true;

-- Success message
SELECT 
    '✅ RLS Policies Fixed!' as status,
    'Jobs should now be visible on careers page and in admin panel' as message,
    'Try refreshing your browser' as next_step;
