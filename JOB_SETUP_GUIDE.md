# Quick Setup Guide - Job Management System

## ⚡ Quick Start (One Command)

Run this **single SQL script** in your Supabase SQL Editor:

📄 **`complete-job-setup.sql`**

This script will:
1. ✅ Create the `job_listings` table
2. ✅ Create the `job_applications` table  
3. ✅ Set up all required policies and indexes
4. ✅ Add the Inside Sales Representative job
5. ✅ Verify everything is working

## 📋 Step-by-Step Instructions

### 1. Open Supabase SQL Editor
- Go to your Supabase project: https://supabase.com/dashboard
- Click on your project
- Navigate to **SQL Editor** in the left sidebar

### 2. Run the Setup Script
- Click **New Query**
- Copy the entire contents of `complete-job-setup.sql`
- Paste into the SQL editor
- Click **Run** (or press Ctrl/Cmd + Enter)

### 3. Verify Success
After running, you should see output showing:
- The Inside Sales Representative job details
- Table statistics (1 job listing, 0 applications)
- Success message

### 4. Check Your Admin Panel
- Go to your site: http://localhost:8080/admin
- Login with your credentials
- Click **Job Management** in the sidebar
- You should see the Inside Sales Representative position

### 5. Test the Careers Page
- Go to: http://localhost:8080/careers
- You should see the Inside Sales Representative job listing
- Click "Apply Now" to see the application form

## 🎯 What You Get

### Job Listing Features
- Full CRUD operations (Create, Read, Update, Delete)
- Active/Inactive status toggle
- Featured job marking
- Application deadline tracking
- Department and location management
- Skills array support

### Application Features
- Comprehensive candidate profiles
- Status workflow (Submitted → Reviewing → Interview → Hired/Rejected)
- Admin notes and tracking
- Search and filter
- CSV export
- Email/phone quick actions

## 📊 Current Job Opening

**Inside Sales Representative**
- Department: Sales & Business Development
- Location: Remote / Hybrid (New York)
- Type: Full-time
- Level: Entry (Freshers Welcome!)
- Salary: $35,000-$50,000 + Commission
- Deadline: 90 days from setup

## 🔧 Troubleshooting

### Error: "relation already exists"
The tables are already created. Use this instead:
```sql
-- Just clear and re-add the job
DELETE FROM job_listings;
-- Then run just the INSERT statement from complete-job-setup.sql
```

### Error: "relation does not exist"
Run the complete `complete-job-setup.sql` script - it creates everything.

### Can't see job on careers page?
Check:
- Job is marked as `is_active = true`
- Application deadline hasn't passed
- Browser cache (try hard refresh: Ctrl+Shift+R)

### Applications not saving?
- Verify RLS policies are set up (script does this automatically)
- Check browser console for errors
- Ensure all required fields are filled

## 🆘 Need Help?

Contact: info@aethrixsystems.com

## ✨ Next Steps

1. **Share the job posting** on LinkedIn, job boards, etc.
2. **Monitor applications** in the admin panel
3. **Add more jobs** as needed via Admin Panel
4. **Review candidates** and update their status
5. **Export reports** using the CSV export feature

---

**That's it!** Your job management system is ready to use. 🚀
