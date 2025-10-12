-- ========================================
-- VERIFY AND ENABLE REALTIME FOR JOB LISTINGS
-- ========================================
-- Copy and paste this ENTIRE file into Supabase SQL Editor
-- Go to: https://supabase.com/dashboard/project/faoiscbbfjtvpywmddpn/editor
-- ========================================

-- Step 1: Check if supabase_realtime publication exists
SELECT 
    'Publication exists: ' || CASE 
        WHEN EXISTS (SELECT 1 FROM pg_publication WHERE pubname = 'supabase_realtime') 
        THEN '✅ YES' 
        ELSE '❌ NO' 
    END as publication_status;

-- Step 2: Create publication if it doesn't exist
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_publication WHERE pubname = 'supabase_realtime'
    ) THEN
        CREATE PUBLICATION supabase_realtime;
        RAISE NOTICE '✅ Created supabase_realtime publication';
    ELSE
        RAISE NOTICE '✅ supabase_realtime publication already exists';
    END IF;
END $$;

-- Step 3: Add job_listings table to the publication
DO $$
BEGIN
    -- Try to add the table
    ALTER PUBLICATION supabase_realtime ADD TABLE public.job_listings;
    RAISE NOTICE '✅ Added job_listings to realtime publication';
EXCEPTION 
    WHEN duplicate_object THEN
        RAISE NOTICE '✅ job_listings already in realtime publication';
    WHEN undefined_table THEN
        RAISE EXCEPTION '❌ Table job_listings does not exist';
END $$;

-- Step 4: Add job_applications table to the publication (for admin dashboard)
DO $$
BEGIN
    -- Try to add the table
    ALTER PUBLICATION supabase_realtime ADD TABLE public.job_applications;
    RAISE NOTICE '✅ Added job_applications to realtime publication';
EXCEPTION 
    WHEN duplicate_object THEN
        RAISE NOTICE '✅ job_applications already in realtime publication';
    WHEN undefined_table THEN
        RAISE EXCEPTION '❌ Table job_applications does not exist';
END $$;

-- Step 5: Verify tables are in the publication
SELECT 
    pubname as publication_name,
    schemaname as schema,
    tablename as table_name,
    '✅ Realtime ENABLED' as status
FROM pg_publication_tables
WHERE pubname = 'supabase_realtime'
ORDER BY tablename;

-- Step 6: Check if there are any tables in the publication
SELECT 
    CASE 
        WHEN COUNT(*) > 0 THEN '✅ SUCCESS: ' || COUNT(*) || ' table(s) have realtime enabled'
        ELSE '❌ ERROR: No tables in realtime publication'
    END as final_status
FROM pg_publication_tables
WHERE pubname = 'supabase_realtime';

-- ========================================
-- EXPECTED OUTPUT:
-- ========================================
-- You should see:
-- 1. "Publication exists: ✅ YES"
-- 2. Two rows showing job_listings and job_applications with "✅ Realtime ENABLED"
-- 3. "✅ SUCCESS: 2 table(s) have realtime enabled"
-- ========================================
