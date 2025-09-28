-- Fix RLS policies for contact_submissions table
-- Run this in your Supabase SQL Editor

-- First, disable RLS temporarily to allow operations
ALTER TABLE contact_submissions DISABLE ROW LEVEL SECURITY;

-- Or, if you want to keep RLS enabled, create proper policies
-- Re-enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Drop all existing policies to start fresh (including the one that already exists)
DROP POLICY IF EXISTS "Allow public insert" ON contact_submissions;
DROP POLICY IF EXISTS "Allow public read" ON contact_submissions;
DROP POLICY IF EXISTS "Allow public update" ON contact_submissions;
DROP POLICY IF EXISTS "Enable insert for anon users" ON contact_submissions;
DROP POLICY IF EXISTS "Enable read for anon users" ON contact_submissions;
DROP POLICY IF EXISTS "Enable update for anon users" ON contact_submissions;
DROP POLICY IF EXISTS "Enable all operations for anon users" ON contact_submissions;

-- Create new comprehensive policy for anonymous users
CREATE POLICY "Enable all operations for anon users" ON contact_submissions
    FOR ALL USING (true) WITH CHECK (true);

-- Alternative: Create separate policies for each operation
-- CREATE POLICY "Enable insert for anon users" ON contact_submissions
--     FOR INSERT TO anon WITH CHECK (true);
-- 
-- CREATE POLICY "Enable select for anon users" ON contact_submissions
--     FOR SELECT TO anon USING (true);
-- 
-- CREATE POLICY "Enable update for anon users" ON contact_submissions
--     FOR UPDATE TO anon USING (true) WITH CHECK (true);

-- Verify policies are created
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check
FROM pg_policies 
WHERE tablename = 'contact_submissions';
