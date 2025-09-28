-- Create job applications table
-- Run this in your Supabase SQL Editor after the job_listings table

CREATE TABLE IF NOT EXISTS job_applications (
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

-- Verify the table
SELECT 'job_applications table created successfully!' as message;
