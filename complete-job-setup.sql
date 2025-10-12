-- Complete Job Management Setup Script
-- Run this entire script in Supabase SQL Editor to set up everything at once

-- ============================================
-- STEP 1: Create job_listings table
-- ============================================

-- Drop tables if they exist (clean slate)
DROP TABLE IF EXISTS job_applications CASCADE;
DROP TABLE IF EXISTS job_listings CASCADE;

-- Create job_listings table
CREATE TABLE job_listings (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    department VARCHAR(100),
    location VARCHAR(100),
    employment_type VARCHAR(50), -- Full-time, Part-time, Contract, Remote, Hybrid, etc.
    description TEXT,
    requirements TEXT,
    responsibilities TEXT,
    skills TEXT[], -- Array of required skills
    salary_range VARCHAR(100),
    experience_level VARCHAR(50), -- Entry, Mid-level, Senior, Executive
    is_active BOOLEAN DEFAULT true,
    featured BOOLEAN DEFAULT false,
    application_deadline TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE job_listings ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (for the careers page)
CREATE POLICY "Enable read access for all users" ON job_listings
    FOR SELECT USING (is_active = true);

-- Create policies for admin operations
CREATE POLICY "Enable all operations for authenticated users" ON job_listings
    FOR ALL USING (auth.role() = 'authenticated') WITH CHECK (auth.role() = 'authenticated');

-- Create updated_at trigger function if it doesn't exist
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create updated_at trigger
CREATE TRIGGER update_job_listings_updated_at 
    BEFORE UPDATE ON job_listings 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- STEP 2: Create job_applications table
-- ============================================

CREATE TABLE job_applications (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    job_listing_id UUID REFERENCES job_listings(id) ON DELETE CASCADE,
    
    -- Personal Information
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    location VARCHAR(200),
    linkedin_url VARCHAR(500),
    portfolio_url VARCHAR(500),
    github_url VARCHAR(500),
    
    -- Professional Information
    current_position VARCHAR(200),
    current_company VARCHAR(200),
    years_of_experience INTEGER,
    expected_salary VARCHAR(100),
    availability VARCHAR(100), -- Immediate, 2 weeks, 1 month, etc.
    willing_to_relocate BOOLEAN DEFAULT false,
    work_authorization VARCHAR(100), -- US Citizen, Green Card, H1B, etc.
    
    -- Skills and Experience
    technical_skills TEXT[], -- Array of technical skills
    soft_skills TEXT[], -- Array of soft skills
    programming_languages TEXT[],
    frameworks_tools TEXT[],
    certifications TEXT[],
    languages_spoken TEXT[],
    
    -- Experience Details
    work_experience TEXT, -- Detailed work experience
    education_background TEXT, -- Education details
    projects TEXT, -- Project descriptions with links
    achievements TEXT, -- Notable achievements
    
    -- Application Specific
    cover_letter TEXT,
    why_interested TEXT, -- Why interested in this position
    additional_info TEXT, -- Any additional information
    
    -- Application Status
    status VARCHAR(50) DEFAULT 'submitted', -- submitted, reviewing, interview, rejected, hired
    application_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    last_updated TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Admin Notes
    admin_notes TEXT,
    interview_scheduled TIMESTAMP WITH TIME ZONE,
    
    CONSTRAINT unique_application_per_job UNIQUE(job_listing_id, email)
);

-- Enable RLS
ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit applications (insert)
CREATE POLICY "Enable insert for all users" ON job_applications
    FOR INSERT WITH CHECK (true);

-- Allow applicants to view their own applications
CREATE POLICY "Enable read for own applications" ON job_applications
    FOR SELECT USING (auth.email() = email);

-- Allow authenticated admin users to view and manage all applications
CREATE POLICY "Enable all operations for authenticated users" ON job_applications
    FOR ALL USING (auth.role() = 'authenticated') WITH CHECK (auth.role() = 'authenticated');

-- Create updated trigger
CREATE TRIGGER update_job_applications_updated_at 
    BEFORE UPDATE ON job_applications 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Create indexes for better performance
CREATE INDEX idx_job_applications_job_listing_id ON job_applications(job_listing_id);
CREATE INDEX idx_job_applications_email ON job_applications(email);
CREATE INDEX idx_job_applications_status ON job_applications(status);
CREATE INDEX idx_job_applications_application_date ON job_applications(application_date DESC);

-- ============================================
-- STEP 3: Insert Inside Sales Representative position
-- ============================================

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

-- ============================================
-- STEP 4: Verify the setup
-- ============================================

-- Show the created job listing
SELECT 
    id,
    title,
    department,
    location,
    employment_type,
    experience_level,
    salary_range,
    is_active,
    featured,
    application_deadline,
    created_at
FROM job_listings
WHERE is_active = true
ORDER BY created_at DESC;

-- Show table statistics
SELECT 
    'job_listings' as table_name,
    COUNT(*) as total_records
FROM job_listings
UNION ALL
SELECT 
    'job_applications' as table_name,
    COUNT(*) as total_records
FROM job_applications;

-- Success message
SELECT 
    '✅ Job Management System Setup Complete!' as status,
    'Inside Sales Representative position added successfully' as message,
    'You can now access Admin Panel → Job Management to verify' as next_step;
