# 🔄 Job Salary Not Updating - Troubleshooting Guide

## Problem:
You edited the salary in Admin Panel but it doesn't show on the Careers page.

---

## ✅ Solutions (Try in order):

### **Solution 1: Hard Refresh Browser (Most Common)**

#### Clear Browser Cache:
```
1. Press: Ctrl + Shift + Delete
2. Select: "Cached images and files"
3. Click: Clear data
```

#### Hard Refresh:
```
Press: Ctrl + Shift + F5
OR
Press: Ctrl + F5
```

---

### **Solution 2: Verify Database Update**

#### Check in Supabase Dashboard:
```
1. Open: https://supabase.com/dashboard/project/faoiscbbfjtvpywmddpn
2. Click: Table Editor
3. Select: job_listings table
4. Find your job
5. Check: salary_range column
6. Verify: Is the new salary there?
```

#### If salary is NOT updated in database:
- The admin panel update might have failed silently
- Check browser console for errors (F12)
- Try updating again in admin panel

#### If salary IS updated in database:
- It's a browser cache issue
- Hard refresh (Ctrl + Shift + F5)

---

### **Solution 3: Check Job is Active**

The Careers page only shows ACTIVE jobs!

#### In Admin Panel:
```
1. Go to: Job Listings
2. Find your job
3. Check: "Active" toggle is ON (green)
4. If OFF: Turn it ON
5. Refresh careers page
```

---

### **Solution 4: Disable Service Worker (If exists)**

#### In Browser Console (F12):
```javascript
navigator.serviceWorker.getRegistrations().then(function(registrations) {
  for(let registration of registrations) {
    registration.unregister();
  }
  location.reload();
});
```

---

### **Solution 5: Check for Errors**

#### In Admin Panel:
```
1. Open browser console (F12)
2. Go to: Admin → Job Listings
3. Edit salary
4. Click: Save
5. Check console for errors
```

#### Common Errors:
- ❌ "Row level security" - RLS policy issue
- ❌ "Column not found" - Database schema mismatch
- ❌ "Network error" - Connection issue

---

## 🧪 Test Script:

Run this to check actual database values:
```bash
node check-job-salary.js
```

This will show you:
- All jobs in database
- Current salary values
- Last updated times
- Active/inactive status

---

## 🔍 Most Likely Causes:

### 1. **Browser Cache (90% of cases)**
- **Solution**: Hard refresh (Ctrl + Shift + F5)

### 2. **Job is Inactive**
- **Solution**: Toggle "Active" to ON in admin

### 3. **Update Failed Silently**
- **Solution**: Check browser console, try updating again

### 4. **Database Connection Issue**
- **Solution**: Check Supabase dashboard directly

---

## 📝 Step-by-Step Resolution:

```
1. Open Admin Panel
2. Go to Job Listings
3. Find your job
4. Verify "Active" toggle is ON
5. Click Edit
6. Update salary
7. Click Save
8. Wait for success message
9. Open new incognito window
10. Go to careers page
11. Check if salary updated
```

If salary shows in incognito but NOT in regular browser:
→ **It's definitely browser cache!**
→ **Solution**: Clear cache + hard refresh

---

## 💡 Pro Tips:

### For Development:
1. **Always use Incognito mode** for testing
2. **Keep browser DevTools open** (F12) to see network requests
3. **Check "Disable cache" in DevTools Network tab**

### For Production:
1. Add cache-busting headers
2. Add version numbers to API calls
3. Show "last updated" timestamp on careers page

---

## 🚀 Quick Fix Command:

```bash
# Open new incognito window and test
# If it works there, it's cache!
# Solution:
1. Close all browser tabs
2. Ctrl + Shift + Delete → Clear cache
3. Re-open browser
4. Test again
```

---

**Most likely solution: Just do Ctrl + Shift + F5 on the careers page! 🔄**
