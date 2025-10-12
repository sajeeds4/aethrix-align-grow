# 🔍 ADMIN PANEL NOT SHOWING APPLICATIONS - TROUBLESHOOTING GUIDE

## ✅ Good News:
The application WAS saved to the database! Test shows:
```
1. sajeed
   Email: sajeed@gmail.com
   Job: Jr Inside Sales Representative
   Status: pending
   Submitted: 10/12/2025, 1:51:07 PM
```

---

## 🔍 Why Admin Panel Might Not Show Applications:

### **Issue 1: Not Logged In** ⭐ Most Likely
The admin panel might not be showing applications because you're not authenticated.

**Solution:**
1. Go to: `http://192.168.0.110:8080/admin`
2. If you see a login screen, login with:
   - Email: `admin@aethrixsystems.com`
   - Password: `Osman@123`
3. After login, navigate to Applications tab

---

### **Issue 2: Wrong Tab Selected**
You might be on a different tab.

**Solution:**
1. In admin panel, look for tabs at the top
2. Click on: **"Applications"** or **"Application Management"** tab
3. Should see list of applications

---

### **Issue 3: Status Filter Active**
A filter might be hiding the application.

**Solution:**
1. Look for a dropdown that says "Filter by status"
2. Change it to: **"All"** or **"New"**
3. The "sajeed" application has status: `pending` (might show as "New")

---

### **Issue 4: Search Box Has Text**
Something in the search box might be filtering it out.

**Solution:**
1. Look for search box at top
2. Clear any text in it
3. Applications should appear

---

### **Issue 5: Page Needs Refresh**
The page might be cached.

**Solution:**
1. Press: **Ctrl + Shift + R** (hard refresh)
2. Or close browser and re-open admin panel
3. Login again if needed

---

## 🧪 Quick Test:

### **Verify You Can See Applications:**

1. **Open browser console** (F12)
2. **Run this in console:**
   ```javascript
   // Check if you're logged in
   const session = await window.supabase.auth.getSession();
   console.log('Logged in:', session.data.session ? 'YES' : 'NO');
   
   // Try to fetch applications
   const { data, error } = await window.supabase
     .from('job_applications')
     .select('id, full_name, email, status');
   
   console.log('Applications:', data);
   console.log('Error:', error);
   ```

3. **Check the output:**
   - If `Logged in: NO` → You need to login
   - If `Applications: []` → RLS issue
   - If `Applications: [...]` → UI refresh issue
   - If `Error: ...` → Permission issue

---

## 🔧 If Still Not Working:

### **Option A: Check RLS Policies in Supabase**

1. Go to: `https://supabase.com/dashboard/project/faoiscbbfjtvpywmddpn`
2. Click: **Database → Policies**
3. Find: `job_applications` table
4. Check: Should have policy "Anyone can view applications"
5. Status: Should be **Enabled**

### **Option B: Run This SQL to Check Permissions**

```sql
-- Check if policies exist
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual
FROM pg_policies
WHERE tablename = 'job_applications';
```

Expected output:
- `Anyone can submit applications` (INSERT)
- `Anyone can view applications` (SELECT)
- `Authenticated users can update applications` (UPDATE)
- `Authenticated users can delete applications` (DELETE)

---

## 📱 What To Check Right Now:

1. ✅ **Are you logged in to admin panel?**
   - Go to: `http://192.168.0.110:8080/admin`
   - Should NOT see login screen
   - Should see admin dashboard

2. ✅ **Are you on the Applications tab?**
   - Look for tabs: Dashboard, Jobs, Applications, etc.
   - Click: **Applications**

3. ✅ **Is any filter active?**
   - Status filter: Set to **"All"**
   - Search box: Should be **empty**

4. ✅ **Try hard refresh:**
   - Press: **Ctrl + Shift + R**

---

## 🎯 Expected View in Admin Panel:

You should see a table like this:

| Name | Email | Position | Status | Applied |
|------|-------|----------|--------|---------|
| sajeed | sajeed@gmail.com | Jr Inside Sales Representative | New/Pending | Just now |

With buttons: **View Details**, **Download Resume**, etc.

---

## 💡 Quick Fix Commands:

If applications are not showing, try refreshing the component:

1. **In browser console (F12):**
   ```javascript
   // Force refresh the applications list
   location.reload();
   ```

2. **Or open in incognito mode:**
   - Press: Ctrl + Shift + N (Chrome)
   - Go to: `http://192.168.0.110:8080/admin`
   - Login and check Applications

---

**Start with logging in and checking the Applications tab! That should fix it! 🚀**
