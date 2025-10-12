# 🚀 QUICK START - Final Steps

## You're Almost Done! Just 2 Steps Remaining:

---

## ⚡ Step 1: Run SQL Script (2 minutes)

1. Open: https://supabase.com/dashboard/project/faoiscbbfjtvpywmddpn
2. Click: **SQL Editor** (left sidebar)
3. Click: **New Query**
4. Open file: `fix-job-system-rls-only.sql`
5. Copy ALL 204 lines
6. Paste into SQL Editor
7. Click: **RUN**

**Expected Output:**
```
✅ RLS POLICIES FIXED!
```

---

## 👤 Step 2: Create Admin User (1 minute)

1. Same Supabase dashboard
2. Click: **Authentication** → **Users**
3. Click: **Add User**
4. Enter:
   ```
   Email: admin@aethrixsystems.com
   Password: Osman@123
   ```
5. Click: **Create User**

---

## ✅ Done! Now Test It:

### Test 1: Visit Careers Page
```
http://localhost:5173/careers
```
- Should load without errors
- May be empty (no jobs yet)

### Test 2: Access Admin Panel
```
Press: Ctrl + Alt + Shift + A
Login: admin@aethrixsystems.com / Osman@123
```
- Should see admin dashboard
- Try creating a test job

### Test 3: See Job on Careers Page
```
Go back to: /careers
```
- Your test job should appear!

---

## 🎉 That's It!

You now have:
- ✅ 21 service pages
- ✅ Contact form
- ✅ Job listings
- ✅ Admin panel
- ✅ Application system

**Start posting real jobs! 🚀**

---

## 📚 Need Help?

- See: `SETUP_COMPLETE.md` for full documentation
- See: `ADMIN_CREDENTIALS.md` for login details
- Run: `test-db-access.html` to test database
- Check: Browser console (F12) for errors

---

**Questions? Check the troubleshooting section in SETUP_COMPLETE.md**
