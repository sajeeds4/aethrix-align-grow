-- Optional: Add missing columns to existing contact_submissions table
-- Run this in your Supabase SQL Editor if you want to capture more form data

-- Check current table structure first
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'contact_submissions' 
AND table_schema = 'public'
ORDER BY ordinal_position;

-- Add missing columns if they don't exist
ALTER TABLE contact_submissions 
ADD COLUMN IF NOT EXISTS industry VARCHAR(100),
ADD COLUMN IF NOT EXISTS service VARCHAR(100),
ADD COLUMN IF NOT EXISTS budget VARCHAR(50),
ADD COLUMN IF NOT EXISTS timeline VARCHAR(50);

-- Verify the updated structure
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'contact_submissions' 
AND table_schema = 'public'
ORDER BY ordinal_position;
