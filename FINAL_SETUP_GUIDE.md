# 🚀 COMPLETE SETUP GUIDE - Start Here!

## You're Almost Ready! Just 3 SQL Scripts to Run

---

## ⚡ Step 1: Setup Database Tables (2 minutes)

### Script: `fix-job-system-rls-only.sql`

```bash
# Go to Supabase Dashboard
https://supabase.com/dashboard/project/faoiscbbfjtvpywmddpn

# Click: SQL Editor
# Click: New Query
# Copy ALL 204 lines from: fix-job-system-rls-only.sql
# Paste into editor
# Click: RUN
```

**What it does:**
- Creates `job_listings` table
- Creates `job_applications` table  
- Sets up RLS policies (public can view, admins can manage)

**Expected output:**
```
✅ RLS POLICIES FIXED!
Public can now view active jobs
Authenticated users can manage all jobs
Anyone can submit applications
```

---

## 📁 Step 2: Setup Resume Storage (1 minute)

### Script: `setup-resume-storage.sql`

```bash
# Same Supabase Dashboard → SQL Editor
# New Query
# Copy all from: setup-resume-storage.sql
# Paste and RUN
```

**What it does:**
- Creates `job-applications` storage bucket
- Sets 5MB file size limit
- Allows PDF, DOC, DOCX only
- Creates upload/download policies

**Expected output:**
```
✅ Storage bucket created/updated
✅ Storage policies created
✅ STORAGE SETUP COMPLETE!
✅ Resume upload is now ready to use!
```

---

## 💼 Step 3: Add Jr Inside Sales Job (30 seconds)

### Script: `reset-and-add-sales-job.sql`

```bash
# Same Supabase Dashboard → SQL Editor
# New Query
# Copy all from: reset-and-add-sales-job.sql
# Paste and RUN
```

**What it does:**
- Deletes any existing job postings
- Adds Jr Inside Sales Representative position
- Sets job as active and featured
- 45-day application deadline

**Expected output:**
```
✅ All existing jobs deleted
✅ Jr Inside Sales Representative job created!
✅ COMPLETE!
```

---

## 👤 Step 4: Create Admin User (1 minute)

```bash
# Same Supabase Dashboard
# Click: Authentication → Users
# Click: Add User

Email: admin@aethrixsystems.com
Password: Osman@123

# Click: Create User
```

---

## ✅ Step 5: Test Everything!

### Test 1: View Job on Careers Page
```
1. Visit: http://localhost:5173/careers
2. Should see "Jr Inside Sales Representative" job
3. Click "Apply Now"
```

### Test 2: Apply with Resume Upload
```
1. Fill in personal information
2. Click "Choose File" under Resume
3. Select a PDF file (any PDF for testing)
4. Wait for: "Resume uploaded successfully ✅"
5. Complete rest of application
6. Click "Submit Application"
7. Should see: "Application Submitted!"
```

### Test 3: Admin Dashboard
```
1. Press: Ctrl + Alt + Shift + A
2. Login: admin@aethrixsystems.com / Osman@123
3. Should see admin dashboard
4. Click "View Applications" or "Job Applications"
5. See your test application
6. Click on it to view details
7. Should see "Download Resume" link
8. Click to download the PDF you uploaded
```

---

## 🎯 Key Changes Made

### ✅ Removed:
- ❌ Work Authorization field (no longer required)

### ✅ Added:
- ✅ Resume Upload (PDF/Word, max 5MB)
- ✅ File validation
- ✅ Upload progress indicator
- ✅ Download resume link in admin panel

---

## 📝 Script Execution Order

**MUST run in this order:**
1. ✅ `fix-job-system-rls-only.sql` (creates tables)
2. ✅ `setup-resume-storage.sql` (enables uploads)
3. ✅ `reset-and-add-sales-job.sql` (adds job)
4. ✅ Create admin user (manual step)

---

## 🔑 Admin Credentials

**Email:** admin@aethrixsystems.com  
**Password:** Osman@123  
**Access:** Press `Ctrl + Alt + Shift + A`

---

**Ready to start! Run the 3 SQL scripts now! 🚀**
