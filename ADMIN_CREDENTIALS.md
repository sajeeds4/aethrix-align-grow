# 🔐 Admin Credentials

## Login Information

**Email:** `admin@aethrixsystems.com`  
**Password:** `Osman@123`

---

## How to Access

### Method 1: Keyboard Shortcut
Press: `Ctrl + Alt + Shift + A` anywhere on the website

### Method 2: Direct URL
Visit: `https://your-domain.com/admin`

---

## Setup Required

Before you can login, you need to:

1. **Run SQL Script:**
   - Go to: https://supabase.com/dashboard/project/faoiscbbfjtvpywmddpn
   - Click: SQL Editor
   - Run: `fix-job-system-rls-only.sql`

2. **Create User in Supabase:**
   - Same dashboard → Authentication → Users
   - Click: Add User
   - Email: admin@aethrixsystems.com
   - Password: Osman@123
   - Click: Create User

---

## What You Can Do

Once logged in, you can:
- ✅ View all job listings
- ✅ Create new jobs
- ✅ Edit existing jobs
- ✅ Delete jobs
- ✅ View all applications
- ✅ Update application status
- ✅ Rate candidates
- ✅ Add admin notes

---

## Security Notes

- Session lasts 30 minutes
- Password is encrypted in Supabase
- RLS policies protect data
- Only authenticated users can manage jobs

---

**Keep this file secure and don't commit to public repositories!**
