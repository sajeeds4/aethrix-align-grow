# Admin Dashboard Integration

## Overview
The admin dashboard allows you to manage contact form submissions with a secure, keyboard shortcut-activated interface.

## Access Method
- **Keyboard Shortcut**: `Ctrl + Alt + Shift + A`
- **Password**: `Osman@123`
- **Session Duration**: 30 minutes (automatically logs out after inactivity)

## Features
- ✅ Secure password protection
- ✅ Session management with auto-logout
- ✅ Real-time submission tracking
- ✅ Status management (New → Contacted → In Progress → Completed)
- ✅ Beautiful modal interface
- ✅ Works on any page of the website

## Database Setup
1. Go to your Supabase dashboard: https://supabase.com/dashboard
2. Navigate to SQL Editor
3. Run the migration script from `supabase/migrations/001_create_contact_submissions.sql`

Or run: `./setup-database.sh` to see the SQL commands.

## Usage
1. Press `Ctrl + Alt + Shift + A` on any page
2. Enter password: `Osman@123`
3. View and manage contact submissions
4. Update submission status as needed
5. Use the logout button or press the keyboard shortcut again to exit

## Environment Variables
Make sure your `.env.local` file contains:
```env
VITE_SUPABASE_URL=https://faoiscbbfjtvpywmddpn.supabase.co
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_ADMIN_PASSWORD=Osman@123
```

## Contact Form Integration
- All contact form submissions are automatically saved to the database
- Users receive immediate feedback on form submission
- Admin dashboard shows real-time data
- Status tracking for lead management

## Security Notes
- Admin session expires after 30 minutes of inactivity
- Password is stored in environment variables
- Database access controlled by Supabase Row Level Security (RLS)
- No admin routes exposed in the URL structure
