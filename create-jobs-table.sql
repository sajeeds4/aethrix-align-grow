-- Create job_listings table for admin-controlled career page
-- Run this in your Supabase SQL Editor

-- Create job_listings table
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

-- Enable RLS
ALTER TABLE job_listings ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (for the careers page)
CREATE POLICY "Enable read access for all users" ON job_listings
    FOR SELECT USING (is_active = true);

-- Create policies for admin operations
CREATE POLICY "Enable all operations for authenticated users" ON job_listings
    FOR ALL USING (auth.role() = 'authenticated') WITH CHECK (auth.role() = 'authenticated');

-- Alternative: if you want to restrict to specific admin users, use this instead
-- CREATE POLICY "Enable all operations for admin users" ON job_listings
--     FOR ALL USING (auth.email() = 'admin@aethrixsystems.com') WITH CHECK (auth.email() = 'admin@aethrixsystems.com');

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
);

-- Verify the data
SELECT * FROM job_listings WHERE is_active = true ORDER BY created_at DESC;
