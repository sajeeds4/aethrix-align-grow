# 🆕 Create New Supabase Project

Your old project (`faoiscbbfjtvpywmddpn`) is not reachable. Let's create a new one.

## Steps:

### 1. Create New Project
```
1. Go to: https://supabase.com/dashboard
2. Click "New Project"
3. Fill in:
   - Name: aethrix-align-grow
   - Database Password: (create strong password - SAVE THIS!)
   - Region: Select closest to you
4. Click "Create new project"
5. Wait 2-3 minutes for provisioning
```

### 2. Get New Credentials
```
1. In your new project dashboard
2. Click "Settings" (gear icon) → "API"
3. Copy these values:
   - Project URL (looks like: https://XXXXX.supabase.co)
   - anon public key (starts with: eyJhbGci...)
```

### 3. Update Your Code
```bash
cd /home/saj/Videos/aethrix-align-grow
nano src/integrations/supabase/client.ts
```

**Replace lines 5-6 with your new values:**
```typescript
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || "https://YOUR-NEW-PROJECT.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || "YOUR-NEW-ANON-KEY";
```

### 4. Run Database Setup
```
1. Go to your new project → SQL Editor
2. Copy COMPLETE-DATABASE-FIX.sql
3. Paste and click RUN
4. Should see: "🎉 DATABASE SETUP COMPLETE!"
```

### 5. Create Admin User
```
1. New project → Authentication → Users
2. Click "Add User"
3. Email: admin@example.com
4. Password: (create strong password)
5. Click "Create User"
```

### 6. Restart Dev Server
```bash
# Stop current server (Ctrl+C)
npm run dev
```

### 7. Test Again
```
1. Open test-db-access.html
2. All tests should pass now!
```

---

## Alternative: Use Environment Variable

Instead of hardcoding, create `.env` file:

```bash
cd /home/saj/Videos/aethrix-align-grow
nano .env
```

**Add:**
```
VITE_SUPABASE_URL=https://YOUR-NEW-PROJECT.supabase.co
VITE_SUPABASE_ANON_KEY=YOUR-NEW-ANON-KEY
```

**Save and restart dev server:**
```bash
npm run dev
```
