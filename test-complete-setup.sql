-- ============================================
-- TEST & VERIFY COMPLETE SETUP
-- Run this after fix-rls-policies.sql and enhance-job-applications.sql
-- ============================================

-- 1. Check if tables exist
SELECT 
    'job_listings' as table_name,
    COUNT(*) as row_count,
    'Active: ' || COUNT(*) FILTER (WHERE is_active = true) as active_count
FROM job_listings
UNION ALL
SELECT 
    'job_applications' as table_name,
    COUNT(*) as row_count,
    'Pending: ' || COUNT(*) FILTER (WHERE status = 'submitted') as active_count
FROM job_applications;

-- 2. Verify job_applications columns (including new ones)
SELECT 
    column_name,
    data_type,
    is_nullable
FROM information_schema.columns 
WHERE table_name = 'job_applications'
AND column_name IN ('rating', 'tags', 'email_history', 'resume_url', 'last_contacted_at')
ORDER BY column_name;

-- 3. Check RLS policies for job_listings
SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd as operation,
    CASE 
        WHEN cmd = 'SELECT' AND roles::text LIKE '%anon%' THEN '✅ Public Read'
        WHEN cmd = 'SELECT' AND roles::text LIKE '%authenticated%' THEN '✅ Admin Read'
        WHEN cmd IN ('INSERT', 'UPDATE', 'DELETE') THEN '✅ Admin Write'
        ELSE '⚠️ Check Policy'
    END as status
FROM pg_policies 
WHERE tablename = 'job_listings'
ORDER BY policyname;

-- 4. Check RLS policies for job_applications
SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd as operation,
    CASE 
        WHEN cmd = 'INSERT' AND policyname LIKE '%submit%' THEN '✅ Public Submit'
        WHEN cmd = 'SELECT' AND roles::text LIKE '%authenticated%' THEN '✅ Admin Read'
        WHEN cmd IN ('UPDATE', 'DELETE') AND roles::text LIKE '%authenticated%' THEN '✅ Admin Write'
        ELSE '⚠️ Check Policy'
    END as status
FROM pg_policies 
WHERE tablename = 'job_applications'
ORDER BY policyname;

-- 5. Test public access to active jobs (simulates careers page)
-- This should return rows without authentication
SELECT 
    id,
    title,
    department,
    location,
    employment_type,
    salary_range,
    is_active,
    created_at
FROM job_listings
WHERE is_active = true
ORDER BY created_at DESC;

-- 6. Check indexes for performance
SELECT
    schemaname,
    tablename,
    indexname,
    indexdef
FROM pg_indexes
WHERE tablename IN ('job_listings', 'job_applications')
ORDER BY tablename, indexname;

-- 7. Sample data check - verify Inside Sales Rep job exists
SELECT 
    title,
    department,
    location,
    employment_type,
    is_active,
    is_featured,
    created_at
FROM job_listings
WHERE title ILIKE '%inside sales%'
ORDER BY created_at DESC
LIMIT 1;

-- 8. Check for any orphaned applications (no matching job)
SELECT 
    COUNT(*) as orphaned_count,
    CASE 
        WHEN COUNT(*) = 0 THEN '✅ No orphaned applications'
        ELSE '⚠️ ' || COUNT(*) || ' applications without matching job'
    END as status
FROM job_applications ja
LEFT JOIN job_listings jl ON ja.job_listing_id = jl.id
WHERE jl.id IS NULL;

-- 9. Application statistics by status
SELECT 
    status,
    COUNT(*) as count,
    ROUND(AVG(rating), 2) as avg_rating,
    ROUND(AVG(years_of_experience), 1) as avg_experience
FROM job_applications
GROUP BY status
ORDER BY 
    CASE status
        WHEN 'submitted' THEN 1
        WHEN 'reviewing' THEN 2
        WHEN 'interview' THEN 3
        WHEN 'hired' THEN 4
        WHEN 'rejected' THEN 5
        ELSE 6
    END;

