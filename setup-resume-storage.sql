-- ========================================
-- SETUP SUPABASE STORAGE FOR RESUME UPLOADS
-- ========================================
-- Run this script in Supabase SQL Editor
-- This creates the storage bucket and policies for resume uploads
-- ========================================

-- Step 1: Create storage bucket for job applications
-- ========================================

INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'job-applications',
  'job-applications',
  true,  -- public bucket (resumes accessible via URL)
  5242880,  -- 5MB file size limit
  ARRAY['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
)
ON CONFLICT (id) DO UPDATE SET
  public = true,
  file_size_limit = 5242880,
  allowed_mime_types = ARRAY['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

SELECT '✅ Storage bucket created/updated' as status;

-- Step 2: Create storage policies
-- ========================================

-- Allow anyone to upload resumes
DROP POLICY IF EXISTS "Anyone can upload resumes" ON storage.objects;
CREATE POLICY "Anyone can upload resumes"
ON storage.objects
FOR INSERT
TO public, anon, authenticated
WITH CHECK (bucket_id = 'job-applications');

-- Allow anyone to download/view resumes
DROP POLICY IF EXISTS "Anyone can read resumes" ON storage.objects;
CREATE POLICY "Anyone can read resumes"
ON storage.objects
FOR SELECT
TO public, anon, authenticated
USING (bucket_id = 'job-applications');

-- Allow authenticated users (admins) to delete resumes
DROP POLICY IF EXISTS "Authenticated users can delete resumes" ON storage.objects;
CREATE POLICY "Authenticated users can delete resumes"
ON storage.objects
FOR DELETE
TO authenticated
USING (bucket_id = 'job-applications');

SELECT '✅ Storage policies created' as status;

-- Step 3: Verify setup
-- ========================================

SELECT 
  '✅ STORAGE SETUP COMPLETE!' as status,
  'Bucket: job-applications' as bucket,
  'Public: Yes' as access,
  'Max Size: 5MB' as file_limit,
  'Types: PDF, DOC, DOCX' as allowed_types;

-- Show bucket details
SELECT 
  id,
  name,
  public,
  file_size_limit,
  allowed_mime_types
FROM storage.buckets
WHERE id = 'job-applications';

-- Show storage policies
SELECT 
  policyname,
  permissive,
  roles::text,
  cmd,
  qual::text as using_check
FROM pg_policies
WHERE schemaname = 'storage'
  AND tablename = 'objects'
  AND policyname LIKE '%resume%'
ORDER BY policyname;

SELECT '✅ Resume upload is now ready to use!' as final_status;
