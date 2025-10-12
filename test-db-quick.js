// ========================================
// TEST DATABASE CONNECTION
// ========================================
// Run this with: node test-database-connection.js
// ========================================

import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://faoiscbbfjtvpywmddpn.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhb2lzY2JiZmp0dnB5d21kZHBuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg5NDgyNzUsImV4cCI6MjA3NDUyNDI3NX0.crp_UbafreGGA_9H9berxsNYzUSijPzOuAQtC6jT044";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function testDatabase() {
    console.log('🧪 Testing Database Connection...\n');
    
    // Test 1: Connection
    console.log('1️⃣ Testing connection...');
    try {
        const { data, error } = await supabase.from('job_listings').select('count');
        if (error) {
            console.log('❌ Connection test result:', error.message);
            if (error.code === '42P01') {
                console.log('   → Tables don\'t exist yet!');
                console.log('   → Run: fix-job-system-rls-only.sql');
            }
        } else {
            console.log('✅ Connected to Supabase');
        }
    } catch (err) {
        console.log('❌ Connection failed:', err.message);
    }
    console.log('');
    
    // Test 2: Check job_applications table
    console.log('2️⃣ Checking job_applications table...');
    try {
        const { data, error } = await supabase.from('job_applications').select('id').limit(1);
        if (error) {
            console.log('❌ Table check failed:', error.message);
            if (error.code === '42P01') {
                console.log('   → Table does NOT exist');
                console.log('   → Solution: Run fix-job-system-rls-only.sql in Supabase SQL Editor');
            } else if (error.code === 'PGRST116') {
                console.log('   → Table exists but RLS is blocking access');
                console.log('   → Solution: Run fix-job-system-rls-only.sql to set up RLS policies');
            }
        } else {
            console.log('✅ Table exists and accessible');
            console.log(`   Found ${data?.length || 0} applications`);
        }
    } catch (err) {
        console.log('❌ Error:', err.message);
    }
    console.log('');
    
    // Test 3: Check for jobs
    console.log('3️⃣ Checking for active jobs...');
    try {
        const { data, error } = await supabase
            .from('job_listings')
            .select('id, title, is_active')
            .eq('is_active', true);
        
        if (error) {
            console.log('❌ Job check failed:', error.message);
            if (error.code === '42P01') {
                console.log('   → job_listings table does NOT exist');
                console.log('   → Solution: Run fix-job-system-rls-only.sql');
            }
        } else if (!data || data.length === 0) {
            console.log('❌ No active jobs found');
            console.log('   → Solution: Run reset-and-add-sales-job.sql to create Jr Sales Rep job');
        } else {
            console.log('✅ Found', data.length, 'active job(s):');
            data.forEach(job => {
                console.log(`   - ${job.title}`);
            });
        }
    } catch (err) {
        console.log('❌ Error:', err.message);
    }
    console.log('');
    
    // Test 4: Try to insert a test application
    console.log('4️⃣ Testing application submission...');
    try {
        // First get a job ID
        const { data: jobs } = await supabase
            .from('job_listings')
            .select('id')
            .eq('is_active', true)
            .limit(1);
        
        if (!jobs || jobs.length === 0) {
            console.log('❌ Cannot test - no active jobs exist');
            console.log('   → Solution: Run reset-and-add-sales-job.sql first');
        } else {
            const testApp = {
                job_listing_id: jobs[0].id,
                full_name: 'Test User',
                email: 'test@example.com',
                phone: '555-0000',
                current_position: 'Test Position',
                years_of_experience: 2,
                cover_letter: 'This is a test application to verify the database is working correctly.'
            };
            
            const { data, error } = await supabase
                .from('job_applications')
                .insert([testApp])
                .select();
            
            if (error) {
                console.log('❌ Insert failed:', error.message);
                console.log('   Error code:', error.code);
                console.log('   → This is why "Submission Failed" error appears!');
                
                if (error.code === 'PGRST116' || error.message.includes('RLS')) {
                    console.log('   → Solution: Run setup-simple-applications.sql to set up RLS policies');
                } else if (error.code === '42P01') {
                    console.log('   → Solution: Run setup-simple-applications.sql to create tables');
                } else if (error.message.includes('column')) {
                    console.log('   → Solution: Run setup-simple-applications.sql to recreate table with correct columns');
                }
            } else {
                console.log('✅ Test application inserted successfully!');
                console.log('   Application ID:', data[0].id);
                console.log('   → Your application form should work now!');
                
                // Clean up test data
                await supabase.from('job_applications').delete().eq('id', data[0].id);
                console.log('   (Test application cleaned up)');
            }
        }
    } catch (err) {
        console.log('❌ Error:', err.message);
    }
    console.log('');
    
    // Summary
    console.log('═══════════════════════════════════════');
    console.log('📋 SUMMARY');
    console.log('═══════════════════════════════════════');
    console.log('');
    console.log('To fix "Submission Failed" error, you need to:');
    console.log('');
    console.log('1. Open Supabase Dashboard:');
    console.log('   https://supabase.com/dashboard/project/faoiscbbfjtvpywmddpn');
    console.log('');
    console.log('2. Go to: SQL Editor → New Query');
    console.log('');
    console.log('3. Run this file (copy entire file, paste, click RUN):');
    console.log('   ✓ setup-simple-applications.sql');
    console.log('');
    console.log('4. Refresh browser and try again!');
    console.log('');
}

testDatabase().then(() => {
    console.log('✅ Test complete!');
    process.exit(0);
}).catch(err => {
    console.error('❌ Fatal error:', err);
    process.exit(1);
});