-- 10. Recent applications (last 7 days)
SELECT 
    COUNT(*) as recent_applications,
    CASE 
        WHEN COUNT(*) > 0 THEN '✅ Receiving applications'
        ELSE 'ℹ️ No recent applications'
    END as status
FROM job_applications
WHERE application_date > NOW() - INTERVAL '7 days';

-- 11. Test rating functionality
SELECT 
    CASE 
        WHEN COUNT(*) FILTER (WHERE rating IS NOT NULL) > 0 
        THEN '✅ Rating column working - ' || COUNT(*) FILTER (WHERE rating IS NOT NULL) || ' rated'
        ELSE 'ℹ️ No applications rated yet'
    END as rating_status
FROM job_applications;

-- 12. Final summary report
SELECT 
    '=== SYSTEM STATUS SUMMARY ===' as report,
    (SELECT COUNT(*) FROM job_listings WHERE is_active = true) as active_jobs,
    (SELECT COUNT(*) FROM job_applications) as total_applications,
    (SELECT COUNT(*) FROM job_applications WHERE status = 'submitted') as pending_review,
    (SELECT COUNT(*) FROM job_applications WHERE rating >= 4) as high_rated_candidates,
    CASE 
        WHEN (SELECT COUNT(*) FROM job_listings WHERE is_active = true) > 0 
        AND EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'job_listings' AND cmd = 'SELECT')
        THEN '✅ System Ready'
        ELSE '⚠️ Check Configuration'
    END as system_status;

-- ============================================
-- EXPECTED RESULTS CHECKLIST
-- ============================================
-- 
-- ✅ job_listings table has at least 1 active job
-- ✅ job_applications table exists (may have 0 rows if fresh)
-- ✅ rating, tags, email_history, resume_url columns exist
-- ✅ RLS policies allow:
--    - Public SELECT on active jobs
--    - Public INSERT on applications
--    - Authenticated CRUD on everything
-- ✅ Indexes exist for performance
-- ✅ Inside Sales Representative job exists
-- ✅ No orphaned applications
-- 
-- If all checks pass, your system is ready! 🎉
-- 
-- ============================================

-- Run this final check:
DO $$
DECLARE
    job_count INTEGER;
    policy_count INTEGER;
    column_count INTEGER;
BEGIN
    SELECT COUNT(*) INTO job_count FROM job_listings WHERE is_active = true;
    SELECT COUNT(*) INTO policy_count FROM pg_policies WHERE tablename IN ('job_listings', 'job_applications');
    SELECT COUNT(*) INTO column_count FROM information_schema.columns 
        WHERE table_name = 'job_applications' AND column_name = 'rating';
    
    RAISE NOTICE '========================================';
    RAISE NOTICE 'FINAL SYSTEM CHECK';
    RAISE NOTICE '========================================';
    RAISE NOTICE 'Active Jobs: %', job_count;
    RAISE NOTICE 'RLS Policies: %', policy_count;
    RAISE NOTICE 'Enhanced Columns: %', CASE WHEN column_count > 0 THEN 'YES' ELSE 'NO' END;
    RAISE NOTICE '========================================';
    
    IF job_count > 0 AND policy_count >= 5 AND column_count > 0 THEN
        RAISE NOTICE '✅ ALL SYSTEMS GO! Ready for production.';
    ELSE
        RAISE NOTICE '⚠️  Please run setup scripts:';
        IF job_count = 0 THEN
            RAISE NOTICE '   - complete-job-setup.sql (create jobs)';
        END IF;
        IF policy_count < 5 THEN
            RAISE NOTICE '   - fix-rls-policies.sql (fix permissions)';
        END IF;
        IF column_count = 0 THEN
            RAISE NOTICE '   - enhance-job-applications.sql (add features)';
        END IF;
    END IF;
    RAISE NOTICE '========================================';
END $$;
