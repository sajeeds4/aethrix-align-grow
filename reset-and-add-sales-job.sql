-- ========================================
-- RESET JOBS AND ADD JR INSIDE SALES REP
-- ========================================
-- This script will:
-- 1. Delete ALL existing job postings
-- 2. Add a Jr Inside Sales Representative position
-- ========================================

-- Step 1: Delete all existing jobs
-- ========================================

DELETE FROM public.job_applications;  -- Delete applications first (foreign key)
DELETE FROM public.job_listings;      -- Then delete all jobs

SELECT '✅ All existing jobs deleted' as status;

-- Step 2: Add Jr Inside Sales Representative Job
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
    featured,
    application_deadline
) VALUES (
    'Jr Inside Sales Representative',
    'Sales',
    'Remote / Hybrid',
    'Full-time',
    'Aethrix Systems is seeking a motivated Jr Inside Sales Representative to join our growing sales team. This role is perfect for someone looking to start their career in B2B technology sales. You will work closely with our senior sales team to qualify leads, conduct product demonstrations, and help businesses discover how our SAP and enterprise solutions can transform their operations.

As a Jr Inside Sales Representative, you will be responsible for generating new business opportunities through inbound and outbound prospecting. We offer comprehensive training on our products, sales methodologies, and the SAP ecosystem. This is an excellent opportunity to grow your career in enterprise software sales with a company that values innovation and customer success.',
    
    '• Bachelor''s degree in Business, Marketing, Communications, or related field (or equivalent experience)
• 0-2 years of experience in sales, customer service, or related field
• Excellent verbal and written communication skills
• Strong interpersonal skills and ability to build relationships
• Self-motivated with a results-driven approach
• Ability to learn technical concepts quickly
• Proficiency in Microsoft Office (Excel, PowerPoint, Word)
• Experience with CRM systems (Salesforce, HubSpot) is a plus
• Interest in technology and enterprise software
• Ability to work independently and as part of a team',
    
    '• Conduct outbound calls and emails to prospective clients to generate new business opportunities
• Qualify inbound leads and schedule product demonstrations for senior sales representatives
• Research and identify potential customers in target industries
• Maintain accurate records of all sales activities in CRM system
• Participate in product training sessions to develop deep knowledge of Aethrix solutions
• Collaborate with marketing team to develop lead generation strategies
• Assist in preparing sales presentations and proposals
• Follow up with prospects to nurture relationships and move them through the sales pipeline
• Attend team meetings and contribute to sales strategy discussions
• Meet or exceed monthly targets for calls, meetings scheduled, and pipeline generation
• Stay updated on industry trends, competitor activities, and SAP ecosystem developments
• Provide feedback to product and marketing teams based on customer interactions',
    
    ARRAY[
        'Sales',
        'Communication',
        'CRM Software',
        'Lead Generation',
        'Customer Relationship Management',
        'B2B Sales',
        'Cold Calling',
        'Email Marketing',
        'Microsoft Office',
        'Time Management',
        'Active Listening',
        'Negotiation',
        'Presentation Skills'
    ],
    
    '$40,000 - $55,000 per year + Commission',
    
    'Entry Level',
    
    true,  -- is_active
    
    true,  -- featured
    
    (NOW() + INTERVAL '45 days')::timestamp with time zone  -- Application deadline: 45 days from now
);

-- Step 3: Verify the job was created
-- ========================================

SELECT 
    '✅ Jr Inside Sales Representative job created!' as status,
    id,
    title,
    department,
    location,
    employment_type,
    salary_range,
    is_active,
    featured,
    application_deadline
FROM public.job_listings
ORDER BY created_at DESC
LIMIT 1;

SELECT 
    '✅ COMPLETE!' as status,
    'All old jobs deleted' as step_1,
    'Jr Inside Sales Rep job added' as step_2,
    'Job is active and featured' as step_3;
