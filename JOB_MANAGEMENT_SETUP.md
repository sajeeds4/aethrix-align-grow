# Job Management Setup Guide

## Database Setup

To enable the job management functionality, you need to run the SQL commands in your Supabase database:

### Step 1: Create the job_listings table
1. Go to your Supabase dashboard
2. Navigate to **SQL Editor**
3. Run the contents of `create-jobs-table.sql`

### Step 2: Verify the setup
After running the SQL script, you should have:
- ✅ `job_listings` table created
- ✅ Row Level Security (RLS) enabled
- ✅ Proper policies for public read and admin write access
- ✅ Sample job listings inserted

### Step 3: Access the job management system
1. **Public Careers Page**: Visit `/careers` to see the job listings
2. **Admin Panel**: Go to `/admin` and navigate to "Job Management" to manage job postings

## Features Available

### Public Careers Page (`/careers`)
- **Job Listings Display**: Shows all active job postings
- **Search & Filter**: Filter by department, location, experience level
- **Detailed Job Information**: Expandable details for each position
- **Featured Jobs**: Highlighted important positions
- **Company Culture**: Benefits and company information
- **Responsive Design**: Works on all device sizes

### Admin Job Management (`/admin` → Job Management)
- **Full CRUD Operations**: Create, read, update, delete job listings
- **Status Management**: Activate/deactivate job postings
- **Featured Jobs**: Mark jobs as featured for highlighting
- **Bulk Operations**: Manage multiple jobs at once
- **Real-time Updates**: Changes reflect immediately on the careers page
- **Search & Filter**: Admin search and filtering capabilities
- **Statistics Dashboard**: View job posting metrics

## Job Listing Fields

Each job listing includes:
- **Basic Information**: Title, department, location, employment type
- **Job Details**: Description, responsibilities, requirements
- **Skills**: Array of required technical skills
- **Compensation**: Salary range information
- **Experience Level**: Entry, Mid-level, Senior, Executive
- **Status Controls**: Active/inactive, featured flags
- **Deadline**: Optional application deadline
- **Timestamps**: Created and updated dates

## Admin Controls

From the admin panel, you can:
1. **Create New Jobs**: Full form with all job details
2. **Edit Existing Jobs**: Update any job information
3. **Toggle Status**: Quickly activate/deactivate jobs
4. **Feature Jobs**: Highlight important positions
5. **Delete Jobs**: Remove job postings (with confirmation)
6. **View Statistics**: Track active, featured, and total job counts

## Integration Notes

The job management system is fully integrated with:
- ✅ **Main Navigation**: Careers link added to header
- ✅ **Admin Dashboard**: Job management section in SAP-style admin panel
- ✅ **Supabase Database**: Proper TypeScript types and RLS policies
- ✅ **Toast Notifications**: Success/error feedback for admin actions
- ✅ **Responsive Design**: Mobile-friendly interface

## Career Section Removal

The career opportunities section has been **completely removed** from the About page and moved to the dedicated Careers page with full admin control.

---

**Next Steps:**
1. Run the SQL script in `create-jobs-table.sql`
2. Visit `/careers` to see the public job listings
3. Access `/admin` and navigate to "Job Management" for admin controls
