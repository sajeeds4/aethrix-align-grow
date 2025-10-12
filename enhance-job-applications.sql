-- Enhance Job Applications Table
-- Add rating and other fields for enhanced functionality

-- Add rating column if it doesn't exist
ALTER TABLE job_applications 
ADD COLUMN IF NOT EXISTS rating INTEGER DEFAULT 0 CHECK (rating >= 0 AND rating <= 5);

-- Add tags/labels column
ALTER TABLE job_applications 
ADD COLUMN IF NOT EXISTS tags TEXT[] DEFAULT '{}';

-- Add email history tracking
ALTER TABLE job_applications 
ADD COLUMN IF NOT EXISTS email_history JSONB DEFAULT '[]';

-- Add resume URL field
ALTER TABLE job_applications 
ADD COLUMN IF NOT EXISTS resume_url TEXT;

-- Add last contacted timestamp
ALTER TABLE job_applications 
ADD COLUMN IF NOT EXISTS last_contacted_at TIMESTAMPTZ;

-- Add index for better performance
CREATE INDEX IF NOT EXISTS idx_applications_rating ON job_applications(rating);
CREATE INDEX IF NOT EXISTS idx_applications_status ON job_applications(status);
CREATE INDEX IF NOT EXISTS idx_applications_date ON job_applications(application_date DESC);

-- Success message
SELECT 
    '✅ Job Applications Enhanced!' as status,
    'Rating, tags, and email tracking fields added' as message;
