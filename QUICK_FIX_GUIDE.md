# 🔧 Quick Fix for "Row-Level Security Policy" Error

## The Problem
Your contact form is getting a "row-level security policy" error because Supabase's Row Level Security (RLS) is blocking anonymous users from inserting data.

## ⚡ Quick Solution

### Option 1: Disable RLS (Easiest)
1. Go to your Supabase Dashboard: https://supabase.com/dashboard
2. Open your project: `faoiscbbfjtvpywmddpn`
3. Go to SQL Editor
4. Run this command:
```sql
ALTER TABLE contact_submissions DISABLE ROW LEVEL SECURITY;
```

### Option 2: Fix RLS Policies (Recommended)
1. Go to your Supabase Dashboard → SQL Editor
2. Copy and paste the entire content from `fix-rls-policies.sql`
3. Run the script

## 🎯 What This Does
- **Option 1**: Completely disables security checks (allows all operations)
- **Option 2**: Creates proper security policies that allow anonymous users to submit forms

## ✅ Test After Fix
1. Run the SQL script in Supabase
2. Go to http://localhost:8080/consultation  
3. Fill out the contact form
4. Submit → Should work without errors!
5. Press `Ctrl+Alt+Shift+A` → Login with `Osman@123` → View submissions

---

**The contact form will work immediately after running either SQL script in Supabase!**
