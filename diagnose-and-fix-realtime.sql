-- 🔍 DIAGNOSTIC: Check if Realtime is Enabled
-- Run this in Supabase SQL Editor to diagnose the issue

-- ============================================
-- STEP 1: Check if realtime publication exists
-- ============================================
SELECT * FROM pg_publication WHERE pubname = 'supabase_realtime';
-- Expected: 1 row showing the publication exists


-- ============================================
-- STEP 2: Check which tables are in the publication
-- ============================================
SELECT schemaname, tablename 
FROM pg_publication_tables 
WHERE pubname = 'supabase_realtime'
ORDER BY tablename;
-- Expected: Should see 'job_listings' and 'job_applications' in the list


-- ============================================
-- STEP 3: Check if tables exist
-- ============================================
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
  AND table_name IN ('job_listings', 'job_applications');
-- Expected: Both tables should be listed


-- ============================================
-- STEP 4: Check RLS policies
-- ============================================
SELECT schemaname, tablename, policyname, cmd, qual
FROM pg_policies 
WHERE tablename IN ('job_listings', 'job_applications')
ORDER BY tablename, policyname;
-- Expected: Should see policies allowing SELECT


-- ============================================
-- FIX: If tables are NOT in realtime publication, run this:
-- ============================================

-- First, check if publication exists, if not create it:
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_publication WHERE pubname = 'supabase_realtime') THEN
    CREATE PUBLICATION supabase_realtime;
    RAISE NOTICE 'Created supabase_realtime publication';
  ELSE
    RAISE NOTICE 'supabase_realtime publication already exists';
  END IF;
END $$;

-- Add tables to publication (safe to run multiple times):
ALTER PUBLICATION supabase_realtime DROP TABLE IF EXISTS job_listings;
ALTER PUBLICATION supabase_realtime ADD TABLE job_listings;

ALTER PUBLICATION supabase_realtime DROP TABLE IF EXISTS job_applications;
ALTER PUBLICATION supabase_realtime ADD TABLE job_applications;

-- Verify it worked:
SELECT tablename 
FROM pg_publication_tables 
WHERE pubname = 'supabase_realtime'
ORDER BY tablename;
-- Expected: Should now see both tables!


-- ============================================
-- FIX: Add RLS policies to allow realtime to read changes
-- ============================================

-- Enable RLS if not already enabled
ALTER TABLE job_listings ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist (to avoid duplicates)
DROP POLICY IF EXISTS "Enable realtime for job_listings" ON job_listings;
DROP POLICY IF EXISTS "Enable realtime for job_applications" ON job_applications;

-- Create policies to allow SELECT for realtime
CREATE POLICY "Enable realtime for job_listings"
ON job_listings
FOR SELECT
USING (true);

CREATE POLICY "Enable realtime for job_applications"
ON job_applications
FOR SELECT
USING (true);

-- Also ensure admin can do everything:
DROP POLICY IF EXISTS "Enable all for authenticated users" ON job_listings;
CREATE POLICY "Enable all for authenticated users"
ON job_listings
FOR ALL
USING (true)
WITH CHECK (true);

DROP POLICY IF EXISTS "Enable all for authenticated users" ON job_applications;
CREATE POLICY "Enable all for authenticated users"
ON job_applications
FOR ALL
USING (true)
WITH CHECK (true);


-- ============================================
-- VERIFICATION: Run this to confirm everything is set up
-- ============================================

-- Should return 2 rows (job_listings, job_applications):
SELECT 
  'Realtime Tables' as check_type,
  tablename,
  'ENABLED' as status
FROM pg_publication_tables 
WHERE pubname = 'supabase_realtime'
  AND tablename IN ('job_listings', 'job_applications')
ORDER BY tablename;

-- Should return policies for both tables:
SELECT 
  'RLS Policies' as check_type,
  tablename,
  policyname,
  cmd as operation
FROM pg_policies 
WHERE tablename IN ('job_listings', 'job_applications')
ORDER BY tablename, policyname;


-- ============================================
-- 🎉 SUCCESS MESSAGE
-- ============================================
DO $$
BEGIN
  IF (SELECT COUNT(*) FROM pg_publication_tables 
      WHERE pubname = 'supabase_realtime' 
        AND tablename IN ('job_listings', 'job_applications')) = 2 
  THEN
    RAISE NOTICE '✅ SUCCESS! Realtime is enabled for both tables!';
    RAISE NOTICE 'Now test by editing a job in admin panel.';
    RAISE NOTICE 'Changes should appear on website within 1-2 seconds.';
  ELSE
    RAISE WARNING '⚠️ WARNING: Not all tables are in realtime publication!';
    RAISE WARNING 'Re-run the FIX section above.';
  END IF;
END $$;
