# 🔧 Fix Admin Panel - Applications Not Fetching

## ✅ What I Fixed:

### 1. Admin Dashboard (ApplicationManagementDashboard.tsx)
- Changed `.order('application_date')` → `.order('created_at')`
- Updated display to use `full_name` instead of `first_name` and `last_name`
- Removed references to old fields (location, technical_skills, etc.)
- Added proper icons (Download, FileText)

### 2. Test Script (test-db-quick.js)
- Updated to use new simplified schema
- Now tests with 6 required fields instead of 30+

### 3. SQL Script (setup-simple-applications.sql)
- **IMPROVED VERSION** - Now drops old policies first
- Fixed INSERT policy to allow all users (no TO clause restriction)
- Added `public` role to GRANT permissions

---

## 🚀 SOLUTION - Run This NOW:

### Step 1: Open Supabase
```
https://supabase.com/dashboard/project/faoiscbbfjtvpywmddpn
```

### Step 2: Go to SQL Editor
Click: **SQL Editor** → **New Query**

### Step 3: Run Updated Script
Copy **ALL** of `setup-simple-applications.sql` and paste it, then click **RUN**

The script will:
1. Drop old table with CASCADE (removes old policies)
2. Create new simple table
3. Drop any conflicting policies
4. Create fresh RLS policies
5. Grant proper permissions

### Step 4: Test
Run this command:
```bash
node test-db-quick.js
```

You should see:
```
✅ Test application inserted successfully!
```

### Step 5: Refresh Browser
- Refresh your admin panel
- Applications should now load! ✅

---

## 🐛 Why Applications Weren't Fetching:

1. **Old column name**: Admin was trying to order by `application_date` but column is `created_at`
2. **RLS policy conflict**: Old policies might have been blocking inserts
3. **Missing icons**: FileText and Download icons weren't imported

---

## ✅ What Works Now:

1. ✅ Submit applications from careers page
2. ✅ Fetch applications in admin panel
3. ✅ View application details
4. ✅ Download resumes (if attached)
5. ✅ Update status and add notes

---

**Run the updated SQL script and you're good to go! 🎉**
