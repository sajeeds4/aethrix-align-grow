-- Complete Database Setup for Aethrix Job Management System
-- Run this entire script in your Supabase SQL Editor

-- Step 1: Fix RLS policies for contact_submissions table (if needed)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Drop existing policies and create comprehensive ones
DROP POLICY IF EXISTS "Allow public insert" ON contact_submissions;
DROP POLICY IF EXISTS "Allow public read" ON contact_submissions;
DROP POLICY IF EXISTS "Allow public update" ON contact_submissions;
DROP POLICY IF EXISTS "Enable insert for anon users" ON contact_submissions;
DROP POLICY IF EXISTS "Enable read for anon users" ON contact_submissions;
DROP POLICY IF EXISTS "Enable update for anon users" ON contact_submissions;
DROP POLICY IF EXISTS "Enable all operations for anon users" ON contact_submissions;

CREATE POLICY "Enable all operations for anon users" ON contact_submissions
    FOR ALL USING (true) WITH CHECK (true);

-- Step 2: Create job_listings table
CREATE TABLE IF NOT EXISTS job_listings (
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

-- Enable RLS for job_listings
ALTER TABLE job_listings ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (for the careers page)
CREATE POLICY "Enable read access for all users" ON job_listings
    FOR SELECT USING (is_active = true);

-- Create policies for admin operations (allow all operations for authenticated users)
CREATE POLICY "Enable all operations for authenticated users" ON job_listings
    FOR ALL USING (auth.role() = 'authenticated') WITH CHECK (auth.role() = 'authenticated');

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_job_listings_updated_at 
    BEFORE UPDATE ON job_listings 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Insert sample job listings
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
    featured
) VALUES 
(
    'Senior Cloud Architect',
    'Engineering',
    'Remote',
    'Full-time',
    'Lead cloud transformation initiatives for Fortune 500 clients using cutting-edge technologies.',
    'Bachelor''s degree in Computer Science or related field. 8+ years of experience in cloud architecture. Strong knowledge of AWS, Azure, and GCP platforms.',
    'Design and implement scalable cloud solutions. Lead technical teams. Collaborate with stakeholders to define cloud strategy. Ensure security and compliance standards.',
    ARRAY['AWS', 'Azure', 'Kubernetes', 'Docker', 'Terraform', 'Python'],
    '$120,000 - $180,000',
    'Senior',
    true
),
(
    'AI/ML Solutions Engineer',
    'Engineering',
    'San Francisco, CA',
    'Hybrid',
    'Develop and deploy AI solutions across various industries, working with cutting-edge machine learning technologies.',
    'Master''s degree in AI/ML, Computer Science, or related field. 5+ years of experience in machine learning. Experience with Python, TensorFlow, and PyTorch.',
    'Design and implement ML models. Optimize model performance. Collaborate with data scientists and engineers. Deploy models to production environments.',
    ARRAY['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'AWS', 'Docker'],
    '$100,000 - $160,000',
    'Mid-level',
    true
),
(
    'Enterprise Solutions Consultant',
    'Consulting',
    'New York, NY',
    'Full-time',
    'Drive digital transformation strategies for key accounts, focusing on enterprise software implementations.',
    'Bachelor''s degree in Business or Technology field. 6+ years of consulting experience. Strong knowledge of SAP, Salesforce, and enterprise systems.',
    'Lead client engagements. Develop transformation roadmaps. Manage stakeholder relationships. Ensure project delivery excellence.',
    ARRAY['SAP', 'Salesforce', 'Strategy', 'Project Management', 'Business Analysis'],
    '$90,000 - $140,000',
    'Senior',
    false
),
(
    'Frontend Developer',
    'Engineering',
    'Remote',
    'Full-time',
    'Build responsive and performant web applications using modern frontend technologies.',
    'Bachelor''s degree in Computer Science or related field. 3+ years of frontend development experience. Proficiency in React, TypeScript, and modern CSS.',
    'Develop user interfaces. Optimize application performance. Collaborate with designers and backend developers. Implement responsive designs.',
    ARRAY['React', 'TypeScript', 'CSS', 'JavaScript', 'HTML', 'Tailwind CSS'],
    '$70,000 - $110,000',
    'Mid-level',
    false
),
(
    'DevOps Engineer',
    'Engineering',
    'Austin, TX',
    'Hybrid',
    'Manage and optimize our cloud infrastructure and deployment pipelines.',
    'Bachelor''s degree in Computer Science or related field. 4+ years of DevOps experience. Strong knowledge of CI/CD, containerization, and cloud platforms.',
    'Maintain CI/CD pipelines. Monitor system performance. Implement security best practices. Automate infrastructure provisioning.',
    ARRAY['Docker', 'Kubernetes', 'AWS', 'Jenkins', 'Terraform', 'Linux'],
    '$85,000 - $130,000',
    'Senior',
    false
);

-- Verify the setup
SELECT 'contact_submissions policies:' as info;
SELECT schemaname, tablename, policyname, permissive, roles, cmd 
FROM pg_policies 
WHERE tablename = 'contact_submissions';

SELECT 'job_listings policies:' as info;
SELECT schemaname, tablename, policyname, permissive, roles, cmd 
FROM pg_policies 
WHERE tablename = 'job_listings';

SELECT 'Sample job listings:' as info;
SELECT id, title, department, location, employment_type, is_active, featured, created_at
FROM job_listings 
ORDER BY created_at DESC;

-- Success message
SELECT 'Database setup completed successfully! You can now use the job management system.' as success_message;
