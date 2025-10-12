-- Clear existing job listings and add Inside Sales Representative position

-- Delete all existing job listings
DELETE FROM job_listings;

-- Insert Inside Sales Representative position
INSERT INTO job_listings (
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
    'Inside Sales Representative',
    'Sales & Business Development',
    'Remote / Hybrid (New York)',
    'Full-time',
    'Join Aethrix Systems as an Inside Sales Representative and help growing businesses discover how technology can transform their operations. This is an excellent opportunity for freshers or junior professionals looking to build a career in tech sales. You''ll work directly with our founding team, learn about cutting-edge technologies, and develop valuable business development skills.

We''re looking for someone who is eager to learn, communicates well, and is passionate about helping businesses succeed. No prior sales experience required - we''ll provide comprehensive training on our services, sales techniques, and the tech industry.',
    '• Bachelor''s degree in Business, Marketing, Communications, or related field (or equivalent experience)
• 0-2 years of experience (freshers encouraged to apply)
• Excellent verbal and written communication skills
• Strong interpersonal skills and ability to build relationships
• Self-motivated with a desire to learn and grow
• Basic understanding of technology and business software (or willingness to learn)
• Comfortable using CRM tools and online communication platforms
• Ability to work independently and as part of a small team
• Positive attitude and resilience in facing challenges
• Located in or willing to relocate to the New York area (hybrid role)',
    '• Identify and research potential clients through online research, LinkedIn, and referrals
• Reach out to prospects via email, phone calls, and social media to introduce our services
• Qualify leads and schedule discovery calls with the technical team
• Maintain accurate records of all interactions in our CRM system
• Follow up with leads through the sales pipeline
• Prepare and send proposals under guidance from senior team members
• Participate in client meetings to understand requirements and present solutions
• Build and maintain long-term relationships with clients
• Stay updated on our service offerings and industry trends
• Collaborate with the technical team to ensure client needs are met
• Contribute ideas for improving sales processes and materials
• Attend training sessions and professional development workshops',
    ARRAY[
        'Communication',
        'Relationship Building',
        'Lead Generation',
        'CRM Software',
        'Email Marketing',
        'Cold Calling',
        'Active Listening',
        'Time Management',
        'Research Skills',
        'Microsoft Office/Google Workspace',
        'LinkedIn',
        'Adaptability'
    ],
    '$35,000 - $50,000/year + Commission',
    'Entry Level',
    true,
    true,
    NOW() + INTERVAL '90 days'
);

-- Verify the insertion
SELECT 
    id,
    title,
    department,
    location,
    employment_type,
    experience_level,
    is_active,
    featured
FROM job_listings
WHERE is_active = true
ORDER BY created_at DESC;
