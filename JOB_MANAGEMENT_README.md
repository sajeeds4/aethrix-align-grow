# Job Management Setup Instructions

## Overview
This guide will help you set up the job listings and applications system for Aethrix Systems.

## Step 1: Create Database Tables

Run the following SQL scripts in your Supabase SQL Editor in this order:

### 1. Create Job Listings Table
Run: `create-jobs-table.sql`

This creates the `job_listings` table to store job postings.

### 2. Create Job Applications Table  
Run: `create-job-applications-table.sql`

This creates the `job_applications` table to store candidate applications.

### 3. Setup Inside Sales Representative Job
Run: `setup-inside-sales-job.sql`

This script will:
- Clear all existing job listings
- Add the new Inside Sales Representative position (Entry Level)

## Step 2: Verify Setup

After running the scripts, you can verify everything is set up correctly:

```sql
-- Check job listings
SELECT id, title, department, location, employment_type, is_active 
FROM job_listings 
WHERE is_active = true;

-- Check applications (should be empty initially)
SELECT COUNT(*) as total_applications 
FROM job_applications;
```

## Step 3: Access Admin Panel

1. Go to your website: `http://localhost:8080/admin`
2. Login with your admin credentials
3. Navigate to:
   - **Job Management** - to view/edit job listings
   - **Job Applications** - to review candidate applications

## Features

### Job Management
- ✅ View all job listings
- ✅ Create new jobs
- ✅ Edit existing jobs
- ✅ Activate/Deactivate jobs
- ✅ Delete jobs
- ✅ Mark jobs as featured

### Application Management
- ✅ View all applications
- ✅ Filter by status (submitted, reviewing, interview, rejected, hired)
- ✅ Search by name, email, or position
- ✅ View full application details
- ✅ Update application status
- ✅ Add admin notes to applications
- ✅ Export applications to CSV
- ✅ Delete applications
- ✅ Statistics dashboard (total, new, reviewing, interview, hired)

### Application Status Flow
1. **Submitted** - Initial application received
2. **Reviewing** - Application being reviewed by team
3. **Interview** - Candidate moved to interview stage
4. **Rejected** - Application not moving forward
5. **Hired** - Candidate accepted the position

## Current Job Opening

### Inside Sales Representative
- **Department**: Sales & Business Development
- **Location**: Remote / Hybrid (New York)
- **Type**: Full-time
- **Experience**: Entry Level (Freshers Welcome)
- **Salary**: $35,000 - $50,000/year + Commission

This position is perfect for:
- Fresh graduates
- Career changers
- Those looking to enter tech sales
- Self-motivated individuals eager to learn

## Customization

To add more jobs, you can either:

1. **Use the Admin Panel** (Recommended)
   - Go to Admin > Job Management
   - Click "Add New Job"
   - Fill in the details
   - Set as active and/or featured

2. **Use SQL**
   - Copy the INSERT statement from `setup-inside-sales-job.sql`
   - Modify the values
   - Run in Supabase SQL Editor

## Troubleshooting

### Jobs not showing on Careers page?
- Check if job is marked as `is_active = true`
- Verify the application deadline hasn't passed
- Check browser console for errors

### Can't access admin panel?
- Make sure you're authenticated
- Check RLS policies are properly set up
- Verify your admin credentials

### Applications not saving?
- Check RLS policies on `job_applications` table
- Verify all required fields are filled
- Check browser console for errors

## Support

For questions or issues:
- Email: info@aethrixsystems.com

