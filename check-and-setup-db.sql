-- First check if table exists and what columns it has
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'contact_submissions' 
AND table_schema = 'public';

-- If table doesn't exist or needs recreation, run this:
-- Create contact_submissions table (only if it doesn't exist)
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  company VARCHAR(255),
  phone VARCHAR(50),
  industry VARCHAR(100),
  service VARCHAR(100),
  budget VARCHAR(50),
  timeline VARCHAR(50),
  message TEXT,
  status VARCHAR(20) DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create indexes (only if they don't exist)
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public insert" ON contact_submissions;
DROP POLICY IF EXISTS "Allow public read" ON contact_submissions;
DROP POLICY IF EXISTS "Allow public update" ON contact_submissions;

-- Create policies for public access
CREATE POLICY "Allow public insert" ON contact_submissions FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public read" ON contact_submissions FOR SELECT USING (true);
CREATE POLICY "Allow public update" ON contact_submissions FOR UPDATE USING (true);
