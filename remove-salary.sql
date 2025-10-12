-- Remove salary from Jr Inside Sales Representative job
-- Run this in Supabase SQL Editor

UPDATE public.job_listings
SET salary_range = ''
WHERE title = 'Jr Inside Sales Representative'
  AND salary_range LIKE '%40,000%55,000%';

-- Verify the update
SELECT 
    title,
    salary_range,
    '✅ Salary removed!' as status
FROM public.job_listings
WHERE title = 'Jr Inside Sales Representative';
